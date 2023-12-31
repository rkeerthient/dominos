/**
 * This is an example of how to create a template that makes use of streams data.
 * The stream data originates from Yext's Knowledge Graph. When a template in
 * concert with a stream is built by the Yext Sites system, a static html page
 * is generated for every corresponding (based on the filter) stream document.
 *
 * Another way to think about it is that a page will be generated using this
 * template for every eligible entity in your Knowledge Graph.
 */

import {
  GetHeadConfig,
  GetPath,
  GetRedirects,
  HeadConfig,
  Template,
  TemplateConfig,
  TemplateProps,
  TemplateRenderProps,
} from "@yext/pages";
import * as React from "react";
import PageLayout from "../components/page-layout";
import "../index.css";
import Coupon from "../components/Coupon";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import { Image } from "@yext/pages/components";
import { BiFoodMenu } from "react-icons/bi";

/**
 * Required when Knowledge Graph data is used for a template.
 */
export const config: TemplateConfig = {
  stream: {
    $id: "my-stream-home",
    // Specifies the exact data that each generated document will contain. This data is passed in
    // directly as props to the default exported function.
    fields: [
      "id",
      "uid",
      "meta",
      "name",
      "slug",
      "c_coupons.name",
      "c_coupons.primaryPhoto",
      "c_coupons.description",
      "c_menuBGImage",
      "c_coupons.c_primaryCTA",
      "c_coupons.price",
      "c_coupons.c_tag",
      "c_primaryCTA",
      "c_secondaryCTA",
    ],
    // Defines the scope of entities that qualify for this stream.
    filter: {
      entityIds: ["5923211330787565604", "5747490623663977224"],
    },
    // The entity language profiles that documents will be generated for.
    localization: {
      locales: ["en", "es"],
      primary: false,
    },
  },
};

/**
 * Defines the path that the generated file will live at for production.
 *
 * NOTE: This currently has no impact on the local dev path. Local dev urls currently
 * take on the form: featureName/entityId
 */
export const getPath: GetPath<TemplateProps> = ({ document }) => {
  return document.slug;
};

/**
 * Defines a list of paths which will redirect to the path created by getPath.
 *
 * NOTE: This currently has no impact on the local dev path. Redirects will be setup on
 * a new deploy.
 */
export const getRedirects: GetRedirects<TemplateProps> = ({ document }) => {
  return [`index-old/${document.slug}`];
};

/**
 * This allows the user to define a function which will take in their template
 * data and procude a HeadConfig object. When the site is generated, the HeadConfig
 * will be used to generate the inner contents of the HTML document's <head> tag.
 * This can include the title, meta tags, script tags, etc.
 */
export const getHeadConfig: GetHeadConfig<TemplateRenderProps> = ({
  relativePrefixToRoot,
  path,
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
          name: "description",
          content: document.description,
        },
      },
    ],
  };
};

/**
 * This is the main template. It can have any name as long as it's the default export.
 * The props passed in here are the direct stream document defined by `config`.
 *
 * There are a bunch of custom components being used from the src/components folder. These are
 * an example of how you could create your own. You can set up your folder structure for custom
 * components any way you'd like as long as it lives in the src folder (though you should not put
 * them in the src/templates folder as this is specific for true template files).
 */
const Home: Template<TemplateRenderProps> = ({
  relativePrefixToRoot,
  path,
  document,
}) => {
  const { t, i18n } = useTranslation();

  const { name, c_coupons, c_menuBGImage, c_primaryCTA, c_secondaryCTA, meta } =
    document;
  useEffect(() => {
    const lng = navigator.language;
    i18n.changeLanguage(meta.locale);
  }, []);
  return (
    <>
      <PageLayout>
        <div className="centered-container !max-w-screen-lg !pb-0">
          <div className="relative">
            <div className="flex items-center">
              <div className="flex-1 h-0.5 bg-gray-300"></div>
              <div className="px-4">
                <div className="flex justify-center px-8 font-bold uppercase gap-4">
                  <div className="text-3xl">{t("startOrder")}</div>

                  <div className="flex  items-center border rounded-md bg-red-600 text-white w-fit uppercase px-4  py-2 mx-auto hover:cursor-pointer hover:bg-red-900">
                    {c_primaryCTA.label}
                  </div>
                  <div className="flex  items-center border rounded-md bg-red-600 text-white w-fit uppercase px-4  py-2 mx-auto hover:cursor-pointer hover:bg-red-900">
                    {c_secondaryCTA.label}
                  </div>
                </div>
              </div>
              <div className="flex-1 h-0.5 bg-gray-300"></div>
            </div>
          </div>
        </div>

        <div className="centered-container  grid grid-cols-2 gap-3 !max-w-screen-xl">
          {c_coupons.map((item, index) => {
            return (
              <div key={index}>
                <Coupon data={item}></Coupon>
              </div>
            );
          })}
        </div>
        <div className="centered-container">
          <div className="text-4xl mx-auto text-center font-bold  mb-8 capitalize text-gray-400">
            {t("browseMenu")}
          </div>
          <div className="h-[300px] relative isolate overflow-hidden py-8 text-white  ">
            <div className="absolute inset-0 z-10 bg-grsay-700 opacity-60"></div>

            <Image
              image={c_menuBGImage}
              className="absolute inset-0 z-0 h-full w-full object-cover object-center mx-auto"
              layout="aspect"
            ></Image>
            <div
              className="mr-auto my-auto lg:px-8 z-20 space-y-8 flex flex-col w-fit justify-between"
              style={{
                marginTop: " 5%",
                marginLeft: "4%",
                filter: "drop-shadow(rgb(0, 0, 0) 0px 0.05em 0.075em)",
              }}
            >
              <div className="mr-auto max-w-2xl lg:mx-0  w-full ">
                <h2 className="text-4xl font-bold tracking-tight mx-auto flex justify-center">
                  <BiFoodMenu style={{ width: "75px", height: "75px" }} />
                </h2>
              </div>
              <div className="flex items-center border rounded-md bg-red-600 text-white w-fit uppercase px-4 py-2 ml-auto hover:cursor-pointer hover:bg-red-900 ">
                {t("viewFullMenu")}
              </div>
            </div>
          </div>
        </div>
      </PageLayout>
    </>
  );
};

export default Home;
