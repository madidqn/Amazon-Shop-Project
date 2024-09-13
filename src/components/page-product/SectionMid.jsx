import { useState, useRef, useEffect } from "react";
import useProduct from "../../custom-hook/useProduct";

import styles from "./SectionMid.module.css";

import { BiMessageDetail } from "react-icons/bi";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

function SectionMid({ id }) {
  const [filterProducts] = useProduct(id);

  const text1 = useRef(true);
  const text2 = useRef(true);

  const [showList, setShowList] = useState(false);
  const [showParagraph, setShowParagraph] = useState(false);
  const [showModalStars, setShowModalStars] = useState(false);
  const [style, setStyle] = useState("");

  function fixStyle(content) {
    setStyle(content);
  }

  useEffect(() => {
    !style ? setStyle(text1.current.innerText) : null;
  }, [style]);

  return (
    <section className={styles.aboutProduct}>
      <div>
        <h2>{filterProducts[0]?.title}</h2>
        <p className={styles.discription}>{filterProducts[0]?.discription}</p>
        <a href="#" className={styles.visit}>
          Visit the acer Store
        </a>
        <div className={styles.rating}>
          <div
            onMouseEnter={() => setShowModalStars(true)}
            onMouseLeave={() => setShowModalStars(false)}
          >
            <div>
              <span>4.3</span>
              {filterProducts[0]?.rating.map((element, index) => (
                <img src={element} alt="star" key={index} />
              ))}
            </div>
            {showModalStars && (
              <div className={styles.modalStars}>
                <div>
                  {filterProducts[0]?.rating.map((element, index) => (
                    <img src={element} alt="star" key={index} />
                  ))}
                  <span>4.3 out of 5</span>
                </div>
                <p>1,770 global ratings</p>
                <ul>
                  <li>
                    <a href="#">4 star</a>
                    <div>
                      <span></span>
                    </div>
                    <a href="#">68%</a>
                  </li>
                  <li>
                    <a href="#">4 star</a>
                    <div>
                      <span></span>
                    </div>
                    <a href="#">24%</a>
                  </li>
                  <li>
                    <a href="#">3 star</a>
                    <div>
                      <span></span>
                    </div>
                    <a href="#">17%</a>
                  </li>
                  <li>
                    <a href="#">2 star</a>
                    <div>
                      <span></span>
                    </div>
                    <a href="#">7%</a>
                  </li>
                  <li>
                    <a href="#">2 star</a>
                    <div>
                      <span></span>
                    </div>
                    <a href="#">11%</a>
                  </li>
                  <li>
                    <a href="#">1 star</a>
                    <div>
                      <span></span>
                    </div>
                    <a href="#">2%</a>
                  </li>
                </ul>
              </div>
            )}
          </div>
          <a href="#" className={styles.voted}>
            {filterProducts[0]?.voted_number} ranting
          </a>
          <a href="#" className={styles.searchPage}>
            Search this page
          </a>
        </div>
        <p className={styles.bought}>6K+ bought in past month</p>
      </div>
      <div>
        <div className={styles.price}>
          <span>-7%</span>
          <div>
            <span>$</span>
            <span>{filterProducts[0].final_price}</span>
            <span>99</span>
          </div>
        </div>
        <span>
          List Price: <span>$321.99</span>
        </span>
        <p>
          $91.31 Shipping & Import Fees Deposit to Iran
          <a href="#">Details</a>
        </p>
        <p>
          Available at a lower price from <a href="#"> other sellers </a>
          that may not offer free Prime shipping.
        </p>
        <p>
          <span>Extra Savings</span> Amazon Music offer with this purchase 1
          Applicable Promotion
        </p>
      </div>
      <div>
        <span>
          Style: <span>{style}</span>
        </span>
        <div className={styles.R3}>
          <button
            onClick={() => fixStyle(text1.current.innerText)}
            className={
              style === text1.current.innerText
                ? styles.selectedStyle
                : styles.notSelectedStyle
            }
          >
            <span ref={text1}>R3 7320U</span>
            <span>$299.99</span>
          </button>
          <button
            onClick={() => fixStyle(text2.current.innerText)}
            className={
              style === text2.current.innerText
                ? styles.selectedStyle
                : styles.notSelectedStyle
            }
          >
            <span ref={text2}>R7 5700U</span>
            <span>$499.99</span>
          </button>
        </div>
        <div
          className={`${styles.lists}  ${
            showList ? styles.seeMore : styles.showLess
          } `}
        >
          <div>
            <span>Brand</span>
            <span>acer</span>
          </div>
          <div>
            <span>Model Name</span>
            <span>Laptop</span>
          </div>
          <div>
            <span>Screen Size</span>
            <span>15.6 Inches</span>
          </div>
          <div>
            <span>Color</span>
            <span>Silver</span>
          </div>
          <div>
            <span>Hard Disk Size</span>
            <span>128 GB</span>
          </div>
          <div>
            <span>CPU Model</span>
            <span>Ryzen 3</span>
          </div>
          <div>
            <span>Ram Memory Installed Size</span>
            <span>8 GB</span>
          </div>
          <div>
            <span>Operating System</span>
            <span>Windows 11 S</span>
          </div>
          <div>
            <span>Special Feature</span>
            <span>Backlit Keyboard</span>
          </div>
          <div>
            <span>Graphics Card Description</span>
            <span>Integrated</span>
          </div>
        </div>
        <div className={styles.show}>
          {showList ? (
            <IoIosArrowUp className={styles.iconShow} />
          ) : (
            <IoIosArrowDown className={styles.iconShow} />
          )}
          <span onClick={() => setShowList((state) => !state)}>
            {showList ? "Show less" : "See more"}
          </span>
        </div>
      </div>
      <div>
        <h3>About this item</h3>
        <ul
          className={` ${
            showParagraph ? styles.seeMoreParagraph : styles.showLessParagraph
          } `}
        >
          <li>
            Purposeful Design: Travel with ease and look great doing it with the
            Aspire's 3 thin, light design.
          </li>
          <li>
            Ready-to-Go Performance: The Aspire 3 is ready-to-go with the latest
            AMD Ryzen 3 7320U Processor with Radeon Graphics—ideal for the
            entire family, with performance and productivity at the core.
          </li>
          <li>
            Visibly Stunning: Experience sharp details and crisp colors on the
            15.6" Full HD IPS display with 16:9 aspect ratio and narrow bezels.
          </li>
          <li>
            Internal Specifications: 8GB LPDDR5 Onboard Memory; 128GB NVMe
            solid-state drive storage to store your files and media
          </li>
          <li>
            The HD front-facing camera uses Acer’s TNR (Temporal Noise
            Reduction) technology for high-quality imagery in low-light
            conditions. Acer PurifiedVoice technology with AI Noise Reduction
            filters out any extra sound for clear communication over online
            meetings.
          </li>
          <li>
            Wireless Wi-Fi 6 Convenience: Maintain a strong, consistent wireless
            signal with Wi-Fi 6 (aka 802.11ax) and 2x2 MU-MIMO technology.
          </li>
          <li>
            Improved Thermals: With a 78% increase in fan surface area, enjoy an
            improved thermal system and an additional 17% thermal capacity.
            Allowing for longer, more efficient work sessions while not plugged
            in.
          </li>
          <li>
            Ports For All Your Accessories: 1 - USB Type-C Port USB 3.2 Gen 2
            (up to 10 Gbps) DisplayPort over USB Type-C & USB Charging, 2 - USB
            3.2 Gen 1 Ports, 1 - HDMI 2.1 Port with HDCP support, 1 -
            Headphone/Speaker/Line-Out Jack, DC-in for AC adapter
          </li>
          <li>What's In the Box: Acer Aspire Laptop, AC Adapter, Power Cord</li>
          <li>Keyboard backlight not present on this model</li>
        </ul>
        <div className={styles.show}>
          {showParagraph ? (
            <IoIosArrowUp className={styles.iconShow} />
          ) : (
            <IoIosArrowDown className={styles.iconShow} />
          )}
          <span onClick={() => setShowParagraph((state) => !state)}>
            {showParagraph ? "Show less" : "See more"}
          </span>
        </div>
        <div className={styles.report}>
          <BiMessageDetail className={styles.iconMessage} />
          <p>Report an issue with this product or seller</p>
        </div>
        <p className={styles.note}>
          <span>Note:</span> Products with electrical plugs are designed for use
          in the US. Outlets and voltage differ internationally and this product
          may require an adapter or converter for use in your destination.
          Please check compatibility before purchasing.
        </p>
      </div>
    </section>
  );
}

export default SectionMid;
