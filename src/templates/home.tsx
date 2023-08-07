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
import i18next from "../components/i18n";

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
      "c_coupons.c_primaryCTA",
      "c_coupons.price",
      "c_coupons.c_tag",
      "c_primaryCTA",
      "c_secondaryCTA",
    ],
    // Defines the scope of entities that qualify for this stream.
    filter: {
      entityIds: ["5923211330787565604"],
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
    lang: document.meta.locale,
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
  const { name, c_coupons, c_primaryCTA, c_secondaryCTA, meta } = document;
  console.log(JSON.stringify(meta));

  const { t } = useTranslation();
  return (
    <>
      <PageLayout>
        <div className="centered-container !max-w-screen-lg">
          <div className="flex justify-center px-8 font-bold uppercase">
            <div className="text-3xl">{i18next.t("startOrder")}</div>
            <div className="flex  items-center border rounded-md bg-red-600 text-white w-fit uppercase px-4  py-2 mx-auto hover:cursor-pointer hover:bg-red-900">
              {c_primaryCTA.label}
            </div>
            <div className="flex  items-center border rounded-md bg-red-600 text-white w-fit uppercase px-4  py-2 mx-auto hover:cursor-pointer hover:bg-red-900">
              {c_secondaryCTA.label}
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
      </PageLayout>
    </>
  );
};

export default Home;
