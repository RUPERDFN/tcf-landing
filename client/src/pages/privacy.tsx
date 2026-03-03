import { Link } from "wouter";
import { ASSETS } from '@/lib/config/assets';

export default function Privacy() {
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
        <h2 className="text-4xl md:text-5xl font-chalk mb-8" data-testid="text-privacy-title">
          Política de Privacidad
        </h2>

        <div className="card-dark space-y-8">
          <p className="text-gray-400">Última actualización: Diciembre 2024</p>

          <section className="space-y-4">
            <h3 className="text-2xl font-chalk">1. Información que recopilamos</h3>
            <p className="text-gray-300 leading-relaxed">
              En TheCookFlow recopilamos información que nos proporcionas directamente, como tu dirección de correo electrónico, preferencias alimenticias, alergias y restricciones dietéticas.
            </p>
          </section>

          <section className="space-y-4">
            <h3 className="text-2xl font-chalk">2. Cómo usamos tu información</h3>
            <p className="text-gray-300 leading-relaxed">
              Utilizamos la información para generar menús personalizados, mejorar nuestros algoritmos de IA y enviarte comunicaciones relacionadas con el servicio.
            </p>
          </section>

          <section className="space-y-4">
            <h3 className="text-2xl font-chalk">3. Compartir información</h3>
            <p className="text-gray-300 leading-relaxed">
              No vendemos ni compartimos tu información personal con terceros para fines de marketing.
            </p>
          </section>

          <section className="space-y-4">
            <h3 className="text-2xl font-chalk">4. Seguridad de datos</h3>
            <p className="text-gray-300 leading-relaxed">
              Implementamos medidas de seguridad técnicas y organizativas para proteger tu información personal.
            </p>
          </section>

          <section className="space-y-4">
            <h3 className="text-2xl font-chalk">5. Tus derechos</h3>
            <p className="text-gray-300 leading-relaxed">
              Tienes derecho a acceder, rectificar, eliminar o portar tus datos personales. Contacta: privacidad@thecookflow.com
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}
