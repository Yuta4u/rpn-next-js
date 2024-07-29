import styles from "./page.module.css"
import Link from "next/link"

export default function Home() {
  return (
    <main className={styles.main}>
      <h2>INI HOME PAGE</h2>
      <div className={styles.welcomeContent}>
        <Link href="/link">
          <button className={styles.btnLink}>Link</button>
        </Link>
        <Link href="/router">
          <button className={styles.btnRouter}>Router</button>
        </Link>
      </div>
    </main>
  )
}
