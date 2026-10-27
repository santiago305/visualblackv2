// Ported from the static site (consulting.js). Runs once after the page has rendered.
export default function init() {
(() => {
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const $ = s => document.querySelector(s), $$ = s => [...document.querySelectorAll(s)];

  /* Growth chart draws itself, milestones pop in */
  const line = $('.c-chart .line');
  if (line && !reduce) {
    const L = line.getTotalLength();
    gsap.set(line, { strokeDasharray: L, strokeDashoffset: L });
    gsap.timeline({ delay: $('#loader') && getComputedStyle($('#loader')).display !== 'none' ? 2.6 : 1 })
      .to(line, { strokeDashoffset: 0, duration: 2.4, ease: 'power2.inOut' })
      .from('.c-chart .area', { opacity: 0, duration: 1.6 }, '<.6')
      .from('.c-pts span', { scale: 0, opacity: 0, stagger: .45, duration: .8, ease: 'back.out(2.5)' }, '<.1');
    gsap.to('.c-chart', { yPercent: 12, ease: 'none', scrollTrigger: { trigger: '.c-hero', start: 'top top', end: 'bottom top', scrub: true } });
    gsap.to('.c-pts', { yPercent: 12, opacity: 0, ease: 'none', scrollTrigger: { trigger: '.c-hero', start: 'top top', end: 'bottom top', scrub: true } });
  }

  /* Accordion */
  $$('.acc-row').forEach(row => {
    const head = row.querySelector('.acc-head'), body = row.querySelector('.acc-body');
    head.addEventListener('click', () => {
      const open = !row.classList.contains('open');
      $$('.acc-row.open').forEach(r => {
        if (r === row) return;
        r.classList.remove('open'); r.querySelector('.acc-head').setAttribute('aria-expanded', 'false');
        gsap.to(r.querySelector('.acc-body'), { height: 0, duration: .6, ease: 'expo.inOut' });
      });
      row.classList.toggle('open', open);
      head.setAttribute('aria-expanded', open);
      gsap.fromTo(body, { height: body.offsetHeight }, { height: open ? 'auto' : 0, duration: .7, ease: 'expo.inOut', onComplete: () => ScrollTrigger.refresh() });
      if (open) gsap.from(row.querySelectorAll('.acc-in > *'), { y: 20, opacity: 0, stagger: .06, duration: .7, ease: 'expo.out', delay: .15 });
    });
  });
  if (!reduce) gsap.from('.acc-row', { y: 40, opacity: 0, stagger: .07, duration: 1, ease: 'expo.out', scrollTrigger: { trigger: '.acc', start: 'top 80%' } });

  /* Growth simulator */
  const ids = ['sInv', 'sCpl', 'sCr', 'sTk'];
  if ($('#sInv')) {
    const money = v => '$' + Math.round(v).toLocaleString('es');
    const shown = { leads: 0, sales: 0, rev: 0, roas: 0 };
    const out = { leads: $('#oLeads'), sales: $('#oSales'), rev: $('#oRev'), roas: $('#oRoas') };
    const fill = el => el.style.setProperty('--p', ((el.value - el.min) / (el.max - el.min) * 100) + '%');
    const calc = () => {
      const inv = +$('#sInv').value, cpl = +$('#sCpl').value, cr = +$('#sCr').value / 100, tk = +$('#sTk').value;
      $('#vInv').textContent = money(inv); $('#vCpl').textContent = money(cpl); $('#vCr').textContent = Math.round(cr * 100) + '%'; $('#vTk').textContent = money(tk);
      ids.forEach(i => fill($('#' + i)));
      const leads = inv / cpl, sales = leads * cr, rev = sales * tk, roas = rev / inv;
      gsap.to(shown, { leads, sales, rev, roas, duration: reduce ? 0 : .8, ease: 'expo.out', overwrite: true, onUpdate: () => {
        out.leads.textContent = Math.round(shown.leads).toLocaleString('es');
        out.sales.textContent = Math.round(shown.sales).toLocaleString('es');
        out.rev.textContent = money(shown.rev);
        out.roas.textContent = shown.roas.toFixed(1) + 'x';
      } });
      const max = Math.max(inv, rev);
      $('#bInv').style.width = (inv / max * 100) + '%';
      $('#bRev').style.width = (rev / max * 100) + '%';
    };
    ids.forEach(i => $('#' + i).addEventListener('input', calc));
    ScrollTrigger.create({ trigger: '.c-sim', start: 'top 70%', once: true, onEnter: calc });
    ids.forEach(i => fill($('#' + i)));
    if (!reduce) gsap.from('.sim > *', { y: 60, opacity: 0, stagger: .12, duration: 1.2, ease: 'expo.out', scrollTrigger: { trigger: '.sim', start: 'top 80%' } });
  }

  /* Timeline: pinned on desktop, line fills and phases light up */
  const steps = $$('.tl-step');
  const setActive = p => steps.forEach((s, i) => s.classList.toggle('on', p >= i / steps.length + .02 || (i === 0 && p > 0)));
  if (reduce) { steps.forEach(s => s.classList.add('on')); gsap.set('.tl-line i', { scaleX: 1, scaleY: 1 }); return; }
  const mm = gsap.matchMedia();
  mm.add('(min-width: 901px)', () => {
    gsap.to('.tl-line i', { scaleX: 1, ease: 'none', scrollTrigger: { trigger: '.c-time', start: 'top top', end: '+=140%', pin: true, scrub: .6, onUpdate: s => setActive(s.progress) } });
  });
  mm.add('(max-width: 900px)', () => {
    gsap.set('.tl-line i', { scaleX: 1, scaleY: 0 });
    gsap.to('.tl-line i', { scaleY: 1, ease: 'none', scrollTrigger: { trigger: '.tl', start: 'top 70%', end: 'bottom 60%', scrub: true, onUpdate: s => setActive(s.progress) } });
  });

  /* Cases */
  gsap.from('.case', { y: 50, opacity: 0, stagger: .12, duration: 1.1, ease: 'expo.out', scrollTrigger: { trigger: '.cases', start: 'top 80%' } });
  $$('.c-head').forEach(h => gsap.from(h.children, { y: 40, opacity: 0, stagger: .1, duration: 1.1, ease: 'expo.out', scrollTrigger: { trigger: h, start: 'top 85%' } }));
})();

/* Quick diagnosis: pick the situations you live, get a recommendation, prefill the contact form */
(() => {
  const btns = [...document.querySelectorAll('.dg')], msg = document.getElementById('diagMsg'), meter = document.querySelector('.meter i');
  if (!btns.length) return;
  const MSG = [
    'Selecciona las situaciones que vives hoy.',
    'Hay oportunidades claras de mejora. Una revisión de tus campañas te mostrará por dónde empezar.',
    'Tu inversión necesita una estrategia. Te recomendamos una auditoría de paid media.',
    'Es momento de reestructurar. Armemos juntos un plan de crecimiento desde cero.'
  ];
  const update = () => {
    const n = btns.filter(b => b.getAttribute('aria-pressed') === 'true').length;
    meter.style.width = (n / btns.length * 100) + '%';
    msg.textContent = MSG[n === 0 ? 0 : n <= 2 ? 1 : n <= 4 ? 2 : 3];
    gsap.fromTo(msg, { opacity: 0, y: 8 }, { opacity: 1, y: 0, duration: .5, ease: 'expo.out' });
  };
  btns.forEach(b => b.addEventListener('click', () => { b.setAttribute('aria-pressed', b.getAttribute('aria-pressed') !== 'true'); update(); }));
  document.getElementById('diagCta').addEventListener('click', () => {
    const sel = btns.filter(b => b.getAttribute('aria-pressed') === 'true').map(b => '• ' + b.textContent.trim());
    const fm = document.getElementById('fm');
    if (fm && sel.length) fm.value = 'Hola, quiero un diagnóstico. Hoy me pasa esto:\n' + sel.join('\n');
  });
  if (!matchMedia('(prefers-reduced-motion: reduce)').matches)
    gsap.from('.dg', { y: 40, opacity: 0, stagger: .07, duration: 1, ease: 'expo.out', clearProps: 'opacity,transform', scrollTrigger: { trigger: '.diag-grid', start: 'top 85%' } });
})();

}
