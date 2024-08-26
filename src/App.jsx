import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

// components
import Header from "./components/header";
import Footer from "./components/footer";

// style
import styles from "./App.module.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/bundle";

function App() {
  return (
    <>
      <Header />
      <main className={styles.main}>
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
        <div className={styles.products}>
          <p>
            You are on amazon.com. You can also shop on Amazon Iran for millions
            of products with fast local delivery. Click here to go to amazon.de
          </p>
          <div>
            <div className={styles.product}>
              <img src="./backpack.jpg" alt="backpack" />
              <h2>Backpack</h2>
              <div className={styles.price}>
                <span>$</span>
                <span>99000</span>
                <span>99</span>
              </div>
              <span className={styles.discount}>$1200</span>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Provident a aperiam quo unde aspernatur culpa nobis eaque sit
                ...
              </p>
              <div className={styles.stars}>
                <img src="./star.avif" alt="" />
                <img src="./star.avif" alt="" />
                <img src="./star.avif" alt="" />
                <img src="./star.avif" alt="" />
                <img src="./star.avif" alt="" />
                <span>1,752</span>
              </div>
              <a href="#">see more...</a>
            </div>
            <div className={styles.product}>
              <img src="./headset.jpg" alt="headset" />
              <h2>Headset</h2>
              <div className={styles.price}>
                <span>$</span>
                <span>99000</span>
                <span>99</span>
              </div>
              <span className={styles.discount}>$1200</span>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Provident a aperiam quo unde aspernatur culpa nobis eaque sit
                ...
              </p>
              <div className={styles.stars}>
                <img src="./star.avif" alt="" />
                <img src="./star.avif" alt="" />
                <img src="./star.avif" alt="" />
                <img src="./star.avif" alt="" />
                <img src="./star.avif" alt="" />
                <span>1,752</span>
              </div>
              <a href="#">see more...</a>
            </div>
            <div className={styles.product}>
              <img src="./ski.png" />
              <h2>Ski Stick</h2>
              <div className={styles.price}>
                <span>$</span>
                <span>99000</span>
                <span>99</span>
              </div>
              <span className={styles.discount}>$1200</span>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Provident a aperiam quo unde aspernatur culpa nobis eaque sit
                ...
              </p>
              <div className={styles.stars}>
                <img src="./star.avif" alt="" />
                <img src="./star.avif" alt="" />
                <img src="./star.avif" alt="" />
                <img src="./star.avif" alt="" />
                <img src="./star.avif" alt="" />
                <span>1,752</span>
              </div>
              <a href="#">see more...</a>
            </div>
            <div className={styles.product}>
              <img src="./laptop.avif" />
              <h2>Laptop</h2>
              <div className={styles.price}>
                <span>$</span>
                <span>99000</span>
                <span>99</span>
              </div>
              <span className={styles.discount}>$1200</span>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Provident a aperiam quo unde aspernatur culpa nobis eaque sit
                ...
              </p>
              <div className={styles.stars}>
                <img src="./star.avif" alt="" />
                <img src="./star.avif" alt="" />
                <img src="./star.avif" alt="" />
                <img src="./star.avif" alt="" />
                <img src="./star.avif" alt="" />
                <span>1,752</span>
              </div>
              <a href="#">see more...</a>
            </div>
            <div className={styles.product}>
              <img src="./mobile.avif" />
              <h2>Mobile</h2>
              <div className={styles.price}>
                <span>$</span>
                <span>99000</span>
                <span>99</span>
              </div>
              <span className={styles.discount}>$1200</span>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Provident a aperiam quo unde aspernatur culpa nobis eaque sit
                ...
              </p>
              <div className={styles.stars}>
                <img src="./star.avif" alt="" />
                <img src="./star.avif" alt="" />
                <img src="./star.avif" alt="" />
                <img src="./star.avif" alt="" />
                <img src="./star.avif" alt="" />
                <span>1,752</span>
              </div>
              <a href="#">see more...</a>
            </div>
            <div className={styles.product}>
              <img src="./shirt.webp" />
              <h2>Shirt</h2>
              <div className={styles.price}>
                <span>$</span>
                <span>99000</span>
                <span>99</span>
              </div>
              <span className={styles.discount}>$1200</span>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Provident a aperiam quo unde aspernatur culpa nobis eaque sit
                ...
              </p>
              <div className={styles.stars}>
                <img src="./star.avif" alt="" />
                <img src="./star.avif" alt="" />
                <img src="./star.avif" alt="" />
                <img src="./star.avif" alt="" />
                <img src="./star.avif" alt="" />
                <span>1,752</span>
              </div>
              <a href="#">see more...</a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
