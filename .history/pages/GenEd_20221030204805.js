import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import 'bootstrap/dist/css/bootstrap.css'
import Link from 'next/link';
export default function GenEd() {
return(
//class choices form
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
<form>
<h4>General Ed Group A: English and Communication Group </h4>
<p> Part 1: Written Composition</p>
<input type="radio" id="English 100" name="English 100" value="English 100"/>
<label for="English 100"> English 100: General English </label><br/>
<p>Part 2: Reading Composition</p>
<input type="radio" id="English 101" name="English 101" value="English 101"/>
<label for="English 101"> English 101: College Reading</label><br/>
<p>Part 3: Oral Communication</p>
<input type="radio" id="Communication 101" name="Communication 101" value="Communication 101"/>
<label for="Communication 101"> Communication 101: Oral Communication</label><br/>
<br/>
<h4>General Ed Group B: Math </h4>
<input type="checkbox" id="Math 100" name="Math 100" value="Math 100"/>
<label for="Math 100"> Math 100: College Algebra</label><br/>
<input type="checkbox" id="Math 103" name="Math 103" value="Math 103"/>
<label for="Math 103"> Math 103: Statistics</label><br/>
<input type="checkbox" id="Math 104" name="Math 104" value="Math 104"/>
<label for="Math 104"> Math 104: Buisness and Consumer Math</label><br/>
<input type="checkbox" id="Math 130" name="Math 130" value="Math 130"/>
<label for="Math 130"> Math 130: STEM Prep Part 1: Trigonometry</label><br/>
<input type="checkbox" id="Math 135" name="Math 135" value="Math 135"/>
<label for="Math 135"> Math 135:  STEM Prep Part 2: College Precalculus</label><br/>
<br/>
<h4>General Ed Group C: Enlightenment </h4>
<input type="checkbox" id="Philosophy 100" name="Philosophy 100" value="Philosophy 100"/>
<label for="Philosophy 100"> Philosophy 100: Introduction to Philosophy</label><br/>
<input type="checkbox" id="Zen 100" name="Zen 100" value="Zen 100"/>
<label for="Zen 100"> Zen 100</label><br/>
<input type="checkbox" id="Zen 103" name="Zen 103" value="Zen 103"/>
<label for="Zen 103"> Zen 103</label><br/>
<input type="checkbox" id="Zen 105" name="Zen 105" value="Zen 105"/>
<label for="Zen 105"> Zen 105</label><br/>
<br/>
<h4>General Ed Group D: Electives </h4>
<input type="checkbox" id="Zen 108" name="Zen 108" value="Zen 108"/>
<label for="Zen 108"> Zen 108</label><br/>
<input type="checkbox" id="Art 100" name="Art 100" value="Art 100"/>
<label for="Art 100"> Art 100</label><br/>
<input type="checkbox" id="Art 101" name="Art 101" value="Art 101"/>
<label for="Art 101"> Art 101</label><br/>
<input type="checkbox" id="Music 113" name="Music 113" value="Music 113"/>
<label for="Music 113"> Music 113</label><br/>
<input type="checkbox" id="Music 114" name="Music 114" value="Music 114"/>
<label for="Music 114"> Music 114</label><br/>
<input type="checkbox" id="Film 101" name="Film 101" value="Film 101"/>
<label for="Film 101"> Film 101</label><br/>
<br/>
<h4>General Ed Group E: History </h4>
<input type="checkbox" id="History 100" name="History 100" value="History 100"/>
<label for="History 100"> History 100</label><br/>
<input type="checkbox" id="History 101" name="History 101" value="History 101"/>
<label for="History 101"> History 101</label><br/>
<input type="checkbox" id="History 110" name="History 110" value="History 110"/>
<label for="History 110"> History 110</label><br/>
<input type="checkbox" id="History 111" name="History 111" value="History 111"/>
<label for="History 111"> History 111</label><br/>
<input type="checkbox" id="Pol-Science 101" name="Pol-Science 101" value="Pol-Science 101"/>
<label for="Pol-Science 101"> Political Science 101</label><br/>
<br/>
<h4>General Ed Group F: Science </h4>
<input type="checkbox" id="Science 100" name="Science 100" value="Science 100"/>
<label for="Science 100"> Science 100</label><br/>
<input type="checkbox" id="Science 101" name="Science 101" value="Science 101"/>
<label for="Science 101"> Science 101</label><br/>
<input type="checkbox" id="Science 102" name="Science 102" value="Science 102"/>
<label for="Science 102"> Science 102</label><br/>
<br/>
<button type="submit" className="btn btn-primary">Submit</button>
</form>
<Link legacyBehavior href="/"> 
        <a className="btn btn-success">Home</a>
        </Link>
</main>
      </div>
)}
