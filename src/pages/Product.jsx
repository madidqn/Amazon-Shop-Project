import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

// component
import Main from "../components/main";

// style
import styles from "./Product.module.css";

//icon
import { FaMapMarkerAlt } from "react-icons/fa";

function Product() {
  const { id } = useParams();
  console.log(id);
  const { products } = useSelector((state) => state.products);
  const filterProducts = products.filter((product) => product.id === id);
  console.log(filterProducts);

  return (
    <Main>
      <div className={styles.product}>
        <img src="/car.avif" alt="car" />
        <div>
          <section>
            <img src={filterProducts[0].src} alt={filterProducts[0].alt} />
          </section>
          <section className={styles.aboutProduct}>
            <div>
              <h2>{filterProducts[0].title}</h2>
              <p className={styles.discription}>
                {filterProducts[0].discription}
              </p>
              <a href="#" className={styles.visit}>
                Visit the acer Store
              </a>
              <div className={styles.rating}>
                <span>4.3</span>
                {filterProducts[0].rating.map((element, index) => (
                  <img src={element} alt="star" key={index} />
                ))}
                <a href="#" className={styles.voted}>
                  {filterProducts[0].voted_number} ranting
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
                $91.31 Shipping & Import Fees Deposit to Iran{" "}
                <a href="#">Details</a>
              </p>
              <p>
                Available at a lower price from <a href="#"> other sellers </a>
                that may not offer free Prime shipping.
              </p>
              <p>
                <span>Extra Savings</span> Amazon Music offer with this purchase
                1 Applicable Promotion
              </p>
            </div>
            <div>
              <span>Style: R3 7320U</span>
              <div>
                <span>R3 7320U $299.99</span>
                <span>R7 5700U $499.99</span>
              </div>
              <div className={styles.lists}>
                <ul>
                  <li>Brand</li>
                  <li>Model Name</li>
                  <li>Screen Size</li>
                  <li>Color</li>
                  <li>Hard Disk Size</li>
                  <li>CPU Model</li>
                  <li>Ram Memory Installed Size</li>
                  <li>Operating System</li>
                  <li>Special Feature</li>
                  <li>Graphics Card Description</li>
                </ul>
                <ul>
                  <li>acer</li>
                  <li>Laptop</li>
                  <li>15.6 Inches</li>
                  <li>Silver</li>
                  <li>128 GB</li>
                  <li>Ryzen 3</li>
                  <li>8 GB</li>
                  <li>Windows 11 S</li>
                  <li>Backlit Keyboard</li>
                  <li>Integrated</li>
                </ul>
              </div>
              <span>Show more</span>
            </div>
            <div>
              <h3>About this item</h3>
              <ul>
                <li>
                  Purposeful Design: Travel with ease and look great doing it
                  with the Aspire's 3 thin, light design.
                </li>
                <li>
                  Ready-to-Go Performance: The Aspire 3 is ready-to-go with the
                  latest AMD Ryzen 3 7320U Processor with Radeon Graphics—ideal
                  for the entire family, with performance and productivity at
                  the core.
                </li>
                <li>
                  Visibly Stunning: Experience sharp details and crisp colors on
                  the 15.6" Full HD IPS display with 16:9 aspect ratio and
                  narrow bezels.
                </li>
                <li>
                  Internal Specifications: 8GB LPDDR5 Onboard Memory; 128GB NVMe
                  solid-state drive storage to store your files and media
                </li>
                <li>
                  The HD front-facing camera uses Acer’s TNR (Temporal Noise
                  Reduction) technology for high-quality imagery in low-light
                  conditions. Acer PurifiedVoice technology with AI Noise
                  Reduction filters out any extra sound for clear communication
                  over online meetings.
                </li>
                <li>
                  Wireless Wi-Fi 6 Convenience: Maintain a strong, consistent
                  wireless signal with Wi-Fi 6 (aka 802.11ax) and 2x2 MU-MIMO
                  technology.
                </li>
                <li>
                  Improved Thermals: With a 78% increase in fan surface area,
                  enjoy an improved thermal system and an additional 17% thermal
                  capacity. Allowing for longer, more efficient work sessions
                  while not plugged in.
                </li>
                <li>
                  Ports For All Your Accessories: 1 - USB Type-C Port USB 3.2
                  Gen 2 (up to 10 Gbps) DisplayPort over USB Type-C & USB
                  Charging, 2 - USB 3.2 Gen 1 Ports, 1 - HDMI 2.1 Port with HDCP
                  support, 1 - Headphone/Speaker/Line-Out Jack, DC-in for AC
                  adapter
                </li>
                <li>
                  What's In the Box: Acer Aspire Laptop, AC Adapter, Power Cord
                </li>
                <li>Keyboard backlight not present on this model</li>
              </ul>
              <span>Show more</span>
              <p>dot icon Report an issue with this product or seller</p>
              <p>
                Note: Products with electrical plugs are designed for use in the
                US. Outlets and voltage differ internationally and this product
                may require an adapter or converter for use in your destination.
                Please check compatibility before purchasing.
              </p>
            </div>
          </section>
          <section>
            <div>
              <p>
                <h5>Buy new:</h5>
                <i>dot icon</i>
              </p>
              <div>
                <span>$</span>
                <span>{filterProducts[0].final_price}</span>
                <span>99</span>
              </div>
              <p>
                $91.31 Shipping & Import Fees Deposit to Iran Details Delivery
              </p>
              <span> Wednesday, May 15</span>
              <div className={styles.deliver}>
                <FaMapMarkerAlt />
                <span>Deliver to Iran</span>
              </div>
              <h4>In Stock</h4>
              <select name="" id="">
                <option value="">hello</option>
                <option value="">hello</option>
                <option value="">hello</option>
                <option value="">hello</option>
              </select>
              <button>Add to cart</button>
              <div className={styles.lists}>
                <ul>
                  <li>Ships from</li>
                  <li>Sold by</li>
                  <li>Returns</li>
                  <li>Payments</li>
                </ul>
                <ul>
                  <li>Amazon.com</li>
                  <li>Amazon.com</li>
                  <li>
                    Eligible for Return, Refund or Replacement within 30 days of
                    receipt
                  </li>
                  <li>Secure transaction</li>
                </ul>
              </div>
              <a href="#">see more...</a>
            </div>
          </section>
        </div>
      </div>
    </Main>
  );
}

export default Product;
