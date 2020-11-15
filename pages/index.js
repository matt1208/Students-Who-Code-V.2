import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.maincontainer}>
      <Head>
        <title>Students Who Code</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ul className={styles.navbar}>
        <Link href="/"><img src="/src/Logo2.png" alt="Home Logo" height="75px" width="75px"></img></Link>
      <div className={styles.rightnavarea}>
        <li className={styles.rightnav}><Link href="/">Sign Up</Link></li>
        <li className={styles.rightnav}><Link href="/">Login</Link></li>
        <li className={styles.rightnav}><Link href="/">Courses</Link></li>
      </div>
    </ul>

    <div className={styles.tightrow}>
      <div className={styles.tightcolumn}>
        <p className={styles.headerTitle}>Students Who Code</p>
        <p className={styles.subtitle}>Computer science and coding courses created by students for students - for free. Create an account to get started.</p>
        <button className={styles.headerbtn}>Sign Up</button>
      </div>
      <div className={styles.tightcolumn}>
        <img src="/src/Header.png" height="550px" width="600px"></img>
      </div>
    </div>

       
    </div>
  )
}
