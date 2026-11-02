import styles from "./page.module.css";
import FlightSearch from "./components/flight-search";
import LiveFlightReports from "./components/live-flight-reports";
import SiteFooter from "./components/site-footer";
import SiteHeader from "./components/site-header";

export const metadata = {
  title: "FareClassic | Search Flights and Compare Travel Options",
  description:
    "Search flight offers by route, date, and cabin with FareClassic. Review provider results, then confirm fares and booking terms with the airline or ticket seller.",
};

const questions = [
  {
    question: "What can I do on FareClassic?",
    answer:
      "Search for flights using your route, travel dates, traveler details, and cabin choice. FareClassic displays results returned by an external provider for research.",
  },
  {
    question: "Can I buy a ticket here?",
    answer:
      "No. FareClassic does not sell tickets, create reservations, or take payment. Contact the airline or ticket seller to confirm the final details and make your booking.",
  },
  {
    question: "Why might a fare or schedule change?",
    answer:
      "Airline prices and seat availability can change. Search results are not a price guarantee, so check the current fare, schedule, baggage terms, and restrictions with the seller before you book.",
  },
  {
    question: "Is FareClassic connected to an airline?",
    answer:
      "No. FareClassic is an independent flight-search and information service. Airline names are used to identify routes and itinerary details, not to suggest an affiliation.",
  },
  {
    question: "What should I check before booking?",
    answer:
      "Review the complete itinerary, final fare and taxes, baggage allowance, airport details, passenger information, and change or cancellation terms with the airline or ticket seller.",
  },
  {
    question: "Who can help with a cancellation or refund?",
    answer:
      "Contact the airline or ticket seller shown on your booking confirmation. FareClassic does not issue tickets or process booking changes, cancellations, or refunds.",
  },
];

function Icon({ name, size = 18, className }) {
  const paths = {
    plane: <><path d="m2 16 20-5-20-5 4 5-4 5Z" /><path d="m6 11 4 0" /></>,
    globe: <><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18" /></>,
    compass: <><circle cx="12" cy="12" r="9" /><path d="m15.5 8.5-2.2 4.8-4.8 2.2 2.2-4.8 4.8-2.2Z" /></>,
    support: <><path d="M4 13v-2a8 8 0 0 1 16 0v2" /><path d="M4 13h3v6H6a2 2 0 0 1-2-2v-4ZM20 13h-3v6h1a2 2 0 0 0 2-2v-4ZM17 20c-1 1-2 1-4 1" /></>,
    arrow: <><path d="M5 12h14" /><path d="m13 6 6 6-6 6" /></>,
    check: <path d="m5 12 4 4L19 6" />,
    clock: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></>,
    shield: <><path d="M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11Z" /><path d="m9 12 2 2 4-4" /></>,
    pin: <><path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="2.5" /></>,
    chevron: <path d="m7 10 5 5 5-5" />,
    menu: <><path d="M4 7h16M4 12h16M4 17h16" /></>,
  };

  return (
    <svg
      aria-hidden="true"
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {paths[name]}
    </svg>
  );
}

export default function Home() {
  return (
    <div className={styles.site}>
      <SiteHeader />

      <main id="top">
        <section className={styles.hero}>
          <div className={styles.heroEyebrow}><span /> Independent flight search and travel information</div>
          <h1>Find flight options<br className={styles.desktopBreak} /> for your next trip.</h1>

          <FlightSearch />
          <div className={styles.trustStats}>
            <div><Icon name="globe" /><span><b>Choose your airports</b><small>Search by city or airport</small></span></div>
            <div><Icon name="compass" /><span><b>Review flight options</b><small>See itineraries returned for your search</small></span></div>
            <div><Icon name="support" /><span><b>Book with the seller</b><small>Purchases happen outside this site</small></span></div>
          </div>
        </section>

        <section className={styles.capabilities} id="destinations">
          <div className={styles.sectionIntro}>
            <div>
              <span className={styles.eyebrow}>A CLEARER WAY TO RESEARCH</span>
              <h2>Start with the trip you have in mind</h2>
            </div>
            <p>Choose your route and dates, review the results, then check the final details with the provider before booking.</p>
          </div>
          <div className={styles.capabilityGrid}>
            <article className={styles.capabilityCard}>
              <span className={styles.capabilityIcon}><Icon name="compass" /></span>
              <h3>Tell us where you’re going</h3>
              <p>Choose departure and arrival airports, dates, number of travelers, and cabin.</p>
              <a href="#route-search">Enter trip details <Icon name="arrow" size={13} /></a>
            </article>
            <article className={styles.capabilityCard}>
              <span className={styles.capabilityIcon}><Icon name="globe" /></span>
              <h3>Look through the results</h3>
              <p>Review itinerary details and fares returned for the route and dates you selected.</p>
              <a href="/disclaimer">How search results work <Icon name="arrow" size={13} /></a>
            </article>
            <article className={styles.capabilityCard}>
              <span className={styles.capabilityIcon}><Icon name="plane" /></span>
              <h3>Check before you book</h3>
              <p>Confirm the full price, baggage rules, and fare conditions with the airline or ticket seller.</p>
              <a href="/refund-cancellation">Cancellation and refund details <Icon name="arrow" size={13} /></a>
            </article>
            <article className={styles.capabilityCard}>
              <span className={styles.capabilityIcon}><Icon name="support" /></span>
              <h3>Need help with this site?</h3>
              <p>Our team can help with questions about FareClassic and its flight-search information.</p>
              <a href="/contact">Contact our team <Icon name="arrow" size={13} /></a>
            </article>
          </div>
        </section>

        <div id="live-search">
          <LiveFlightReports />
        </div>

        <section className={styles.experience}>
          <div className={styles.experienceCopy}>
            <span className={styles.eyebrow}>FROM SEARCH TO NEXT STEP</span>
            <h2>Know what happens after you search</h2>
            <p>Use FareClassic to review flight options. The airline or ticket seller handles the purchase and any later changes.</p>
            <ol className={styles.processList}>
              <li><b>1. Search</b><span>Add your airports, dates, travelers, and preferred cabin.</span></li>
              <li><b>2. Review</b><span>Look through the itineraries and prices returned by the search provider.</span></li>
              <li><b>3. Confirm</b><span>Check the complete fare and rules with the airline or seller before purchasing.</span></li>
            </ol>
          </div>
          <div className={styles.processNotice}>
            <span className={styles.capabilityIcon}><Icon name="shield" /></span>
            <div>
              <b>Your booking stays with the seller</b>
              <p>FareClassic doesn’t issue tickets or take payment. The airline or ticket seller manages your reservation.</p>
              <a href="/terms">Read our website terms <Icon name="arrow" size={13} /></a>
            </div>
          </div>
        </section>

        <section className={styles.partnerSection} id="about">
          <div className={styles.partnerIntro}>
            <span className={styles.eyebrow}>ABOUT THIS SERVICE</span>
            <h2>Flight search, without the guesswork</h2>
            <p>FareClassic is an independent service for researching flight options. Search results come from an external provider; bookings and payments are handled by the airline or ticket seller.</p>
            <a className={styles.textLink} href="/about">Get to know FareClassic <Icon name="arrow" size={14} /></a>
          </div>
          <div className={styles.promiseList}>
            <article><span className={styles.promiseIcon}><Icon name="check" /></span><div><h3>Search on your terms</h3><p>Set your route, dates, traveler count, and cabin to request matching provider results.</p></div></article>
            <article><span className={styles.promiseIcon}><Icon name="shield" /></span><div><h3>Independent by design</h3><p>FareClassic is not affiliated with or endorsed by an airline.</p></div></article>
            <article><span className={styles.promiseIcon}><Icon name="support" /></span><div><h3>Talk to our team</h3><p>Call +1-844-585-5025 or email support@fareclassic.com, Monday–Friday, 9 AM–6 PM.</p></div></article>
          </div>
        </section>

        <section className={styles.faqSection} id="faq">
          <span className={styles.eyebrow}>GOOD TO KNOW</span>
          <h2>Questions travelers often ask</h2>
          <p className={styles.faqIntro}>A few details about searching, booking, and getting help after your purchase.</p>
          <div className={styles.faqList}>
            {questions.map(({ question, answer }) => (
              <details className={styles.faqItem} key={question}>
                <summary>{question}<Icon name="chevron" size={15} /></summary>
                <p>{answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section className={styles.contactSection} id="contact">
          <div className={styles.contactPanel}>
            <div className={styles.contactCopy}>
              <span><Icon name="support" size={13} /> WE’RE HERE TO HELP</span>
              <h2>Have a question about FareClassic?</h2>
              <p>Get in touch about this website or its search information. For an existing ticket, changes, or refunds, contact the airline or ticket seller.</p>
              <div className={styles.contactTrust}><span>Monday–Friday, 9 AM–6 PM</span><span></span></div>
            </div>
            <div className={styles.contactActions}>
              <a className={styles.contactPhone} href="tel:+18445855025"><Icon name="support" size={17} /> +1-844-585-5025</a>
              <a className={styles.contactEmail} href="mailto:support@fareclassic.com">support@fareclassic.com</a>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
