import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Snow from 'resnow'

export default function Home() {
  return (
    <div className={styles.maincontainer}>
      <Head>
        <title>Students Who Code</title>
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
    <div className={styles.tightrow}>
      <div className={styles.tightcolumn}>
        <p className={styles.headerTitle}>Students Who Code</p>
        <p className={styles.subtitle}>Computer science and coding courses created by students for students all for free. Create an account to get started.</p>
        <button className={styles.headerbtn}>Sign Up</button>
      </div>
      <div className={styles.tightcolumn}>
        <img src="/src/Header.png" height="550px" width="600px"></img>
      </div>
    </div>

    <br></br>

    <div className={styles.mainpoints}>
      <div className={styles.mainpointscolumn} style={{ marginRight: "10px"}}>
        <center><img src="src/BinaryIcon.png" alt="Code Icon" height="120px" width="120px"></img></center>
        <p>Students changing the world with code, due to their passion for change and computer science. We have courses for students interested in Web Development with more to come!</p>
      </div>
      <div className={styles.mainpointscolumn} style={{ marginRight: "10px"}}>
        <center><img src="src/MoneyIcon.png" alt="Money Icon" height="120px" width="120px"></img></center>
        <p>Students Who Code is free for all users. We believe that no students should have to pay for computer science education, and miss there chance to create the next world changing program! </p>
      </div>
      <div className={styles.mainpointscolumn}>
        <center><img src="src/BookIcon.png" alt="Book Icon" height="120px" width="120px"></img></center>
        <p>For students by students. All courses are designed and built by  high school students.  Students can be assured that the material is understandable and user friendly.</p>
      </div>
    </div>

    <br></br>

    <div>
      <p className={styles.header3} style={{ color: "white", textAlign: "center" }}>Coding Connected</p>
      <p className={styles.normaltext} style={{ textAlign: "center", paddingLeft: "44px", paddingRight: "44px", fontWeight: "bold" }}>Our platform to help students grow and learn about computer science. Students Who Code wants all users and students to take part in Coding Connected.</p>
    </div>

    <div className={styles.connecetedrow}>
        <div className={styles.connectedcolumn} data-aos="fade-down">
          <center><img src="src/Message2.png" alt="Connected Graphic" height="100px" width="100px"></img></center>
          <h2>Code Masters</h2>
          <p>Code Masters are high school coders who there to help you whenever you have a question or want feeback.</p>
          <center><Link href="login.html" target="_blank"><button className={styles.secondarybtndark}>Connect</button></Link></center>
          <br></br>
        </div>
        <div className={styles.connectedcolumn} data-aos="fade-down">
          <center><img src="src/Spotlight.png" alt="Spotlight" height="100px" width="100px"></img></center>
          <h2>Submit A Project</h2>
          <p>Login to submit your coding projects to be spotlighted or featured for its purpose or function!</p>
          <center><Link href="login.html"><button className={styles.secondarybtndark}>Login</button></Link></center>
          <br></br>
        </div>
    </div>

    <div className={styles.footer}>
      <h2>Students Who Code</h2>
      <h2><Link href="about.html">About</Link> |<Link href="contact.html">Contact Us</Link> | <Link href="signup.html">Sign Up</Link></h2>
    </div>


    <script src="https://embed.small.chat/T015AE2ETNHG015AE5MT3P.js" async></script>

  
       
    </div>
  )
}
