# PAPOI.DEV

Sitio web del universo de juegos PAPOI.

## Estructura del proyecto

```
papoi-site/
├── index.html      → estructura de la página (no cambia casi nunca)
├── style.css       → todos los estilos visuales
├── data.js         → EDITA AQUÍ para agregar juegos y capturas nuevas
├── script.js       → la lógica del sitio (navegación, animaciones, galería)
└── images/         → tus capturas de pantalla van aquí
```

**Para agregar contenido nuevo (un juego o una captura), solo edita
`data.js`.** No hace falta tocar el HTML, el CSS ni el resto del JS.
El archivo tiene comentarios explicando cómo.

---

## Cómo subir esto a GitHub (sin usar la terminal)

### 1. Crear una cuenta y un repositorio
1. Entra a [github.com](https://github.com) y crea una cuenta si no tienes.
2. Arriba a la derecha, click en el **+** → **New repository**.
3. Ponle un nombre, por ejemplo `papoi-dev`.
4. Déjalo en **Public** (así puedes usar GitHub Pages gratis).
5. NO marques "Add a README" (ya tienes uno). Click en **Create repository**.

### 2. Subir los archivos
1. En la página del repo recién creado, busca el link que dice
   **"uploading an existing file"**.
2. Arrastra ahí TODA la carpeta `papoi-site` (o selecciona todos sus
   archivos, incluida la carpeta `images`).
3. Abajo, escribe un mensaje como "Primera versión del sitio" y click
   en **Commit changes**.

Con eso ya está tu código en GitHub.

### 3. Publicarlo como página web (GitHub Pages)
1. En tu repositorio, ve a **Settings** (pestaña arriba).
2. En el menú de la izquierda, click en **Pages**.
3. En "Branch", selecciona `main` y la carpeta `/ (root)`. Click en **Save**.
4. Espera 1-2 minutos y recarga la página. GitHub te dará un link como:
   `https://tu-usuario.github.io/papoi-dev/`

Ese link ya es tu sitio, en internet, visible para cualquiera.

### 4. Actualizar el sitio más adelante
Cada vez que quieras agregar un juego o una captura:
1. Edita `data.js` (y sube tus imágenes a `images/` si son nuevas).
2. En GitHub, entra al archivo `data.js` dentro del repo, click en el
   ícono del lápiz (**Edit**), pega tu versión actualizada, y click en
   **Commit changes**.
3. GitHub Pages se actualiza solo, en un par de minutos.

---

## Alternativa: usando Git de verdad (opcional, más cómodo a futuro)

Si más adelante quieres trabajar con Git desde tu computadora en vez
de subir archivos a mano desde la web, instala
[GitHub Desktop](https://desktop.github.com/) — tiene interfaz gráfica,
no necesitas usar comandos. Ahí puedes clonar el repo, editar los
archivos con cualquier editor (por ejemplo VS Code), y con un par de
clics ("Commit" y luego "Push") subir los cambios.
