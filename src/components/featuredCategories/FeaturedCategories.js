import React from 'react'
import styles from './FeaturedCategories.module.css'

function FeaturedCategories() {
  return (
    <div className={styles.FeaturedCategories}>
      <div className={styles.Title}>
        <h2>Top Categories</h2>
      </div>
      <div className={styles.Categories}>
        <div className={styles.Top}>
          <div className={styles.Category}>
            <h3>Tvs</h3>
            <div className={styles.CategoryProducts}>
              <div className={styles.Product}></div>
              <div className={styles.Product}></div>
              <div className={styles.Product}></div>
            </div>
          </div>
          <div className={styles.Category}>
            <h3>Computer</h3>
            <div className={styles.CategoryProducts}>
              <div className={styles.Product}></div>
              <div className={styles.Product}></div>
              <div className={styles.Product}></div>
            </div>
          </div>
          <div className={styles.Category}>
            <h3>Phone</h3>
            <div className={styles.CategoryProducts}>
              <div className={styles.Product}></div>
              <div className={styles.Product}></div>
              <div className={styles.Product}></div>
            </div>
          </div>
        </div>
        <div className={styles.Bottom}>
          <div className={styles.Category}>
            <h3>Kitchen</h3>
            <div className={styles.CategoryProducts}>
              <div className={styles.Product}></div>
              <div className={styles.Product}></div>
              <div className={styles.Product}></div>
            </div>
          </div>
          <div className={styles.Category}>
            <h3>Gaming</h3>
            <div className={styles.CategoryProducts}>
              <div className={styles.Product}></div>
              <div className={styles.Product}></div>
              <div className={styles.Product}></div>
            </div>
          </div>
          <div className={styles.Category}>
            <h3>Fridge</h3>
            <div className={styles.CategoryProducts}>
              <div className={styles.Product}></div>
              <div className={styles.Product}></div>
              <div className={styles.Product}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeaturedCategories