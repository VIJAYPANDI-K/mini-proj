import { collection, onSnapshot } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../../firebase";
import { doc, deleteDoc } from "firebase/firestore";

import styles from "./Product.module.css";

import _ from "lodash";
import { Link } from "react-router-dom";

const Product = ({ items }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const URL = useParams().id.replace(/ /g, "").toLowerCase();
  console.log(URL);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("cred"));
    if(user === null) {
      window.location.href = "/login";
    }
  }, []);

  useEffect(() => {
    try {
      const unsub = onSnapshot(collection(db, "products"), (snapShot) => {
        let list = [];
        snapShot.docs.forEach((doc) => {
          switch (URL) {
            case "fruits":
              if (doc.data().category === URL) {
                list.push(doc.data());
              }
              break;

            case "snacks":
              if (doc.data().category === URL) {
                list.push(doc.data());
              }
              break;

            case "vegetables":
              if (doc.data().category === URL) {
                list.push(doc.data());
              }
              break;

            case "cleaning":
              if (doc.data().category === URL) {
                list.push(doc.data());
              }
              break;

            case "drinks":
              if (doc.data().category === URL) {
                list.push(doc.data());
              }
              break;

            case "condiments":
              if (doc.data().category === URL) {
                list.push(doc.data());
              }
              break;

            case "beverages":
              if (doc.data().category === URL) {
                list.push(doc.data());
              }
              break;

            case "dairy":
              if (doc.data().category === URL) {
                list.push(doc.data());
              }
              break;

            case "petsaccessories":
              if (doc.data().category === URL) {
                list.push(doc.data());
              }
              break;

            case "riceandpasta":
              if (doc.data().category === URL) {
                list.push(doc.data());
              }
              break;

            case "paperaccessories":
              if (doc.data().category === URL) {
                list.push(doc.data());
              }
              break;

            case "miscitems":
              if (doc.data().category === URL) {
                list.push(doc.data());
              }
              break;

            case "babyaccessories":
              if (doc.data().category === URL) {
                list.push(doc.data());
              }
              break;

            case "poojaneeds":
              if (doc.data().category === URL) {
                list.push(doc.data());
              }
              break;

            case "masalas":
              if (doc.data().category === URL) {
                list.push(doc.data());
              }
              break;

            case "oils":
              if (doc.data().category === URL) {
                list.push(doc.data());
              }
              break;

            case "utensils":
              if (doc.data().category === URL) {
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
  }, []);

  const deleteHandler = async (id, category) => {
    data.filter((item) => item.id !== id);
    await deleteDoc(doc(db, "products", id));
  };

  return (
    <div className={styles.Wrapper}>
      <div className={styles.container}>
        {data.map((d) => (
          <div key={d.id} className={styles.product}>
            <div className={styles.top}>
              <img src={d.img} alt="" />
            </div>
            <div className={styles.bottom}>
              <h2>
                <span> Product Name: </span>
                <span>
                  {d.Productname.charAt(0).toUpperCase() +
                    d.Productname.slice(1)}
                </span>
              </h2>
              <h3>Category: {d.category}</h3>
              <span>{d.price} ₹</span>
              <div className={styles.btn}>
                <Link to={`${d.id}`}>
                  <button>Update</button>
                </Link>
                <button onClick={() => deleteHandler(d.id, d.category)}>
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
