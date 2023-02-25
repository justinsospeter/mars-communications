import React from "react";
import styles from "./Brands.module.css";

function Brands() {
  return (
    <div className={styles.Brands}>
      <div className={styles.Title}>
        <h2>Top Brands</h2>
      </div>
      <div className={styles.TopBrands}>
        <div className={styles.Brand}>
          <div className={styles.BrandLogo}></div>
          <h3>Hisense</h3>
        </div>
        <div className={styles.Brand}>
          <div className={styles.BrandLogo}></div>
          <h3>Hisense</h3>
        </div>
        <div className={styles.Brand}>
          <div className={styles.BrandLogo}></div>
          <h3>Hisense</h3>
        </div>
        <div className={styles.Brand}>
          <div className={styles.BrandLogo}></div>
          <h3>Hisense</h3>
        </div>
        <div className={styles.Brand}>
          <div className={styles.BrandLogo}></div>
          <h3>Hisense</h3>
        </div>
        <div className={styles.Brand}>
          <div className={styles.BrandLogo}></div>
          <h3>Hisense</h3>
        </div>
        <div className={styles.Brand}>
          <div className={styles.BrandLogo}></div>
          <h3>Hisense</h3>
        </div>
      </div>
    </div>
  );
}

export default Brands;
