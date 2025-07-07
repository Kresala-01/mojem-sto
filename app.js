// Inicializace mapy
const map = L.map('map').setView([49.743, 15.338], 7); // Centrum ČR
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap přispěvatelé'
}).addTo(map);

let clickedLatLng = null;

map.on('click', function(e) {
  clickedLatLng = e.latlng;
  L.marker(clickedLatLng).addTo(map)
    .bindPopup("Zde bude podnět").openPopup();
});

// Přepínání formuláře
function toggleForm() {
  const formSection = document.getElementById('form-section');
  formSection.style.display = formSection.style.display === 'none' ? 'block' : 'none';
}

// Odeslání podnětu
function submitProposal() {
  const desc = document.getElementById('description').value;
  const cat = document.getElementById('category').value;
  const list = document.getElementById('proposals-list');

  if (!clickedLatLng) {
    alert("Nejprve klikněte na mapu pro určení místa.");
    return;
  }

  const item = document.createElement('div');
  item.innerHTML = `<h3>${desc}</h3>
                    <p>Kategorie: ${cat}</p>
                    <p>Souřadnice: ${clickedLatLng.lat.toFixed(5)}, ${clickedLatLng.lng.toFixed(5)}</p>
                    <button>👍 Podpořit</button>`;
  list.appendChild(item);

  L.marker(clickedLatLng).addTo(map)
    .bindPopup(`<strong>${desc}</strong><br>${cat}`).openPopup();

  document.getElementById('proposal-form').reset();
  document.getElementById('form-section').style.display = 'none';
  clickedLatLng = null;
}

// Přejít na seznam podnětů
function showProposals() {
  document.getElementById('proposals-list').scrollIntoView({ behavior: 'smooth' });
}
