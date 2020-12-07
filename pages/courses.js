import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Navbar from '../components/nav'

export default function Home() {
  return (
    <div className={styles.maincontainer}>
      <Head>
        <title>Courses</title>
        <link rel="icon" href="/src/Logo1.png" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Navbar />

      <p className={styles.headerTitle}>Courses</p>
      
      <div className={styles.grid}>
        <div className={styles.card}>
          <p className={styles.header4}>How to Set up Repl.it for Projects</p>
          <p className={styles.tag}>Coding</p>
          <Link href="/replcourse"><button className={styles.secondarybtn}>Start</button></Link>
        </div>
        <div className={styles.card}>
          <p className={styles.header4}>Fundamentals of Computer Science</p>
          <p className={styles.tag}>Coding</p>
          <Link href="/fundcs"><button className={styles.secondarybtn}>Start</button></Link>
        </div>
        <div className={styles.card}>
          <p className={styles.header4}>Intro to HTML</p>
          <p className={styles.tag}>Web Dev</p>
          <Link href="/introhtml"><button className={styles.secondarybtn}>Start</button></Link>
        </div>
        <div className={styles.card}>
          <p className={styles.header4}>Intro to CSS</p>
          <p className={styles.tag}>Web Dev</p>
          <Link href="/introcss"><button className={styles.secondarybtn}>Start</button></Link>
        </div>
        <div className={styles.card}>
          <p className={styles.header4}>Text and Images in Websites Part 1</p>
          <p className={styles.tag}>Web Dev</p>
          <Link href="/textimg1"><button className={styles.secondarybtn}>Start</button></Link>
        </div>
        <div className={styles.card}>
          <p className={styles.header4}>Text and Images in Websites Part 2</p>
          <p className={styles.tag}>Web Dev</p>
          <Link href="/textimg2"><button className={styles.secondarybtn}>Start</button></Link>
        </div>
        <div className={styles.card}>
          <p className={styles.header4}>Creating a Multiple Page Website</p>
          <p className={styles.tag}>Web Dev</p>
          <Link href="/multiwebsite"><button className={styles.secondarybtn}>Start</button></Link>
        </div>
        <div className={styles.card}>
          <p className={styles.header4}>Intro to Programming</p>
          <p className={styles.tag}>Web Dev</p>
          <Link href="/introprogramming"><button className={styles.secondarybtn}>Start</button></Link>
        </div>
        <div className={styles.card}>
          <p className={styles.header4}>Publishing To Github Pages</p>
          <p className={styles.tag}>Web Dev</p>
          <Link href="/githubpage"><button className={styles.secondarybtn}>Start</button></Link>
        </div>
      </div>

      <script src="https://embed.small.chat/T015AE2ETNHG015AE5MT3P.js" async></script>
      <script async defer src="https://scripts.simpleanalyticscdn.com/latest.js"></script>
      <noscript><img src="https://queue.simpleanalyticscdn.com/noscript.gif" alt=""/></noscript>
  
       
    </div>
  )
}
