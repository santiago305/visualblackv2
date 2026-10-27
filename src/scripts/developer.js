// Ported from the static site (developer.js). Runs once after the page has rendered.
export default function init() {
(() => {
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const $ = s => document.querySelector(s), $$ = s => [...document.querySelectorAll(s)];
  const wait = ms => new Promise(r => setTimeout(r, ms));
  const esc = s => s.replace(/[&<>]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;' }[c]));

  /* Blueprint grid lights up around the cursor */
  const hero = $('.d-hero');
  if (hero) hero.addEventListener('mousemove', e => {
    const r = hero.getBoundingClientRect();
    $$('.d-grid.glow').forEach(g => { g.style.setProperty('--mx', (e.clientX - r.left) + 'px'); g.style.setProperty('--my', (e.clientY - r.top) + 'px'); });
  });

  /* Text scramble on the accent word */
  const chars = '!<>-_\\/[]{}—=+*^?#01';
  const scramble = el => {
    const text = el.dataset.text; let frame = 0;
    const queue = [...text].map((c, i) => ({ c, start: Math.floor(Math.random() * 12), end: 12 + Math.floor(Math.random() * 18) + i }));
    const tick = () => {
      let done = 0;
      el.innerHTML = queue.map(q => {
        if (frame >= q.end) { done++; return q.c; }
        if (frame >= q.start) return `<span style="opacity:.55">${chars[Math.floor(Math.random() * chars.length)]}</span>`;
        return '';
      }).join('');
      frame++;
      if (done < queue.length) requestAnimationFrame(tick);
    };
    tick();
  };
  const sc = $('.scramble');
  if (sc && !reduce) {
    setTimeout(() => scramble(sc), $('#loader') && getComputedStyle($('#loader')).display !== 'none' ? 2600 : 900);
    sc.addEventListener('mouseenter', () => scramble(sc));
  }

  /* Terminal that types, line by line */
  async function typeLines(pre, lines, { speed = 18, loop = false } = {}) {
    do {
      pre.innerHTML = '';
      for (const [txt, cls] of lines) {
        const line = document.createElement('span');
        if (cls) line.className = cls;
        pre.appendChild(line);
        const cur = document.createElement('span'); cur.className = 'cur';
        pre.appendChild(cur);
        if (txt.startsWith('$') || txt.startsWith('>')) {
          for (let i = 1; i <= txt.length; i++) { line.textContent = txt.slice(0, i); await wait(reduce ? 0 : speed + Math.random() * 40); }
          await wait(reduce ? 0 : 300);
        } else { line.innerHTML = esc(txt); await wait(reduce ? 0 : 160); }
        cur.remove();
        pre.appendChild(document.createTextNode('\n'));
      }
      const cur = document.createElement('span'); cur.className = 'cur'; pre.appendChild(cur);
      if (loop) await wait(4200);
    } while (loop && !reduce);
  }
  const term = $('#termOut');
  if (term) {
    const L = [
      ['$ npx visualblack create tu-marca', ''],
      ['  Analizando objetivos del negocio…', 'm'],
      ['  ✓ Arquitectura y UX definidas', 'g'],
      ['  ✓ Diseño a medida de tu marca', 'g'],
      ['  ✓ Pasarela de pagos integrada', 'g'],
      ['  ✓ Automatización con IA activa', 'g'],
      ['$ visualblack deploy --prod', ''],
      ['  Optimizando imágenes y código…', 'm'],
      ['  ✓ Rendimiento optimizado', 'g'],
      ['  → https://tumarca.com está online', 'c'],
    ];
    setTimeout(() => typeLines(term, L, { loop: true }), reduce ? 0 : 2400);
  }
  const who = $('#whoOut');
  if (who) {
    const lines = JSON.parse(who.dataset.lines);
    ScrollTrigger.create({ trigger: who, start: 'top 75%', once: true, onEnter: () => typeLines(who, lines, { speed: 30 }) });
  }

  /* Bento spotlight */
  $$('.bento').forEach(c => c.addEventListener('mousemove', e => {
    const r = c.getBoundingClientRect();
    c.style.setProperty('--mx', (e.clientX - r.left) + 'px'); c.style.setProperty('--my', (e.clientY - r.top) + 'px');
  }));

  if (reduce) {
    gsap.set('.ds', { clipPath: 'inset(0 0% 0 0)' });
    $$('.g-fg').forEach(c => { const L = 2 * Math.PI * c.r.baseVal.value; c.style.strokeDasharray = L; c.style.strokeDashoffset = 0; });
    return;
  }

  /* Bento reveal + looping micro-animations */
  gsap.from('.bento', { y: 80, opacity: 0, stagger: .08, duration: 1.2, ease: 'expo.out', scrollTrigger: { trigger: '.bento-grid', start: 'top 80%' } });
  const loopWhenVisible = (el, tl) => ScrollTrigger.create({ trigger: el, start: 'top bottom', end: 'bottom top', onToggle: s => s.isActive ? tl.play() : tl.pause() });
  const bento = $$('.bento');
  if (bento[0]) loopWhenVisible(bento[0], gsap.timeline({ repeat: -1, repeatDelay: 1, paused: true })
    .from(bento[0].querySelectorAll('.bk'), { scaleX: 0, opacity: 0, stagger: .12, duration: .6, ease: 'expo.out' })
    .to(bento[0].querySelectorAll('.bk'), { opacity: 0, duration: .4, delay: 1.6 }));
  if (bento[1]) loopWhenVisible(bento[1], gsap.timeline({ repeat: -1, repeatDelay: .8, paused: true })
    .from(bento[1].querySelectorAll('.fn i'), { scaleX: 0, stagger: .18, duration: .8, ease: 'expo.out' })
    .to(bento[1].querySelectorAll('.fn i'), { opacity: .2, duration: .4, delay: 1.4 }));
  if (bento[2]) {
    const price = bento[2].querySelector('.price b'), o = { v: 0 };
    loopWhenVisible(bento[2], gsap.timeline({ repeat: -1, repeatDelay: 1, paused: true })
      .fromTo(bento[2].querySelector('svg'), { x: -40, opacity: 0 }, { x: 0, opacity: 1, duration: .8, ease: 'expo.out' })
      .fromTo(o, { v: 0 }, { v: 249, duration: 1, ease: 'power2.out', onUpdate: () => price.textContent = Math.round(o.v) }, '<')
      .fromTo(bento[2].querySelector('.pill'), { scale: 0 }, { scale: 1, duration: .6, ease: 'back.out(3)' })
      .to([bento[2].querySelector('svg'), bento[2].querySelector('.pill')], { opacity: 0, duration: .4, delay: 1.5 }));
  }
  if (bento[3]) {
    const bars = bento[3].querySelectorAll('.dbars i'), path = bento[3].querySelector('.dline path'), L = path.getTotalLength();
    gsap.set(path, { strokeDasharray: L, strokeDashoffset: L });
    const tl = gsap.timeline({ repeat: -1, paused: true })
      .to(bars, { height: () => 20 + Math.random() * 75 + '%', stagger: .03, duration: .9, ease: 'expo.out' })
      .to(path, { strokeDashoffset: 0, duration: 1.4, ease: 'power2.inOut' }, '<')
      .to(path, { strokeDashoffset: -L, duration: 1, ease: 'power2.in', delay: 1 });
    tl.eventCallback('onRepeat', () => tl.invalidate());
    loopWhenVisible(bento[3], tl);
  }
  if (bento[4]) loopWhenVisible(bento[4], gsap.timeline({ repeat: -1, repeatDelay: 1.2, paused: true })
    .fromTo(bento[4].querySelectorAll('.msg, .typing'), { y: 14, opacity: 0 }, { y: 0, opacity: 1, stagger: .7, duration: .5, ease: 'back.out(2)' })
    .to(bento[4].querySelectorAll('.msg, .typing'), { opacity: 0, duration: .4, delay: 1.6 }));
  if (bento[5]) {
    const c = bento[5].querySelector('.g-fg'), L = 2 * Math.PI * 50, b = bento[5].querySelector('.gauge b'), o = { v: 0 };
    gsap.set(c, { strokeDasharray: L, strokeDashoffset: L });
    loopWhenVisible(bento[5], gsap.timeline({ repeat: -1, repeatDelay: 1.4, paused: true })
      .to(c, { strokeDashoffset: 0, duration: 1.8, ease: 'expo.out' })
      .fromTo(o, { v: 0 }, { v: 100, duration: 1.8, ease: 'expo.out', onUpdate: () => b.textContent = Math.round(o.v) }, '<')
      .to(c, { strokeDashoffset: L, duration: .6, ease: 'power2.in', delay: 1.2 }));
  }

  /* Build: wireframe → design, scrubbed and pinned */
  const steps = $$('.d-build-steps span');
  const mm = gsap.matchMedia();
  const buildTl = () => gsap.timeline()
    .set('.scan', { opacity: 1 })
    .fromTo('.ds', { clipPath: 'inset(0 100% 0 0)' }, { clipPath: 'inset(0 0% 0 0)', ease: 'none', duration: 1 })
    .fromTo('.scan', { left: '0%' }, { left: '100%', ease: 'none', duration: 1 }, 0)
    .to('.scan', { opacity: 0, duration: .05 });
  const stepOn = p => steps.forEach((s, i) => s.classList.toggle('on', i === Math.min(steps.length - 1, Math.floor(p * steps.length))));
  mm.add('(min-width: 901px)', () => {
    const tl = buildTl();
    ScrollTrigger.create({ trigger: '.d-build', start: 'top top', end: '+=150%', pin: '.d-build-pin', scrub: .6, animation: tl, onUpdate: s => stepOn(s.progress) });
  });
  mm.add('(max-width: 900px)', () => {
    const tl = buildTl();
    ScrollTrigger.create({ trigger: '.bmock', start: 'top 80%', end: 'bottom 30%', scrub: .6, animation: tl, onUpdate: s => stepOn(s.progress) });
  });

  /* Lighthouse gauges */
  $$('.lh .g-fg').forEach(c => {
    const L = 2 * Math.PI * c.r.baseVal.value;
    gsap.fromTo(c, { strokeDasharray: L, strokeDashoffset: L }, { strokeDashoffset: 0, duration: 2.2, ease: 'expo.out', scrollTrigger: { trigger: '.lh-row', start: 'top 80%' } });
  });
  gsap.from('.lh', { y: 40, opacity: 0, stagger: .1, duration: 1, ease: 'expo.out', scrollTrigger: { trigger: '.lh-row', start: 'top 85%' } });

  /* Git log */
  gsap.to('.git .branch i', { scaleY: 1, ease: 'none', scrollTrigger: { trigger: '.git', start: 'top 70%', end: 'bottom 60%', scrub: true } });
  $$('.commit').forEach(c => gsap.from(c, { y: 30, opacity: 0, duration: 1, ease: 'expo.out', scrollTrigger: { trigger: c, start: 'top 80%' } }));
  gsap.from('.d-who-side > *', { y: 50, opacity: 0, stagger: .1, duration: 1.1, ease: 'expo.out', scrollTrigger: { trigger: '.d-who', start: 'top 65%' } });
  $$('.d-head').forEach(h => gsap.from(h.children, { y: 40, opacity: 0, stagger: .1, duration: 1.1, ease: 'expo.out', scrollTrigger: { trigger: h, start: 'top 85%' } }));
})();

/* Project builder: pick modules, see the project spec, send it to the contact form */
(() => {
  const ops = [...document.querySelectorAll('.op')], out = document.getElementById('bldOut');
  if (!ops.length) return;
  const esc = s => s.replace(/[&<>]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;' }[c]));
  const render = () => {
    const sel = ops.filter(o => o.getAttribute('aria-pressed') === 'true').map(o => o.dataset.v);
    const ia = sel.some(s => /IA/.test(s));
    const mods = sel.length ? '[\n' + sel.map(s => `    <span class="s">"${esc(s)}"</span>`).join(',\n') + '\n  ]' : '[]';
    out.innerHTML = `{\n  <span class="k">"cliente"</span>: <span class="s">"tu-marca"</span>,\n  <span class="k">"modulos"</span>: ${mods},\n  <span class="k">"inteligencia_artificial"</span>: <span class="b">${ia}</span>,\n  <span class="k">"estado"</span>: <span class="s">"${sel.length ? 'listo para cotizar' : 'elige al menos un módulo'}"</span>\n}<span class="cur"></span>`;
  };
  ops.forEach(o => o.addEventListener('click', () => {
    o.setAttribute('aria-pressed', o.getAttribute('aria-pressed') !== 'true');
    render();
    gsap.fromTo(out, { opacity: .4 }, { opacity: 1, duration: .4 });
  }));
  document.getElementById('bldCta').addEventListener('click', () => {
    const sel = ops.filter(o => o.getAttribute('aria-pressed') === 'true').map(o => '• ' + o.dataset.v);
    const fm = document.getElementById('fm');
    if (fm && sel.length) fm.value = 'Hola, quiero cotizar un proyecto con:\n' + sel.join('\n');
  });
  render();
  if (!matchMedia('(prefers-reduced-motion: reduce)').matches)
    gsap.from('.op', { y: 30, opacity: 0, stagger: .06, duration: .9, ease: 'expo.out', clearProps: 'opacity,transform', scrollTrigger: { trigger: '.bld', start: 'top 85%' } });
})();

}
