import Link from "next/link";
import styles from "@/styles/BookList.module.css";

interface List {
  list_name: string;
  display_name: string;
  list_name_encoded: string;
  oldest_published_date: string;
  newest_published_date: string;
  updated: string;
}

export default function BookList({ lists }: { lists: List[] }) {
  // lists가 undefined인 경우를 체크
  if (!lists) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.listGrid}>
      {lists?.map((list: List) => (
        <Link
          href={`/list/${list.list_name_encoded}`}
          key={list.list_name_encoded}
          className={styles.listCard}
        >
          <h2>{list.display_name}</h2>
          <p>Updated: {list.updated}</p>
        </Link>
      ))}
    </div>
  );
}
