import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/developer.css';
import initMain from '../scripts/main.js';
import initPage from '../scripts/developer.js';
import { setupPage } from '../lib/setupPage.js';

export default function Developer() {
  useEffect(() => {
    setupPage({
      title: "Visual Black Developer — Webs, e-commerce, apps y automatización con IA.",
      bodyClass: "dept dark",
      bodyStyle: "--accent-l:#0090c0;--accent-d:#3ad6ff",
      orbs: "58,214,255;120,240,255;0,110,200",
    });
    initMain();
    initPage();
  }, []);

  return (
    <>
      {" "}
      <div id="loader" aria-hidden="true">
        {" "}
        <div className="lw">
          {" "}
          <div className="logo">
            <span>
              <img src="/logo-dark.svg" alt="Visual Black" />
            </span>
          </div>
          {" "}
          <div className="bar">
            <i style={{"background": "var(--accent)"}} />
          </div>
          {" "}
          <div className="count">
            {"000"}
          </div>
          {" "}
        </div>
        {" "}
      </div>
      {" "}
      <div id="curtain" />
      {" "}
      <div id="progress" />
      {" "}
      <div className="cursor" />
      <div className="cursor-label">
        {"Ver"}
      </div>
      {" "}
      <nav id="nav">
        {" "}
        <div className="in">
          {" "}
          <a href="/" className="brand" data-color="#111">
            <img src="/logo-dark.svg" alt="Visual Black — Marketing 360°" />
          </a>
          {" "}
          <ul>
            <li>
              <a href="/" data-color="#111">
                {"Inicio"}
              </a>
            </li>
            <li>
              <Link to="/consulting" data-color="#ff7a1a">
                <span className="d" style={{"background": "#ff7a1a"}} />
                {"Consulting"}
              </Link>
            </li>
            <li>
              <Link to="/content-creator" data-color="#a66bff">
                <span className="d" style={{"background": "#a66bff"}} />
                {"Content Creator"}
              </Link>
            </li>
            <li>
              <Link to="/developer" data-color="#3ad6ff" className="active">
                <span className="d" style={{"background": "#3ad6ff"}} />
                {"Developer"}
              </Link>
            </li>
          </ul>
          {" "}
          <a href="#contacto" className="btn magnetic">
            {"Hablemos "}
            <svg viewBox="0 0 16 16" fill="none">
              <path d="M1 8h13M9 3l5 5-5 5" stroke="currentColor" strokeWidth="1.6" />
            </svg>
          </a>
          {" "}
          <button className="menu-btn" aria-label="Abrir menú">
            <i />
            <i />
          </button>
          {" "}
        </div>
        {" "}
      </nav>
      {" "}
      <div id="mobileMenu">
        {" "}
        <a href="/" data-color="#111">
          {"Inicio"}
        </a>
        {" "}
        <Link to="/consulting" data-color="#ff7a1a">
          <span className="d" style={{"background": "#ff7a1a"}} />
          {"Consulting"}
        </Link>
        <Link to="/content-creator" data-color="#a66bff">
          <span className="d" style={{"background": "#a66bff"}} />
          {"Content Creator"}
        </Link>
        <Link to="/developer" data-color="#3ad6ff">
          <span className="d" style={{"background": "#3ad6ff"}} />
          {"Developer"}
        </Link>
        {" "}
        <a href="#contacto">
          <small>
            {"Contacto"}
          </small>
          {"Hablemos"}
        </a>
        {" "}
      </div>
      {" "}
      <main id="top">
        {" "}
        <section className="hero d-hero">
          {" "}
          <div className="d-grid" aria-hidden="true" />
          {" "}
          <div className="d-grid glow" aria-hidden="true" />
          {" "}
          <div className="hero-content d-hero-content">
            {" "}
            <div className="wrap d-hero-grid">
              {" "}
              <div>
                {" "}
                <div className="crumb h-fade">
                  <a href="/" data-color="#111">
                    {"visualblack"}
                  </a>
                  <span>
                    {"/"}
                  </span>
                  <span className="chip">
                    <i style={{"background": "var(--accent)"}} />
                    {"Developer"}
                  </span>
                </div>
                {" "}
                <p className="mono d-label h-fade">
                  {"// visualblack.developer"}
                </p>
                {" "}
                <h1>
                  <span className="line-mask">
                    <span>
                      {"Tecnología que"}
                    </span>
                  </span>
                  <span className="line-mask">
                    <span>
                      <span className="serif accent scramble" data-text="convierte">
                        {"convierte"}
                      </span>
                      {"."}
                    </span>
                  </span>
                </h1>
                {" "}
                <p className="sub h-fade">
                  {"Sitios web, e-commerce y plataformas a medida. Rápidos, modernos y pensados para acompañar la decisión del cliente."}
                </p>
                {" "}
                <div className="ctas h-fade">
                  {" "}
                  <a href="#servicios" className="btn magnetic">
                    {"Ver servicios "}
                    <svg viewBox="0 0 16 16" fill="none">
                      <path d="M1 8h13M9 3l5 5-5 5" stroke="currentColor" strokeWidth="1.6" />
                    </svg>
                  </a>
                  {" "}
                  <a href="#contacto" className="btn ghost magnetic">
                    {"Cotizar proyecto"}
                  </a>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
              <div className="term h-fade" aria-hidden="true">
                {" "}
                <div className="term-bar">
                  <i />
                  <i />
                  <i />
                  <span className="mono">
                    {"zsh — visualblack"}
                  </span>
                </div>
                {" "}
                <pre className="mono" id="termOut" />
                {" "}
              </div>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
        </section>
        {" "}
        <section className="d-bento-sec" id="servicios">
          {" "}
          <div className="wrap">
            {" "}
            <div className="d-head">
              {" "}
              <div>
                <p className="mono d-label">
                  {"// servicios"}
                </p>
                <h2>
                  {"Construimos lo que tu"}
                  <br />
                  {"negocio "}
                  <span className="serif">
                    {"necesita"}
                  </span>
                  {"."}
                </h2>
              </div>
              {" "}
              <p>
                {"Seis especialidades técnicas. Cada proyecto se diseña, programa y optimiza a medida."}
              </p>
              {" "}
            </div>
            {" "}
            <div className="bento-grid">
              {" "}
              <article className="bento b-wide">
                {" "}
                <div className="b-viz">
                  <div className="bw">
                    <div className="bw-bar">
                      <i />
                      <i />
                      <i />
                      <span />
                    </div>
                    <div className="bw-body">
                      <b className="bk h" />
                      <b className="bk t1" />
                      <b className="bk t2" />
                      <b className="bk btn" />
                      <b className="bk c1" />
                      <b className="bk c2" />
                      <b className="bk c3" />
                    </div>
                  </div>
                </div>
                {" "}
                <div className="b-txt">
                  <span className="mono b-n">
                    {"01"}
                  </span>
                  <h3>
                    {"Páginas web corporativas"}
                  </h3>
                  <p>
                    {"Sitios modernos, rápidos y alineados a tu marca, con animaciones profesionales y estructura pensada para vender."}
                  </p>
                  <div className="tags">
                    <span>
                      {"Diseño a medida"}
                    </span>
                    <span>
                      {"Responsive"}
                    </span>
                    <span>
                      {"Animaciones"}
                    </span>
                  </div>
                </div>
                {" "}
              </article>
              {" "}
              <article className="bento b-sm">
                {" "}
                <div className="b-viz">
                  <div className="fn">
                    <i style={{"--w": "100%"}}>
                      <em>
                        {"Visitas"}
                      </em>
                    </i>
                    <i style={{"--w": "72%"}}>
                      <em>
                        {"Interés"}
                      </em>
                    </i>
                    <i style={{"--w": "48%"}}>
                      <em>
                        {"Leads"}
                      </em>
                    </i>
                    <i style={{"--w": "28%"}}>
                      <em>
                        {"Ventas"}
                      </em>
                    </i>
                  </div>
                </div>
                {" "}
                <div className="b-txt">
                  <span className="mono b-n">
                    {"02"}
                  </span>
                  <h3>
                    {"Landing pages de alta conversión"}
                  </h3>
                  <p>
                    {"Páginas enfocadas en un solo objetivo, perfectas para campañas: más leads, más ventas, menos fricción."}
                  </p>
                  <div className="tags">
                    <span>
                      {"Copy persuasivo"}
                    </span>
                    <span>
                      {"A/B testing"}
                    </span>
                    <span>
                      {"Formularios"}
                    </span>
                  </div>
                </div>
                {" "}
              </article>
              {" "}
              <article className="bento b-sm">
                {" "}
                <div className="b-viz">
                  <div className="shop">
                    <svg viewBox="0 0 24 24">
                      <path d="M5 7h14l-1.5 9h-11zM9 20a1 1 0 1 0 0 .01M16 20a1 1 0 1 0 0 .01M5 7L4 4H2" />
                    </svg>
                    <span className="pill">
                      {"Pago aprobado ✓"}
                    </span>
                    <span className="price mono">
                      {"$ "}
                      <b>
                        {"0"}
                      </b>
                    </span>
                  </div>
                </div>
                {" "}
                <div className="b-txt">
                  <span className="mono b-n">
                    {"03"}
                  </span>
                  <h3>
                    {"E-commerce"}
                  </h3>
                  <p>
                    {"Tiendas online con catálogo, pasarelas de pago, envíos y un checkout optimizado para reducir el abandono."}
                  </p>
                  <div className="tags">
                    <span>
                      {"Shopify"}
                    </span>
                    <span>
                      {"WooCommerce"}
                    </span>
                    <span>
                      {"Pasarelas de pago"}
                    </span>
                  </div>
                </div>
                {" "}
              </article>
              {" "}
              <article className="bento b-wide">
                {" "}
                <div className="b-viz">
                  <div className="dash">
                    <div className="dbars">
                      <i />
                      <i />
                      <i />
                      <i />
                      <i />
                      <i />
                      <i />
                      <i />
                      <i />
                      <i />
                      <i />
                      <i />
                      <i />
                      <i />
                    </div>
                    <svg className="dline" viewBox="0 0 300 80" preserveAspectRatio="none">
                      <path d="M0 70 L40 52 L80 58 L120 36 L160 42 L200 22 L240 28 L300 8" />
                    </svg>
                  </div>
                </div>
                {" "}
                <div className="b-txt">
                  <span className="mono b-n">
                    {"04"}
                  </span>
                  <h3>
                    {"Web apps y dashboards"}
                  </h3>
                  <p>
                    {"Plataformas a medida, paneles de control y sistemas internos con datos en tiempo real."}
                  </p>
                  <div className="tags">
                    <span>
                      {"SaaS"}
                    </span>
                    <span>
                      {"Dashboards"}
                    </span>
                    <span>
                      {"Paneles admin"}
                    </span>
                  </div>
                </div>
                {" "}
              </article>
              {" "}
              <article className="bento b-half">
                {" "}
                <div className="b-viz">
                  <div className="chat">
                    <div className="msg u">
                      {"¿Hacen envíos a todo el país?"}
                    </div>
                    <div className="msg b">
                      {"¡Sí! Te ayudo a elegir y comprar en un minuto."}
                    </div>
                    <div className="msg u">
                      {"Perfecto, quiero el plan anual"}
                    </div>
                    <div className="typing">
                      <i />
                      <i />
                      <i />
                    </div>
                  </div>
                </div>
                {" "}
                <div className="b-txt">
                  <span className="mono b-n">
                    {"05"}
                  </span>
                  <h3>
                    {"Automatización e IA"}
                  </h3>
                  <p>
                    {"Chatbots, agentes de IA e integraciones que automatizan tareas repetitivas y atienden a tus clientes 24/7."}
                  </p>
                  <div className="tags">
                    <span>
                      {"Chatbots WhatsApp"}
                    </span>
                    <span>
                      {"Agentes IA"}
                    </span>
                    <span>
                      {"Integraciones API"}
                    </span>
                  </div>
                </div>
                {" "}
              </article>
              {" "}
              <article className="bento b-half">
                {" "}
                <div className="b-viz">
                  <div className="gauge">
                    <svg viewBox="0 0 120 120">
                      <circle className="g-bg" cx="60" cy="60" r="50" />
                      <circle className="g-fg" cx="60" cy="60" r="50" />
                    </svg>
                    <b className="mono">
                      {"0"}
                    </b>
                  </div>
                </div>
                {" "}
                <div className="b-txt">
                  <span className="mono b-n">
                    {"06"}
                  </span>
                  <h3>
                    {"SEO técnico y mantenimiento"}
                  </h3>
                  <p>
                    {"Velocidad, seguridad, hosting y posicionamiento. Tu web siempre rápida, actualizada y visible en Google."}
                  </p>
                  <div className="tags">
                    <span>
                      {"Core Web Vitals"}
                    </span>
                    <span>
                      {"SEO"}
                    </span>
                    <span>
                      {"Hosting"}
                    </span>
                    <span>
                      {"Soporte"}
                    </span>
                  </div>
                </div>
                {" "}
              </article>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
        </section>
        {" "}
        <section className="d-build light">
          {" "}
          <div className="d-build-pin">
            {" "}
            <div className="wrap d-build-grid">
              {" "}
              <div className="d-build-txt">
                {" "}
                <p className="mono d-label">
                  {"// del boceto al producto"}
                </p>
                {" "}
                <h2>
                  {"De la idea"}
                  <br />
                  {"al "}
                  <span className="serif">
                    {"lanzamiento"}
                  </span>
                  {"."}
                </h2>
                {" "}
                <p>
                  {"Cada proyecto empieza como un boceto y termina como un producto pulido, rápido y listo para vender. Haz scroll para verlo."}
                </p>
                {" "}
                <div className="d-build-steps mono">
                  <span className="on">
                    {"wireframe"}
                  </span>
                  <span>
                    {"diseño"}
                  </span>
                  <span>
                    {"código"}
                  </span>
                  <span>
                    {"online"}
                  </span>
                </div>
                {" "}
              </div>
              {" "}
              <div className="bmock">
                {" "}
                <div className="bm-bar">
                  <i />
                  <i />
                  <i />
                  <span className="mono">
                    {"tumarca.com"}
                  </span>
                </div>
                {" "}
                <div className="bm-stage">
                  {" "}
                  <div className="bm wf">
                    <b className="w-nav" />
                    <b className="w-h1" />
                    <b className="w-h2" />
                    <b className="w-btn" />
                    <b className="w-img" />
                    <b className="w-c1" />
                    <b className="w-c2" />
                    <b className="w-c3" />
                  </div>
                  {" "}
                  <div className="bm ds">
                    <b className="w-nav" />
                    <b className="w-h1" />
                    <b className="w-h2" />
                    <b className="w-btn" />
                    <b className="w-img" />
                    <b className="w-c1" />
                    <b className="w-c2" />
                    <b className="w-c3" />
                  </div>
                  {" "}
                  <i className="scan" />
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
        </section>
        {" "}
        <section className="d-lh light">
          {" "}
          <div className="wrap">
            {" "}
            <div className="d-head">
              {" "}
              <div>
                <p className="mono d-label">
                  {"// estándar de calidad"}
                </p>
                <h2>
                  {"Rápida. Accesible."}
                  <br />
                  <span className="serif">
                    {"Encontrable"}
                  </span>
                  {"."}
                </h2>
              </div>
              {" "}
              <p>
                {"El estándar Google Lighthouse al que apuntamos en cada proyecto que lanzamos."}
              </p>
              {" "}
            </div>
            {" "}
            <div className="lh-row">
              <div className="lh">
                <svg viewBox="0 0 120 120">
                  <circle className="g-bg" cx="60" cy="60" r="52" />
                  <circle className="g-fg" cx="60" cy="60" r="52" />
                </svg>
                <b className="mono" data-count="100">
                  {"0"}
                </b>
                <span>
                  {"Rendimiento"}
                </span>
              </div>
              <div className="lh">
                <svg viewBox="0 0 120 120">
                  <circle className="g-bg" cx="60" cy="60" r="52" />
                  <circle className="g-fg" cx="60" cy="60" r="52" />
                </svg>
                <b className="mono" data-count="100">
                  {"0"}
                </b>
                <span>
                  {"Accesibilidad"}
                </span>
              </div>
              <div className="lh">
                <svg viewBox="0 0 120 120">
                  <circle className="g-bg" cx="60" cy="60" r="52" />
                  <circle className="g-fg" cx="60" cy="60" r="52" />
                </svg>
                <b className="mono" data-count="100">
                  {"0"}
                </b>
                <span>
                  {"Buenas prácticas"}
                </span>
              </div>
              <div className="lh">
                <svg viewBox="0 0 120 120">
                  <circle className="g-bg" cx="60" cy="60" r="52" />
                  <circle className="g-fg" cx="60" cy="60" r="52" />
                </svg>
                <b className="mono" data-count="100">
                  {"0"}
                </b>
                <span>
                  {"SEO"}
                </span>
              </div>
            </div>
            {" "}
          </div>
          {" "}
        </section>
        {" "}
        <section className="d-who" id="lider">
          {" "}
          <div className="wrap d-who-grid">
            {" "}
            <div className="term big" aria-label="Perfil del líder">
              {" "}
              <div className="term-bar">
                <i />
                <i />
                <i />
                <span className="mono">
                  {"~/visualblack/developer"}
                </span>
              </div>
              {" "}
              <pre className="mono" id="whoOut" data-lines={"[[\"$ whoami\", \"\"], [\"Santiago Yacila\", \"o\"], [\"$ cat rol.txt\", \"\"], [\"CTO de visualblack developer · Ingeniero de software e IA\", \"o\"], [\"$ cat stack.txt\", \"\"], [\"Software a medida · Web · Inteligencia artificial · Automatización\", \"o\"], [\"$ cat filosofia.md\", \"\"], [\"“Una web no se mide por cómo se ve, sino por lo que logra.”\", \"q\"]]"} />
              {" "}
            </div>
            {" "}
            <div className="d-who-side">
              {" "}
              <div className="portrait sm has-photo" data-cursor="Perfil">
                {" "}
                <div className="ph">
                  <img src="/assets/img/santiago-yacila.webp" alt="Santiago Yacila, Head of Engineering de visualblack" width="1493" height="2000" />
                </div>
                {" "}
                <span className="mono pm">
                  {"Líder · Developer"}
                </span>
                {" "}
              </div>
              {" "}
              <p className="bio">
                {"Ingeniero de software e inteligencia artificial con 3 años de experiencia construyendo productos digitales. Diseña y desarrolla webs, plataformas a medida y soluciones con IA —chatbots, agentes y automatizaciones— que ahorran tiempo a los equipos y convierten visitas en clientes. Lidera el equipo técnico de visualblack developer y la integración de inteligencia artificial en cada proyecto."}
              </p>
              {" "}
              <div className="creds">
                <div>
                  <b data-count="3" data-prefix="" data-suffix="">
                    {"0"}
                  </b>
                  <span>
                    {"años de experiencia"}
                  </span>
                </div>
                <div>
                  <b>
                    {"IA"}
                  </b>
                  <span>
                    {"agentes, chatbots y automatización"}
                  </span>
                </div>
                <div>
                  <b>
                    {"Web"}
                  </b>
                  <span>
                    {"apps, e-commerce y plataformas a medida"}
                  </span>
                </div>
              </div>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
        </section>
        {" "}
        <section className="d-git" id="proceso">
          {" "}
          <div className="wrap">
            {" "}
            <div className="d-head">
              {" "}
              <div>
                <p className="mono d-label">
                  {"// git log --proceso"}
                </p>
                <h2>
                  {"Cómo "}
                  <span className="serif">
                    {"construimos"}
                  </span>
                  {"."}
                </h2>
              </div>
              {" "}
              <p>
                {"Un flujo de trabajo ordenado, con entregas por etapas y revisión en cada paso."}
              </p>
              {" "}
            </div>
            {" "}
            <div className="git">
              <span className="branch">
                <i />
              </span>
              <div className="commit">
                <span className="node" />
                <div>
                  <span className="mono hash">
                    {"a1f3c9e"}
                  </span>
                  <span className="mono type">
                    {"discover:"}
                  </span>
                  <h3>
                    {"Descubrimiento"}
                  </h3>
                  <p>
                    {"Definimos objetivos, usuarios, contenidos y la arquitectura del proyecto."}
                  </p>
                </div>
              </div>
              <div className="commit">
                <span className="node" />
                <div>
                  <span className="mono hash">
                    {"7bd20e4"}
                  </span>
                  <span className="mono type">
                    {"design:"}
                  </span>
                  <h3>
                    {"Diseño UX/UI"}
                  </h3>
                  <p>
                    {"Prototipos y diseño visual alineado a tu marca, pensados para guiar la decisión del cliente."}
                  </p>
                </div>
              </div>
              <div className="commit">
                <span className="node" />
                <div>
                  <span className="mono hash">
                    {"c94e1fa"}
                  </span>
                  <span className="mono type">
                    {"feat:"}
                  </span>
                  <h3>
                    {"Desarrollo"}
                  </h3>
                  <p>
                    {"Programamos con tecnología moderna, rápida y escalable. Integraciones, pagos y automatizaciones."}
                  </p>
                </div>
              </div>
              <div className="commit">
                <span className="node" />
                <div>
                  <span className="mono hash">
                    {"f02b7d3"}
                  </span>
                  <span className="mono type">
                    {"deploy:"}
                  </span>
                  <h3>
                    {"Lanzamiento y soporte"}
                  </h3>
                  <p>
                    {"Publicamos, medimos rendimiento y damos mantenimiento continuo."}
                  </p>
                </div>
              </div>
            </div>
            {" "}
          </div>
          {" "}
        </section>
        {" "}
        <section className="d-builder light" id="proyecto">
          {" "}
          <div className="wrap">
            {" "}
            <div className="d-head">
              {" "}
              <div>
                <p className="mono d-label">
                  {"// arma tu proyecto"}
                </p>
                <h2>
                  {"¿Qué "}
                  <span className="serif">
                    {"necesitas"}
                  </span>
                  {"?"}
                </h2>
              </div>
              {" "}
              <p>
                {"Elige las piezas y te preparamos una propuesta a medida. Sin compromiso."}
              </p>
              {" "}
            </div>
            {" "}
            <div className="bld">
              {" "}
              <div className="bld-opts">
                <button className="op" type="button" aria-pressed="false" data-v="Páginas web corporativas">
                  <span className="mono">
                    {"01"}
                  </span>
                  {"Páginas web corporativas"}
                </button>
                <button className="op" type="button" aria-pressed="false" data-v="Landing pages de alta conversión">
                  <span className="mono">
                    {"02"}
                  </span>
                  {"Landing pages de alta conversión"}
                </button>
                <button className="op" type="button" aria-pressed="false" data-v="E-commerce">
                  <span className="mono">
                    {"03"}
                  </span>
                  {"E-commerce"}
                </button>
                <button className="op" type="button" aria-pressed="false" data-v="Web apps y dashboards">
                  <span className="mono">
                    {"04"}
                  </span>
                  {"Web apps y dashboards"}
                </button>
                <button className="op" type="button" aria-pressed="false" data-v="Automatización e IA">
                  <span className="mono">
                    {"05"}
                  </span>
                  {"Automatización e IA"}
                </button>
                <button className="op" type="button" aria-pressed="false" data-v="SEO técnico y mantenimiento">
                  <span className="mono">
                    {"06"}
                  </span>
                  {"SEO técnico y mantenimiento"}
                </button>
              </div>
              {" "}
              <div className="term bld-term">
                {" "}
                <div className="term-bar">
                  <i />
                  <i />
                  <i />
                  <span className="mono">
                    {"proyecto.json"}
                  </span>
                </div>
                {" "}
                <pre className="mono" id="bldOut" />
                {" "}
                <div className="bld-foot">
                  <a href="#contacto" className="btn magnetic" id="bldCta">
                    {"Enviar a cotizar "}
                    <svg viewBox="0 0 16 16" fill="none">
                      <path d="M1 8h13M9 3l5 5-5 5" stroke="currentColor" strokeWidth="1.6" />
                    </svg>
                  </a>
                </div>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
        </section>
        {" "}
        <section className="others-sec">
          {" "}
          <div className="wrap">
            {" "}
            <p className="eyebrow">
              {"Un solo equipo"}
            </p>
            {" "}
            <h2>
              {"Explora los otros "}
              <span className="serif">
                {"departamentos"}
              </span>
              {"."}
            </h2>
            {" "}
            <div className="others">
              {" "}
              <Link to="/consulting" data-color="#ff7a1a" style={{"--x": "#ff7a1a"}} data-cursor="Entrar">
                {" "}
                <span className="n">
                  {"01 — visualblack"}
                </span>
                {" "}
                <div>
                  <h3>
                    {"Estrategia que "}
                    <span className="serif">
                      {"mueve"}
                    </span>
                    {" negocios."}
                  </h3>
                  <p>
                    {"Estrategia, publicidad digital y crecimiento medible."}
                  </p>
                </div>
                {" "}
              </Link>
              {" "}
              <Link to="/content-creator" data-color="#a66bff" style={{"--x": "#a66bff"}} data-cursor="Entrar">
                {" "}
                <span className="n">
                  {"02 — visualblack"}
                </span>
                {" "}
                <div>
                  <h3>
                    {"Contenido que "}
                    <span className="serif">
                      {"detiene"}
                    </span>
                    {" el scroll."}
                  </h3>
                  <p>
                    {"Producción audiovisual, redes sociales y marca."}
                  </p>
                </div>
                {" "}
              </Link>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
        </section>
        {" "}
        <section className="contact light" id="contacto">
          {" "}
          <div className="wrap">
            {" "}
            <div className="top">
              {" "}
              <p className="eyebrow">
                {"Contacto"}
              </p>
              {" "}
              <h2 style={{"marginTop": "18px"}}>
                {"Hagamos algo"}
                <br />
                <span className="serif" style={{"color": "var(--accent)"}}>
                  {"extraordinario"}
                </span>
                {"."}
              </h2>
              {" "}
              <p>
                {"Cuéntanos tu proyecto y te responderemos por WhatsApp, directamente con el líder del departamento indicado."}
              </p>
              {" "}
            </div>
            {" "}
            <form className="form" id="form">
              {" "}
              <div className="choices" role="group" aria-label="Departamento">
                <label style={{"--c": "#ff7a1a"}}>
                  <input type="checkbox" name="d" value="Consulting" />
                  <span>
                    <i />
                    {"Consulting"}
                  </span>
                </label>
                <label style={{"--c": "#a66bff"}}>
                  <input type="checkbox" name="d" value="Content Creator" />
                  <span>
                    <i />
                    {"Content Creator"}
                  </span>
                </label>
                <label style={{"--c": "#3ad6ff"}}>
                  <input type="checkbox" name="d" value="Developer" defaultChecked />
                  <span>
                    <i />
                    {"Developer"}
                  </span>
                </label>
              </div>
              {" "}
              <div className="fields">
                {" "}
                <div className="field">
                  <input id="fn" required placeholder=" " />
                  <label htmlFor="fn">
                    {"Nombre"}
                  </label>
                </div>
                {" "}
                <div className="field">
                  <input id="fe" type="email" placeholder=" " />
                  <label htmlFor="fe">
                    {"Email (opcional)"}
                  </label>
                </div>
                {" "}
              </div>
              {" "}
              <div className="field">
                <textarea id="fm" rows="3" placeholder=" " />
                <label htmlFor="fm">
                  {"Cuéntanos sobre tu proyecto"}
                </label>
              </div>
              {" "}
              <div className="send">
                <button className="btn xl magnetic wa-btn" type="submit">
                  <svg viewBox="0 0 24 24" fill="currentColor" style={{"width": "20px", "height": "20px"}}>
                    <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm5.3 14.1c-.2.6-1.3 1.2-1.8 1.2-.5.1-1 .2-3.4-.7-2.9-1.1-4.7-4.1-4.9-4.3-.1-.2-1.2-1.6-1.2-3s.7-2.2 1-2.5c.3-.3.6-.3.8-.3h.6c.2 0 .4 0 .7.5l.9 2.2c.1.2.1.4 0 .6l-.4.6-.4.5c-.1.2-.3.3-.1.6.2.3.8 1.3 1.7 2.1 1.2 1 2.1 1.4 2.4 1.5.3.1.5.1.7-.1l1-1.2c.2-.3.4-.2.7-.1l2.1 1c.3.2.5.2.5.4.1.1.1.7-.1 1.3z" />
                  </svg>
                  {" Enviar por WhatsApp"}
                </button>
              </div>
              {" "}
            </form>
            {" "}
          </div>
          {" "}
        </section>
        {" "}
      </main>
      {" "}
      <footer>
        {" "}
        <div className="wrap">
          {" "}
          <div className="cols">
            {" "}
            <div>
              {" "}
              <a href="/" className="brand" data-color="#111">
                <img src="/logo-dark.svg" alt="Visual Black — Marketing 360°" style={{"height": "44px"}} />
              </a>
              {" "}
              <p style={{"color": "var(--muted)", "marginTop": "16px", "maxWidth": "320px", "lineHeight": "1.55", "fontSize": "15px"}}>
                {"Marketing digital, contenido y desarrollo web de alto impacto. Transformamos ideas en resultados medibles."}
              </p>
              {" "}
            </div>
            {" "}
            <div>
              <h5>
                {"Departamentos"}
              </h5>
              <Link to="/consulting" data-color="#ff7a1a">
                {"Consulting"}
              </Link>
              <Link to="/content-creator" data-color="#a66bff">
                {"Content Creator"}
              </Link>
              <Link to="/developer" data-color="#3ad6ff">
                {"Developer"}
              </Link>
            </div>
            {" "}
            <div>
              <h5>
                {"Contacto"}
              </h5>
              <a href="mailto:info@visualblack.es">
                {"info@visualblack.es"}
              </a>
              <a href="tel:+51939780945">
                {"+51 939 780 945"}
              </a>
            </div>
            {" "}
            <div>
              <h5>
                {"Social"}
              </h5>
              <a href="https://www.instagram.com/visualblack01/" target="_blank" rel="noopener">
                {"Instagram"}
              </a>
              <a href="https://www.facebook.com/visualblack01" target="_blank" rel="noopener">
                {"Facebook"}
              </a>
            </div>
            {" "}
          </div>
          {" "}
          <div className="giant">
            <img src="/logo-dark.svg" alt="" aria-hidden="true" />
          </div>
          {" "}
          <div className="legal">
            <span>
              {"© "}
              <span id="yr" />
              {" visualblack. Todos los derechos reservados."}
            </span>
            <span>
              {"Consulting · Content Creator · Developer"}
            </span>
          </div>
          {" "}
        </div>
        {" "}
      </footer>
      {" "}
      {" "}
      {" "}
      {" "}
      {" "}
      {" "}
      {" "}
      {" "}
    </>
  );
}
