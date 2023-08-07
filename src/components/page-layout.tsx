import * as React from "react";
import Site from "../types/Site";
import Header from "./header";
import Footer from "./footer";
import "./i18n";
import {
  provideHeadless,
  SearchHeadlessProvider,
} from "@yext/search-headless-react";
import { LocationsProvider } from "../context/LocationsContext";
import { MyContextProvider } from "../context/context";
import { config } from "../templates/location";
import searchConfig from "./searchConfig";

type Props = {
  _site?: Site;
  children?: React.ReactNode;
};
export const searcher = provideHeadless(searchConfig);

const PageLayout = ({ _site, children }: Props) => {
  return (
    <SearchHeadlessProvider searcher={searcher}>
      <MyContextProvider>
        <LocationsProvider>
          <div className="min-h-screen bg-[#f2f2f2]">
            <Header _site={_site} />
            {children}
            <Footer _site={_site}></Footer>
          </div>
        </LocationsProvider>
      </MyContextProvider>{" "}
    </SearchHeadlessProvider>
  );
};

export default PageLayout;
