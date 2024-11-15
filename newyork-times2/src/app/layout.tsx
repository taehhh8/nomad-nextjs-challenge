import Navigation from "@/components/Navigation";
import styles from "@/styles/Layout.module.css";

export const metadata = {
  title: "NYT Bestsellers",
  description: "New York Times Bestsellers Explorer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className={styles.container}>
          <Navigation />
          <main className={styles.main}>{children}</main>
        </div>
      </body>
    </html>
  );
}
