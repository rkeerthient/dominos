import * as React from "react";

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
import { useState } from "react";
import PageLayout from "../components/page-layout";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import LocationPage from "../components/locationPage";

export const config: TemplateConfig = {
  stream: {
    $id: "root",
    filter: {
      savedFilterIds: ["dm_us-directory"],
    },
    fields: [
      "id",
      "uid",
      "meta",
      "name",
      "slug",
      "dm_directoryChildren.name",
      "dm_directoryChildren.slug",
      "dm_directoryChildren.dm_directoryChildrenCount",
      "dm_directoryChildren.c_addressRegionDisplayName",
    ],
    localization: {
      locales: ["en"],
      primary: false,
    },
  },
};

export const getPath: GetPath<TemplateProps> = () => {
  return `locations`;
};

export const getHeadConfig: GetHeadConfig<
  TemplateRenderProps
> = (): HeadConfig => {
  return {
    title: "Home Page",
    charset: "UTF-8",
    viewport: "width=device-width, initial-scale=1",
    tags: [
      {
        type: "meta",
        attributes: {
          description:
            "This is a description for the Turtlehead Tacos directory home page.",
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

const Index: Template<TemplateRenderProps> = ({
  relativePrefixToRoot,
  document,
}) => {
  const { dm_directoryChildren, meta } = document;
  const [isDir, setIsDir] = useState(true);
  const { t, i18n } = useTranslation();
  useEffect(() => {
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

  return (
    <>
      <PageLayout>
        <div className="centered-container">
          <ul className="w-full flex justify-between">
            <li
              className={`${
                isDir && `bg-gray-500 text-white`
              }  hover:cursor-pointer text-center border w-1/2 py-4 font-bold `}
              onClick={() => setIsDir(true)}
            >
              Directory
            </li>
            <li
              className={`${
                !isDir && `bg-gray-500 text-white`
              } hover:cursor-pointer text-center border w-1/2 py-4 font-bold`}
              onClick={() => setIsDir(false)}
            >
              Locator
            </li>
          </ul>
          {isDir ? (
            <>
              {/* <BreadCrumbs name="Home" baseUrl={relativePrefixToRoot} /> */}
              <div className="section space-y-6 px-10">
                <h1 className="text-left text-2xl">{t("dirTitle")}</h1>
                <p className="text-normal font-semibold text-left">
                  {dm_directoryChildren &&
                    dm_directoryChildren
                      .flat()
                      .reduce(function (a: any, b: any) {
                        return parseInt(b["dm_directoryChildrenCount"]) == null
                          ? a
                          : a + parseInt(b["dm_directoryChildrenCount"]);
                      }, 0)}{" "}
                  {t("locInUS")}
                </p>
                <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-4">
                  {childrenDivs}
                </div>
              </div>
            </>
          ) : (
            <div className="mt-6">
              <LocationPage />
            </div>
          )}
        </div>
      </PageLayout>
    </>
  );
};

export default Index;
