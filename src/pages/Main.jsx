import React, { useState } from "react";
import CalendarBox from "../components/CalendarBox";
import TextPreview from "../components/TextPreview";
import Navigation from "../components/Navigation";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
// import Swiper core and required modules
import SwiperCore, { Autoplay, Pagination } from "swiper";

import styles from "./Main.module.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExpandAlt, faCompressAlt } from "@fortawesome/free-solid-svg-icons";

// install Swiper modules
SwiperCore.use([Autoplay, Pagination]);

const Main = () => {
  const [fullScreen, setFullScreen] = useState(false);

  console.log(fullScreen);

  return (
    <div className={fullScreen ? styles.dimmer : styles.container}>
      <CalendarBox fullScreen={fullScreen} />

      <FontAwesomeIcon
        icon={fullScreen ? faCompressAlt : faExpandAlt}
        className={styles.fullScreenBtn}
        onClick={() => setFullScreen(!fullScreen)}
      />

      <Swiper
        slidesPerView={3}
        direction={"vertical"}
        spaceBetween={10}
        className={fullScreen ? styles.mySwiperMoved : styles.mySwiper}
      >
        <SwiperSlide>
          <TextPreview id={0} />
        </SwiperSlide>
        <SwiperSlide>
          <TextPreview id={1} />
        </SwiperSlide>
        <SwiperSlide>
          <TextPreview id={2} />
        </SwiperSlide>
        <SwiperSlide>
          <TextPreview id={3} />
        </SwiperSlide>
        <SwiperSlide>
          <TextPreview id={4} />
        </SwiperSlide>
      </Swiper>

      <Navigation fullScreen={fullScreen} />
    </div>
  );
};

export default Main;
