import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Snow from 'resnow'

export default function Home() {
  return (
    <div className={styles.maincontainer}>
      <Head>
        <title>Set Up Repl.it</title>
        <link rel="icon" href="/src/Logo1.png" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <ul className={styles.navbar}>
        <Link href="/"><img src="/src/Logo2.png" alt="Home Logo" height="75px" width="75px" style={{ cursor: "pointer" }}></img></Link>
      <div className={styles.rightnavarea}>
        <li className={styles.rightnav}><Link href="/signup">Coding Connected</Link></li>
        <li className={styles.rightnav}><Link href="/courses">Courses</Link></li>
      </div>
    </ul>

    <div className={styles.mainheader}>
      <p>Intro to Repl.it & Students Who Code</p>
    </div>

    <div className={styles.courselinks}>
      <Link href="https://repl.it/" target="_blank">Repl.it</Link>
    </div>

    <div className={styles.subheader}>
      <p>Create a Repl</p>
    </div>

    <div className={styles.courselist}>
      <p>1. Go to Repl.it</p>
      <p>2. Click on the button that says "Start Coding"</p>
      <p>3. Enter "HTML", Select HTML/CSS/JavaScript</p>
      <img src="/src/courserepl.png" height="250px" style={{marginLeft: "50px"}}></img>
      <p>4. Create Repl</p>
    </div>

    <div className={styles.subheader}>
      <p>Learning Repl.it</p>
    </div>

    <div className={styles.courselist}>
      <p>1. On the left: File Navigation & Add Files Location</p>
      <img src="/src/ReplCourse1.png" height="300px" style={{marginLeft: "50px"}}></img>
      <p>2. On the left: Is also where you can change setting for your work environment</p>
      <p>3. In the middle: Code Editor</p>
      <img src="/src/ReplCourse2.png" height="300px" style={{marginLeft: "50px"}}></img>
      <p>4. On the right: Display and Terminal</p>
      <p>5. Run: When clicked it will display what is coded in the display and updates the display</p>
      <p>6. Open in Tab Button: On top of the display is a button to open your display in a new tab</p>
      <p>7. Sign Up Button: Allows for more features and keeping track of projects</p>
      <img src="/src/ReplCourse3.png" height="350px" style={{marginLeft: "50px"}}></img>
    </div>

    <br></br>

    <div className={styles.upnext}>
      <center><Link href="/fundcs"><button className={styles.secondarybtndark} style={{width: "200px"}}>Next Course</button></Link></center>
    </div>

    <br></br>

</div>

    )
  }
  