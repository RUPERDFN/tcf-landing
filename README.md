# TheCookFlow Landing Page

Landing page para TheCookFlow, una aplicación de planificación de comidas impulsada por IA que genera menús semanales personalizados, listas de compra automáticas y recetas adaptadas a restricciones dietéticas.

## Stack Tecnológico

- **Frontend:** React 18 + TypeScript
- **Build Tool:** Vite
- **Estilos:** Tailwind CSS
- **Animaciones:** Framer Motion
- **Backend:** Express.js (para desarrollo)
- **Deployment:** Docker + Nginx

## Características

- Diseño estilo pizarra/tiza con fuentes manuscritas
- SEO optimizado (meta tags, Open Graph, Schema.org)
- Sección de testimonios con valoraciones
- Flujo de 4 pasos "Cómo funciona"
- Plan de precios Premium único
- Formulario de newsletter
- Responsive design
- Soporte multi-idioma (Español)

## Instalación

```bash
# Clonar repositorio
git clone https://github.com/tu-usuario/thecookflow-landing.git
cd thecookflow-landing

# Instalar dependencias
npm install

# Copiar variables de entorno
cp .env.example .env

# Editar .env con tus valores
```

## Variables de Entorno

| Variable              | Descripción                      | Ejemplo                     |
| --------------------- | -------------------------------- | --------------------------- |
| `VITE_APP_URL`        | URL de la aplicación principal   | `https://app.thecookflow.com` |
| `VITE_ASSETS_URL`     | URL base para assets             | `https://thecookflow.com`     |
| `VITE_PLAY_URL`       | URL de Google Play Store         | `https://play.google.com/...` |
| `VITE_FORMSPREE_ID`   | ID de Formspree para newsletter  | `mkgpqpkl`                  |
| `VITE_GA_TRACKING_ID` | ID de Google Analytics           | `G-TV8JD99LTH`              |

## Comandos Disponibles

```bash
# Desarrollo (con hot reload)
npm run dev

# Build para producción
npm run build

# Preview del build
npm run preview

# Verificar tipos TypeScript
npm run check

# Migraciones de base de datos
npm run db:push
```

## Docker

```bash
# Build de imagen
docker build \
  --build-arg VITE_APP_URL=https://app.thecookflow.com \
  --build-arg VITE_ASSETS_URL=https://thecookflow.com \
  -t thecookflow-landing .

# Ejecutar contenedor
docker run -p 80:80 thecookflow-landing

# Health check
curl http://localhost/nginx-health
```

## Estructura del Proyecto

```
├── client/                 # Frontend React
│   ├── src/
│   │   ├── pages/         # Páginas (home, privacy, terms, cookies)
│   │   ├── components/    # Componentes reutilizables
│   │   │   └── ui/        # Componentes shadcn/ui
│   │   ├── hooks/         # Hooks personalizados
│   │   └── lib/           # Utilidades
│   └── index.html
├── server/                 # Backend Express
├── shared/                 # Tipos compartidos
├── public/                 # Assets estáticos
│   ├── robots.txt
│   ├── sitemap.xml
│   └── site.webmanifest
├── Dockerfile             # Multi-stage build
├── nginx.conf             # Configuración Nginx
└── README.md
```

## SEO

- Meta tags completos (title, description, keywords)
- Open Graph para compartir en redes sociales
- Twitter Cards
- Schema.org (SoftwareApplication, Organization, FAQPage)
- `robots.txt` y `sitemap.xml`
- Redirección www a non-www

## Seguridad

- Headers de seguridad en Nginx (X-Frame-Options, X-Content-Type-Options, etc.)
- Variables sensibles en `.env` (no en código)
- Validación de inputs en formularios
- Sin API keys hardcodeadas

## Contribuir

1. Fork el repositorio
2. Crea tu rama (`git checkout -b feature/nueva-funcionalidad`)
3. Commit tus cambios (`git commit -m 'Añadir nueva funcionalidad'`)
4. Push a la rama (`git push origin feature/nueva-funcionalidad`)
5. Abre un Pull Request

## Licencia

MIT License - ver [LICENSE](LICENSE) para más detalles.

## Contacto

- Web: [thecookflow.com](https://thecookflow.com)
- Email: hola@thecookflow.com
