import styles from '../styles/Holiday.module.css'

export default function Submissions() {
  const submissions={
    background: "#206391",
    color: "#FFFFFF",
    overflow: "hidden"
  }
  return(
    <header style={submissions} className={styles.submissions}>
        <h1 className={styles.title} style={{ marginBlockEnd: "10px", textAlign: "center", marginTop: "0px" }}>
          Top 3 Submissions
        </h1>
        <div className={styles.grid}>
            <div className={styles.card}>
                <center><img src="/holidayScreenshot2.png" height="200px" width="300px" alt="Top 3 Submission Picture"></img></center>
                <center><h1>Holidays</h1></center>
                <center><a href="https://holiday.mymy2.repl.co/" target="_blank" style={{textDecoration: "underline"}}>Check The Website Out</a></center>
            </div>
            <div className={styles.card}>
              <center><img src="/holidayScreenshot.png" height="200px" width="200px" alt="Top 3 Submission Picture"></img></center>
              <center><h1>Hello Santa!</h1></center>
              <center><a href="https://eilla1.github.io/swc-holiday-2020/" target="_blank" style={{textDecoration: "underline"}}>Check The Website Out</a></center>
            </div>
            <div className={styles.card}>
              <center><img src="/holidayScreenshot1.png" height="200px" width="300px" alt="Top 3 Submission Picture"></img></center>
              <center><h1>Christmas Countdown Crafts</h1></center>
              <center><a href="https://christmascountdowncrafts.weebly.com/" target="_blank" style={{textDecoration: "underline"}}>Check The Website Out</a></center>
            </div>
        </div>
    </header>
  

    
  )
}