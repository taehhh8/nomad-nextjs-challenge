import styles from "@/styles/About.module.css";

export default function About() {
  return (
    <div className={styles.aboutContainer}>
      <h1>About NYT Bestsellers Explorer</h1>
      <p>
        Welcome to the NYT Bestsellers Explorer, your gateway to discovering the
        most popular books from The New York Times Bestsellers lists.
      </p>
      <p>
        Our platform provides a curated collection of bestselling books across
        various categories, making it easy to find your next great read.
      </p>

      <h2>Key Features</h2>
      <ul>
        <li>Comprehensive bestseller categories</li>
        <li>Real-time ranking updates</li>
        <li>Direct Amazon purchase links</li>
        <li>Detailed book information</li>
      </ul>

      <div className={styles.mission}>
        <h2>Our Mission</h2>
        <p>
          To connect readers with exceptional literature by providing an
          elegant, user-friendly platform to explore The New York Times
          Bestsellers.
        </p>
      </div>
    </div>
  );
}
