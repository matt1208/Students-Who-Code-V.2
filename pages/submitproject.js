import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.maincontainer}>
      <Head>
        <title>Submit a Project</title>
        <link rel="icon" href="/src/Logo1.png" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <ul className={styles.navbar}>
          <Link href="/"><img src="/src/Logo2.png" alt="Home Logo" height="75px" width="75px" style={{ cursor: "pointer" }}></img></Link>
        <div className={styles.rightnavarea}>
          <li className={styles.rightnav}><Link href="/codingconnected">Coding Connected</Link></li>
          <li className={styles.rightnav}><Link href="/courses">Courses</Link></li>
        </div>
      </ul>

      <div id="submitarea">
        <div className={styles.submitcolumn} style={{borderRight: "2px solid #E7DFC6"}}>
            <center><img src="src/Logo1.png" height="300px" width="300px" style={{marginTop: "50px;"}}></img></center>
            <p><b>Show Off Your Work</b></p>
            <br></br>
        </div>
        <div className={styles.submitcolumn}>
            <iframe class="airtable-embed" src="https://airtable.com/embed/shrZ2LOjrop4zfTi7?backgroundColor=blue" frameborder="0" onmousewheel="" width="100%" height="525px" style={{backgroundColor: "transparent;", paddingLeft: "10px;", paddingRight: "10px;", paddingTop: "10px;", borderRadius: "20px;"}}></iframe>
            <br></br>
        </div>
    </div>

      </div>
  )
}