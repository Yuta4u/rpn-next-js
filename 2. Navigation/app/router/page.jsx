"use client"

import styles from "./page.module.css"
import Link from "next/link"
import { useRouter } from "next/navigation"

export default function Page() {
  const route = useRouter()
  const handleOnClick = () => [route.push("/")]
  return (
    <main className={styles.main}>
      <h2>HALLO, INI ROUTER PAGE</h2>
      <button className={styles.button} onClick={handleOnClick}>
        Home
      </button>
    </main>
  )
}
