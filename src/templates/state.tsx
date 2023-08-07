import * as React from "react";
import Banner from "../components/banner";
import BreadCrumbs from "../components/BreadCrumbs";
import "../index.css";
import {
  Template,
  GetPath,
  GetRedirects,
  TemplateConfig,
  TemplateProps,
  TemplateRenderProps,
  GetHeadConfig,
  HeadConfig,
} from "@yext/pages";
import PageLayout from "../components/page-layout";
import { useTranslation } from "react-i18next";

export const config: TemplateConfig = {
  stream: {
    $id: "states",
    filter: {
      savedFilterIds: ["dm_us-directory_address_region"],
    },
    fields: [
      "id",
      "uid",
      "meta",
      "name",
      "description",
      "c_addressRegionDisplayName",
      "slug",
      "dm_directoryParents.name",
      "dm_directoryParents.slug",
      "dm_directoryParents.meta",
      "dm_directoryChildren.name",
      "dm_directoryChildren.slug",
      "dm_directoryChildren.dm_directoryChildrenCount",
    ],
    localization: {
      locales: ["en"],
      primary: false,
    },
  },
};

export const getPath: GetPath<TemplateProps> = ({ document }) => {
  return `${document.slug.toString()}`;
};

export const getHeadConfig: GetHeadConfig<TemplateRenderProps> = ({
  document,
}): HeadConfig => {
  return {
    title: document.name,
    charset: "UTF-8",
    viewport: "width=device-width, initial-scale=1",
    tags: [
      {
        type: "meta",
        attributes: {
          description: document.description,
        },
      },
      // {
      //   type: "link",
      //   attributes: {
      //     rel: "icon",
      //     type: "image/x-icon",
      //     href: Favicon,
      //   },
      // },
    ],
  };
};

const State: Template<TemplateRenderProps> = ({
  relativePrefixToRoot,
  document,
}) => {
  const { name, description, dm_directoryParents, dm_directoryChildren, meta } =
    document;
  const { t, i18n } = useTranslation();
  React.useEffect(() => {
    i18n.changeLanguage(meta.locale);
  }, []);

  const childrenDivs = dm_directoryChildren.map((entity: any) => (
    <div className="border-b pb-2">
      <a
        key="uRL"
        href={relativePrefixToRoot + entity.slug}
        className="font-light text-normal text-blue-700 hover:underline"
      >
        {entity.name} ({entity.dm_directoryChildrenCount})
      </a>
    </div>
  ));

  var updatedDescription;
  if (description && description.includes("United States")) {
    updatedDescription = description.replace(
      "United States",
      "the United States"
    );
  } else {
    updatedDescription = description;
  }

  return (
    <>
      <PageLayout>
        <div className=" px-10">
          <BreadCrumbs
            name={name}
            parents={dm_directoryParents}
            baseUrl={relativePrefixToRoot}
          />
          <div className="section space-y-14 px-10">
            <div className="space-y-6">
              <h1 className="text-left text-2xl">{t("dirTitle")}</h1>
              <Banner
                text={`${
                  dm_directoryChildren &&
                  dm_directoryChildren.flat().reduce(function (a: any, b: any) {
                    return parseInt(b["dm_directoryChildrenCount"]) == null
                      ? a
                      : a + parseInt(b["dm_directoryChildrenCount"]);
                  }, 0)
                }${" "}
                stores in ${name}`}
              />
              <p className="text-2xl text-center">{updatedDescription}</p>
            </div>
            <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-4">
              {childrenDivs}
            </div>
          </div>
        </div>
      </PageLayout>
    </>
  );
};

export default State;
