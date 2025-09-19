document.querySelector('.google-btn').addEventListener('click', () => {
  alert('Redirecting to Google Sign Up...');
  // Future: Connect to Firebase or OAuth flow
});

document.querySelector('.signup-form').addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Account created successfully!');
});