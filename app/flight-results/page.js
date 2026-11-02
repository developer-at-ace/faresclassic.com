import { Suspense } from "react";
import FlightResults from "./flight-results";
import styles from "./flight-results.module.css";

export const metadata = {
  title: "Flight Results | FareClassic",
  description: "Review informational flight offers and itinerary details with FareClassic.",
};

function ResultsFallback() {
  return (
    <main className={styles.loadingShell} role="status">
      <span className={styles.spinner} aria-hidden="true" />
      <span>Loading your flight search…</span>
    </main>
  );
}

export default function Page() {
  return (
    <Suspense fallback={<ResultsFallback />}>
      <FlightResults />
    </Suspense>
  );
}
