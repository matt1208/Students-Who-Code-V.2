import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Snow from 'resnow'


export default function Home() {
  return (
    <div className={styles.maincontainer}>
      <Head>
        <title>Text & Images</title>
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
        <p>Working with Text and Images</p>
        <p style={{fontSize: "30px;"}}>THIS COURSE IS BROKEN INTO TWO PARTS</p>
      </div>

        <div className={styles.courselinks}>
            <Link href="https://repl.it/@Mattvd/AboutMeCourse#index.html" target="_blank">Final Code</Link><br></br>
            <Link href="https://aboutmecourse--mattvd.repl.co/" target="_blank">Final Product</Link><br></br>
        </div>

        <div className={styles.subheader}>
        <p>Review</p>
        </div>

        <div className={styles.courselist}>
            <p><b>In this course you will be coding an About Me page to learn more about HTML and using images in your website. To code along wiht the start create a new HTML/CSS/JS Repl, if you don't know how go to our <a href="/replcourse">Intro to Repl.it</a> course.</b></p>
            <p>1.Create a div with an id of "title".</p>
            <p>2. Add a header "About Me".</p>
            <p>3. Create an h2 header below the main header with your name.</p>
            <p>4. Close your div.</p>
            <p>5. Run and check the code below to see if it matches.</p>
            <div id="caexplain">
                <br></br>
                <p><code>
                <span> &lt;div id="hello"&gt;</span><br></br>
                &nbsp;<span>&lt;h1&gt;About Me&lt;/h1&gt;</span><br></br>
                &nbsp;<span>&lt;h2&gt;Students Who Code&lt;/h2&gt;</span><br></br>
                <span>&lt;/div&gt;;</span>
                </code></p>
            </div>
            <br></br>
            <img src="/src/AboutMe1.PNG" alt="Code"></img>
        </div>

        <br></br>

        <div className={styles.subheader}>
            <p>Aligning Images and Text</p>
        </div>

        <div className={styles.courselist}>
            <p>Now that you have reviewed the HTML skills you know we are going to expand on them and create another part of the web page.</p>
            <p>1. Create another div with an id of "bio".</p>
            <p><b style={{color: "#ed553b"}}>Coding Tip:</b> We are breaking our code down into sections with the differnt div, it makes it easier to find bugs and problem solve if you have to. If you have a bug and figure out what section of the code it is the problem will be easier to problem solve!</p>
            <p>2. Create a Bio header, using a h2 tag. Using an  h2 tag will help the user identify a new section.</p>
            <p>3. Add a couple sentences that describes who you are and what you would put in your bio.</p>
            <p>4. Run your About Me page to see how it is looking.</p>
            <img src="/src/AboutMe2.PNG" alt="Code"></img>
            <p>5. Now we are going to add an image to make the website look better. Download the image in the projcet links at the top or use your own image.</p>
            <p>6. Upload the iamge to Repl.it | If you do not remeber how refer back to <Link href="/introhtml">Intro to HTML</Link></p>
            <p><b style={{color: "#ed553b"}}>Coding Tip:</b> To get the image to align next to the text, put the image inside of the <code>&lt;p&gt;&lt;/p&gt;</code> tags. Doing this will align the image right next to the text because the iamge is acting like text due to being inside of the paragraph tags.</p>
            <p>7. Align the image next to the text.</p>
            <p><code>&lt;p&gt;&lt;img src="Bio.png"&gt;</code></p>
            <p>8. The image we just added is really big so an easy way to fix this is to change the height and width of the image. Inside of the image tag we are going to change the size inline, right next to the image link.</p>
            <code>&lt;img src="Bio.png" width="150px" height="150px"&gt;</code>
            <p><b style={{color: "#ed553b"}}>Coding Tip:</b> The <code>alt=""</code> attribute is imporant to use when you display an image! It is a short description of the image. If someone's computer can not load the iamge or there is an error with the website the computer can display the <code>alt</code> text where the image would go, so the user can understand what would have been there. Using the <code>alt</code> attribute also helps improve assecibility of your website, in case someone is using a screen reader.</p>
            <p>9. Give the image an <code>alt</code> tag.</p>
            <p>10. Close your div and run!</p>
            <img src="/src/AboutMe5.PNG" alt="Code"></img>
            <p>You know have part of your About Me website complete, and in the next course you will learn more about what you can do in HTML. In this course you learned about adding different headers, algining the text and images together, and finally sizing and making your images accessible.</p>
        </div>

        <br></br>

        <div className={styles.upnext}>
            <center><Link href="/textimg2"><button className={styles.secondarybtndark} style={{width: "200px;"}}>Next Course</button></Link></center>
        </div>

        <br></br>




      <script src="https://embed.small.chat/T015AE2ETNHG015AE5MT3P.js" async></script>

  
       
</div>
)
}
