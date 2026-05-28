// Simple HTML include for static sites
async function includeHTML() {
  const elements = document.querySelectorAll('[data-include]');
  for (const el of elements) {
    const file = el.getAttribute('data-include');
    if (file) {
      try {
        const resp = await fetch(file);
        if (resp.ok) {
          el.innerHTML = await resp.text();
        } else {
          el.innerHTML = '<!-- Include not found: ' + file + ' -->';
        }
      } catch (e) {
        el.innerHTML = '<!-- Error loading include: ' + file + ' -->';
      }
    }
  }
}
document.addEventListener('DOMContentLoaded', includeHTML);