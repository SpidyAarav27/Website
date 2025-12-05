// Select the main container
const wrap = document.querySelector('.wrap');

// Hide initially
wrap.style.opacity = 0;
wrap.style.transform = 'translateY(20px)';

// Animate on page load
window.addEventListener('DOMContentLoaded', () => {
    wrap.style.transition = 'opacity 1s ease, transform 1s ease';
    wrap.style.opacity = 1;
    wrap.style.transform = 'translateY(0)';
});
