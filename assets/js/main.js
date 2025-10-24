function toggleMobileMenu(){
  const mm = document.getElementById('mobileMenu');
  if(!mm) return;
  mm.style.display = (mm.style.display === 'block') ? 'none' : 'block';
}

// Sticky nav elevation on scroll
const nav = document.getElementById('topNav');
window.addEventListener('scroll', () => {
  if(!nav) return;
  nav.classList.toggle('scrolled', window.scrollY > 6);
});

// Smooth-scroll + ScrollSpy (active tab follows scroll)
const sectionIds = ['home','products','features','resources','contact'];
const linkMap = {};
document.querySelectorAll('.nav-links a').forEach(a => {
  const id = a.getAttribute('href').replace('#','');
  linkMap[id] = a;
});

// Smooth scrolling for anchor clicks
document.addEventListener('click', (e) => {
  const a = e.target.closest('a[href^="#"]');
  if(!a) return;
  const id = a.getAttribute('href').slice(1);
  const el = document.getElementById(id);
  if(el){
    e.preventDefault();
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    // Close mobile menu on selection
    const mm = document.getElementById('mobileMenu');
    if(mm) mm.style.display = 'none';
  }
});

// ScrollSpy via IntersectionObserver
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    const id = entry.target.id;
    if (!sectionIds.includes(id)) return;
    if (entry.isIntersecting) {
      document.querySelectorAll('.nav-links a').forEach(x => x.classList.remove('active'));
      if (linkMap[id]) linkMap[id].classList.add('active');
    }
  });
}, { rootMargin: '-35% 0px -55% 0px', threshold: 0 });

sectionIds.forEach(id => {
  const el = document.getElementById(id);
  if(el) observer.observe(el);
});
