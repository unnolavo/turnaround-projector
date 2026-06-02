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
  orderDate: document.getElementById("orderDate"),
  productionDays: document.getElementById("productionDays"),
  shippingMethod: document.getElementById("shippingMethod"),
  queueCutoff: document.getElementById("queueCutoff"),
  calculateBtn: document.getElementById("calculateBtn"),
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
  setOrderDateToToday();

  refs.domainSelect.addEventListener("change", () => {
    populateMethods(refs.domainSelect.value);
    calculate();
  });

  refs.calculateBtn.addEventListener("click", calculate);
  refs.orderDate.addEventListener("change", calculate);
  refs.productionDays.addEventListener("change", calculate);
  refs.shippingMethod.addEventListener("change", calculate);
  refs.queueCutoff.addEventListener("change", calculate);

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

function setOrderDateToToday() {
  const today = new Date();
  today.setMinutes(today.getMinutes() - today.getTimezoneOffset());
  refs.orderDate.value = today.toISOString().slice(0, 10);
  calculate();
}

function calculate() {
  if (!refs.orderDate.value) {
    return;
  }

  const productionDays = Number(refs.productionDays.value);
  if (!Number.isInteger(productionDays) || productionDays <= 0) {
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
    shippingUsesUSHolidays: method.applyUSHolidays,
    queueCutoff: refs.queueCutoff.value
  });

  state.timeline = timeline;
  state.viewYear = timeline.anchorDate.getUTCFullYear();
  state.viewMonth = timeline.anchorDate.getUTCMonth();

  renderCalendar();
}

function buildTimeline({ orderDate, productionDays, shippingMin, shippingMax, shippingUsesUSHolidays, queueCutoff }) {
  const years = new Set([orderDate.getUTCFullYear(), orderDate.getUTCFullYear() + 1]);
  const usHolidayMap = buildUSHolidayMap(years);
  const usHolidaySet = new Set(usHolidayMap.keys());

  const productionDaysList = [];
  let cursor = addDaysUTC(orderDate, 1);
  while (productionDaysList.length < productionDays) {
    if (isBusinessDay(cursor, usHolidaySet)) {
      productionDaysList.push(cursor);
    }
    cursor = addDaysUTC(cursor, 1);
  }

  const productionEnd = productionDaysList[productionDaysList.length - 1];
  const queueDay = productionEnd;

  const shippingHolidaySet = shippingUsesUSHolidays ? usHolidaySet : new Set();
  const carrierReceivedDay = getCarrierReceivedDay(queueDay, queueCutoff, shippingHolidaySet);
  const shipStart = nextBusinessDay(addDaysUTC(carrierReceivedDay, 1), shippingHolidaySet);
  const transitMinDays = collectBusinessDays(shipStart, shippingMin, shippingHolidaySet);
  const transitMaxDays = collectBusinessDays(shipStart, shippingMax, shippingHolidaySet);

  const earliestDelivery = transitMinDays[transitMinDays.length - 1];
  const latestDelivery = transitMaxDays[transitMaxDays.length - 1];

  return {
    anchorDate: orderDate,
    productionDays: productionDaysList,
    queueDay,
    carrierReceivedDay,
    transitDaysMin: transitMinDays,
    transitDaysMax: transitMaxDays,
    earliestDelivery,
    latestDelivery,
    shippingUsesUSHolidays,
    usHolidayMap
  };
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
  const holidayName = state.timeline.usHolidayMap.get(dateKey);
  const isWeekday = date.getUTCDay() >= 1 && date.getUTCDay() <= 5;
  const hasNoProduction = Boolean(holidayName && isWeekday);
  const hasNoShipping = Boolean(holidayName && isWeekday && state.timeline.shippingUsesUSHolidays);
  const isProduction = hasDate(state.timeline.productionDays, dateKey);
  const isQueue = toISODate(state.timeline.queueDay) === dateKey;
  const isCarrierReceived = toISODate(state.timeline.carrierReceivedDay) === dateKey;
  const isTransit = hasDate(state.timeline.transitDaysMax, dateKey);

  if (isProduction) {
    tags.push({ cls: "m-production", label: "Production" });
  }
  if (isQueue) {
    tags.push({ cls: "m-queue", label: "Queue for Shipment" });
  }
  if (isCarrierReceived) {
    tags.push({ cls: "m-carrier", label: "Carrier received" });
  }
  if (isTransit) {
    tags.push({ cls: "m-transit", label: "Transit Day" });
  }
  if (hasNoProduction) {
    tags.push({ cls: "m-blocked", label: "No Production" });
    tags.push({ cls: "m-occasion", label: holidayName });
  }
  if (hasNoShipping) {
    tags.push({ cls: "m-blocked-ship", label: "No Shipping" });
    if (!hasNoProduction) {
      tags.push({ cls: "m-occasion", label: holidayName });
    }
  }

  if (hasNoProduction && hasNoShipping) {
    cell.classList.add("status-blocked-both");
  } else if (hasNoProduction) {
    cell.classList.add("status-blocked-production");
  } else if (hasNoShipping) {
    cell.classList.add("status-blocked-shipping");
  } else if (isTransit) {
    cell.classList.add("status-transit");
  } else if (isCarrierReceived) {
    cell.classList.add("status-carrier");
  } else if (isQueue) {
    cell.classList.add("status-queue");
  } else if (isProduction) {
    cell.classList.add("status-production");
  }

  const isEarliestDelivery = dateKey === toISODate(state.timeline.earliestDelivery);
  const isLatestDelivery = dateKey === toISODate(state.timeline.latestDelivery);
  if (isEarliestDelivery) {
    cell.classList.add("delivery-earliest");
  }
  if (isLatestDelivery) {
    cell.classList.add("delivery-latest");
  }

  cell.innerHTML = `<div class="day-num">${date.getUTCDate()}</div>`;

  tags.forEach((tag) => {
    const marker = document.createElement("div");
    marker.className = `marker ${tag.cls}`;
    marker.textContent = tag.label;
    cell.append(marker);
  });

  if (isEarliestDelivery && dateKey !== toISODate(state.timeline.latestDelivery)) {
    const marker = document.createElement("div");
    marker.className = "marker m-delivery-earliest";
    marker.textContent = "Earliest delivery";
    cell.append(marker);
  }
  if (isLatestDelivery) {
    const marker = document.createElement("div");
    marker.className = "marker m-delivery-latest";
    marker.textContent = "Latest delivery";
    cell.append(marker);
  }

  return cell;
}

function renderLegend() {
  refs.legend.innerHTML = `
    <span class="legend-item" title="Production business days"><span class="swatch" style="background: var(--production-cell)"></span>Production</span>
    <span class="legend-item" title="Final production day that queues for shipment"><span class="swatch" style="background: var(--queue-cell)"></span>Queue for shipment</span>
    <span class="legend-item" title="Date the courier receives the package"><span class="swatch" style="background: var(--carrier-cell)"></span>Carrier received</span>
    <span class="legend-item" title="Transit business days"><span class="swatch" style="background: var(--transit-cell)"></span>Transit days</span>
    <span class="legend-item" title="Earliest delivery estimate"><span class="swatch" style="background: var(--delivery-earliest-cell)"></span>Earliest delivery</span>
    <span class="legend-item" title="Latest delivery estimate"><span class="swatch" style="background: var(--delivery-latest-cell)"></span>Latest delivery</span>
    <span class="legend-item" title="Weekday holiday impact on production"><span class="swatch" style="background: var(--blocked-prod-cell)"></span>No Production</span>
    <span class="legend-item" title="Weekday holiday impact on shipping"><span class="swatch" style="background: var(--blocked-ship-cell)"></span>No Shipping</span>
    <span class="legend-item" title="Estimated delivery date (underline marker)"><span class="swatch" style="background: #fff; border-bottom: 4px solid var(--delivery-underline)"></span>Delivery underline</span>
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

function getCarrierReceivedDay(queueDay, queueCutoff, shippingHolidaySet) {
  if (queueCutoff === "before") {
    return queueDay;
  }

  return nextBusinessDay(addDaysUTC(queueDay, 1), shippingHolidaySet);
}

function hasDate(list, isoDate) {
  return list.some((d) => toISODate(d) === isoDate);
}

function buildUSHolidayMap(years) {
  const map = new Map();
  years.forEach((year) => {
    usFederalHolidays(year).forEach((holiday) => map.set(toISODate(holiday.date), holiday.name));
  });
  return map;
}

function usFederalHolidays(year) {
  const list = [];

  const fixed = [
    [0, 1, "New Year's Day"],
    [5, 19, "Juneteenth"],
    [6, 4, "Independence Day"],
    [10, 11, "Veterans Day"],
    [11, 25, "Christmas Day"]
  ];
  fixed.forEach(([month, day, name]) =>
    list.push({ date: observedDate(new Date(Date.UTC(year, month, day))), name })
  );

  list.push({ date: nthWeekdayOfMonth(year, 0, 1, 3), name: "Martin Luther King Jr. Day" });
  list.push({ date: nthWeekdayOfMonth(year, 1, 1, 3), name: "Washington's Birthday" });
  list.push({ date: lastWeekdayOfMonth(year, 4, 1), name: "Memorial Day" });
  list.push({ date: nthWeekdayOfMonth(year, 8, 1, 1), name: "Labor Day" });
  list.push({ date: nthWeekdayOfMonth(year, 9, 1, 2), name: "Columbus Day" });
  list.push({ date: nthWeekdayOfMonth(year, 10, 4, 4), name: "Thanksgiving Day" });

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
