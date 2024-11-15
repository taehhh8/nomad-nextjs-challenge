import Image from "next/image";
import styles from "@/styles/DetailPage.module.css";

interface Book {
  rank: number;
  title: string;
  author: string;
  book_image: string;
  description: string;
  amazon_product_url: string;
  primary_isbn10: string;
}

interface PageProps {
  params: { name: string };
}

// React Component로 명시적 타입 지정
const DetailPage = async ({ params }: PageProps) => {
  const response = await fetch(
    `https://books-api.nomadcoders.workers.dev/list?name=${params.name}`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }

  const json = await response.json();
  const books = json.results.books;

  return (
    <section className={styles.container}>
      <h1 className={styles.title}>{json.results.list_name}</h1>
      <div className={styles.booksGrid}>
        {books.map((book: Book) => (
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
              <h3 className={styles.author}>by {book.author}</h3>
              <p className={styles.description}>{book.description}</p>
              <a
                href={book.amazon_product_url}
                className={styles.buyButton}
                target="_blank"
                rel="noopener noreferrer"
              >
                Buy now →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

// 명시적으로 export default
export default DetailPage;
