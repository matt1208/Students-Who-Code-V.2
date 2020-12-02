import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.maincontainer}>
      <Head>
        <title>Text & Images Part 2</title>
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
      <p>Working with Text and Images Part 2</p>
    </div>

    <div className={styles.courselinks}>
      <Link href="https://repl.it/@Mattvd/AboutMeCourse#index.html" target="_blank">Final Code</Link><br></br>
      <Link href="https://aboutmecourse--mattvd.repl.co/" target="_blank">Final Product</Link>
    </div>

    <div className={styles.subheader}>
      <p>Creating Lists</p>
    </div>

    <div className={styles.courselist}>
      <p>In this course you will finish the About Me website from <Link href="/textimg2">Working with Text and Images Part 1</Link>. In this part of the project you will learn about lists and differnt font styles in HTML.</p>
      <p><b style={{color: "#ed553b"}}>Coding Tip:</b> There are two types of lists that can be created with HTML: Ordered lists <code>&lt;ol&gt;</code> and unordered lists <code>&lt;ul&gt;</code>. The main difference is ordered lists use numbers, and unordered lists use bullet points. Today we will be creating an unordered list.</p>
      <p>1. First create another div with an id named "describe"</p>
      <p>2. Create a subheader, h2, "Words that Describe Me"</p>
      <p>3. Create an unordered list</p>
      <code>&lt;ul&gt;</code>
      <p>4. To add bullet points and actually start the list, use the list attribute <code>&lt;li&gt;</code></p>
      <p>5. Write out at least 4 words that descibe you. Make sure each word that you choose is a new item in the list.</p>
      <p>6. Check your code below and don't forget to close your unordered list and the div!</p>
      <code>
        <span> &lt;div id="describe"&gt;</span><br></br>
        &nbsp;<span>&lt;h2&gt;Words that Descibe Me&lt;/h2&gt;</span><br></br>
        &nbsp;<span>&lt;ul&gt;</span><br></br>
        &nbsp;&nbsp;<span>&lt;li&gt;Creative&lt;/li&gt;</span><br></br>
        &nbsp;&nbsp;<span>&lt;li&gt;Student&lt;/li&gt;</span><br></br>
        &nbsp;&nbsp;<span>&lt;li&gt;Athlete&lt;/li&gt;</span><br></br>
        &nbsp;&nbsp;<span>&lt;li&gt;Leader&lt;/li&gt;</span><br></br>
        &nbsp;<span>&lt;/ul&gt;</span><br></br>
        <span>&lt;/div&gt;</span>
      </code>
      <p>7. Run your project to see the list you created, notice how each new <code>li</code> tag is a new bullet point.</p>
      <img src="/src/AboutMe3.PNG" style={{marginLeft: "44px"}} alt="Code"></img>
    </div>

    <br></br>

    <div className={styles.subheader}>
      <p>Bold and Italizing</p>
    </div>

    <div className={styles.courselist}>
      <p>In HTML you can also change the style of text without having to use CSS. Certain tags are used in HTML to make the text bold or italicized.</p>
      <p><b style={{color: "#ed553b"}}>Coding Tip:</b> To bold words use the <code>&lt;b&gt;</code> tag before and after the word(s) you want to be bold. If decided to not bold them in the HTML file and you can also bold words in CSS using the <code>font-weight: bold;</code> CSS code.</p>
      <p>1. Choose one word to bold that you think is the word that best descirbes you.</p>
      <p><b style={{color: "#ed553b"}}>Coding Tip:</b> To italicize use the <code>&lt;em&gt;</code> tag before and after the word(s) you want to be italicized.</p>
      <p>2. Choose the word that most people would say when asked to descibe you. Run your program to see your final About Me website!</p>
      <img src="/src/AboutMe4.PNG" style={{marginLeft: "44px"}} alt="Code"></img>
    </div>

    <br></br>

    <div className={styles.upnext}>
      <center><Link href="/multiwebsite"><button className={styles.secondarybtndark} style={{width: "200px;"}}>Next Course</button></Link></center>
    </div>

    <br></br>



      <script src="https://embed.small.chat/T015AE2ETNHG015AE5MT3P.js" async></script>

  
       
     </div>
 )
}
