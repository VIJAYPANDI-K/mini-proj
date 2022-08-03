import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../../firebase";

import styles from "./SingleProduct.module.css";
import Navbar from "../../Components/Navbar/Navbar";

const SingleProduct = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const productName = useParams().id;
  console.log(productName);

  useEffect(() => {
    try {
      const unsub = onSnapshot(collection(db, "products"), (snapShot) => {
        let list = [];
        snapShot.docs.forEach((doc) => {
          switch (productName) {
            case "fruits":
              if (doc.data().category === productName) {
                console.log("in");
                list.push(doc.data());
              }
              break;

            case "snacks":
              if (doc.data().category === productName) {
                list.push(doc.data());
              }
              break;

            case "vegetables":
              if (doc.data().category === productName) {
                list.push(doc.data());
              }
              break;

            case "cleaning":
              if (doc.data().category === productName) {
                list.push(doc.data());
              }
              break;

            case "drinks":
              if (doc.data().category === productName) {
                list.push(doc.data());
              }
              break;

            case "condiments":
              if (doc.data().category === productName) {
                list.push(doc.data());
              }
              break;

            case "beverages":
              if (doc.data().category === productName) {
                list.push(doc.data());
              }
              break;

            case "dairy":
              if (doc.data().category === productName) {
                list.push(doc.data());
              }
              break;

            case "petsaccessories":
              if (doc.data().category === productName) {
                list.push(doc.data());
              }
              break;

            case "riceandpasta":
              if (doc.data().category === productName) {
                list.push(doc.data());
              }
              break;

            case "paperaccessories":
              if (doc.data().category === productName) {
                list.push(doc.data());
              }
              break;

            case "miscitems":
              if (doc.data().category === productName) {
                list.push(doc.data());
              }
              break;

            case "babyaccessories":
              if (doc.data().category === productName) {
                list.push(doc.data());
              }
              break;

            case "poojaneeds":
              if (doc.data().category === productName) {
                list.push(doc.data());
              }
              break;

            case "masalas":
              if (doc.data().category === productName) {
                list.push(doc.data());
              }
              break;

            case "oils":
              if (doc.data().category === productName) {
                list.push(doc.data());
              }
              break;

            case "utensils":
              if (doc.data().category === productName) {
                list.push(doc.data());
              }
              break;

            default:
              break;
          }
        });
        setData(list);
        console.log(list);
        setLoading(false);
        return;
      });
      return () => {
        unsub();
      };
    } catch (error) {
      console.log(error);
    }
  }, [productName]);

  return (
    <div className={styles.wrapper}>
      <Navbar show={false} />
      <div className={styles.container}>
        {!loading && (
          <>
            {data.length === 0 ? (
              <h1>There is no products in {productName}</h1>
            ) : (
              data.map((l) => (
                <div key={l.id} className={styles.product}>
                  <div className={styles.image}>
                    <img src={l.img} alt="" />
                  </div>
                  <div className={styles.cat}>
                    <span>Category:</span>
                    <span>{l.category}</span>
                  </div>
                  <div className={styles.productname}>{l.Productname}</div>
                  <div className={styles.price}>Price: {l.price}₹</div>
                  <div className={styles.btn}>
                    <button>Add to Cart</button>
                  </div>
                </div>
              ))
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default SingleProduct;
