import React from "react";
import styles from "./TopProducts.module.css";

function TopProducts() {
  return (
    <div className={styles.TopProducts}>
      <div className={styles.Left}>
        <div className={styles.Title}>
          <h2>Top Products</h2>
          <p>See All Products</p>
        </div>
        <div className={styles.Products}>
          <div className={styles.Top}>
            <div className={styles.Product}></div>
            <div className={styles.Product}></div>
          </div>
          <div className={styles.Bottom}>
            <div className={styles.Product}></div>
            <div className={styles.Product}></div>
          </div>
        </div>
      </div>
      <div className={styles.Right}>
        <div className={styles.Title}>
          <h2>On Sale</h2>
        </div>
        <div className={styles.Sale}></div>
      </div>
    </div>
  );
}

export default TopProducts;
