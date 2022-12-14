import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import 'bootstrap/dist/css/bootstrap.css'
export default function GenEd() {
return(
//class choices form
<div className={styles.container}>
<Head>
<title>GenEd</title>
<meta name="description" content="Generated by create next app" />
<link rel="icon" href="/favicon.png" />
</Head>
<main className={styles.main}>
<h1 className={styles.title}>
GenEd:
</h1>
<form>
<h4>General Ed Group A: English and Communication Group </h4>
<input type="checkbox" id="English 100" name="English 100" value="English 100"/>
<label for="English 100"> English 100</label><br/>
<input type="checkbox" id="English 101" name="English 101" value="English 101"/>
<label for="English 101"> English 101</label><br/>
<input type="checkbox" id="Communication 101" name="Communication 101" value="Communication 101"/>
<label for="Communication 101"> Communication 101</label><br/>
<input type="checkbox" id="Math 100" name="Math 100" value="Math 100"/>
<label for="Math 100"> Math 100</label><br/>
<input type="checkbox" id="Math 103" name="Math 103" value="Math 103"/>
<label for="Math 103"> Math 103</label><br/>
<input type="checkbox" id="Math 104" name="Math 104" value="Math 104"/>
<label for="Math 104"> Math 104</label><br/>
<input type="checkbox" id="Math 130" name="Math 130" value="Math 130"/>
<label for="Math 130"> Math 130</label><br/>
<input type="checkbox" id="Math 135" name="Math 135" value="Math 135"/>
<label for="Math 135"> Math 135</label><br/>
<input type="checkbox" id="Philosophy 100" name="Philosophy 100" value="Philosophy 100"/>
<label for="Philosophy 100"> Philosophy 100</label><br/>
<input type="checkbox" id="Zen 100" name="Zen 100" value="Zen 100"/>
<label for="Zen 100"> Zen 100</label><br/>
<input type="checkbox" id="Zen 103" name="Zen 103" value="Zen 103"/>
<label for="Zen 103"> Zen 103</label><br/>
</form>
</main>
      </div>
)}
