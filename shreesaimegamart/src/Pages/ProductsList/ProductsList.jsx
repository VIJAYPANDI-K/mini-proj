import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import ReactLoading from "react-loading";

import styles from "./Products.module.css";

import { Others, Fruits, Utensils } from "../../ProductList";
import Navbar from "../../Components/Navbar/Navbar";

const ProductsList = () => {
  const [data, setData] = useState([]);
  const [loading, setloading] = useState(true);
  const [list, setList] = useState([]);

  const route = useLocation().pathname;

  useEffect(() => {
    console.log(route);
    route === "/groceries"
      ? setList(Others)
      : route === "/fruitsandvegetables"
      ? setList(Fruits)
      : setList(Utensils);
  }, []);

  return (
    <div className={styles.Wrapper}>
      <Navbar show={false}/>
      <h1>Products</h1>
      {!loading ? (
        <ReactLoading type="bars" color="gray" className={styles.loading} />
      ) : (
        <div className={styles.container}>
          {list.map((c, index) => (
            <Link
              key={index}
              to={`${c.name.replace(/ /g, "").toLowerCase()}`}
              className="link"
            >
              <div key={index} className={styles.collections}>
                <div className={styles.image}>
                  <img src={c.img} />
                </div>
                <div className={styles.name}>
                  <h2>{c.name}</h2>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductsList;
