import styles from '../styles/Holiday.module.css'

export default function Footer(){
  const footer={
    height: "600px",
    background: "#206391",
    color: "#FFFFFF",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    textAlign: "center"
  }
  const center = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column"
  }
  return(
    <div style={footer}>
      <div style={center}>
        <strong><p className={styles.heading}>An oppurtunity to <span className={styles.hilight}>test your skills </span> and <span className={styles.hilight}>compete</span> with others</p></strong>
        <button className={styles.btn}><a href="https://airtable.com/shrWZ1BTvA1GzzVnv" target="_blank"> Register Now! </a></button>
        <p className={styles.text}>Feel free to contact us if you have any queries.</p>
        <p className={styles.text}>&copy; Students Who <span className={styles.hilight}>Code</span> - 2020</p>
      </div>
    </div>
  )
}