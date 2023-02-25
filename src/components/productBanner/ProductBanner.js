import React from 'react'
import styles from './ProductBanner.module.css'
import Image from 'next/image';
import productbanner from "../../../public/img/banner2.webp"

function ProductBanner() {
  return (
    <div className={styles.ProductBanner}>
      <div className={styles.Container}>
        <Image src={productbanner} fill alt=""></Image>
      </div>
    </div>
  );
}

export default ProductBanner