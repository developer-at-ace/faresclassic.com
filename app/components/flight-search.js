"use client";

import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import AirportCombobox from "./airport-combobox";
import { airports } from "../data/airports";
import styles from "./flight-search.module.css";

const airportsByCode = new Map(airports.map((airport) => [airport.code, airport]));

function getLocalDateString() {
  const today = new Date();
  return [
    today.getFullYear(),
    String(today.getMonth() + 1).padStart(2, "0"),
    String(today.getDate()).padStart(2, "0"),
  ].join("-");
}

export default function FlightSearch() {
  const router = useRouter();
  const [from, setFrom] = useState(airportsByCode.get("DFW"));
  const [to, setTo] = useState(airportsByCode.get("JFK"));
  const [tripType, setTripType] = useState("oneway");
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [infants, setInfants] = useState(0);
  const [cabin, setCabin] = useState("Economy");
  const [passengerMenuOpen, setPassengerMenuOpen] = useState(false);
  const [searchError, setSearchError] = useState("");
  const [isNavigating, setIsNavigating] = useState(false);
  const [departureDate, setDepartureDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [minimumDate, setMinimumDate] = useState("");
  const departureInputRef = useRef(null);
  const totalTravelers = adults + children + infants;

  function handleSearch(event) {
    event.preventDefault();
    setSearchError("");

    if (!from || !to) {
      setSearchError("Choose an airport from the dropdown for both departure and destination.");
      return;
    }
    if (from.code === to.code) {
      setSearchError("Choose two different airports.");
      return;
    }

    const params = new URLSearchParams({
      tripType,
      origin: from.code,
      destination: to.code,
      departureDate,
      returnDate,
      adults: String(adults),
      children: String(children),
      infants: String(infants),
      cabin: cabin.toUpperCase().replaceAll(" ", "_"),
    });

    setIsNavigating(true);
    router.push(`/flight-results?${params.toString()}`);
  }

  function changeTravelerCount(type, amount) {
    const current = type === "adults" ? adults : type === "children" ? children : infants;
    const next = current + amount;
    const minimum = type === "adults" ? 1 : 0;
    if (next < minimum || totalTravelers + amount > 9) return;
    if ((type === "adults" && next < infants) || (type === "infants" && next > adults)) return;
    if (type === "adults") setAdults(next);
    if (type === "children") setChildren(next);
    if (type === "infants") setInfants(next);
  }

  function handleDepartureDateChange(value) {
    setDepartureDate(value);
    if (returnDate && value > returnDate) setReturnDate("");
  }

  function swapAirports() {
    setFrom(to);
    setTo(from);
  }

  const travelers = [
    { type: "adults", title: "Adults", detail: "Age 12+", count: adults, minimum: 1 },
    { type: "children", title: "Children", detail: "Ages 2–11", count: children, minimum: 0 },
    { type: "infants", title: "Infants", detail: "Under age 2 · one per adult", count: infants, minimum: 0 },
  ];

  return (
    <form className={styles.searchCard} id="route-search" onSubmit={handleSearch}>
      <div className={styles.tripTabs} role="group" aria-label="Trip type">
        <button
          type="button"
          className={tripType === "oneway" ? styles.tripTabActive : styles.tripTab}
          aria-pressed={tripType === "oneway"}
          onClick={() => setTripType("oneway")}
        >
          One way
        </button>
        <button
          type="button"
          className={tripType === "roundtrip" ? styles.tripTabActive : styles.tripTab}
          aria-pressed={tripType === "roundtrip"}
          onClick={() => setTripType("roundtrip")}
        >
          Round trip
        </button>
      </div>

      <div className={styles.searchFields}>
        <div className={`${styles.searchField} ${styles.originField}`}>
          <AirportCombobox
            inputRef={departureInputRef}
            id="departure-city"
            label="Departure city / airport"
            value={from}
            onChange={setFrom}
          />
        </div>
        <button
          className={styles.swapButton}
          type="button"
          aria-label="Swap departure and destination"
          title="Swap departure and destination"
          onClick={swapAirports}
        >
          <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
            <path d="M4 6h11m0 0-3-3m3 3-3 3M16 14H5m0 0 3 3m-3-3 3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <div className={`${styles.searchField} ${styles.destinationField}`}>
          <AirportCombobox
            id="destination-city"
            label="Destination city / airport"
            value={to}
            onChange={setTo}
          />
        </div>

        <label className={`${styles.searchField} ${styles.dateField}`}>
          <span>Departure date</span>
          <input
            type="date"
            aria-label="Departure date"
            min={minimumDate || undefined}
            value={departureDate}
            onFocus={() => setMinimumDate((current) => current || getLocalDateString())}
            onChange={(event) => handleDepartureDateChange(event.target.value)}
            required
          />
        </label>
        <label className={`${styles.searchField} ${styles.dateField} ${tripType === "oneway" ? styles.fieldDisabled : ""}`}>
          <span>Return date</span>
          <input
            type="date"
            aria-label="Return date"
            min={departureDate || minimumDate || undefined}
            value={returnDate}
            onFocus={() => setMinimumDate((current) => current || getLocalDateString())}
            onChange={(event) => setReturnDate(event.target.value)}
            disabled={tripType === "oneway"}
            required={tripType === "roundtrip"}
          />
        </label>

        <div className={`${styles.searchField} ${styles.travelerField}`}>
          <span>Travelers &amp; cabin</span>
          <button
            className={styles.passengerTrigger}
            type="button"
            aria-expanded={passengerMenuOpen}
            onClick={() => setPassengerMenuOpen((open) => !open)}
          >
            <span>{totalTravelers} {totalTravelers === 1 ? "traveler" : "travelers"} · {cabin}</span>
            <span className={styles.chevron} aria-hidden="true" />
          </button>
          {passengerMenuOpen && (
            <div className={styles.passengerPopover}>
              {travelers.map((traveler) => (
                <div className={styles.passengerRow} key={traveler.type}>
                  <div>
                    <strong>{traveler.title}</strong>
                    <small>{traveler.detail}</small>
                  </div>
                  <div className={styles.stepper}>
                    <button
                      type="button"
                      aria-label={`Remove one ${traveler.title.toLowerCase()}`}
                      disabled={traveler.count <= traveler.minimum}
                      onClick={() => changeTravelerCount(traveler.type, -1)}
                    >−</button>
                    <span>{traveler.count}</span>
                    <button
                      type="button"
                      aria-label={`Add one ${traveler.title.toLowerCase()}`}
                      disabled={totalTravelers >= 9 || (traveler.type === "infants" && infants >= adults)}
                      onClick={() => changeTravelerCount(traveler.type, 1)}
                    >+</button>
                  </div>
                </div>
              ))}
              <label className={styles.cabinSelect}>
                <span>Cabin class</span>
                <select value={cabin} onChange={(event) => setCabin(event.target.value)}>
                  <option>Economy</option>
                  <option>Premium economy</option>
                  <option>Business</option>
                  <option>First</option>
                </select>
              </label>
              <button
                className={styles.popoverDone}
                type="button"
                onClick={() => setPassengerMenuOpen(false)}
              >
                Done
              </button>
            </div>
          )}
        </div>
      </div>

      <button className={styles.searchSubmit} type="submit" disabled={isNavigating} aria-busy={isNavigating}>
        <span>{isNavigating ? "Opening flight results…" : "Search flights"}</span>
        <span aria-hidden="true">↗</span>
      </button>
      <p className={styles.searchDisclaimer}>
        Live search results are informational; prices and availability can change. Bookings are not made here.
      </p>
      {searchError && <p className={styles.searchError} role="alert">{searchError}</p>}
      <div className={styles.trustNote}>
        <span aria-hidden="true">✓</span>
        <span>Free to explore <i /> Independent information <i /> No booking pressure</span>
      </div>
    </form>
  );
}
