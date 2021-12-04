import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>hyperscale</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          hyperscale
        </h1>

        <p className={styles.description}>
          hyperscale
        </p>

        <div className={styles.grid}>
          <Link href="/about">
            <a className={styles.card}>
              <h3>about &rarr;</h3>
              <p>information about hyperscale</p></a>
          </Link>

          <Link href="/apply" ><a className={styles.card}>
            <h3>apply &rarr;</h3>
            <p>apply to hyperscale</p></a>
          </Link>

          <Link href="/connect" ><a className={styles.card}>
            <h3>connect &rarr;</h3>
            <p>connect your wallet</p></a>
          </Link>

          <Link href="/join" ><a className={styles.card}>
            <h3>join &rarr;</h3>
            <p>join hyperscale</p></a>
          </Link>
        </div>
      </main>

      <footer className={styles.footer}>

        <Link href="/">
          <a className={styles.card}>
            Powered by{' '}
            <img src="/vercel.svg" alt="Vercel" className={styles.logo} />
          </a>
        </Link>
      </footer>

    </div>
  )
}
