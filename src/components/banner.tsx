import * as React from "react";
import { useTranslation } from "react-i18next";

type Banner = {
  text?: string;
  children?: React.ReactNode;
};

const Banner = (props: Banner) => {
  const { text, children } = props;
  const { t, i18n } = useTranslation();

  return (
    <>
      <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32 text-white">
        <div className="absolute inset-0 z-10 bg-black opacity-60"></div>

        <img
          src={
            "https://images.deliveryhero.io/image/fd-ph/LH/i8kf-hero.jpg?width=2000&height=500&quality=45"
          }
          className="absolute inset-0 z-0 h-full w-full object-cover object-right md:object-center"
        ></img>

        <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-20 flex justify-center">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-4xl font-bold tracking-tight sm:text-6xl text-center">
              Domino's
            </h2>
            <p className="mt-6 text-lg leading-8">{t("bannerText")}</p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Banner;
