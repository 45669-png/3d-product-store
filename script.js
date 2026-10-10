const cards = document.querySelectorAll('[data-tilt]');

cards.forEach((card) => {
  const maxRotate = 12;

  card.addEventListener('mousemove', (event) => {
    const rect = card.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const rotateY = ((x / rect.width) - 0.5) * maxRotate * 2;
    const rotateX = (0.5 - (y / rect.height)) * maxRotate * 2;

    card.style.transform = `perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-6px)`;
  });

  card.addEventListener('mouseleave', () => {
    card.style.transform = 'perspective(1200px) rotateX(0deg) rotateY(0deg) translateY(0)';
  });
});

const showcase = document.querySelector('.product-showcase');

if (showcase) {
  showcase.addEventListener('mousemove', (event) => {
    const rect = showcase.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width;
    const y = (event.clientY - rect.top) / rect.height;

    const rotateY = (x - 0.5) * 14;
    const rotateX = (0.5 - y) * 14;

    showcase.style.transform = `perspective(1500px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  });

  showcase.addEventListener('mouseleave', () => {
    showcase.style.transform = 'perspective(1500px) rotateX(0deg) rotateY(0deg)';
  });
}












