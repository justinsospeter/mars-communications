import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "./page.module.css";
import Hero from "@/components/hero/Hero";
import Categories from "@/components/categories/Categories";
import TopCategories from "@/components/topCategories/TopCategories";
import ProductCategories from "@/components/productCategories/ProductCategories";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero />
      <Categories />
      <TopCategories />
      <ProductCategories />
    </main>
  );
}
