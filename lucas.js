(function(){
  var t=new Date('2026-10-30T18:30:00-03:00').getTime();
  function p(n){return n<10?'0'+n:''+n}
  function tick(){
    var s=Math.floor(Math.max(0,t-Date.now())/1000);
    document.getElementById('d').textContent=Math.floor(s/86400);
    document.getElementById('h').textContent=p(Math.floor(s%86400/3600));
    document.getElementById('m').textContent=p(Math.floor(s%3600/60));
    document.getElementById('s').textContent=p(s%60);
  }
  tick();setInterval(tick,1000);
})();

(function(){
  var els=document.querySelectorAll('section,.card');
  if(!('IntersectionObserver' in window)){return;}
  var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target);}});},{threshold:.15});
  els.forEach(function(el){el.classList.add('rv');io.observe(el);});
})();