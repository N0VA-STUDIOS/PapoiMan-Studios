// ============================================================
// script.js — Lógica del sitio PAPOI.DEV
// Este archivo lee GAMES y SCREENSHOTS desde data.js y arma
// las tarjetas de "Proyectos" y "Galería" automáticamente.
// No necesitas editar nada aquí para agregar contenido nuevo:
// eso se hace en data.js.
// ============================================================

// ---------- Render: tarjetas de "Proyectos" a partir de GAMES ----------
function renderProjects(){
  var grid = document.getElementById('project-grid');
  if(!grid) return;
  var html = GAMES.map(function(game){
    var playBtn = game.url
      ? '<a href="' + game.url + '" class="project-play" target="_blank" rel="noopener">Jugar →</a>'
      : '';
    return '<article class="project-card">' +
      '<span class="project-id">' + game.id + '</span>' +
      '<h3>' + game.title + '</h3>' +
      '<div class="project-meta">' +
        '<span>' + game.period + '</span>' +
        '<span class="type">' + game.type + '</span>' +
      '</div>' +
      playBtn +
    '</article>';
  }).join('');
  // "afterbegin" para que la tarjeta "+ Próximo proyecto" (ya en el HTML) quede al final
  grid.insertAdjacentHTML('afterbegin', html);
}

// ---------- Render: botones de filtro de la galería a partir de GAMES ----------
function renderGalleryFilters(){
  var container = document.getElementById('gallery-filters');
  if(!container) return;
  var html = '<button class="filter-btn active" data-filter="all" type="button">Todos</button>';
  html += GAMES.map(function(game){
    return '<button class="filter-btn" data-filter="' + game.slug + '" type="button">' + game.title + '</button>';
  }).join('');
  container.innerHTML = html;
}

// ---------- Render: cuadrícula de la galería a partir de SCREENSHOTS ----------
function renderGallery(){
  var grid = document.getElementById('gallery-grid');
  if(!grid) return;
  var gameBySlug = {};
  GAMES.forEach(function(g){ gameBySlug[g.slug] = g; });
  var html = SCREENSHOTS.map(function(shot){
    var game = gameBySlug[shot.game];
    var expId = game ? game.id : '';
    return '<figure class="gallery-item" data-game="' + shot.game + '">' +
      (expId ? '<span class="gallery-id">' + expId + '</span>' : '') +
      '<img src="' + shot.src + '" alt="' + shot.caption + '" loading="lazy">' +
      '<figcaption>' + shot.caption + '</figcaption>' +
    '</figure>';
  }).join('');
  grid.innerHTML = html;
}

renderProjects();
renderGalleryFilters();
renderGallery();

// ---------- Telarañas de fondo (decorativas) ----------
(function(){
  // Genera una telaraña geométricamente completa: radios rectos desde el centro
  // + anillos totalmente cerrados (sin tramos cortados), con jitter sutil para que
  // no se vea perfectamente artificial.
  function buildWeb(spokes, rings, radius, redIdx, jitter, seed){
    jitter = jitter || 0.06;
    var rand = (function(s){ return function(){ s = (s*9301+49297)%233280; return s/233280; }; })(seed || 1);
    var angles = [];
    for (var i = 0; i < spokes; i++){
      angles.push((i / spokes) * Math.PI * 2 - Math.PI / 2);
    }
    var pts = [];
    for (var r = 1; r <= rings; r++){
      var baseRad = radius * (r / rings);
      var ringPts = angles.map(function(a){
        var rad = baseRad * (1 + (rand() - 0.5) * jitter);
        return { x: rad * Math.cos(a), y: rad * Math.sin(a) };
      });
      pts.push(ringPts);
    }
    var grayD = '';
    angles.forEach(function(a, i){
      var outer = pts[rings - 1][i];
      grayD += 'M0.0,0.0 L' + outer.x.toFixed(1) + ',' + outer.y.toFixed(1) + ' ';
    });
    pts.forEach(function(ringPts){
      grayD += 'M' + ringPts[0].x.toFixed(1) + ',' + ringPts[0].y.toFixed(1) + ' ';
      for (var i = 1; i < ringPts.length; i++){
        grayD += 'L' + ringPts[i].x.toFixed(1) + ',' + ringPts[i].y.toFixed(1) + ' ';
      }
      grayD += 'Z ';
    });
    var redD = '';
    (redIdx || []).forEach(function(i){
      var outer = pts[rings - 1][i];
      redD += 'M0.0,0.0 L' + outer.x.toFixed(1) + ',' + outer.y.toFixed(1) + ' ';
    });
    return { gray: grayD.trim(), red: redD.trim(), radius: radius };
  }
  function svgFor(web, extraStyle){
    var pad = 10;
    var size = (web.radius + pad) * 2;
    var vb = (-web.radius - pad) + ' ' + (-web.radius - pad) + ' ' + size + ' ' + size;
    return '<svg class="spider-web" style="' + extraStyle + '" viewBox="' + vb + '" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">' +
      '<path class="web-gray" d="' + web.gray + '"/>' +
      (web.red ? '<path class="web-red" d="' + web.red + '"/>' : '') +
      '</svg>';
  }
  // Solo 2 telarañas, cada una en una esquina opuesta y bien metida hacia afuera
  // del viewport, para que solo asome una punta y nunca se sientan amontonadas.
  var webs = [
    { def: buildWeb(7, 6, 150, [2, 5], 0.05, 3),  style: 'position:fixed;top:-60px;left:-60px;width:170px;height:170px;opacity:0.13;z-index:0;' },
    { def: buildWeb(7, 6, 150, [1, 4], 0.05, 11), style: 'position:fixed;bottom:-60px;right:-60px;width:170px;height:170px;opacity:0.13;z-index:0;transform:rotate(180deg);' }
  ];
  var html = webs.map(function(w){ return svgFor(w.def, w.style); }).join('');
  document.addEventListener('DOMContentLoaded', function(){
    document.body.insertAdjacentHTML('afterbegin', html);
  });
})();

// ---------- Navegación entre "ventanas" (SPA de una sola página) ----------
var showView; // se define abajo, se usa dentro del bloque de revelado
(function(){
  var views = document.querySelectorAll('.view');
  var navLinks = document.querySelectorAll('[data-view]');
  showView = function(name){
    views.forEach(function(v){ v.classList.toggle('active', v.id === 'view-' + name); });
    document.querySelectorAll('.nav-links a').forEach(function(a){
      a.classList.toggle('active', a.dataset.view === name);
    });
    window.scrollTo({top:0, behavior:'instant'});
    // Vuelve a chequear qué debe mostrarse ya que cambió qué sección está visible
    if(window.updateReveals){
      requestAnimationFrame(function(){ requestAnimationFrame(window.updateReveals); });
    }
  };
  navLinks.forEach(function(link){
    link.addEventListener('click', function(e){
      e.preventDefault();
      var name = this.dataset.view;
      showView(name);
      history.replaceState(null, '', '#' + name);
    });
  });
  // Al cargar, respeta el hash de la URL si existe (ej: enlace directo a #proyectos)
  var initial = (location.hash || '#inicio').replace('#','');
  if(document.getElementById('view-' + initial)){
    showView(initial);
  }
})();

// ---------- Revelado al hacer scroll + contadores de "Sobre mí" ----------
// Se revisa manualmente en cada scroll/resize/cambio de pestaña en vez de
// depender solo de IntersectionObserver, porque las secciones de esta SPA
// pasan de display:none a visible y el observer no siempre lo detecta a tiempo.
(function(){
  document.querySelectorAll('.door, .project-card, .gallery-item, .skill, .contact-row, .availability, .section-head, .stat').forEach(function(el){
    el.classList.add('reveal-up');
  });
  document.querySelectorAll('.timeline-item').forEach(function(el){
    el.classList.add('reveal-left');
  });
  document.querySelectorAll('.stat .num').forEach(function(el){
    el.dataset.original = el.textContent.trim();
  });

  function isInViewport(el){
    var rect = el.getBoundingClientRect();
    var vh = window.innerHeight || document.documentElement.clientHeight;
    return rect.top < vh * 0.94 && rect.bottom > vh * 0.06;
  }

  function setCount(numEl, value, suffix){
    numEl.textContent = value + suffix;
  }

  function updateStatCounter(statEl, visible){
    var numEl = statEl.querySelector('.num');
    if(!numEl) return;
    var match = numEl.dataset.original.match(/^(\d+)/);
    if(!match) return; // valores no numéricos (ej. "LAN") solo usan el fade
    var target = parseInt(match[1], 10);
    var suffix = numEl.dataset.original.replace(match[1], '');
    var wasVisible = statEl.dataset.counted === '1';
    if(visible === wasVisible) return; // sin cambio de estado: no tocar el intervalo en curso
    clearInterval(numEl._counterTimer);
    if(visible && !wasVisible){
      statEl.dataset.counted = '1';
      var current = 0, steps = 24, inc = target / steps;
      numEl._counterTimer = setInterval(function(){
        current += inc;
        if(current >= target){ current = target; clearInterval(numEl._counterTimer); }
        setCount(numEl, Math.round(current), suffix);
      }, 25);
    } else if(!visible && wasVisible){
      statEl.dataset.counted = '0';
      setCount(numEl, 0, suffix);
    }
  }

  function updateReveals(){
    document.querySelectorAll('.view.active .reveal-up, .view.active .reveal-left').forEach(function(el){
      el.classList.toggle('is-visible', isInViewport(el));
    });
    document.querySelectorAll('.view.active .stat').forEach(function(el){
      updateStatCounter(el, isInViewport(el));
    });
  }
  window.updateReveals = updateReveals;

  var ticking = false;
  function onScrollOrResize(){
    if(ticking) return;
    ticking = true;
    requestAnimationFrame(function(){ updateReveals(); ticking = false; });
  }
  window.addEventListener('scroll', onScrollOrResize, { passive: true });
  window.addEventListener('resize', onScrollOrResize);
  document.addEventListener('DOMContentLoaded', function(){
    updateReveals();
    // segunda pasada por si las fuentes/layout cambian tamaños justo después de cargar
    setTimeout(updateReveals, 150);
  });
})();

// ---------- Vibración / haptics ----------
// móvil (Vibration API) y mandos Xbox en Edge (Gamepad API).
// Nota de plataforma: Safari/iOS no implementa la Vibration API (limitación del
// propio navegador, no del código) — funciona en Chrome/Edge para Android.
(function(){
  function triggerHaptics(){
    try{
      if('vibrate' in navigator){ navigator.vibrate(20); }
    }catch(e){}
    try{
      var pads = navigator.getGamepads ? navigator.getGamepads() : [];
      for(var i = 0; i < pads.length; i++){
        var gp = pads[i];
        if(gp && gp.vibrationActuator){
          gp.vibrationActuator.playEffect('dual-rumble', {
            duration: 70,
            startDelay: 0,
            strongMagnitude: 0.35,
            weakMagnitude: 0.2
          });
        }
      }
    }catch(e){}
  }
  var selector = 'a, button, .door, .project-card, .gallery-item, .contact-row, .btn, .footer-links a';
  // 'touchstart' dispara la vibración en el instante del toque (más fiable en
  // móvil que esperar al 'click', que en algunos navegadores llega tarde).
  document.addEventListener('touchstart', function(e){
    if(e.target.closest(selector)){ triggerHaptics(); }
  }, { passive: true });
  document.addEventListener('click', function(e){
    if(e.target.closest(selector)){ triggerHaptics(); }
  });
})();

// ---------- Galería: filtros por juego + lightbox con navegación ----------
(function(){
  var lightbox = document.getElementById('lightbox');
  if(!lightbox) return; // seguridad por si esta sección no existe
  var lightboxImg = document.getElementById('lightbox-img');
  var lightboxCaption = document.getElementById('lightbox-caption');
  var currentIndex = 0;
  var visibleItems = [];

  function getAllItems(){
    return Array.prototype.slice.call(document.querySelectorAll('.gallery-item'));
  }
  function getVisibleItems(){
    return getAllItems().filter(function(item){ return !item.classList.contains('is-hidden'); });
  }

  // Los botones de filtro se generan dinámicamente (ver renderGalleryFilters),
  // por eso se delega el evento en el contenedor en vez de buscarlos por adelantado.
  document.addEventListener('click', function(e){
    var btn = e.target.closest('.filter-btn');
    if(!btn) return;
    document.querySelectorAll('.filter-btn').forEach(function(b){ b.classList.remove('active'); });
    btn.classList.add('active');
    var filter = btn.dataset.filter;
    getAllItems().forEach(function(item){
      var show = filter === 'all' || item.dataset.game === filter;
      item.classList.toggle('is-hidden', !show);
    });
    // recalcula qué tarjetas deben verse tras el filtrado
    if(window.updateReveals){
      requestAnimationFrame(function(){ requestAnimationFrame(window.updateReveals); });
    }
  });

  function showCurrent(){
    var item = visibleItems[currentIndex];
    if(!item) return;
    var img = item.querySelector('img');
    var caption = item.querySelector('figcaption');
    lightboxImg.src = img.src;
    lightboxImg.alt = img.alt;
    lightboxCaption.textContent = caption ? caption.textContent : '';
  }

  function openLightbox(item){
    visibleItems = getVisibleItems();
    currentIndex = visibleItems.indexOf(item);
    if(currentIndex === -1) return;
    showCurrent();
    lightbox.classList.add('active');
  }

  function closeLightbox(){
    lightbox.classList.remove('active');
    lightboxImg.src = '';
  }

  function showNext(){
    if(!visibleItems.length) return;
    currentIndex = (currentIndex + 1) % visibleItems.length;
    showCurrent();
  }
  function showPrev(){
    if(!visibleItems.length) return;
    currentIndex = (currentIndex - 1 + visibleItems.length) % visibleItems.length;
    showCurrent();
  }

  document.addEventListener('click', function(e){
    var item = e.target.closest('.gallery-item');
    if(item){ openLightbox(item); }
  });
  document.getElementById('lightbox-close').addEventListener('click', closeLightbox);
  document.getElementById('lightbox-next').addEventListener('click', showNext);
  document.getElementById('lightbox-prev').addEventListener('click', showPrev);
  lightbox.addEventListener('click', function(e){
    if(e.target === lightbox){ closeLightbox(); }
  });
  document.addEventListener('keydown', function(e){
    if(!lightbox.classList.contains('active')) return;
    if(e.key === 'Escape'){ closeLightbox(); }
    else if(e.key === 'ArrowRight'){ showNext(); }
    else if(e.key === 'ArrowLeft'){ showPrev(); }
  });
})();
