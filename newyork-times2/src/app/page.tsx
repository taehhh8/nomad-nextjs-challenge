import Link from "next/link";
import styles from "@/styles/Home.module.css";

interface List {
  list_name: string;
  list_name_encoded: string;
  display_name: string;
}

export default async function Home() {
  const response = await fetch(
    "https://books-api.nomadcoders.workers.dev/lists"
  );

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }

  const json = await response.json();
  const lists = json.results; // 여기가 중요합니다

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>The New York Times Best Sellers</h1>
      <div className={styles.listGrid}>
        {lists.map(
          (
            list: List // data를 lists로 변경
          ) => (
            <Link
              key={list.list_name_encoded}
              href={`/list/${list.list_name_encoded}`}
              className={styles.listCard}
            >
              <h2>{list.list_name}</h2>
              <p>Updated weekly</p>
            </Link>
          )
        )}
      </div>
    </div>
  );
}
