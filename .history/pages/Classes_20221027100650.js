/* eslint-disable @next/next/no-html-link-for-pages */
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import 'bootstrap/dist/css/bootstrap.css'
export default function Classes() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Classes</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Classes
        </h1>
<ul>General Ed </ul>
<ul>Math</ul>
<ul>Science</ul>
<ul>English</ul>
<ul>History</ul>


      </main>
    </div>
  )
}