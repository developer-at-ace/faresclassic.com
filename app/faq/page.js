import InformationPage from "../components/information-page";

export const metadata = {
  title: "Frequently Asked Questions | FareClassic",
  description:
    "Find answers to common questions about FareClassic, flight information, travel planning, airline bookings, cancellations, refunds, and website policies.",
};

const questions = [
  {
    question: "What is FareClassic?",
    answer:
      "FareClassic is an independent flight-search and travel-information website. Visitors can search for flight offers and review information returned by an external provider.",
  },
  {
    question: "Is FareClassic an airline?",
    answer:
      "No. FareClassic is not an airline, airport authority, or government agency and does not claim affiliation with or endorsement by any airline.",
  },
  {
    question: "Can I book flight tickets directly through FareClassic?",
    answer:
      "No. FareClassic does not sell tickets, create reservations, issue tickets, or accept payments. Contact the airline or ticket seller to confirm details and complete a booking.",
  },
  {
    question: "Does FareClassic provide flight information?",
    answer:
      "The flight-search form sends your airports, dates, traveler counts, and cabin selection to an external provider and displays returned offers. Results may include itinerary and schedule information.",
  },
  {
    question: "Are displayed flight prices guaranteed?",
    answer:
      "No. Provider-returned prices and availability can change. Confirm the full itinerary, final fare, taxes, baggage rules, and fare conditions with the airline or seller before booking.",
  },
  {
    question: "Can I check flight schedules on FareClassic?",
    answer:
      "Search results may include schedule information returned by the provider. Schedules can change, so confirm current departure and arrival details with the airline or ticket seller.",
  },
  {
    question: "Does FareClassic provide international travel information?",
    answer:
      "The search may include domestic or international itineraries, depending on the route and provider results. Confirm passport, visa, transit, and entry requirements with the relevant government authorities.",
  },
  {
    question: "Can FareClassic help change an existing flight booking?",
    answer:
      "FareClassic does not manage reservations. Contact the airline or ticket seller that issued your ticket using the details on your booking confirmation.",
  },
  {
    question: "How do I cancel a flight ticket?",
    answer:
      "Submit cancellation requests to the airline or ticket seller responsible for your booking. Deadlines, fees, and eligibility depend on your ticket conditions and applicable rules. See the Cancellation & Refund Policy for general guidance.",
  },
  {
    question: "How do I request a refund?",
    answer:
      "Contact the airline or seller that processed your purchase. Refund eligibility and processing time depend on that provider, your ticket terms, and other applicable conditions. FareClassic does not process ticket refunds.",
  },
  {
    question: "Does FareClassic charge for searching?",
    answer:
      "FareClassic does not charge a booking or search fee through this website. A third-party seller may apply its own charges if you choose to purchase a ticket with it.",
  },
  {
    question: "Is FareClassic affiliated with an airline?",
    answer:
      "No airline affiliation, sponsorship, or endorsement is claimed. Airline names and marks are used only to identify travel routes and itinerary information.",
  },
  {
    question: "How can I contact FareClassic?",
    answer:
      "For questions about this website or its search information, email support@fareclassic.com or call +1-888-985-1220 during Monday–Friday, 9 AM–6 PM. The time zone has not been specified.",
  },
  {
    question: "How can I report incorrect information?",
    answer:
      "Contact FareClassic through the Contact Us page and include the relevant page or search details and a description of the issue. For booking-specific corrections, contact the airline or seller.",
  },
  {
    question: "What personal information does FareClassic collect?",
    answer:
      "Flight search processes your selected airports, dates, traveler counts, and cabin and sends those criteria to an external provider. If you contact support, we receive the details you choose to provide. Read the Privacy Policy for more information.",
  },
  {
    question: "Does FareClassic use cookies?",
    answer:
      "The current application code does not implement analytics or advertising tracking scripts. We have not confirmed whether hosting or external services use cookies independently. See the Privacy Policy for details.",
  },
  {
    question: "Can I suggest travel topics?",
    answer:
      "Yes. You can send feedback or suggestions about the website through the Contact Us page. FareClassic does not currently claim to publish destination guides.",
  },
  {
    question: "Where can I find FareClassic policies?",
    answer:
      "The website footer links to the Privacy Policy, Terms and Conditions, Disclaimer, Cancellation & Refund Policy, Contact Us, and other company information.",
  },
];

export default function FAQPage() {
  return (
    <InformationPage
      eyebrow="HELP & INFORMATION"
      title="Frequently Asked Questions"
      intro="Answers to common questions about FareClassic flight search, provider results, bookings, cancellations, and website policies."
    >
      {questions.map(({ question, answer }, index) => (
        <section key={question}>
          <h2>{index + 1}. {question}</h2>
          <p>{answer}</p>
        </section>
      ))}
      <section>
        <h2>Still have questions?</h2>
        <p>
          Visit <a href="/contact">Contact Us</a> for questions about the
          website. For an existing reservation, contact the airline or ticket
          seller shown on your booking confirmation.
        </p>
      </section>
    </InformationPage>
  );
}
