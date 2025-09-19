// Future: Add filter logic or modal quick view
document.querySelectorAll('.product-card button').forEach(btn => {
  btn.addEventListener('click', () => {
    alert('Quick view coming soon!');
  });
});
const modal = document.getElementById('quickViewModal');
const closeBtn = document.querySelector('.close');
const quickViewBtns = document.querySelectorAll('.quick-view-btn');

quickViewBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    modal.style.display = 'flex';
  });
});

closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});
// Future: Add cart preview or filter logic
console.log("Catalog loaded");
document.querySelector('.signup-btn').addEventListener('click', () => {
  alert('Redirecting to Sign Up...');
});

document.querySelector('.profile-btn').addEventListener('click', () => {
  alert('Opening Profile...');
});