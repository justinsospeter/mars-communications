import React from 'react'
import styles from './TopCategories.module.css'

function TopCategories() {
  return (
    <div className={styles.TopCategories}>
      <div className={styles.Title}>
        <h2>Top Categories</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga velit
          cumque cum repellendus, necessitatibus voluptatem nobis veritatis
          quaerat, maxime assumenda odit libero impedit adipisci dolor magnam,
          qui alias incidunt tempore?
        </p>
      </div>
      <div className={styles.Categories}>
        <div className={styles.Category}>
          <div className={styles.Image}></div>
          <h3>Tvs</h3>
        </div>
        <div className={styles.Category}>
          <div className={styles.Image}></div>
          <h3>Tvs</h3>
        </div>
        <div className={styles.Category}>
          <div className={styles.Image}></div>
          <h3>Tvs</h3>
        </div>
        <div className={styles.Category}>
          <div className={styles.Image}></div>
          <h3>Tvs</h3>
        </div>
        <div className={styles.Category}>
          <div className={styles.Image}></div>
          <h3>Tvs</h3>
        </div>
      </div>
    </div>
  );
}

export default TopCategories