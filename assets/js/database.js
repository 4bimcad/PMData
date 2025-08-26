
  // ==== SAMPLE DATA ====
  const PROJECTS = [
  {
    "name": "Gold Project in Cusco PAN KOTSKYI",
    "mineral": [
      "Au"
    ],
    "region": "Cusco",
    "status": "Active",
    "lat": -13.2030105,
    "lng": -70.3842483,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Madre de Dios MARUMI I",
    "mineral": [
      "Au"
    ],
    "region": "Madre de Dios",
    "status": "Active",
    "lat": -12.4471497,
    "lng": -68.9447903,
    "area": "400 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Madre de Dios DON CARLO",
    "mineral": [
      "Au"
    ],
    "region": "Madre de Dios",
    "status": "Active",
    "lat": -12.5375404,
    "lng": -69.1564763,
    "area": "100.01 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Madre de Dios ANA LUCIA IV",
    "mineral": [
      "Au"
    ],
    "region": "Madre de Dios",
    "status": "Active",
    "lat": -12.5375349,
    "lng": -69.1656867,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Madre de Dios NUEVO TRIUNFO",
    "mineral": [
      "Au"
    ],
    "region": "Madre de Dios",
    "status": "Active",
    "lat": -12.5918213,
    "lng": -69.1104811,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Madre de Dios CRESPIN",
    "mineral": [
      "Au"
    ],
    "region": "Madre de Dios",
    "status": "Active",
    "lat": -12.4742445,
    "lng": -69.1472413,
    "area": "200.01 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Madre de Dios RONY GONZALO UNO",
    "mineral": [
      "Au"
    ],
    "region": "Madre de Dios",
    "status": "Active",
    "lat": -12.4832823,
    "lng": -69.1564492,
    "area": "200.01 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Madre de Dios ORION 6",
    "mineral": [
      "Au"
    ],
    "region": "Madre de Dios",
    "status": "Active",
    "lat": -12.483271,
    "lng": -69.174855,
    "area": "100.01 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Madre de Dios KELY 1",
    "mineral": [
      "Au"
    ],
    "region": "Madre de Dios",
    "status": "Active",
    "lat": -12.4956356,
    "lng": -69.2041942,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Madre de Dios KELY 1-A",
    "mineral": [
      "Au"
    ],
    "region": "Madre de Dios",
    "status": "Active",
    "lat": -12.4956286,
    "lng": -69.2133962,
    "area": "100 ha",
    "verified": true
  },
  {
    "name": "Gold Project in Madre de Dios GEDEON OTILIANO",
    "mineral": [
      "Au"
    ],
    "region": "Madre de Dios",
    "status": "Active",
    "lat": -12.5013445,
    "lng": -69.1932741,
    "area": "400 ha",
    "verified": true
  }
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
          <a href="projects/${fileName.toLowerCase()}.html" class="text-primary mt-1 d-inline-block">View Details →</a>
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
  