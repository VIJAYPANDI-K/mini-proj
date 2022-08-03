import React from "react";
import styles from "./About.module.css";

import { BsTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

const About = () => {
  return (
    <section id={styles.footer}>
      <footer>
        <h1>About us</h1>
        <div className={styles["footer-content"]}>
          <div className={styles.contact}>
            <h2>
              <span>
                <BsTelephoneFill />
                +91 900 307 5728
              </span>
            </h2>
            <h2>
              <span>
                <MdEmail />
                shreesaimegamart@gmail.com
              </span>
            </h2>
          </div>
          <div className={styles["footer-desc"]}>
            <p>shree sai megamart</p>
          </div>
        </div>
        <p className={styles['"copyrights"']}>© shreesaimegamart 2022</p>
      </footer>
    </section>
  );
};

export default About;
