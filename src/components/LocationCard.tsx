import * as React from "react";
import { CardComponent } from "@yext/search-ui-react";
import { Location } from "../types/search/locations";

const metersToMiles = (meters: number) => {
  const miles = meters * 0.000621371;
  return miles.toFixed(2);
};

const LocationCard: CardComponent<Location> = ({ result }) => {
  const { address } = result.rawData;
  var gmaps = "https://www.google.com/maps/dir/?api=1&destination=";
  var gmapsAddress = gmaps.concat(
    address.line1,
    " ",
    address.city,
    " ",
    address.region,
    " ",
    address.postalCode
  );
  var gmapsLink = gmapsAddress.concat('"');

  return (
    <div className="p-4 border gap-y-4 hover:border hover:border-gray-400 hovCards">
      <a target="_blank" href={`${result.rawData.slug}`} className="space-y-6">
        <div className="flex justify-between">
          <h1 className="text-slate-900 text-3xl">{result.rawData.name}</h1>
          <p className="mt-1 text-xs italic text-slate-500">
            {metersToMiles(result.distance ?? 0)} mi
          </p>
        </div>

        <div>
          <p className="  text-slate-700">{address.line1}</p>
          <p className="  text-slate-700">
            {address.city}, {address.region}, {address.postalCode}{" "}
          </p>
        </div>
        <div className="mt-4">
          <a
            target="_blank"
            href={gmapsLink}
            className="flex  border rounded-md bg-red-600   text-white w-fit uppercase px-2  py-2  hover:cursor-pointer hover:bg-red-900"
          >
            Get Directions
          </a>
        </div>
      </a>
    </div>
  );
};

export default LocationCard;
