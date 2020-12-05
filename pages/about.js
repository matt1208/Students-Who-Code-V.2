import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.maincontainer}>
      <Head>
        <title>About</title>
        <link rel="icon" href="/src/Logo1.png" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
      </Head>
      <ul className={styles.navbar}>
        <Link href="/"><img src="/src/Logo2.png" alt="Home Logo" height="75px" width="75px"></img></Link>
      <div className={styles.rightnavarea}>
        <li className={styles.rightnav}><Link href="/codingconnected">Coding Connected</Link></li>
        <li className={styles.rightnav}><Link href="/courses">Courses</Link></li>
      </div>
    </ul>


    <div className={styles.mainheader}>
      <p style={{color: "white"}}>About Students Who Code</p>
    </div>

    <div className={styles.subheader}>
      <p>Our Plan</p>
    </div>

    <div className={styles.courselist}>
      <p>Students Who Code purpose is to allow students to learn about computer science and different coding languages for free, while providing quality courses. Students whose schools don't offer computer science education, can't afford or don't want to pay for some premium online courses, or just want to learn how to code can all use Students Who Code. </p>
      <p>The courses are created to give students a project to work on while learning. For example as a student goes through the "Intro to HTML" course they will be coding their very website, and will have a finished project ready to share once the course is over. </p>
      <p>Coding Connected is a way for students to be connected with students that are also coding. They can submit and see other students projects, talk to experienced high school coders to get answers or feedback, and stay connected with the Coding Connected community. </p>
    </div>

    <div className={styles.subheader}>
      <p>Where did Sign In and Sign Up go?</p>
    </div>

    <div className={styles.courselist}>
      <p>Students wanting to learn will no longer have to sign up or login. When trying to make the user experience better it was realized that making people sign up was another obstacle for students wanting to learn. Now, no one needs to input personal information, be required a have an email, or remember a password. Anyone with an old member account should not worry as the old database will be deleted shortly after the deployment of V.2</p>
    </div>

    <div className={styles.subheader}>
      <p>Want to Help?</p>
    </div>

    <div className={styles.courselist}>
      <p>If you would like to contribute or create a course for Students Who Code, contact us at support@studentswhocode.org</p>
    </div>

    <div className={styles.subheader}>
      <p>Branding</p>
      </div>

      <div className={styles.courselist}>
        <p>Our branding page is coming soon!</p>
      </div>

      <br></br>





    <script src="https://embed.small.chat/T015AE2ETNHG015AE5MT3P.js" async></script>
    <script src="https://unpkg.com/aos@next/dist/aos.js"></script>
    <script>
      AOS.init();
    </script>
    <script async defer src="https://scripts.simpleanalyticscdn.com/latest.js"></script>
      <noscript><img src="https://queue.simpleanalyticscdn.com/noscript.gif" alt=""/></noscript>
  
       
    </div>
  )
}
