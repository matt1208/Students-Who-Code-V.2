import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Snow from 'resnow'

export default function Home() {
  return (
    <div className={styles.maincontainer}>
      <Head>
        <title>Coding Connected</title>
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

      <p className={styles.headerTitle}>Coding Connected</p>
    
      <center><p className={styles.header3} style={{ color: "white" }}>Project Showcase</p></center>
      <div className={styles.grid}>
          <div className={styles.projectshowcase}>
              <h1>Penty Desktop Assistant</h1>
              <p>A quick project to show how Python can be linked up with JS to create stunning desktop applications.</p>
              <Link href="https://github.com/JeswinSunsi/PentyDesktopAssistant" target="_blank">Github</Link>
          </div>
          <div className={styles.projectshowcase}>
              <h2>Penty Desktop Assistant</h2>
          </div>
      </div>

      
     <script src="https://embed.small.chat/T015AE2ETNHG015AE5MT3P.js" async></script>

  
       
    </div>
    )
}
