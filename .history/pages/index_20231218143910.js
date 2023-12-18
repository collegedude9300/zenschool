import Link from 'next/link';
/* eslint-disable @next/next/no-html-link-for-pages */
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import 'bootstrap/dist/css/bootstrap.css'

export default function Home() {
  return (
    <section className={styles.container}>
      <Head>
        <title>Welcome to The Zen Inspiration School</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to The Zen Inspiration School
        </h1>
        <div className={styles.grid}>
          <Link href="/SignUp" passHref></Link>
            <a className={styles.card}>
              <h2>Sign Up &rarr;</h2>
              <p>Sign up to enroll in classes.</p>
            </a>
          
          <Link href="/Login" passHref></Link>
            <a className={styles.card}>
              <h2>Login &rarr;</h2>
              <p>If you have an account already, log in.</p>
            </a>
          
          <Link href="/Classes" passHref></Link>
            <a className={styles.card}>
              <h2>Classes &rarr;</h2>
              <p>List of different classes</p>
            </a>
          
          <Link href="/GenEd" passHref></Link>
            <a className={styles.card}>
              <h2>Gen Ed Form &rarr;</h2>
              <p>Gen ed form</p>
            </a>
        </div>
      </main>
    </section>
  )
}
