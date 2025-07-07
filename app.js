function toggleForm() {
  const formSection = document.getElementById('form-section');
  formSection.style.display = formSection.style.display === 'none' ? 'block' : 'none';
}

function submitProposal() {
  const desc = document.getElementById('description').value;
  const cat = document.getElementById('category').value;
  const list = document.getElementById('proposals-list');

  const item = document.createElement('div');
  item.innerHTML = `<h3>${desc}</h3><p>Kategorie: ${cat}</p><button>👍 Podpořit</button>`;
  list.appendChild(item);

  document.getElementById('proposal-form').reset();
  document.getElementById('form-section').style.display = 'none';
}

function showProposals() {
  document.getElementById('proposals-list').scrollIntoView({ behavior: 'smooth' });
}
