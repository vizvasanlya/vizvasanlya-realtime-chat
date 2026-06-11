const cards = [{"label": "Active rooms", "value": "36", "delta": "+9"}, {"label": "Messages", "value": "42K", "delta": "+31%"}, {"label": "Presence", "value": "912", "delta": "+12%"}, {"label": "Uptime", "value": "99.98%", "delta": "+0.02%"}];
const rows = [{"title": "Product launch", "status": "Live", "detail": "Cross-functional team discussing release readiness."}, {"title": "Customer support", "status": "Monitored", "detail": "Escalation queue is below target response time."}, {"title": "Design critique", "status": "Scheduled", "detail": "Room opens in 20 minutes for review."}, {"title": "Engineering sync", "status": "Archived", "detail": "Notes and decisions saved to workspace."}];
const insights = ["Peak activity occurs between 10 AM and 2 PM.", "Threaded replies reduced channel noise.", "Moderation alerts are down 19% this week."];
const storageKey = 'vizvasanlya-realtime-chat-items';
let saved = JSON.parse(localStorage.getItem(storageKey) || '[]');
let filter = 'all';

const statsEl = document.querySelector('#stats');
const listEl = document.querySelector('#list');
const insightsEl = document.querySelector('#insights');
const form = document.querySelector('#add-item');
const input = document.querySelector('#itemInput');

function renderStats() {
  statsEl.innerHTML = cards.map((item) => `
    <article class="metric">
      <span>${item.label}</span>
      <strong>${item.value}</strong>
      <em>${item.delta}</em>
    </article>
  `).join('');
}

function renderList() {
  const visible = rows.filter((row) => filter === 'all' || row.status.includes(filter));
  if (!visible.length) {
    listEl.innerHTML = '<p class="empty">No items match this filter yet.</p>';
    return;
  }
  listEl.innerHTML = visible.map((row) => `
    <article class="row">
      <div>
        <h3>${row.title}</h3>
        <p>${row.detail}</p>
      </div>
      <span class="badge">${row.status}</span>
    </article>
  `).join('');
}

function renderInsights() {
  insightsEl.innerHTML = insights.map((item) => `<li>${item}</li>`).join('');
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const value = input.value.trim();
  if (!value) return;
  saved.unshift({ title: value, status: 'Active', detail: 'Added from the quick capture form.' });
  localStorage.setItem(storageKey, JSON.stringify(saved.slice(0, 10)));
  input.value = '';
  renderList();
});

document.querySelectorAll('.filters button').forEach((button) => {
  button.addEventListener('click', () => {
    filter = button.dataset.filter;
    document.querySelectorAll('.filters button').forEach((item) => item.classList.remove('active'));
    button.classList.add('active');
    renderList();
  });
});

renderStats();
renderList();
renderInsights();
