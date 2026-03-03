import { Link } from "wouter";
import { ASSETS } from '@/lib/config/assets';

export default function Terms() {
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
        <h2 className="text-4xl md:text-5xl font-chalk mb-8" data-testid="text-terms-title">
          Términos y Condiciones
        </h2>

        <div className="card-dark space-y-8">
          <p className="text-gray-400">Última actualización: Diciembre 2024</p>

          <section className="space-y-4">
            <h3 className="text-2xl font-chalk">1. Aceptación de los términos</h3>
            <p className="text-gray-300 leading-relaxed">
              Al acceder o utilizar TheCookFlow, aceptas estar sujeto a estos términos y condiciones.
            </p>
          </section>

          <section className="space-y-4">
            <h3 className="text-2xl font-chalk">2. Descripción del servicio</h3>
            <p className="text-gray-300 leading-relaxed">
              TheCookFlow es una plataforma de planificación de menús que utiliza inteligencia artificial para generar planes de comidas personalizados.
            </p>
          </section>

          <section className="space-y-4">
            <h3 className="text-2xl font-chalk">3. Cuenta de usuario</h3>
            <p className="text-gray-300 leading-relaxed">
              Eres responsable de mantener la confidencialidad de tu cuenta y contraseña.
            </p>
          </section>

          <section className="space-y-4">
            <h3 className="text-2xl font-chalk">4. Exención de responsabilidad</h3>
            <p className="text-gray-300 leading-relaxed">
              Las recetas son solo informativas. No somos responsables de reacciones alérgicas u otros daños. Consulta siempre con un profesional de la salud.
            </p>
          </section>

          <section className="space-y-4">
            <h3 className="text-2xl font-chalk">5. Contacto</h3>
            <p className="text-gray-300 leading-relaxed">
              Para preguntas: legal@thecookflow.com
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}
