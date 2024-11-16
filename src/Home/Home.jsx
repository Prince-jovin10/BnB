import React from "react";
import Header from "../bunkandbeyond/components/Header/Header";
import BannerSection from "../bunkandbeyond/components/BannerSection/BannerSection";
import AboutUs from "../bunkandbeyond/components/AboutUs/AboutUs";
import Amenities from "../bunkandbeyond/components/Amenities/Amenities";
import FeaturedRooms from "../bunkandbeyond/components/FeaturedRooms/FeaturedRooms";
import UpcomingProjects from "../bunkandbeyond/components/UpcomingProjects/UpcomingProjects";
import GetInTouch from "../bunkandbeyond/components/GetInTouch/GetInTouch";
import Location from "../bunkandbeyond/components/Location/Location";
import Footer from "../bunkandbeyond/components/Footer/Footer";
import MobileHeader from "../bunkandbeyond/components/MobileHeader/MobileHeader";
import { useMediaQuery } from "react-responsive";
import Style from "./Home.module.css";
import MobileBanner from "../bunkandbeyond/components/MobileBanner/MobileBanner";

import { Element } from "react-scroll";

const Home = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 800px)" });
  return (
    <div className={Style.main}>
      <div>{isMobile ? <MobileHeader /> : <Header />}</div>

      <div>{isMobile ? <MobileBanner /> : <BannerSection />}</div>

      <Element name="about">
      <div>
        <AboutUs />
      </div>
      </Element>

      <div>
        <Amenities />
      </div>

      <div>
        <FeaturedRooms />
      </div>
      <div>
        <UpcomingProjects />
      </div>

      <Element name="contact">
        <div>
          <GetInTouch />
        </div>
      </Element>

      <div>
        <Location />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
