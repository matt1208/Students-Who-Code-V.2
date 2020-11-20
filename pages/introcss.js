import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Snow from 'resnow'

export default function Home() {
  return (
    <div className={styles.maincontainer}>
      <Head>
        <title>Intro to CSS</title>
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
      <p>Intro to CSS</p>
    </div>

    <div className={styles.courselinks}>
      <a href="https://repl.it/@Mattvd/CSSCourse#index.html" target="_blank">Final Code</a><br></br>
      <a href="https://csscourse--mattvd.repl.co/" target="_blank">Final Product</a>
    </div>

    <div className={styles.subheader}>
      <p>Key CSS Information</p>
    </div>

    <div className={styles.courselist}>
      <p>1. CSS allows for customation and styling of a web application and HTML code.</p>
      <p>2. When using CSS to style you refer to the ID or Class name</p>
      <p>&nbsp;&nbsp;To style an ID, using the number sign #: <code>#idname</code></p>
      <p>&nbsp;&nbsp;To style a Class, using a period <code>.classname</code></p>
      <p>3. After the ID or Class name curly brackets {} must be used to hold all of the styling properties.</p>
      <p>4. Semicolons are also <b>required</b> after style property to signify the end.</p>
      <p>Look at the following below of an example property</p>
      <p><code>background-color: #ffb197; </code></p>
    </div>

    <br></br>

    <div className={styles.subheader}>
      <p>Introduction to CSS Coding</p>
    </div>

    <div className={styles.courselist}>
      <p><b>In this project we will be using the HTML code from the Into to HTML course.<br></br> If you did not do that course you can either finish that course first or copy the code below into a new Relp.it editor</b></p>
      <p><code>
        &lt;div id="hello"&gt;<br></br>
        &nbsp;&lt;h1&gt;Hello World&lt;/h1&gt;<br></br>
        &nbsp;&lt;p&gt;Hello Matt&lt;/p&gt;<br></br>
        &lt;/div&gt;<br></br>
        &lt;img src="IntroGraphic.png"&gt;
      </code></p>
      <br></br>
      <p>1. Navigate to the file style.css</p>
      <p>That file is where all of your CSS code will go. The file is linked to the HTML file in the <code>head</code> area.</p>
      <p><code>&lt;link href="style.css" rel="stylesheet" type="text/css" /&gt;</code></p>
      <p>If you are not using Repl.it and you are coding in the SWC Editor, the CSS is alreadly linked for you and you do not have to add the code above.</p>
      <p>2. The first thing to do is edit the body, which is everything the user sees on the page. A white background is not that exiciting so lets give it a differnt color!</p>
      <p><b style={{color: "#ed553b"}}>Coding Tip:</b> To specify that you want to edit the body, it is not like styling an ID or Class because the body tag is universal so you can just type body.</p>
      <p><code>{"body {"} </code></p>
      <p><code>background-color: #ffb197; </code></p>
      <p><code>{"}"} </code></p>
      <p>3. Run your program to see what you created and notice that the whole page has a new background color due to the body's background color being changed. </p>
      <img src="src/IntroCSS1.png" height="300px" width="300px" alt="Code"></img>
      <p>4. Now that the background color has been changed we should probaly change the font color so it is easier for people to read and see, so to change that we are going to style the "hello" div.</p>
      <p><code>{"#hello {"}</code></p>
      <p><code>color: white; </code></p>
      <p><code>{"}"} </code></p>
      <p><b style={{color: "#ed553b"}}>Coding Tip:</b> With CSS you can change more than just the color! You can change the font-size or family, where the text is aligned on the page, and the fonts weight(thickness).</p>
      <p><code>{"#hello {"}<br></br>
        {'\u00A0'}color: white;<br></br>
        {'\u00A0'}font-size: 20px;<br></br>
        {'\u00A0'}text-align: center;<br></br>
        {'\u00A0'}font-family: Verdana;<br></br>
        {'\u00A0'}font-weight: bold;<br></br>
        {"}"}</code></p>
      <p>5. Add these other styling options to customize the text, and then run your the program to see how the text changes! </p>
      <img src="src/IntroCSS2.png" height="300px"  alt="Code"></img>
    </div>

    <br></br>

      <div className={styles.subheader}>
        <p>Styling Images</p>
      </div>

      <div className={styles.courselist}>
        <p>You may also want to change how the image looks and you can do that through CSS also.</p>
        <p>To style an image there is a specic format you have to follow so the computer knows you want to style an image.</p>
        <p>First always type img, then a set of brackets[]. Inside of the brackets you need to specify the source(src) and them the file name in quotes.</p>
        <p><code>img[src="filename.png"]</code></p>
        <p>1. To style the image we are going to move the margin of the picture by 20%, so that way the image is more in line with the text.</p>
        <p><code>margin-left: 20%;</code></p>
        <p>2. Run your project to see the final product! If it does not look like the project below then check the final code at the top of the page.</p>
        <img src="src/IntroCSS3.png" height="300px"  alt="Code"></img>
      </div>

      <br></br>

      <div className={styles.upnext}>
        <center><a href="textimgcourse.html"><button className={styles.secondarybtndark} style={{width: "200px"}}>Next Course</button></a></center>
      </div>

      <br></br>



      <script src="https://embed.small.chat/T015AE2ETNHG015AE5MT3P.js" async></script>

  
       
     </div>
 )
}
