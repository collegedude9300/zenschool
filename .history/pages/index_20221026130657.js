/* eslint-disable @next/next/no-html-link-for-pages */
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import 'bootstrap/dist/css/bootstrap.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to The Zen Inspiration School
        </h1>
        <div className={styles.grid}>
          <a href="/SignUp" className={styles.card}>
            <h2>Sign Up &rarr;</h2>
            <p>Sign up to enroll in classes.</p>
          </a>
          <a href="/Login" className={styles.card}>
            <h2>Login &rarr;</h2>
            <p>If you have an account already, log in.</p>
            </a>
            <a href="/Classes" className={styles.card}>
            <h2>Classes &rarr;</h2>
            <p>List of different classes</p>
            </a>
            <a href="/GenEd" className={styles.card}>
            <h2>Gen Ed Form &rarr;</h2>
            <p>Gen ed form</p>
            </a>
        </div>
      </main>
    </div>
  )
}
