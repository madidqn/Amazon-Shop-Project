import { useState } from "react";
import Select from "react-select";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

//icons
import { FaMapMarkerAlt, FaSearch, FaBars } from "react-icons/fa";

// style
import styles from "./App.module.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/bundle";

const options = [
  { value: "all", label: "All" },
  { value: "mobiles", label: "Mobiles" },
  { value: "laptops", label: "Laptops" },
  { value: "mobile accessories", label: "Mobile accessories" },
];

function App() {
  const [selectedOption, setSelectedOption] = useState(null);
  // function ChangeOption(option) {
  //   setSelectedOption(option);
  // }
  return (
    <>
      <header className={styles.header}>
        <div className={styles.searchbar}>
          <img src="./logo.avif" alt="logo" className={styles.logo} />
          <div className={styles.deliver}>
            <FaMapMarkerAlt />
            <span>
              <span>Deliver to </span>
              <span> Iran</span>
            </span>
          </div>
          <div className={styles.inputSearch}>
            <form action="">
              <Select
                value={selectedOption}
                placeholder="All"
                onChange={setSelectedOption}
                options={options}
              />
              <input type="text" placeholder="Search Amazon" />
              <button>
                <FaSearch className={styles.FaSearch} />
              </button>
            </form>
          </div>
          <div className={styles.language}>
            <img src="./language.avif" alt="language" />
            <span>EN</span>
          </div>
          <div className={styles.signIn}>
            <span>Hello, sign in</span>
            <span>Account & Lists</span>
          </div>
          <div className={styles.signIn}>
            <span>Returns</span>
            <span>& Orders</span>
          </div>
          <div className={styles.cart}>
            <span>0</span>
            <img src="./cart.avif" alt="cart" />
            <span>Cart</span>
          </div>
        </div>
        <nav className={styles.menu}>
          <ul>
            <li>
              <FaBars className={styles.bergurIcon} />
              <span>All</span>
            </li>
            <li>Today's Deals</li>
            <li>Customer Service</li>
            <li>Registry</li>
            <li>Gift Cards</li>
            <li>Sell</li>
          </ul>
        </nav>
      </header>
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
            className="mySwiper"
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
          <div className={styles.products}>
            <p>
              You are on amazon.com. You can also shop on Amazon Iran for
              millions of products with fast local delivery. Click here to go to
              amazon.de
            </p>
            <div>
              <div className={styles.product}>
                <img src="./backpack.jpg" alt="backpack" />
                <h2>Backpack</h2>
              </div>
              <div className={styles.product}>
                <img src="./headset.jpg" alt="headset" />
                <h2>Headset</h2>
              </div>
              <div className={styles.product}>
                <img src="./ski-stick.webp" />
                <h2>Ski Stick</h2>
              </div>
              <div className={styles.product}>
                <img src="./laptop.avif" />
                <h2>Laptop</h2>
              </div>
              <div className={styles.product}>
                <img src="./mobile.avif" />
                <h2>Mobile</h2>
              </div>
              <div className={styles.product}>
                <img src="./shirt.webp" />
                <h2>Shirt</h2>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer></footer>
    </>
  );
}

export default App;
