import Head from 'next/head'
import styles from '../styles/Holiday.module.css'
import Header from '../components/Header'
import Mission from '../components/Mission'
import Footer from '../components/Holiday Footer'
import Submissions from '../components/submissions'
import Link from 'next/link'
import Snow from 'resnow'

export default function Home() {
  return (
    <div>
    <div className={styles.container} style={{background: "#206391" , overflow: "hidden"}}>
      <style>{'body { background-color: #206391; padding: 0; margin: 0;}'}</style>
      <Snow />
      <Head>
        <title>Holiday Challenge</title>
        <link rel="icon" href="/snowman.svg" />
        <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
      </Head>
        <ul className={styles.navbar} style={{maxWidth: "1200px", width: "100%", marginLeft: "auto", marginRight: "auto"}}>
            <Link href="/"><img src="/src/Logo2.png" alt="Home Logo" height="75px" width="75px" style={{ cursor: "pointer" }}></img></Link>
          <div className={styles.rightnavarea}>
            <li className={styles.rightnav}><Link href="/codingconnected">Coding Connected</Link></li>
            <li className={styles.rightnav}><Link href="/courses">Courses</Link></li>
          </div>
        </ul>
      <Header />
      <Snow />
      </div>
      <div className={styles.container} style={{maxWidth: "100%", overflow: "hidden"}}>
      <Submissions />
      <Snow />
      </div>
      <div className={styles.container} style={{background: "#206391", overflow: "hidden"}}>
      <Footer />
      <Snow />
    </div>
    <script src="https://embed.small.chat/T015AE2ETNHG015AE5MT3P.js" async></script>
    <script async defer src="https://scripts.simpleanalyticscdn.com/latest.js"></script>
      <noscript><img src="https://queue.simpleanalyticscdn.com/noscript.gif" alt=""/></noscript>
    </div>
  )
}
