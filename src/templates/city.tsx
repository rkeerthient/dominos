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
import HoursText from "../components/HoursText";
import { Address } from "@yext/react-components";
import PageLayout from "../components/page-layout";
import { useTranslation } from "react-i18next";

export const config: TemplateConfig = {
  stream: {
    $id: "cities",
    filter: {
      savedFilterIds: ["dm_us-directory_address_city"],
    },
    fields: [
      "id",
      "uid",
      "meta",
      "name",
      "description",
      "slug",
      "hours",
      "dm_directoryParents.name",
      "dm_directoryParents.slug",
      "dm_directoryParents.meta",
      "dm_directoryParents.c_addressRegionDisplayName",
      "dm_directoryChildren.name",
      "dm_directoryChildren.address",
      "dm_directoryChildren.hours",
      "dm_directoryChildren.mainPhone",
      "dm_directoryChildren.slug",
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

const City: Template<TemplateRenderProps> = ({
  relativePrefixToRoot,
  document,
}) => {
  const {
    name,
    description,
    meta,
    slug,
    dm_directoryParents,
    dm_directoryChildren,
  } = document;
  const { t, i18n } = useTranslation();
  React.useEffect(() => {
    i18n.changeLanguage(meta.locale);
  }, []);
  const childrenDivs = dm_directoryChildren.map((entity: any) => (
    <div className="border-b flex pb-2 justify-between items-center  px-16">
      <p>
        <a
          className="font-medium !text-lg text-blue-700 hover:underline"
          href={relativePrefixToRoot + entity.slug}
        >
          {entity.name}
        </a>
      </p>
      <div>
        {entity.hours && <HoursText document={entity} type={"hours"} />}
        <Address address={entity.address}></Address>
      </div>

      <div className="flex flex-col pt-1">
        <a
          key="uRL"
          href={relativePrefixToRoot + entity.slug}
          className="font-light text-base	text-blue-700 hover:underline"
        >
          View Store Page
        </a>
        <a
          key="uRL"
          className="font-light text-base	text-blue-700 hover:underline"
        >
          Get Directions
        </a>
      </div>
    </div>
  ));

  return (
    <>
      <PageLayout>
        <div className="max-w-screen-2xl">
          <div className=" px-10">
            <BreadCrumbs
              name={name}
              parents={dm_directoryParents}
              baseUrl={relativePrefixToRoot}
            ></BreadCrumbs>
            <div className="space-y-6 mt-4">
              <h1 className="text-left text-2xl">{t("dirTitle")}</h1>
              <Banner
                text={`${dm_directoryChildren.length} stores in ${name},${" "}
              ${slug.split("/")[0].toUpperCase()}`}
              />

              <p className="text-2xl text-center">{`${
                dm_directoryChildren.length
              }${" "}
                stores found in ${name}`}</p>

              <p className="text-2xl text-center">{description}</p>
            </div>
            <div className="flex flex-col gap-y-5">{childrenDivs}</div>
          </div>
        </div>
      </PageLayout>
    </>
  );
};

export default City;
