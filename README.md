# FareClassic

FareClassic is an independent flight-search and travel-information website built with Next.js. The website displays informational flight offers; it does not issue tickets, create bookings, or accept payments.

## Getting Started

Install dependencies and run the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Flight search

The flight search form lets travelers select airports, trip dates, passengers, and cabin class. Submitting the form opens `/flight-results`, which requests offers from the server-side `GET /api/flights/search` route. Results can be sorted by price or departure time and filtered to nonstop itineraries. Search criteria are included in the results-page URL.

Copy `.env.example` to `.env.local` and add credentials and site values accepted by the flight-search provider. Keep these values on the server; do not expose credentials in `NEXT_PUBLIC_` variables. The password query parameter defaults to `password` and can be changed with `FLIGHT_API_PASSWORD_PARAM` to match the provider API. Provider credentials and live access must be verified with the provider; do not treat local configuration as proof of a valid account.

The API accepts `tripType` (`oneway` or `roundtrip`), `origin`, `destination`, `departureDate` (`YYYY-MM-DD`), `returnDate` for round trips, `adults` (1–9), `children`, `infants` (at most 9 travelers total; each infant must travel with an adult), and `cabin` (`ECONOMY`, `PREMIUM_ECONOMY`, `BUSINESS`, or `FIRST`). Provider results are informational only. FareClassic does not book flights or process payments.

The homepage also requests current one-way Economy offers for one adult on three displayed airport pairs, using a departure date 30 days ahead. Prices are shown only when returned by the provider. Selecting a report opens the flight-results page with that route and date; results are requested again and may have changed. If provider access is unavailable or no offers are returned, the homepage displays that state rather than a sample price.

## Site information

The site publishes About, Contact, Disclaimer, Privacy, Terms, and Refund & Cancellation pages in the footer. The business name supplied for display has not been verified against registration records, and no public street address or travel accreditation details have been provided. Confirm these business/legal details before presenting the website as fully compliant.
