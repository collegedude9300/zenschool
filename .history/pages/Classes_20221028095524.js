/* eslint-disable @next/next/no-html-link-for-pages */
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import 'bootstrap/dist/css/bootstrap.css'
import Link from 'next/link';
export default function Classes() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Classes</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main className={styles.classpage}>
        <h1 className={styles.title}>
          Classes:
        </h1>
    <h2> Gen Ed</h2>
        <ul>
    <h4>General Ed Group A: English and Communication Group </h4>
   <li> English 100: General English Composition </li>
    <li> English 101: College Reading </li>
    <li> Communication 101: Oral Presentation Skills </li> 
    </ul>
       <ul>
       <h4>General Ed Group B: Math </h4>
    <li> Math 100: College Algebra </li>
    <li> Math 103: College Stats </li>
    <li> Math 104: Buisness and Consumer Math </li>
    <li> Math 130: STEM Prep Part 1: Trigonometry </li>
    <li> Math 135:  STEM Prep Part 2: College Precalculus </li>
    </ul>
    <ul>
    <h4>General Ed Group C: Enlightenment </h4>
    <li> Philosophy 100: Introduction to Philosophy </li>
    <li> Zen 100: Introduction to Zen Studies </li>
    <li> Zen 103: Enlightement Techniques I </li>
    <li> Zen 105: Enlightement Techniques II </li>
    </ul>
    <ul>
    <h4>General Ed Group D: Electives </h4>
    <li> Zen 108:  Yoga and Meditation </li>
    <li> Art 100: Introduction to Art</li>
    <li> Art 101: Art History </li>
    <li> Music 113: Survey of Music </li>
    <li> Music 114: History of Rock & Roll </li>
    <li> Film 101: History of Film </li>
    </ul>
    <ul>
    <h4>General Ed Group E: History </h4>
    <h5> Group A:</h5>
    <li> History 100: Pre World History  </li>
    <li> History 101: Modern World History </li>
    <h5> Group B:</h5>
    <li> History 110: Ancient US History </li>
    <li> History 111: Modern US History </li>
    <h5> Group C:</h5>
    <li> Political Science 100: Introduction to Political Science </li>
    </ul>
    <ul>
    <h4>General Ed Group F: Science </h4>
    <li> Bio 100: General Biology (with lab) </li>
    <li> Chemistry 100: General Chemistry (with lab)</li>
    <li> Zoology 101: General Zoology (with lab)</li>
    </ul>
    <Link legacyBehavior href="/"> 
        <a className="btn btn-success">Home</a>
        </Link>
      </main>
    </div>
  )
}