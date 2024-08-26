import styles from "./style.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <a href="#">Back to top</a>
      <div className={styles.lists}>
        <ul>
          <li>Get to Know Us</li>
          <li>Careers</li>
          <li>Blog</li>
          <li>About Amazon</li>
          <li>Investor Relations</li>
          <li>Amazon Devices</li>
          <li>Amazon Science</li>
        </ul>
        <ul>
          <li>Make Money with Us</li>
          <li>Sell products on Amazon</li>
          <li>Sell on Amazon Business</li>
          <li>Sell apps on Amazon</li>
          <li>Become an Affiliate</li>
          <li>Advertise Your Products</li>
          <li>Self-Publish with Us</li>
          <li>Host an Amazon Hubs</li>
          <li>See More Make Money with Us</li>
        </ul>
        <ul>
          <li>Amazon Payment Products</li>
          <li>Amazon Business Card</li>
          <li>Shop with Points</li>
          <li>Reload Your Balance</li>
          <li>Amazon Currency Converter</li>
        </ul>
        <ul>
          <li>Let Us Help You</li>
          <li>Amazon and COVID-19</li>
          <li>Your Account</li>
          <li>Your Orders</li>
          <li>Shipping Rates &</li>
          <li>Policies</li>
          <li>Returns &</li>
          <li>Replacements</li>
          <li>Manage Your Content and Devices</li>
          <li>Amazon Assistant</li>
          <li>Help</li>
        </ul>
      </div>
      <div className={styles.footerLogo}>
        <img src="./logo.avif" alt="logo" />
        <p>
          <img src="./language.avif" alt="language" />
          <span>English</span>
        </p>
        <p>
          <span>$</span>
          <span>USD - U.s Dollor</span>
        </p>
        <p>
          <img src="./erth.avif" alt="erth" />
          <span>United States</span>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
