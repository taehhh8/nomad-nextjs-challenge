import Link from "next/link";
import styles from "@/styles/Navigation.module.css";

export default function Navigation() {
  return (
    <nav className={styles.nav}>
      <Link href="/" className={styles.link}>
        Home
      </Link>
      <Link href="/about" className={styles.link}>
        About
      </Link>
    </nav>
  );
}
