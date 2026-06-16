# Game Wiki

Wiki de juego con catálogo de items y monstruos. Desplegada en GitHub Pages.

## Características

- **Items**: 12 items con detalles de stats, efectos y valores
- **Monstruos**: 10 monstruos con estadísticas, debilidades y drops
- **Búsqueda y filtros**: Encuentra rápidamente lo que necesitas
- **Diseño minimalista**: Interfaz limpia y moderna
- **Responsive**: Funciona en móvil y escritorio

## Rutas

- `/` - Home con items y monstruos destacados
- `/items` - Lista completa de items con filtros
- `/items/:id` - Detalle de item específico
- `/monsters` - Lista completa de monstruos con filtros
- `/monsters/:id` - Detalle de monstruo específico

## Desplegar en GitHub Pages

### Paso 1: Crear repositorio en GitHub

1. Ve a https://github.com/new
2. Nombra el repositorio `game-wiki` (o el nombre que prefieras)
3. No inicialices con README (ya lo tenemos)
4. Crea el repositorio

### Paso 2: Subir código

```bash
# En la carpeta del proyecto
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/TU-USUARIO/game-wiki.git
git push -u origin main
```

### Paso 3: Actualizar homepage

Edita `package.json` y cambia:
```json
"homepage": "https://TU-USUARIO.github.io/game-wiki"
```

### Paso 4: Configurar base path

Edita `vite.config.js` y cambia:
```javascript
base: '/game-wiki/'
```

Si usaste otro nombre para el repo, actualiza esta línea.

### Paso 5: Desplegar

```bash
npm install
npm run deploy
```

### Paso 6: Activar GitHub Pages

1. Ve a Settings → Pages en tu repositorio
2. Source: Deploy from a branch
3. Branch: gh-pages / (root)
4. Guarda y espera 1-2 minutos

### Paso 7: Visita tu wiki

Tu wiki estará en: `https://TU-USUARIO.github.io/game-wiki`

## Desarrollo local

```bash
npm install
npm run dev
```

Abre http://localhost:5173

## Personalizar datos

Edita los archivos JSON en `src/data/`:
- `items.json` - Catálogo de items
- `monsters.json` - Catálogo de monstruos

## Tecnologías

- React 18 + Vite
- React Router (HashRouter)
- TailwindCSS
- Lucide Icons
- gh-pages
