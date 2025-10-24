function toggleMobileMenu(){
  const mm = document.getElementById('mobileMenu');
  if(!mm) return;
  mm.style.display = (mm.style.display === 'block') ? 'none' : 'block';
}

// Smooth-scroll + active link handling
document.addEventListener('click', (e) => {
  const a = e.target.closest('a[href^="#"]');
  if(!a) return;
  const id = a.getAttribute('href');
  if(id.length > 1){
    const el = document.querySelector(id);
    if(el){
      e.preventDefault();
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      document.querySelectorAll('.nav-links a').forEach(x => x.classList.remove('active'));
      a.classList.add('active');
      // Close mobile menu after click
      const mm = document.getElementById('mobileMenu');
      if(mm) mm.style.display = 'none';
    }
  }
});
