import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/consulting.css';
import initMain from '../scripts/main.js';
import initPage from '../scripts/consulting.js';
import { setupPage } from '../lib/setupPage.js';

export default function Consulting() {
  useEffect(() => {
    setupPage({
      title: "Visual Black Consulting — Estrategia, publicidad digital y crecimiento medible.",
      bodyClass: "dept ",
      bodyStyle: "--accent-l:#e8630a;--accent-d:#ff7a1a",
      orbs: "255,122,26;255,170,80;180,60,0",
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
              <img src="/logo.svg" alt="Visual Black" />
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
            <img src="/logo.svg" alt="Visual Black — Marketing 360°" />
          </a>
          {" "}
          <ul>
            <li>
              <a href="/" data-color="#111">
                {"Inicio"}
              </a>
            </li>
            <li>
              <Link to="/consulting" data-color="#ff7a1a" className="active">
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
              <Link to="/developer" data-color="#3ad6ff">
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
        <section className="hero c-hero">
          {" "}
          <svg className="c-chart" viewBox="0 0 1440 600" preserveAspectRatio="none" aria-hidden="true">
            {" "}
            <g className="grid">
              <line x1="0" x2="1440" y1="100" y2="100" />
              <line x1="0" x2="1440" y1="200" y2="200" />
              <line x1="0" x2="1440" y1="300" y2="300" />
              <line x1="0" x2="1440" y1="400" y2="400" />
              <line x1="0" x2="1440" y1="500" y2="500" />
              <line y1="0" y2="600" x1="240" x2="240" />
              <line y1="0" y2="600" x1="480" x2="480" />
              <line y1="0" y2="600" x1="720" x2="720" />
              <line y1="0" y2="600" x1="960" x2="960" />
              <line y1="0" y2="600" x1="1200" x2="1200" />
            </g>
            {" "}
            <path className="area" d="M0 540 C 200 520, 330 490, 470 440 S 720 380, 840 300 S 1090 200, 1210 150 S 1390 80, 1440 60 L1440 600 L0 600 Z" />
            {" "}
            <path className="line" d="M0 540 C 200 520, 330 490, 470 440 S 720 380, 840 300 S 1090 200, 1210 150 S 1390 80, 1440 60" />
            {" "}
          </svg>
          {" "}
          <div className="c-pts" aria-hidden="true">
            {" "}
            <span style={{"left": "32.6%", "top": "73.3%"}}>
              <i />
              <em>
                {"Estrategia"}
              </em>
            </span>
            {" "}
            <span style={{"left": "58.3%", "top": "50%"}}>
              <i />
              <em>
                {"Campañas"}
              </em>
            </span>
            {" "}
            <span style={{"left": "84%", "top": "25%"}}>
              <i />
              <em>
                {"Escala"}
              </em>
            </span>
            {" "}
          </div>
          {" "}
          <div className="hero-content c-hero-content">
            {" "}
            <div className="wrap">
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
                  {"Consulting"}
                </span>
              </div>
              {" "}
              <h1>
                <span className="line-mask">
                  <span>
                    {"Estrategia que"}
                  </span>
                </span>
                <span className="line-mask">
                  <span>
                    <span className="serif accent">
                      {"mueve"}
                    </span>
                    {" negocios."}
                  </span>
                </span>
              </h1>
              {" "}
              <p className="sub h-fade">
                {"Diagnosticamos, planificamos y dirigimos tu crecimiento digital. Campañas con enfoque comercial, objetivos claros y métricas de éxito desde el día uno."}
              </p>
              {" "}
              <div className="ctas h-fade">
                {" "}
                <a href="#simulador" className="btn magnetic">
                  {"Simular mi crecimiento "}
                  <svg viewBox="0 0 16 16" fill="none">
                    <path d="M1 8h13M9 3l5 5-5 5" stroke="currentColor" strokeWidth="1.6" />
                  </svg>
                </a>
                {" "}
                <a href="#servicios" className="btn ghost magnetic">
                  {"Ver servicios"}
                </a>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
          <div className="c-ticker h-fade">
            <div className="wrap">
              <div>
                <b data-count="85" data-prefix="+" data-suffix="">
                  {"0"}
                </b>
                <span>
                  {"Empresas que confiaron su estrategia digital en nosotros."}
                </span>
              </div>
              <div>
                <b data-count="4" data-prefix="" data-suffix="">
                  {"0"}
                </b>
                <span>
                  {"Plataformas publicitarias dominadas: Meta, Google, TikTok y YouTube."}
                </span>
              </div>
              <div>
                <b data-count="100" data-prefix="" data-suffix="%">
                  {"0"}
                </b>
                <span>
                  {"De las campañas medidas con datos reales de conversión."}
                </span>
              </div>
            </div>
          </div>
          {" "}
        </section>
        {" "}
        <section className="manifesto">
          {" "}
          <div className="wrap">
            {" "}
            <p className="eyebrow" style={{"marginBottom": "40px", "color": "var(--accent)"}}>
              {"Nuestra filosofía"}
            </p>
            {" "}
            <p id="manifesto">
              {"La publicidad sin "}
              <span className="serif">
                {"estrategia"}
              </span>
              {" es gasto. Nosotros convertimos cada campaña en un sistema "}
              <span className="serif">
                {"predecible"}
              </span>
              {" de clientes, con datos que guían cada decisión."}
            </p>
            {" "}
          </div>
          {" "}
        </section>
        {" "}
        <section className="c-svc" id="servicios">
          {" "}
          <div className="wrap">
            {" "}
            <div className="c-head">
              {" "}
              <div>
                <p className="eyebrow">
                  {"Servicios"}
                </p>
                <h2>
                  {"Seis frentes."}
                  <br />
                  <span className="serif">
                    {"Un"}
                  </span>
                  {" objetivo."}
                </h2>
              </div>
              {" "}
              <p>
                {"Cada servicio puede contratarse por separado o como un plan integral de crecimiento. Haz clic en cada uno para ver el detalle."}
              </p>
              {" "}
            </div>
            {" "}
            <div className="acc">
              {" "}
              <div className="acc-row open">
                {" "}
                <button className="acc-head" aria-expanded="true">
                  {" "}
                  <span className="n">
                    {"01"}
                  </span>
                  <span className="t">
                    {"Estrategia digital y posicionamiento"}
                  </span>
                  <span className="tg">
                    {"Auditoría inicial · Buyer persona · Plan de medios"}
                  </span>
                  <span className="pm" aria-hidden="true" />
                  {" "}
                </button>
                {" "}
                <div className="acc-body">
                  <div className="acc-in">
                    <p>
                      {"Analizamos tu mercado, tu competencia y tu audiencia para definir un plan de acción por canales, objetivos y presupuestos."}
                    </p>
                    <div className="tags">
                      <span>
                        {"Auditoría inicial"}
                      </span>
                      <span>
                        {"Buyer persona"}
                      </span>
                      <span>
                        {"Plan de medios"}
                      </span>
                      <span>
                        {"KPIs"}
                      </span>
                    </div>
                    <a href="#contacto" className="acc-cta">
                      {"Cotizar este servicio →"}
                    </a>
                  </div>
                </div>
                {" "}
              </div>
              {" "}
              <div className="acc-row">
                {" "}
                <button className="acc-head" aria-expanded="false">
                  {" "}
                  <span className="n">
                    {"02"}
                  </span>
                  <span className="t">
                    {"Meta Ads: Facebook e Instagram"}
                  </span>
                  <span className="tg">
                    {"Campañas de WhatsApp · Leads · Ventas"}
                  </span>
                  <span className="pm" aria-hidden="true" />
                  {" "}
                </button>
                {" "}
                <div className="acc-body">
                  <div className="acc-in">
                    <p>
                      {"Campañas de mensajes, leads y ventas con estructura profesional, segmentación inteligente y creatividades que convierten."}
                    </p>
                    <div className="tags">
                      <span>
                        {"Campañas de WhatsApp"}
                      </span>
                      <span>
                        {"Leads"}
                      </span>
                      <span>
                        {"Ventas"}
                      </span>
                      <span>
                        {"Retargeting"}
                      </span>
                    </div>
                    <a href="#contacto" className="acc-cta">
                      {"Cotizar este servicio →"}
                    </a>
                  </div>
                </div>
                {" "}
              </div>
              {" "}
              <div className="acc-row">
                {" "}
                <button className="acc-head" aria-expanded="false">
                  {" "}
                  <span className="n">
                    {"03"}
                  </span>
                  <span className="t">
                    {"Google Ads y YouTube"}
                  </span>
                  <span className="tg">
                    {"Search · Performance Max · YouTube"}
                  </span>
                  <span className="pm" aria-hidden="true" />
                  {" "}
                </button>
                {" "}
                <div className="acc-body">
                  <div className="acc-in">
                    <p>
                      {"Capturamos la demanda que ya te está buscando con campañas de búsqueda, Performance Max y video."}
                    </p>
                    <div className="tags">
                      <span>
                        {"Search"}
                      </span>
                      <span>
                        {"Performance Max"}
                      </span>
                      <span>
                        {"YouTube"}
                      </span>
                      <span>
                        {"Shopping"}
                      </span>
                    </div>
                    <a href="#contacto" className="acc-cta">
                      {"Cotizar este servicio →"}
                    </a>
                  </div>
                </div>
                {" "}
              </div>
              {" "}
              <div className="acc-row">
                {" "}
                <button className="acc-head" aria-expanded="false">
                  {" "}
                  <span className="n">
                    {"04"}
                  </span>
                  <span className="t">
                    {"TikTok Ads"}
                  </span>
                  <span className="tg">
                    {"Spark Ads · Smart+ · Conversiones"}
                  </span>
                  <span className="pm" aria-hidden="true" />
                  {" "}
                </button>
                {" "}
                <div className="acc-body">
                  <div className="acc-in">
                    <p>
                      {"Llegamos a nuevas audiencias con anuncios nativos, Spark Ads y campañas optimizadas para conversión."}
                    </p>
                    <div className="tags">
                      <span>
                        {"Spark Ads"}
                      </span>
                      <span>
                        {"Smart+"}
                      </span>
                      <span>
                        {"Conversiones"}
                      </span>
                    </div>
                    <a href="#contacto" className="acc-cta">
                      {"Cotizar este servicio →"}
                    </a>
                  </div>
                </div>
                {" "}
              </div>
              {" "}
              <div className="acc-row">
                {" "}
                <button className="acc-head" aria-expanded="false">
                  {" "}
                  <span className="n">
                    {"05"}
                  </span>
                  <span className="t">
                    {"Embudos de venta y automatización"}
                  </span>
                  <span className="tg">
                    {"Funnels · CRM · WhatsApp Business"}
                  </span>
                  <span className="pm" aria-hidden="true" />
                  {" "}
                </button>
                {" "}
                <div className="acc-body">
                  <div className="acc-in">
                    <p>
                      {"Diseñamos el recorrido completo: anuncio, conversación, seguimiento y cierre, con automatizaciones que no dejan escapar leads."}
                    </p>
                    <div className="tags">
                      <span>
                        {"Funnels"}
                      </span>
                      <span>
                        {"CRM"}
                      </span>
                      <span>
                        {"WhatsApp Business"}
                      </span>
                      <span>
                        {"Seguimiento"}
                      </span>
                    </div>
                    <a href="#contacto" className="acc-cta">
                      {"Cotizar este servicio →"}
                    </a>
                  </div>
                </div>
                {" "}
              </div>
              {" "}
              <div className="acc-row">
                {" "}
                <button className="acc-head" aria-expanded="false">
                  {" "}
                  <span className="n">
                    {"06"}
                  </span>
                  <span className="t">
                    {"Tracking, analítica y reportes"}
                  </span>
                  <span className="tg">
                    {"Píxel + CAPI · GA4 · Dashboards"}
                  </span>
                  <span className="pm" aria-hidden="true" />
                  {" "}
                </button>
                {" "}
                <div className="acc-body">
                  <div className="acc-in">
                    <p>
                      {"Configuramos píxel, API de Conversiones y eventos para medir de verdad. Reportes claros con lo que importa."}
                    </p>
                    <div className="tags">
                      <span>
                        {"Píxel + CAPI"}
                      </span>
                      <span>
                        {"GA4"}
                      </span>
                      <span>
                        {"Dashboards"}
                      </span>
                      <span>
                        {"Reportes mensuales"}
                      </span>
                    </div>
                    <a href="#contacto" className="acc-cta">
                      {"Cotizar este servicio →"}
                    </a>
                  </div>
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
        <section className="c-sim dark" id="simulador">
          {" "}
          <div className="wrap">
            {" "}
            <div className="c-head">
              {" "}
              <div>
                <p className="eyebrow" style={{"color": "var(--accent)"}}>
                  {"Simulador"}
                </p>
                <h2>
                  {"¿Cuánto podrías "}
                  <span className="serif">
                    {"crecer"}
                  </span>
                  {"?"}
                </h2>
              </div>
              {" "}
              <p>
                {"Mueve los controles con los datos de tu negocio y mira una proyección al instante."}
              </p>
              {" "}
            </div>
            {" "}
            <div className="sim">
              {" "}
              <div className="sim-in">
                {" "}
                <label className="rng">
                  <span>
                    {"Inversión mensual en anuncios"}
                  </span>
                  <b id="vInv" />
                  <input type="range" id="sInv" min="300" max="10000" step="100" defaultValue="1500" />
                </label>
                {" "}
                <label className="rng">
                  <span>
                    {"Costo por lead (CPL)"}
                  </span>
                  <b id="vCpl" />
                  <input type="range" id="sCpl" min="2" max="40" step="1" defaultValue="8" />
                </label>
                {" "}
                <label className="rng">
                  <span>
                    {"Tasa de cierre de ventas"}
                  </span>
                  <b id="vCr" />
                  <input type="range" id="sCr" min="2" max="40" step="1" defaultValue="12" />
                </label>
                {" "}
                <label className="rng">
                  <span>
                    {"Ticket promedio"}
                  </span>
                  <b id="vTk" />
                  <input type="range" id="sTk" min="20" max="2000" step="10" defaultValue="150" />
                </label>
                {" "}
              </div>
              {" "}
              <div className="sim-out">
                {" "}
                <div className="o">
                  <span>
                    {"Leads al mes"}
                  </span>
                  <b id="oLeads">
                    {"0"}
                  </b>
                </div>
                {" "}
                <div className="o">
                  <span>
                    {"Ventas al mes"}
                  </span>
                  <b id="oSales">
                    {"0"}
                  </b>
                </div>
                {" "}
                <div className="o big">
                  <span>
                    {"Ingresos estimados"}
                  </span>
                  <b id="oRev">
                    {"0"}
                  </b>
                </div>
                {" "}
                <div className="o">
                  <span>
                    {"Retorno (ROAS)"}
                  </span>
                  <b id="oRoas">
                    {"0"}
                  </b>
                </div>
                {" "}
                <div className="bars">
                  <div>
                    <span>
                      {"Inversión"}
                    </span>
                    <i id="bInv" />
                  </div>
                  <div>
                    <span>
                      {"Ingresos"}
                    </span>
                    <i id="bRev" />
                  </div>
                </div>
                {" "}
                <p className="note">
                  {"Proyección referencial calculada con los valores que ingresas. Los resultados reales dependen del mercado, la oferta y la ejecución."}
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
        <section className="c-time" id="proceso">
          {" "}
          <div className="wrap">
            {" "}
            <div className="c-head">
              {" "}
              <div>
                <p className="eyebrow">
                  {"Método"}
                </p>
                <h2>
                  {"De la auditoría"}
                  <br />
                  {"a la "}
                  <span className="serif">
                    {"escala"}
                  </span>
                  {"."}
                </h2>
              </div>
              {" "}
              <p>
                {"Cuatro fases. Cada una con entregables claros y reuniones de seguimiento."}
              </p>
              {" "}
            </div>
            {" "}
            <div className="tl">
              {" "}
              <div className="tl-line">
                <i />
              </div>
              {" "}
              <div className="tl-steps">
                <div className="tl-step">
                  <span className="dot" />
                  <span className="k">
                    {"Fase 01"}
                  </span>
                  <h3>
                    {"Auditoría"}
                  </h3>
                  <p>
                    {"Revisamos tus cuentas, tu web y tus números para encontrar dónde se pierde el dinero y dónde está la oportunidad."}
                  </p>
                </div>
                <div className="tl-step">
                  <span className="dot" />
                  <span className="k">
                    {"Fase 02"}
                  </span>
                  <h3>
                    {"Plan de crecimiento"}
                  </h3>
                  <p>
                    {"Definimos objetivos, presupuesto, públicos y mensajes. Un plan de acción claro por canal."}
                  </p>
                </div>
                <div className="tl-step">
                  <span className="dot" />
                  <span className="k">
                    {"Fase 03"}
                  </span>
                  <h3>
                    {"Lanzamiento"}
                  </h3>
                  <p>
                    {"Estructuramos y lanzamos las campañas con tracking completo desde el primer día."}
                  </p>
                </div>
                <div className="tl-step">
                  <span className="dot" />
                  <span className="k">
                    {"Fase 04"}
                  </span>
                  <h3>
                    {"Optimización y escala"}
                  </h3>
                  <p>
                    {"Medimos, testeamos y escalamos lo que funciona. Cada mes mejor que el anterior."}
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
        <section className="leader" id="lider" style={{"--c": "var(--accent)"}}>
          {" "}
          <div className="glow" />
          {" "}
          <div className="wrap grid">
            {" "}
            <div className="portrait has-photo" data-cursor="Perfil">
              {" "}
              <div className="ph">
                <img src="/assets/img/alexis-yacila.webp" alt="Alexis Yacila, Head of Consulting de visualblack" width="1493" height="2000" />
              </div>
              {" "}
              <span className="mono">
                {"Líder · Consulting"}
              </span>
              {" "}
              <div className="badge">
                <b>
                  {"01"}
                </b>
                {"Head of Consulting"}
              </div>
              {" "}
            </div>
            {" "}
            <div>
              {" "}
              <span className="eyebrow role">
                {"Director de visualblack consulting · Trafficker digital"}
              </span>
              {" "}
              <h2>
                {"Alexis"}
                <br />
                <span className="serif">
                  {"Yacila"}
                </span>
              </h2>
              {" "}
              <blockquote>
                {"“La creatividad sin estrategia es arte. Con estrategia, es crecimiento.”"}
              </blockquote>
              {" "}
              <p className="bio">
                {"Trafficker digital y estratega de paid media. Trabaja con negocios y agencias que ya invierten en anuncios pero necesitan una estrategia clara: diagnóstico, estructura de campañas en Meta, Google y TikTok, y foco en la calidad de los leads. Lidera la visión estratégica de cada cliente de visualblack consulting."}
              </p>
              {" "}
              <div className="creds">
                <div>
                  <b data-count="50" data-prefix="+" data-suffix="">
                    {"0"}
                  </b>
                  <span>
                    {"clientes acompañados"}
                  </span>
                </div>
                <div>
                  <b data-count="5" data-prefix="+" data-suffix="">
                    {"0"}
                  </b>
                  <span>
                    {"países"}
                  </span>
                </div>
                <div>
                  <b data-count="3" data-prefix="" data-suffix="">
                    {"0"}
                  </b>
                  <span>
                    {"plataformas: Meta, Google y TikTok"}
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
        <section className="c-diag" id="diagnostico">
          {" "}
          <div className="wrap">
            {" "}
            <div className="c-head">
              {" "}
              <div>
                <p className="eyebrow">
                  {"Diagnóstico rápido"}
                </p>
                <h2>
                  {"¿Te suena "}
                  <span className="serif">
                    {"familiar"}
                  </span>
                  {"?"}
                </h2>
              </div>
              {" "}
              <p>
                {"Marca lo que te pasa hoy con tus anuncios y te decimos por dónde empezar."}
              </p>
              {" "}
            </div>
            {" "}
            <div className="diag-grid">
              <button className="dg" type="button" aria-pressed="false">
                <span className="ck" aria-hidden="true" />
                <span className="tx">
                  {"Invierto en anuncios pero no sé si realmente funcionan."}
                </span>
              </button>
              <button className="dg" type="button" aria-pressed="false">
                <span className="ck" aria-hidden="true" />
                <span className="tx">
                  {"Me llegan mensajes, pero muy pocos terminan comprando."}
                </span>
              </button>
              <button className="dg" type="button" aria-pressed="false">
                <span className="ck" aria-hidden="true" />
                <span className="tx">
                  {"Cada mes me cuesta más conseguir un cliente."}
                </span>
              </button>
              <button className="dg" type="button" aria-pressed="false">
                <span className="ck" aria-hidden="true" />
                <span className="tx">
                  {"No tengo el píxel ni el seguimiento de conversiones bien configurado."}
                </span>
              </button>
              <button className="dg" type="button" aria-pressed="false">
                <span className="ck" aria-hidden="true" />
                <span className="tx">
                  {"Mis campañas son solo “impulsar publicación”."}
                </span>
              </button>
              <button className="dg" type="button" aria-pressed="false">
                <span className="ck" aria-hidden="true" />
                <span className="tx">
                  {"No sé qué mensaje o anuncio funciona mejor."}
                </span>
              </button>
            </div>
            {" "}
            <div className="diag-out">
              {" "}
              <div className="meter" aria-hidden="true">
                <i />
              </div>
              {" "}
              <div className="diag-row">
                <p id="diagMsg">
                  {"Selecciona las situaciones que vives hoy."}
                </p>
                <a href="#contacto" className="btn magnetic" id="diagCta">
                  {"Quiero mi diagnóstico "}
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
              <Link to="/developer" data-color="#3ad6ff" style={{"--x": "#3ad6ff"}} data-cursor="Entrar">
                {" "}
                <span className="n">
                  {"03 — visualblack"}
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
                  <p>
                    {"Webs, e-commerce, apps y automatización con IA."}
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
        <section className="contact dark" id="contacto">
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
                  <input type="checkbox" name="d" value="Consulting" defaultChecked />
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
      {" "}
    </>
  );
}
