// Optional: subtle fade-in after page load
window.addEventListener('load', () => {
  const quote = document.querySelector('.quote-container');
  quote.style.opacity = '1';
  quote.style.transform = 'translateY(0)';
});
