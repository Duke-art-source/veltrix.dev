const statusEl = document.getElementById('status');
const refreshBtn = document.getElementById('refresh-btn');
const tableBody = document.getElementById('inquiry-table-body');
const emptyState = document.getElementById('empty-state');

const apiBaseUrl = window.API_BASE_URL || 'http://localhost:3000';
const apiUrl = `${apiBaseUrl}/api/inquiries`;

const setStatus = (message, isError = false) => {
  statusEl.textContent = message;
  statusEl.className = isError ? 'mb-6 text-sm text-red-400' : 'mb-6 text-sm text-slate-300';
};

const renderInquiries = (inquiries) => {
  tableBody.innerHTML = '';
  if (!inquiries.length) {
    emptyState.classList.remove('hidden');
    return;
  }
  emptyState.classList.add('hidden');

  inquiries.forEach((item) => {
    const row = document.createElement('tr');
    row.className = 'border-t border-slate-800 hover:bg-slate-900/80 transition-colors';

    row.innerHTML = `
      <td class="px-4 py-4 align-top">
        <p class="font-semibold text-white">${item.name || 'N/A'}</p>
        <p class="text-slate-400 text-xs mt-1">${item.email || 'No email'}</p>
      </td>
      <td class="px-4 py-4 align-top text-slate-300">${item.email || 'N/A'}</td>
      <td class="px-4 py-4 align-top text-slate-300">${item.project_type || 'General Inquiry'}</td>
      <td class="px-4 py-4 align-top text-slate-300">${new Date(item.createdAt).toLocaleString() || 'Unknown'}</td>
    `;

    tableBody.appendChild(row);
  });
};

const loadInquiries = async () => {
  setStatus('Loading inquiries...');
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error(`Server responded with ${response.status}`);
    }
    const data = await response.json();
    renderInquiries(data.inquiries || []);
    setStatus(`Loaded ${data.count || 0} inquiries.`);
  } catch (error) {
    setStatus('Unable to load inquiries. Make sure the backend is running locally.', true);
    console.error('Failed to load inquiries:', error);
  }
};

refreshBtn.addEventListener('click', loadInquiries);
window.addEventListener('DOMContentLoaded', loadInquiries);
