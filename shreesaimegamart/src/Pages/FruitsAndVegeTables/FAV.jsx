import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import ReactLoading from "react-loading";

import styles from "./FAV.module.css";
import { Fruits } from "../../ProductList";

const Groceries = () => {
  const [data, setData] = useState([]);
  const [loading, setloading] = useState(true);

  return (
    <div className={styles.Wrapper}>
      <h1>Products</h1>
      {!loading ? (
        <ReactLoading type="bars" color="gray" className={styles.loading} />
      ) : (
        <div className={styles.container}>
          {Fruits.map((c, index) => (
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

export default Groceries;
