// ==== SAMPLE DATA ====
const PROJECTS = [
  { name: 'Oro Rio Inambari', mineral: ['Au'], region: 'Madre de Dios', status: 'Active', lat: -12.86, lng: -69.57, area: '200 ha', verified: true },
  { name: 'Polymetallic Carabaya', mineral: ['Au','Ag','Cu'], region: 'Puno', status: 'Pending', lat: -14.13, lng: -70.36, area: '1200 ha', verified: false },
  { name: 'Copper Antabamba', mineral: ['Cu'], region: 'Apurímac', status: 'Active', lat: -14.34, lng: -72.88, area: '950 ha', verified: true },
  { name: 'Iron Quilca', mineral: ['Fe'], region: 'Arequipa', status: 'Suspended', lat: -16.35, lng: -72.02, area: '300 ha', verified: false },
  { name: 'Silver Otuzco', mineral: ['Ag','Pb','Zn'], region: 'La Libertad', status: 'Active', lat: -7.90, lng: -78.57, area: '500 ha', verified: true }
];

// ==== MAP INIT ====
const map = L.map('map').setView([-12.0464, -77.0428], 5);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { attribution: '&copy; OpenStreetMap' }).addTo(map);

const markers = [];

// Minerals badge (grey with border)
function mineralBadge(m) {
  return `<span style="display:inline-block; border:1px solid #6c757d; color:#6c757d; font-size:0.75rem; padding:2px 6px; border-radius:12px; margin-right:2px;">${m}</span>`;
}

function renderMarkers(data) {
  markers.forEach(m => map.removeLayer(m));
  markers.length = 0;

  data.forEach((p, index) => {
    const fileName = p.name.replace(/\s+/g, '-'); // заменяем пробелы на дефисы
    const marker = L.marker([p.lat, p.lng]).addTo(map);
    marker.bindPopup(`
      <div>
        <strong>${p.name}</strong><br>
        <small>${p.region} · ${p.area}</small><br>
        <div class="mt-1">${p.mineral.map(mineralBadge).join('')}</div>
        ${p.verified ? '<span style="color:green;font-weight:bold;">Verified</span>' : ''}<br>
        <a href="projects/${fileName}.html" class="text-primary mt-1 d-inline-block">View Details →</a>
      </div>
    `);
    markers.push(marker);
  });
}


function applyFilters() {
  const q = document.getElementById('q').value.trim().toLowerCase();
  const region = document.getElementById('region').value;
  const status = document.getElementById('estado').value;
  const mins = Array.from(document.querySelectorAll('.mineral:checked')).map(i => i.value);
  const owner = document.getElementById('owner_verified').value; // новый фильтр

  const filtered = PROJECTS.filter(p => {
    const text = `${p.name} ${p.region}`.toLowerCase();
    const matchQ = !q || text.includes(q);
    const matchRegion = !region || p.region === region;
    const matchStatus = !status || p.status === status;
    const matchMineral = mins.length === 0 || mins.some(m => p.mineral.includes(m));

    // фильтр по Owner Verification
    let matchOwner = true;
    if (owner === "Verified") matchOwner = p.verified === true;
    if (owner === "Not Verified") matchOwner = p.verified === false;

    return matchQ && matchRegion && matchStatus && matchMineral && matchOwner;
  });

  renderMarkers(filtered);

  // Stats
  document.getElementById('statTotal').textContent = filtered.length;
  document.getElementById('statVerified').textContent = filtered.filter(p => p.verified).length;
  document.getElementById('statMinerals').textContent = new Set(filtered.flatMap(p => p.mineral)).size;
}

document.getElementById('btnApply').addEventListener('click', applyFilters);
document.getElementById('btnClear').addEventListener('click', () => {
  document.getElementById('q').value = '';
  document.getElementById('region').value = '';
  document.getElementById('estado').value = '';
  document.getElementById('owner_verified').value = ''; // сброс нового фильтра
  document.querySelectorAll('.mineral').forEach(i => i.checked = false);
  applyFilters();
});


// Initial render
renderMarkers(PROJECTS);
document.getElementById('statTotal').textContent = PROJECTS.length;
document.getElementById('statVerified').textContent = PROJECTS.filter(p => p.verified).length;
document.getElementById('statMinerals').textContent = new Set(PROJECTS.flatMap(p => p.mineral)).size;
