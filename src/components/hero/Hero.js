import React from "react";
import styles from "./Hero.module.css";
import Image from "next/image";
import banner from "../../../public/img/banner.webp";

function Hero() {
  return (
    <div className={styles.Hero}>
      <div className={styles.Left}>
        <div className={styles.Categories}>
          <div className={styles.Category}></div>
          <div className={styles.Category}></div>
          <div className={styles.Category}></div>
          <div className={styles.Category}></div>
          <div className={styles.Category}></div>
          <div className={styles.Category}></div>
          <div className={styles.Category}></div>
          <div className={styles.Category}></div>
        </div>
      </div>
      <div className={styles.Right}>
        <Image src={banner} fill alt=""></Image>
      </div>
    </div>
  );
}

export default Hero;
