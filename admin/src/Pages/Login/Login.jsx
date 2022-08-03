import React from "react";

import styles from "./Login.module.css";

const Login = () => {
  const handle = (event) => {
    event.preventDefault();
    const email = event.target[0].value;
    const password = event.target[1].value;
    if(email === "admin@example.com" && password === "admin") {
      localStorage.setItem('cred', JSON.stringify("admin@example.com"));
      window.location.href = "/";
    }
  }

  return (
    <div className={styles.Wrapper}>
      <div className={styles.container}>
        <h1>Login</h1>
        <form onSubmit={handle}>
          <div className={styles.inputField}>
            <input type="mail" placeholder="Email" required />
          </div>
          <div className={styles.inputField}>
            <input type="password" placeholder="Password" required />
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
