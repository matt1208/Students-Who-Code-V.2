import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Snow from 'resnow'

export default function Home() {
  return (
    <div className={styles.maincontainer}>
      <Head>
        <title>Intro to HTML</title>
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
      <p>Intro to HTML</p>
    </div>

    <div className={styles.courselinks}>
      <Link href="https://repl.it/@Mattvd/IntroHTML" target="_blank">Final Code</Link><br></br>
      <Link href="https://introhtml--mattvd.repl.co/" target="_blank">Final Product</Link><br></br>
      <a src="IntroGraphic.png" download="IntroGraphic.png">Download Image</a>
    </div>

    <div className={styles.subheader}>
      <p>What is HTML?</p>
    </div>

    <div className={styles.courselist}>
      <p>HTML stands for Hypertext Markup Language and is a language designed to be dispalyed in web browesers. HTML is great for beginners intrested in learning how to code or anyone intrested in building websites.</p>
    </div>

    <div className={styles.subheader}>
      <p>Key HTML Tags & Attributes</p>
    </div>

    <div className={styles.courselist}>
      <p>HTML elements are componets that help format and create the document.</p>
      <p>1. <code>Head</code>: Holds the metadata(Information about the page), nothing in the head tags are displayed</p>
      <p>2. <code>Body</code>: Contains all the code that will be displayed </p>
      <p>3. <code>Div</code>: A representation of a section of code. Helps organize code and customize that section </p>
      <p>4. <code>id</code>: Gives a specific element a name/id </p>
      <p>5. <code>class</code>: A name that can be applied to multiple sections or just 1 section </p>
      <p>6. <code>p</code>: Text or paragraph </p>
      <p>7. <code>h1-h6</code>: Headers </p>
      <p>7. <code>img</code>: Used to display an image </p>
      <p>8. <code>src</code>: This is an attribute that specifies the url for the page </p>
    </div>

    <br></br>

    <div className={styles.subheader}>
      <p>Getting Started</p>
    </div>

    <div className={styles.courselist}>
      <p>You are going to create your first website using HTML! The website will be very simple with just a few lines of text that you can customize and adding an image. Throughout the rest of the course you will be walked through the process step by step and getting useful information and tips.</p>
      <p>To start off create a new <Link href="https://repl.it/" target="_blank">HTML/CSS/JS Repl</Link> or follow our How to Set Up Repl course.</p>
    </div>

    <br></br>

    <div className={styles.subheader}>
      <p>HTML Coding</p>
    </div>

    <div className={styles.courselist}>
      <p>1. Inside of the <code>Body</code> tags create a div and give it an id name "hello" </p>
      <p><code>&lt;div id="hello"&gt;</code></p>
      <p>2. Now we want something to appear on the page, so the easiest thing is to add a header that says "Hello World".</p>
      <p><code>&lt;h1&gt;Hello World&lt;/h1&gt; </code></p>
      <p>Using an h1 tag is the largest of the 6 headers.</p>
      <p>3. Run your program to see what you created. </p>
      <img src="/src/introhtml1.PNG" alt="Code"></img>
      <p><b style={{color: "#ed553b"}}>Coding Tip:</b> h1-h6 tags have preassigned font sizes, but using CSS you can customize the headers just like any other text. </p>
      <p>4. Now we are going to add some text using the <code>p</code> tags. Creating a message saying hello to yourself!</p>
      <p><code>&lt;p&gt;Hello Matt&lt;/p&gt; </code></p>
      <p>5. Run your program again to see what you created. Notice the differnce between the header and the normal paragraph text. </p>
      <img src="/src/introhtml2.PNG" alt="Code"></img>
      <p><b style={{color: "#ed553b"}}>Coding Tip:</b> Most tags must by closed or ended. For example to add text you use <code>&lt;p&gt;</code> amd then write you text. When you want to end your sentence or text area, use the same opening but add a backslash <code>&lt;/p&gt;</code>. Closing tags requires a backslash!</p>
      <p>6. Now close the div that you created earlier in the lesson. </p>
      <p><code>&lt;/div&gt;</code></p>
    </div>

    <br></br>

      <div className={styles.subheader}>
        <p>Adding Images</p>
      </div>

    <div className={styles.courselist}>
      <p>Whenever your visit a website, there are usually graphics or images that draw your attention or help make the overall web page look better. So on your current website that you are building you are going to add an image.</p>
      <p>1. Adding images to a website is key. To practice click on the Download Image link at the top of the page. <br></br> Another way to use photos is to use a photo online and copy the Image Address.</p>
      <p>2. Upload the file to your File Navigation</p>
      <center><video src="/src/UploadFile.mov" muted autoplay loop width="700px" height="700px" alt="Upload Files"></video></center>
      <p>3. To display an image in a website there are two tags you must use. <code>img</code> and <code>src</code>. All the links that are used must be inside of quotation marks! </p>
      <p><code>&lt;img src="IntroGraphic.png"&gt; </code></p>
      <p>Or inside the quotes include the image link address.</p>
      <p>4. Run your program again to see your first website! Congratialation you have built your first website and learned some of the basics of HTML, but there is still so much for you to learn so continue to learn! </p>
      <img src="/src/introhtml3.PNG" height="300px" width="300px" alt="Code"></img>
    </div>

    <br></br>

    <div className={styles.upnext}>
      <center><Link href="/introcss"><button className={styles.secondarybtndark} style={{width:" 200px"}}>Next Course</button></Link></center>
    </div>

    <br></br>


      
      <script src="https://embed.small.chat/T015AE2ETNHG015AE5MT3P.js" async></script>

  
       
    </div>
  )
}