// Optional: Add interactivity or dynamic effects
const cube = document.querySelector('.cube');

document.addEventListener('mousemove', (e) => {
    const xAxis = (window.innerWidth / 2 - e.pageX) / 25;
    const yAxis = (window.innerHeight / 2 - e.pageY) / 25;
    cube.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

document.addEventListener('mouseleave', () => {
    cube.style.transform = 'rotateY(0deg) rotateX(0deg)';
});