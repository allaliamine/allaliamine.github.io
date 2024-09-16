new fullpage('#fullpage', {
  sectionsColor: ['radial-gradient(rgba(255,254,234,1) 0%, rgba(255,254,234,1) 35%, #B7E8EB 100%)', 'orange', '#C0C0C0', '#ADD8E6'],
  autoScrolling:true,
  scrollHorizontally: true
});

document.querySelectorAll('.section').forEach(section => {
  section.style.background = 'radial-gradient(rgba(255,254,234,1) 0%, rgba(255,254,234,1) 35%, #B7E8EB 100%)';
});