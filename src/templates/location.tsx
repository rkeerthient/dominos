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
import Hours from "../components/hours";
import List from "../components/list";
import PageLayout from "../components/page-layout";
import StaticMap from "../components/static-map";
import "../index.css";
import FAQs from "../components/FAQs";
import ImageCarousel from "../components/ImageCarousel";
import { Image } from "@yext/pages/components";
import Carousel from "../components/Carousel";
import { useState } from "react";
import { Disclosure } from "@headlessui/react";
import {
  ChevronDownIcon,
  MapIcon,
  PhoneIcon,
  ShoppingBagIcon,
  GlobeAltIcon,
} from "@heroicons/react/20/solid";
import { LiaMapMarkerSolid } from "react-icons/lia";
import { BiFoodMenu } from "react-icons/bi";
import HoursText from "../components/HoursText";
import { useTranslation } from "react-i18next";
import i18next from "../components/i18n";
import { useEffect } from "react";
import BreadCrumbs from "../components/BreadCrumbs";

/**
 * Required when Knowledge Graph data is used for a template.
 */
export const config: TemplateConfig = {
  stream: {
    $id: "my-stream-id-1",
    // Specifies the exact data that each generated document will contain. This data is passed in
    // directly as props to the default exported function.
    fields: [
      "id",
      "uid",
      "meta",
      "name",
      "address",
      "mainPhone",
      "description",
      "hours",
      "slug",
      "timezone",
      "featuredMessage",
      "photoGallery",
      "geocodedCoordinate",
      "deliveryHours",
      "takeoutHours",
      "pickupAndDeliveryServices",
      "c_relatedFAQs.name",
      "c_relatedFAQs.answer",
      "c_locationJobs.name",
      "c_locationJobs.c_jobDescription",
      "c_storePromos.name",
      "c_storePromos.description",
      "c_storePromos.photoGallery",
      "c_nearbyStores.name",
      "c_nearbyStores.pickupAndDeliveryServices",
      "c_nearbyStores.photoGallery",
      "c_nearbyStores.hours",
      "c_nearbyStores.description",
      "c_nearbyStores.mainPhone",
      "c_nearbyStores.address",
      "c_nearbyStores.logo",
      "dm_directoryParents.meta",
      "dm_directoryParents.name",
      "dm_directoryParents.slug",
      "dm_directoryParents.dm_directoryChildren.name",
      "dm_directoryParents.dm_directoryChildren.address",
      "dm_directoryParents.dm_directoryChildren.hours",
      "dm_directoryParents.dm_directoryChildren.slug",
      "dm_directoryParents.dm_directoryChildren.timezone",
      "dm_directoryParents.dm_directoryChildren.mainPhone",
    ],
    // Defines the scope of entities that qualify for this stream.
    filter: {
      entityTypes: ["location"],
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
const Location: Template<TemplateRenderProps> = ({
  document,
  relativePrefixToRoot,
}) => {
  const {
    name,
    address,
    hours,
    mainPhone,
    geocodedCoordinate,
    pickupAndDeliveryServices,
    deliveryHours,
    featuredMessage,
    takeoutHours,
    c_locationJobs,
    c_relatedFAQs,
    c_storePromos,
    meta,
    description,
    photoGallery,
    c_nearbyStores,
    dm_directoryParents,
  } = document;

  const [activeAccordion, setActiveAccordion] = useState(null);
  const accordions = [
    { hours: hours, title: "Store", type: "hours" },
    {
      hours: deliveryHours,
      title: "Delivery",
      type: "deliveryHours",
    },
    {
      hours: takeoutHours,
      title: "Takeaway",
      type: "takeoutHours",
    },
  ];
  const { t, i18n } = useTranslation();
  useEffect(() => {
    i18n.changeLanguage(meta.locale);
  }, []);
  const handleAccordionClick = (index: any) => {
    setActiveAccordion((prevIndex) => (prevIndex === index ? null : index));
  };
  return (
    <>
      <PageLayout>
        <div className="px-12">
          <BreadCrumbs
            name={name}
            parents={dm_directoryParents}
            baseUrl={relativePrefixToRoot}
          ></BreadCrumbs>
        </div>
        {geocodedCoordinate && (
          <StaticMap
            latitude={geocodedCoordinate.latitude}
            longitude={geocodedCoordinate.longitude}
          ></StaticMap>
        )}
        <div className="centered-container ">
          <div className="section">
            <div className="grid grid-cols-3 justify-between w-full gap-8 -mt-48 -mb-24">
              <div className="bg-white shadow leading-10 border h-fit container">
                {featuredMessage && featuredMessage.url && (
                  <nav
                    className="navigation text-sm text-white"
                    style={{ background: "#006491" }}
                  >
                    <a href={featuredMessage.url}>
                      {featuredMessage.description}
                    </a>
                  </nav>
                )}
                <div className=" flex flex-col p-8 justify-between gap-y-2">
                  <h1 className="font-semibold text-2xl">{name}</h1>

                  <div className="leading-loose items-baseline flex  gap-2">
                    <MapIcon className="h-4 w-4" />
                    <div className="text-lg flex flex-col gap-1  ">
                      <div>{address.line1}</div>
                      <div>
                        {address.city}, {address.region} {address.postalCode}
                      </div>
                    </div>
                  </div>
                  <div className="flex leading-loose items-center gap-2">
                    <PhoneIcon className="h-4 w-4" />
                    {mainPhone && (
                      <span className="ml-2">
                        {mainPhone
                          .replace("+1", "")
                          .replace(/\D+/g, "")
                          .replace(/(\d{3})(\d{3})(\d{4})/, "($1) $2-$3")}
                      </span>
                    )}
                  </div>
                  <div className="grid grid-cols-2 gap-4 mt-4 text-sm">
                    <div className="flex  items-center border rounded-md bg-red-600 text-white w-full uppercase px-2  py-2 mx-auto hover:cursor-pointer hover:bg-red-900">
                      <ShoppingBagIcon className="w-6 h-6 inline-block mr-2" />
                      {t("orderNow")}
                    </div>
                    <div className="flex items-center border rounded-md bg-red-600 text-white w-full uppercase px-2  py-2 mx-auto hover:cursor-pointer hover:bg-red-900">
                      <LiaMapMarkerSolid className="w-6 h-6 inline-block mr-2" />
                      {t("getDirections")}
                    </div>
                    <div className="flex items-center border rounded-md bg-red-600 text-white w-full uppercase px-2  py-2 mx-auto hover:cursor-pointer hover:bg-red-900">
                      <BiFoodMenu className="w-6 h-6 inline-block mr-2" />
                      {t("viweMenu")}
                    </div>
                    <div className="flex items-center border rounded-md bg-red-600 text-white w-full uppercase px-2 py-2 mx-auto hover:cursor-pointer hover:bg-red-900">
                      <GlobeAltIcon className="w-6 h-6 inline-block mr-2" />
                      {t("visitUs")}
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white shadow border py-8 px-3">
                <div className="font-semibold text-2xl">{t("hours")}</div>
                <div className="flex flex-col gap-4">
                  {accordions.map((accordion, index) => {
                    if (accordion.hours) {
                      return (
                        <div key={index}>
                          <Disclosure open={activeAccordion === index}>
                            {({ open }) => (
                              <>
                                <Disclosure.Button
                                  onClick={() => handleAccordionClick(index)}
                                  as="button"
                                  className="flex justify-between w-full p-4    rounded-sm uppercase px-2 mx-auto hover:cursor-pointer  transition-all duration-300 ease-in-out"
                                >
                                  <div className="flex gap-2 w-full min-w-0">
                                    <div>{accordion.title} - </div>
                                    <HoursText
                                      document={document}
                                      type={accordion.type}
                                    ></HoursText>
                                  </div>
                                  <ChevronDownIcon
                                    className={`${
                                      open ? "transform rotate-180" : ""
                                    } w-5 h-5`}
                                  />
                                </Disclosure.Button>
                                <Disclosure.Panel
                                  className={`${
                                    open
                                      ? "block transition-all duration-300 ease-in-out"
                                      : "hidden"
                                  } `}
                                  key={index}
                                >
                                  <Hours
                                    hours={accordion.hours}
                                    title={accordion.title}
                                  />
                                </Disclosure.Panel>
                              </>
                            )}
                          </Disclosure>
                        </div>
                      );
                    } else {
                      return null; // If hours are falsy, return null to skip rendering this accordion
                    }
                  })}
                </div>
              </div>
              <div className="bg-white shadow border p-8 text-xl">
                {pickupAndDeliveryServices && (
                  <List list={pickupAndDeliveryServices}></List>
                )}
              </div>
            </div>
          </div>
        </div>
        {photoGallery && (
          <>
            <div className="w-full bg-white py-14">
              <div className="text-4xl mx-auto text-center font-bold  mb-8 ">
                {t("menuItems")}
              </div>
              <ImageCarousel data={photoGallery} />
            </div>
          </>
        )}
        {c_relatedFAQs && (
          <div className="centered-container">
            <div className="text-4xl mx-auto text-center font-bold  mb-8 ">
              {t("faqs")}
            </div>
            {c_relatedFAQs.map((item: any, index: any) => (
              <div key={index}>
                <FAQs faq={item}></FAQs>
              </div>
            ))}
          </div>
        )}
        {c_storePromos && (
          <div className="bg-white py-14 px-8">
            <div className="text-4xl mx-auto text-center font-bold  mb-8 ">
              {t("promos")}
            </div>
            <div className=" flex gap-4 justify-center">
              {c_storePromos.map((item, index) => (
                <div
                  key={index}
                  className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32 text-white"
                >
                  <div className="absolute inset-0 z-10 bg-black opacity-60"></div>

                  <Image
                    image={item.photoGallery[0]}
                    className="absolute inset-0 z-0 h-full w-full object-cover object-right md:object-center"
                  ></Image>

                  <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-20">
                    <div className="mx-auto max-w-2xl lg:mx-0">
                      <h2 className="text-4xl font-bold tracking-tight sm:text-6xl">
                        {item.name}
                      </h2>
                      <p className="mt-6 text-lg leading-8">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
        {c_locationJobs && (
          <div className="centered-container ">
            <div className="text-4xl mx-auto text-center font-bold mb-8 ">
              {t("jobs")}
            </div>
            {c_locationJobs.map((item: any, index: any) => (
              <div key={index}>
                <FAQs faq={item}></FAQs>
              </div>
            ))}
          </div>
        )}
        <div className="flex bg-white gap-6">
          <div className="w-1/2">
            <img
              src="https://www.chutegerdeman.com/wp-content/uploads/2017/07/Dominos_1200_1.jpg"
              alt=""
              className="h-full"
            />
          </div>

          <div className="w-1/2 text-xl my-auto">
            <div className="w-3/4 flex flex-col gap-3 ">
              <div className="font-bold text-3xl">About us</div>
              <div>{description}</div>
            </div>
          </div>
        </div>
        {c_nearbyStores && (
          <div className="centered-container ">
            <div className="text-4xl mx-auto text-center font-bold mb-8">
              {t("nearBy")}
            </div>
            <Carousel data={c_nearbyStores} slidesToShow={4} />
          </div>
        )}
      </PageLayout>
    </>
  );
};

export default Location;
