import InformationPage from "../components/information-page";

export const metadata = {
  title: "About FareClassic | Our Travel Information Platform",
  description:
    "Learn about FareClassic, an independent travel information platform for flight search, itinerary research, and practical travel-planning information.",
};

export default function AboutPage() {
  return (
    <InformationPage
      eyebrow="ABOUT"
      title="About FareClassic"
      intro="FareClassic is an independent travel information platform created to make exploring flight options and planning journeys easier."
    >
      <section>
        <h2>Our mission</h2>
        <p>
          Travel planning can involve comparing routes, airports, schedules,
          and available flight options. Our aim is to make flight research more
          accessible by bringing search tools and general travel information
          together in one place.
        </p>
      </section>
      <section>
        <h2>What we offer</h2>
        <h3>Flight search and itinerary information</h3>
        <p>
          Visitors can search by departure and destination airports, travel
          dates, traveler count, and cabin class. Search results may include
          itineraries, connections, schedules, and prices returned by an
          external flight-search provider.
        </p>
        <h3>Travel planning information</h3>
        <p>
          Our website provides information about using flight search and
          checking booking terms. The available results and information depend
          on the search and the data returned by the provider; we do not claim
          to provide destination guides or independently verify every travel
          detail.
        </p>
      </section>
      <section>
        <h2>Our commitment</h2>
        <p>
          We aim to present search information clearly. Airline schedules,
          fares, availability, baggage rules, and travel requirements can
          change, so confirm important details with the airline or ticket seller
          before making travel arrangements.
        </p>
      </section>
      <section>
        <h2>An independent travel information website</h2>
        <p>
          FareClassic is not an airline, airport authority, or government
          agency, and does not claim to represent or be endorsed by any airline.
          Airline and airport names are used only to identify travel routes and
          itinerary information.
        </p>
        <p>
          FareClassic does not issue tickets, accept payment, or manage
          reservations. Booking, ticket issuance, and reservation changes are
          handled by the airline or ticket seller.
        </p>
      </section>
      <section>
        <h2>How flight search works</h2>
        <ol>
          <li>Enter your route, travel dates, travelers, and cabin in the flight-search form.</li>
          <li>Review the results returned by the flight-search provider. Prices and availability can change.</li>
          <li>Confirm the itinerary, full price, and terms with the airline or ticket seller before booking.</li>
        </ol>
      </section>
      <section>
        <h2>Stay connected</h2>
        <p>
          If you have a question about this website or feedback about its
          information, please <a href="/contact">contact FareClassic</a>.
        </p>
      </section>
    </InformationPage>
  );
}
