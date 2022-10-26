import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Solar Guild</title>
        <meta
          name="description"
          content="Helping build a solarpunk nation, Nation3."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        🔅
        <h1 className={styles.title}>Solar Guild</h1>
        <p>
          Helping build a solarpunk nation,{' '}
          <a href="https://nation3.org" className={styles.link}>
            Nation3
          </a>
          .
        </p>
      </main>
    </div>
  )
}
