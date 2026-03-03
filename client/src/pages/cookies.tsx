import { Link } from "wouter";
import { ASSETS } from '@/lib/config/assets';

export default function Cookies() {
  return (
    <div className="min-h-screen">
      <header className="py-6 backdrop-blur-sm bg-black/30 border-b border-white/10">
        <div className="section-container flex items-center gap-4">
          <Link href="/" className="flex items-center gap-3" data-testid="link-home">
            <img src={ASSETS.logos.main} alt="TheCookFlow" className="w-10 h-10" />
            <h1 className="text-xl font-chalk">The CookFlow</h1>
          </Link>
        </div>
      </header>

      <main className="section-container py-12 md:py-16">
        <h2 className="text-4xl md:text-5xl font-chalk mb-8" data-testid="text-cookies-title">
          Política de Cookies
        </h2>

        <div className="card-dark space-y-8">
          <p className="text-gray-400">Última actualización: Diciembre 2024</p>

          <section className="space-y-4">
            <h3 className="text-2xl font-chalk">1. Qué son las cookies</h3>
            <p className="text-gray-300 leading-relaxed">
              Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo cuando visitas un sitio web.
            </p>
          </section>

          <section className="space-y-4">
            <h3 className="text-2xl font-chalk">2. Tipos de cookies que utilizamos</h3>
            <p className="text-gray-300 leading-relaxed">
              <strong className="text-white">Cookies esenciales:</strong> Necesarias para el funcionamiento básico del sitio.
            </p>
            <p className="text-gray-300 leading-relaxed">
              <strong className="text-white">Cookies de preferencias:</strong> Permiten recordar tus preferencias.
            </p>
            <p className="text-gray-300 leading-relaxed">
              <strong className="text-white">Cookies analíticas:</strong> Nos ayudan a entender cómo interactúas con el sitio.
            </p>
          </section>

          <section className="space-y-4">
            <h3 className="text-2xl font-chalk">3. Cómo gestionar las cookies</h3>
            <p className="text-gray-300 leading-relaxed">
              Puedes configurar tu navegador para rechazar todas las cookies o para que te avise cuando se envía una cookie.
            </p>
          </section>

          <section className="space-y-4">
            <h3 className="text-2xl font-chalk">4. Contacto</h3>
            <p className="text-gray-300 leading-relaxed">
              Para preguntas sobre cookies: privacidad@thecookflow.com
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}
