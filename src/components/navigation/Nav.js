import React from "react";
import styles from "./Nav.module.css";

function Nav() {
  return (
    <div className={styles.Nav}>
      <div className={styles.Left}>
        <h2>Mars</h2>
      </div>
      <div className={styles.Center}>
        <ul>
          <li>Home</li>
          <li>Shop</li>
          <li>Products</li>
          <li>Contact</li>
        </ul>
      </div>
      <div className={styles.Right}>
        <p>Social</p>
      </div>
    </div>
  );
}

export default Nav;
