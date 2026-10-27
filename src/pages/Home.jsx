import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import initMain from '../scripts/main.js';
import { setupPage } from '../lib/setupPage.js';

export default function Home() {
  useEffect(() => {
    setupPage({
      title: "Visual Black — Consulting · Content Creator · Developer",
      bodyClass: "",
      bodyStyle: "",
      orbs: "255,122,26;166,107,255;58,214,255",
    });
    initMain();
    
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
              <img src="/logo.svg" alt="Visual Black" />
            </span>
          </div>
          {" "}
          <div className="bar">
            <i />
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
            <img src="/logo.svg" alt="Visual Black — Marketing 360°" />
          </a>
          {" "}
          <ul>
            <li>
              <Link to="/consulting" data-ring="0" data-color="#ff7a1a">
                <span className="d" style={{"background": "#ff7a1a"}} />
                {"Consulting"}
              </Link>
            </li>
            <li>
              <Link to="/content-creator" data-ring="1" data-color="#a66bff">
                <span className="d" style={{"background": "#a66bff"}} />
                {"Content Creator"}
              </Link>
            </li>
            <li>
              <Link to="/developer" data-ring="2" data-color="#3ad6ff">
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
        {" "}
        <section className="hero">
          {" "}
          <svg id="rings" viewBox="-500 -500 1000 1000" aria-hidden="true">
            {" "}
            <circle className="outer" r="470" />
            {" "}
            <circle className="outer2" r="410" />
            {" "}
            <g className="par">
              <g className="ring" data-x="0" data-y="-130" style={{"--rc": "var(--orange)"}}>
                <circle r="235" />
                <circle className="dot" r="5" />
              </g>
            </g>
            {" "}
            <g className="par">
              <g className="ring" data-x="113" data-y="65" style={{"--rc": "var(--purple)"}}>
                <circle r="235" />
                <circle className="dot" r="5" />
              </g>
            </g>
            {" "}
            <g className="par">
              <g className="ring" data-x="-113" data-y="65" style={{"--rc": "var(--cyan)"}}>
                <circle r="235" />
                <circle className="dot" r="5" />
              </g>
            </g>
            {" "}
            <circle className="core" r="4" />
            {" "}
          </svg>
          {" "}
          <div className="hero-content">
            {" "}
            <h1>
              {" "}
              <span className="line-mask">
                <span>
                  {"Tres mentes."}
                </span>
              </span>
              {" "}
              <span className="line-mask">
                <span>
                  <span className="serif">
                    {"Una"}
                  </span>
                  {" visión."}
                </span>
              </span>
              {" "}
            </h1>
            {" "}
            <p className="sub h-fade">
              {"Estrategia, creatividad y tecnología bajo un mismo techo. Tres departamentos liderados por referentes de su industria, enfocados en una sola cosa: que tu marca crezca."}
            </p>
            {" "}
            <div className="ctas h-fade">
              {" "}
              <a href="#departamentos" className="btn magnetic">
                {"Explorar departamentos "}
                <svg viewBox="0 0 16 16" fill="none">
                  <path d="M1 8h13M9 3l5 5-5 5" stroke="currentColor" strokeWidth="1.6" />
                </svg>
              </a>
              {" "}
              <a href="#contacto" className="btn ghost magnetic">
                {"Agenda una llamada"}
              </a>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
          <div className="scroll-hint h-fade">
            {"Scroll"}
            <span />
          </div>
          {" "}
        </section>
        {" "}
        {" "}
        <section className="expand">
          {" "}
          <div className="sticky">
            {" "}
            <div className="card" id="expandCard">
              {" "}
              <canvas id="waves" />
              {" "}
              <div className="txt">
                {" "}
                <h2>
                  <img src="/logo-dark.svg" alt="Visual Black — Marketing 360°" />
                </h2>
                {" "}
                <p>
                  {"Más de 85 empresas ya transformaron su estrategia digital con nosotros. Ahora, con tres divisiones especializadas, llegamos más lejos."}
                </p>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
        </section>
        {" "}
        {" "}
        <section className="manifesto">
          {" "}
          <div className="wrap">
            {" "}
            <p className="eyebrow" style={{"fontSize": "12px", "letterSpacing": ".22em", "marginBottom": "40px", "fontWeight": "500", "color": "var(--muted)"}}>
              {"Manifiesto"}
            </p>
            {" "}
            <p id="manifesto">
              {"No somos una agencia más. Somos un ecosistema: la "}
              <span className="serif">
                {"estrategia"}
              </span>
              {" que define el rumbo, el "}
              <span className="serif">
                {"contenido"}
              </span>
              {" que conquista la atención y la "}
              <span className="serif">
                {"tecnología"}
              </span>
              {" que convierte cada visita en resultados medibles."}
            </p>
            {" "}
          </div>
          {" "}
        </section>
        {" "}
        {" "}
        <section className="depts" id="departamentos">
          {" "}
          <div className="track">
            {" "}
            <div className="panel intro">
              {" "}
              <div className="wrap">
                {" "}
                <p className="eyebrow">
                  {"Tres departamentos"}
                </p>
                {" "}
                <h2 style={{"marginTop": "20px"}}>
                  {"Un equipo."}
                  <br />
                  <span className="serif">
                    {"Tres"}
                  </span>
                  {" superpoderes."}
                </h2>
                {" "}
                <p>
                  {"Desliza para conocer cada división. Cada una con su líder, su método y un mismo estándar de excelencia."}
                </p>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div className="panel" style={{"--c": "var(--orange)"}}>
              {" "}
              <div className="big-n">
                {"01"}
              </div>
              {" "}
              <div className="wrap dept-card">
                {" "}
                <div>
                  {" "}
                  <span className="tag">
                    <i />
                    {"visualblack consulting"}
                  </span>
                  {" "}
                  <h3>
                    {"Estrategia que "}
                    <span className="serif">
                      {"mueve"}
                    </span>
                    {" negocios."}
                  </h3>
                  {" "}
                  <p className="lead">
                    {"Diagnosticamos, planificamos y dirigimos tu crecimiento digital. Campañas publicitarias con enfoque comercial, objetivos claros y métricas de éxito desde el día uno."}
                  </p>
                  {" "}
                  <ul>
                    {" "}
                    <li>
                      {"Estrategia digital y posicionamiento"}
                      <span>
                        {"01"}
                      </span>
                    </li>
                    {" "}
                    <li>
                      {"Campañas Meta, Google y TikTok Ads"}
                      <span>
                        {"02"}
                      </span>
                    </li>
                    {" "}
                    <li>
                      {"Embudos de conversión y tracking"}
                      <span>
                        {"03"}
                      </span>
                    </li>
                    {" "}
                    <li>
                      {"Consultoría de crecimiento y analítica"}
                      <span>
                        {"04"}
                      </span>
                    </li>
                    {" "}
                  </ul>
                  {" "}
                  <Link to="/consulting" className="link" data-color="#ff7a1a" data-cursor="Entrar">
                    {"Entrar a Consulting →"}
                  </Link>
                  {" "}
                </div>
                {" "}
                <div className="dept-visual" data-cursor="Ver">
                  {" "}
                  <svg viewBox="0 0 400 500" className="viz-consulting">
                    {" "}
                    <g stroke="rgba(255,255,255,.08)">
                      <path d="M40 100H360M40 200H360M40 300H360M40 400H360" />
                    </g>
                    {" "}
                    <path className="draw" d="M40 420 C 110 400, 140 330, 190 320 S 260 250, 300 180 S 340 110, 360 80" fill="none" stroke="#ff7a1a" strokeWidth="3" strokeLinecap="round" />
                    {" "}
                    <g fill="#ff7a1a">
                      <circle className="pop" cx="190" cy="320" r="6" />
                      <circle className="pop" cx="300" cy="180" r="6" />
                      <circle className="pop" cx="360" cy="80" r="8" />
                    </g>
                    {" "}
                    <g fill="rgba(255,122,26,.25)">
                      <rect className="barv" x="60" y="360" width="30" height="60" rx="6" />
                      <rect className="barv" x="110" y="330" width="30" height="90" rx="6" />
                      <rect className="barv" x="160" y="290" width="30" height="130" rx="6" />
                      <rect className="barv" x="210" y="250" width="30" height="170" rx="6" />
                      <rect className="barv" x="260" y="200" width="30" height="220" rx="6" />
                    </g>
                    {" "}
                  </svg>
                  {" "}
                  <span className="lbl">
                    {"ROAS · CPA · Conversiones"}
                  </span>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div className="panel" style={{"--c": "var(--purple)"}}>
              {" "}
              <div className="big-n">
                {"02"}
              </div>
              {" "}
              <div className="wrap dept-card">
                {" "}
                <div>
                  {" "}
                  <span className="tag">
                    <i />
                    {"visualblack content creator"}
                  </span>
                  {" "}
                  <h3>
                    {"Contenido que "}
                    <span className="serif">
                      {"detiene"}
                    </span>
                    {" el scroll."}
                  </h3>
                  {" "}
                  <p className="lead">
                    {"Producción audiovisual, gestión de redes y narrativa de marca. Una línea visual y editorial clara que genera interacción y construye comunidad."}
                  </p>
                  {" "}
                  <ul>
                    {" "}
                    <li>
                      {"Producción foto y video"}
                      <span>
                        {"01"}
                      </span>
                    </li>
                    {" "}
                    <li>
                      {"Gestión de redes sociales"}
                      <span>
                        {"02"}
                      </span>
                    </li>
                    {" "}
                    <li>
                      {"UGC e influencer marketing"}
                      <span>
                        {"03"}
                      </span>
                    </li>
                    {" "}
                    <li>
                      {"Identidad visual y dirección creativa"}
                      <span>
                        {"04"}
                      </span>
                    </li>
                    {" "}
                  </ul>
                  {" "}
                  <Link to="/content-creator" className="link" data-color="#a66bff" data-cursor="Entrar">
                    {"Entrar a Content Creator →"}
                  </Link>
                  {" "}
                </div>
                {" "}
                <div className="dept-visual" data-cursor="Ver">
                  {" "}
                  <svg viewBox="0 0 400 500">
                    {" "}
                    <g className="phones">
                      {" "}
                      <rect x="70" y="90" width="150" height="290" rx="24" fill="#100a1c" stroke="rgba(166,107,255,.6)" />
                      {" "}
                      <rect x="85" y="110" width="120" height="200" rx="12" fill="url(#gm)" />
                      {" "}
                      <rect x="85" y="322" width="80" height="8" rx="4" fill="rgba(255,255,255,.4)" />
                      {" "}
                      <rect x="85" y="340" width="50" height="8" rx="4" fill="rgba(255,255,255,.2)" />
                      {" "}
                      <rect x="190" y="150" width="150" height="290" rx="24" fill="#0d0a14" stroke="rgba(255,255,255,.2)" />
                      {" "}
                      <circle cx="265" cy="260" r="34" fill="none" stroke="#a66bff" strokeWidth="2" />
                      {" "}
                      <path d="M255 245 L282 260 L255 275Z" fill="#a66bff" />
                      {" "}
                    </g>
                    {" "}
                    <g className="hearts" fill="#a66bff">
                      {" "}
                      <path className="heart" d="M330 120c-6-10-22-8-22 4 0 10 22 22 22 22s22-12 22-22c0-12-16-14-22-4z" />
                      {" "}
                      <path className="heart" d="M60 420c-4-7-15-5-15 3 0 7 15 15 15 15s15-8 15-15c0-8-11-10-15-3z" opacity=".7" />
                      {" "}
                    </g>
                    {" "}
                    <defs>
                      <lineargradient id="gm" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0" stopColor="#a66bff" />
                        <stop offset="1" stopColor="#3a1d6e" />
                      </lineargradient>
                    </defs>
                    {" "}
                  </svg>
                  {" "}
                  <span className="lbl">
                    {"Reels · Shorts · TikTok · Branding"}
                  </span>
                  {" "}
                </div>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
            <div className="panel" style={{"--c": "var(--cyan)"}}>
              {" "}
              <div className="big-n">
                {"03"}
              </div>
              {" "}
              <div className="wrap dept-card">
                {" "}
                <div>
                  {" "}
                  <span className="tag">
                    <i />
                    {"visualblack developer"}
                  </span>
                  {" "}
                  <h3>
                    {"Tecnología que "}
                    <span className="serif">
                      {"convierte"}
                    </span>
                    {"."}
                  </h3>
                  {" "}
                  <p className="lead">
                    {"Sitios web, e-commerce y plataformas a medida. Rápidos, modernos y pensados para acompañar la decisión del cliente, con estructura, diseño y velocidad."}
                  </p>
                  {" "}
                  <ul>
                    {" "}
                    <li>
                      {"Desarrollo web y landing pages"}
                      <span>
                        {"01"}
                      </span>
                    </li>
                    {" "}
                    <li>
                      {"E-commerce y pasarelas de pago"}
                      <span>
                        {"02"}
                      </span>
                    </li>
                    {" "}
                    <li>
                      {"Web apps, dashboards y SaaS"}
                      <span>
                        {"03"}
                      </span>
                    </li>
                    {" "}
                    <li>
                      {"Automatización e integraciones con IA"}
                      <span>
                        {"04"}
                      </span>
                    </li>
                    {" "}
                  </ul>
                  {" "}
                  <Link to="/developer" className="link" data-color="#3ad6ff" data-cursor="Entrar">
                    {"Entrar a Developer →"}
                  </Link>
                  {" "}
                </div>
                {" "}
                <div className="dept-visual" data-cursor="Ver">
                  {" "}
                  <svg viewBox="0 0 400 500" fontFamily="ui-monospace,Menlo,monospace" fontSize="13">
                    {" "}
                    <rect x="40" y="70" width="320" height="360" rx="18" fill="#071116" stroke="rgba(58,214,255,.4)" />
                    {" "}
                    <g fill="rgba(255,255,255,.3)">
                      <circle cx="64" cy="94" r="5" />
                      <circle cx="82" cy="94" r="5" />
                      <circle cx="100" cy="94" r="5" />
                    </g>
                    {" "}
                    <g className="code">
                      {" "}
                      <text x="64" y="140" fill="#3ad6ff">
                        {"const"}
                      </text>
                      <text x="112" y="140" fill="#fff">
                        {"marca"}
                      </text>
                      <text x="160" y="140" fill="#8e8e93">
                        {"= await"}
                      </text>
                      {" "}
                      <text x="64" y="166" fill="#fff">
                        {" visualblack."}
                      </text>
                      <text x="174" y="166" fill="#3ad6ff">
                        {"build"}
                      </text>
                      <text x="214" y="166" fill="#fff">
                        {"({"}
                      </text>
                      {" "}
                      <text x="64" y="192" fill="#8e8e93">
                        {" velocidad:"}
                      </text>
                      <text x="168" y="192" fill="#ff7a1a">
                        {"'100/100'"}
                      </text>
                      {" "}
                      <text x="64" y="218" fill="#8e8e93">
                        {" diseño:"}
                      </text>
                      <text x="146" y="218" fill="#ff7a1a">
                        {"'premium'"}
                      </text>
                      {" "}
                      <text x="64" y="244" fill="#8e8e93">
                        {" conversión:"}
                      </text>
                      <text x="176" y="244" fill="#a66bff">
                        {"true"}
                      </text>
                      {" "}
                      <text x="64" y="270" fill="#fff">
                        {" });"}
                      </text>
                      {" "}
                      <text x="64" y="310" fill="#3ad6ff">
                        {"→ deploy"}
                      </text>
                      <text x="134" y="310" fill="#8e8e93">
                        {"exitoso ✓"}
                      </text>
                      {" "}
                    </g>
                    {" "}
                    <rect className="caret" x="64" y="326" width="9" height="16" fill="#3ad6ff" />
                    {" "}
                    <g transform="translate(64 370)">
                      <rect width="272" height="6" rx="3" fill="rgba(255,255,255,.08)" />
                      <rect className="load" width="272" height="6" rx="3" fill="#3ad6ff" />
                    </g>
                    {" "}
                  </svg>
                  {" "}
                  <span className="lbl">
                    {"Web · E-commerce · Apps · IA"}
                  </span>
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
        {" "}
        <section className="choose-sec" id="lideres">
          {" "}
          <div className="wrap">
            {" "}
            <p className="eyebrow">
              {"Elige tu departamento"}
            </p>
            {" "}
            <h2>
              {"Cada área, liderada por"}
              <br />
              {"un "}
              <span className="serif">
                {"referente"}
              </span>
              {"."}
            </h2>
            {" "}
            <div className="choose">
              {" "}
              <Link to="/consulting" data-color="#ff7a1a" style={{"--x": "#ff7a1a"}} data-cursor="Entrar">
                {" "}
                <span className="ch-photo">
                  <img src="/assets/img/alexis-yacila.webp" alt="Alexis Yacila, Head of Consulting" />
                </span>
                {" "}
                <span className="n">
                  {"01 — Consulting"}
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
                  <p className="who">
                    <b>
                      {"Alexis Yacila"}
                    </b>
                    {"Head of Consulting"}
                  </p>
                  {" "}
                  <p className="more">
                    {"Estrategia digital, Meta Ads, Google Ads, TikTok Ads, embudos de venta y analítica."}
                  </p>
                  {" "}
                  <span className="go">
                    <i>
                      {"↗"}
                    </i>
                    {"Entrar"}
                  </span>
                </div>
                {" "}
              </Link>
              {" "}
              <Link to="/content-creator" data-color="#a66bff" style={{"--x": "#a66bff"}} data-cursor="Entrar">
                {" "}
                <span className="ch-photo">
                  <img src="/assets/img/joss.webp" alt="Josep Garip Ordoñez Odar, Head of Content" />
                </span>
                {" "}
                <span className="n">
                  {"02 — Content Creator"}
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
                  <p className="who">
                    <b>
                      {"Josep Garip Ordoñez Odar"}
                    </b>
                    {"Head of Content"}
                  </p>
                  {" "}
                  <p className="more">
                    {"Producción de video, fotografía, redes sociales, UGC, branding y copywriting."}
                  </p>
                  {" "}
                  <span className="go">
                    <i>
                      {"↗"}
                    </i>
                    {"Entrar"}
                  </span>
                </div>
                {" "}
              </Link>
              {" "}
              <Link to="/developer" data-color="#3ad6ff" style={{"--x": "#3ad6ff"}} data-cursor="Entrar">
                {" "}
                <span className="ch-photo">
                  <img src="/assets/img/santiago-yacila.webp" alt="Santiago Yacila, Head of Engineering" />
                </span>
                {" "}
                <span className="n">
                  {"03 — Developer"}
                </span>
                {" "}
                <div>
                  <h3>
                    {"Tecnología que "}
                    <span className="serif">
                      {"convierte"}
                    </span>
                    {"."}
                  </h3>
                  <p className="who">
                    <b>
                      {"Santiago Yacila"}
                    </b>
                    {"Head of Engineering"}
                  </p>
                  {" "}
                  <p className="more">
                    {"Webs corporativas, landing pages, e-commerce, web apps, automatización con IA y SEO técnico."}
                  </p>
                  {" "}
                  <span className="go">
                    <i>
                      {"↗"}
                    </i>
                    {"Entrar"}
                  </span>
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
        {" "}
        <section className="stats">
          {" "}
          <div className="wrap row">
            {" "}
            <div className="stat">
              <b data-count="85" data-prefix="+">
                {"0"}
              </b>
              <span>
                {"Empresas que transformaron su estrategia digital con nosotros."}
              </span>
            </div>
            {" "}
            <div className="stat">
              <b data-count="3">
                {"0"}
              </b>
              <span>
                {"Departamentos especializados trabajando como un solo equipo."}
              </span>
            </div>
            {" "}
            <div className="stat">
              <b data-count="100" data-suffix="%">
                {"0"}
              </b>
              <span>
                {"De nuestras acciones, medibles y orientadas a resultados."}
              </span>
            </div>
            {" "}
          </div>
          {" "}
        </section>
        {" "}
        {" "}
        <section className="marquee dark" aria-hidden="true">
          {" "}
          <div className="m" id="mq">
            {" "}
            <span>
              {"Consulting "}
              <i />
              {" "}
              <em>
                {"Content"}
              </em>
              {" "}
              <i />
              {" Developer "}
              <i />
              {" "}
              <em>
                {"Estrategia"}
              </em>
              {" "}
              <i />
              {" Creatividad "}
              <i />
              {" "}
              <em>
                {"Tecnología"}
              </em>
              {" "}
              <i />
            </span>
            {" "}
            <span>
              {"Consulting "}
              <i />
              {" "}
              <em>
                {"Content"}
              </em>
              {" "}
              <i />
              {" Developer "}
              <i />
              {" "}
              <em>
                {"Estrategia"}
              </em>
              {" "}
              <i />
              {" Creatividad "}
              <i />
              {" "}
              <em>
                {"Tecnología"}
              </em>
              {" "}
              <i />
            </span>
            {" "}
          </div>
          {" "}
        </section>
        {" "}
        {" "}
        <section className="process" id="proceso">
          {" "}
          <div className="wrap">
            {" "}
            <div className="head">
              {" "}
              <h2>
                {"Cómo "}
                <span className="serif">
                  {"trabajamos"}
                </span>
                {"."}
              </h2>
              {" "}
              <p>
                {"Un método probado que une a los tres departamentos en cada etapa de tu proyecto."}
              </p>
              {" "}
            </div>
            {" "}
            <div className="stack">
              {" "}
              <div className="step">
                <div className="n">
                  {"01"}
                </div>
                <div>
                  <p className="eyebrow" style={{"color": "var(--orange)"}}>
                    {"Consulting"}
                  </p>
                  <h3>
                    {"Diagnóstico"}
                  </h3>
                  <p>
                    {"Analizamos tu negocio, tu competencia y tu audiencia para entender dónde estás y hacia dónde puedes llegar."}
                  </p>
                </div>
              </div>
              {" "}
              <div className="step">
                <div className="n">
                  {"02"}
                </div>
                <div>
                  <p className="eyebrow" style={{"color": "var(--purple)"}}>
                    {"Consulting + Content"}
                  </p>
                  <h3>
                    {"Estrategia"}
                  </h3>
                  <p>
                    {"Diseñamos un plan personalizado con objetivos claros, métricas de éxito y un plan de acción por canales."}
                  </p>
                </div>
              </div>
              {" "}
              <div className="step">
                <div className="n">
                  {"03"}
                </div>
                <div>
                  <p className="eyebrow" style={{"color": "var(--cyan)"}}>
                    {"Content + Developer"}
                  </p>
                  <h3>
                    {"Ejecución"}
                  </h3>
                  <p>
                    {"Implementamos cada acción con precisión, calidad y tiempos definidos: contenido, campañas y tecnología en sincronía."}
                  </p>
                </div>
              </div>
              {" "}
              <div className="step">
                <div className="n">
                  {"04"}
                </div>
                <div>
                  <p className="eyebrow">
                    {"Los tres departamentos"}
                  </p>
                  <h3>
                    {"Optimización"}
                  </h3>
                  <p>
                    {"Medimos, aprendemos y escalamos. Optimización continua según rendimiento para que cada mes sea mejor que el anterior."}
                  </p>
                </div>
              </div>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
        </section>
        {" "}
        {" "}
        <section className="contact" id="contacto">
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
                <span className="serif">
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
                  <input type="checkbox" name="d" value="Developer" />
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
                <img src="/logo.svg" alt="Visual Black — Marketing 360°" style={{"height": "44px"}} />
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
            <img src="/logo.svg" alt="" aria-hidden="true" />
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
    </>
  );
}
