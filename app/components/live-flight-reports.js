"use client";

import { useEffect, useState } from "react";
import styles from "./live-flight-reports.module.css";

const markets = [
  {
    origin: "DFW",
    originCity: "Dallas–Fort Worth",
    destination: "JFK",
    destinationCity: "New York",
    image: "/route_images/dallas.png",
  },
  {
    origin: "ORD",
    originCity: "Chicago",
    destination: "MIA",
    destinationCity: "Miami",
    image: "/route_images/mia.png",
  },
  {
    origin: "LAX",
    originCity: "Los Angeles",
    destination: "LAS",
    destinationCity: "Las Vegas",
    image: "/route_images/lax.png",
  },
];

function getDepartureDate() {
  const date = new Date();
  date.setUTCDate(date.getUTCDate() + 30);
  return date.toISOString().slice(0, 10);
}

function formatDate(value) {
  return new Date(`${value}T00:00:00`).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

function formatTime(value) {
  if (!value) return "";
  const date = new Date(value);
  return Number.isNaN(date.getTime())
    ? ""
    : date.toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit" });
}

function getOfferPrice(offer) {
  const amount = Number(offer.price?.grandTotal ?? offer.price?.total);
  if (!Number.isFinite(amount)) return null;
  const currency = offer.price?.currency || "USD";
  try {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency,
    }).format(amount);
  } catch {
    return `${amount.toLocaleString("en-US")} ${currency}`;
  }
}

function buildResultsUrl(market, departureDate) {
  const params = new URLSearchParams({
    tripType: "oneway",
    origin: market.origin,
    destination: market.destination,
    departureDate,
    adults: "1",
    children: "0",
    infants: "0",
    cabin: "ECONOMY",
  });
  return `/flight-results?${params.toString()}`;
}

function OfferReport({ market, departureDate, report }) {
  const url = buildResultsUrl(market, departureDate);
  const offer = report?.offer;
  const itinerary = offer?.itineraries?.[0];
  const segments = itinerary?.segments ?? [];
  const price = offer ? getOfferPrice(offer) : null;
  const firstSegment = segments[0];
  const lastSegment = segments[segments.length - 1];
  const departureTime = formatTime(firstSegment?.departure?.at);
  const arrivalTime = formatTime(lastSegment?.arrival?.at);
  const stopCount = Math.max(segments.length - 1, 0);

  if (report?.loading) {
    return (
      <article className={styles.card}>
        <img className={styles.image} src={market.image} alt="" loading="lazy" />
        <div className={styles.content}>
          <p className={styles.route}>{market.origin} <span>→</span> {market.destination}</p>
          <p className={styles.status} role="status">Looking up available fares…</p>
        </div>
      </article>
    );
  }

  if (!offer || !price) {
    return (
      <article className={styles.card}>
        <img className={styles.image} src={market.image} alt="" loading="lazy" />
        <div className={styles.content}>
          <p className={styles.route}>{market.origin} <span>→</span> {market.destination}</p>
          <p className={styles.status}>
            {report?.error || "No current offer is available for this search."}
          </p>
          <a className={styles.link} href={url}>Search this route</a>
        </div>
      </article>
    );
  }

  return (
    <a className={styles.cardLink} href={url} aria-label={`View current ${market.origin} to ${market.destination} flight results`}>
      <article className={styles.card}>
        <img className={styles.image} src={market.image} alt="" loading="lazy" />
        <div className={styles.content}>
          <p className={styles.route}>
            {market.origin} <span>→</span> {market.destination}
          </p>
          <p className={styles.cityPair}>
            {market.originCity} to {market.destinationCity}
          </p>
          <div className={styles.offerDetails}>
            <strong>{price}</strong>
            <span>Provider result · 1 adult · Economy</span>
          </div>
          {departureTime && arrivalTime && (
            <p className={styles.times}>{departureTime} → {arrivalTime}</p>
          )}
          <p className={styles.stops}>
            {stopCount === 0 ? "Nonstop" : `${stopCount} stop${stopCount === 1 ? "" : "s"}`}
            {" · "}{formatDate(departureDate)}
          </p>
          <span className={styles.link}>View flight results <span aria-hidden="true">→</span></span>
        </div>
      </article>
    </a>
  );
}

export default function LiveFlightReports() {
  const [departureDate, setDepartureDate] = useState("");
  const [reports, setReports] = useState([]);

  useEffect(() => {
    const date = getDepartureDate();
    const controller = new AbortController();
    setDepartureDate(date);
    setReports(markets.map(() => ({ loading: true })));

    async function loadMarket(market, index) {
      const params = new URLSearchParams({
        tripType: "oneway",
        origin: market.origin,
        destination: market.destination,
        departureDate: date,
        adults: "1",
        children: "0",
        infants: "0",
        cabin: "ECONOMY",
      });

      try {
        const response = await fetch(`/api/flights/search?${params}`, {
          cache: "no-store",
          signal: controller.signal,
        });
        const result = await response.json();
        if (!response.ok) {
          throw new Error(result.error || "Current offers could not be loaded.");
        }
        if (!Array.isArray(result.data)) {
          throw new Error("The flight-search provider returned an unexpected response.");
        }

        const offer = result.data
          .filter((item) => getOfferPrice(item) !== null)
          .sort((first, second) => Number(first.price?.grandTotal ?? first.price?.total) -
            Number(second.price?.grandTotal ?? second.price?.total))[0];

        setReports((current) => current.map((report, reportIndex) =>
          reportIndex === index
            ? { offer: offer ?? null, error: offer ? "" : "No current provider offer was returned." }
            : report,
        ));
      } catch (error) {
        if (error instanceof Error && error.name === "AbortError") return;
        setReports((current) => current.map((report, reportIndex) =>
          reportIndex === index
            ? { error: error instanceof Error ? error.message : "Current offers could not be loaded." }
            : report,
        ));
      }
    }

    markets.forEach((market, index) => {
      void loadMarket(market, index);
    });

    return () => controller.abort();
  }, []);

  return (
    <section className={styles.section} aria-labelledby="live-flight-reports-title">
      <div className={styles.heading}>
        <div>
          <span className={styles.eyebrow}>RECENT SEARCH RESULTS</span>
          <h2 id="live-flight-reports-title">Flight options to explore</h2>
        </div>
        <p>These fares were returned by our search provider for one adult in Economy. Availability and prices may change.</p>
      </div>
      {!departureDate && (
        <p className={styles.dateNote} role="status">Getting the search date ready…</p>
      )}
      {departureDate && (
        <p className={styles.dateNote}>
          One-way searches for {formatDate(departureDate)} · Results are checked when you visit this page.
        </p>
      )}
      <div className={styles.grid}>
        {markets.map((market, index) => (
          <OfferReport
            key={`${market.origin}-${market.destination}`}
            market={market}
            departureDate={departureDate || getDepartureDate()}
            report={reports[index] ?? { loading: true }}
          />
        ))}
      </div>
      <p className={styles.disclosure}>
        FareClassic does not sell these tickets. Before purchasing, confirm the full itinerary, final fare, taxes, baggage, and ticket rules with the airline or ticket seller. Opening a result runs the search again, so details may differ.
      </p>
    </section>
  );
}
