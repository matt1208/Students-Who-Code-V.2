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
        <Link href="/"><img src="/src/Logo2.png" alt="Home Logo" height="75px" width="75px"></img></Link>
      <div className={styles.rightnavarea}>
      <li className={styles.rightnav}><Link href="/signup">Coding Connected</Link></li>
        <li className={styles.rightnav}><Link href="/courses">Courses</Link></li>
      </div>
    </ul>
    
    <div className={styles.grid}>
      <div className={styles.card}>
        Intro to HTML
      </div>
      <div className={styles.card}>
        Intro to HTML
      </div>
    </div>

    <script src="https://embed.small.chat/T015AE2ETNHG015AE5MT3P.js" async></script>

  
       
    </div>
  )
}
