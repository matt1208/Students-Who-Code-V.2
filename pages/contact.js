import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Navbar from '../components/nav'

export default function Home() {
  return (
    <div className={styles.maincontainer}>
      <Head>
        <title>Contact</title>
        <link rel="icon" href="/src/Logo1.png" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
      </Head>
      <Navbar />
      <br></br>

      <div className={styles.signuparea} style={{padding: "20px"}}>
        <p className={styles.mainheader} style={{color: "white", textAlign: "center"}}>Sorry, our Contact Form is currently under development!</p>
        <p className={styles.normaltext} style={{textAlign: "center"}}>If you would like to contact Students Who Code, either email us at support@studentswhocode.org or use the Ask A Question chat at the bottom of the page!</p>
      {/* <div className={styles.signupcolumn} style={{borderRight: "2px solid #E7DFC6"}}>
        <center><img src="src/Logo1.png" alt="SWC Logo" height="300px" width="300px" style={{marginTop: "150px;"}}></img></center>
        <p><b>Reach Out</b></p>
        <p>Send us questions, comments, or feedback!</p>
        <br></br>
      </div>
      <div className={styles.signupcolumn1}>
        <div className={styles.formheader}><p>Contact Us</p></div>
        <form className={styles.form} action="contactform.php" method="post">
          <label for="name">Name</label>
          <br></br>
          <input type="text" id="forminput" name="name" required></input>

          <br></br>

          <label for="email"><b>Email</b></label>
          <br></br>
          <input type="text" id="forminput" name="email" required></input>

          <br></br>

          <label for="psw"><b>Topic</b></label>
          <br></br>
          <input type="text" id="forminput" name="topic" required></input>

          <br></br>

          <label for="message"><b>Message</b></label>
          <br></br>
          <textarea id="forminput" name="message" required style={{resize: "none;", backgroundColor: "#2B2B27;", borderBottom: '3px solid #20639B', borderTop: "none;", borderLeft: "none;", borderRight:"none;", fontSize: '20px;', color: "#e7dfc6;", fontFamily: "Verdana;"}}></textarea>

          <br></br>

          <center><button type="submit" name="submit" className={styles.signupbtn}>Submit</button></center>

          <br></br>

        <div className={styles.columnmore} style={{borderTop: "2px solid #E7DFC6;"}}>
          <p>Our team will review your form, within 3-5 days!</p>
        </div>
        </form>
      </div> */}
    </div>

    <script src="https://embed.small.chat/T015AE2ETNHG015AE5MT3P.js" async></script>

    </div>
  )
}