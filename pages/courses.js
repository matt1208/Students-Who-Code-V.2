import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Snow from 'resnow'

export default function Home() {
  return (
    <div className={styles.maincontainer}>
      <Head>
        <title>Courses</title>
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
          <button className={styles.secondarybtn}>Start</button>
        </div>
        <div className={styles.card}>
          <p className={styles.header4}>Intro to HTML</p>
          <p className={styles.tag}>Web Dev</p>
          <button className={styles.secondarybtn}>Start</button>
        </div>
        <div className={styles.card}>
          <p className={styles.header4}>Intro to CSS</p>
          <p className={styles.tag}>Web Dev</p>
          <button className={styles.secondarybtn}>Start</button>
        </div>
        <div className={styles.card}>
          <p className={styles.header4}>Text and Images in Websites Part 1</p>
          <p className={styles.tag}>Web Dev</p>
          <button className={styles.secondarybtn}>Start</button>
        </div>
        <div className={styles.card}>
          <p className={styles.header4}>Text and Images in Websites Part 2</p>
          <p className={styles.tag}>Web Dev</p>
          <button className={styles.secondarybtn}>Start</button>
        </div>
        <div className={styles.card}>
          <p className={styles.header4}>Creating a Multiple Page Website</p>
          <p className={styles.tag}>Web Dev</p>
          <button className={styles.secondarybtn}>Start</button>
        </div>
        <div className={styles.card}>
          <p className={styles.header4}>Intro to Programming</p>
          <p className={styles.tag}>Web Dev</p>
          <button className={styles.secondarybtn}>Start</button>
        </div>
      </div>

      <script src="https://embed.small.chat/T015AE2ETNHG015AE5MT3P.js" async></script>

  
       
    </div>
  )
}
