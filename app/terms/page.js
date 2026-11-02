import InformationPage from "../components/information-page";

export const metadata = {
  title: "Terms and Conditions | FareClassic",
  description:
    "Review FareClassic's Terms and Conditions, including website usage guidelines, intellectual property, third-party services, and visitor responsibilities.",
};

export default function TermsPage() {
  return (
    <InformationPage
      eyebrow="WEBSITE TERMS"
      title="Terms and Conditions"
      intro="Last updated: November 2, 2026. These terms apply to your access to and use of the FareClassic website."
    >
      <section>
        <h2>1. About this website</h2>
        <p>
          FareClassic is an independent flight-search and travel-information
          website. Visitors can submit search criteria and review flight
          offers returned by an external provider. FareClassic does not
          operate flights, sell tickets, create or manage reservations, issue
          boarding passes, or accept payments.
        </p>
      </section>
      <section>
        <h2>2. Acceptance and changes to these terms</h2>
        <p>
          By accessing or using FareClassic, you agree to these terms and our{" "}
          <a href="/privacy">Privacy Policy</a> and other applicable website
          policies. If you do not agree, do not use the website. We may update
          these terms by publishing a revised version here with an updated
          date. Changes apply from publication, subject to applicable law.
        </p>
      </section>
      <section>
        <h2>3. Permitted use</h2>
        <p>
          You may use the website for lawful, personal travel research. Do not
          use it to violate applicable law, interfere with the website or
          other visitors, attempt unauthorized access, introduce malicious
          code, or misrepresent your identity or affiliation. Do not copy or
          redistribute website content except as permitted by law or with
          permission from the relevant rights holder.
        </p>
      </section>
      <section>
        <h2>4. Search information and accuracy</h2>
        <p>
          Flight schedules, availability, fares, taxes, baggage rules, and
          travel requirements may change. Search results are informational,
          may be incomplete, and are not a reservation, ticket, price
          guarantee, or offer to sell. Verify the complete itinerary, total
          price, terms, and applicable requirements with the airline, ticket
          seller, airport, or relevant official authority before making travel
          arrangements. See our <a href="/disclaimer">Disclaimer</a>.
        </p>
      </section>
      <section>
        <h2>5. Bookings and third-party services</h2>
        <p>
          Any booking, purchase, or payment must be completed with the airline
          or ticket seller, not through FareClassic. The third party’s terms,
          privacy policy, and service conditions govern its services and
          transactions. FareClassic does not control third-party services.
          Contact the airline or seller shown on your booking confirmation
          about existing reservations, changes, cancellations, or refunds.
        </p>
      </section>
      <section>
        <h2>6. Intellectual property and trademarks</h2>
        <p>
          Website content and design may be protected by intellectual
          property laws. Rights in FareClassic materials belong to their
          respective owners. You may use website information for personal,
          non-commercial research, subject to applicable law. Do not reproduce
          or commercially exploit protected materials without permission from
          the relevant rights holder, except where permitted by law.
        </p>
        <p>
          Airline, airport, and other third-party names and marks belong to
          their respective owners. Their use to identify travel routes or
          itinerary information does not imply affiliation or endorsement.
        </p>
      </section>
      <section>
        <h2>7. External links</h2>
        <p>
          Links to third-party websites, if provided, are for convenience or
          information. FareClassic does not control or guarantee their
          content, accuracy, security, availability, or reliability. Use
          external websites at your discretion and review their terms and
          privacy policies.
        </p>
      </section>
      <section>
        <h2>8. Website availability and warranties</h2>
        <p>
          We may update, modify, suspend, or discontinue website features.
          Access may be interrupted by maintenance, technical issues, or
          circumstances beyond our control. To the extent permitted by
          applicable law, the website and its information are provided on an
          “as is” and “as available” basis; we do not guarantee uninterrupted
          availability, error-free operation, or that information will be
          suitable for every visitor.
        </p>
      </section>
      <section>
        <h2>9. Liability</h2>
        <p>
          To the extent permitted by applicable law, FareClassic is not
          responsible for losses arising from reliance on general travel
          information, changes to schedules, fares, or availability, errors
          or omissions in third-party information, or transactions made with
          external providers. Nothing in these terms excludes or limits
          rights or liability that cannot lawfully be excluded or limited.
        </p>
      </section>
      <section>
        <h2>10. Privacy</h2>
        <p>
          Your use of FareClassic is also subject to our{" "}
          <a href="/privacy">Privacy Policy</a>, which describes information
          processed when you use flight search or contact support.
        </p>
      </section>
      <section>
        <h2>11. Governing law</h2>
        <p>
          The legal jurisdiction applicable to the website operator has not
          been confirmed, so these terms do not specify a governing law or
          venue. These terms do not limit mandatory rights under applicable
          law.
        </p>
      </section>
      <section>
        <h2>12. Contact</h2>
        <p>
          For questions about these terms, visit{" "}
          <a href="/contact">Contact Us</a>, email{" "}
          <a href="mailto:support@fareclassic.com">support@fareclassic.com</a>,
          or call <a href="tel:+18445855025">+1-844-585-5025</a>.
        </p>
      </section>
    </InformationPage>
  );
}
