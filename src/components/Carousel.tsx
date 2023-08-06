import * as React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Image } from "@yext/pages/components";
import Cta from "./cta";
import HoursText from "./HoursText";
import { BsPhone } from "react-icons/bs";
import { LiaMapMarkerSolid } from "react-icons/lia";
import { PhoneIcon } from "@heroicons/react/20/solid";

const Carousel = (props: any) => {
  const { data } = props;

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: props.slidesToShow,
    slidesToScroll: 1,
    initialSlide: 0,
    adaptiveHeight: true,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <span className="nb">
      <Slider {...settings}>
        {data &&
          data.map((item: any, index: any) => (
            <div
              key={index}
              className="p-4 border bg-white rounded-lg shadow-md"
            >
              <div className="flex flex-col space-y-3">
                <div className="flex justify-between items-center">
                  <div className="text-lg font-semibold">{item.name}</div>
                  <Image
                    image={item.logo}
                    height={50}
                    width={50}
                    layout="fixed"
                  ></Image>
                </div>
                <div className="text-gray-600 space-y-3">
                  <div>
                    <p>{item.address.line1}</p>
                    <p>
                      {item.address.city}, {item.address.region} -{" "}
                      {item.address.postalCode}
                    </p>
                  </div>

                  {item.mainPhone && (
                    <div className="flex leading-loose items-center gap-2">
                      <PhoneIcon className="h-4 w-4" />
                      {item.mainPhone && (
                        <span className="ml-2">
                          {item.mainPhone
                            .replace("+1", "")
                            .replace(/\D+/g, "")
                            .replace(/(\d{3})(\d{3})(\d{4})/, "($1) $2-$3")}
                        </span>
                      )}
                    </div>
                  )}
                  {item.pickupAndDeliveryServices && (
                    <ul className=" flex flex-wrap gap-2 ">
                      {item.pickupAndDeliveryServices.map(
                        (nItem: any, index: number) => (
                          <li
                            key={index}
                            className="bg-red-100 px-2 py-1 rounded-md text-sm font-semibold"
                          >
                            {nItem}
                          </li>
                        )
                      )}
                    </ul>
                  )}
                </div>
                <div>
                  <HoursText document={item} type={"hours"} />
                </div>
                <div className=" mx-auto flex items-center border rounded-md bg-red-600 text-white w-fit uppercase px-2  py-2 hover:cursor-pointer hover:bg-red-900">
                  <LiaMapMarkerSolid className="w-6 h-6 inline-block mr-2" />
                  Get Directions
                </div>
              </div>
            </div>
          ))}
      </Slider>
    </span>
  );
};

export default Carousel;
