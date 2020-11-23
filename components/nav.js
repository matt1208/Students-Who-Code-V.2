import Link from "next/link";
import styles from '../styles/Home.module.css'

const Navbar = () => (
  <ul className={styles.navbar}>
    <Link href="/"><img src="/src/Logo2.png" alt="Home Logo" height="75px" width="75px" style={{ cursor: "pointer" }}></img></Link>
    <div className={styles.rightnavarea}>
      <li className={styles.rightnav}><Link href="/codingconnected">Coding Connected</Link></li>
      <li className={styles.rightnav}><Link href="/courses">Courses</Link></li>
    </div>
</ul>
);

export default Navbar;