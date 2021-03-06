import styles from '../styles/Holiday.module.css'

export default function Header() {
  const header={
    height: "100vh",
    background: "#206391",
    color: "#FFFFFF",
    overflow: "hidden"
  }
  return(
    <header style={header} className={styles.header}>
      <div className={styles.content}>
        <h1 className={styles.title} style={{ marginBlockEnd: "10px" }}>
          HOLIDAY CHALLENGE
        </h1>
        <p className={styles.normaltext} style={{ color: "white", fontWeight: "bold", lineHeight: "30px", marginBlockEnd: "10px" }}>A fun, week long, challenge during the holiday season! Use your creativity and skills to produce an amazing project.</p>
        <p className={styles.heading}>The holiday challege has closed and winners will be announced soon!</p>
        {/* Registration Form */}
        <button className={styles.btn}><a  target="_blank"> Registration Is Closed </a></button>
        <button className={styles.btn}><a target="_blank"> Submissions Have Closed </a></button>
      </div>  
      <img src="/snowman.svg" alt="snowman" className={styles.snowman} />
    </header>
  

    
  )
}