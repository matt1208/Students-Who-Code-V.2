import Link from "next/link";
import styles from '../styles/Home.module.css'

const Promo = () => (
    <div className={styles.promo} style={{alignItems:"center"}}>
        <center><img src="/snowman.svg" alt="snowman" className={styles.promosnowman}></img></center>
        <a href="/holiday"><p className={styles.header3} style={{ color: "white",  marginBlockEnd: "10px", textDecoration: "none" }}>Holiday Challenge</p></a>
        <a href="/holiday"><p className={styles.normaltext} style={{ fontWeight: "bold"}}>A week long challenge during the Holiday week. Your task is to create a holiday themed website using web technologies.</p></a>
      </div>
);

export default Promo;