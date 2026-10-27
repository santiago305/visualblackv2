// Ported from the static site (content-creator.js). Runs once after the page has rendered.
export default function init() {
(() => {
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const $ = s => document.querySelector(s), $$ = s => [...document.querySelectorAll(s)];

  /* Rotating word: reels → marcas → comunidad → tendencia */
  const slin = $('.cc-rot .slin');
  if (slin && !reduce) {
    const n = slin.children.length - 1;
    const tl = gsap.timeline({ repeat: -1, delay: 2.6 });
    for (let i = 1; i <= n; i++) tl.to(slin, { yPercent: -100 / (n + 1) * i, duration: .8, ease: 'expo.inOut' }, '+=1.4');
    tl.set(slin, { yPercent: 0 });
  }

  /* Reels wall reacts to the mouse and to scroll speed */
  const wall = $('.cc-wall');
  if (wall && !reduce) {
    const qx = gsap.quickTo(wall, 'x', { duration: 1.2, ease: 'power3' }), qy = gsap.quickTo(wall, 'y', { duration: 1.2, ease: 'power3' });
    addEventListener('mousemove', e => { qx((e.clientX / innerWidth - .5) * -30); qy((e.clientY / innerHeight - .5) * -30); });
    gsap.from('.cc-wall .col', { yPercent: 30, opacity: 0, stagger: .15, duration: 1.8, ease: 'expo.out', delay: .4 });
    gsap.to(wall, { yPercent: -10, scale: 1.08, ease: 'none', scrollTrigger: { trigger: '.cc-hero', start: 'top top', end: 'bottom top', scrub: true } });
    $$('.cc-wall .col').forEach(c => {
      c.addEventListener('mouseenter', () => c.querySelector('.colin').style.animationPlayState = 'paused');
      c.addEventListener('mouseleave', () => c.querySelector('.colin').style.animationPlayState = 'running');
    });
  }

  /* Stories: pinned horizontal scroll with Instagram-style progress segments */
  const segs = $$('.segs b'), track = $('.st-track');
  const fillSegs = p => segs.forEach((s, i) => gsap.set(s, { scaleX: Math.min(1, Math.max(0, p * segs.length - i)) }));
  const mm = gsap.matchMedia();
  mm.add('(min-width: 901px)', () => {
    if (reduce) return;
    const dist = () => track.scrollWidth - innerWidth + 48;
    gsap.to(track, { x: () => -dist(), ease: 'none', scrollTrigger: { trigger: '.cc-stories', start: 'top top', end: () => '+=' + dist(), pin: '.cc-stories-pin', scrub: 1, invalidateOnRefresh: true, onUpdate: s => fillSegs(s.progress) } });
    gsap.from('.story', { y: 120, rotate: 4, opacity: 0, stagger: .08, duration: 1.3, ease: 'expo.out', scrollTrigger: { trigger: '.cc-stories', start: 'top 70%' } });
  });
  mm.add('(max-width: 900px)', () => {
    const onScroll = () => fillSegs(track.scrollLeft / Math.max(1, track.scrollWidth - track.clientWidth));
    track.addEventListener('scroll', onScroll, { passive: true });
    return () => track.removeEventListener('scroll', onScroll);
  });

  /* Magazine cover: tilts into place, follows the mouse */
  const cover = $('.cover');
  if (cover && !reduce) {
    gsap.fromTo(cover, { rotateY: -24, rotateX: 8, transformPerspective: 1200, scale: .9 }, { rotateY: 0, rotateX: 0, scale: 1, ease: 'none', scrollTrigger: { trigger: '.cc-cover-sec', start: 'top bottom', end: 'center center', scrub: true } });
    gsap.from('.cover-mast', { yPercent: 60, opacity: 0, duration: 1.4, ease: 'expo.out', scrollTrigger: { trigger: cover, start: 'top 70%' } });
    gsap.from('.cover-lines span, .cover-name', { x: -30, opacity: 0, stagger: .1, duration: 1.1, ease: 'expo.out', scrollTrigger: { trigger: cover, start: 'top 60%' } });
    gsap.from('.cover-txt > *', { y: 50, opacity: 0, stagger: .1, duration: 1.2, ease: 'expo.out', scrollTrigger: { trigger: '.cover-txt', start: 'top 70%' } });
    cover.addEventListener('mousemove', e => {
      const r = cover.getBoundingClientRect();
      gsap.to(cover, { rotateY: ((e.clientX - r.left) / r.width - .5) * 12, rotateX: -((e.clientY - r.top) / r.height - .5) * 12, duration: .6, ease: 'power3' });
    });
    cover.addEventListener('mouseleave', () => gsap.to(cover, { rotateY: 0, rotateX: 0, duration: 1, ease: 'elastic.out(1,.5)' }));
  }

  /* Scenes: one giant word per step while scrolling */
  const scenes = $$('.scene'), count = $('.sc-count b');
  if (scenes.length) {
    let cur = -1;
    const show = i => {
      if (i === cur) return;
      const prev = scenes[cur], next = scenes[i], down = i > cur;
      if (prev) gsap.to(prev, { opacity: 0, yPercent: down ? -12 : 12, filter: 'blur(8px)', duration: .6, ease: 'expo.inOut' });
      gsap.fromTo(next, { opacity: 0, yPercent: down ? 14 : -14, filter: 'blur(8px)' }, { opacity: 1, yPercent: 0, filter: 'blur(0px)', duration: .9, ease: 'expo.out' });
      if (!reduce) gsap.fromTo(next.querySelector('h3'), { letterSpacing: '.02em' }, { letterSpacing: '-.06em', duration: 1.2, ease: 'expo.out' });
      count.textContent = String(i + 1).padStart(2, '0');
      cur = i;
    };
    show(0);
    ScrollTrigger.create({ trigger: '.cc-scenes', start: 'top top', end: 'bottom bottom', onUpdate: s => {
      show(Math.min(scenes.length - 1, Math.floor(s.progress * scenes.length)));
      gsap.set('.sc-bar i', { scaleX: s.progress });
      gsap.set('.sc-bg', { scale: .3 + s.progress * 1.2 });
    } });
  }
})();

/* Editorial calendar: legend filters the month */
(() => {
  const cal = document.querySelector('.cal');
  if (!cal) return;
  const days = [...cal.querySelectorAll('.day')], legend = [...document.querySelectorAll('.lg')];
  let active = null;
  const apply = t => {
    cal.classList.toggle('filter', !!t);
    days.forEach(d => d.classList.toggle('hit', !!t && d.dataset.t === t));
    legend.forEach(l => l.classList.toggle('on', l.dataset.t === t));
  };
  legend.forEach(l => {
    l.addEventListener('mouseenter', () => { if (!active) apply(l.dataset.t); });
    l.addEventListener('mouseleave', () => { if (!active) apply(null); });
    l.addEventListener('click', () => { active = active === l.dataset.t ? null : l.dataset.t; apply(active); });
  });
  if (!matchMedia('(prefers-reduced-motion: reduce)').matches) {
    gsap.from(days, { scale: .6, opacity: 0, duration: .7, ease: 'back.out(2)', clearProps: 'opacity,transform', stagger: { each: .025, grid: [4, 7], from: 'start' }, scrollTrigger: { trigger: cal, start: 'top 80%' } });
    gsap.from('.cc-cal .cc-st-head > *, .cal-legend', { y: 40, opacity: 0, stagger: .1, duration: 1.1, ease: 'expo.out', scrollTrigger: { trigger: '.cc-cal', start: 'top 75%' } });
  }
})();

/* Creative territories: drag "Tu marca" across the map, see affinity and the closest territory */
(() => {
  const map = document.querySelector('.tmap');
  if (!map) return;
  const data = JSON.parse(map.dataset.terr), dots = [...map.querySelectorAll('.tr')], card = document.querySelector('.tcard');
  const pin = map.querySelector('.pin'), aff = document.getElementById('tAff');
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const $ = id => document.getElementById(id);
  let current = null, pos = { x: 50, y: 50 };

  aff.innerHTML = data.map(t => `<div class="af" data-k="${t.k}" style="--tc:${t.color}"><span>${t.name}</span><i><b></b></i><em>0%</em></div>`).join('');
  const bars = [...aff.querySelectorAll('.af')];

  const show = k => {
    if (k === current) return;
    current = k;
    const t = data.find(d => d.k === k);
    dots.forEach(d => d.classList.toggle('on', d.dataset.k === k));
    card.style.setProperty('--tc', t.color);
    $('tName').textContent = t.name; $('tIdea').textContent = t.idea; $('tDesc').textContent = t.desc; $('tHook').textContent = t.hook;
    $('tPal').innerHTML = t.pal.map(c => `<i style="background:${c}"></i>`).join('');
    $('tWords').innerHTML = t.words.map(w => `<span>${w}</span>`).join('');
    $('tFmts').innerHTML = t.fmts.map(w => `<span>${w}</span>`).join('');
    if (!reduce) gsap.fromTo(card.querySelectorAll('h3, .tc-idea, .tc-desc, .tc-row, .tc-hook'), { y: 8, opacity: .35 }, { y: 0, opacity: 1, stagger: .03, duration: .35, ease: 'power2.out', overwrite: true });
  };

  // affinity = inverse distance between the pin and each territory, normalised to 100%
  const update = () => {
    const w = data.map(t => 1 / Math.max(4, Math.hypot(t.x - pos.x, t.y - pos.y)) ** 2);
    const sum = w.reduce((a, b) => a + b, 0);
    let best = 0;
    w.forEach((v, i) => {
      const pct = Math.round(v / sum * 100);
      bars[i].querySelector('b').style.width = pct + '%';
      bars[i].querySelector('em').textContent = pct + '%';
      if (v > w[best]) best = i;
    });
    bars.forEach((b, i) => b.classList.toggle('top', i === best));
    dots.forEach((d, i) => d.style.setProperty('--near', (w[i] / sum).toFixed(3)));
    show(data[best].k);
  };
  const place = (x, y, animate) => {
    pos = { x: Math.min(94, Math.max(6, x)), y: Math.min(94, Math.max(6, y)) };
    if (animate && !reduce) gsap.to(pin, { left: pos.x + '%', top: pos.y + '%', duration: .7, ease: 'expo.out', onUpdate: () => {
      pos = { x: parseFloat(pin.style.left), y: parseFloat(pin.style.top) }; update();
    } });
    else { pin.style.left = pos.x + '%'; pin.style.top = pos.y + '%'; update(); }
  };
  const toPct = e => { const r = map.getBoundingClientRect(); return [(e.clientX - r.left) / r.width * 100, (e.clientY - r.top) / r.height * 100]; };

  // drag the pin
  let dragging = false;
  pin.addEventListener('pointerdown', e => { dragging = true; pin.setPointerCapture(e.pointerId); pin.classList.add('drag'); e.preventDefault(); });
  pin.addEventListener('pointermove', e => { if (dragging) place(...toPct(e)); });
  const end = () => { dragging = false; pin.classList.remove('drag'); };
  pin.addEventListener('pointerup', end); pin.addEventListener('pointercancel', end);
  // keyboard: arrows move the pin
  pin.addEventListener('keydown', e => {
    const d = { ArrowLeft: [-4, 0], ArrowRight: [4, 0], ArrowUp: [0, -4], ArrowDown: [0, 4] }[e.key];
    if (d) { e.preventDefault(); place(pos.x + d[0], pos.y + d[1]); }
  });
  // click on the map or on a territory moves the pin there
  map.addEventListener('click', e => {
    if (e.target.closest('.pin')) return;
    const tr = e.target.closest('.tr');
    if (tr) { const t = data.find(d => d.k === tr.dataset.k); place(t.x, t.y, true); }
    else place(...toPct(e), true);
  });
  // hovering a territory previews it
  dots.forEach(d => d.addEventListener('mouseenter', () => { if (!dragging) show(d.dataset.k); }));
  map.addEventListener('mouseleave', () => { if (!dragging) update(); });

  // bubbles lean toward the cursor
  if (!reduce) {
    dots.forEach((d, i) => gsap.fromTo(d, { '--fx': '0px', '--fy': '0px' }, { '--fx': (Math.random() * 12 - 6).toFixed(1) + 'px', '--fy': (Math.random() * 12 - 6).toFixed(1) + 'px', duration: 3 + i * .4, repeat: -1, yoyo: true, ease: 'sine.inOut' }));
    map.addEventListener('mousemove', e => {
      const [mx, my] = toPct(e);
      dots.forEach((d, i) => {
        const t = data[i], dx = mx - t.x, dy = my - t.y, dist = Math.hypot(dx, dy) || 1, f = Math.max(0, 1 - dist / 40) * 10;
        gsap.to(d, { '--tx': (dx / dist * f).toFixed(1) + 'px', '--ty': (dy / dist * f).toFixed(1) + 'px', duration: .6, ease: 'power3', overwrite: false });
      });
    });
    gsap.from('.cc-terr .cc-st-head > *', { y: 40, opacity: 0, stagger: .1, duration: 1.1, ease: 'expo.out', immediateRender: false, scrollTrigger: { trigger: '.cc-terr', start: 'top 75%' } });
  }

  document.getElementById('tCta').addEventListener('click', () => {
    const t = data.find(d => d.k === current), fm = document.getElementById('fm');
    if (fm) fm.value = `Hola, quiero definir el territorio creativo de mi marca. En el mapa salió: ${t.name} (${t.idea})`;
  });

  place(58, 40);
})();

}
