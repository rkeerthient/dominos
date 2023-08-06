import * as React from "react";

type Coordinates = {
  latitude: string;
  longitude: string;
};

const StaticMap = (props: Coordinates) => {
  const { latitude, longitude } = props;

  return (
    <div
      className="h-[500px] "
      style={{
        background: `url(https://maps.googleapis.com/maps/api/staticmap?center=${latitude},${longitude}&zoom=14&size=600x400&maptype=roadmap&markers=color:red%7Clabel:LL%7C${latitude},${longitude}&key=AIzaSyDZNQlSlEIkFAct5VzUtsP4dSbvOr2bE18)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        width: "100vw",
      }}
    ></div>
  );
};

export default StaticMap;
