import React, { useEffect, useState } from "react";

import { db } from "../../firebase";
import {
  collection,
  collectionGroup,
  doc,
  onSnapshot,
} from "firebase/firestore";

import { Link } from "react-router-dom";

import styles from "./ViewProduct.module.css";

import ReactLoading from "react-loading";

const ViewProduct = () => {
  const [data, setData] = useState([]);
  const [loading, setloading] = useState(true);

  let Category = [
    "Fruits",
    "Snacks",
    "Vegetables",
    "Cleaning",
    "Drinks",
    "Condiments",
    "Beverages",
    "Dairy",
    "Pets Accessories",
    "Rice and Pasta",
    "Paper Accessories",
    "Misc Items",
    "Baby Accessories",
    "Pooja Needs",
    "Masalas",
    "Oils",
    "Utensils",
  ];

  useEffect(() => {
    try {
      const unsub = onSnapshot(collection(db, "products"), (snapShot) => {
        let list = [];
        snapShot.docs.forEach((doc) => {
          list.push(doc.data());
        });
        setData(list);
        console.log(list);
        setloading(false);
        return;
      });
      return () => {
        unsub();
      };
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <div className={styles.Wrapper}>
      <h1>Products</h1>
      {loading ? (
        <ReactLoading type="bars" color="gray" className={styles.loading} />
      ) : (
        <div className={styles.container}>
          {Category.map((c, index) => (
            <Link
              key={index}
              to={`${c.replace(/ /g, "").toLowerCase()}`}
              className="link"
            >
              <div key={index} className={styles.collections}>
                <h3>{c}</h3>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default ViewProduct;
