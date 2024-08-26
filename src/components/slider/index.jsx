import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

//styles
import styles from "./style.module.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/bundle";

function Slide() {
  return (
    <div className={styles.slider}>
      <Swiper
        // rewind={true}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: true,
        }}
        navigation={true}
        modules={[Autoplay, Navigation]}
        className={styles.mySwiper}
      >
        <SwiperSlide>
          <img src="./slide1.avif" alt="slide" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./slide2.avif" alt="slide" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./slide3.avif" alt="slide" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="./slide4.avif" alt="slide" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Slide;
