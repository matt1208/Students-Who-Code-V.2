import Link from "next/link";
import styles from '../styles/Home.module.css'

const Footer = () => (
    <div className={styles.footer}>
    <h2>Students Who Code</h2>
    <h2><Link href="/about">About</Link> | <Link href="/contact">Contact Us</Link></h2>
  </div>
);

export default Footer;