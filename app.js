/* ── Category Definitions ─────────────────────────────── */

const CATEGORIES = {
  coffee:   { label: "Coffee",     color: "#a0755a", emoji: "☕" },
  work:     { label: "Work",       color: "#4a90d9", emoji: "💻" },
  walk:     { label: "Run / Walk", color: "#5cb85c", emoji: "🚶" },
  food:     { label: "Food",       color: "#d9534f", emoji: "🍽️" },
  desserts: { label: "Desserts",   color: "#e77fbf", emoji: "🍫" },
  culture:  { label: "Culture",    color: "#9b59b6", emoji: "🏛️" },
  music:    { label: "Music",      color: "#e8913a", emoji: "🎵" },
  arts:     { label: "Arts",       color: "#1abc9c", emoji: "🎨" },
};

/* ── Location Data ────────────────────────────────────── */

const LOCATIONS = [
  {
    id: "lab-tostadores",
    name: "LAB Tostadores",
    lat: -34.5880,
    lng: -58.4306,
    category: "coffee",
    description: "Best specialty coffee in Palermo",
    area: "Palermo",
    days: [10, 11, 12],
    timeNote: "Morning",
  },
  {
    id: "cuervo-cafe",
    name: "Cuervo Café",
    lat: -34.5862,
    lng: -58.4328,
    category: "coffee",
    description: "Quiet and minimal",
    area: "Palermo",
    days: [10, 11, 12],
    timeNote: "Morning",
  },
  {
    id: "full-city-coffee",
    name: "Full City Coffee",
    lat: -34.5848,
    lng: -58.4295,
    category: "coffee",
    description: "Great beans",
    area: "Palermo",
    days: [10, 11, 12],
    timeNote: "Morning",
  },
  {
    id: "wework-libertador",
    name: "WeWork Libertador",
    lat: -34.5248,
    lng: -58.4725,
    category: "work",
    description: "Av. Del Libertador 1000, Vicente López",
    area: "Vicente López",
    days: [10, 11, 12],
    timeNote: "9:00–18:00",
  },
  {
    id: "wework-butty",
    name: "WeWork Butty",
    lat: -34.5962,
    lng: -58.3712,
    category: "work",
    description: "Ing. Enrique Butty 275, Retiro",
    area: "Retiro",
    days: [10, 11, 12],
    timeNote: "9:00–18:00",
  },
  {
    id: "wework-corrientes",
    name: "WeWork Corrientes",
    lat: -34.6037,
    lng: -58.3779,
    category: "work",
    description: "Av. Corrientes 800, Microcentro",
    area: "Microcentro",
    days: [10, 11, 12],
    timeNote: "9:00–18:00",
  },
  {
    id: "costanera-norte",
    name: "Costanera Norte",
    lat: -34.5445,
    lng: -58.4480,
    category: "walk",
    description: "River walk + planes landing overhead",
    area: "Costanera",
    days: [9, 10, 11, 12, 13],
    timeNote: "Best at sunset",
  },
  {
    id: "plaza-serrano",
    name: "Plaza Serrano",
    lat: -34.5883,
    lng: -58.4327,
    category: "walk",
    description: "Start of the Wednesday evening solo walk — heart of Palermo Soho",
    area: "Palermo Soho",
    days: [11],
    timeNote: "Evening",
  },
  {
    id: "don-julio",
    name: "Don Julio",
    lat: -34.5862,
    lng: -58.4342,
    category: "food",
    description: "Famous steakhouse — one of the best parrillas in BA",
    area: "Palermo",
    days: [9, 10, 11, 12],
    timeNote: "Dinner",
  },
  {
    id: "el-preferido",
    name: "El Preferido",
    lat: -34.5855,
    lng: -58.4326,
    category: "food",
    description: "Classic Argentine bodegón — traditional comfort food",
    area: "Palermo",
    days: [10, 11, 12],
    timeNote: "Lunch or dinner",
  },
  {
    id: "nino-gordo",
    name: "Niño Gordo",
    lat: -34.5897,
    lng: -58.4268,
    category: "food",
    description: "Asian fusion with Argentine twist",
    area: "Palermo",
    days: [10, 11, 12],
    timeNote: "Dinner",
  },
  {
    id: "el-ferroviario",
    name: "El Ferroviario",
    lat: -34.6295,
    lng: -58.3815,
    category: "food",
    description: "Local steakhouse many locals prefer — less touristy",
    area: "Barracas",
    days: [10, 11, 12],
    timeNote: "Lunch or dinner",
  },
  {
    id: "rapanui",
    name: "Rapanui",
    lat: -34.5872,
    lng: -58.4282,
    category: "desserts",
    description: "Chocolate + dessert — stop on Wednesday evening walk",
    area: "Palermo",
    days: [11],
    timeNote: "Evening (Wed walk)",
  },
  {
    id: "recoleta-cemetery",
    name: "Recoleta Cemetery",
    lat: -34.5875,
    lng: -58.3935,
    category: "culture",
    description: "Beautiful historic mausoleums — stunning architecture",
    area: "Recoleta",
    days: [10, 11, 12, 13],
    timeNote: "Best in morning",
  },
  {
    id: "el-ateneo",
    name: "El Ateneo Grand Splendid",
    lat: -34.5955,
    lng: -58.3938,
    category: "culture",
    description: "Opera house turned bookstore — one of the most beautiful in the world",
    area: "Recoleta",
    days: [10, 11, 12],
    timeNote: "Afternoon",
  },
  {
    id: "plaza-san-martin",
    name: "Plaza San Martín",
    lat: -34.5952,
    lng: -58.3755,
    category: "culture",
    description: "Elegant historic park in the heart of Retiro",
    area: "Retiro",
    days: [9, 10, 11, 12],
    timeNote: "Late afternoon",
  },
  {
    id: "thelonius-club",
    name: "Thelonius Club",
    lat: -34.5802,
    lng: -58.4244,
    category: "music",
    description: "Live jazz club — Thursday night session",
    area: "Palermo",
    days: [12],
    timeNote: "21:30–23:00",
  },
  {
    id: "floreria-atlantico",
    name: "Florería Atlántico",
    lat: -34.5960,
    lng: -58.3745,
    category: "arts",
    description: "Speakeasy bar hidden behind a flower shop — world-class cocktails",
    area: "Retiro",
    days: [10, 11, 12],
    timeNote: "Evening",
  },
];

const HOME = {
  id: "home",
  name: "Home Base",
  lat: -34.5863,
  lng: -58.4280,
  address: "Paraguay 5367, Palermo, CABA",
};

const WALK_ROUTE = [
  [-34.5883, -58.4327],
  [-34.5878, -58.4310],
  [-34.5872, -58.4282],
  [-34.5870, -58.4230],
  [-34.5868, -58.4170],
  [-34.5870, -58.4100],
  [-34.5872, -58.4020],
  [-34.5875, -58.3960],
  [-34.5875, -58.3935],
];

/* ── State ───────────────────────────────────────────── */

let map;
let markersById = {};
let markerLayers = {};
let walkGroup;
let activeFilters = new Set(["all"]);

/* ── Helpers ─────────────────────────────────────────── */

function createCircleIcon(color, emoji) {
  return L.divIcon({
    className: "marker-icon",
    html: `<div class="marker-dot" style="background:${color}">${emoji}</div>`,
    iconSize: [34, 34],
    iconAnchor: [17, 17],
    popupAnchor: [0, -19],
  });
}

function gmapsUrl(lat, lng, name) {
  return `https://www.google.com/maps/search/?api=1&query=${lat},${lng}&query_place_id=${encodeURIComponent(name)}`;
}

function popupContent(loc) {
  const cat = CATEGORIES[loc.category];
  return `
    <div class="iw">
      <div class="iw-name">${loc.name}</div>
      <span class="iw-cat" style="background:${cat.color}">${cat.label}</span>
      <div class="iw-desc">${loc.description}</div>
      <div class="iw-area">${loc.area} · ${loc.timeNote}</div>
      <a class="iw-gmaps" href="${gmapsUrl(loc.lat, loc.lng, loc.name)}" target="_blank" rel="noopener">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg>
        Open in Google Maps
      </a>
    </div>
  `;
}

/* ── Init ────────────────────────────────────────────── */

function init() {
  const baBounds = L.latLngBounds(
    [-34.53, -58.50],
    [-34.65, -58.34]
  );

  map = L.map("map", {
    center: [-34.5875, -58.4150],
    zoom: 13,
    zoomControl: false,
    maxBounds: baBounds.pad(0.05),
    maxBoundsViscosity: 1.0,
    minZoom: 12,
  });

  L.control.zoom({ position: "bottomright" }).addTo(map);

  L.tileLayer("https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png", {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/">CARTO</a>',
    subdomains: "abcd",
    maxZoom: 18,
    bounds: baBounds,
  }).addTo(map);

  createMarkers();
  createHomeMarker();
  createWalkRoute();
  bindFilters();
  bindSchedule();
  bindSidebar();
  initTransport();
}

/* ── Markers ─────────────────────────────────────────── */

function createMarkers() {
  Object.keys(CATEGORIES).forEach((key) => {
    markerLayers[key] = L.layerGroup().addTo(map);
  });

  LOCATIONS.forEach((loc) => {
    const cat = CATEGORIES[loc.category];
    const icon = createCircleIcon(cat.color, cat.emoji);

    const marker = L.marker([loc.lat, loc.lng], { icon })
      .bindPopup(popupContent(loc), { maxWidth: 260, className: "custom-popup" });

    marker._locData = loc;
    marker.on("click", () => {
      if (transportActive) handleTransportMarkerClick(marker);
    });
    marker.addTo(markerLayers[loc.category]);
    markersById[loc.id] = marker;
  });
}

/* ── Home Marker ─────────────────────────────────────── */

function createHomeMarker() {
  const icon = L.divIcon({
    className: "marker-icon",
    html: `<div class="home-marker"><div class="home-pulse"></div><div class="home-dot">🏠</div></div>`,
    iconSize: [48, 48],
    iconAnchor: [24, 24],
    popupAnchor: [0, -26],
  });

  const marker = L.marker([HOME.lat, HOME.lng], { icon, zIndexOffset: 1000 })
    .bindPopup(`
      <div class="iw">
        <div class="iw-name">🏠 Home Base</div>
        <span class="iw-cat" style="background:#e94560">Home</span>
        <div class="iw-desc">${HOME.address}</div>
        <div class="iw-area">Your stay for the week</div>
        <a class="iw-gmaps" href="${gmapsUrl(HOME.lat, HOME.lng, HOME.address)}" target="_blank" rel="noopener">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg>
          Open in Google Maps
        </a>
      </div>
    `, { maxWidth: 260, className: "custom-popup" })
    .addTo(map);

  marker._locData = { id: HOME.id, name: "Home Base" };
  marker.on("click", () => {
    if (transportActive) handleTransportMarkerClick(marker);
  });
  markersById[HOME.id] = marker;
}

function focusMarker(id) {
  const marker = markersById[id];
  if (!marker) return;

  if (marker._locData) {
    const layer = markerLayers[marker._locData.category];
    if (layer && !map.hasLayer(layer)) {
      map.addLayer(layer);
    }
  }

  if (isMobile()) closeMobileSidebar();

  setTimeout(() => {
    map.setView(marker.getLatLng(), 15, { animate: true });
    marker.openPopup();
  }, isMobile() ? 350 : 0);
}

/* ── Walk Route ──────────────────────────────────────── */

function createWalkRoute() {
  walkGroup = L.layerGroup().addTo(map);

  L.polyline(WALK_ROUTE, {
    color: CATEGORIES.walk.color,
    weight: 4,
    opacity: 0.85,
    dashArray: "8 6",
    lineCap: "round",
  }).addTo(walkGroup);

  const arrowHead = WALK_ROUTE[WALK_ROUTE.length - 1];
  L.circleMarker(arrowHead, {
    radius: 5,
    color: CATEGORIES.walk.color,
    fillColor: CATEGORIES.walk.color,
    fillOpacity: 1,
    weight: 2,
  }).bindPopup('<div class="iw"><div class="iw-name">Walk ends here</div><div class="iw-desc">Recoleta — end of Wednesday evening stroll</div></div>', { className: "custom-popup" })
    .addTo(walkGroup);
}

/* ── Filtering ───────────────────────────────────────── */

function bindFilters() {
  const btns = document.querySelectorAll(".filter-btn");

  btns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const cat = btn.dataset.category;

      if (cat === "all") {
        activeFilters.clear();
        activeFilters.add("all");
      } else {
        activeFilters.delete("all");
        if (activeFilters.has(cat)) {
          activeFilters.delete(cat);
        } else {
          activeFilters.add(cat);
        }
        if (activeFilters.size === 0) {
          activeFilters.add("all");
        }
      }

      updateFilterUI(btns);
      applyFilters();
    });
  });
}

function updateFilterUI(btns) {
  btns.forEach((btn) => {
    btn.classList.toggle("active", activeFilters.has(btn.dataset.category));
  });
}

function applyFilters() {
  const showAll = activeFilters.has("all");

  Object.keys(markerLayers).forEach((key) => {
    const shouldShow = showAll || activeFilters.has(key);
    if (shouldShow && !map.hasLayer(markerLayers[key])) {
      map.addLayer(markerLayers[key]);
    } else if (!shouldShow && map.hasLayer(markerLayers[key])) {
      map.removeLayer(markerLayers[key]);
    }
  });

  const showWalk = showAll || activeFilters.has("walk");
  if (showWalk && !map.hasLayer(walkGroup)) {
    walkGroup.addTo(map);
  } else if (!showWalk && map.hasLayer(walkGroup)) {
    map.removeLayer(walkGroup);
  }
}

/* ── Schedule Sidebar ────────────────────────────────── */

function bindSchedule() {
  document.querySelectorAll(".day-header").forEach((header) => {
    header.addEventListener("click", () => {
      header.parentElement.classList.toggle("open");
    });
  });

  document.querySelectorAll(".place-link").forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      focusMarker(link.dataset.focus);
    });
  });

  const today = new Date();
  const marchDay = (today.getMonth() === 2 && today.getDate() >= 9 && today.getDate() <= 13)
    ? today.getDate()
    : 9;
  const todayEl = document.querySelector(`.day[data-day="${marchDay}"]`);
  if (todayEl) todayEl.classList.add("open");
  else document.querySelector(".day").classList.add("open");
}

/* ── Sidebar Toggle ──────────────────────────────────── */

function isMobile() {
  return window.innerWidth <= 720;
}

function closeMobileSidebar() {
  const sidebar = document.getElementById("sidebar");
  const overlay = document.getElementById("sidebar-overlay");
  sidebar.classList.add("collapsed");
  overlay.classList.add("hidden");
}

function openMobileSidebar() {
  const sidebar = document.getElementById("sidebar");
  const overlay = document.getElementById("sidebar-overlay");
  sidebar.classList.remove("collapsed");
  overlay.classList.remove("hidden");
}

function bindSidebar() {
  const sidebar = document.getElementById("sidebar");
  const overlay = document.getElementById("sidebar-overlay");

  if (isMobile()) {
    sidebar.classList.add("collapsed");
  }

  document.getElementById("sidebar-toggle").addEventListener("click", () => {
    sidebar.classList.add("collapsed");
  });

  document.getElementById("mobile-sidebar-btn").addEventListener("click", () => {
    if (sidebar.classList.contains("collapsed")) {
      openMobileSidebar();
    } else {
      closeMobileSidebar();
    }
  });

  overlay.addEventListener("click", closeMobileSidebar);

  map.on("click", () => {
    if (isMobile()) closeMobileSidebar();
  });

  let touchStartY = 0;
  sidebar.addEventListener("touchstart", (e) => {
    touchStartY = e.touches[0].clientY;
  }, { passive: true });

  sidebar.addEventListener("touchend", (e) => {
    const deltaY = e.changedTouches[0].clientY - touchStartY;
    if (deltaY > 80) closeMobileSidebar();
  }, { passive: true });
}

/* ── Transport Mode ───────────────────────────────────── */

let transportActive = false;
let transportOrigin = null;
let transportDest = null;
let routeLayerWalk = null;
let routeLayerDrive = null;
let selectedMarkerEls = [];

const UBER_BA_RATES = {
  baseFare: 1.50,
  perKm: 0.65,
  perMin: 0.15,
  minimum: 2.50,
  surgeLow: 1.0,
  surgeHigh: 1.8,
};

function initTransport() {
  const toggleBtn = document.getElementById("transport-toggle");
  const closeBtn = document.getElementById("transport-close");
  const panel = document.getElementById("transport-panel");
  const walkRow = document.getElementById("walk-result");
  const uberRow = document.getElementById("uber-result");

  toggleBtn.addEventListener("click", () => {
    transportActive = !transportActive;
    toggleBtn.classList.toggle("active", transportActive);
    document.body.classList.toggle("transport-active", transportActive);

    if (transportActive) {
      panel.classList.remove("hidden");
      panel.classList.add("waiting");
      clearTransportState();
      disablePopups();
    } else {
      panel.classList.add("hidden");
      clearTransportState();
      clearRoutes();
      enablePopups();
    }
  });

  closeBtn.addEventListener("click", () => {
    transportActive = false;
    toggleBtn.classList.remove("active");
    document.body.classList.remove("transport-active");
    panel.classList.add("hidden");
    clearTransportState();
    clearRoutes();
    enablePopups();
  });

  walkRow.addEventListener("click", () => {
    walkRow.classList.add("active-route");
    uberRow.classList.remove("active-route");
    if (routeLayerWalk) routeLayerWalk.setStyle({ opacity: 0.9, weight: 5 });
    if (routeLayerDrive) routeLayerDrive.setStyle({ opacity: 0.25, weight: 3 });
  });

  uberRow.addEventListener("click", () => {
    uberRow.classList.add("active-route");
    walkRow.classList.remove("active-route");
    if (routeLayerDrive) routeLayerDrive.setStyle({ opacity: 0.9, weight: 5 });
    if (routeLayerWalk) routeLayerWalk.setStyle({ opacity: 0.25, weight: 3 });
  });
}

function handleTransportMarkerClick(marker) {
  if (!transportActive) return false;

  const loc = marker._locData || { name: marker.getPopup()?.getContent()?.match(/iw-name">(.*?)</)?.pop() || "Selected" };
  const name = loc.name || loc.id || "Selected";

  if (!transportOrigin) {
    transportOrigin = { marker, name, latlng: marker.getLatLng() };
    highlightMarker(marker);
    document.getElementById("transport-from").textContent = name;
    document.getElementById("transport-to").textContent = "Pick destination…";
    document.getElementById("transport-panel").classList.remove("waiting");
    document.getElementById("transport-results").style.display = "none";
    document.getElementById("transport-header").style.display = "";
    document.getElementById("transport-hint-panel").style.display = "none";
  } else if (!transportDest) {
    if (marker === transportOrigin.marker) return true;
    transportDest = { marker, name, latlng: marker.getLatLng() };
    highlightMarker(marker);
    document.getElementById("transport-to").textContent = name;
    document.getElementById("transport-results").style.display = "";
    fetchRoutes();
  } else {
    clearTransportState();
    clearRoutes();
    transportOrigin = { marker, name, latlng: marker.getLatLng() };
    highlightMarker(marker);
    document.getElementById("transport-from").textContent = name;
    document.getElementById("transport-to").textContent = "Pick destination…";
    document.getElementById("transport-panel").classList.remove("waiting");
    document.getElementById("transport-results").style.display = "none";
    document.getElementById("transport-header").style.display = "";
    document.getElementById("transport-hint-panel").style.display = "none";
  }

  return true;
}

function highlightMarker(marker) {
  const el = marker.getElement();
  if (el) {
    el.classList.add("marker-selected");
    selectedMarkerEls.push(el);
  }
}

function clearTransportState() {
  transportOrigin = null;
  transportDest = null;
  selectedMarkerEls.forEach((el) => el.classList.remove("marker-selected"));
  selectedMarkerEls = [];
  document.getElementById("transport-from").textContent = "—";
  document.getElementById("transport-to").textContent = "—";
  document.getElementById("walk-time").textContent = "—";
  document.getElementById("walk-dist").textContent = "—";
  document.getElementById("uber-time").textContent = "—";
  document.getElementById("uber-dist").textContent = "—";
  document.getElementById("uber-cost").textContent = "—";
  document.getElementById("walk-result").classList.remove("active-route");
  document.getElementById("uber-result").classList.remove("active-route");
}

function disablePopups() {
  Object.values(markersById).forEach((m) => {
    if (m.getPopup()) {
      m._savedPopup = m.getPopup();
      m.unbindPopup();
    }
  });
}

function enablePopups() {
  Object.values(markersById).forEach((m) => {
    if (m._savedPopup) {
      m.bindPopup(m._savedPopup);
      m._savedPopup = null;
    }
  });
}

function clearRoutes() {
  if (routeLayerWalk) { map.removeLayer(routeLayerWalk); routeLayerWalk = null; }
  if (routeLayerDrive) { map.removeLayer(routeLayerDrive); routeLayerDrive = null; }
}

async function fetchRoutes() {
  const o = transportOrigin.latlng;
  const d = transportDest.latlng;
  const coords = `${o.lng},${o.lat};${d.lng},${d.lat}`;

  document.getElementById("walk-time").textContent = "Loading…";
  document.getElementById("uber-time").textContent = "Loading…";

  const [walkData, driveData] = await Promise.all([
    fetchOSRM(coords, "foot"),
    fetchOSRM(coords, "car"),
  ]);

  clearRoutes();

  if (walkData) {
    const route = walkData.routes[0];
    const mins = Math.round(route.duration / 60);
    const km = (route.distance / 1000).toFixed(1);
    document.getElementById("walk-time").textContent = formatDuration(mins);
    document.getElementById("walk-dist").textContent = `${km} km`;

    const decoded = decodePolyline(route.geometry);
    routeLayerWalk = L.polyline(decoded, {
      color: "#5cb85c",
      weight: 4,
      opacity: 0.7,
      dashArray: "6 8",
    }).addTo(map);
  } else {
    document.getElementById("walk-time").textContent = "N/A";
  }

  if (driveData) {
    const route = driveData.routes[0];
    const mins = Math.round(route.duration / 60);
    const km = (route.distance / 1000).toFixed(1);
    document.getElementById("uber-time").textContent = formatDuration(mins);
    document.getElementById("uber-dist").textContent = `${km} km`;

    const cost = estimateUberCost(route.distance / 1000, mins);
    document.getElementById("uber-cost").textContent = cost;

    const decoded = decodePolyline(route.geometry);
    routeLayerDrive = L.polyline(decoded, {
      color: "#2980b9",
      weight: 4,
      opacity: 0.7,
    }).addTo(map);
  } else {
    document.getElementById("uber-time").textContent = "N/A";
  }

  const bounds = L.latLngBounds([o, d]);
  map.fitBounds(bounds, { padding: [60, 60] });
}

async function fetchOSRM(coords, profile) {
  const url = `https://router.project-osrm.org/route/v1/${profile === "foot" ? "foot" : "driving"}/${coords}?overview=full&geometries=polyline`;
  try {
    const res = await fetch(url);
    if (!res.ok) return null;
    return await res.json();
  } catch {
    return null;
  }
}

function decodePolyline(encoded) {
  const points = [];
  let lat = 0, lng = 0, i = 0;
  while (i < encoded.length) {
    let b, shift = 0, result = 0;
    do { b = encoded.charCodeAt(i++) - 63; result |= (b & 0x1f) << shift; shift += 5; } while (b >= 0x20);
    lat += (result & 1) ? ~(result >> 1) : (result >> 1);

    shift = 0; result = 0;
    do { b = encoded.charCodeAt(i++) - 63; result |= (b & 0x1f) << shift; shift += 5; } while (b >= 0x20);
    lng += (result & 1) ? ~(result >> 1) : (result >> 1);

    points.push([lat / 1e5, lng / 1e5]);
  }
  return points;
}

function formatDuration(mins) {
  if (mins < 60) return `${mins} min`;
  const h = Math.floor(mins / 60);
  const m = mins % 60;
  return m > 0 ? `${h}h ${m}m` : `${h}h`;
}

function estimateUberCost(km, mins) {
  const r = UBER_BA_RATES;
  const base = r.baseFare + (km * r.perKm) + (mins * r.perMin);
  const low = Math.max(r.minimum, base * r.surgeLow);
  const high = Math.max(r.minimum, base * r.surgeHigh);
  return `~$${low.toFixed(0)}–${high.toFixed(0)}`;
}

/* ── Boot ─────────────────────────────────────────────── */

document.addEventListener("DOMContentLoaded", init);
