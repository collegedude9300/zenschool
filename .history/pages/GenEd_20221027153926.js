import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import 'bootstrap/dist/css/bootstrap.css'
export default function GenEd() {
return  (
// class form
<div className={styles.container}>
<Head>
<title>Gen Ed Form</title>
<meta name="description" content="Gen Ed Form" />
<link rel="icon" href="/favicon.png" />
</Head>
<main className={styles.main}>
<h1 className={styles.title}>
Welcome to The Zen Inspiration School
</h1>
<div className={styles.grid}>
<div className="container">
<div className="row">
<div className="col-25">
<label for="fname">First Name</label>
</div>
<div className="col-75">
<input type="text" id="fname" name="firstname" placeholder="Your name.."/>
</div>
</div>
<div className="row">
<div className="col-25">
<label for="lname">Last Name</label>
</div>
<div className="col-75">
<input type="text" id="lname" name="lastname" placeholder="Your last name.."/>
</div>
</div>
<div className="row">
<div className="col-25">
<label for="major">Major</label>
</div>
<div className="col-75">
<select id="major" name="major">
<option value="Major">Major</option>
<option value="Computer Science">Computer Science</option>
<option value="English">English</option>
<option value="Mathematics">Mathematics</option>
<option value="Biology">Biology</option>
<option value="Chemistry">Chemistry</option>
<option value="Physics">Physics</option>
<option value="Psychology">Psychology</option>
<option value="Business">Business</option>
<option value="History">History</option>
<option value="Political Science">Political Science</option>
<option value="Sociology">Sociology</option>
<option value="Law">Law</option>
<option value="Education">Education</option>
<option value="Theater">Theater</option>
<option value="Art">Art</option>
<option value="Music">Music</option>
<option value="Film">Film</option>
<option value="Other">Other</option>
</select>
</div>
</div>
<div className="row">
<div className="col-25">
<label for="minor">Minor</label>
</div>
<div className="col-75">
<select id="minor" name="minor">
<option value="Minor">Minor</option>
<option value="Computer Science">Computer Science</option>
<option value="English">English</option>
</select>
</div>
</div>
</div>
</div>
</main>
</div>
)}
