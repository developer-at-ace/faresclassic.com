import InformationPage from "../components/information-page";
import styles from "../components/information-page.module.css";

export const metadata = {
  title: "Contact Us | Get in Touch with FareClassic",
  description:
    "Contact FareClassic for website inquiries, travel information questions, feedback, and general assistance. We'd be happy to hear from you.",
};

export default function ContactPage() {
  return (
    <InformationPage
      eyebrow="CONTACT"
      title="Contact Us"
      intro="We welcome questions about the FareClassic website, our flight-search information, and feedback or suggestions."
    >
      <section>
        <h2>Get in touch</h2>
        <p>
          For general website inquiries or questions about the information
          shown in flight search, contact us by phone or email.
        </p>
        <div className={styles.contactCard}>
          <p><strong>Phone:</strong> <a href="tel:+18889851220">+1-888-985-1220</a></p>
          <p><strong>Email:</strong> <a href="mailto:support@fareclassic.com">support@fareclassic.com</a></p>
          <p><strong>Address:</strong> 1340 Maryland Avenue, Tampa, Florida, 33602</p>
          <p><strong>Hours:</strong> Monday–Friday, 9 AM–6 PM.</p>
          <p><strong>Website:</strong> <a href="https://fareclassic.com">https://fareclassic.com</a></p>
        </div>
      </section>
      <section>
        <h2>What you can contact us about</h2>
        <ul>
          <li>Questions about using FareClassic flight search or navigating the website.</li>
          <li>Feedback or a request to clarify information displayed in search results.</li>
          <li>Questions about privacy or the policies published on this website.</li>
        </ul>
        <p>
          Please do not include payment-card details, passport information, or
          other sensitive personal information in general inquiries.
        </p>
      </section>
      <section>
        <h2>Questions about existing flight bookings?</h2>
        <p>
          FareClassic is an independent travel information platform. We do not
          operate flights, issue tickets, accept payment, or manage airline
          reservations. For booking changes, cancellations, refunds, baggage,
          or payment questions about an existing ticket, contact the airline or
          ticket seller responsible for your reservation using the details on
          your booking confirmation.
        </p>
      </section>
      <section>
        <h2>Business information</h2>
        <p>
          FareClassic is the public website brand. The business name provided
          to us is Bruj flight; its registered legal name has not been
          verified. The business address provided is 1340 Maryland Avenue,
          Tampa, Florida, 33602.
        </p>
      </section>
    </InformationPage>
  );
}
