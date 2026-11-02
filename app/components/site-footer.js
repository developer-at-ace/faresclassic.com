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
            Explore destinations, research flight routes, and find practical
            information to help plan your trip.
          </p>

        </div>
        <nav className={styles.footerLinks} aria-label="Explore FareClassic">
          <h2>Explore</h2>
          <a href="/">Home</a>
      
          <a href="/faq">Frequently Asked Questions</a>
          <a href="/about">About FareClassic</a>
          <a href="/contact">Contact Us</a>
          <a href="/assistance">Travel Assistance</a>
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
          
          <a href="tel:+18889851220">+1-888-985-1220</a>
          <a href="mailto:support@fareclassic.com">support@fareclassic.com</a>
          <p>1340 Maryland Avenue, Tampa, Florida, 33602</p>
          <p>Monday–Friday, 9 AM–6 PM</p>
        </div>
      </div>
      <div className={styles.footerDisclosure}>
        FareClassic provides independent travel information and flight-search
        resources for general research. We do not operate flights, issue
        tickets, manage airline bookings, or provide customer support on behalf
        of an airline. We are not affiliated with or endorsed by airlines
        mentioned on this website. Flight schedules, fares, availability,
        baggage conditions, and travel requirements may change; confirm current
        details with the airline, ticket seller, or relevant official authority
        before making travel arrangements.
      </div>
      <div className={styles.footerBottom}>
        <span>© 2026 FareClassic. All Rights Reserved.</span>
      </div>
    </footer>
  );
}
