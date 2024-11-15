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
  weeks_on_list: number;
  rank_last_week: number;
}

interface PageParams {
  name: string;
}

interface SearchParams {
  [key: string]: string | string[] | undefined;
}

interface Props {
  params: Promise<PageParams>;
  searchParams: Promise<SearchParams>;
}

export default async function DetailPage(props: Props) {
  // params와 searchParams를 await
  const { name } = await props.params;

  const response = await fetch(
    `https://books-api.nomadcoders.workers.dev/list?name=${name}`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }

  const json = await response.json();
  const books = json.results.books;

  return (
    <section className={styles.container}>
      <h1 className={styles.title}>{json.results.list_name}</h1>
      <div className={styles.grid}>
        {books.map((book: Book) => (
          <div key={book.primary_isbn10} className={styles.book}>
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
            <div className={styles.info}>
              <h2 className={styles.bookTitle}>{book.title}</h2>
              <h3 className={styles.author}>by {book.author}</h3>
              <p className={styles.description}>{book.description}</p>
              <a
                href={book.amazon_product_url}
                className={styles.button}
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
}
