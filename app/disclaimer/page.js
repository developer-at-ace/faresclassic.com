import InformationPage from "../components/information-page";

export const metadata = {
  title: "Disclaimer | FareClassic Travel Information",
  description:
    "Read the FareClassic Disclaimer to understand our independent travel information services, content accuracy, third-party links, and limitations of liability.",
};

export default function DisclaimerPage() {
  return (
    <InformationPage
      eyebrow="IMPORTANT INFORMATION"
      title="Disclaimer"
      intro="Last updated: November 2, 2026. FareClassic provides flight-search results and general travel information for research purposes."
    >
      <section>
        <h2>1. General information</h2>
        <p>
          FareClassic is an independent travel information website. The
          information on this site is provided for general research and
          informational purposes. Although we aim to present it clearly, we do
          not guarantee that all information is complete, current, or free from
          errors. Travel information may change without notice; independently
          verify important details before making travel arrangements.
        </p>
      </section>
      <section>
        <h2>2. No airline affiliation</h2>
        <p>
          FareClassic is not an airline, airport authority, government agency,
          or official airline customer service department. We are not
          affiliated with, endorsed by, sponsored by, or officially connected
          to airlines or other third parties mentioned on this website, unless
          explicitly stated otherwise. Third-party names and marks belong to
          their respective owners and are used for identification or
          informational purposes.
        </p>
      </section>
      <section>
        <h2>3. Flight information and accuracy</h2>
        <p>
          Flight offers are returned by an external flight-search provider.
          Routes, schedules, availability, prices, taxes, baggage rules, and
          restrictions may be incomplete or change. A search result is not a
          reservation, ticket, price guarantee, or offer to sell. Before
          booking, confirm current schedules and availability, the complete
          price and applicable charges, baggage allowances, airport details,
          airline rules, and travel-document or entry requirements with the
          airline or ticket seller.
        </p>
        <p>
          FareClassic does not independently verify every provider result or
          guarantee the accuracy, availability, or completeness of third-party
          travel information.
        </p>
      </section>
      <section>
        <h2>4. No booking or ticketing services</h2>
        <p>
          FareClassic provides flight search and travel information. This
          website does not sell tickets, issue boarding passes, create or manage
          airline reservations, or process payments. Any booking or purchase
          must be completed with the airline or ticket seller, whose terms and
          policies apply. Contact that seller directly about an existing
          booking, including changes, cancellations, refunds, baggage claims,
          or payment questions.
        </p>
      </section>
      <section>
        <h2>5. External websites</h2>
        <p>
          If this website links to a third-party website, the link is provided
          for convenience or information. FareClassic does not control and is
          not responsible for third-party content, accuracy, privacy practices,
          security, products, or services. Review the third party’s terms and
          privacy information before sharing personal information or making a
          transaction.
        </p>
      </section>
      <section>
        <h2>6. No professional advice</h2>
        <p>
          Information on FareClassic is not legal, immigration, financial,
          government, or professional travel advice. Requirements vary by
          traveler and destination. For visas, immigration, travel documents,
          and official requirements, consult the relevant authorities or a
          qualified professional.
        </p>
      </section>
      <section>
        <h2>7. Limitation of liability</h2>
        <p>
          To the extent permitted by applicable law, FareClassic is not
          responsible for losses arising from reliance on general information
          on this site, changes to airline schedules, fares, or availability,
          errors or omissions in third-party information, or transactions and
          arrangements made with external providers. Nothing in this disclaimer
          excludes or limits rights or liability that cannot lawfully be
          excluded or limited.
        </p>
      </section>
      <section>
        <h2>8. Changes to this disclaimer</h2>
        <p>
          We may update this disclaimer as the website or our practices change.
          Any revised version will be published on this page with an updated
          date. Please review it periodically.
        </p>
      </section>
      <section>
        <h2>9. Contact</h2>
        <p>
          For questions about this disclaimer or information on FareClassic,
          visit <a href="/contact">Contact Us</a> or email{" "}
          <a href="mailto:support@fareclassic.com">support@fareclassic.com</a>.
        </p>
      </section>
    </InformationPage>
  );
}
