"use client";

import { useState } from "react";

export default function Home() {
  const tabs = [
    "Yesterday",
    "Today",
    "Tomorrow",
    "This Week",
    "Next Week",
    "This Month",
  ];
  const [activeTab, setActiveTab] = useState("Today");

  const [isMonthOpen, setIsMonthOpen] = useState(false);
  const [selectedMonth, setSelectedMonth] = useState("April");

  const months = ["January", "February", "March", "April", "May", "June"];
  const year = "2021";

  const handleMonthClick = (month) => {
    setSelectedMonth(month);
    setIsMonthOpen(false);
  };

  return (
    <div className="container">
      {/* HEADER */}
      <header>
        <h1>
          Economic <span>Calendar</span>
        </h1>
        <p>
          Stay updated with key global economic events, interest rate decisions,
          and bond auctions.
        </p>
      </header>

      {/* TABS */}
      <div className="tabs-bar">
        <div className="tabs">
          {tabs.map((tab) => (
            <button
              key={tab}
              type="button"
              className={`tab-btn ${activeTab === tab ? "active" : ""}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        <button type="button" className="filters-btn">
          <div className="filters-icon" />
          Filters
        </button>
      </div>

      {/* MAIN SECTION */}
      <div className="main">
        {/* LEFT: EVENTS TABLE */}
        <section>
          <div className="date-heading">28 March 2025</div>

          <div className="event-card">
            <div className="event-header">
              <span>Time (IST)</span>
              <span>Country</span>
              <span>Event</span>
            </div>

            {Array.from({ length: 5 }).map((_, idx) => (
              <div className="event-row" key={idx}>
                <span>12:00</span>
                <div className="country">
                  <span className="country-dot" />
                  <span>JPN</span>
                </div>
                <span>BoJ Monetary Policy Meeting Minutes</span>
              </div>
            ))}
          </div>
        </section>

        {/* RIGHT: CALENDAR */}
        <aside className="calendar-card">
          <div className="calendar-header">
            <button type="button" className="icon-btn" aria-label="Previous month">
              &#8249;
            </button>

            <div className="month-year">
              <div
                role="button"
                tabIndex={0}
                aria-expanded={isMonthOpen}
                className={`select-like ${isMonthOpen ? "open" : ""}`}
                onClick={() => setIsMonthOpen((o) => !o)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setIsMonthOpen((o) => !o);
                  }
                }}
              >
                {selectedMonth}
                <ul className={`dropdown ${isMonthOpen ? "visible" : "hidden"}`}>
                  {months.map((m) => (
                    <li
                      key={m}
                      className={m === selectedMonth ? "active" : ""}
                      onClick={(e) => {
                        e.stopPropagation();
                        handleMonthClick(m);
                      }}
                      onKeyDown={(e) => {
                        if (e.key === "Enter") {
                          e.stopPropagation();
                          handleMonthClick(m);
                        }
                      }}
                      role="button"
                      tabIndex={0}
                    >
                      {m}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="select-like year">{year}</div>
            </div>

            <button type="button" className="icon-btn" aria-label="Next month">
              &#8250;
            </button>
          </div>

          <div className="calendar-grid-header">
            <span>Mo</span>
            <span>Tu</span>
            <span>We</span>
            <span>Th</span>
            <span>Fr</span>
            <span>Sa</span>
            <span>Su</span>
          </div>

          <div className="calendar-grid-row">
            <div className="calendar-day muted">29</div>
            <div className="calendar-day muted">30</div>
            <div className="calendar-day">31</div>
            <div className="calendar-day">1</div>
            <div className="calendar-day">2</div>
            <div className="calendar-day">3</div>
            <div className="calendar-day">4</div>
          </div>

          <div className="calendar-grid-row">
            <div className="calendar-day">5</div>
            <div className="calendar-day">6</div>
            <div className="calendar-day">7</div>
            <div className="calendar-day">8</div>
            <div className="calendar-day">9</div>
            <div className="calendar-day">10</div>
            <div className="calendar-day">11</div>
          </div>

          <div className="calendar-grid-row">
            <div className="calendar-day">12</div>
            <div className="calendar-day">13</div>
            <div className="calendar-day">14</div>
            <div className="calendar-day">15</div>
            <div className="calendar-day">16</div>
            <div className="calendar-day">17</div>
            <div className="calendar-day">18</div>
          </div>

          <div className="calendar-grid-row">
            <div className="calendar-day">19</div>
            <div className="calendar-day">20</div>
            <div className="calendar-day">21</div>
            <div className="calendar-day">22</div>
            <div className="calendar-day">23</div>
            <div className="calendar-day">24</div>
            <div className="calendar-day">25</div>
          </div>

          <div className="calendar-grid-row">
            <div className="calendar-day">26</div>
            <div className="calendar-day">27</div>
            <div className="calendar-day">28</div>
            <div className="calendar-day active">29</div>
            <div className="calendar-day">30</div>
            <div className="calendar-day muted">1</div>
            <div className="calendar-day muted">2</div>
          </div>
        </aside>
      </div>
    </div>
  );
}
