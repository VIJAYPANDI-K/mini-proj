import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const log = () => {
    localStorage.removeItem("cred");
    window.location.href = "/login";
  }

  return (
    <div className={styles.Wrapper}>
      <div className={styles.ManuBar}>
        <h2>Shree Sai Mega Mart</h2>{" "}
        <Link to="/" className="link">
          <li className={`${styles.MenuItems} ${styles.selected}`}>
            <span>Home</span>
          </li>
        </Link>
        <Link to="/addproduct" className="link">
          <li className={styles.MenuItems}>
            <span>Add Product</span>
          </li>
        </Link>
        <Link to="/view" className="link">
          <li className={styles.MenuItems}>
            <span>View Product</span>
          </li>
        </Link>
          <div className={styles.submitBtn}>
            <button onClick={log}>Logout</button>
          </div>
      </div>
    </div>
  );
};

export default Navbar;
