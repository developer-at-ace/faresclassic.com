import styles from "./site-chrome.module.css";

export default function SiteHeader() {
  return (
    <header className={styles.header}>
      <div className={styles.headerInner}>
        <a className={styles.brand} href="/" aria-label="FareClassic home">
          <img
            className={styles.brandLogo}
            src="/logo.png"
            alt="FareClassic"
            width="2000"
            height="640"
          />
        </a>
        <nav className={styles.nav} aria-label="Main navigation">
          <a href="/about">About</a>
          <a href="/assistance">Assistance</a>
          <a href="/contact">Contact</a>
          <a href="/faq">FAQ</a>
        </nav>
        <div className={styles.headerContact}>
          <a href="tel:+18445855025">+1-844-585-5025</a>
          <a href="mailto:support@fareclassic.com">support@fareclassic.com</a>
        </div>
      </div>
    </header>
  );
}
