import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.maincontainer}>
      <Head>
        <title>Multiple Page Website</title>
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
      <p>Creating a Multiple Page Website</p>
    </div>

    <div className={styles.courselinks}>
      <Link href="https://repl.it/@Mattvd/MultiPage#index.html" target="_blank">Final Code</Link><br></br>
      <Link href="https://multipage--mattvd.repl.co/" target="_blank">Final Product</Link>
    </div>

    <div className={styles.subheader}>
      <p>Multiple Page Website</p>
    </div>

    <div className={styles.courselist}>
      <p>Most websites that you visit aren't just one page, like you have learned to build so far with the other courses. Most websites are comprised of differnt pages that are all linked together to create a great website. In the following course you will create a website that includes a home page and a blog. To get the project started create an HTML/CSS/JS Repl, follow the <a href="replcourse">Into to Repl.it</a> to get started coding.</p>
    </div>

    <br></br>

    <div className={styles.subheader}>
      <p>Creating a New Page</p>
    </div>

    <div className={styles.courselist}>
      <p>1. Add a new HTML file in the navigation bar.</p>
      <p>You need to create a new HTML file because each page in a website is it own HTML file.</p>
      <p>2. Name the new file: blog.html</p>
      <p>3. Copy & Paste the preexisting information code from index.html into blog.html</p>
      <p>4. Change the title of the page to "Blog".</p>
      <code>&lt;title&gt;Blog&lt;/title&gt;</code>
      <p><b style={{color: "#ed553b"}}>Coding Tip:</b> The title tag sets the title of the web page that is featured in the browsers tab.</p>
    </div>

    <br></br>

    <div className={styles.subheader}>
      <p>Navigation Bar</p>
    </div>

    <div className={styles.courselist}>
      <p>In order to navigate from page to page, a navigation bar is cructial or utalize navigation links. If a website does not have a navigation bar or links the user can not switch easily between different web pages.</p>
      <p><b style={{color: "#ed553b"}}>Coding Tip:</b> The <code>&lt;nav&gt;</code> attribute defines a set of navigation links. <code>&lt;ul&gt;</code>, Unordered lists are used to arranged the links in the nav.</p>
      <p>1. Add the navigation links featured a link to the Home page and the Blog page.</p>
      <p><code><span> &lt;nav&gt;</span><br></br>
        &nbsp;<span>&lt;ul&gt;&lt;a href="index.html"&gt;Home&lt;/a&gt;&lt;/ul&gt;</span><br></br>
        &nbsp;<span>&lt;ul&gt;&lt;a href="blog.html"&gt;Blog&lt;/a&gt;&lt;/ul&gt;</span><br></br>
        <span>&lt;/nav&gt;</span>
      </code></p>
      <p>The pages are linked using the <code>a</code> tags that indicate the website that the text is a link. The <code>href</code> attribute tells the website where to go weather being a file, such as the blog page, or any other type of link.</p>
      <br></br>
      <img src="src/MultiPage1.png" alt="Code"></img>
      <p>2. Run your project to see the navigation links.</p>
      <p>3. After adding this code in the index page we will also want the navigation bar on the blog so we can move back and forth between thet two pages. To do this just copy and paste the code you just wrote into the blog.html file.</p>
      <p>4. As of right now the nav bar is aligned on the left and stacked vertically. To get a normal looking website navigation, we are going to add some CSS code, in the style.css file, to customize the look of the navigation.</p>
      <code>
        <span>{"ul {"}</span><br></br>
          &nbsp;<span>display: inline;</span><br></br>
        <span>{"}"}</span>
      </code>
      <p>5. Run to see the new navigation.</p>
      <img src="src/MultiPage2.png" alt="Code"></img>
    </div>

    <br></br>

    <div className={styles.subheader}>
      <p>The Blog</p>
    </div>

    <div className={styles.courselist}>
      <p>Now that the two pages are linked together and you can navigate between them it is time to create a blog. While creating the blog you will use some of the HTML skills that you should alreadly know.</p>
      <p>1. Add a <code>&lt;div&gt;</code> with an id of header. This will let us seprate the header of the blog from the actaully blog entries.</p>
      <p>2. Create a title for the blog using an <code>&lt;h1&gt;</code> tag.</p>
      <p>3. Run the code to see the new header.</p>
      <img src="src/MultiPage3.png" alt="Code"></img>
      <p>4. Add another <code>&lt;div&gt;</code> with a class of "blogentry". We are using a class instead of an id because we will reuse the same div for another entries.</p>
      <p>5. We want the date to be before the entry so users know more information about what you are writing. To do this add the full date in an <code>&lt;h2&gt;</code> tag, so it is smaller then the page header</p>
      <p>6. Now you are going to write an entry about whatever you want!</p>
      <p><code><span> &lt;div class="blogentry"&gt;</span><br></br>
        &nbsp;<span>&lt;h2&gt;June 24, 2020&lt;/h2&gt;</span><br></br>
        &nbsp;<span>&lt;p&gt;This is a sample blog entry. Write whatever you want!&lt;/p&gt;</span><br></br>
        <span>&lt;/div&gt;</span>
      </code></p>
    <img src="src/MultiPage4.png" alt="Code"></img>
    </div>

    <br></br>

    <div className={styles.subheader}>
      <p>Customize</p>
    </div>

    <div className={styles.courselist}>
      <p>You have learned the basics of how to build your page! Now it is time to add custom CSS, add more entries, and finish your home page! The possiblites are endless, below is an example of a custom navigation and home page, all the code for it is in the Final Code link at the top of the page.</p>
      <p>Some things to change include: <code>background-color</code>, <code>font-color</code>, <code>text-align</code>, <code>font-size</code>, <code>font-family</code>, and <code>font-weight</code>.</p>
      <img src="src/MultiPage5.png" alt="Code"></img>
    </div>

    <br></br>

    <div className={styles.upnext}>
      <center><Link href="/introprogramming"><button className={styles.secondarybtndark} style={{width: "200px"}}>Next Course</button></Link></center>
    </div>

    <br></br>

             
    </div>
  )
}
