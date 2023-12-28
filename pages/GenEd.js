import Head from 'next/head'
import styles from '../styles/Home.module.css'
import 'bootstrap/dist/css/bootstrap.css'
import Link from 'next/link';

export default function GenEd() {
  const formFields = [
    { id: "English 100", name: "English 100", value: "English 100", label: "English 100: General English" },
    { id: "English 101", name: "English 101", value: "English 101", label: "English 101: College Reading" },
    { id: "Communication 101", name: "Communication 101", value: "Communication 101", label: "Communication 101: Oral Communication" },
    // Add other form fields here
  ];

  const handleSubmit = (event) => {
    event.preventDefault();
    // Form validation logic here
  }

  return(
    <div className={styles.container}>
      <Head>
        <title>GenEd</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main className={styles.gened}>
        <h1 className={styles.title}>
          GenEd:
        </h1>
        <form onSubmit={handleSubmit}> 
          <h4>General Ed Group A: English and Communication Group </h4>
          <p> Part 1: Written Composition</p>
          {formFields.map((field) => (
            <div key={field.id}>
              <input type="radio" id={field.id} name={field.name} value={field.value} />
              <label htmlFor={field.id}>{field.label}</label><br/>
            </div>
          ))}
          {/* Add other form fields here */}
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
        <Link legacyBehavior href="/"> 
          <a className="btn btn-success">Home</a>
        </Link>
      </main>
    </div>
  )
}
