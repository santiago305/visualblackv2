// Ported from the static site (main.js). Runs once after the page has rendered.
export default function init() {
(() => {
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const $ = s => document.querySelector(s), $$ = s => [...document.querySelectorAll(s)];
  const yr = $('#yr'); if (yr) yr.textContent = new Date().getFullYear();
  gsap.registerPlugin(ScrollTrigger);

  /* Session helpers (page transitions) */
  const ss = {
    get(k) { try { return sessionStorage.getItem(k); } catch (e) { return null; } },
    set(k, v) { try { sessionStorage.setItem(k, v); } catch (e) {} },
    del(k) { try { sessionStorage.removeItem(k); } catch (e) {} }
  };

  /* Smooth scroll */
  let lenis = null;
  if (!reduce && window.Lenis) {
    lenis = new Lenis({ duration: 1.15, easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)) });
    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add(t => lenis.raf(t * 1000));
    gsap.ticker.lagSmoothing(0);
  }
  $$('a[href^="#"]').forEach(a => a.addEventListener('click', e => {
    const el = document.querySelector(a.getAttribute('href'));
    if (!el) return;
    e.preventDefault();
    document.body.classList.remove('menu-open');
    lenis ? lenis.scrollTo(el, { offset: 0, duration: 1.6 }) : el.scrollIntoView({ behavior: 'smooth' });
  }));

  /* Page transitions between the 4 pages */
  const curtain = $('#curtain');
  $$('a[href^="/"]').forEach(a => a.addEventListener('click', e => {
    if (e.metaKey || e.ctrlKey || a.target === '_blank' || reduce || !curtain) return;
    e.preventDefault();
    const color = a.dataset.color || getComputedStyle(document.body).getPropertyValue('--accent').trim() || '#111';
    ss.set('vbTransition', color);
    curtain.style.background = color;
    document.body.classList.remove('menu-open');
    gsap.fromTo(curtain, { scaleY: 0, transformOrigin: 'bottom' }, { scaleY: 1, duration: .7, ease: 'expo.inOut', onComplete: () => location.href = a.href });
  }));
  addEventListener('pageshow', e => { if (e.persisted && curtain) gsap.set(curtain, { scaleY: 0 }); });

  /* Mobile menu */
  const mb = $('.menu-btn'); if (mb) mb.addEventListener('click', () => document.body.classList.toggle('menu-open'));

  /* Nav hide on scroll + progress */
  // hide on a real scroll down, show on a real scroll up (ignores smooth-scroll jitter)
  let lastY = scrollY, anchorY = scrollY, dirDown = null;
  const nav = $('#nav'), prog = $('#progress');
  addEventListener('scroll', () => {
    const y = scrollY, down = y > lastY;
    if (down !== dirDown) { dirDown = down; anchorY = lastY; }
    if (nav) {
      if (y < 120 || document.body.classList.contains('menu-open')) nav.classList.remove('hide');
      else if (down && y - anchorY > 60) nav.classList.add('hide');
      else if (!down && anchorY - y > 30) nav.classList.remove('hide');
    }
    lastY = y;
    if (prog) prog.style.transform = `scaleX(${y / (document.documentElement.scrollHeight - innerHeight)})`;
  }, { passive: true });

  /* Nav adapts to what is underneath: light bar over light sections, dark bar over dark ones */
  if (nav) {
    const logo = nav.querySelector('.brand img');
    const lum = c => { const m = c.match(/[\d.]+/g); if (!m || (m[3] !== undefined && +m[3] < .5)) return null; const k = c.startsWith('color(') ? 1 : 255; return (0.299 * m[0] + 0.587 * m[1] + 0.114 * m[2]) / k; };
    let theme = '', ticking = false;
    const probe = () => {
      ticking = false;
      const nr = nav.querySelector('.in').getBoundingClientRect();
      // first real page element behind the bar (skip nav, loader, curtain, menu, cursor, invisible layers)
      let el = document.elementsFromPoint(innerWidth / 2, Math.max(8, nr.top + nr.height / 2)).find(e =>
        !e.closest('#nav, #loader, #curtain, #mobileMenu, .cursor, .cursor-label, #progress') && getComputedStyle(e).visibility !== 'hidden' && +getComputedStyle(e).opacity !== 0);
      let l = null;
      while (el && l === null) { l = lum(getComputedStyle(el).backgroundColor); el = el.parentElement; }
      const next = (l === null ? lum(getComputedStyle(document.body).backgroundColor) ?? 1 : l) > .5 ? 'light' : 'dark';
      if (next === theme) return;
      theme = next;
      nav.classList.toggle('on-light', theme === 'light');
      nav.classList.toggle('on-dark', theme === 'dark');
      if (logo) logo.src = logo.src.replace(/logo(-dark)?\.svg/, theme === 'light' ? 'logo.svg' : 'logo-dark.svg');
    };
    const queue = () => { if (!ticking) { ticking = true; setTimeout(probe, 60); } };
    addEventListener('scroll', queue, { passive: true });
    addEventListener('resize', queue);
    probe();
    setTimeout(probe, 400);
  }

  /* Cursor */
  const cur = $('.cursor'), lab = $('.cursor-label');
  if (cur && matchMedia('(hover:hover)').matches) {
    const qx = gsap.quickTo([cur, lab], 'x', { duration: .35, ease: 'power3' }), qy = gsap.quickTo([cur, lab], 'y', { duration: .35, ease: 'power3' });
    addEventListener('mousemove', e => { qx(e.clientX); qy(e.clientY); });
    $$('[data-cursor]').forEach(el => {
      el.addEventListener('mouseenter', () => { cur.classList.add('big'); lab.textContent = el.dataset.cursor; lab.style.opacity = 1; });
      el.addEventListener('mouseleave', () => { cur.classList.remove('big'); lab.style.opacity = 0; });
    });
  }

  /* Magnetic buttons */
  $$('.magnetic').forEach(b => {
    b.addEventListener('mousemove', e => {
      const r = b.getBoundingClientRect();
      gsap.to(b, { x: (e.clientX - r.left - r.width / 2) * .3, y: (e.clientY - r.top - r.height / 2) * .4, duration: .6, ease: 'power3' });
    });
    b.addEventListener('mouseleave', () => gsap.to(b, { x: 0, y: 0, duration: .9, ease: 'elastic.out(1,.4)' }));
  });

  /* Spotlight on service cards */
  $$('.svc, .choose a').forEach(c => c.addEventListener('mousemove', e => {
    const r = c.getBoundingClientRect();
    c.style.setProperty('--mx', (e.clientX - r.left) + 'px');
    c.style.setProperty('--my', (e.clientY - r.top) + 'px');
  }));

  /* Colors for canvases come from <body data-orbs="r,g,b;r,g,b;r,g,b"> */
  const palette = (document.body.dataset.orbs || '255,122,26;166,107,255;58,214,255').split(';');

  /* Hero orbs canvas */
  const cv = $('#orbs');
  if (cv) {
    const ctx = cv.getContext('2d');
    let W, H, mx = .5, my = .5, heroVisible = true;
    const pos = [[.25, .35, .38, .0007, 0], [.7, .3, .34, .0009, 2], [.55, .75, .4, .0006, 4]];
    const orbs = pos.map((p, i) => ({ c: palette[i % palette.length], x: p[0], y: p[1], r: p[2], s: p[3], p: p[4] }));
    const size = () => { const d = Math.min(devicePixelRatio, 2); W = cv.width = cv.offsetWidth * d; H = cv.height = cv.offsetHeight * d; };
    size(); addEventListener('resize', size);
    addEventListener('mousemove', e => { mx = e.clientX / innerWidth; my = e.clientY / innerHeight; });
    ScrollTrigger.create({ trigger: '.hero', start: 'top top', end: 'bottom top', onToggle: s => heroVisible = s.isActive });
    const drawOrbs = t => {
      if (heroVisible) {
        ctx.clearRect(0, 0, W, H);
        ctx.globalCompositeOperation = 'lighter';
        orbs.forEach((o, i) => {
          const x = (o.x + Math.sin(t * o.s + o.p) * .08 + (mx - .5) * .08 * (i + 1)) * W;
          const y = (o.y + Math.cos(t * o.s * 1.3 + o.p) * .08 + (my - .5) * .06 * (i + 1)) * H;
          const r = o.r * Math.max(W, H);
          const g = ctx.createRadialGradient(x, y, 0, x, y, r);
          g.addColorStop(0, `rgba(${o.c},.38)`); g.addColorStop(.5, `rgba(${o.c},.08)`); g.addColorStop(1, `rgba(${o.c},0)`);
          ctx.fillStyle = g; ctx.fillRect(0, 0, W, H);
        });
      }
      if (!reduce) requestAnimationFrame(drawOrbs);
    };
    requestAnimationFrame(drawOrbs);
  }

  /* Waves canvas inside expand card */
  const wv = $('#waves');
  if (wv) {
    const wx = wv.getContext('2d');
    const wsize = () => { const d = Math.min(devicePixelRatio, 2); wv.width = wv.offsetWidth * d; wv.height = wv.offsetHeight * d; };
    wsize(); new ResizeObserver(wsize).observe(wv);
    const drawWaves = t => {
      const w = wv.width, h = wv.height;
      wx.clearRect(0, 0, w, h);
      palette.forEach((c, k) => {
        for (let j = 0; j < 6; j++) {
          wx.beginPath();
          for (let x = 0; x <= w; x += 8) {
            const y = h * (.5 + (k - 1) * .12) + Math.sin(x * .004 + t * .0006 * (k + 1) + j * .35) * h * .09 * (1 + j * .12) + Math.cos(x * .011 + t * .0004) * h * .02;
            x ? wx.lineTo(x, y) : wx.moveTo(x, y);
          }
          wx.strokeStyle = `rgba(${c},${.32 - j * .045})`; wx.lineWidth = 1.4 * (devicePixelRatio || 1); wx.stroke();
        }
      });
      if (!reduce) requestAnimationFrame(drawWaves);
    };
    requestAnimationFrame(drawWaves);
  }

  /* Home hero rings: three departments that overlap, then merge into one on scroll */
  const rings = $('#rings');
  let ringsIn = () => {};
  if (rings) {
    const groups = [...rings.querySelectorAll('.ring')], pars = [...rings.querySelectorAll('.par')];
    const R = 235, outer = rings.querySelector('.outer'), core = rings.querySelector('.core');
    const lines = [...groups.map(g => g.querySelector('circle:not(.dot)')), rings.querySelector('.outer2')];
    const dots = groups.map((g, i) => ({ el: g.querySelector('.dot'), a: -Math.PI / 2 + i * 2.1, v: (i % 2 ? -1 : 1) * (.0032 + i * .0007) }));
    let boost = 0;
    const placeDots = () => dots.forEach(d => { d.el.setAttribute('cx', Math.cos(d.a) * R); d.el.setAttribute('cy', Math.sin(d.a) * R); });
    gsap.set(rings, { xPercent: -50, yPercent: -50, x: 0, y: 0 });
    groups.forEach(g => gsap.set(g, { x: +g.dataset.x, y: +g.dataset.y }));
    placeDots();
    if (!reduce) {
      gsap.ticker.add(() => { dots.forEach(d => d.a += d.v * (1 + boost)); boost *= .96; placeDots(); });
      gsap.to(outer, { rotation: 360, svgOrigin: '0 0', duration: 140, repeat: -1, ease: 'none' });
      gsap.to(core, { scale: 2, transformOrigin: '50% 50%', duration: 1.6, repeat: -1, yoyo: true, ease: 'sine.inOut' });
      // depth parallax: each ring follows the mouse at its own distance
      const depth = [26, 40, 54];
      const qs = pars.map(p => [gsap.quickTo(p, 'x', { duration: 1.4, ease: 'power3' }), gsap.quickTo(p, 'y', { duration: 1.4, ease: 'power3' })]);
      addEventListener('mousemove', e => {
        const dx = e.clientX / innerWidth - .5, dy = e.clientY / innerHeight - .5;
        qs.forEach((q, i) => { q[0](dx * depth[i]); q[1](dy * depth[i]); });
      });
      // hovering a department chip lights up its ring
      $$('[data-ring]').forEach(ch => {
        const g = groups[+ch.dataset.ring];
        ch.addEventListener('mouseenter', () => { g.classList.add('on'); boost = 4; gsap.to(g, { scale: 1.04, svgOrigin: `${g.dataset.x} ${g.dataset.y}`, duration: .8, ease: 'expo.out' }); });
        ch.addEventListener('mouseleave', () => { g.classList.remove('on'); gsap.to(g, { scale: 1, duration: .8, ease: 'expo.out' }); });
      });
      // scroll: three minds -> one vision
      gsap.timeline({ scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: 1 } })
        .fromTo(groups, { x: i => +groups[i].dataset.x, y: i => +groups[i].dataset.y }, { x: 0, y: 0, ease: 'power2.inOut', immediateRender: false }, 0)
        .to(rings, { scale: 1.25, opacity: 0, ease: 'power1.in' }, 0);
    }
    ringsIn = (tl, pos) => {
      lines.forEach(c => { const L = 2 * Math.PI * c.r.baseVal.value; gsap.set(c, { strokeDasharray: L, strokeDashoffset: L }); });
      tl.to(lines, { strokeDashoffset: 0, duration: 2.2, ease: 'power3.inOut', stagger: .12 }, pos)
        .from(groups, { x: 0, y: 0, duration: 2, ease: 'expo.out', stagger: .08 }, '<.5')
        .from([outer, core, ...dots.map(d => d.el)], { opacity: 0, duration: 1.4, stagger: .05 }, '<.3')
        .add(() => { boost = 8; }, '<');
    };
  }

  /* Intro: full loader on first visit, curtain reveal when arriving from another page */
  const heroIn = tl => {
    tl.from('.hero h1 .line-mask>span', { yPercent: 110, duration: 1.3, stagger: .12, ease: 'expo.out' });
    ringsIn(tl, '<-.2');
    tl.from('.h-fade', { opacity: 0, y: 24, duration: 1, stagger: .08, ease: 'power3.out' }, '<.3');
    if ($('.hero-n')) tl.from('.hero-n', { yPercent: 25, opacity: 0, duration: 1.8, ease: 'expo.out' }, '<');
    return tl;
  };
  const loader = $('#loader'), arrived = ss.get('vbTransition');
  ss.del('vbTransition');
  if (reduce) {
    if (loader) loader.style.display = 'none';
  } else if (arrived && curtain) {
    if (loader) loader.style.display = 'none';
    curtain.style.background = arrived;
    gsap.set(curtain, { scaleY: 1 });
    const tl = gsap.timeline();
    tl.to(curtain, { scaleY: 0, transformOrigin: 'top', duration: .9, ease: 'expo.inOut' });
    heroIn(tl);
  } else if (loader) {
    const tl = gsap.timeline();
    tl.to('#loader .logo span', { y: 0, duration: .9, ease: 'expo.out' })
      .to('#loader .bar i', { scaleX: 1, duration: 1.2, ease: 'power2.inOut', onUpdate() { $('#loader .count').textContent = String(Math.round(this.progress() * 100)).padStart(3, '0'); } }, '-=.4')
      .to('#loader .lw', { opacity: 0, y: -20, duration: .5 })
      .to('#loader', { clipPath: 'inset(0 0 100% 0)', duration: 1, ease: 'expo.inOut' }, '-=.2')
      .set('#loader', { display: 'none' });
    heroIn(tl);
  }

  if (reduce) { $$('[data-count]').forEach(el => el.textContent = (el.dataset.prefix || '') + el.dataset.count + (el.dataset.suffix || '')); return; }

  /* Hero scroll out */
  if ($('.hero-n')) gsap.to('.hero-n', { yPercent: -30, ease: 'none', scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: true } });
  if ($('.hero')) gsap.to('.hero-content', { scale: .86, opacity: 0, yPercent: -12, ease: 'none', scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: true } });

  /* Expand card (Apple-like) */
  if ($('#expandCard')) {
    gsap.timeline({ scrollTrigger: { trigger: '.expand', start: 'top top', end: 'bottom bottom', scrub: 1 } })
      .fromTo('#expandCard', { width: () => Math.min(560, innerWidth * .8), borderRadius: 32 }, { width: () => innerWidth, height: () => innerHeight, aspectRatio: 'auto', borderRadius: 0, ease: 'power2.inOut', duration: 1 })
      .fromTo('#expandCard .txt h2', { scale: .7 }, { scale: 1, duration: 1 }, 0)
      .to('#expandCard .txt p', { opacity: 1, y: 0, duration: .4 }, .6);
  }

  /* Manifesto word reveal */
  const man = $('#manifesto');
  if (man) {
    [...man.childNodes].forEach(n => {
      if (n.nodeType === 3) {
        const frag = document.createDocumentFragment();
        n.textContent.split(/(\s+)/).forEach(p => {
          if (!p.trim()) { frag.append(p); return; }
          const s = document.createElement('span'); s.className = 'w'; s.textContent = p; frag.append(s);
        });
        n.replaceWith(frag);
      } else if (n.nodeType === 1) n.classList.add('w');
    });
    gsap.to(man.querySelectorAll('.w'), { opacity: 1, stagger: .05, ease: 'none', scrollTrigger: { trigger: man, start: 'top 75%', end: 'bottom 45%', scrub: true } });
  }

  /* Department illustrations */
  function deptViz(p, st) {
    const path = p.querySelector('.draw');
    if (path) {
      const L = path.getTotalLength(); gsap.set(path, { strokeDasharray: L, strokeDashoffset: L });
      gsap.timeline({ scrollTrigger: st, delay: .3 })
        .from(p.querySelectorAll('.barv'), { scaleY: 0, transformOrigin: 'bottom', stagger: .08, duration: .8, ease: 'expo.out' })
        .to(path, { strokeDashoffset: 0, duration: 1.6, ease: 'power2.inOut' }, '<.2')
        .from(p.querySelectorAll('.pop'), { scale: 0, transformOrigin: 'center', stagger: .2, ease: 'back.out(3)' }, '<.6');
    }
    if (p.querySelector('.phones')) {
      gsap.from(p.querySelectorAll('.phones > *'), { y: 30, opacity: 0, stagger: .05, duration: .9, ease: 'expo.out', scrollTrigger: st, delay: .3 });
      gsap.to(p.querySelectorAll('.heart'), { y: -18, repeat: -1, yoyo: true, duration: 1.4, stagger: .5, ease: 'sine.inOut' });
    }
    if (p.querySelector('.code')) {
      gsap.from(p.querySelectorAll('.code text'), { opacity: 0, x: -8, stagger: .06, duration: .4, scrollTrigger: st, delay: .3 });
      gsap.fromTo(p.querySelector('.load'), { scaleX: 0 }, { scaleX: 1, transformOrigin: 'left', duration: 2.4, ease: 'power2.inOut', scrollTrigger: st, delay: .8 });
      gsap.to(p.querySelector('.caret'), { opacity: 0, repeat: -1, yoyo: true, duration: .5, ease: 'steps(1)' });
    }
  }

  /* Horizontal departments (home) */
  const mm = gsap.matchMedia();
  if ($('.depts .track')) {
    mm.add('(min-width: 901px)', () => {
      const track = $('.depts .track');
      const hz = gsap.to(track, { x: () => -(track.scrollWidth - innerWidth), ease: 'none',
        scrollTrigger: { trigger: '.depts', start: 'top top', end: () => '+=' + (track.scrollWidth - innerWidth), pin: true, scrub: 1, invalidateOnRefresh: true, anticipatePin: 1 } });
      gsap.utils.toArray('.panel:not(.intro)').forEach(p => {
        const st = { trigger: p, containerAnimation: hz, start: 'left 75%', toggleActions: 'play none none reverse' };
        gsap.from(p.querySelectorAll('.tag,h3,.lead,li,.link'), { y: 50, opacity: 0, stagger: .06, duration: 1, ease: 'expo.out', scrollTrigger: st });
        gsap.from(p.querySelector('.dept-visual'), { scale: .85, rotate: 4, opacity: 0, duration: 1.4, ease: 'expo.out', scrollTrigger: st });
        gsap.fromTo(p.querySelector('.big-n'), { xPercent: 30 }, { xPercent: -20, ease: 'none', scrollTrigger: { trigger: p, containerAnimation: hz, start: 'left right', end: 'right left', scrub: true } });
        deptViz(p, st);
      });
    });
    mm.add('(max-width: 900px)', () => {
      gsap.utils.toArray('.panel:not(.intro)').forEach(p => {
        const st = { trigger: p, start: 'top 70%' };
        gsap.from(p.querySelectorAll('.tag,h3,.lead,li,.link,.dept-visual'), { y: 40, opacity: 0, stagger: .06, duration: 1, ease: 'expo.out', scrollTrigger: st });
        deptViz(p, st);
      });
    });
  }
  /* Illustration inside the expand card (department pages) */
  const exViz = $('#expandCard .viz');
  if (exViz) deptViz(exViz, { trigger: '.expand', start: 'top 60%' });

  /* Services */
  if ($('.services')) {
    gsap.from('.svc-head > *', { y: 50, opacity: 0, stagger: .1, duration: 1.2, ease: 'expo.out', scrollTrigger: { trigger: '.services', start: 'top 70%' } });
    $$('.svc').forEach(c => {
      gsap.from(c, { y: 90, opacity: 0, rotateX: -12, transformPerspective: 1000, transformOrigin: 'center top', duration: 1.3, ease: 'expo.out', scrollTrigger: { trigger: c, start: 'top 88%' } });
      gsap.from(c.querySelectorAll('.tags span'), { opacity: 0, y: 10, stagger: .05, duration: .6, scrollTrigger: { trigger: c, start: 'top 75%' } });
    });
  }

  /* Choose-a-department cards (home) */
  if ($('.choose')) gsap.from('.choose a', { y: 120, opacity: 0, stagger: .12, duration: 1.4, ease: 'expo.out', scrollTrigger: { trigger: '.choose', start: 'top 75%' } });

  /* Leaders */
  gsap.utils.toArray('.leader').forEach(sec => {
    gsap.to(sec.querySelector('.portrait'), { clipPath: 'inset(0% 0% 0% 0% round 32px)', ease: 'none', scrollTrigger: { trigger: sec, start: 'top 85%', end: 'center 55%', scrub: true } });
    gsap.to(sec.querySelector('.ph'), { yPercent: 10, ease: 'none', scrollTrigger: { trigger: sec, start: 'top bottom', end: 'bottom top', scrub: true } });
    gsap.from(sec.querySelectorAll('.role, h2, blockquote, .bio, .creds'), { y: 60, opacity: 0, stagger: .1, duration: 1.2, ease: 'expo.out', scrollTrigger: { trigger: sec, start: 'top 60%' } });
    gsap.fromTo(sec.querySelector('.glow'), { scale: .6, opacity: 0 }, { scale: 1, opacity: 1, ease: 'none', scrollTrigger: { trigger: sec, start: 'top bottom', end: 'center center', scrub: true } });
    if (sec.dataset.bg) ScrollTrigger.create({ trigger: sec, start: 'top 50%', end: 'bottom 50%',
      onToggle: s => { const bg = s.isActive ? sec.dataset.bg : ''; document.body.style.backgroundColor = bg; $$('.creds div').forEach(d => d.style.backgroundColor = bg); } });
  });

  /* Counters */
  $$('[data-count]').forEach(el => {
    const o = { v: 0 }, end = +el.dataset.count, pre = el.dataset.prefix || '', suf = el.dataset.suffix || '';
    gsap.to(o, { v: end, duration: 2.2, ease: 'expo.out', scrollTrigger: { trigger: el, start: 'top 98%' }, onUpdate: () => el.textContent = pre + Math.round(o.v) + suf });
  });
  if ($('.stats')) gsap.from('.stat', { y: 60, opacity: 0, stagger: .12, duration: 1.2, ease: 'expo.out', scrollTrigger: { trigger: '.stats', start: 'top 70%' } });

  /* Marquee: velocity-reactive */
  const mq = $('#mq');
  if (mq) {
    let mqX = 0, dir = -1, speed = 1;
    ScrollTrigger.create({ trigger: '.marquee', start: 'top bottom', end: 'bottom top', onUpdate: s => { dir = s.direction === 1 ? -1 : 1; speed = 1 + Math.min(Math.abs(s.getVelocity()) / 300, 8); } });
    gsap.ticker.add(() => {
      const half = mq.scrollWidth / 2;
      mqX += dir * speed; speed += (1 - speed) * .05;
      if (mqX <= -half) mqX += half; if (mqX > 0) mqX -= half;
      mq.style.transform = `translate3d(${mqX}px,0,0)`;
    });
  }

  /* Process stacking cards */
  const steps = gsap.utils.toArray('.step');
  steps.forEach((s, i) => {
    if (i === steps.length - 1) return;
    gsap.to(s, { scale: .9 - (steps.length - i) * .01, filter: 'brightness(.35)', ease: 'none',
      scrollTrigger: { trigger: steps[i + 1], start: 'top bottom', end: 'top 14%', scrub: true } });
  });
  if ($('.process')) gsap.from('.process .head > *', { y: 50, opacity: 0, stagger: .1, duration: 1.2, ease: 'expo.out', scrollTrigger: { trigger: '.process', start: 'top 70%' } });

  /* Work: reveal + tilt */
  $$('.proj').forEach(p => {
    gsap.from(p, { y: 120, opacity: 0, duration: 1.4, ease: 'expo.out', scrollTrigger: { trigger: p, start: 'top 90%' } });
    p.addEventListener('mousemove', e => {
      const r = p.getBoundingClientRect(), x = (e.clientX - r.left) / r.width - .5, y = (e.clientY - r.top) / r.height - .5;
      gsap.to(p, { rotateY: x * 8, rotateX: -y * 8, transformPerspective: 900, duration: .6, ease: 'power3' });
    });
    p.addEventListener('mouseleave', () => gsap.to(p, { rotateY: 0, rotateX: 0, duration: 1, ease: 'elastic.out(1,.5)' }));
  });
  if ($('.work')) gsap.from('.work h2, .work .eyebrow', { y: 50, opacity: 0, stagger: .1, duration: 1.2, ease: 'expo.out', scrollTrigger: { trigger: '.work', start: 'top 70%' } });

  /* Other departments (department pages) */
  if ($('.others')) gsap.from('.others a', { y: 100, opacity: 0, stagger: .12, duration: 1.3, ease: 'expo.out', scrollTrigger: { trigger: '.others', start: 'top 75%' } });

  /* Contact */
  if ($('.contact')) gsap.from('.contact .top > *, .form > *', { y: 60, opacity: 0, stagger: .08, duration: 1.2, ease: 'expo.out', scrollTrigger: { trigger: '.contact', start: 'top 65%' } });

  /* Footer giant logo */
  gsap.from('footer .giant', { yPercent: 40, opacity: 0, ease: 'none', scrollTrigger: { trigger: 'footer', start: 'top bottom', end: 'bottom bottom', scrub: true } });

  addEventListener('load', () => ScrollTrigger.refresh());
})();

/* Form → WhatsApp (same number as visualblack.es) */
const WHATSAPP = '51939780945';
const vbForm = document.getElementById('form');
if (vbForm) vbForm.addEventListener('submit', e => {
  e.preventDefault();
  const deps = [...document.querySelectorAll('input[name=d]:checked')].map(i => i.value).join(', ') || 'General';
  const n = document.getElementById('fn').value.trim(), em = document.getElementById('fe').value.trim(), m = document.getElementById('fm').value.trim();
  const text = [`Hola visualblack, soy ${n}.`, `Departamento: ${deps}`, em && `Email: ${em}`, m && `\n${m}`].filter(Boolean).join('\n');
  const url = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(text)}`;
  const win = window.open(url, '_blank');
  if (win) win.opener = null; else location.href = url;
});

}
