const DOMAIN_CONFIG = {
  US: {
    label: "zazzle.com (US)",
    methods: [
      { id: "standard", label: "Standard (4-7 bd)", min: 4, max: 7, applyUSHolidays: true },
      { id: "premium-a", label: "Premium A (2-3 bd)", min: 2, max: 3, applyUSHolidays: true },
      { id: "premium-b", label: "Premium B (2 bd)", min: 2, max: 2, applyUSHolidays: true },
      { id: "express", label: "Express (1 bd)", min: 1, max: 1, applyUSHolidays: true }
    ]
  },
  UK: {
    label: "UK",
    methods: [
      { id: "slow", label: "Slow, no tracking (9-18 bd)", min: 9, max: 18, applyUSHolidays: false },
      { id: "standard", label: "Standard with tracking (5-8 bd)", min: 5, max: 8, applyUSHolidays: false },
      { id: "expedited", label: "Expedited with tracking (2-4 bd)", min: 2, max: 4, applyUSHolidays: false }
    ]
  },
  CA: {
    label: "CA",
    methods: [
      { id: "slow", label: "Slow, no tracking (9-18 bd)", min: 9, max: 18, applyUSHolidays: false },
      { id: "standard", label: "Standard with tracking (5-8 bd)", min: 5, max: 8, applyUSHolidays: false },
      { id: "expedited", label: "Expedited with tracking (3-5 bd)", min: 3, max: 5, applyUSHolidays: false }
    ]
  },
  AU: {
    label: "AU",
    methods: [
      { id: "slow", label: "Slow, no tracking (10-18 bd)", min: 10, max: 18, applyUSHolidays: false },
      { id: "standard", label: "Standard with tracking (6-9 bd)", min: 6, max: 9, applyUSHolidays: false },
      { id: "expedited", label: "Expedited with tracking (3-5 bd)", min: 3, max: 5, applyUSHolidays: false }
    ]
  },
  NZ: {
    label: "NZ",
    methods: [
      { id: "slow", label: "Slow, no tracking (11-20 bd)", min: 11, max: 20, applyUSHolidays: false },
      { id: "standard", label: "Standard with tracking (7-11 bd)", min: 7, max: 11, applyUSHolidays: false },
      { id: "expedited", label: "Expedited with tracking (4-6 bd)", min: 4, max: 6, applyUSHolidays: false }
    ]
  },
  JP: {
    label: "JP",
    methods: [
      { id: "standard", label: "Standard with tracking (6-9 bd)", min: 6, max: 9, applyUSHolidays: false },
      { id: "expedited", label: "Expedited with tracking (3-5 bd)", min: 3, max: 5, applyUSHolidays: false }
    ]
  },
  BR: {
    label: "BR",
    methods: [
      { id: "standard", label: "Standard with tracking (7-12 bd)", min: 7, max: 12, applyUSHolidays: false },
      { id: "expedited", label: "Expedited with tracking (4-6 bd)", min: 4, max: 6, applyUSHolidays: false }
    ]
  },
  PT: {
    label: "PT",
    methods: [
      { id: "slow", label: "Slow, no tracking (9-18 bd)", min: 9, max: 18, applyUSHolidays: false },
      { id: "standard", label: "Standard with tracking (6-8 bd)", min: 6, max: 8, applyUSHolidays: false },
      { id: "expedited", label: "Expedited with tracking (2-5 bd)", min: 2, max: 5, applyUSHolidays: false }
    ]
  },
  FR: {
    label: "FR",
    methods: [
      { id: "slow", label: "Slow, no tracking (9-18 bd)", min: 9, max: 18, applyUSHolidays: false },
      { id: "standard", label: "Standard with tracking (7-10 bd)", min: 7, max: 10, applyUSHolidays: false },
      { id: "expedited", label: "Expedited with tracking (3-5 bd)", min: 3, max: 5, applyUSHolidays: false }
    ]
  },
  DE: {
    label: "DE",
    methods: [
      { id: "slow", label: "Slow, no tracking (9-18 bd)", min: 9, max: 18, applyUSHolidays: false },
      { id: "standard", label: "Standard with tracking (7-10 bd)", min: 7, max: 10, applyUSHolidays: false },
      { id: "expedited", label: "Expedited with tracking (3-5 bd)", min: 3, max: 5, applyUSHolidays: false }
    ]
  },
  AT: {
    label: "AT",
    methods: [
      { id: "slow", label: "Slow, no tracking (9-18 bd)", min: 9, max: 18, applyUSHolidays: false },
      { id: "standard", label: "Standard with tracking (7-10 bd)", min: 7, max: 10, applyUSHolidays: false },
      { id: "expedited", label: "Expedited with tracking (3-5 bd)", min: 3, max: 5, applyUSHolidays: false }
    ]
  },
  CH: {
    label: "CH",
    methods: [
      { id: "slow", label: "Slow, no tracking (9-18 bd)", min: 9, max: 18, applyUSHolidays: false },
      { id: "standard", label: "Standard with tracking (7-10 bd)", min: 7, max: 10, applyUSHolidays: false },
      { id: "expedited", label: "Expedited with tracking (3-5 bd)", min: 3, max: 5, applyUSHolidays: false }
    ]
  },
  NL: {
    label: "NL",
    methods: [
      { id: "slow", label: "Slow, no tracking (9-18 bd)", min: 9, max: 18, applyUSHolidays: false },
      { id: "standard", label: "Standard with tracking (5-9 bd)", min: 5, max: 9, applyUSHolidays: false },
      { id: "expedited", label: "Expedited with tracking (3-5 bd)", min: 3, max: 5, applyUSHolidays: false }
    ]
  },
  BE: {
    label: "BE",
    methods: [
      { id: "slow", label: "Slow, no tracking (9-18 bd)", min: 9, max: 18, applyUSHolidays: false },
      { id: "standard", label: "Standard with tracking (5-9 bd)", min: 5, max: 9, applyUSHolidays: false },
      { id: "expedited", label: "Expedited with tracking (3-5 bd)", min: 3, max: 5, applyUSHolidays: false }
    ]
  },
  ES: {
    label: "ES",
    methods: [
      { id: "slow", label: "Slow, no tracking (10-18 bd)", min: 10, max: 18, applyUSHolidays: false },
      { id: "standard", label: "Standard with tracking (6-10 bd)", min: 6, max: 10, applyUSHolidays: false },
      { id: "expedited", label: "Expedited with tracking (3-5 bd)", min: 3, max: 5, applyUSHolidays: false }
    ]
  },
  SE: {
    label: "SE",
    methods: [
      { id: "slow", label: "Slow, no tracking (10-18 bd)", min: 10, max: 18, applyUSHolidays: false },
      { id: "standard", label: "Standard with tracking (7-10 bd)", min: 7, max: 10, applyUSHolidays: false },
      { id: "expedited", label: "Expedited with tracking (3-5 bd)", min: 3, max: 5, applyUSHolidays: false }
    ]
  }
};

const state = {
  timeline: null,
  viewYear: null,
  viewMonth: null
};

const refs = {
  domainSelect: document.getElementById("domainSelect"),
  timezoneSelect: document.getElementById("timezoneSelect"),
  orderDate: document.getElementById("orderDate"),
  productionDays: document.getElementById("productionDays"),
  shippingMethod: document.getElementById("shippingMethod"),
  todayBtn: document.getElementById("todayBtn"),
  calculateBtn: document.getElementById("calculateBtn"),
  summary: document.getElementById("summary"),
  monthLabel: document.getElementById("monthLabel"),
  calendar: document.getElementById("calendar"),
  legend: document.getElementById("legend"),
  prevMonth: document.getElementById("prevMonth"),
  nextMonth: document.getElementById("nextMonth")
};

init();

function init() {
  populateDomains();
  refs.domainSelect.value = "US";
  populateMethods("US");
  setOrderDateToTodayInZone();

  refs.domainSelect.addEventListener("change", () => {
    populateMethods(refs.domainSelect.value);
    calculate();
  });

  refs.timezoneSelect.addEventListener("change", () => {
    if (!refs.orderDate.value) {
      setOrderDateToTodayInZone();
    }
  });

  refs.todayBtn.addEventListener("click", () => {
    setOrderDateToTodayInZone();
  });

  refs.calculateBtn.addEventListener("click", calculate);
  refs.orderDate.addEventListener("change", calculate);
  refs.productionDays.addEventListener("change", calculate);
  refs.shippingMethod.addEventListener("change", calculate);

  refs.prevMonth.addEventListener("click", () => shiftMonth(-1));
  refs.nextMonth.addEventListener("click", () => shiftMonth(1));

  renderLegend();
  calculate();
}

function populateDomains() {
  refs.domainSelect.innerHTML = "";
  for (const [code, cfg] of Object.entries(DOMAIN_CONFIG)) {
    const option = document.createElement("option");
    option.value = code;
    option.textContent = cfg.label;
    refs.domainSelect.append(option);
  }
}

function populateMethods(domainCode) {
  refs.shippingMethod.innerHTML = "";
  DOMAIN_CONFIG[domainCode].methods.forEach((method, idx) => {
    const option = document.createElement("option");
    option.value = method.id;
    option.textContent = method.label;
    if (idx === 0) option.selected = true;
    refs.shippingMethod.append(option);
  });
}

function setOrderDateToTodayInZone() {
  const tz = refs.timezoneSelect.value;
  const todayISO = getTodayInTimeZoneISO(tz);
  refs.orderDate.value = todayISO;
  calculate();
}

function getTodayInTimeZoneISO(timeZone) {
  const formatter = new Intl.DateTimeFormat("en-CA", {
    timeZone,
    year: "numeric",
    month: "2-digit",
    day: "2-digit"
  });
  const [{ value: year }, , { value: month }, , { value: day }] = formatter.formatToParts(new Date());
  return `${year}-${month}-${day}`;
}

function calculate() {
  if (!refs.orderDate.value) {
    refs.summary.innerHTML = "<p>Select an order date to begin.</p>";
    return;
  }

  const productionDays = Number(refs.productionDays.value);
  if (!Number.isInteger(productionDays) || productionDays <= 0) {
    refs.summary.innerHTML = "<p>Production days must be a whole number greater than 0.</p>";
    return;
  }

  const domainCode = refs.domainSelect.value;
  const method = DOMAIN_CONFIG[domainCode].methods.find((m) => m.id === refs.shippingMethod.value);
  const orderDate = parseISODate(refs.orderDate.value);

  const timeline = buildTimeline({
    orderDate,
    productionDays,
    shippingMin: method.min,
    shippingMax: method.max,
    shippingUsesUSHolidays: method.applyUSHolidays
  });

  state.timeline = timeline;
  state.viewYear = timeline.anchorDate.getUTCFullYear();
  state.viewMonth = timeline.anchorDate.getUTCMonth();

  renderSummary({ domainCode, method, timeline, productionDays });
  renderCalendar();
}

function buildTimeline({ orderDate, productionDays, shippingMin, shippingMax, shippingUsesUSHolidays }) {
  const years = new Set([orderDate.getUTCFullYear(), orderDate.getUTCFullYear() + 1]);
  const usHolidaySet = buildUSHolidaySet(years);

  const productionDaysList = [];
  let cursor = addDaysUTC(orderDate, 1);
  while (productionDaysList.length < productionDays) {
    if (isBusinessDay(cursor, usHolidaySet)) {
      productionDaysList.push(cursor);
    }
    cursor = addDaysUTC(cursor, 1);
  }

  const productionEnd = productionDaysList[productionDaysList.length - 1];
  const queueDay = nextBusinessDay(addDaysUTC(productionEnd, 1), usHolidaySet);

  const shippingHolidaySet = shippingUsesUSHolidays ? usHolidaySet : new Set();
  const shipStart = nextBusinessDay(addDaysUTC(queueDay, 1), shippingHolidaySet);
  const transitMinDays = collectBusinessDays(shipStart, shippingMin, shippingHolidaySet);
  const transitMaxDays = collectBusinessDays(shipStart, shippingMax, shippingHolidaySet);

  const earliestDelivery = transitMinDays[transitMinDays.length - 1];
  const latestDelivery = transitMaxDays[transitMaxDays.length - 1];

  return {
    anchorDate: orderDate,
    productionDays: productionDaysList,
    queueDay,
    transitDaysMin: transitMinDays,
    transitDaysMax: transitMaxDays,
    earliestDelivery,
    latestDelivery,
    shippingUsesUSHolidays
  };
}

function renderSummary({ domainCode, method, timeline, productionDays }) {
  const fmt = formatLongDate;
  const isRange = method.min !== method.max;

  refs.summary.innerHTML = `
    <h3>Estimated Turnaround</h3>
    <p>
      <span class="pill">Domain: ${DOMAIN_CONFIG[domainCode].label}</span>
      <span class="pill">Shipping: ${method.label}</span>
      <span class="pill">Production: ${productionDays} bd</span>
    </p>
    <p><strong>Production window:</strong> ${fmt(timeline.productionDays[0])} → ${fmt(timeline.productionDays[timeline.productionDays.length - 1])}</p>
    <p><strong>Queue for shipment:</strong> ${fmt(timeline.queueDay)}</p>
    <p><strong>Transit:</strong> ${method.min}${isRange ? `-${method.max}` : ""} business day${isRange ? "s" : ""}</p>
    <p><strong>Delivery estimate:</strong> ${fmt(timeline.earliestDelivery)}${isRange ? ` to ${fmt(timeline.latestDelivery)}` : ""}</p>
    <p class="muted-note">Shipping holiday logic: ${timeline.shippingUsesUSHolidays ? "US holidays excluded" : "No holiday exclusion for transit (weekends excluded)"}.</p>
  `;
}

function renderCalendar() {
  if (!state.timeline) return;

  const year = state.viewYear;
  const month = state.viewMonth;
  refs.monthLabel.textContent = new Intl.DateTimeFormat("en-US", { month: "long", year: "numeric", timeZone: "UTC" }).format(
    new Date(Date.UTC(year, month, 1))
  );

  refs.calendar.innerHTML = "";
  const dows = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  dows.forEach((d) => {
    const el = document.createElement("div");
    el.className = "dow";
    el.textContent = d;
    refs.calendar.append(el);
  });

  const firstOfMonth = new Date(Date.UTC(year, month, 1));
  const startOffset = (firstOfMonth.getUTCDay() + 6) % 7;
  const gridStart = addDaysUTC(firstOfMonth, -startOffset);

  for (let i = 0; i < 42; i++) {
    const date = addDaysUTC(gridStart, i);
    refs.calendar.append(buildDayCell(date, month));
  }
}

function buildDayCell(date, visibleMonth) {
  const cell = document.createElement("div");
  cell.className = "day-cell";
  if (date.getUTCMonth() !== visibleMonth) {
    cell.classList.add("outside");
  }

  const dateKey = toISODate(date);
  const tags = [];

  if (hasDate(state.timeline.productionDays, dateKey)) {
    tags.push({ cls: "m-production", label: "Production" });
  }
  if (toISODate(state.timeline.queueDay) === dateKey) {
    tags.push({ cls: "m-queue", label: "Queue" });
  }
  if (hasDate(state.timeline.transitDaysMax, dateKey)) {
    tags.push({ cls: "m-transit", label: "Transit" });
  }

  if (dateKey === toISODate(state.timeline.earliestDelivery) || dateKey === toISODate(state.timeline.latestDelivery)) {
    cell.classList.add("delivery");
  }

  cell.innerHTML = `<div class="day-num">${date.getUTCDate()}</div>`;

  tags.forEach((tag) => {
    const marker = document.createElement("div");
    marker.className = `marker ${tag.cls}`;
    marker.textContent = tag.label;
    cell.append(marker);
  });

  if (dateKey === toISODate(state.timeline.earliestDelivery) && dateKey !== toISODate(state.timeline.latestDelivery)) {
    const marker = document.createElement("div");
    marker.className = "marker m-transit";
    marker.textContent = "Earliest delivery";
    cell.append(marker);
  }
  if (dateKey === toISODate(state.timeline.latestDelivery)) {
    const marker = document.createElement("div");
    marker.className = "marker m-transit";
    marker.textContent = "Latest delivery";
    cell.append(marker);
  }

  return cell;
}

function renderLegend() {
  refs.legend.innerHTML = `
    <span class="legend-item" title="Production business days"><span class="swatch" style="background: var(--production)"></span>Production</span>
    <span class="legend-item" title="Queue for shipment day"><span class="swatch" style="background: var(--queue)"></span>Queue for shipment</span>
    <span class="legend-item" title="Transit business days"><span class="swatch" style="background: var(--transit)"></span>Transit days</span>
    <span class="legend-item" title="Estimated delivery (underlined)"><span class="swatch" style="background: #fff; border-bottom: 4px solid var(--delivery)"></span>Delivery date</span>
  `;
}

function shiftMonth(delta) {
  const base = new Date(Date.UTC(state.viewYear, state.viewMonth + delta, 1));
  state.viewYear = base.getUTCFullYear();
  state.viewMonth = base.getUTCMonth();
  renderCalendar();
}

function parseISODate(iso) {
  const [year, month, day] = iso.split("-").map(Number);
  return new Date(Date.UTC(year, month - 1, day));
}

function toISODate(date) {
  return date.toISOString().slice(0, 10);
}

function addDaysUTC(date, days) {
  const copy = new Date(date);
  copy.setUTCDate(copy.getUTCDate() + days);
  return copy;
}

function isBusinessDay(date, holidaySet) {
  const day = date.getUTCDay();
  if (day === 0 || day === 6) return false;
  return !holidaySet.has(toISODate(date));
}

function nextBusinessDay(startDate, holidaySet) {
  let date = new Date(startDate);
  while (!isBusinessDay(date, holidaySet)) {
    date = addDaysUTC(date, 1);
  }
  return date;
}

function collectBusinessDays(startDate, count, holidaySet) {
  const result = [];
  let cursor = new Date(startDate);
  while (result.length < count) {
    if (isBusinessDay(cursor, holidaySet)) {
      result.push(cursor);
    }
    cursor = addDaysUTC(cursor, 1);
  }
  return result;
}

function hasDate(list, isoDate) {
  return list.some((d) => toISODate(d) === isoDate);
}

function buildUSHolidaySet(years) {
  const set = new Set();
  years.forEach((year) => {
    usFederalHolidays(year).forEach((d) => set.add(toISODate(d)));
  });
  return set;
}

function usFederalHolidays(year) {
  const list = [];

  const fixed = [
    [0, 1],
    [5, 19],
    [6, 4],
    [10, 11],
    [11, 25]
  ];
  fixed.forEach(([month, day]) => list.push(observedDate(new Date(Date.UTC(year, month, day)))));

  list.push(nthWeekdayOfMonth(year, 0, 1, 3));
  list.push(nthWeekdayOfMonth(year, 1, 1, 3));
  list.push(lastWeekdayOfMonth(year, 4, 1));
  list.push(nthWeekdayOfMonth(year, 8, 1, 1));
  list.push(nthWeekdayOfMonth(year, 9, 1, 2));
  list.push(nthWeekdayOfMonth(year, 10, 4, 4));

  return list;
}

function observedDate(date) {
  const day = date.getUTCDay();
  if (day === 6) return addDaysUTC(date, -1);
  if (day === 0) return addDaysUTC(date, 1);
  return date;
}

function nthWeekdayOfMonth(year, month, weekday, nth) {
  const first = new Date(Date.UTC(year, month, 1));
  const firstWeekdayOffset = (weekday - first.getUTCDay() + 7) % 7;
  return addDaysUTC(first, firstWeekdayOffset + (nth - 1) * 7);
}

function lastWeekdayOfMonth(year, month, weekday) {
  const last = new Date(Date.UTC(year, month + 1, 0));
  const back = (last.getUTCDay() - weekday + 7) % 7;
  return addDaysUTC(last, -back);
}

function formatLongDate(date) {
  return new Intl.DateTimeFormat("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC"
  }).format(date);
}
