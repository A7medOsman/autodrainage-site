
function toggleMobileMenu(){
  var m = document.getElementById('mobileMenu');
  if(!m) return;
  m.style.display = (m.style.display === 'block') ? 'none' : 'block';
}
document.addEventListener('DOMContentLoaded', function(){
  document.querySelectorAll('.faq-q').forEach(function(q){
    q.addEventListener('click', function(){
      var a = this.parentElement.querySelector('.faq-a');
      var open = a.style.display === 'block';
      a.style.display = open ? 'none' : 'block';
      this.querySelector('.chev').textContent = open ? '▾' : '▴';
    });
  });
});
