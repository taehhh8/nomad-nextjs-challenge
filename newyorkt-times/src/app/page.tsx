import { getAllLists } from "@/lib/api";
import BookList from "@/components/BookList";
import styles from "@/styles/BookList.module.css";

export default async function Home() {
  const data = await getAllLists();

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>NYT Bestseller Lists</h1>
      <BookList lists={data.results} />
    </div>
  );
}
