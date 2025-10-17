// Simple demo JS
console.log("Welcome to My Awesome Website!");

// Example: scroll-to-section smooth behavior
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(e.target.getAttribute('href'));
    target.scrollIntoView({ behavior: 'smooth' });
  });
});
