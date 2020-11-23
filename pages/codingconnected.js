import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Snow from 'resnow'
import Navbar from '../components/nav'

export default function Home() {
  return (
    <div className={styles.maincontainer}>
      <Head>
        <title>Coding Connected</title>
        <link rel="icon" href="/src/Logo1.png" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
      </Head>
      <Navbar />

      <div className={styles.tightrow}>
        <div className={styles.tightcolumn}>
          <p className={styles.headerTitle}>Coding Connected</p>
        </div>
        <div className={styles.tightcolumn}>
          <img src="/src/CC Header.png"></img>
        </div>
    </div>
    
      <center><p className={styles.header3} style={{ color: "white" }}>Project Showcase</p></center>
      <div className={styles.grid}>
          <div className={styles.projectshowcase}>
              <h1>Penty Desktop Assistant</h1>
              <p>A quick project to show how Python can be linked up with JS to create stunning desktop applications.</p>
              <a href="https://github.com/JeswinSunsi/PentyDesktopAssistant" target="_blank">Github</a>
          </div>
          <div className={styles.projectshowcase}>
              <h1>Danger Scavenger</h1>
              <p>The game is a side scrolling shooter. You play as a deserted space traveler trying to survive on a hostile planet.</p>
          </div>

      </div>
      <br></br>
      <center><Link href="/submitproject"><button className={styles.secondarybtndark} style={{width: "250px"}}>Submit A Project</button></Link></center>

      <br></br>

      <center><p className={styles.header3} style={{ color: "white" }}>Resources</p></center>

      <div className={styles.grid}>
      <div className={styles.card} style={{flexBasis: "30%", border: "none", height: "100%"}} data-aos="flip-up">
          <center><img src="/src/Editor.png" height="150px" width="200px" alt="Code Masters"></img></center>
          <center><p className={styles.header4} style={{color: "white"}}>SWC Editior</p></center>
          <center><p className={styles.normaltext}>Experiment and build new and exciting projects! It will be ready to use soon!</p></center>
        </div>
        <div className={styles.card} style={{flexBasis: "30%", border: "none", height: "100%"}} data-aos="flip-up">
          <center><img src="/src/Message.png" height="150px" width="150px" alt="Code Masters"></img></center>
          <center><p className={styles.header4} style={{color: "white"}}>Code Masters</p></center>
          <center><p className={styles.normaltext}>Get help or advice by using the "Ask a Question" button in the corner.</p></center>
        </div>
        <div className={styles.card} style={{flexBasis: "30%", border: "none", height: "100%"}} data-aos="flip-up">
          <center><img src="/src/hackclub.png" height="150px" width="150px" alt="Code Masters"></img></center>
          <center><a href="https://hackclub.com/" target="_blank"><p className={styles.header4} style={{color: "white", cursor: "pointer"}}>Hack Club</p></a></center>
          <center><p className={styles.normaltext}>Join or create a coding club at your school through Hack Club!</p></center>
        </div>
      </div>

      
     <script src="https://embed.small.chat/T015AE2ETNHG015AE5MT3P.js" async></script>
     <script src="https://unpkg.com/aos@next/dist/aos.js"></script>
     <script>
       AOS.init();
     </script>

  
       
    </div>
    )
}
