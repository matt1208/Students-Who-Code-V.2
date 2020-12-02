import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Snow from 'resnow'

function myFunction2() {
    document.getElementById('correctanswer').style.cssText = 'background-color: #20639B; border-radius: 5px; padding: 10px; color: white;';
    document.getElementById('caexplain').style.cssText = 'display: block';
}

export default function Home() {
  return (
    <div className={styles.maincontainer}>
      <Head>
        <title>Fundamentals of CS</title>
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

      <div className={styles.mainheader}>
      <p>Fundamentals of Comptuer Science</p>
    </div>

    <div className={styles.subheader}>
      <p>Computer Science Overview</p>
    </div>

    <div className={styles.courselist}>
      <p>Computer science is focused around computer programs and systems. Computer science deals with how those programs are designed, created, and applied.</p>
      <h3>Test Your Knowledge</h3>
      <p>Would computer hardware construction fall under the Computer Science category?</p>
      <p>A. Yes it would fall under Computer Science</p>
      <div id="correctanswer">
        <p>B. No it would not</p>
        <div id="caexplain">
          <p>Computer hardware would not be under the Computer Science category because computer science focuses on computer programs, not hardware.</p>
        </div>
      </div>
      <p>C. Depending on the type of hardware</p>
      <button className={styles.secondarybtndark} style={{width: "250px"}} onClick={() => { myFunction2();}}>Check Answer</button>
    </div>

    <br></br>

    <div className={styles.subheader}>
      <p>Abstraction</p>
    </div>

    <div className={styles.courselist}>
      <p>Abstractions are the essential features without the background details or information. Abstractions are helpful as they reduce the complexity of the program.</p>
      <p>They also help make efficeient design and implementation of software.</p>
      <img src="/src/AbstractionPic.PNG" alt="Block code example of abstraction"></img>
      <p>The abstraction example above is from a block code programming langauge, Snap! This one block is able to tell the computer how many steps to move the character or sprite. The programmer does not have to specifically explain how to move, because of the abstraction the computer knows what to do in just 1 line of code.</p>
    </div>

    <br></br>

    <div className={styles.subheader}>
      <p>Algorthims</p>
    </div>

    <div className={styles.courselist}>
      <p>A well defined solution that allows the computer to solve a problem. Sometimes it can take multiple algorthims to solve a problem.</p>
      <p>Calculators, spell checking, games, and search engines all use algorithms to help complete tasks.</p>
    </div>

    <br></br>

    <div className={styles.upnext}>
      <center><a href="/introhtml"><button className={styles.secondarybtndark} style={{width: "200px;"}}>Next Course</button></a></center>
    </div>

    <br></br>


      
      <script src="https://embed.small.chat/T015AE2ETNHG015AE5MT3P.js" async></script>

  
       
    </div>
  )
}
