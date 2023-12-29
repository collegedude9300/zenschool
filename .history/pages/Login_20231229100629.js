import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css'
import { useState } from 'react';
const validateEmail = (email) => {
  const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$/;
  return re.test(String(email).toLowerCase());
}

const validateName = (name) => {
  const re = /^[A-Z][a-z]+(\s|,)[A-Z][a-z]{1,19}$/;
  return re.test(String(name));
}

export default function Login() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [emailError, setEmailError] = useState("");
  const [nameError, setNameError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateEmail(email) && validateName(name)) 
    {
      setEmail("");
      setName("");
      setEmailError("");
      setNameError("");
      alert("Form submitted successfully");
    }
    else {
      if (!validateEmail(email)) {
        setEmailError("Please enter a valid email address");
      } else {
        setEmailError("");
      }
      if (!validateName(name)) {
        setNameError("Please enter a valid name");
      } else {
        setNameError("");
      }
    }
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Contact</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main className={styles.login}>
        <h1 className={styles.title}>
          Contact Me:
        </h1>
        <div className={styles.grid}>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input type="text" name="name" id="name" placeholder=""/>
                <div id="name-error">{nameError}</div>
                <label htmlFor="email">Email address</label>
                <input type="email" className="form-control" id="email" placeholder="Enter email"/>
                <div id="email-error">{emailError}</div>
              </div>
              <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
        <Link href="/" passHref>
              <h2>Home</h2>
              </Link>
      </main>
    </div>
  );
}