import styles from '../styles/Holiday.module.css'

export default function Mission(){
  const mission = {
    height: "100%",
    padding: "20px",
    color: "#206391",
    background: "#121212",
    overflow: "hidden"
  }
  const btn = {
    background: "#206391",
    color: "#FFFFFF"
  }
  return(
    <div style={mission}>
      <div className={styles.container}>
      <section className={styles.section}>
      <div className={styles.contentmission} data-aos="zoom-in-right" data-aos-duration="3000">
        <h1 className={styles.title} style={{ marginBlockEnd: "10px" }} >Your Mission🚀</h1>
        <p className={styles.normaltextmission} style={{ fontWeight: "bold", lineHeight: "30px", marginBlockEnd: "50px" }}>This is a week long challenge. You have to <b className={styles.hilight}>build a holiday themed website</b> using any web technologies like HTML, CSS and JavaScript, Angular, React and more! Let your creativity shine and show us your creation. The winners will be featured on the Students Who Code website. 😋</p>
        {/* Link the pdf from the support.studentswhocode.org account */}
        <button className={styles.btn} style={btn} ><a href="/Holiday Challenge.pdf" target="_blank">More Information</a></button>
      </div>
      <img src="/brower.svg" alt="webpage" className={styles.webpage} />
      </section>
    </div>
    <script src="https://unpkg.com/aos@next/dist/aos.js"></script>
      <script>
        AOS.init();
      </script>
    </div>
  )
}