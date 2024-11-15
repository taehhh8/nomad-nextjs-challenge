import { getListByName } from "@/lib/api";
import styles from "@/styles/DetailList.module.css";
import Image from "next/image";

interface PageProps {
  params: {
    name: string;
  };
}

export default async function DetailPage({ params }: PageProps) {
  const name = await params.name; // params를 await
  const data = await getListByName(name);
  const { books, list_name } = data.results;

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{list_name}</h1>
      <div className={styles.booksGrid}>
        {books.map((book: any) => (
          <div key={book.primary_isbn10} className={styles.bookCard}>
            <div className={styles.imageWrapper}>
              <Image
                src={book.book_image}
                alt={book.title}
                width={200}
                height={300}
                className={styles.bookImage}
              />
              <span className={styles.rank}>#{book.rank}</span>
            </div>
            <div className={styles.bookInfo}>
              <h2 className={styles.bookTitle}>{book.title}</h2>
              <p className={styles.author}>by {book.author}</p>
              <p className={styles.description}>{book.description}</p>
              <div className={styles.metadata}>
                <span>Weeks on list: {book.weeks_on_list}</span>
                <span>Rank last week: {book.rank_last_week || "New"}</span>
              </div>
              <a
                href={book.amazon_product_url}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.buyButton}
              >
                Buy on Amazon
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
