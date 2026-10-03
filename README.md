# Portafolio de Ange

Sitio estático en HTML, CSS y JavaScript puro. No necesita compilación.

## Estructura
- `index.html`: estructura de la página.
- `css/styles.css`: estilos y colores (variables al inicio, con modo oscuro).
- `js/i18n.js`: textos de la interfaz en español e inglés.
- `js/data.js`: contacto, proyectos, experiencia, formación y certificaciones.
- `js/main.js`: dibuja la página a partir de los datos y cambia el idioma.

## Rellenar los datos pendientes
Busca `xxxxxxx` y `TODO` en el código. Los más importantes están en `js/data.js` (contacto, "mi parte" de Sparkies y de la base de datos de lealtad, enlaces de proyectos) y en `index.html` (`og:url`).

## Añadir un proyecto
En `js/data.js`, copia un bloque dentro de `projects` y cambia sus campos. Usa `featured: true` para que salga grande. Si `links` está vacío no se muestra ningún botón.

## Cambiar textos
Los textos de la interfaz están en `js/i18n.js`. Cada texto tiene versión `es` y `en`.

## Privacidad
No subas al repositorio la carpeta `hashes/` del proyecto de seguridad ni `Conexion.java`. Los proyectos se enlazan, no se copian.
