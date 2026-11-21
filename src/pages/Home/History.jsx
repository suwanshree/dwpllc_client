import { useState } from "react";
import { history } from "../../data/organization";

export default function History() {
  const [selectedYear, setSelectedYear] = useState("2950");
  const [showAll, setShowAll] = useState(false);
  const entries = showAll
    ? history
    : history.filter((item) => item.year === selectedYear);
  return (
    <section id="history" className="section history-section">
      <div className="container">
        <div className="section-heading history-heading">
          <div>
            <p className="eyebrow">The ship’s log</p>
            <h2>
              Every crew has a story.
              <br />
              <span>Here’s ours.</span>
            </h2>
          </div>
          <p>
            From a bar crawl in Levski to the frontiers of Nyx. Six years of
            contracts, close calls, and carving our own path.
          </p>
        </div>
        <div className="history-controls" aria-label="History years">
          <div className="year-list">
            {history.map((item) => (
              <button
                key={item.year}
                className={`year-button ${!showAll && selectedYear === item.year ? "selected" : ""}`}
                aria-pressed={!showAll && selectedYear === item.year}
                aria-controls="history-entries"
                onClick={() => {
                  setSelectedYear(item.year);
                  setShowAll(false);
                }}
              >
                {item.year}
              </button>
            ))}
          </div>
          <button
            className="text-button"
            aria-pressed={showAll}
            onClick={() => setShowAll((value) => !value)}
          >
            {showAll ? "View one year" : "Read full history"}
          </button>
        </div>
        <div id="history-entries" aria-live="polite" aria-atomic="true">
          {entries.map((item) => (
            <div className="history-year" key={item.year}>
              <div className="history-summary">
                <span className="history-big-year">{item.year}</span>
                <h3>{item.title}</h3>
                <p className="mono">{item.location}</p>
                <span className="history-seal" aria-hidden="true">
                  DW / ARCHIVES
                </span>
              </div>
              <ol className="timeline">
                {item.events.map((event, i) => (
                  <li
                    key={event.date || i}
                    className={event.milestone ? "milestone" : ""}
                  >
                    <span className="timeline-marker" />
                    <p className="timeline-date">
                      {event.date || item.year}
                      {event.milestone && (
                        <span className="milestone-label">
                          Organization founded
                        </span>
                      )}
                    </p>
                    <p>{event.text}</p>
                  </li>
                ))}
              </ol>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
