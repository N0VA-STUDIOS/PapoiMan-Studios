:root{
  --black:#0a0a0a;
  --panel:#141414;
  --panel-2:#1c1c1c;
  --line:#2c2c2c;
  --white:#f2f2f0;
  --gray:#8a8a8a;
  --red:#e0202b;
  --red-dark:#8f0e17;
}
*{margin:0;padding:0;box-sizing:border-box;}
html{scroll-behavior:smooth;}
body{
  background:var(--black);
  color:var(--white);
  font-family:'Inter',sans-serif;
  line-height:1.6;
  overflow-x:hidden;
  min-height:100vh;
  display:flex;
  flex-direction:column;
}
h1,h2,h3,.display{
  font-family:'Anton',sans-serif;
  font-weight:400;
  letter-spacing:0.5px;
  line-height:1;
}
a{color:inherit;text-decoration:none;}
::selection{background:var(--red);color:var(--white);}
main{flex:1;}
/* ---------- Telarañas de fondo (fijas al viewport) ---------- */
.spider-web{
  pointer-events:none;
  overflow:visible;
}
.spider-web .web-gray{fill:none;stroke:#6b6b6b;stroke-width:1;}
.spider-web .web-red{fill:none;stroke:var(--red);stroke-width:1.3;}
.web-bg-center{
  position:fixed;
  inset:0;
  z-index:0;
  opacity:0.045;
  pointer-events:none;
}
/* ---------- Estructura general ---------- */
.wrap{
  position:relative;
  z-index:1;
  max-width:1100px;
  margin:0 auto;
  padding:0 32px;
}
/* ---------- NAV ---------- */
nav{
  position:relative;
  z-index:5;
  display:flex;
  justify-content:space-between;
  align-items:center;
  padding:26px 32px;
  max-width:1100px;
  margin:0 auto;
  width:100%;
}
.brand{font-family:'Anton',sans-serif;font-size:1.3em;letter-spacing:1px;}
.brand span{color:var(--red);}
.nav-links{display:flex;gap:28px;}
.nav-links a{
  font-size:0.9em;
  color:var(--gray);
  border-bottom:2px solid transparent;
  padding-bottom:4px;
  transition:color .2s ease, border-color .2s ease;
}
.nav-links a:hover{color:var(--white);border-color:var(--red);}
.nav-links a.active{color:var(--white);border-color:var(--red);}
/* ---------- HERO de pagina (mas compacto que el de portada) ---------- */
.page-hero{
  position:relative;
  padding:70px 0 60px;
  border-bottom:1px solid var(--line);
}
.eyebrow-tag{
  display:inline-flex;
  align-items:center;
  gap:10px;
  font-size:0.85em;
  color:var(--gray);
  margin-bottom:18px;
}
.eyebrow-tag .dot{
  width:8px;height:8px;background:var(--red);
  clip-path:polygon(50% 0%,100% 50%,50% 100%,0% 50%);
}
.page-hero h1{
  font-size:clamp(2.4em,6vw,4em);
  text-transform:uppercase;
}
.page-hero h1 .accent{color:var(--red);}
.page-hero p{
  max-width:56ch;
  color:var(--gray);
  font-size:1.05em;
  margin-top:18px;
}
/* ---------- Botones ---------- */
.btn{
  display:inline-block;
  padding:14px 28px;
  font-size:0.95em;
  font-weight:600;
  border:2px solid transparent;
  cursor:pointer;
  transition:transform .15s ease, background .2s ease, border-color .2s ease, color .2s ease;
}
.btn-fill{
  background:var(--red);
  color:var(--white);
  clip-path:polygon(10px 0,100% 0,calc(100% - 10px) 100%,0 100%);
}
.btn-fill:hover{background:var(--red-dark);transform:translateY(-2px);}
.btn-line{
  border-color:var(--line);
  color:var(--white);
  clip-path:polygon(10px 0,100% 0,calc(100% - 10px) 100%,0 100%);
}
.btn-line:hover{border-color:var(--red);color:var(--red);}
.hero-cta{margin-top:30px;display:flex;gap:16px;flex-wrap:wrap;}
/* ---------- Secciones internas ---------- */
section{position:relative;padding:70px 0 20px;}
.section-head{display:flex;align-items:baseline;gap:18px;margin-bottom:44px;}
.section-num{font-family:'Anton',sans-serif;color:var(--red-dark);font-size:1.1em;}
.section-head h2{font-size:clamp(1.6em,4vw,2.3em);text-transform:uppercase;}
.section-head .rule{flex:1;height:1px;background:var(--line);}
/* ---------- Puertas de navegacion (index) ---------- */
.doors{
  display:grid;
  grid-template-columns:repeat(3,1fr);
  gap:2px;
  background:var(--line);
  border:1px solid var(--line);
}
.door{
  background:var(--panel);
  padding:44px 28px;
  display:flex;
  flex-direction:column;
  gap:16px;
  transition:background .25s ease;
  min-height:260px;
}
.door:hover{background:var(--panel-2);}
.door .door-num{font-size:0.78em;color:var(--red);letter-spacing:1px;}
.door h3{font-size:1.6em;text-transform:uppercase;margin-top:6px;}
.door p{color:var(--gray);font-size:0.92em;flex-grow:1;}
.door .go{
  font-size:0.85em;font-weight:600;color:var(--white);
  border-bottom:2px solid var(--red);
  align-self:flex-start;padding-bottom:2px;
}
/* ---------- Tarjetas de proyecto (cuadros pequeños: nombre, fecha, tipo) ---------- */
.project-grid{
  display:grid;
  grid-template-columns:repeat(auto-fill,minmax(150px,1fr));
  gap:18px;
  margin-bottom:30px;
  max-width:520px;
}
.project-card{
  background:
    radial-gradient(circle at center, var(--panel) 35%, rgba(224,32,43,0.22) 100%);
  border:2px solid var(--red);
  border-radius:2px;
  padding:16px;
  display:flex;
  flex-direction:column;
  gap:6px;
  aspect-ratio:1/1;
  transition:background .25s ease, box-shadow .25s ease, border-color .25s ease;
}
.project-card:hover{
  box-shadow:0 0 18px rgba(224,32,43,0.45), inset 0 0 22px rgba(224,32,43,0.25);
  border-color:var(--white);
}
.project-card .project-id{font-size:0.68em;color:var(--red);letter-spacing:1px;}
.project-card h3{font-size:1em;text-transform:uppercase;margin-top:2px;line-height:1.15;}
.project-card .project-meta{display:flex;flex-direction:column;gap:2px;margin-top:auto;font-size:0.72em;color:var(--gray);}
.project-card .project-meta .type{color:var(--red);}
.project-card.add-new{
  align-items:center;justify-content:center;text-align:center;
  color:var(--gray);border:2px dashed var(--red-dark);
  background:transparent;
  font-size:0.8em;
}
.project-card.add-new:hover{color:var(--red);border-color:var(--red);box-shadow:0 0 14px rgba(224,32,43,0.3);}
@media (max-width:820px){.project-grid{grid-template-columns:repeat(auto-fill,minmax(120px,1fr));max-width:100%;}}
/* ---------- Galeria ---------- */
.gallery-filters{display:flex;gap:12px;margin-bottom:34px;flex-wrap:wrap;}
.filter-btn{
  background:transparent;border:1px solid var(--line);color:var(--gray);
  padding:10px 20px;font-size:0.85em;font-weight:600;cursor:pointer;
  font-family:inherit;transition:border-color .2s ease, color .2s ease, background .2s ease;
}
.filter-btn:hover{border-color:var(--red);color:var(--white);}
.filter-btn.active{background:var(--red);border-color:var(--red);color:var(--white);}
.gallery-grid{
  display:grid;grid-template-columns:repeat(auto-fill,minmax(240px,1fr));
  gap:18px;margin-bottom:40px;
}
.gallery-item{
  position:relative;overflow:hidden;border:1px solid var(--line);
  background:var(--panel);cursor:pointer;aspect-ratio:4/3;
}
.gallery-item img{width:100%;height:100%;object-fit:cover;display:block;transition:transform .4s ease;}
.gallery-item:hover img{transform:scale(1.06);}
.gallery-item .gallery-id{
  position:absolute;top:10px;left:10px;font-size:0.7em;color:var(--red);
  letter-spacing:1px;background:rgba(10,10,10,0.7);padding:3px 8px;z-index:1;
}
.gallery-item figcaption{
  position:absolute;left:0;right:0;bottom:0;
  background:linear-gradient(to top, rgba(10,10,10,0.92), transparent);
  color:var(--white);font-size:0.8em;padding:26px 14px 10px;
  opacity:0;transform:translateY(6px);
  transition:opacity .25s ease, transform .25s ease;
}
.gallery-item:hover figcaption{opacity:1;transform:translateY(0);}
.gallery-item.is-hidden{display:none;}
@media (max-width:820px){.gallery-grid{grid-template-columns:repeat(auto-fill,minmax(140px,1fr));}}
/* ---------- Lightbox ---------- */
.lightbox{
  position:fixed;inset:0;background:rgba(10,10,10,0.94);
  display:none;align-items:center;justify-content:center;
  z-index:50;padding:40px;
}
.lightbox.active{display:flex;}
.lightbox-content{max-width:900px;width:100%;}
.lightbox-content img{display:block;max-width:100%;max-height:76vh;margin:0 auto;border:1px solid var(--line);}
.lightbox-caption{color:var(--gray);text-align:center;margin-top:16px;font-size:0.9em;}
.lightbox-close,.lightbox-nav{
  position:absolute;border:1px solid var(--line);color:var(--white);
  display:flex;align-items:center;justify-content:center;cursor:pointer;
  background:rgba(20,20,20,0.6);transition:border-color .2s ease, color .2s ease;
}
.lightbox-close:hover,.lightbox-nav:hover{border-color:var(--red);color:var(--red);}
.lightbox-close{top:24px;right:28px;width:44px;height:44px;font-size:1.3em;}
.lightbox-nav{top:50%;transform:translateY(-50%);width:50px;height:50px;font-size:1.4em;}
.lightbox-prev{left:24px;}
.lightbox-next{right:24px;}
@media (max-width:600px){
  .lightbox{padding:16px;}
  .lightbox-nav{width:38px;height:38px;font-size:1.1em;}
  .lightbox-close{width:38px;height:38px;top:14px;right:14px;}
  .lightbox-prev{left:10px;}
  .lightbox-next{right:10px;}
}
/* ---------- Stats (sobre mi) ---------- */
.about-grid{display:grid;grid-template-columns:1fr 1.4fr;gap:60px;}
.stat-block{display:flex;flex-direction:column;gap:26px;}
.stat{border-left:3px solid var(--red);padding-left:18px;}
.stat .num{font-family:'Anton',sans-serif;font-size:2.2em;color:var(--white);}
.stat .label{color:var(--gray);font-size:0.9em;}
.about-text p{color:var(--gray);margin-bottom:16px;max-width:62ch;}
.about-text strong{color:var(--white);font-weight:600;}
/* ---------- Skills grid ---------- */
.skills-grid{
  display:grid;
  grid-template-columns:repeat(auto-fill,minmax(200px,1fr));
  gap:1px;
  background:var(--line);
  border:1px solid var(--line);
}
.skill{background:var(--panel);padding:22px;}
.skill .name{font-weight:600;margin-bottom:4px;}
.skill .desc{color:var(--gray);font-size:0.85em;}
/* ---------- Timeline ---------- */
.timeline{border-left:2px solid var(--line);padding-left:30px;display:flex;flex-direction:column;gap:36px;}
.timeline-item{position:relative;}
.timeline-item::before{
  content:"";position:absolute;left:-37px;top:4px;
  width:12px;height:12px;background:var(--red);
  clip-path:polygon(50% 0%,100% 50%,50% 100%,0% 50%);
}
.timeline-item .year{color:var(--red);font-size:0.85em;font-weight:600;margin-bottom:6px;}
.timeline-item h3{font-size:1.2em;text-transform:uppercase;margin-bottom:6px;}
.timeline-item p{color:var(--gray);max-width:60ch;}
/* ---------- Case files (obsoleto: reemplazado por .project-card) ---------- */
.feature-list{list-style:none;margin-bottom:18px;display:flex;flex-direction:column;gap:6px;}
.feature-list li{color:var(--gray);font-size:0.92em;padding-left:18px;position:relative;}
.feature-list li::before{content:"–";position:absolute;left:0;color:var(--red);}
/* ---------- Contacto ---------- */
.contact-grid{display:grid;grid-template-columns:1fr 1fr;gap:2px;background:var(--line);border:1px solid var(--line);margin-bottom:40px;}
.contact-row{background:var(--panel);padding:30px;display:flex;flex-direction:column;gap:8px;}
.contact-row .label{font-size:0.78em;color:var(--red);letter-spacing:1px;text-transform:uppercase;}
.contact-row .value{font-size:1.2em;font-weight:600;}
.contact-row .value:hover{color:var(--red);}
.availability{
  border:1px solid var(--line);padding:26px 30px;display:flex;align-items:center;gap:16px;margin-bottom:50px;
}
.availability .blip{width:10px;height:10px;background:var(--red);clip-path:polygon(50% 0%,100% 50%,50% 100%,0% 50%);flex-shrink:0;}
.availability p{color:var(--gray);}
.availability strong{color:var(--white);}
/* ---------- Footer ---------- */
footer{position:relative;padding:70px 0 50px;border-top:1px solid var(--line);margin-top:60px;}
.footer-grid{display:flex;justify-content:space-between;align-items:flex-end;flex-wrap:wrap;gap:30px;}
footer h2{font-size:clamp(1.8em,5vw,3em);text-transform:uppercase;max-width:10ch;}
footer h2 .accent{color:var(--red);}
.footer-links{display:flex;gap:20px;}
.footer-links a{
  width:46px;height:46px;border:1px solid var(--line);display:flex;align-items:center;justify-content:center;
  font-size:1.1em;transition:border-color .2s ease, color .2s ease;
}
.footer-links a:hover{border-color:var(--red);color:var(--red);}
.footer-bottom{margin-top:50px;display:flex;justify-content:space-between;color:var(--gray);font-size:0.85em;flex-wrap:wrap;gap:10px;}
/* ---------- Responsive ---------- */
@media (max-width:820px){
  .about-grid{grid-template-columns:1fr;}
  .doors{grid-template-columns:1fr;}
  .contact-grid{grid-template-columns:1fr;}
  nav{flex-direction:column;gap:14px;padding:20px;}
  .spider-web{width:38vw !important;max-width:150px !important;height:auto !important;}
}
a:focus-visible,.btn:focus-visible{outline:2px solid var(--red);outline-offset:3px;}
@media (prefers-reduced-motion:reduce){*{transition:none !important;}}
/* ---------- Ventanas / vistas conmutables (SPA de una sola pagina) ---------- */
.view{display:none;}
.view.active{display:block;animation:fadeIn .25s ease;}
@keyframes fadeIn{from{opacity:0;transform:translateY(6px);}to{opacity:1;transform:translateY(0);}}
@media (prefers-reduced-motion:reduce){.view.active{animation:none;}}
nav a[data-view]{cursor:pointer;background:none;border-top:none;border-left:none;border-right:none;font-family:inherit;}
/* ---------- Animaciones Sutiles ---------- */
.spider-web{animation:floatWeb 6s ease-in-out infinite;}
@keyframes floatWeb{0%,100%{transform:translateY(0px);}50%{transform:translateY(8px);}}
.spider-web .web-gray{animation:webGlow 3s ease-in-out infinite;}
@keyframes webGlow{0%,100%{opacity:0.6;}50%{opacity:1;filter:drop-shadow(0 0 8px rgba(224,32,43,0.3));}}
.btn-fill{transition:all .3s cubic-bezier(0.34,1.56,0.64,1);}
.btn-fill:hover{transform:translateY(-4px);box-shadow:0 12px 24px rgba(224,32,43,0.3);background:var(--red);}
.btn-line:hover{transform:translateY(-2px);box-shadow:0 8px 16px rgba(224,32,43,0.15);}
.door{position:relative;overflow:hidden;}
.door::before{content:'';position:absolute;top:0;left:-100%;width:100%;height:100%;background:linear-gradient(90deg,transparent,rgba(224,32,43,0.1),transparent);transition:left .6s ease;z-index:0;}
.door:hover::before{left:100%;}
.door *{position:relative;z-index:1;}
a.nav-links a{position:relative;}
.nav-links a::after{content:'';position:absolute;bottom:0;left:0;width:0;height:2px;background:var(--red);transition:width .3s ease;}
.nav-links a:hover::after{width:100%;}
/* ---------- Revelado al hacer scroll: aparece al bajar, desaparece al subir ---------- */
.reveal-up{opacity:0;transform:translateY(28px);transition:opacity .6s ease, transform .6s ease;}
.reveal-up.is-visible{opacity:1;transform:translateY(0);}
.reveal-left{opacity:0;transform:translateX(-24px);transition:opacity .6s ease, transform .6s ease;}
.reveal-left.is-visible{opacity:1;transform:translateX(0);}
.doors .door:nth-child(1){transition-delay:.05s;}
.doors .door:nth-child(2){transition-delay:.12s;}
.doors .door:nth-child(3){transition-delay:.19s;}
.skills-grid .skill:nth-child(1){transition-delay:0s;}
.skills-grid .skill:nth-child(2){transition-delay:.06s;}
.skills-grid .skill:nth-child(3){transition-delay:.12s;}
.skills-grid .skill:nth-child(4){transition-delay:.18s;}
.skills-grid .skill:nth-child(5){transition-delay:.24s;}
.skills-grid .skill:nth-child(6){transition-delay:.3s;}
.timeline-item:nth-child(1){transition-delay:.05s;}
.timeline-item:nth-child(2){transition-delay:.15s;}
.timeline-item:nth-child(3){transition-delay:.25s;}
.stat-block .stat:nth-child(1){transition-delay:.05s;}
.stat-block .stat:nth-child(2){transition-delay:.15s;}
.stat-block .stat:nth-child(3){transition-delay:.25s;}
.project-card:not(.add-new){position:relative;overflow:hidden;}
.project-card:not(.add-new)::after{content:'';position:absolute;top:0;left:-100%;width:100%;height:100%;background:linear-gradient(90deg,transparent,rgba(224,32,43,0.08),transparent);pointer-events:none;z-index:1;}
.project-card:not(.add-new):hover::after{animation:slideGlow .7s ease;}
@keyframes slideGlow{0%{left:-100%;}100%{left:100%;}}
@media (prefers-reduced-motion:reduce){.reveal-up,.reveal-left{opacity:1 !important;transform:none !important;transition:none !important;}}
