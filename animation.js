const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target); // désactive l'observation une fois visible
    }
  });
});

document.querySelectorAll('.fade-in').forEach(section => {
  observer.observe(section);
});