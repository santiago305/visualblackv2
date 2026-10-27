import { useEffect } from 'react';
import '../styles/content-creator.css';
import initMain from '../scripts/main.js';
import initPage from '../scripts/content-creator.js';
import { setupPage } from '../lib/setupPage.js';

export default function ContentCreator() {
  useEffect(() => {
    setupPage({
      title: "Visual Black Content Creator — Producción audiovisual, redes sociales y marca.",
      bodyClass: "dept dark",
      bodyStyle: "--accent-l:#7c3aed;--accent-d:#a66bff",
      orbs: "166,107,255;200,160,255;90,40,200",
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
              <a href="/consulting" data-color="#ff7a1a">
                <span className="d" style={{"background": "#ff7a1a"}} />
                {"Consulting"}
              </a>
            </li>
            <li>
              <a href="/content-creator" data-color="#a66bff" className="active">
                <span className="d" style={{"background": "#a66bff"}} />
                {"Content Creator"}
              </a>
            </li>
            <li>
              <a href="/developer" data-color="#3ad6ff">
                <span className="d" style={{"background": "#3ad6ff"}} />
                {"Developer"}
              </a>
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
        <a href="/consulting" data-color="#ff7a1a">
          <span className="d" style={{"background": "#ff7a1a"}} />
          {"Consulting"}
        </a>
        <a href="/content-creator" data-color="#a66bff">
          <span className="d" style={{"background": "#a66bff"}} />
          {"Content Creator"}
        </a>
        <a href="/developer" data-color="#3ad6ff">
          <span className="d" style={{"background": "#3ad6ff"}} />
          {"Developer"}
        </a>
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
        <section className="hero cc-hero">
          {" "}
          <div className="cc-wall" aria-hidden="true">
            <div className="col">
              <div className="colin">
                <div className="reel" style={{"--g1": "#7c3aed", "--g2": "#1e0b3a", "background": "url('/assets/img/reels/reel-01.jpg') center/cover no-repeat,linear-gradient(160deg,#7c3aed,#1e0b3a)"}}>
                  <span className="r-top">
                    <i />
                    <b />
                  </span>
                  <span className="r-play">
                    <svg viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </span>
                  <span className="r-title">
                    {"3 errores que "}
                    <em>
                      {"matan"}
                    </em>
                    {" tus ventas"}
                  </span>
                  <span className="r-side">
                    <svg viewBox="0 0 24 24">
                      <path d="M12 20s-7-4.5-7-10a4 4 0 0 1 7-2.5A4 4 0 0 1 19 10c0 5.5-7 10-7 10z" />
                    </svg>
                    <svg viewBox="0 0 24 24">
                      <path d="M4 5h16v11H8l-4 4z" />
                    </svg>
                    <svg viewBox="0 0 24 24">
                      <path d="M4 12l16-8-6 16-3-6z" />
                    </svg>
                  </span>
                  <span className="r-cap" />
                  <span className="r-cap s" />
                  <span className="r-tag">
                    {"#reels"}
                  </span>
                </div>
                <div className="reel" style={{"--g1": "#c026d3", "--g2": "#2a0a33", "background": "url('/assets/img/reels/reel-02.jpg') center/cover no-repeat,linear-gradient(160deg,#c026d3,#2a0a33)"}}>
                  <span className="r-top">
                    <i />
                    <b />
                  </span>
                  <span className="r-play">
                    <svg viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </span>
                  <span className="r-title">
                    {"Así se graba un "}
                    <em>
                      {"reel"}
                    </em>
                    {" que vende"}
                  </span>
                  <span className="r-side">
                    <svg viewBox="0 0 24 24">
                      <path d="M12 20s-7-4.5-7-10a4 4 0 0 1 7-2.5A4 4 0 0 1 19 10c0 5.5-7 10-7 10z" />
                    </svg>
                    <svg viewBox="0 0 24 24">
                      <path d="M4 5h16v11H8l-4 4z" />
                    </svg>
                    <svg viewBox="0 0 24 24">
                      <path d="M4 12l16-8-6 16-3-6z" />
                    </svg>
                  </span>
                  <span className="r-cap" />
                  <span className="r-cap s" />
                  <span className="r-tag">
                    {"#branding"}
                  </span>
                </div>
                <div className="reel" style={{"--g1": "#4f46e5", "--g2": "#0c0a2e", "background": "url('/assets/img/reels/reel-03.jpg') center/cover no-repeat,linear-gradient(160deg,#4f46e5,#0c0a2e)"}}>
                  <span className="r-top">
                    <i />
                    <b />
                  </span>
                  <span className="r-play">
                    <svg viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </span>
                  <span className="r-title">
                    {"Antes "}
                    <em>
                      {"vs"}
                    </em>
                    {" después"}
                  </span>
                  <span className="r-side">
                    <svg viewBox="0 0 24 24">
                      <path d="M12 20s-7-4.5-7-10a4 4 0 0 1 7-2.5A4 4 0 0 1 19 10c0 5.5-7 10-7 10z" />
                    </svg>
                    <svg viewBox="0 0 24 24">
                      <path d="M4 5h16v11H8l-4 4z" />
                    </svg>
                    <svg viewBox="0 0 24 24">
                      <path d="M4 12l16-8-6 16-3-6z" />
                    </svg>
                  </span>
                  <span className="r-cap" />
                  <span className="r-cap s" />
                  <span className="r-tag">
                    {"#ugc"}
                  </span>
                </div>
                <div className="reel" style={{"--g1": "#a66bff", "--g2": "#120726", "background": "url('/assets/img/reels/reel-04.jpg') center/cover no-repeat,linear-gradient(160deg,#a66bff,#120726)"}}>
                  <span className="r-top">
                    <i />
                    <b />
                  </span>
                  <span className="r-play">
                    <svg viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </span>
                  <span className="r-title">
                    {"POV: tu marca se vuelve "}
                    <em>
                      {"viral"}
                    </em>
                    {" "}
                  </span>
                  <span className="r-side">
                    <svg viewBox="0 0 24 24">
                      <path d="M12 20s-7-4.5-7-10a4 4 0 0 1 7-2.5A4 4 0 0 1 19 10c0 5.5-7 10-7 10z" />
                    </svg>
                    <svg viewBox="0 0 24 24">
                      <path d="M4 5h16v11H8l-4 4z" />
                    </svg>
                    <svg viewBox="0 0 24 24">
                      <path d="M4 12l16-8-6 16-3-6z" />
                    </svg>
                  </span>
                  <span className="r-cap" />
                  <span className="r-cap s" />
                  <span className="r-tag">
                    {"#behindthescenes"}
                  </span>
                </div>
                <div className="reel" style={{"--g1": "#7c3aed", "--g2": "#1e0b3a", "background": "url('/assets/img/reels/reel-01.jpg') center/cover no-repeat,linear-gradient(160deg,#7c3aed,#1e0b3a)"}}>
                  <span className="r-top">
                    <i />
                    <b />
                  </span>
                  <span className="r-play">
                    <svg viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </span>
                  <span className="r-title">
                    {"3 errores que "}
                    <em>
                      {"matan"}
                    </em>
                    {" tus ventas"}
                  </span>
                  <span className="r-side">
                    <svg viewBox="0 0 24 24">
                      <path d="M12 20s-7-4.5-7-10a4 4 0 0 1 7-2.5A4 4 0 0 1 19 10c0 5.5-7 10-7 10z" />
                    </svg>
                    <svg viewBox="0 0 24 24">
                      <path d="M4 5h16v11H8l-4 4z" />
                    </svg>
                    <svg viewBox="0 0 24 24">
                      <path d="M4 12l16-8-6 16-3-6z" />
                    </svg>
                  </span>
                  <span className="r-cap" />
                  <span className="r-cap s" />
                  <span className="r-tag">
                    {"#reels"}
                  </span>
                </div>
                <div className="reel" style={{"--g1": "#c026d3", "--g2": "#2a0a33", "background": "url('/assets/img/reels/reel-02.jpg') center/cover no-repeat,linear-gradient(160deg,#c026d3,#2a0a33)"}}>
                  <span className="r-top">
                    <i />
                    <b />
                  </span>
                  <span className="r-play">
                    <svg viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </span>
                  <span className="r-title">
                    {"Así se graba un "}
                    <em>
                      {"reel"}
                    </em>
                    {" que vende"}
                  </span>
                  <span className="r-side">
                    <svg viewBox="0 0 24 24">
                      <path d="M12 20s-7-4.5-7-10a4 4 0 0 1 7-2.5A4 4 0 0 1 19 10c0 5.5-7 10-7 10z" />
                    </svg>
                    <svg viewBox="0 0 24 24">
                      <path d="M4 5h16v11H8l-4 4z" />
                    </svg>
                    <svg viewBox="0 0 24 24">
                      <path d="M4 12l16-8-6 16-3-6z" />
                    </svg>
                  </span>
                  <span className="r-cap" />
                  <span className="r-cap s" />
                  <span className="r-tag">
                    {"#branding"}
                  </span>
                </div>
                <div className="reel" style={{"--g1": "#4f46e5", "--g2": "#0c0a2e", "background": "url('/assets/img/reels/reel-03.jpg') center/cover no-repeat,linear-gradient(160deg,#4f46e5,#0c0a2e)"}}>
                  <span className="r-top">
                    <i />
                    <b />
                  </span>
                  <span className="r-play">
                    <svg viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </span>
                  <span className="r-title">
                    {"Antes "}
                    <em>
                      {"vs"}
                    </em>
                    {" después"}
                  </span>
                  <span className="r-side">
                    <svg viewBox="0 0 24 24">
                      <path d="M12 20s-7-4.5-7-10a4 4 0 0 1 7-2.5A4 4 0 0 1 19 10c0 5.5-7 10-7 10z" />
                    </svg>
                    <svg viewBox="0 0 24 24">
                      <path d="M4 5h16v11H8l-4 4z" />
                    </svg>
                    <svg viewBox="0 0 24 24">
                      <path d="M4 12l16-8-6 16-3-6z" />
                    </svg>
                  </span>
                  <span className="r-cap" />
                  <span className="r-cap s" />
                  <span className="r-tag">
                    {"#ugc"}
                  </span>
                </div>
                <div className="reel" style={{"--g1": "#a66bff", "--g2": "#120726", "background": "url('/assets/img/reels/reel-04.jpg') center/cover no-repeat,linear-gradient(160deg,#a66bff,#120726)"}}>
                  <span className="r-top">
                    <i />
                    <b />
                  </span>
                  <span className="r-play">
                    <svg viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </span>
                  <span className="r-title">
                    {"POV: tu marca se vuelve "}
                    <em>
                      {"viral"}
                    </em>
                    {" "}
                  </span>
                  <span className="r-side">
                    <svg viewBox="0 0 24 24">
                      <path d="M12 20s-7-4.5-7-10a4 4 0 0 1 7-2.5A4 4 0 0 1 19 10c0 5.5-7 10-7 10z" />
                    </svg>
                    <svg viewBox="0 0 24 24">
                      <path d="M4 5h16v11H8l-4 4z" />
                    </svg>
                    <svg viewBox="0 0 24 24">
                      <path d="M4 12l16-8-6 16-3-6z" />
                    </svg>
                  </span>
                  <span className="r-cap" />
                  <span className="r-cap s" />
                  <span className="r-tag">
                    {"#behindthescenes"}
                  </span>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="colin">
                <div className="reel" style={{"--g1": "#db2777", "--g2": "#2b0716", "background": "url('/assets/img/reels/reel-05.jpg') center/cover no-repeat,linear-gradient(160deg,#db2777,#2b0716)"}}>
                  <span className="r-top">
                    <i />
                    <b />
                  </span>
                  <span className="r-play">
                    <svg viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </span>
                  <span className="r-title">
                    {"Detrás de "}
                    <em>
                      {"cámaras"}
                    </em>
                    {" "}
                  </span>
                  <span className="r-side">
                    <svg viewBox="0 0 24 24">
                      <path d="M12 20s-7-4.5-7-10a4 4 0 0 1 7-2.5A4 4 0 0 1 19 10c0 5.5-7 10-7 10z" />
                    </svg>
                    <svg viewBox="0 0 24 24">
                      <path d="M4 5h16v11H8l-4 4z" />
                    </svg>
                    <svg viewBox="0 0 24 24">
                      <path d="M4 12l16-8-6 16-3-6z" />
                    </svg>
                  </span>
                  <span className="r-cap" />
                  <span className="r-cap s" />
                  <span className="r-tag">
                    {"#tiktok"}
                  </span>
                </div>
                <div className="reel" style={{"--g1": "#6d28d9", "--g2": "#0b0b0d", "background": "url('/assets/img/reels/reel-06.jpg') center/cover no-repeat,linear-gradient(160deg,#6d28d9,#0b0b0d)"}}>
                  <span className="r-top">
                    <i />
                    <b />
                  </span>
                  <span className="r-play">
                    <svg viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </span>
                  <span className="r-title">
                    {"Unboxing "}
                    <em>
                      {"en 15s"}
                    </em>
                    {" "}
                  </span>
                  <span className="r-side">
                    <svg viewBox="0 0 24 24">
                      <path d="M12 20s-7-4.5-7-10a4 4 0 0 1 7-2.5A4 4 0 0 1 19 10c0 5.5-7 10-7 10z" />
                    </svg>
                    <svg viewBox="0 0 24 24">
                      <path d="M4 5h16v11H8l-4 4z" />
                    </svg>
                    <svg viewBox="0 0 24 24">
                      <path d="M4 12l16-8-6 16-3-6z" />
                    </svg>
                  </span>
                  <span className="r-cap" />
                  <span className="r-cap s" />
                  <span className="r-tag">
                    {"#producto"}
                  </span>
                </div>
                <div className="reel" style={{"--g1": "#7c3aed", "--g2": "#1e0b3a", "background": "url('/assets/img/reels/reel-07.jpg') center/cover no-repeat,linear-gradient(160deg,#7c3aed,#1e0b3a)"}}>
                  <span className="r-top">
                    <i />
                    <b />
                  </span>
                  <span className="r-play">
                    <svg viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </span>
                  <span className="r-title">
                    {"Tu producto, "}
                    <em>
                      {"otro nivel"}
                    </em>
                    {" "}
                  </span>
                  <span className="r-side">
                    <svg viewBox="0 0 24 24">
                      <path d="M12 20s-7-4.5-7-10a4 4 0 0 1 7-2.5A4 4 0 0 1 19 10c0 5.5-7 10-7 10z" />
                    </svg>
                    <svg viewBox="0 0 24 24">
                      <path d="M4 5h16v11H8l-4 4z" />
                    </svg>
                    <svg viewBox="0 0 24 24">
                      <path d="M4 12l16-8-6 16-3-6z" />
                    </svg>
                  </span>
                  <span className="r-cap" />
                  <span className="r-cap s" />
                  <span className="r-tag">
                    {"#lifestyle"}
                  </span>
                </div>
                <div className="reel" style={{"--g1": "#c026d3", "--g2": "#2a0a33", "background": "url('/assets/img/reels/reel-08.jpg') center/cover no-repeat,linear-gradient(160deg,#c026d3,#2a0a33)"}}>
                  <span className="r-top">
                    <i />
                    <b />
                  </span>
                  <span className="r-play">
                    <svg viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </span>
                  <span className="r-title">
                    {"El gancho de "}
                    <em>
                      {"3 segundos"}
                    </em>
                    {" "}
                  </span>
                  <span className="r-side">
                    <svg viewBox="0 0 24 24">
                      <path d="M12 20s-7-4.5-7-10a4 4 0 0 1 7-2.5A4 4 0 0 1 19 10c0 5.5-7 10-7 10z" />
                    </svg>
                    <svg viewBox="0 0 24 24">
                      <path d="M4 5h16v11H8l-4 4z" />
                    </svg>
                    <svg viewBox="0 0 24 24">
                      <path d="M4 12l16-8-6 16-3-6z" />
                    </svg>
                  </span>
                  <span className="r-cap" />
                  <span className="r-cap s" />
                  <span className="r-tag">
                    {"#storytelling"}
                  </span>
                </div>
                <div className="reel" style={{"--g1": "#db2777", "--g2": "#2b0716", "background": "url('/assets/img/reels/reel-05.jpg') center/cover no-repeat,linear-gradient(160deg,#db2777,#2b0716)"}}>
                  <span className="r-top">
                    <i />
                    <b />
                  </span>
                  <span className="r-play">
                    <svg viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </span>
                  <span className="r-title">
                    {"Detrás de "}
                    <em>
                      {"cámaras"}
                    </em>
                    {" "}
                  </span>
                  <span className="r-side">
                    <svg viewBox="0 0 24 24">
                      <path d="M12 20s-7-4.5-7-10a4 4 0 0 1 7-2.5A4 4 0 0 1 19 10c0 5.5-7 10-7 10z" />
                    </svg>
                    <svg viewBox="0 0 24 24">
                      <path d="M4 5h16v11H8l-4 4z" />
                    </svg>
                    <svg viewBox="0 0 24 24">
                      <path d="M4 12l16-8-6 16-3-6z" />
                    </svg>
                  </span>
                  <span className="r-cap" />
                  <span className="r-cap s" />
                  <span className="r-tag">
                    {"#tiktok"}
                  </span>
                </div>
                <div className="reel" style={{"--g1": "#6d28d9", "--g2": "#0b0b0d", "background": "url('/assets/img/reels/reel-06.jpg') center/cover no-repeat,linear-gradient(160deg,#6d28d9,#0b0b0d)"}}>
                  <span className="r-top">
                    <i />
                    <b />
                  </span>
                  <span className="r-play">
                    <svg viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </span>
                  <span className="r-title">
                    {"Unboxing "}
                    <em>
                      {"en 15s"}
                    </em>
                    {" "}
                  </span>
                  <span className="r-side">
                    <svg viewBox="0 0 24 24">
                      <path d="M12 20s-7-4.5-7-10a4 4 0 0 1 7-2.5A4 4 0 0 1 19 10c0 5.5-7 10-7 10z" />
                    </svg>
                    <svg viewBox="0 0 24 24">
                      <path d="M4 5h16v11H8l-4 4z" />
                    </svg>
                    <svg viewBox="0 0 24 24">
                      <path d="M4 12l16-8-6 16-3-6z" />
                    </svg>
                  </span>
                  <span className="r-cap" />
                  <span className="r-cap s" />
                  <span className="r-tag">
                    {"#producto"}
                  </span>
                </div>
                <div className="reel" style={{"--g1": "#7c3aed", "--g2": "#1e0b3a", "background": "url('/assets/img/reels/reel-07.jpg') center/cover no-repeat,linear-gradient(160deg,#7c3aed,#1e0b3a)"}}>
                  <span className="r-top">
                    <i />
                    <b />
                  </span>
                  <span className="r-play">
                    <svg viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </span>
                  <span className="r-title">
                    {"Tu producto, "}
                    <em>
                      {"otro nivel"}
                    </em>
                    {" "}
                  </span>
                  <span className="r-side">
                    <svg viewBox="0 0 24 24">
                      <path d="M12 20s-7-4.5-7-10a4 4 0 0 1 7-2.5A4 4 0 0 1 19 10c0 5.5-7 10-7 10z" />
                    </svg>
                    <svg viewBox="0 0 24 24">
                      <path d="M4 5h16v11H8l-4 4z" />
                    </svg>
                    <svg viewBox="0 0 24 24">
                      <path d="M4 12l16-8-6 16-3-6z" />
                    </svg>
                  </span>
                  <span className="r-cap" />
                  <span className="r-cap s" />
                  <span className="r-tag">
                    {"#lifestyle"}
                  </span>
                </div>
                <div className="reel" style={{"--g1": "#c026d3", "--g2": "#2a0a33", "background": "url('/assets/img/reels/reel-08.jpg') center/cover no-repeat,linear-gradient(160deg,#c026d3,#2a0a33)"}}>
                  <span className="r-top">
                    <i />
                    <b />
                  </span>
                  <span className="r-play">
                    <svg viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </span>
                  <span className="r-title">
                    {"El gancho de "}
                    <em>
                      {"3 segundos"}
                    </em>
                    {" "}
                  </span>
                  <span className="r-side">
                    <svg viewBox="0 0 24 24">
                      <path d="M12 20s-7-4.5-7-10a4 4 0 0 1 7-2.5A4 4 0 0 1 19 10c0 5.5-7 10-7 10z" />
                    </svg>
                    <svg viewBox="0 0 24 24">
                      <path d="M4 5h16v11H8l-4 4z" />
                    </svg>
                    <svg viewBox="0 0 24 24">
                      <path d="M4 12l16-8-6 16-3-6z" />
                    </svg>
                  </span>
                  <span className="r-cap" />
                  <span className="r-cap s" />
                  <span className="r-tag">
                    {"#storytelling"}
                  </span>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="colin">
                <div className="reel" style={{"--g1": "#4f46e5", "--g2": "#0c0a2e", "background": "url('/assets/img/reels/reel-09.jpg') center/cover no-repeat,linear-gradient(160deg,#4f46e5,#0c0a2e)"}}>
                  <span className="r-top">
                    <i />
                    <b />
                  </span>
                  <span className="r-play">
                    <svg viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </span>
                  <span className="r-title">
                    {"Contenido "}
                    <em>
                      {"UGC"}
                    </em>
                    {" que convierte"}
                  </span>
                  <span className="r-side">
                    <svg viewBox="0 0 24 24">
                      <path d="M12 20s-7-4.5-7-10a4 4 0 0 1 7-2.5A4 4 0 0 1 19 10c0 5.5-7 10-7 10z" />
                    </svg>
                    <svg viewBox="0 0 24 24">
                      <path d="M4 5h16v11H8l-4 4z" />
                    </svg>
                    <svg viewBox="0 0 24 24">
                      <path d="M4 12l16-8-6 16-3-6z" />
                    </svg>
                  </span>
                  <span className="r-cap" />
                  <span className="r-cap s" />
                  <span className="r-tag">
                    {"#reels"}
                  </span>
                </div>
                <div className="reel" style={{"--g1": "#a66bff", "--g2": "#120726", "background": "url('/assets/img/reels/reel-10.jpg') center/cover no-repeat,linear-gradient(160deg,#a66bff,#120726)"}}>
                  <span className="r-top">
                    <i />
                    <b />
                  </span>
                  <span className="r-play">
                    <svg viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </span>
                  <span className="r-title">
                    {"Un día en el "}
                    <em>
                      {"set"}
                    </em>
                    {" "}
                  </span>
                  <span className="r-side">
                    <svg viewBox="0 0 24 24">
                      <path d="M12 20s-7-4.5-7-10a4 4 0 0 1 7-2.5A4 4 0 0 1 19 10c0 5.5-7 10-7 10z" />
                    </svg>
                    <svg viewBox="0 0 24 24">
                      <path d="M4 5h16v11H8l-4 4z" />
                    </svg>
                    <svg viewBox="0 0 24 24">
                      <path d="M4 12l16-8-6 16-3-6z" />
                    </svg>
                  </span>
                  <span className="r-cap" />
                  <span className="r-cap s" />
                  <span className="r-tag">
                    {"#branding"}
                  </span>
                </div>
                <div className="reel" style={{"--g1": "#db2777", "--g2": "#2b0716", "background": "url('/assets/img/reels/reel-11.jpg') center/cover no-repeat,linear-gradient(160deg,#db2777,#2b0716)"}}>
                  <span className="r-top">
                    <i />
                    <b />
                  </span>
                  <span className="r-play">
                    <svg viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </span>
                  <span className="r-title">
                    {"5 ideas de "}
                    <em>
                      {"reels"}
                    </em>
                    {" para tu negocio"}
                  </span>
                  <span className="r-side">
                    <svg viewBox="0 0 24 24">
                      <path d="M12 20s-7-4.5-7-10a4 4 0 0 1 7-2.5A4 4 0 0 1 19 10c0 5.5-7 10-7 10z" />
                    </svg>
                    <svg viewBox="0 0 24 24">
                      <path d="M4 5h16v11H8l-4 4z" />
                    </svg>
                    <svg viewBox="0 0 24 24">
                      <path d="M4 12l16-8-6 16-3-6z" />
                    </svg>
                  </span>
                  <span className="r-cap" />
                  <span className="r-cap s" />
                  <span className="r-tag">
                    {"#ugc"}
                  </span>
                </div>
                <div className="reel" style={{"--g1": "#6d28d9", "--g2": "#0b0b0d", "background": "url('/assets/img/reels/reel-12.jpg') center/cover no-repeat,linear-gradient(160deg,#6d28d9,#0b0b0d)"}}>
                  <span className="r-top">
                    <i />
                    <b />
                  </span>
                  <span className="r-play">
                    <svg viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </span>
                  <span className="r-title">
                    {"La foto que "}
                    <em>
                      {"vende"}
                    </em>
                    {" sola"}
                  </span>
                  <span className="r-side">
                    <svg viewBox="0 0 24 24">
                      <path d="M12 20s-7-4.5-7-10a4 4 0 0 1 7-2.5A4 4 0 0 1 19 10c0 5.5-7 10-7 10z" />
                    </svg>
                    <svg viewBox="0 0 24 24">
                      <path d="M4 5h16v11H8l-4 4z" />
                    </svg>
                    <svg viewBox="0 0 24 24">
                      <path d="M4 12l16-8-6 16-3-6z" />
                    </svg>
                  </span>
                  <span className="r-cap" />
                  <span className="r-cap s" />
                  <span className="r-tag">
                    {"#behindthescenes"}
                  </span>
                </div>
                <div className="reel" style={{"--g1": "#4f46e5", "--g2": "#0c0a2e", "background": "url('/assets/img/reels/reel-09.jpg') center/cover no-repeat,linear-gradient(160deg,#4f46e5,#0c0a2e)"}}>
                  <span className="r-top">
                    <i />
                    <b />
                  </span>
                  <span className="r-play">
                    <svg viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </span>
                  <span className="r-title">
                    {"Contenido "}
                    <em>
                      {"UGC"}
                    </em>
                    {" que convierte"}
                  </span>
                  <span className="r-side">
                    <svg viewBox="0 0 24 24">
                      <path d="M12 20s-7-4.5-7-10a4 4 0 0 1 7-2.5A4 4 0 0 1 19 10c0 5.5-7 10-7 10z" />
                    </svg>
                    <svg viewBox="0 0 24 24">
                      <path d="M4 5h16v11H8l-4 4z" />
                    </svg>
                    <svg viewBox="0 0 24 24">
                      <path d="M4 12l16-8-6 16-3-6z" />
                    </svg>
                  </span>
                  <span className="r-cap" />
                  <span className="r-cap s" />
                  <span className="r-tag">
                    {"#reels"}
                  </span>
                </div>
                <div className="reel" style={{"--g1": "#a66bff", "--g2": "#120726", "background": "url('/assets/img/reels/reel-10.jpg') center/cover no-repeat,linear-gradient(160deg,#a66bff,#120726)"}}>
                  <span className="r-top">
                    <i />
                    <b />
                  </span>
                  <span className="r-play">
                    <svg viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </span>
                  <span className="r-title">
                    {"Un día en el "}
                    <em>
                      {"set"}
                    </em>
                    {" "}
                  </span>
                  <span className="r-side">
                    <svg viewBox="0 0 24 24">
                      <path d="M12 20s-7-4.5-7-10a4 4 0 0 1 7-2.5A4 4 0 0 1 19 10c0 5.5-7 10-7 10z" />
                    </svg>
                    <svg viewBox="0 0 24 24">
                      <path d="M4 5h16v11H8l-4 4z" />
                    </svg>
                    <svg viewBox="0 0 24 24">
                      <path d="M4 12l16-8-6 16-3-6z" />
                    </svg>
                  </span>
                  <span className="r-cap" />
                  <span className="r-cap s" />
                  <span className="r-tag">
                    {"#branding"}
                  </span>
                </div>
                <div className="reel" style={{"--g1": "#db2777", "--g2": "#2b0716", "background": "url('/assets/img/reels/reel-11.jpg') center/cover no-repeat,linear-gradient(160deg,#db2777,#2b0716)"}}>
                  <span className="r-top">
                    <i />
                    <b />
                  </span>
                  <span className="r-play">
                    <svg viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </span>
                  <span className="r-title">
                    {"5 ideas de "}
                    <em>
                      {"reels"}
                    </em>
                    {" para tu negocio"}
                  </span>
                  <span className="r-side">
                    <svg viewBox="0 0 24 24">
                      <path d="M12 20s-7-4.5-7-10a4 4 0 0 1 7-2.5A4 4 0 0 1 19 10c0 5.5-7 10-7 10z" />
                    </svg>
                    <svg viewBox="0 0 24 24">
                      <path d="M4 5h16v11H8l-4 4z" />
                    </svg>
                    <svg viewBox="0 0 24 24">
                      <path d="M4 12l16-8-6 16-3-6z" />
                    </svg>
                  </span>
                  <span className="r-cap" />
                  <span className="r-cap s" />
                  <span className="r-tag">
                    {"#ugc"}
                  </span>
                </div>
                <div className="reel" style={{"--g1": "#6d28d9", "--g2": "#0b0b0d", "background": "url('/assets/img/reels/reel-12.jpg') center/cover no-repeat,linear-gradient(160deg,#6d28d9,#0b0b0d)"}}>
                  <span className="r-top">
                    <i />
                    <b />
                  </span>
                  <span className="r-play">
                    <svg viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </span>
                  <span className="r-title">
                    {"La foto que "}
                    <em>
                      {"vende"}
                    </em>
                    {" sola"}
                  </span>
                  <span className="r-side">
                    <svg viewBox="0 0 24 24">
                      <path d="M12 20s-7-4.5-7-10a4 4 0 0 1 7-2.5A4 4 0 0 1 19 10c0 5.5-7 10-7 10z" />
                    </svg>
                    <svg viewBox="0 0 24 24">
                      <path d="M4 5h16v11H8l-4 4z" />
                    </svg>
                    <svg viewBox="0 0 24 24">
                      <path d="M4 12l16-8-6 16-3-6z" />
                    </svg>
                  </span>
                  <span className="r-cap" />
                  <span className="r-cap s" />
                  <span className="r-tag">
                    {"#behindthescenes"}
                  </span>
                </div>
              </div>
            </div>
          </div>
          {" "}
          <div className="hero-content cc-hero-content">
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
                  {"Content Creator"}
                </span>
              </div>
              {" "}
              <h1>
                <span className="line-mask">
                  <span>
                    {"Contenido que"}
                  </span>
                </span>
                <span className="line-mask">
                  <span>
                    <span className="serif accent">
                      {"detiene"}
                    </span>
                    {" el scroll."}
                  </span>
                </span>
              </h1>
              {" "}
              <p className="cc-rot h-fade">
                {"Creamos "}
                <span className="slot">
                  <span className="slin">
                    <span>
                      {"reels"}
                    </span>
                    <span>
                      {"marcas"}
                    </span>
                    <span>
                      {"comunidad"}
                    </span>
                    <span>
                      {"tendencia"}
                    </span>
                    <span>
                      {"reels"}
                    </span>
                  </span>
                </span>
              </p>
              {" "}
              <p className="sub h-fade">
                {"Producción audiovisual, gestión de redes y narrativa de marca. Una línea visual y editorial clara que genera interacción y construye comunidad."}
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
                  {"Hablar con Josep"}
                </a>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
        </section>
        {" "}
        <section className="marquee cc-marquee" aria-hidden="true">
          {" "}
          <div className="m" id="mq">
            {" "}
            <span>
              {"Reels "}
              <i />
              {" "}
              <em>
                {"TikTok"}
              </em>
              {" "}
              <i />
              {" Shorts "}
              <i />
              {" "}
              <em>
                {"UGC"}
              </em>
              {" "}
              <i />
              {" Branding "}
              <i />
              {" "}
              <em>
                {"Fotografía"}
              </em>
              {" "}
              <i />
            </span>
            {" "}
            <span>
              {"Reels "}
              <i />
              {" "}
              <em>
                {"TikTok"}
              </em>
              {" "}
              <i />
              {" Shorts "}
              <i />
              {" "}
              <em>
                {"UGC"}
              </em>
              {" "}
              <i />
              {" Branding "}
              <i />
              {" "}
              <em>
                {"Fotografía"}
              </em>
              {" "}
              <i />
            </span>
            {" "}
          </div>
          {" "}
        </section>
        {" "}
        <section className="cc-stories" id="servicios">
          {" "}
          <div className="cc-stories-pin">
            {" "}
            <div className="wrap cc-st-head">
              {" "}
              <div>
                <p className="eyebrow" style={{"color": "var(--accent)"}}>
                  {"Servicios"}
                </p>
                <h2>
                  {"Seis formas de "}
                  <span className="serif">
                    {"contar"}
                  </span>
                  {" tu marca."}
                </h2>
              </div>
              {" "}
              <div className="segs" aria-hidden="true">
                <i>
                  <b />
                </i>
                <i>
                  <b />
                </i>
                <i>
                  <b />
                </i>
                <i>
                  <b />
                </i>
                <i>
                  <b />
                </i>
                <i>
                  <b />
                </i>
              </div>
              {" "}
            </div>
            {" "}
            <div className="st-track">
              {" "}
              <article className="story" style={{"--g1": "#7c3aed", "--g2": "#1e0b3a"}}>
                {" "}
                <div className="st-top">
                  <span className="av" />
                  <span>
                    {"visualblack · content creator"}
                  </span>
                </div>
                {" "}
                <span className="st-n">
                  {"01"}
                </span>
                {" "}
                <div className="st-body">
                  <h3>
                    {"Producción de video"}
                  </h3>
                  <p>
                    {"Reels, TikToks y Shorts con guion, grabación y edición profesional. Formatos nativos para cada red."}
                  </p>
                  <div className="tags">
                    <span>
                      {"Reels"}
                    </span>
                    <span>
                      {"TikTok"}
                    </span>
                    <span>
                      {"Shorts"}
                    </span>
                    <span>
                      {"Edición"}
                    </span>
                  </div>
                </div>
                {" "}
              </article>
              {" "}
              <article className="story" style={{"--g1": "#c026d3", "--g2": "#2a0a33"}}>
                {" "}
                <div className="st-top">
                  <span className="av" />
                  <span>
                    {"visualblack · content creator"}
                  </span>
                </div>
                {" "}
                <span className="st-n">
                  {"02"}
                </span>
                {" "}
                <div className="st-body">
                  <h3>
                    {"Fotografía de producto y marca"}
                  </h3>
                  <p>
                    {"Sesiones de producto, lifestyle y equipo que elevan la percepción de tu marca y alimentan tus anuncios."}
                  </p>
                  <div className="tags">
                    <span>
                      {"Producto"}
                    </span>
                    <span>
                      {"Lifestyle"}
                    </span>
                    <span>
                      {"Retrato corporativo"}
                    </span>
                  </div>
                </div>
                {" "}
              </article>
              {" "}
              <article className="story" style={{"--g1": "#4f46e5", "--g2": "#0c0a2e"}}>
                {" "}
                <div className="st-top">
                  <span className="av" />
                  <span>
                    {"visualblack · content creator"}
                  </span>
                </div>
                {" "}
                <span className="st-n">
                  {"03"}
                </span>
                {" "}
                <div className="st-body">
                  <h3>
                    {"Gestión de redes sociales"}
                  </h3>
                  <p>
                    {"Planificación, diseño, publicación y monitoreo. Una línea visual y editorial coherente que hace crecer tu comunidad."}
                  </p>
                  <div className="tags">
                    <span>
                      {"Calendario editorial"}
                    </span>
                    <span>
                      {"Diseño"}
                    </span>
                    <span>
                      {"Community management"}
                    </span>
                  </div>
                </div>
                {" "}
              </article>
              {" "}
              <article className="story" style={{"--g1": "#a66bff", "--g2": "#120726"}}>
                {" "}
                <div className="st-top">
                  <span className="av" />
                  <span>
                    {"visualblack · content creator"}
                  </span>
                </div>
                {" "}
                <span className="st-n">
                  {"04"}
                </span>
                {" "}
                <div className="st-body">
                  <h3>
                    {"UGC e influencer marketing"}
                  </h3>
                  <p>
                    {"Creadores y micro-influencers que hablan de tu marca con autenticidad. Contenido que vende sin parecer anuncio."}
                  </p>
                  <div className="tags">
                    <span>
                      {"UGC"}
                    </span>
                    <span>
                      {"Micro-influencers"}
                    </span>
                    <span>
                      {"Testimonios"}
                    </span>
                  </div>
                </div>
                {" "}
              </article>
              {" "}
              <article className="story" style={{"--g1": "#db2777", "--g2": "#2b0716"}}>
                {" "}
                <div className="st-top">
                  <span className="av" />
                  <span>
                    {"visualblack · content creator"}
                  </span>
                </div>
                {" "}
                <span className="st-n">
                  {"05"}
                </span>
                {" "}
                <div className="st-body">
                  <h3>
                    {"Branding e identidad visual"}
                  </h3>
                  <p>
                    {"Logotipo, paleta, tipografía y guías de marca escalables para que todo lo que publiques se vea como tú."}
                  </p>
                  <div className="tags">
                    <span>
                      {"Logo"}
                    </span>
                    <span>
                      {"Manual de marca"}
                    </span>
                    <span>
                      {"Plantillas"}
                    </span>
                  </div>
                </div>
                {" "}
              </article>
              {" "}
              <article className="story" style={{"--g1": "#6d28d9", "--g2": "#0b0b0d"}}>
                {" "}
                <div className="st-top">
                  <span className="av" />
                  <span>
                    {"visualblack · content creator"}
                  </span>
                </div>
                {" "}
                <span className="st-n">
                  {"06"}
                </span>
                {" "}
                <div className="st-body">
                  <h3>
                    {"Copywriting y guiones"}
                  </h3>
                  <p>
                    {"Textos y guiones que conectan: hooks, storytelling y llamados a la acción que convierten."}
                  </p>
                  <div className="tags">
                    <span>
                      {"Hooks"}
                    </span>
                    <span>
                      {"Storytelling"}
                    </span>
                    <span>
                      {"Copy para anuncios"}
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
        <section className="manifesto light cc-manifesto">
          {" "}
          <div className="wrap">
            {" "}
            <p className="eyebrow" style={{"marginBottom": "40px", "color": "var(--accent)"}}>
              {"Nuestra mirada"}
            </p>
            {" "}
            <p id="manifesto">
              {"Las marcas que "}
              <span className="serif">
                {"recuerdas"}
              </span>
              {" no gritan más fuerte: cuentan mejores historias. Creamos contenido con "}
              <span className="serif">
                {"intención"}
              </span>
              {", estética y estrategia."}
            </p>
            {" "}
          </div>
          {" "}
        </section>
        {" "}
        <section className="cc-cover-sec" id="lider">
          {" "}
          <div className="wrap cover-grid">
            {" "}
            <div className="cover has-photo" data-cursor="Perfil">
              {" "}
              <div className="cover-ph photo">
                <img src="/assets/img/joss.webp" alt="Josep Garip Ordoñez Odar, Head of Content de visualblack" width="1493" height="2000" />
              </div>
              {" "}
              <div className="cover-mast">
                {"CREATOR"}
              </div>
              {" "}
              <div className="cover-ed">
                <span>
                  {"Edición 02"}
                </span>
                <span>
                  {"visualblack"}
                </span>
              </div>
              {" "}
              <div className="cover-lines">
                <span>
                  {"La mente detrás"}
                  <br />
                  {"de cada historia"}
                </span>
                <span>
                  {"Head of Content"}
                </span>
              </div>
              {" "}
              <div className="cover-name">
                {"Josep Garip"}
                <br />
                <span className="serif">
                  {"Ordoñez Odar"}
                </span>
              </div>
              {" "}
            </div>
            {" "}
            <div className="cover-txt">
              {" "}
              <span className="eyebrow" style={{"color": "var(--accent)"}}>
                {"Dirección creativa · visualblack content creator"}
              </span>
              {" "}
              <h2>
                {"La mirada "}
                <span className="serif">
                  {"creativa"}
                </span>
                {"."}
              </h2>
              {" "}
              <blockquote>
                {"“Tu marca tiene tres segundos para ser recordada. Nosotros los hacemos inolvidables.”"}
              </blockquote>
              {" "}
              <p className="bio">
                {"Josep lidera la dirección creativa de visualblack content creator. Define la línea visual y editorial de cada marca, conceptualiza las ideas y dirige la producción de foto, video y contenido para redes, con una mirada estética propia y siempre al servicio de la estrategia."}
              </p>
              {" "}
              <div className="creds">
                <div>
                  <b>
                    {"Video"}
                  </b>
                  <span>
                    {"reels, TikTok y shorts"}
                  </span>
                </div>
                <div>
                  <b>
                    {"Foto"}
                  </b>
                  <span>
                    {"producto, marca y editorial"}
                  </span>
                </div>
                <div>
                  <b>
                    {"Marca"}
                  </b>
                  <span>
                    {"identidad y línea visual"}
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
        <section className="cc-terr light" id="territorios">
          {" "}
          <div className="wrap">
            {" "}
            <div className="cc-st-head">
              {" "}
              <div>
                <p className="eyebrow" style={{"color": "var(--accent)"}}>
                  {"El método de Josep"}
                </p>
                <h2>
                  {"Territorios "}
                  <span className="serif">
                    {"creativos"}
                  </span>
                  {"."}
                </h2>
              </div>
              {" "}
              <p className="cal-note">
                {"Antes de crear, definimos en qué territorio debe vivir tu marca: el espacio conceptual que puede adueñarse, con su tono, su estética y sus formatos. Explora el mapa."}
              </p>
              {" "}
            </div>
            {" "}
            <div className="terr">
              {" "}
              <div className="tmap" data-terr={"[{\"k\": \"cercania\", \"name\": \"Cercanía\", \"x\": 72, \"y\": 74, \"r\": 17, \"color\": \"#f59e0b\", \"idea\": \"La marca como un amigo que te entiende.\", \"desc\": \"Humor, cotidianidad y conversación real. La marca habla como su comunidad y aparece en los momentos de todos los días.\", \"pal\": [\"#f59e0b\", \"#fde68a\", \"#1d1d1f\"], \"words\": [\"humor\", \"complicidad\", \"día a día\"], \"fmts\": [\"POV\", \"tendencias\", \"UGC\", \"testimonios\"], \"hook\": \"“Cuando te dicen ‘solo un ratito’ y…”\"}, {\"k\": \"aspiracion\", \"name\": \"Aspiración\", \"x\": 70, \"y\": 22, \"r\": 19, \"color\": \"#a66bff\", \"idea\": \"Lo que tu cliente quiere llegar a ser.\", \"desc\": \"Estética premium, lifestyle y deseo. La marca se convierte en símbolo de estatus, estilo o logro.\", \"pal\": [\"#7c3aed\", \"#e9d5ff\", \"#0c0717\"], \"words\": [\"deseo\", \"estilo\", \"exclusividad\"], \"fmts\": [\"fashion film\", \"foto editorial\", \"lookbook\"], \"hook\": \"“No es un producto. Es tu nueva versión.”\"}, {\"k\": \"autoridad\", \"name\": \"Autoridad\", \"x\": 24, \"y\": 34, \"r\": 16, \"color\": \"#22c3a6\", \"idea\": \"La marca que enseña y da confianza.\", \"desc\": \"Conocimiento, datos y criterio. La marca resuelve dudas y se posiciona como la referente de su categoría.\", \"pal\": [\"#0f766e\", \"#ccfbf1\", \"#111111\"], \"words\": [\"experto\", \"claridad\", \"confianza\"], \"fmts\": [\"carrusel educativo\", \"tutorial\", \"mitos vs. verdades\"], \"hook\": \"“3 errores que cometes sin saberlo.”\"}, {\"k\": \"ritual\", \"name\": \"Ritual\", \"x\": 46, \"y\": 56, \"r\": 15, \"color\": \"#db2777\", \"idea\": \"Convertir el proceso en experiencia.\", \"desc\": \"Los sentidos, el detalle y el cómo se hace. Mostrar el proceso genera valor y antojo.\", \"pal\": [\"#be185d\", \"#fbcfe8\", \"#1a0a12\"], \"words\": [\"sensorial\", \"detalle\", \"artesanal\"], \"fmts\": [\"making-of\", \"ASMR\", \"close-ups\", \"detrás de cámaras\"], \"hook\": \"“Así se hace, paso a paso.”\"}, {\"k\": \"ruptura\", \"name\": \"Ruptura\", \"x\": 26, \"y\": 78, \"r\": 14, \"color\": \"#6366f1\", \"idea\": \"Romper las reglas de la categoría.\", \"desc\": \"Contraste, ironía y valentía. La marca dice lo que nadie en su rubro se atreve a decir.\", \"pal\": [\"#4338ca\", \"#c7d2fe\", \"#050505\"], \"words\": [\"irreverente\", \"contraste\", \"valentía\"], \"fmts\": [\"sketches\", \"memes\", \"contra-tendencias\"], \"hook\": \"“Todos hacen esto. Nosotros no.”\"}]"}>
                {" "}
                <span className="ax ax-x" />
                <span className="ax ax-y" />
                {" "}
                <span className="al al-l">
                  {"Racional"}
                </span>
                <span className="al al-r">
                  {"Emocional"}
                </span>
                <span className="al al-t">
                  {"Aspiracional"}
                </span>
                <span className="al al-b">
                  {"Cotidiano"}
                </span>
                {" "}
                <button type="button" className="tr" data-k="cercania" style={{"--tc": "#f59e0b", "left": "72%", "top": "74%", "--r": "17%"}} aria-label="Territorio Cercanía">
                  <span className="tr-c" />
                  <b>
                    {"Cercanía"}
                  </b>
                </button>
                <button type="button" className="tr" data-k="aspiracion" style={{"--tc": "#a66bff", "left": "70%", "top": "22%", "--r": "19%"}} aria-label="Territorio Aspiración">
                  <span className="tr-c" />
                  <b>
                    {"Aspiración"}
                  </b>
                </button>
                <button type="button" className="tr" data-k="autoridad" style={{"--tc": "#22c3a6", "left": "24%", "top": "34%", "--r": "16%"}} aria-label="Territorio Autoridad">
                  <span className="tr-c" />
                  <b>
                    {"Autoridad"}
                  </b>
                </button>
                <button type="button" className="tr" data-k="ritual" style={{"--tc": "#db2777", "left": "46%", "top": "56%", "--r": "15%"}} aria-label="Territorio Ritual">
                  <span className="tr-c" />
                  <b>
                    {"Ritual"}
                  </b>
                </button>
                <button type="button" className="tr" data-k="ruptura" style={{"--tc": "#6366f1", "left": "26%", "top": "78%", "--r": "14%"}} aria-label="Territorio Ruptura">
                  <span className="tr-c" />
                  <b>
                    {"Ruptura"}
                  </b>
                </button>
                {" "}
                <button type="button" className="pin" aria-label="Arrastra el marcador de tu marca por el mapa">
                  <span>
                    {"Tu marca"}
                  </span>
                </button>
                {" "}
                <span className="tmap-hint">
                  {"Arrastra “Tu marca” o haz clic en el mapa"}
                </span>
                {" "}
              </div>
              {" "}
              <div className="tcard" aria-live="polite">
                {" "}
                <span className="tc-k">
                  {"Territorio"}
                </span>
                {" "}
                <h3 id="tName" />
                {" "}
                <p className="tc-idea" id="tIdea" />
                {" "}
                <p className="tc-desc" id="tDesc" />
                {" "}
                <div className="tc-row">
                  <span className="tc-l">
                    {"Paleta"}
                  </span>
                  <div className="tc-pal" id="tPal" />
                </div>
                {" "}
                <div className="tc-row">
                  <span className="tc-l">
                    {"Palabras"}
                  </span>
                  <div className="tc-tags" id="tWords" />
                </div>
                {" "}
                <div className="tc-row">
                  <span className="tc-l">
                    {"Formatos"}
                  </span>
                  <div className="tc-tags" id="tFmts" />
                </div>
                {" "}
                <div className="tc-hook">
                  <span className="tc-l">
                    {"Gancho de ejemplo"}
                  </span>
                  <p id="tHook" />
                </div>
                {" "}
                <div className="tc-aff">
                  <span className="tc-l">
                    {"Afinidad de tu marca"}
                  </span>
                  <div id="tAff" />
                </div>
                {" "}
                <a href="#contacto" className="btn magnetic tc-cta" id="tCta">
                  {"Definir mi territorio "}
                  <svg viewBox="0 0 16 16" fill="none">
                    <path d="M1 8h13M9 3l5 5-5 5" stroke="currentColor" strokeWidth="1.6" />
                  </svg>
                </a>
                {" "}
              </div>
              {" "}
            </div>
            {" "}
          </div>
          {" "}
        </section>
        {" "}
        <section className="cc-scenes" id="proceso">
          {" "}
          <div className="cc-scenes-pin">
            {" "}
            <div className="sc-bg" />
            {" "}
            <div className="sc-meta wrap">
              <span className="eyebrow">
                {"Cómo creamos"}
              </span>
              <span className="sc-count">
                <b>
                  {"01"}
                </b>
                {" / 04"}
              </span>
            </div>
            {" "}
            <div className="sc-stage">
              <div className="scene">
                <span className="sc-k">
                  {"Escena 01"}
                </span>
                <h3>
                  {"Inmersión de marca"}
                </h3>
                <p>
                  {"Entendemos tu historia, tu público y tu tono para definir qué contar y cómo contarlo."}
                </p>
              </div>
              <div className="scene">
                <span className="sc-k">
                  {"Escena 02"}
                </span>
                <h3>
                  {"Concepto y guion"}
                </h3>
                <p>
                  {"Creamos la idea, los ganchos y el calendario de contenidos alineados a tus objetivos."}
                </p>
              </div>
              <div className="scene">
                <span className="sc-k">
                  {"Escena 03"}
                </span>
                <h3>
                  {"Producción"}
                </h3>
                <p>
                  {"Grabamos, fotografiamos, diseñamos y editamos con estándar profesional."}
                </p>
              </div>
              <div className="scene">
                <span className="sc-k">
                  {"Escena 04"}
                </span>
                <h3>
                  {"Publicación y análisis"}
                </h3>
                <p>
                  {"Publicamos, gestionamos la comunidad y medimos qué contenido funciona para repetirlo."}
                </p>
              </div>
            </div>
            {" "}
            <div className="sc-bar">
              <i />
            </div>
            {" "}
          </div>
          {" "}
        </section>
        {" "}
        <section className="cc-cal" id="calendario">
          {" "}
          <div className="wrap">
            {" "}
            <div className="cc-st-head">
              {" "}
              <div>
                <p className="eyebrow" style={{"color": "var(--accent)"}}>
                  {"Así se ve un mes"}
                </p>
                <h2>
                  {"Tu marca, "}
                  <span className="serif">
                    {"siempre"}
                  </span>
                  {" presente."}
                </h2>
              </div>
              {" "}
              <p className="cal-note">
                {"Ejemplo de calendario editorial mensual. Lo adaptamos a tu marca, tu público y tus objetivos."}
              </p>
              {" "}
            </div>
            {" "}
            <div className="cal-legend">
              <button type="button" className="lg t-reel" data-t="reel">
                <i />
                {"Reel"}
              </button>
              <button type="button" className="lg t-carrusel" data-t="carrusel">
                <i />
                {"Carrusel"}
              </button>
              <button type="button" className="lg t-historia" data-t="historia">
                <i />
                {"Historias"}
              </button>
              <button type="button" className="lg t-foto" data-t="foto">
                <i />
                {"Foto"}
              </button>
              <button type="button" className="lg t-ugc" data-t="ugc">
                <i />
                {"UGC"}
              </button>
            </div>
            {" "}
            <div className="cal">
              <div className="dh">
                {"Lun"}
              </div>
              <div className="dh">
                {"Mar"}
              </div>
              <div className="dh">
                {"Mié"}
              </div>
              <div className="dh">
                {"Jue"}
              </div>
              <div className="dh">
                {"Vie"}
              </div>
              <div className="dh">
                {"Sáb"}
              </div>
              <div className="dh">
                {"Dom"}
              </div>
              <div className="day t-reel" data-t="reel">
                <span className="dn">
                  {"1"}
                </span>
                <span className="pc">
                  {"Reel"}
                </span>
              </div>
              <div className="day" data-t="">
                <span className="dn">
                  {"2"}
                </span>
              </div>
              <div className="day t-carrusel" data-t="carrusel">
                <span className="dn">
                  {"3"}
                </span>
                <span className="pc">
                  {"Carrusel"}
                </span>
              </div>
              <div className="day t-historia" data-t="historia">
                <span className="dn">
                  {"4"}
                </span>
                <span className="pc">
                  {"Historias"}
                </span>
              </div>
              <div className="day t-reel" data-t="reel">
                <span className="dn">
                  {"5"}
                </span>
                <span className="pc">
                  {"Reel"}
                </span>
              </div>
              <div className="day t-foto" data-t="foto">
                <span className="dn">
                  {"6"}
                </span>
                <span className="pc">
                  {"Foto"}
                </span>
              </div>
              <div className="day" data-t="">
                <span className="dn">
                  {"7"}
                </span>
              </div>
              <div className="day t-carrusel" data-t="carrusel">
                <span className="dn">
                  {"8"}
                </span>
                <span className="pc">
                  {"Carrusel"}
                </span>
              </div>
              <div className="day t-historia" data-t="historia">
                <span className="dn">
                  {"9"}
                </span>
                <span className="pc">
                  {"Historias"}
                </span>
              </div>
              <div className="day" data-t="">
                <span className="dn">
                  {"10"}
                </span>
              </div>
              <div className="day t-reel" data-t="reel">
                <span className="dn">
                  {"11"}
                </span>
                <span className="pc">
                  {"Reel"}
                </span>
              </div>
              <div className="day t-ugc" data-t="ugc">
                <span className="dn">
                  {"12"}
                </span>
                <span className="pc">
                  {"UGC"}
                </span>
              </div>
              <div className="day t-historia" data-t="historia">
                <span className="dn">
                  {"13"}
                </span>
                <span className="pc">
                  {"Historias"}
                </span>
              </div>
              <div className="day" data-t="">
                <span className="dn">
                  {"14"}
                </span>
              </div>
              <div className="day t-reel" data-t="reel">
                <span className="dn">
                  {"15"}
                </span>
                <span className="pc">
                  {"Reel"}
                </span>
              </div>
              <div className="day t-foto" data-t="foto">
                <span className="dn">
                  {"16"}
                </span>
                <span className="pc">
                  {"Foto"}
                </span>
              </div>
              <div className="day t-carrusel" data-t="carrusel">
                <span className="dn">
                  {"17"}
                </span>
                <span className="pc">
                  {"Carrusel"}
                </span>
              </div>
              <div className="day" data-t="">
                <span className="dn">
                  {"18"}
                </span>
              </div>
              <div className="day t-reel" data-t="reel">
                <span className="dn">
                  {"19"}
                </span>
                <span className="pc">
                  {"Reel"}
                </span>
              </div>
              <div className="day t-historia" data-t="historia">
                <span className="dn">
                  {"20"}
                </span>
                <span className="pc">
                  {"Historias"}
                </span>
              </div>
              <div className="day" data-t="">
                <span className="dn">
                  {"21"}
                </span>
              </div>
              <div className="day t-carrusel" data-t="carrusel">
                <span className="dn">
                  {"22"}
                </span>
                <span className="pc">
                  {"Carrusel"}
                </span>
              </div>
              <div className="day" data-t="">
                <span className="dn">
                  {"23"}
                </span>
              </div>
              <div className="day t-reel" data-t="reel">
                <span className="dn">
                  {"24"}
                </span>
                <span className="pc">
                  {"Reel"}
                </span>
              </div>
              <div className="day t-ugc" data-t="ugc">
                <span className="dn">
                  {"25"}
                </span>
                <span className="pc">
                  {"UGC"}
                </span>
              </div>
              <div className="day t-historia" data-t="historia">
                <span className="dn">
                  {"26"}
                </span>
                <span className="pc">
                  {"Historias"}
                </span>
              </div>
              <div className="day t-foto" data-t="foto">
                <span className="dn">
                  {"27"}
                </span>
                <span className="pc">
                  {"Foto"}
                </span>
              </div>
              <div className="day" data-t="">
                <span className="dn">
                  {"28"}
                </span>
              </div>
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
              <a href="/consulting" data-color="#ff7a1a" style={{"--x": "#ff7a1a"}} data-cursor="Entrar">
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
              </a>
              {" "}
              <a href="/developer" data-color="#3ad6ff" style={{"--x": "#3ad6ff"}} data-cursor="Entrar">
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
              </a>
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
                  <input type="checkbox" name="d" value="Content Creator" defaultChecked />
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
              <a href="/consulting" data-color="#ff7a1a">
                {"Consulting"}
              </a>
              <a href="/content-creator" data-color="#a66bff">
                {"Content Creator"}
              </a>
              <a href="/developer" data-color="#3ad6ff">
                {"Developer"}
              </a>
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
