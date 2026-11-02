import InformationPage from "../components/information-page";

export const metadata = {
  title: "Cancellation & Refund Policy | FareClassic",
  description:
    "Read the FareClassic Cancellation & Refund Policy for general information about flight cancellations, ticket changes, refund eligibility, and airline refund procedures.",
};

export default function RefundCancellationPage() {
  return (
    <InformationPage
      eyebrow="BOOKING INFORMATION"
      title="Cancellation & Refund Policy"
      intro="Last updated: November 2, 2026. This page provides general information about cancellations and refunds for tickets purchased from airlines or other sellers."
    >
      <section>
        <h2>1. About this policy</h2>
        <p>
          FareClassic is an independent flight-search and travel-information
          service. This website does not sell tickets, issue reservations,
          collect ticket payments, or process cancellations and refunds.
          Transactions for a ticket are handled by the airline or ticket seller
          from which it was purchased.
        </p>
      </section>
      <section>
        <h2>2. Cancellation rules and refund eligibility</h2>
        <p>
          Cancellation rules, deadlines, refund eligibility, fees, and
          processing times depend on the ticket, fare conditions, airline or
          seller, payment method, and applicable law. Some tickets may be
          refundable in full or in part; others may be non-refundable. Airline
          cancellations or significant schedule changes may have separate
          options under the seller’s terms or applicable passenger protections.
          FareClassic does not determine eligibility, fees, or refund amounts.
        </p>
        <p>
          Review the conditions for your specific ticket and confirm any
          applicable charges and deadlines with the airline or seller. Their
          current terms and applicable legal rights govern.
        </p>
      </section>
      <section>
        <h2>3. How to request a cancellation, change, or refund</h2>
        <ol>
          <li>Find your booking confirmation, ticket number, or reservation reference.</li>
          <li>Contact the airline or ticket seller shown on the confirmation using its official service channel.</li>
          <li>Ask about the applicable deadlines, charges, eligibility, and available alternatives before confirming a change or cancellation.</li>
          <li>Submit the request directly to that provider and keep its confirmation or case number.</li>
        </ol>
        <p>
          FareClassic cannot submit or track a request for a ticket purchased
          from another provider.
        </p>
      </section>
      <section>
        <h2>4. Refund processing time</h2>
        <p>
          Refund processing times vary by airline or seller, ticket conditions,
          payment method, and financial institution. Contact the provider that
          processed your ticket purchase for the current status. FareClassic
          does not control or guarantee third-party refund timelines.
        </p>
      </section>
      <section>
        <h2>5. Payments through FareClassic</h2>
        <p>
          FareClassic does not accept payment for tickets or collect a booking
          fee through this website, so there is no ticket payment made here for
          FareClassic to refund. Product returns and shipping do not apply to
          this flight-search service.
        </p>
      </section>
      <section>
        <h2>6. Questions</h2>
        <p>
          For help identifying the seller, check your booking confirmation or
          payment statement. For questions about FareClassic or this policy,
          email{" "}
          <a href="mailto:support@fareclassic.com">support@fareclassic.com</a>{" "}
          or call <a href="tel:+18889851220">+1-888-985-1220</a>.
        </p>
      </section>
      <section>
        <h2>7. Policy updates</h2>
        <p>
          We may update this page when our website information or practices
          change. Any revision will be published here with an updated date.
        </p>
      </section>
    </InformationPage>
  );
}
