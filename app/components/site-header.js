import styles from "./site-chrome.module.css";

export default function SiteHeader() {
  return (
    <header className={styles.header}>
      <div className={styles.headerInner}>
        <a className={styles.brand} href="/" aria-label="FareClassic home">
          <span className={styles.brandMark} aria-hidden="true">✈</span>
          <span>FareClassic</span>
        </a>
        <nav className={styles.nav} aria-label="Main navigation">
          <a href="/#route-search">Search flights</a>
          <a href="/#live-search">Search offers</a>
          <a href="/about">About</a>
          <a href="/assistance">Assistance</a>
          <a href="/contact">Contact</a>
        </nav>
        <div className={styles.headerContact}>
          <a href="tel:+18445855025">+1-844-585-5025</a>
          <a href="mailto:support@fareclassic.com">support@fareclassic.com</a>
        </div>
      </div>
    </header>
  );
}
