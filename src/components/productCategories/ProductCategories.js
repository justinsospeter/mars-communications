import React from 'react'
import styles from "./ProductCategories.module.css";

function ProductCategories() {
  return (
    <div className={styles.ProductCategories}>
      <div className={styles.Category}>
        <div className={styles.Title}>
          <h2>Featured Products</h2>
        </div>
        <div className={styles.Products}>
          <div className={styles.Product}></div>
          <div className={styles.Product}></div>
        </div>
      </div>
      <div className={styles.Category}>
        <div className={styles.Title}>
          <h2>Bestseller Products</h2>
        </div>
        <div className={styles.Products}>
          <div className={styles.Product}></div>
          <div className={styles.Product}></div>
        </div>
      </div>
      <div className={styles.Category}>
        <div className={styles.Title}>
          <h2>Sale Products</h2>
        </div>
        <div className={styles.Products}>
          <div className={styles.Product}></div>
          <div className={styles.Product}></div>
        </div>
      </div>
    </div>
  );
}

export default ProductCategories