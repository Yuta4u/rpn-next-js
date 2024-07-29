import styles from "./page.module.css"
import Link from "next/link"

export default function Page() {
  return (
    <main className={styles.main}>
      <h2>HALLO, INI LINK PAGE</h2>
      <Link href="/">
        <button className={styles.button}>Home</button>
      </Link>
    </main>
  )
}
