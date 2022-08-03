import React from "react";
import styles from "./Products.module.css";

import Grocery from "../../Images/groceries.webp";
import Vegies from "../../Images/vegatables.jpg";
import Utensils from "../../Images/utensils.jpg";
import { Link } from "react-router-dom";

const Products = () => {
  return (
    <section id={styles.products}>
      <div className={styles.container}>
        <div className={styles.productHeader}>
          <h1>Best-Selling Products</h1>
          <p>Grab Exciting Discounts</p>
        </div>
        <div className={styles.productCategory}>
          <Link
            to="/groceries"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <div className={styles.product}>
              <div className={styles.productItem}>
                <div className={styles.img}>
                  <img src={Grocery} alt="" />
                </div>
                <h2>Groceries</h2>
              </div>
            </div>
          </Link>
          <Link to="/fruitsandvegetables">
            <div className={styles.product}>
              <div className={styles.productItem}>
                <div className={styles.img}>
                  <img src={Vegies} alt="" />
                </div>
                <h2>Vegatables and Fruits</h2>
              </div>
            </div>
          </Link>
          <Link to="/utensils">
            <div className={styles.product}>
              <div className={styles.productItem}>
                <div className={styles.img}>
                  <img src={Utensils} alt="" />
                </div>
                <h2>Utensils</h2>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Products;
