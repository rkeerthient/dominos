import { Image } from "@yext/react-components";
import * as React from "react";

const Coupon = ({ data }: any) => {
  const { name, primaryPhoto, c_primaryCTA, description, price, c_tag } = data;
  return (
    <div className="min-h-96 relative isolate overflow-hidden py-8 text-white mx-auto">
      <div className="absolute inset-0 z-10 bg-grsay-700 opacity-60"></div>

      <Image
        image={primaryPhoto}
        className="absolute inset-0 z-0 h-full w-full object-cover object-center "
      ></Image>

      <div
        className="mx-auto px-6 lg:px-8 z-20 space-y-8"
        style={{ filter: "drop-shadow(rgb(0, 0, 0) 0px 0.05em 0.075em)" }}
      >
        <div className="uppercase bg-white border px-4 py-2 text-lg text-black w-fit">
          {c_tag}
        </div>
        <div className="mx-auto max-w-2xl lg:mx-0 w-2/3">
          <h2 className="text-4xl font-bold tracking-tight">{name}</h2>
          <p className="mt-6 text-lg leading-8">{description}</p>
          <div
            className="text-5xl flex gap-2 items-start"
            style={{
              textShadow:
                " rgb(227, 24, 55) -1px 1px 0px, rgb(227, 24, 55) -2px 2px 0px, rgb(227, 24, 55) -3px 3px 0px, rgb(227, 24, 55) -4px 4px 0px, rgb(227, 24, 55) -5px 5px 0px, rgb(227, 24, 55) -6px 6px 0px, rgb(227, 24, 55) -7px 7px 0px",
            }}
          >
            <span className="text-3xl">
              {price.currencyCode === "USD" ? "$" : "SR"}
            </span>
            <span className="flex gap-1 items-start">
              {price.value.split(".")[0]}
              <span className="text-3xl flex flex-col justify-normal !space-y-2">
                <span>{price.value.split(".")[1]}</span>
                <span>each</span>
              </span>
            </span>
          </div>
        </div>
        <div className="flex items-center border rounded-md bg-red-600 text-white w-fit uppercase px-4  py-2 ml-auto hover:cursor-pointer hover:bg-red-900 ">
          {c_primaryCTA.label}
        </div>
      </div>
    </div>
  );
};

export default Coupon;
