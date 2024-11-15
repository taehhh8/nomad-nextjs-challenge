import Link from "next/link";
import styles from "@/styles/Home.module.css";
import { getAllLists } from "@/lib/api";

interface List {
  list_name: string;
  list_name_encoded: string;
  display_name: string;
}

export default async function Home() {
  const json = await getAllLists();
  const lists = json.results;

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>The New York Times Best Sellers</h1>
      <div className={styles.listGrid}>
        {lists.map((list: List) => (
          <Link
            key={list.list_name_encoded}
            href={`/list/${list.list_name_encoded}`}
            className={styles.listCard}
          >
            <h2>{list.list_name}</h2>
            <p>Updated weekly</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
