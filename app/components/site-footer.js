import styles from "./site-chrome.module.css";

export default function SiteFooter() {
  return (
    <footer className={styles.footer} id="footer">
      <div className={styles.footerInner}>
        <div className={styles.footerBrand}>
          <a className={styles.brand} href="/" aria-label="FareClassic home">
            <img
              className={styles.brandLogo}
              src="/logo.png"
              alt="FareClassic"
              width="2000"
              height="640"
            />
          </a>
          <p>
            Independent flight search and travel information. FareClassic does
            not issue tickets or take payment through this website.
          </p>
          <p className={styles.operator}>
            Business name provided: Bruj flight. Registered legal name has
            not been verified.
          </p>
        </div>
        <nav className={styles.footerLinks} aria-label="Explore FareClassic">
          <h2>Explore</h2>
          <a href="/">Home</a>
          <a href="/#route-search">Search flights</a>
          <a href="/#live-search">Current offers</a>
          <a href="/about">About FareClassic</a>
          <a href="/assistance">Travel Assistance</a>
          <a href="/faq">Frequently Asked Questions</a>
        </nav>
        <nav className={styles.footerLinks} aria-label="Website policies">
          <h2>Policies</h2>
          <a href="/disclaimer">Disclaimer</a>
          <a href="/terms">Terms and Conditions</a>
          <a href="/privacy">Privacy Policy</a>
          <a href="/refund-cancellation">Cancellation &amp; Refund Policy</a>
        </nav>
        <div className={styles.footerContact}>
          <h2>Contact</h2>
          <a href="/contact">Contact Us</a>
          <a href="tel:+18889851220">+1-888-985-1220</a>
          <a href="mailto:support@fareclassic.com">support@fareclassic.com</a>
          <p>1340 Maryland Avenue, Tampa, Florida, 33602</p>
          <p>Monday–Friday, 9 AM–6 PM</p>
        </div>
      </div>
      <div className={styles.footerDisclosure}>
        FareClassic is an independent flight search and travel-information
        service. It is not affiliated with, endorsed by, or representing any
        airline. No airline accreditation or license is claimed on this site.
        Flight information and prices are provided for research and may change.
      </div>
      <div className={styles.footerBottom}>
        <span>© FareClassic</span>
        <span>No bookings or payments are processed on this website.</span>
      </div>
    </footer>
  );
}
