import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Snow from 'resnow'

export default function Home() {
  return (
    <div className={styles.maincontainer}>
      <Head>
        <title>Intro to Programming</title>
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
      <p>Introduction to Programming</p>
    </div>

    <div className={styles.subheader}>
      <p>What is Programming?</p>
    </div>

    <div className={styles.courselist}>
      <p>Programming is the way through which we can tell the computer what tasks to perform. But how can we communicate with a computer? We, humans, communicate using different languages, such as English, Spanish, etc. Similarly, a ‘programming language’ is used to communicate with the computer. The rules for writing a valid code are referred to as syntax. There are so many programming languages in computer science. The basic difference between programming languages is <em>'syntax'</em>.</p>
      <p>I will introduce basic concepts of programming with simple snippets of code, all written in JavaScript. JavaScript is one of the most popular and beginner-friendly languages.</p>
      <p><b style={{color: "#ed553b"}}>Coding Tip:</b> The best way to learn how to write code is to write code. Try yourself where mentioned. We will be using <Link href="https://repl.it/" target="_blank">Repl.it</Link> for practicing. Explore about Repl.it in this course, <Link href="/replcourse" target="_blank">here</Link>.</p>
      <p>JavaScript is mainly used in web pages. So use the repl of “HTML/CSS/JS” for this course. We will edit only the script.js(obviously) file for learning JavaScript. Or simply you can fork this repl, <Link href="https://repl.it/@Giridharhackclu/Starter-js#script.js" target="_blank">here</Link>.</p>
    </div>

    <br></br>

    <div className={styles.subheader}>
      <p>Syntax</p>
    </div>

    <div className={styles.courselist}>
      <p>Let’s discuss something about JavaScript syntax. There are some words you should be familiar with in any programming language.</p>
        <p>-Statements</p>
        <p>-Literals</p>
        <p>-Identifiers</p>
        <p>-Comments</p>
      <p><b>Statements</b> , in a computer language, are a group of words, numbers, and operators that performs a specific task. Most statements in JavaScript conclude with a semicolon ( ; ) at the end. </p>
      <p><b>Literal</b> is a value that is written in the source code, for example, a number, a string, a boolean or also more advanced construct, like Object Literals or Array Literals.</p>
      <p><b>Identifier</b> is a sequence of characters that can be used to identify a variable, a function, an object. They cannot contain any special characters except ‘$’ and ‘_’.</p>
      <p><b style={{color: "#ed553b"}}>Note:</b> There are some reserved words in every programming language called ‘keywords’. You should not use them as identifiers. Check keywords in JavaScript <Link href="https://www.w3schools.com/js/js_reserved.asp" target="_blank">here</Link>.</p>
      <p><b>Comments</b> are lines of code that JavaScript(a programming language) will intentionally ignore. Code after a double slash //, or between /* and */, is treated as a comment.</p>
      <img src="src/intropro1.png" alt="Function Code Picture"></img>
      <p><b style={{color: "#ed553b"}}>Coding Tip:</b> Comments are a great way to leave notes to yourself and to other people who will later need to figure out what that code does.</p>
    </div>

    <br></br>

    <div className={styles.subheader}>
      <p>Output</p>
    </div>

    <div className={styles.courselist}>
      <p>Let’s use JavaScript to print “Hello World!” to the console. The console is part of the web browser that allows you to run JavaScript code. The following code snippet is used to output.</p>
      <img src="src/intropro2.png" alt="Output Code Picture"></img><br></br>
      <Link href="https://repl.it/@Giridharhackclu/Input#script.js" target="_blank">Try it yourself</Link>
      <p><b>Practice:</b> Try to output your name or some other text on the console.</p>
    </div>

    <br></br>

    <div className={styles.subheader}>
      <p>Input</p>
    </div>

    <div className={styles.courselist}>
      <p>Input is the information received from the user. The console asks the user to input something through a prompt box. The `prompt()` function is used to input some data.</p>
      <img src="src/intropro3.png" alt="Input Code Picture"></img><br></br>
      <Link href="https://repl.it/@Giridharhackclu/Input#script.js" target="_blank">Try it yourself</Link>
      <p><b>Practice:</b> Challenge yourself and try to get different inputs from the user.</p>
    </div>

    <br></br>

    <div className={styles.subheader}>
      <p>Variables</p>
    </div>

    <div className={styles.courselist}>
      <p>Variables allow computers to store and manipulate data in a dynamic fashion. That means their value can be changed throughout the code.</p>
      <p>In JavaScript, we use the `var` keyword to declare variables. `=` is used to assign value to the variable. Identifiers are used for naming variables.</p>
      <img src="src/intropro4.png" alt="Variables Code Picture"></img><br></br>
      <Link href="https://repl.it/@Giridharhackclu/Variables#script.js" target="_blank">Try it yourself</Link>
      <p><b>Practice:</b> Try to get input from the user and store it in a variable.</p>
      <p><b style={{color: "#ed553b"}}>Note:</b> Just like in mathematics you can also add constants in your JavaScript code. But the value of constant cannot be changed. You can declare constants using the `const` keyword.</p>
    </div>

    <br></br>

    <div className={styles.subheader}>
      <p>Data Types</p>
    </div>

    <div className={styles.courselist}>
      <p>In computer science, data is anything meaningful to the computer. Data can be of any type. JavaScript provides different data types which are ‘undefined’, null, boolean, string, number, and object.</p>
      <p>You can use the JavaScript `typeof` operator to find the type of a JavaScript variable.</p>
      <p>The `typeof` operator returns the type of a variable or an expression.</p>
      <img src="src/intropro5.png" alt="Data Types Code Picture"></img>
      <p><Link href="https://repl.it/@Giridharhackclu/Data-Types#script.js" target="_blank">Try it yourself</Link></p>
      <p><b style={{color: "#ed553b"}}>Coding Tip:</b> JavaScript has dynamic types. This means that the same variable can be used to hold different data types.</p>
      <p><b>Practice:</b> Check the dynamic nature of JavaScript by changing the above code.</p>
    </div>

    <br></br>

    <div className={styles.subheader}>
      <p>Operators</p>
    </div>

    <div className={styles.courselist}>
      <p>Operators are used to performing various actions on variables. There are different types of operators.</p>
      <p><b>-Assignment Operator:</b> ‘=’ used to assign a value to a variable</p>
      <p><b>-Arithmetic Operators:</b> + (addition), - (subtraction), * (multiplication), and / (division), %(modulus or remainder)</p>
      <p><b>-Compound Assignment:</b> += , -= , *= , and /= are compound operators that combine a math operation with assignment</p>
      <p><b>-Ternary Operators:</b> ++ (increment), -- (decrement)</p>
      <p><b>-Equality Operators:</b> == (loose-equals), === (strict-equals), != (loose not-equals), !== (strict not-equals)</p>
      <p><b>-Comparison Operators:</b> `&gt;` (less than), `&gt;` (greater than), `&gt;`= (less than or loose-equals), `&gt;`= (greater than or loose-equals)</p>
      <p><b>-Logical Operators:</b> && (and), || (or)</p>
      <p>Explore about operators <Link href="https://repl.it/@Giridharhackclu/Operators#script.js" target="_blank">here</Link></p>
      <p><b style={{color: "#ed553b"}}>Coding Tip:</b>Operator precedence describes the order in which operations are performed in an arithmetic expression. ‘*’ and ‘/’ have more precedence than ‘+’ and ‘-’. And (as in school mathematics) the precedence can be changed by using parentheses.</p>
    </div>

    <br></br>

    <div className={styles.subheader}>
      <p>Conditionals</p>
    </div>

    <div className={styles.courselist}>
      <p>When you write code, you want to perform different actions based on different conditions. You can do this by using <b>conditional statements</b>. The conditional checks the expression you pass to it for the true or false value. We can use `if` or `if-else` statements as conditionals.</p>
      <p>You may notice the curly braces are used. That is called a block, and it is used to group a list of different statements. </p>
      <p>This is how `if` statements work:</p>
      <img src="src/intropro6.png" alt="If Code Picture"></img>
      <p>If the condition is true, the code in the block gets executed.</p>
      <p>You attach a statement that is going to be executed if the `if condition` is false use `else` statement.</p>
      <img src="src/intropro7.png" alt="If Else Code Picture"></img>
      <p>Since `else` accepts a statement, you can nest another if/else statement inside it.</p>
      <img src="src/intropro8.png" alt="If Else If Code Picture"></img>
      <p><b>Practice:</b> Write a program to check whether the input is positive, negative or zero. Check your solution <Link href="https://repl.it/@Giridharhackclu/Conditionals#script.js" target="_blank">here</Link>.</p>
      <p><b style={{color: "#ed553b"}}>Coding Tip:</b>There is another way to implement conditional check using ? operator: a `&gt;` b ? console.log(a) : console.log(b); // if a `&gt;` b, outputs ‘a’ else outputs ‘b’.</p>
    </div>

    <br></br>

    <div className={styles.subheader}>
      <p>Loops</p>
    </div>

    <div className={styles.courselist}>
      <p>Repeating a set of actions until a certain condition fails -- in other words, repeating only while the condition holds -- is the job of loops in programming. There are different forms of loops, but all satisfy 0this basic behaviour. </p>
      <p><b>While and Do-while</b> loop repeats through a block of code, as long as a specified condition is true.</p>
      <img src="src/intropro9.png" alt="While Do Code Picture"></img>
      <p>The practical difference between <b>while</b> and <b>do-while</b> loops is, if the condition is initially false, a while loop will never run, but a do..while loop will run just the first time.</p>
      <p><b>For loop</b> is most commonly used for creating loops.</p>
      <img src="src/intropro10.png" alt="For Code Picture"></img>
      <p>statement-1 is executed before the loop starts.</p>
      <p>statement-2 defines the condition for running the loop.</p>
      <p>statement-3 is executed each time after the loop has been executed.</p>
      <p><b>Practice:</b> Try to print a multiplication table of any number using loops in your own repl. Check your solution <Link href="https://repl.it/@Giridharhackclu/Loops#script.js" target="_blank">here</Link>.</p>
      <p><b style={{color: "#ed553b"}}>Coding Tip:</b>Be careful writing conditions. If a condition is always true, the loop will run forever.</p>
    </div>

    <br></br>

    <div className={styles.subheader}>
      <p>Functions</p>
    </div>

    <div className={styles.courselist}>
      <p>A function is a block of code that can be reusable.</p>
      <p>Here's an example of a function:</p>
      <img src="src/intropro11.png" alt="Function Code Picture"></img>
      <p>You can call or invoke this function by using its name followed by parentheses, like this: `functionName();`. All of the code between the curly braces will be executed every time the function is called.</p>
      <p>Functions can optionally take arguments (or parameters), values you pass in. And they can also optionally return a value. </p>
      <img src="src/intropro12.png" alt="Function Output Code Picture"></img>
      <p>There are so many built-in functions in every programming language. The output function `console.log()`, input function `prompt()`, `alert()` are also functions.</p>
      <p><b>Practice:</b> Create a function that accepts two arguments, multiplies them, and prints the new value on the console. Check your solution <Link href="https://repl.it/@Giridharhackclu/Functions#script.js" target="_blank">here</Link>.</p>
      <p><b style={{color: "#ed553b"}}>Coding Tip:</b> The <b>return</b> statement is used to return a value from the function. The function stops executing code after the return statement.</p>
    </div>

    <br></br>

    <div className={styles.subheader}>
      <p>Putting all together...</p>
    </div>

    <div className={styles.courselist}>
      <p>Programming is easy. There are some basic concepts you need to wrap your head around. They are the basic building blocks of programming. </p>
      <p><b>&rarr; Operators</b> to perform actions on values. </p>
      <p><b>&rarr; Data types</b> to perform different kinds of actions like math on numbers or output with strings. </p>
      <p><b>&rarr; Variables</b> like if statements to make decisions. </p>
      <p><b>&rarr; Loops</b> to repeat tasks until a condition stops being true. </p>
      <p><b>&rarr; Functions</b> to organize your code into logical and reusable pieces.</p>
      <p>This course is just the basics of programming. There are so many programming languages, but all of them have the same logic and concepts with different syntax.</p>
      <p>There is a lot to learn about programming. Don't forget to check out other beginner programming resources (books, blogs, online training, etc.).</p>
    </div>

    <br></br>

    <div className={styles.subheader}>
      <p>Project</p>
    </div>

    <div className={styles.courselist}>
      <p> Let's try practicing some of the concepts we learned here.</p>
      <p>-Write a program to calculate the total price of your phone purchase. You will keep purchasing phones (hint: loop!) until you run out of money in your bank account. You'll also buy accessories for each phone as long as your purchase amount is below your mental spending threshold. </p>
      <p>-After you've calculated your purchase amount, add in the tax, then print out the calculated purchase amount, properly formatted. </p>
      <p>-Finally, check the amount against your bank account balance to see if you can afford it or not. </p>
      <p>You should set up some constants for the "tax rate," "phone price," "accessory price," and "spending threshold," as well as a variable for your "bank account balance".</p>
      <p>You should define functions for calculating the tax and for formatting the price with a "$" and rounding to two decimal places. </p>
      <p>-<b>Bonus Challenge:</b> Try to incorporate input into this program, perhaps with the prompt(..) covered in "Input" earlier. You may prompt the user for their bank account balance, for example. Have fun and be creative!</p>
      <p>Check your Solution <Link href="https://repl.it/@Giridharhackclu/Project-1#script.js" target="_blank">here</Link>.</p>
      <p style={{fontFamily: "Verdana, sans-serif", color: "#2B2B27"}}>This course was created by <Link href="https://github.com/giridhar7632" target="_blank">Talla Giridhar</Link></p>
    </div>

    <br></br>



      <script src="https://embed.small.chat/T015AE2ETNHG015AE5MT3P.js" async></script>

  
       
     </div>
 )
}
