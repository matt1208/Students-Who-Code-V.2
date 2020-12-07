import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Snow from 'resnow'

export default function Home() {
  return (
    <div className={styles.maincontainer}>
      <Head>
        <title>Github Pages</title>
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
            <p>Github Pages</p>
        </div>

        <div className={styles.subheader}>
            <p>One Way to Publish Your Website</p>
        </div>

        <div className={styles.courselist}>
            <p>Once you have created your website, letting other people in the world see it is always a tricky task and hard for beginner coders to accomplish at first. Luckily Github Pages is a free and easy method to host your simple HTML/CSS website. </p>
        </div>
        
        <div className={styles.subheader}>
            <p>Github</p>
        </div>

        <div className={styles.courselist}>
            <p>To access Github Pages you need a Github account. Github, is the industry leading open souce and version history platform for software developers. Github lets you keep all of your coding projects in one space and keeping track of when you make new changes, while also allowing you to share your code with the world. </p>
            <p>The first step is to create a Github account, if you do not already have one. Go to <a href="https://github.com/" target="_blank">Github</a> and input all of your information to create your account. </p>
        </div>
        
        <img src="/src/Github1.PNG" alt="Github Home Page" height="600px" width="900px"></img>

        <div className={styles.subheader}>
            <p>Creating Your Repository</p>
        </div>

        <div className={styles.courselist}>
            <p>If you do not already have a repository for you code made, you will want to click the + in the upper right hand corner of the screen. Select the first option, "New Repository". You will then fill out all the information about your new repository, the name, whether you want it public or private, and then click "Create"!</p>
        </div>

         <img src="/src/Github2.PNG" alt="Github Creating Your Repository"  width="300px"></img>

         <div className={styles.subheader}>
            <p>Adding Code to the Repository</p>
         </div>

         <div className={styles.courselist}>
            <p>Once your repository is all set up it is time to add your code into your project, if you have not already done this. This course will just talk about adding your code once your done with the project, and will not focus on commits and version control.</p>
            <p>To add your code, a simple step is to click the hyperlink text that says "...uploading an existing file". There you can select the files from your computer that you want to publish to Github pages. </p>
            <p><b style={{color: "#ed553b"}}>Coding Tip:</b> There are other methods to upload your files that you can check out on Github.</p>
         </div>

         <img src="/src/Github4.PNG" alt="Github Creating Your Repository" width="700px" ></img>

         <div className={styles.subheader}>
             <p>Publishing to Github Pages </p>
         </div>

         <div className={styles.courselist}>
             <p>Now that your code is in the repository, head over to the settings tab in the repository. To get Github Pages enabled scroll all the way down and choose the "main" branch as the source for the Github Page. From there it is as simple as clicking save and your new website is up and ready for the world to see! </p>
              <img src="/src/Github6.PNG" alt="Github Creating Your Repository" width="800px" ></img>
             <p>To access the link head back over the the "Code" tab and on the right side their is an "Environments" tag where you can click to see your deployment in action!</p>
             <br></br>
             <p>Congrats on publishing on Github Pages!</p>
             <img src="/src/Github7.PNG" alt="Github Creating Your Repository" width="300px" ></img>
         </div>



      <script src="https://embed.small.chat/T015AE2ETNHG015AE5MT3P.js" async></script>
      <script async defer src="https://scripts.simpleanalyticscdn.com/latest.js"></script>
      <noscript><img src="https://queue.simpleanalyticscdn.com/noscript.gif" alt=""/></noscript>
  
       
    </div>
  )
}