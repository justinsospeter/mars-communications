import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "./page.module.css";
import Hero from "@/components/hero/Hero";
import TopProducts from "@/components/topProducts/TopProducts";
import FeaturedCategories from "@/components/featuredCategories/FeaturedCategories";
import ProductCategories from "@/components/productCategories/ProductCategories";
import ProductBanner from "@/components/productBanner/ProductBanner";
import Brands from "@/components/brands/Brands";
import NewsLetter from "@/components/newsLetter/NewsLetter";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero />
      <TopProducts />
      <ProductBanner />
      <FeaturedCategories />
      <Brands />
      <ProductCategories />
      <NewsLetter />
    </main>
  );
}
