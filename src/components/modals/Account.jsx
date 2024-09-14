import styles from "./Account.module.css";

function Account() {
  return (
    <div className={styles.modalSignIn}>
      <div>
        <button>Sign in</button>
        <p>
          New customer? <a href="#">Start here.</a>
        </p>
      </div>
      <div>
        <ul>
          <li>Your Lists</li>
          <li>Create a List</li>
          <li>Find a List or Registry</li>
        </ul>
        <ul>
          <li> Your Account</li>
          <li>Account</li>
          <li>Orders</li>
          <li>Recommendations</li>
          <li>Browsing</li>
          <li>History</li>
          <li>Watchlist</li>
          <li>Video</li>
          <li>Purchases & Rentals</li>
          <li>Kindle Unlimited</li>
          <li>Subscribe & Save Items</li>
          <li>Memberships & Subscriptions</li>
          <li>Music Library</li>
        </ul>
      </div>
    </div>
  );
}

export default Account;
