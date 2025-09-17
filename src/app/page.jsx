import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <h1>Home Page</h1>
      <ul>
        <li>
          <Link href="/" className={styles.link}>
            Home
          </Link>
        </li>
        <li>
          <Link href="/about" className={styles.link}>
            About
          </Link>
        </li>
        <li>
          <Link href="/contact" className={styles.link}>
            Contact
          </Link>
        </li>
        <li>
          <Link href="/product" className={styles.link}>
            Product
          </Link>
        </li>
        <li>
          <Link href="/service" className={styles.link}>
            Service
          </Link>
        </li>
        <li>
          <Link href="/about/branches" className={styles.link}>
            Branches
          </Link>
        </li>
      </ul>
    </>
  );
}
