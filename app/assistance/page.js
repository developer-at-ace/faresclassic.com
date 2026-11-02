import InformationPage from "../components/information-page";

export const metadata = {
  title: "Travel Assistance | Flight & Travel Information – FareClassic",
  description:
    "Find helpful travel information with FareClassic. Search flight routes, review provider-returned fares, and get practical guidance for planning your journey.",
};

export default function AssistancePage() {
  return (
    <InformationPage
      eyebrow="TRAVEL ASSISTANCE"
      title="Travel Assistance"
      intro="Helpful travel information for every step of your journey. FareClassic offers flight-search tools and general guidance to help you explore travel options."
    >
      <section>
        <h2>Helpful travel information for every step of your journey</h2>
        <p>
          Planning a trip involves several decisions, from choosing a
          destination and exploring flight routes to understanding airline
          policies and preparing for departure. FareClassic brings together
          flight search and practical information to help visitors research
          their options.
        </p>
      </section>
      <section>
        <h2>How FareClassic can help</h2>
        <h3>1. Flight route information</h3>
        <p>
          Use flight search to explore itineraries for a route and travel dates
          you select. Provider results may include departure and arrival
          airports, connections, schedules, and fares.
        </p>
        <h3>2. Understand your search results</h3>
        <p>
          Compare the itinerary details returned for your search. Schedules,
          fares, and availability can change, so confirm the complete itinerary,
          total price, baggage rules, and fare conditions with the airline or
          ticket seller before booking.
        </p>
        <h3>3. Prepare for booking and travel</h3>
        <p>
          Review the applicable booking and travel requirements with the
          provider responsible for your trip. FareClassic does not independently
          verify every third-party detail and cannot guarantee that provider
          information remains current.
        </p>
      </section>
      <section>
        <h2>How flight search works</h2>
        <ol>
          <li>Enter the airports, travel dates, travelers, and cabin class.</li>
          <li>Review the flight offers returned by the external search provider.</li>
          <li>Contact the airline or ticket seller to verify details and complete a booking.</li>
        </ol>
        <p>
          <a href="/#route-search">Start a flight search</a>
        </p>
      </section>
      <section>
        <h2>What FareClassic does not provide</h2>
        <p>
          FareClassic is an independent information service, not an airline or
          booking agent. This website does not issue tickets, accept payment,
          manage reservations, or process ticket changes, cancellations, or
          refunds. For help with an existing booking, contact the airline or
          ticket seller shown on your confirmation.
        </p>
      </section>
      <section>
        <h2>Need help with this website?</h2>
        <p>
          For questions about FareClassic or its search tools, visit{" "}
          <a href="/contact">Contact Us</a>.
        </p>
      </section>
    </InformationPage>
  );
}
