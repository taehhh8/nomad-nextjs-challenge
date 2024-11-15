import Image from "next/image";
import styles from "@/styles/BookCard.module.css";

interface Book {
  title: string;
  author: string;
  book_image: string;
  description: string;
  rank: number;
  amazon_product_url: string;
}

export default function BookCard({ book }: { book: Book }) {
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <Image
          src={book.book_image}
          alt={book.title}
          width={200}
          height={300}
          className={styles.image}
        />
        <span className={styles.rank}>#{book.rank}</span>
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>{book.title}</h3>
        <p className={styles.author}>by {book.author}</p>
        <p className={styles.description}>{book.description}</p>
        <a
          href={book.amazon_product_url}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.button}
        >
          Buy on Amazon
        </a>
      </div>
    </div>
  );
}
