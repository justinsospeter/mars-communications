import React from "react";
import styles from "./Hero.module.css";

function Hero() {
  return (
    <div className={styles.Hero}>
      <div className={styles.Left}>
        <div className={styles.Top}>
          <h2>Categories</h2>
        </div>
        <div className={styles.Bottom}>
          <div className={styles.Item}></div>
        </div>
      </div>
      <div className={styles.Right}>Carousel</div>
    </div>
  );
}

export default Hero;
