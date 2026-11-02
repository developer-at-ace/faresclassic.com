import InformationPage from "../components/information-page";

export const metadata = {
  title: "Privacy Policy | FareClassic",
  description:
    "Read the FareClassic Privacy Policy to learn how flight-search criteria, technical data, and support inquiries may be handled.",
};

export default function PrivacyPage() {
  return (
    <InformationPage
      eyebrow="YOUR INFORMATION"
      title="Privacy Policy"
      intro="Last updated: November 2, 2026. This policy describes information processed when you use FareClassic flight search or contact us."
    >
      <section>
        <h2>1. About FareClassic</h2>
        <p>
          FareClassic is an independent flight-search and travel-information
          website. The flight-search form lets you request provider results;
          this website does not issue tickets, manage reservations, or accept
          payment.
        </p>
      </section>
      <section>
        <h2>2. Information processed when you search</h2>
        <p>
          A flight search processes the origin and destination airport codes,
          trip type, travel dates, traveler counts, and cabin selection. These
          search criteria are included in the results-page URL and may be
          visible in your browser history or in systems that process the
          request.
        </p>
        <p>
          The flight-search request is sent from our server to an external
          search provider so it can return offers. The provider may also
          receive technical request information and process it under its own
          privacy terms. We have not confirmed the provider’s retention period
          or all of its data-handling practices. Do not enter passenger names,
          passport details, payment-card information, or other sensitive
          information in the flight-search form.
        </p>
      </section>
      <section>
        <h2>3. Information you send to support</h2>
        <p>
          If you call or email us, we receive the contact information and the
          content you choose to provide. The flight-search form does not ask
          for passenger names, passport information, payment-card details, or
          an account login. There is no website contact form.
        </p>
        <p>
          Email{" "}
          <a href="mailto:support@fareclassic.com">support@fareclassic.com</a>{" "}
          or call <a href="tel:+18889851220">+1-888-985-1220</a>. Please do not
          send sensitive personal or payment information in general messages.
        </p>
      </section>
      <section>
        <h2>4. Technical information and service providers</h2>
        <p>
          Website hosting and infrastructure providers may process technical
          information, such as connection or security logs, to deliver and
          protect the website. We have not confirmed the exact information
          collected, where it is stored, or how long provider or hosting logs
          are retained. For details, please consult the applicable provider
          privacy information.
        </p>
      </section>
      <section>
        <h2>5. Cookies, analytics, and advertising</h2>
        <p>
          The current application code does not implement analytics or
          advertising tracking scripts. We have not confirmed whether the
          hosting environment or external services use cookies or similar
          technologies independently. You can manage cookies through your
          browser settings; disabling them may affect website functionality.
          If these practices change, this policy should be updated and any
          legally required consent obtained.
        </p>
      </section>
      <section>
        <h2>6. How information may be used or shared</h2>
        <p>
          Search criteria are used to request the flight offers you ask to
          see. Information you send to support may be used to respond to your
          inquiry. Service providers may process information as needed to
          provide search, hosting, or support services. Information may also
          be disclosed where required by applicable law or valid legal
          process. We do not sell personal information.
        </p>
      </section>
      <section>
        <h2>7. Retention and security</h2>
        <p>
          Search data is sent to the flight-search provider, and its retention
          practices have not been confirmed. Support messages and technical
          logs may be retained by the relevant email, telephone, hosting, or
          infrastructure providers. We do not have verified retention periods
          to publish for these services.
        </p>
        <p>
          No online service or transmission can be guaranteed completely
          secure. Do not send sensitive information through ordinary email or
          include it in a flight search.
        </p>
      </section>
      <section>
        <h2>8. Your privacy rights</h2>
        <p>
          Privacy rights depend on your location and applicable law and may
          include requesting access to, correction of, or deletion of personal
          information. To ask a privacy question or submit a request, contact
          us at{" "}
          <a href="mailto:support@fareclassic.com">support@fareclassic.com</a>.
          We may need additional information to verify and respond to a
          request. The business’s applicable legal jurisdiction has not been
          confirmed.
        </p>
      </section>
      <section>
        <h2>9. Children’s privacy</h2>
        <p>
          The flight-search form requests traveler counts but not children’s
          names or other identifying details. Do not send a child’s personal
          information through a general support inquiry. If you believe
          identifying information about a child has been sent to us, contact
          us so we can review the request.
        </p>
      </section>
      <section>
        <h2>10. External websites and international visitors</h2>
        <p>
          This website may link to external services. Their privacy practices
          are governed by their own notices. Visitors may access FareClassic
          from different countries, but the locations where service providers
          process or store information have not been confirmed.
        </p>
      </section>
      <section>
        <h2>11. Changes to this policy</h2>
        <p>
          We may update this policy if the website or its information practices
          change. Updates will be published on this page with a revised date.
        </p>
      </section>
      <section>
        <h2>12. Contact</h2>
        <p>
          For privacy questions, visit <a href="/contact">Contact Us</a>, email{" "}
          <a href="mailto:support@fareclassic.com">support@fareclassic.com</a>,
          or call <a href="tel:+18889851220">+1-888-985-1220</a>.
        </p>
      </section>
    </InformationPage>
  );
}
