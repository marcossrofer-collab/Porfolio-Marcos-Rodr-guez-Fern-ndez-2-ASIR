# Portfolio · Marcos Rodríguez Fernández

Web estática (HTML + CSS + JS, sin dependencias) lista para GitHub Pages.

## Estructura

```
index.html          Contenido de la web
css/style.css       Estilos (tema claro/oscuro automático)
js/main.js          Filtros, tema, animaciones y enlaces a GitHub/LinkedIn
docs/practicas/     PDF de las prácticas
docs/packet-tracer/ Archivos .pkt de Cisco Packet Tracer
docs/certificados/  Certificados (PDF/JPG) y img/certificados/ para sus miniaturas
```

## Publicar en GitHub Pages

1. Crea un repositorio público en GitHub. Si lo llamas `TU-USUARIO.github.io`, la web quedará en `https://TU-USUARIO.github.io`.
2. Sube todos los archivos de esta carpeta a la raíz del repositorio.
3. En el repositorio: **Settings → Pages → Build and deployment → Source: Deploy from a branch**, rama `main` y carpeta `/ (root)`.
4. Espera un minuto y abre la URL que aparece en esa misma pantalla.

## Personalizar

- **GitHub y LinkedIn**: edita `LINKS` al principio de `js/main.js`.
- **Textos y proyectos**: edita `index.html`. Cada proyecto es un bloque `<article class="card">`.
- **Color**: cambia `--accent` en `css/style.css`.
