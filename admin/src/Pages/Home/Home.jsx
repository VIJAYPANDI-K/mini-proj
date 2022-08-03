import React, { useEffect } from "react";
import styles from "./Home.module.css";

const Home = () => {

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("cred"));
    if(user === null) {
      window.location.href = "/login";
    }
  }, []);

  return <div className={styles.Home}>Home</div>;
};

export default Home;
