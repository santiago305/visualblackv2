# visualblack — web (React + Vite)

Cuatro páginas: `/` (inicio), `/consulting`, `/content-creator` y `/developer`.

## Comandos

```bash
npm install      # instala dependencias
npm run dev      # servidor local en http://localhost:5173
npm run build    # genera la carpeta dist/ lista para subir
npm run preview  # prueba la versión de producción
```

## Publicar

Sube el contenido de `dist/` a tu hosting. Como es una SPA con rutas, el servidor debe
redirigir todas las rutas a `index.html`; ya vienen incluidos:

- **Netlify:** `public/_redirects`
- **Vercel:** `vercel.json`
- **Apache / cPanel / Hostinger:** `public/.htaccess`

## Estructura

- `src/pages/` — una página por ruta (JSX)
- `src/styles/` — estilos globales y de cada departamento
- `src/scripts/` — animaciones (GSAP + ScrollTrigger + Lenis) e interacciones de cada página
- `public/` — logo, favicon e imágenes (líderes y portadas de reels)
