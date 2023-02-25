import React from "react";
import styles from "./NewsLetter.module.css";

function NewsLetter() {
  return (
    <div className={styles.NewsLetter}>
      <div className={styles.Container}>
        <div className={styles.Left}>
          <h2>Get Unique Offers In Your Inbox</h2>
          <p>Subscribe to our newsletter</p>
        </div>
        <div className={styles.Right}>
          <input type="text" placeholder="Write your email here" />
          <button>Subscribe</button>
        </div>
      </div>
    </div>
  );
}

export default NewsLetter;
