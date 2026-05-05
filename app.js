const trip = {
  start: "2026-10-16T15:55:00+02:00",
  end: "2026-10-26T18:35:00+01:00",
  travelers: 2,
  route: [
    { code: "MUC", label: "Munich", meta: "Departure" },
    { code: "ICN", label: "Seoul", meta: "17-21 Oct" },
    { code: "GJ", label: "Gyeongju", meta: "21-23 Oct" },
    { code: "BUS", label: "Busan", meta: "23-25 Oct" },
    { code: "ICN", label: "Seoul", meta: "25-26 Oct" },
  ],
  stats: [
    { value: "11", label: "calendar days" },
    { value: "9", label: "confirmed hotel nights" },
    { value: "4", label: "stay blocks" },
    { value: "2", label: "travelers" },
  ],
};

const events = [
  {
    id: "outbound",
    type: "flight",
    city: "Munich",
    date: "2026-10-16",
    day: 1,
    time: "15:55",
    title: "LH718 to Seoul",
    summary: "Munich Terminal 2 to Incheon Terminal 1. Direct Lufthansa A350-900, Premium Economy, 11h 00m.",
    details: [
      "Arrival: 17 October 2026 at 09:55 local time.",
      "Baggage outbound: each traveler has 1 cabin bag, 1 personal item, and 2 checked bags up to 23 kg.",
      "Flight booking total from the confirmation: EUR 3,964.62 for two travelers.",
    ],
  },
  {
    id: "seoul-arrival",
    type: "transfer",
    city: "Seoul",
    date: "2026-10-17",
    day: 2,
    time: "Morning",
    title: "Arrive in Seoul",
    summary: "Land at Incheon and move to Jongno for the first Seoul stay at Amid Hotel Seoul.",
    details: [
      "Hotel check-in starts at 15:00.",
      "Hotel message lists bus 6002, taxi, and AREX plus Line 1 as transfer options.",
    ],
  },
  {
    id: "amid-first",
    type: "stay",
    city: "Seoul",
    date: "2026-10-17",
    day: 2,
    time: "17-21 Oct",
    title: "Amid Hotel Seoul",
    summary: "4 nights in a Standard Twin Room for two adults in Jongno-gu.",
    details: [
      "Address: 38, Insa-dong 5gil, Jongno-gu, 03149 Seoul.",
      "Check-in: 17 October from 15:00. Check-out: 21 October by 12:00.",
      "Planned total: KRW 1,230,630. Free cancellation until 15 October 2026 at 23:59 KST.",
    ],
  },
  {
    id: "seoul-base-18",
    type: "stay",
    city: "Seoul",
    date: "2026-10-18",
    day: 3,
    time: "Overnight",
    title: "Seoul hotel base",
    summary: "Amid Hotel Seoul stay continues in Jongno-gu.",
    details: [
      "Confirmed room: Standard Twin Room for two adults.",
      "The source data has no separate activity booking for this day.",
    ],
  },
  {
    id: "seoul-base-19",
    type: "stay",
    city: "Seoul",
    date: "2026-10-19",
    day: 4,
    time: "Overnight",
    title: "Seoul hotel base",
    summary: "Amid Hotel Seoul stay continues in Jongno-gu.",
    details: [
      "Confirmed room: Standard Twin Room for two adults.",
      "Check-out for this stay remains 21 October by 12:00.",
    ],
  },
  {
    id: "seoul-base-20",
    type: "stay",
    city: "Seoul",
    date: "2026-10-20",
    day: 5,
    time: "Overnight",
    title: "Seoul hotel base",
    summary: "Final full night of the first Seoul stay.",
    details: [
      "Confirmed room: Standard Twin Room for two adults.",
      "Free cancellation deadline from the source confirmation is already 15 October 2026 at 23:59 KST.",
    ],
  },
  {
    id: "seoul-to-gyeongju",
    type: "transfer",
    city: "Gyeongju",
    date: "2026-10-21",
    day: 6,
    time: "Midday",
    title: "Change city: Seoul to Gyeongju",
    summary: "Amid Hotel Seoul check-out is by 12:00; Yettle Hanok Stay check-in starts at 16:00.",
    details: [
      "No transport booking for this city change was found in Reisedaten.",
      "Yettle Hanok Stay accepts check-in from 16:00 to 20:00.",
    ],
  },
  {
    id: "gyeongju",
    type: "stay",
    city: "Gyeongju",
    date: "2026-10-21",
    day: 6,
    time: "21-23 Oct",
    title: "Yettle Hanok Stay",
    summary: "2 nights in Gyeongju in a twin room with private bathroom.",
    details: [
      "Address: 9, Balgeunmaeul-gil, 38171 Gyeongju.",
      "Check-in: 21 October, 16:00-20:00. Check-out: 23 October, 08:00-10:00.",
      "Total: KRW 260,000. Free cancellation until 6 October 2026 at 23:59 KST.",
    ],
  },
  {
    id: "gyeongju-base-22",
    type: "stay",
    city: "Gyeongju",
    date: "2026-10-22",
    day: 7,
    time: "Overnight",
    title: "Gyeongju hanok stay",
    summary: "Yettle Hanok Stay continues for the second night.",
    details: [
      "Confirmed room: Twin room with private bathroom.",
      "Check-out for this stay is 23 October, 08:00-10:00.",
    ],
  },
  {
    id: "gyeongju-to-busan",
    type: "transfer",
    city: "Busan",
    date: "2026-10-23",
    day: 8,
    time: "Midday",
    title: "Change city: Gyeongju to Busan",
    summary: "Yettle Hanok Stay check-out is 08:00-10:00; Lotte Hotel Busan check-in is at 15:00.",
    details: [
      "No transport booking for this city change was found in Reisedaten.",
      "Lotte Hotel Busan is in Busanjin-gu.",
    ],
  },
  {
    id: "busan",
    type: "stay",
    city: "Busan",
    date: "2026-10-23",
    day: 8,
    time: "23-25 Oct",
    title: "Lotte Hotel Busan",
    summary: "2 nights in a Superior Twin Room in Busanjin-gu.",
    details: [
      "Address: 772, Gaya-daero, Busanjin-gu, 47285 Busan.",
      "Check-in: 23 October at 15:00. Check-out: 25 October by 11:00.",
      "Paid total: EUR 360.35. Free cancellation until 21 October 2026 at 23:59 KST.",
    ],
  },
  {
    id: "busan-base-24",
    type: "stay",
    city: "Busan",
    date: "2026-10-24",
    day: 9,
    time: "Overnight",
    title: "Busan hotel base",
    summary: "Lotte Hotel Busan stay continues for the second night.",
    details: [
      "Confirmed room: Superior Twin Room.",
      "Check-out for this stay is 25 October by 11:00.",
    ],
  },
  {
    id: "busan-to-seoul",
    type: "transfer",
    city: "Seoul",
    date: "2026-10-25",
    day: 10,
    time: "Midday",
    title: "Change city: Busan to Seoul",
    summary: "Lotte Hotel Busan check-out is by 11:00; final Amid Hotel Seoul check-in is at 15:00.",
    details: [
      "No transport booking for this city change was found in Reisedaten.",
      "The final Seoul stay uses the same Jongno-gu address as the first stay.",
    ],
  },
  {
    id: "seoul-final",
    type: "stay",
    city: "Seoul",
    date: "2026-10-25",
    day: 10,
    time: "25-26 Oct",
    title: "Amid Hotel Seoul",
    summary: "Final 1-night Seoul stay before the return flight.",
    details: [
      "Address: 38, Insa-dong 5gil, Jongno-gu, 03149 Seoul.",
      "Check-in: 25 October at 15:00. Check-out: 26 October by 12:00.",
      "Paid total: EUR 182.87. Free cancellation until 23 October 2026 at 23:59 KST.",
    ],
  },
  {
    id: "final-checkout",
    type: "transfer",
    city: "Seoul",
    date: "2026-10-26",
    day: 11,
    time: "Morning",
    title: "Final Seoul checkout",
    summary: "Amid Hotel Seoul check-out is by 12:00 before the 13:30 ICN departure.",
    details: [
      "The source data does not include a separate airport transfer booking.",
      "Return flight departs from Incheon Terminal 1.",
    ],
  },
  {
    id: "return",
    type: "flight",
    city: "Seoul",
    date: "2026-10-26",
    day: 11,
    time: "13:30",
    title: "LH719 to Munich",
    summary: "Incheon Terminal 1 to Munich Terminal 2. Direct Lufthansa A350-900, Economy, 13h 05m.",
    details: [
      "Arrival: 26 October 2026 at 18:35 local time.",
      "Baggage return: each traveler has 1 cabin bag, 1 personal item, and 1 checked bag up to 23 kg.",
      "No seat selected in the source confirmation.",
    ],
  },
];

const bookings = [
  {
    type: "Flight",
    title: "Lufthansa MUC - ICN - MUC",
    date: "16-26 Oct 2026",
    summary: "Direct return flights for two travelers, booking confirmed on 19 March 2026.",
    facts: [
      "Outbound LH718: MUC 15:55 on 16 Oct, ICN 09:55 on 17 Oct.",
      "Return LH719: ICN 13:30, MUC 18:35 on 26 Oct.",
      "Aircraft: Airbus A350-900 both directions.",
      "Total price: EUR 3,964.62.",
    ],
  },
  {
    type: "Hotel",
    title: "Amid Hotel Seoul",
    date: "17-21 Oct 2026",
    summary: "4 nights, Standard Twin Room, 2 adults, Jongno-gu.",
    facts: [
      "Check-in from 15:00, check-out by 12:00.",
      "Address: 38, Insa-dong 5gil, Jongno-gu, 03149 Seoul.",
      "Phone: +82 2 731 1004.",
      "Total planned at property: KRW 1,230,630.",
    ],
  },
  {
    type: "Hotel",
    title: "Yettle Hanok Stay",
    date: "21-23 Oct 2026",
    summary: "2 nights, twin room with private bathroom, Gyeongju.",
    facts: [
      "Check-in 16:00-20:00, check-out 08:00-10:00.",
      "Address: 9, Balgeunmaeul-gil, 38171 Gyeongju.",
      "Phone: +82 10 4129 2494.",
      "Total: KRW 260,000. Bank transfer prepayment may be required.",
    ],
  },
  {
    type: "Hotel",
    title: "Lotte Hotel Busan",
    date: "23-25 Oct 2026",
    summary: "2 nights, Superior Twin Room, Busanjin-gu.",
    facts: [
      "Check-in at 15:00, check-out by 11:00.",
      "Address: 772, Gaya-daero, Busanjin-gu, 47285 Busan.",
      "Phone: +82 51 810 1000.",
      "Paid total: EUR 360.35. Breakfast offered at EUR 40 per person.",
    ],
  },
  {
    type: "Hotel",
    title: "Amid Hotel Seoul",
    date: "25-26 Oct 2026",
    summary: "1 night, Standard Twin Room, final Seoul stop.",
    facts: [
      "Check-in at 15:00, check-out by 12:00.",
      "Address: 38, Insa-dong 5gil, Jongno-gu, 03149 Seoul.",
      "Phone: +82 10 7140 2230.",
      "Paid total: EUR 182.87. Breakfast offered at EUR 12 per person.",
    ],
  },
];

const deadlines = [
  {
    date: "2026-10-06T23:59:00+09:00",
    label: "6 Oct",
    title: "Yettle Hanok Stay",
    text: "Free cancellation ends at 23:59 KST. From 7 October, the full KRW 260,000 can apply.",
  },
  {
    date: "2026-10-15T23:59:00+09:00",
    label: "15 Oct",
    title: "Amid Hotel Seoul, first stay",
    text: "Free cancellation ends at 23:59 KST. From 16 October, KRW 376,200 can apply.",
  },
  {
    date: "2026-10-16T00:00:00+02:00",
    label: "16 Oct",
    title: "Outbound flight",
    text: "Online check-in opens 23 hours before the Munich departure according to the Lufthansa confirmation.",
  },
  {
    date: "2026-10-21T23:59:00+09:00",
    label: "21 Oct",
    title: "Lotte Hotel Busan",
    text: "Free cancellation ends at 23:59 KST. From 22 October, EUR 360 can apply.",
  },
  {
    date: "2026-10-23T23:59:00+09:00",
    label: "23 Oct",
    title: "Amid Hotel Seoul, final stay",
    text: "Free cancellation ends at 23:59 KST. From 24 October, EUR 183 can apply.",
  },
];

const arrivalNotes = [
  {
    tag: "Bus",
    title: "Airport limousine 6002",
    items: [
      "From Incheon Airport to Jongno 2-ga.",
      "About 6 minutes on foot from the stop to Amid Hotel Seoul.",
      "Estimated fare in hotel message: KRW 17,000-18,000.",
    ],
  },
  {
    tag: "Taxi",
    title: "Direct taxi",
    items: [
      "Hotel message estimate: KRW 60,000-80,000.",
      "Typical duration in message: 60-90 minutes.",
      "Best fallback with heavy luggage after the long flight.",
    ],
  },
  {
    tag: "Rail",
    title: "AREX plus Line 1",
    items: [
      "Incheon Airport Terminal 1 or 2 to Seoul Station by AREX.",
      "Transfer to Line 1 and ride to Jonggak Station.",
      "Hotel message says Jonggak is about 3 minutes on foot from the hotel.",
    ],
  },
];

const filters = [
  { id: "all", label: "All" },
  { id: "flight", label: "Flights" },
  { id: "stay", label: "Stays" },
  { id: "transfer", label: "Transfers" },
];

const days = Array.from({ length: 11 }, (_, index) => {
  const date = new Date(Date.UTC(2026, 9, 16 + index, 12));
  return {
    day: index + 1,
    date: date.toISOString().slice(0, 10),
    label: date.toLocaleDateString("en-GB", { day: "2-digit", month: "short" }),
    weekday: date.toLocaleDateString("en-GB", { weekday: "short" }),
  };
});

const state = {
  filter: "all",
  selectedDay: 1,
  selectedCity: "all",
};

const formatDate = (date) =>
  new Date(`${date}T12:00:00Z`).toLocaleDateString("en-GB", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

const dayMonth = (date) =>
  new Date(`${date}T12:00:00Z`).toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
  });

const daysUntil = (isoDate) => {
  const today = new Date();
  const target = new Date(isoDate);
  const ms = target.setHours(0, 0, 0, 0) - today.setHours(0, 0, 0, 0);
  return Math.ceil(ms / 86400000);
};

function renderStats() {
  const stats = document.querySelector("#stats");
  const departureDelta = daysUntil(trip.start);
  const dynamicStats = [
    ...trip.stats,
    {
      value: departureDelta > 0 ? departureDelta : "0",
      label: departureDelta > 0 ? "days until departure" : "trip has started",
    },
  ];

  stats.innerHTML = dynamicStats
    .map(
      (item) => `
        <article class="stat">
          <span class="stat__value">${item.value}</span>
          <span class="stat__label">${item.label}</span>
        </article>
      `,
    )
    .join("");
}

function renderRoute() {
  const routeMap = document.querySelector("#routeMap");
  routeMap.innerHTML = trip.route
    .map(
      (stop, index) => `
        <button class="route-stop" type="button" data-city="${stop.label}" aria-pressed="${state.selectedCity === stop.label}">
          <span class="route-stop__code">${stop.code}</span>
          <span>${stop.label}</span>
          <span class="route-stop__meta">${stop.meta}</span>
        </button>
      `,
    )
    .join("");

  routeMap.querySelectorAll(".route-stop").forEach((button) => {
    button.addEventListener("click", () => {
      const city = button.dataset.city;
      state.selectedCity = state.selectedCity === city ? "all" : city;
      renderRoute();
      renderTimeline();
    });
  });
}

function renderFilters() {
  const filtersNode = document.querySelector("#filters");
  filtersNode.innerHTML = filters
    .map(
      (filter) => `
        <button type="button" data-filter="${filter.id}" aria-pressed="${state.filter === filter.id}">
          ${filter.label}
        </button>
      `,
    )
    .join("");

  filtersNode.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", () => {
      state.filter = button.dataset.filter;
      renderFilters();
      renderTimeline();
    });
  });
}

function renderDays() {
  const dayStrip = document.querySelector("#dayStrip");
  dayStrip.innerHTML = days
    .map(
      (day) => `
        <button class="day-button" type="button" data-day="${day.day}" aria-pressed="${state.selectedDay === day.day}">
          <span class="day-button__num">Day ${day.day}</span>
          <span class="day-button__date">${day.weekday} ${day.label}</span>
        </button>
      `,
    )
    .join("");

  dayStrip.querySelectorAll(".day-button").forEach((button) => {
    button.addEventListener("click", () => {
      state.selectedDay = Number(button.dataset.day);
      renderDays();
      renderTimeline();
    });
  });
}

function filteredEvents() {
  return events.filter((event) => {
    const typeMatch = state.filter === "all" || event.type === state.filter;
    const dayMatch = event.day === state.selectedDay;
    const cityMatch = state.selectedCity === "all" || event.city === state.selectedCity;
    return typeMatch && dayMatch && cityMatch;
  });
}

function renderDayPanel() {
  const selected = days.find((day) => day.day === state.selectedDay);
  const dayEvents = events.filter((event) => event.day === state.selectedDay);
  const cities = [...new Set(dayEvents.map((event) => event.city))];
  const types = [...new Set(dayEvents.map((event) => event.type))];

  document.querySelector("#dayPanel").innerHTML = `
    <p class="day-panel__date">${formatDate(selected.date)}</p>
    <h3 class="day-panel__title">Day ${selected.day}</h3>
    <div class="day-panel__meta">
      ${cities.map((city) => `<span class="pill">${city}</span>`).join("")}
      ${types.map((type) => `<span class="pill">${type}</span>`).join("")}
    </div>
  `;
}

function renderTimeline() {
  renderDayPanel();
  const list = document.querySelector("#timelineList");
  const visibleEvents = filteredEvents();

  if (!visibleEvents.length) {
    list.innerHTML = `<div class="empty-state">No confirmed item matches the selected filters for this day.</div>`;
    return;
  }

  list.innerHTML = visibleEvents
    .map(
      (event) => `
        <article class="event-card" data-type="${event.type}">
          <div class="event-card__date" aria-hidden="true">
            <span class="event-card__day">${dayMonth(event.date).split(" ")[0]}</span>
            <span class="event-card__month">${dayMonth(event.date).split(" ")[1]}</span>
          </div>
          <div>
            <div class="event-card__head">
              <div>
                <span class="pill">${event.type}</span>
                <h3>${event.title}</h3>
                <p class="event-card__time">${event.time} - ${event.summary}</p>
              </div>
              <button class="booking-card__toggle" type="button" aria-label="Toggle details" aria-expanded="false">
                <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="m6 9 6 6 6-6"/></svg>
              </button>
            </div>
            <div class="event-card__details">
              <ul>${event.details.map((detail) => `<li>${detail}</li>`).join("")}</ul>
            </div>
          </div>
        </article>
      `,
    )
    .join("");

  list.querySelectorAll(".booking-card__toggle").forEach((button) => {
    button.addEventListener("click", () => {
      const card = button.closest(".event-card");
      const isOpen = card.classList.toggle("is-open");
      button.setAttribute("aria-expanded", String(isOpen));
    });
  });
}

function renderBookings() {
  const grid = document.querySelector("#bookingGrid");
  grid.innerHTML = bookings
    .map(
      (booking, index) => `
        <article class="booking-card ${index === 0 ? "is-open" : ""}">
          <div class="booking-card__main">
            <div class="booking-card__top">
              <div>
                <div class="booking-card__meta">
                  <span class="pill">${booking.type}</span>
                  <span class="pill">${booking.date}</span>
                </div>
                <h3>${booking.title}</h3>
              </div>
              <button class="booking-card__toggle" type="button" aria-label="Toggle booking details" aria-expanded="${index === 0}">
                <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="m6 9 6 6 6-6"/></svg>
              </button>
            </div>
            <p class="booking-card__summary">${booking.summary}</p>
          </div>
          <div class="booking-card__details">
            <ul>${booking.facts.map((fact) => `<li>${fact}</li>`).join("")}</ul>
          </div>
        </article>
      `,
    )
    .join("");

  grid.querySelectorAll(".booking-card__toggle").forEach((button) => {
    button.addEventListener("click", () => {
      const card = button.closest(".booking-card");
      const isOpen = card.classList.toggle("is-open");
      button.setAttribute("aria-expanded", String(isOpen));
    });
  });
}

function renderDeadlines() {
  document.querySelector("#deadlineList").innerHTML = deadlines
    .map(
      (deadline) => `
        <article class="deadline-item">
          <div class="deadline-item__date">${deadline.label}</div>
          <div>
            <p class="deadline-item__title">${deadline.title}</p>
            <p class="deadline-item__text">${deadline.text}</p>
          </div>
        </article>
      `,
    )
    .join("");
}

function renderArrivalNotes() {
  document.querySelector("#arrivalNotes").innerHTML = arrivalNotes
    .map(
      (note) => `
        <article class="note-card">
          <span class="note-card__tag">${note.tag}</span>
          <h3>${note.title}</h3>
          <ul>${note.items.map((item) => `<li>${item}</li>`).join("")}</ul>
        </article>
      `,
    )
    .join("");
}

function bindGlobalActions() {
  document.querySelector("#collapseAll").addEventListener("click", () => {
    document.querySelectorAll(".booking-card.is-open, .event-card.is-open").forEach((card) => {
      card.classList.remove("is-open");
      const toggle = card.querySelector("[aria-expanded]");
      if (toggle) toggle.setAttribute("aria-expanded", "false");
    });
  });
}

function init() {
  renderStats();
  renderRoute();
  renderFilters();
  renderDays();
  renderTimeline();
  renderBookings();
  renderDeadlines();
  renderArrivalNotes();
  bindGlobalActions();
}

init();
