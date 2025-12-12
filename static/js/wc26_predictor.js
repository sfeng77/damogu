const defaultGroups = {
  A: ["Mexico", "Korea Republic", "South Africa", "UEFA Playoff D (Den/NMK/Cze/IRL)"],
  B: ["Canada", "Switzerland", "Qatar", "UEFA Playoff A (Italy/NIR/Wales/Bosnia)"],
  C: ["Brazil", "Morocco", "Scotland", "Haiti"],
  D: ["United States", "Australia", "Paraguay", "UEFA Playoff C (Turkiye/Romania/Slovakia/Kosovo)"],
  E: ["Germany", "Ecuador", "Cote d'Ivoire", "Curacao"],
  F: ["Netherlands", "Japan", "Tunisia", "UEFA Playoff B (Sweden/Ukraine/Poland/Albania)"],
  G: ["Belgium", "IR Iran", "Egypt", "New Zealand"],
  H: ["Spain", "Uruguay", "Saudi Arabia", "Cabo Verde"],
  I: ["France", "Senegal", "Norway", "FIFA Playoff 2 (Bolivia/Suriname/Iraq)"],
  J: ["Argentina", "Austria", "Algeria", "Jordan"],
  K: ["Portugal", "Colombia", "Uzbekistan", "FIFA Playoff 1 (DRC/Jamaica/New Caledonia)"],
  L: ["England", "Croatia", "Panama", "Ghana"]
};

// Round of 32 & onward mapping (official slots, Dec 2025)
const matches = [
  { id: "M73", round: "R32", label: "73 · A2 vs B2", date: "Jun 28", city: "Los Angeles", slots: [
      { type: "group", group: "A", position: 2 },
      { type: "group", group: "B", position: 2 }
    ]},
  { id: "M74", round: "R32", label: "74 · E1 vs 3rd A/B/C/D/F", date: "Jun 29", city: "Boston", slots: [
      { type: "group", group: "E", position: 1 },
      { type: "third", eligible: ["A","B","C","D","F"], key: "T74" }
    ]},
  { id: "M75", round: "R32", label: "75 · F1 vs C2", date: "Jun 29", city: "Monterrey", slots: [
      { type: "group", group: "F", position: 1 },
      { type: "group", group: "C", position: 2 }
    ]},
  { id: "M76", round: "R32", label: "76 · C1 vs F2", date: "Jun 29", city: "Houston", slots: [
      { type: "group", group: "C", position: 1 },
      { type: "group", group: "F", position: 2 }
    ]},
  { id: "M77", round: "R32", label: "77 · I1 vs 3rd C/D/F/G/H", date: "Jun 30", city: "New York/New Jersey", slots: [
      { type: "group", group: "I", position: 1 },
      { type: "third", eligible: ["C","D","F","G","H"], key: "T77" }
    ]},
  { id: "M78", round: "R32", label: "78 · E2 vs I2", date: "Jun 30", city: "Dallas", slots: [
      { type: "group", group: "E", position: 2 },
      { type: "group", group: "I", position: 2 }
    ]},
  { id: "M79", round: "R32", label: "79 · A1 vs 3rd C/E/F/H/I", date: "Jun 30", city: "Mexico City", slots: [
      { type: "group", group: "A", position: 1 },
      { type: "third", eligible: ["C","E","F","H","I"], key: "T79" }
    ]},
  { id: "M80", round: "R32", label: "80 · L1 vs 3rd E/H/I/J/K", date: "Jul 1", city: "Atlanta", slots: [
      { type: "group", group: "L", position: 1 },
      { type: "third", eligible: ["E","H","I","J","K"], key: "T80" }
    ]},
  { id: "M81", round: "R32", label: "81 · D1 vs 3rd B/E/F/I/J", date: "Jul 1", city: "San Francisco Bay Area", slots: [
      { type: "group", group: "D", position: 1 },
      { type: "third", eligible: ["B","E","F","I","J"], key: "T81" }
    ]},
  { id: "M82", round: "R32", label: "82 · G1 vs 3rd A/E/H/I/J", date: "Jul 1", city: "Seattle", slots: [
      { type: "group", group: "G", position: 1 },
      { type: "third", eligible: ["A","E","H","I","J"], key: "T82" }
    ]},
  { id: "M83", round: "R32", label: "83 · K2 vs L2", date: "Jul 2", city: "Toronto", slots: [
      { type: "group", group: "K", position: 2 },
      { type: "group", group: "L", position: 2 }
    ]},
  { id: "M84", round: "R32", label: "84 · H1 vs J2", date: "Jul 2", city: "Los Angeles", slots: [
      { type: "group", group: "H", position: 1 },
      { type: "group", group: "J", position: 2 }
    ]},
  { id: "M85", round: "R32", label: "85 · B1 vs 3rd E/F/G/I/J", date: "Jul 2", city: "Vancouver", slots: [
      { type: "group", group: "B", position: 1 },
      { type: "third", eligible: ["E","F","G","I","J"], key: "T85" }
    ]},
  { id: "M86", round: "R32", label: "86 · J1 vs H2", date: "Jul 3", city: "Miami", slots: [
      { type: "group", group: "J", position: 1 },
      { type: "group", group: "H", position: 2 }
    ]},
  { id: "M87", round: "R32", label: "87 · K1 vs 3rd D/E/I/J/L", date: "Jul 3", city: "Kansas City", slots: [
      { type: "group", group: "K", position: 1 },
      { type: "third", eligible: ["D","E","I","J","L"], key: "T87" }
    ]},
  { id: "M88", round: "R32", label: "88 · D2 vs G2", date: "Jul 3", city: "Dallas", slots: [
      { type: "group", group: "D", position: 2 },
      { type: "group", group: "G", position: 2 }
    ]},
  // Round of 16
  { id: "M89", round: "R16", label: "89 · W74 vs W77", date: "Jul 4", city: "Philadelphia", slots: [
      { type: "winner", of: "M74" },
      { type: "winner", of: "M77" }
    ]},
  { id: "M90", round: "R16", label: "90 · W73 vs W75", date: "Jul 4", city: "Houston", slots: [
      { type: "winner", of: "M73" },
      { type: "winner", of: "M75" }
    ]},
  { id: "M91", round: "R16", label: "91 · W76 vs W78", date: "Jul 5", city: "New York/New Jersey", slots: [
      { type: "winner", of: "M76" },
      { type: "winner", of: "M78" }
    ]},
  { id: "M92", round: "R16", label: "92 · W79 vs W80", date: "Jul 5", city: "Mexico City", slots: [
      { type: "winner", of: "M79" },
      { type: "winner", of: "M80" }
    ]},
  { id: "M93", round: "R16", label: "93 · W83 vs W84", date: "Jul 6", city: "Dallas", slots: [
      { type: "winner", of: "M83" },
      { type: "winner", of: "M84" }
    ]},
  { id: "M94", round: "R16", label: "94 · W81 vs W82", date: "Jul 6", city: "Seattle", slots: [
      { type: "winner", of: "M81" },
      { type: "winner", of: "M82" }
    ]},
  { id: "M95", round: "R16", label: "95 · W86 vs W88", date: "Jul 7", city: "Atlanta", slots: [
      { type: "winner", of: "M86" },
      { type: "winner", of: "M88" }
    ]},
  { id: "M96", round: "R16", label: "96 · W85 vs W87", date: "Jul 7", city: "Vancouver", slots: [
      { type: "winner", of: "M85" },
      { type: "winner", of: "M87" }
    ]},
  // Quarter-finals
  { id: "M97", round: "QF", label: "97 · W89 vs W90", date: "Jul 9", city: "Boston", slots: [
      { type: "winner", of: "M89" },
      { type: "winner", of: "M90" }
    ]},
  { id: "M98", round: "QF", label: "98 · W91 vs W92", date: "Jul 10", city: "Los Angeles", slots: [
      { type: "winner", of: "M91" },
      { type: "winner", of: "M92" }
    ]},
  { id: "M99", round: "QF", label: "99 · W93 vs W94", date: "Jul 11", city: "Miami", slots: [
      { type: "winner", of: "M93" },
      { type: "winner", of: "M94" }
    ]},
  { id: "M100", round: "QF", label: "100 · W95 vs W96", date: "Jul 11", city: "Kansas City", slots: [
      { type: "winner", of: "M95" },
      { type: "winner", of: "M96" }
    ]},
  // Semi-finals
  { id: "M101", round: "SF", label: "101 · W97 vs W98", date: "Jul 14", city: "Dallas", slots: [
      { type: "winner", of: "M97" },
      { type: "winner", of: "M98" }
    ]},
  { id: "M102", round: "SF", label: "102 · W99 vs W100", date: "Jul 15", city: "Atlanta", slots: [
      { type: "winner", of: "M99" },
      { type: "winner", of: "M100" }
    ]},
  // Bronze match & Final
  { id: "M103", round: "Third", label: "103 · L101 vs L102", date: "Jul 18", city: "Miami", slots: [
      { type: "loser", of: "M101" },
      { type: "loser", of: "M102" }
    ]},
  { id: "M104", round: "Final", label: "104 · W101 vs W102", date: "Jul 19", city: "New York/New Jersey", slots: [
      { type: "winner", of: "M101" },
      { type: "winner", of: "M102" }
    ]}
];

const roundOrder = ["R32", "R16", "QF", "SF", "Third", "Final"];

const sideConfig = {
  left: {
    rounds: {
      R32: ["M74","M77","M73","M75","M76","M78","M79","M80"],
      R16: ["M89","M90","M91","M92"],
      QF: ["M97","M98"],
      SF: ["M101"]
    }
  },
  right: {
    rounds: {
      R32: ["M83","M84","M81","M82","M86","M88","M85","M87"],
      R16: ["M93","M94","M95","M96"],
      QF: ["M99","M100"],
      SF: ["M102"]
    }
  }
};

// Grid row anchors for visual alignment (1-indexed grid rows)
const rowMap = {
  left: {
    M74: 1, M77: 3, M73: 5, M75: 7, M76: 9, M78: 11, M79: 13, M80: 15,
    M89: 2, M90: 6, M91: 10, M92: 14,
    M97: 4, M98: 12,
    M101: 8
  },
  right: {
    M83: 1, M84: 3, M81: 5, M82: 7, M86: 9, M88: 11, M85: 13, M87: 15,
    M93: 2, M94: 6, M95: 10, M96: 14,
    M99: 4, M100: 12,
    M102: 8
  }
};

const edges = {
  left: [
    ["M74","M89"],["M77","M89"],
    ["M73","M90"],["M75","M90"],
    ["M76","M91"],["M78","M91"],
    ["M79","M92"],["M80","M92"],
    ["M89","M97"],["M90","M97"],
    ["M91","M98"],["M92","M98"],
    ["M97","M101"],["M98","M101"]
  ],
  right: [
    ["M81","M93"],["M82","M93"],
    ["M83","M94"],["M84","M94"],
    ["M85","M95"],["M86","M95"],
    ["M87","M96"],["M88","M96"],
    ["M93","M99"],["M94","M99"],
    ["M95","M100"],["M96","M100"],
    ["M99","M102"],["M100","M102"]
  ]
};

const thirdSlotMatchIds = matches.filter(m => m.slots.some(s => s.type === "third")).map(m => m.id);
const dependents = buildDependents(matches);

// --- State -------------------------------------------------------------------
const deepClone = (obj) =>
  typeof structuredClone === "function"
    ? structuredClone(obj)
    : JSON.parse(JSON.stringify(obj));

const urlState = decodeStateFromUrl();
const saved = JSON.parse(localStorage.getItem("wc26-state") || "{}");
const initial = urlState || saved;
let picks = initial.picks || buildDefaultPicks(defaultGroups);
picks = picks || {};
let thirdSelected = new Set(initial.thirdSelected || Object.keys(defaultGroups).slice(0, 8));
let thirdAssignments = initial.thirdAssignments || {};
let matchWinners = initial.matchWinners || {};
normalizeState();
saveState();

// --- Helpers -----------------------------------------------------------------
function buildDefaultPicks(groupTeams) {
  const obj = {};
  Object.entries(groupTeams).forEach(([group, list]) => {
    obj[group] = [...list]; // order = standing 1-4
  });
  return obj;
}

function buildDependents(ms) {
  const map = {};
  ms.forEach((m) => {
    m.slots.forEach((slot) => {
      if (slot.type === "winner" || slot.type === "loser") {
        const src = slot.of;
        if (!map[src]) map[src] = new Set();
        map[src].add(m.id);
      }
    });
  });
  return map;
}

// --- Share/encode helpers ----------------------------------------------------
function encodeStateForUrl(state) {
  const json = JSON.stringify(state);
  const bytes = new TextEncoder().encode(json);
  let binary = "";
  bytes.forEach(b => { binary += String.fromCharCode(b); });
  const b64 = btoa(binary)
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/g, "");
  return b64;
}

function decodeStateFromUrl() {
  const url = new URL(window.location.href);
  const s = url.searchParams.get("s") || (url.hash.startsWith("#s=") ? url.hash.slice(3) : "");
  if (!s) return null;
  try {
    const b64 = s.replace(/-/g, "+").replace(/_/g, "/");
    const pad = b64.length % 4 ? "=".repeat(4 - (b64.length % 4)) : "";
    const binary = atob(b64 + pad);
    const bytes = Uint8Array.from(binary, ch => ch.charCodeAt(0));
    const json = new TextDecoder().decode(bytes);
    const parsed = JSON.parse(json);
    // Normalize shape to our expected keys
    return {
      picks: parsed.p || parsed.picks,
      thirdSelected: parsed.t || parsed.thirdSelected,
      thirdAssignments: parsed.a || parsed.thirdAssignments,
      matchWinners: parsed.w || parsed.matchWinners,
    };
  } catch (err) {
    console.warn("Failed to decode shared state", err);
    return null;
  }
}

// Migrate legacy saved state (object-based standings) to array order.
function normalizeState() {
  Object.entries(defaultGroups).forEach(([group, list]) => {
    if (!Array.isArray(picks[group])) {
      const legacy = picks[group] || {};
      picks[group] = [
        legacy.first || list[0],
        legacy.second || list[1],
        legacy.third || list[2],
        legacy.fourth || list[3]
      ];
    }
    // Ensure length 4 and fill missing with team list fallbacks
    for (let i = 0; i < 4; i++) {
      if (!picks[group][i]) picks[group][i] = list[i] || `Team ${group}${i+1}`;
    }
  });
  // If thirdSelected carries groups not present, reset to first 8
  thirdSelected = new Set([...thirdSelected].filter(g => defaultGroups[g]).slice(0,8));

  // Migrate legacy winners stored as team names to slot indices when possible.
  Object.keys(matchWinners || {}).forEach((matchId) => {
    const legacyWinner = matchWinners[matchId];
    if (typeof legacyWinner === "number") {
      return;
    }
    const [a, b] = getParticipantsArray(matchId);
    if (legacyWinner === a) {
      matchWinners[matchId] = 0;
    } else if (legacyWinner === b) {
      matchWinners[matchId] = 1;
    } else {
      delete matchWinners[matchId];
    }
  });
}

function thirdPlacedTeams() {
  return Object.entries(picks).map(([group, order]) => ({ group, team: order[2] }));
}

function selectedThirdPool() {
  const selected = thirdPlacedTeams().filter(({ group }) => thirdSelected.has(group));
  const map = {};
  selected.forEach(item => { map[item.group] = item.team; });
  return map;
}

function resolveSlot(slot) {
  switch (slot.type) {
    case "group":
      return picks[slot.group]?.[slot.position - 1] || "";
    case "third": {
      const pool = selectedThirdPool();
      const assignedGroup = thirdAssignments[slot.key];
      if (assignedGroup && pool[assignedGroup]) return pool[assignedGroup];
      return "";
    }
    case "winner": {
      const idx = Number(matchWinners[slot.of]);
      const [a, b] = getParticipantsArray(slot.of);
      if (idx === 0) return a || "";
      if (idx === 1) return b || "";
      return "";
    }
    case "loser": {
      const idx = Number(matchWinners[slot.of]);
      const [a, b] = getParticipantsArray(slot.of);
      if (idx === 0) return b || "";
      if (idx === 1) return a || "";
      return "";
    }
    default:
      return "";
  }
}

function getParticipantsArray(matchId) {
  const match = matches.find(m => m.id === matchId);
  if (!match) return ["", ""];
  return match.slots.map(resolveSlot);
}

function getMatch(matchId) {
  return matches.find(m => m.id === matchId);
}

function clearAllWinners() {
  matchWinners = {};
  saveState();
}

function clearDependentFrom(matchIds) {
  const queue = [...matchIds];
  const seen = new Set();
  while (queue.length) {
    const id = queue.shift();
    if (seen.has(id)) continue;
    seen.add(id);
    delete matchWinners[id];
    const deps = dependents[id];
    if (deps) {
      deps.forEach((d) => queue.push(d));
    }
  }
  saveState();
}

function saveState() {
  const snapshot = { picks, thirdSelected: Array.from(thirdSelected), thirdAssignments, matchWinners };
  localStorage.setItem("wc26-state", JSON.stringify(snapshot));
}

// --- Renderers ---------------------------------------------------------------
const groupStageEl = document.getElementById("group-stage");
const thirdPlaceEl = document.getElementById("third-place");
const bracketEl = document.getElementById("bracket");

setupBracketEvents();

function setupBracketEvents() {
  if (!bracketEl) return;
  bracketEl.addEventListener("change", (e) => {
    const thirdSelect = e.target.closest(".third-select");
    if (thirdSelect) {
      const key = thirdSelect.dataset.key;
      const matchId = thirdSelect.dataset.match;
      if (!key) return;
      const val = thirdSelect.value;
      if (!val) {
        delete thirdAssignments[key];
      } else {
        thirdAssignments[key] = val;
      }
      if (matchId) {
        clearDependentFrom([matchId]);
      }
      renderAll();
      return;
    }

    if (e.target.matches(".winner-check")) {
      const matchId = e.target.dataset.match;
      const slotIdx = Number(e.target.dataset.slotIdx);
      if (!matchId || !Number.isFinite(slotIdx)) return;
      if (e.target.checked) {
        matchWinners[matchId] = slotIdx;
      } else {
        delete matchWinners[matchId];
      }
      saveState();
      renderBracket();
    }
  });
}

function renderGroups() {
  groupStageEl.innerHTML = "";
  Object.entries(defaultGroups).forEach(([group, list]) => {
    const card = document.createElement("div");
    card.className = "col-md-6 col-xl-4";
    card.innerHTML = `
      <div class="section-card p-3 h-100">
        <div class="d-flex justify-content-between align-items-center mb-2">
          <h3 class="h6 mb-0">Group ${group}</h3>
        </div>
        <div class="draggable-list" data-group="${group}">
          ${picks[group].map((team, idx) => `
            <div class="draggable-team" draggable="true" data-group="${group}" data-rank="${idx}">
              <div class="handle">&#9776;</div>
              <span class="rank-pill">${idx + 1}${["st","nd","rd","th"][Math.min(idx,3)]}</span>
              <span class="team-name flex-fill">${team}</span>
            </div>
          `).join("")}
        </div>
      </div>
    `;
    groupStageEl.appendChild(card);
  });

  // Drag-and-drop reorder
  groupStageEl.querySelectorAll(".draggable-team").forEach(item => {
    item.addEventListener("dragstart", (e) => {
      e.dataTransfer.effectAllowed = "move";
      e.dataTransfer.setData("text/plain", JSON.stringify({
        group: item.dataset.group,
        from: Number(item.dataset.rank)
      }));
      item.classList.add("dragging");
    });
    item.addEventListener("dragend", () => item.classList.remove("dragging"));
  });

  groupStageEl.querySelectorAll(".draggable-list").forEach(listEl => {
    listEl.addEventListener("dragover", (e) => {
      e.preventDefault();
      const dragging = listEl.querySelector(".dragging");
      if (!dragging) return;
      const afterElement = getDragAfterElement(listEl, e.clientY);
      if (afterElement == null) {
        listEl.appendChild(dragging);
      } else {
        listEl.insertBefore(dragging, afterElement);
      }
    });
    listEl.addEventListener("drop", (e) => {
      e.preventDefault();
      const data = JSON.parse(e.dataTransfer.getData("text/plain") || "{}");
      const group = data.group;
      if (!group) return;
      const newOrder = Array.from(listEl.querySelectorAll(".draggable-team")).map(el => el.querySelector(".team-name").textContent);
      picks[group] = newOrder;
      clearAllWinners();
      renderAll();
    });
  });

  function getDragAfterElement(container, y) {
    const elements = [...container.querySelectorAll(".draggable-team:not(.dragging)")];
    return elements.reduce((closest, child) => {
      const box = child.getBoundingClientRect();
      const offset = y - box.top - box.height / 2;
      if (offset < 0 && offset > closest.offset) {
        return { offset, element: child };
      } else {
        return closest;
      }
    }, { offset: Number.NEGATIVE_INFINITY }).element;
  }
}

function renderThirdPlace() {
  thirdPlaceEl.innerHTML = "";
  thirdPlacedTeams().forEach(({ group, team }) => {
    const col = document.createElement("div");
    col.className = "col-md-3 col-sm-4 col-6";
    const isSelected = thirdSelected.has(group);
    col.innerHTML = `
      <div class="section-card p-3 h-100 d-flex flex-column gap-2">
        <div class="d-flex justify-content-between align-items-center">
          <span class="fw-semibold">Group ${group}</span>
          <div class="form-check form-switch">
            <input class="form-check-input third-toggle" type="checkbox" role="switch" data-group="${group}" ${isSelected ? "checked" : ""}>
          </div>
        </div>
        <div class="small text-muted">${team}</div>
      </div>
    `;
    thirdPlaceEl.appendChild(col);
  });

  thirdPlaceEl.querySelectorAll(".third-toggle").forEach(toggle => {
    toggle.addEventListener("change", (e) => {
      const group = e.target.dataset.group;
      if (e.target.checked) {
        if (thirdSelected.size >= 8) {
          e.target.checked = false;
          return;
        }
        thirdSelected.add(group);
      } else {
        thirdSelected.delete(group);
        // remove third assignments pointing to this group
        Object.entries(thirdAssignments).forEach(([k, val]) => {
          if (val === group) delete thirdAssignments[k];
        });
      }
      clearDependentFrom(thirdSlotMatchIds);
      renderAll();
    });
  });
}

function renderBracket() {
  bracketEl.innerHTML = "";

  const wrapper = document.createElement("div");
  wrapper.className = "bracket-flex";

  const leftSide = renderSide("left");
  const center = renderCenter();
  const rightSide = renderSide("right");

  wrapper.append(leftSide, center, rightSide);
  bracketEl.appendChild(wrapper);
}

function renderSide(side) {
  const sideEl = document.createElement("div");
  sideEl.className = `bracket-side ${side}`;
  const rounds = side === "left"
    ? ["R32","R16","QF","SF"]          // outer to center
    : ["SF","QF","R16","R32"];         // center to outer (mirrored)
  rounds.forEach(round => {
    const column = document.createElement("div");
    column.className = "round-column";
    const header = document.createElement("div");
    header.className = "bracket-column-header";
    header.textContent = roundLabel(round);
    column.appendChild(header);

    sideConfig[side].rounds[round].forEach(matchId => {
      const match = getMatch(matchId);
      if (!match) return;
      const card = renderMatchCard(match, side);
      card.dataset.side = side;
      card.dataset.round = match.round;
      const row = rowMap[side][matchId];
      if (row) card.style.gridRow = row + 1; // offset by header row
      column.appendChild(card);
    });
    sideEl.appendChild(column);
  });

  // connectors (draw after DOM attach)
  requestAnimationFrame(() => drawConnectors(sideEl, side));
  return sideEl;
}

function drawConnectors(sideEl, side) {
  const svgClass = "connector-layer";
  const old = sideEl.querySelector(`.${svgClass}`);
  if (old) old.remove();
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.classList.add(svgClass);
  sideEl.appendChild(svg);

  const edgeList = edges[side];
  if (!edgeList) return;

  const getCenter = (matchId) => {
    const el = sideEl.querySelector(`[data-match-id="${matchId}"]`);
    if (!el) return null;
    const rect = el.getBoundingClientRect();
    const parentRect = sideEl.getBoundingClientRect();
    return {
      x: rect.left - parentRect.left + rect.width / 2,
      y: rect.top - parentRect.top + rect.height / 2
    };
  };

  // size svg to container
  const containerRect = sideEl.getBoundingClientRect();
  svg.setAttribute("width", containerRect.width);
  svg.setAttribute("height", containerRect.height);

  edgeList.forEach(([from, to]) => {
    const a = getCenter(from);
    const b = getCenter(to);
    if (!a || !b) return;
    const midX = side === "left" ? Math.max(a.x, b.x) : Math.min(a.x, b.x);
    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    const d = `M ${a.x} ${a.y} L ${midX} ${a.y} L ${midX} ${b.y} L ${b.x} ${b.y}`;
    path.setAttribute("d", d);
    path.setAttribute("fill", "none");
    path.setAttribute("stroke", "rgba(99, 102, 241, 0.4)");
    path.setAttribute("stroke-width", "2");
    path.setAttribute("stroke-linejoin", "round");
    svg.appendChild(path);
  });
}

function renderCenter() {
  const center = document.createElement("div");
  center.className = "center-podium";
  const crown = document.createElement("div");
  crown.className = "champion-card";
  const finalTeams = getParticipantsArray("M104");
  const champIdx = Number(matchWinners["M104"]);
  const championName = champIdx === 0
    ? finalTeams[0]
    : champIdx === 1
      ? finalTeams[1]
      : "World Champions ?";
  crown.innerHTML = `
    <div class="text-muted small text-uppercase">Champion</div>
    <div class="h5 fw-bold mb-0">${championName}</div>
  `;
  const finalCard = renderMatchCard(getMatch("M104"));
  const thirdCard = renderMatchCard(getMatch("M103"));
  center.append(crown, finalCard, thirdCard);
  return center;
}

function renderMatchCard(match, side) {
  const card = document.createElement("div");
  card.className = "match-card";
  card.dataset.matchId = match.id;
  if (side) card.dataset.side = side;
  card.dataset.round = match.round;

  const resolvedSlots = match.slots.map(resolveSlot);
  const selectable = resolvedSlots.every(Boolean);

  const slotsHtml = match.slots.map((slot, idx) => {
    const resolved = resolvedSlots[idx];
    const name = resolved || slotPlaceholder(slot);
    const isResolved = !!resolved;
    const isThird = slot.type === "third";
    const isWinner = Number(matchWinners[match.id]) === idx && isResolved;
    if (isThird && !isResolved) {
      // show select only, no placeholder text
      return `
        <div class="team-slot third-slot">
          ${thirdSelectControl(match.id, slot)}
        </div>
      `;
    }
    const inputId = `${match.id}-${idx}`;
    return `
      <label class="team-slot ${idx === 0 ? "top" : "bottom"} ${selectable && isResolved ? "clickable" : "placeholder"} ${isWinner ? "winner-selected" : ""}" data-match="${match.id}" data-slot-idx="${idx}" for="${inputId}">
        <div class="d-flex align-items-center justify-content-between gap-2 w-100">
          <div class="d-flex align-items-center gap-2">
            <input type="checkbox" class="winner-check" id="${inputId}" data-match="${match.id}" data-slot-idx="${idx}" ${isWinner ? "checked" : ""} ${selectable && isResolved ? "" : "disabled"}>
            <span>${name}</span>
          </div>
          ${isThird ? thirdSelectControl(match.id, slot) : ""}
        </div>
      </label>
    `;
  }).join("");

  card.innerHTML = `
    <div class="match-label">${match.label}</div>
    <div class="small text-muted match-meta">${(match.date || "TBD date")} · ${(match.city || "TBD city")}</div>
    ${slotsHtml}
  `;
  return card;
}

function roundLabel(round) {
  return {
    R32: "Round of 32",
    R16: "Round of 16",
    QF: "Quarter-finals",
    SF: "Semi-finals",
    Third: "Bronze match",
    Final: "Final"
  }[round] || round;
}

function slotPlaceholder(slot) {
  if (slot.type === "group") return `${slot.position === 1 ? "1st" : slot.position === 2 ? "2nd" : "3rd"} in Group ${slot.group}`;
  if (slot.type === "third") return `3rd of ${slot.eligible.join("/")}`;
  if (slot.type === "winner") return `Winner ${slot.of}`;
  if (slot.type === "loser") return `Loser ${slot.of}`;
  return "TBD";
}

function thirdSelectControl(matchId, slot) {
  const pool = selectedThirdPool();
  const eligible = Object.entries(pool).filter(([group]) => slot.eligible.includes(group));
  const placeholderLabel = `Choose (3rd of ${slot.eligible.join("/")})`;
  const key = slot.key;
  const current = thirdAssignments[key] || "";
  const displayLabel = current
    ? `${pool[current] || ""} (Grp ${current})`
    : placeholderLabel;
  const optionsHtml = eligible.length === 0
    ? `<option value="">${placeholderLabel}</option>`
    : `<option value="">${placeholderLabel}</option>${eligible.map(([group, team]) => `<option value="${group}" ${current === group ? "selected" : ""}>${team} (Grp ${group})</option>`).join("")}`;
  return `
    <div class="third-select-wrap">
      <select class="form-select form-select-sm third-select arrow-only" data-key="${key}">
        ${optionsHtml}
      </select>
    </div>
  `;
}

// --- Controls ----------------------------------------------------------------
document.getElementById("reset-bracket").addEventListener("click", () => {
  picks = buildDefaultPicks(defaultGroups);
  thirdSelected = new Set(Object.keys(defaultGroups).slice(0, 8));
  thirdAssignments = {};
  matchWinners = {};
  saveState();
  renderAll();
});

const shareBtn = document.getElementById("share-link");
if (shareBtn) {
  shareBtn.addEventListener("click", async () => {
    const state = {
      p: picks,
      t: Array.from(thirdSelected),
      a: thirdAssignments,
      w: matchWinners,
    };
    const payload = encodeStateForUrl(state);
    const base = new URL(window.location.href);
    base.search = "";
    base.hash = "";
    base.searchParams.set("s", payload);
    const shareUrl = base.toString();
    try {
      await navigator.clipboard.writeText(shareUrl);
      shareBtn.textContent = "Link copied!";
      setTimeout(() => (shareBtn.textContent = "Share link"), 1500);
    } catch (err) {
      alert("Copy failed. Here is your link:\n" + shareUrl);
    }
    // Keep URL clean (do not modify current history)
  });
}

// --- Init --------------------------------------------------------------------
function renderAll() {
  try {
    renderGroups();
    renderThirdPlace();
    renderBracket();
  } catch (err) {
    console.error("Render failed; clearing saved state", err);
    localStorage.removeItem("wc26-state");
  }
}

renderAll();
