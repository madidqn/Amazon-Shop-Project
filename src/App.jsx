import Select from "react-select";

//icons
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";

// style
import styles from "./App.module.css";
import { useState } from "react";

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
          <img src="./logo.avif" alt="logo" />
          <div className="deliver">
            <FaMapMarkerAlt />
            <span>Deliver to Iran</span>
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
        </div>
        <nav></nav>
      </header>
      <main></main>
      <footer></footer>
    </>
  );
}

export default App;
