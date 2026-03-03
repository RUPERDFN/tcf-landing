import { motion } from 'framer-motion';
import { useState } from 'react';
import { Clock, Leaf, ShoppingCart, Salad, Check, ChevronDown, ChevronUp, Send, Star, ClipboardList, Bot, ListChecks, ChefHat, CalendarDays, Sparkles, BarChart3, MessageCircle, Apple, Trophy, Ban, Headphones, Shield } from 'lucide-react';
import { SiInstagram, SiX, SiFacebook } from 'react-icons/si';
import { ASSETS } from '@/lib/config/assets';
const APP_URL = import.meta.env.VITE_APP_URL || 'https://app.thecookflow.com';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Landing() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [email, setEmail] = useState('');

  const steps = [
    {
      icon: ClipboardList,
      title: 'Cuéntanos sobre ti',
      description: 'Completa un breve cuestionario sobre tu familia, presupuesto, alergias y preferencias.'
    },
    {
      icon: Bot,
      title: 'La IA crea tu menú',
      description: 'Nuestra IA genera un menú semanal personalizado con recetas fáciles y equilibradas.'
    },
    {
      icon: ListChecks,
      title: 'Lista de compra automática',
      description: 'Recibe una lista de compra optimizada. Compara precios entre supermercados.'
    },
    {
      icon: ChefHat,
      title: 'Cocina y disfruta',
      description: 'Sigue las recetas paso a paso. El chef virtual resuelve tus dudas.'
    }
  ];

  const benefits = [
    { icon: Clock, title: 'Ahorra 5 horas semanales', description: 'Deja de pensar qué cocinar cada día' },
    { icon: Leaf, title: 'Reduce un 30% el desperdicio', description: 'Compra solo lo que necesitas' },
    { icon: Salad, title: 'Come más saludable', description: 'Menús equilibrados y variados' },
    { icon: ShoppingCart, title: 'Lista de compra inteligente', description: 'Organizada por secciones del supermercado' }
  ];

  const faqs = [
    { q: '¿Cómo funciona TheCookFlow?', a: 'TheCookFlow usa inteligencia artificial para crear menús semanales personalizados basados en tus preferencias, restricciones alimentarias y el número de comensales. También genera automáticamente la lista de la compra.' },
    { q: '¿Puedo indicar alergias o intolerancias?', a: 'Sí, puedes configurar todas tus alergias e intolerancias alimentarias. Nuestra IA las tendrá en cuenta al generar tus menús y recetas.' },
    { q: '¿Las recetas son difíciles de preparar?', a: 'Ofrecemos recetas para todos los niveles, desde principiantes hasta expertos. Puedes filtrar por tiempo de preparación y dificultad.' },
    { q: '¿Puedo cambiar recetas del menú?', a: 'Por supuesto. Puedes regenerar cualquier receta individual o todo el menú cuando quieras.' },
    { q: '¿La lista de compra se actualiza automáticamente?', a: 'Sí, cada vez que modificas el menú, la lista de compra se actualiza instantáneamente con los ingredientes necesarios.' },
    { q: '¿Puedo usar TheCookFlow en familia?', a: 'Sí, puedes configurar el número de comensales y las cantidades se ajustan automáticamente.' },
    { q: '¿Qué incluye el plan Premium?', a: 'El plan Premium incluye menús ilimitados, recetas exclusivas, comparador de precios de supermercados, y soporte prioritario.' },
    { q: '¿Cómo cancelo mi suscripción?', a: 'Puedes cancelar en cualquier momento desde tu perfil. No hay permanencia ni penalizaciones.' }
  ];

  const testimonials = [
    {
      name: 'María García',
      city: 'Madrid',
      initials: 'MG',
      color: '#E74C3C',
      rating: 5,
      text: 'Con dos niños pequeños, planificar las comidas era una pesadilla. TheCookFlow me ahorra 2 horas a la semana y mis hijos comen más variado. ¡El chef virtual es genial para resolver dudas!'
    },
    {
      name: 'Carlos Rodríguez',
      city: 'Barcelona',
      initials: 'CR',
      color: '#3498DB',
      rating: 5,
      text: 'Trabajo muchas horas y antes comía cualquier cosa. Ahora tengo menús saludables sin pensar. La lista de compra es perfecta, no compro de más.'
    },
    {
      name: 'Ana López',
      city: 'Valencia',
      initials: 'AL',
      color: '#9B59B6',
      rating: 5,
      text: 'Somos 5 en casa con diferentes gustos. La app tiene en cuenta las alergias de mi hijo y las preferencias de todos. Ahorramos unos 50€ al mes en comida.'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4">
        <div className="flex items-center gap-2">
          <img
            src={ASSETS.logos.main}
            alt="TheCookFlow"
            className="w-8 h-8"
          />
          <span className="text-white font-chalk text-lg">TheCookFlow</span>
        </div>
        <a
          href={`${APP_URL}/login`}
          className="text-white hover:text-[#5DB9A8] transition-colors"
          data-testid="link-login"
        >
          Entrar
        </a>
      </header>

      {/* Hero Section */}
      <section
        className="relative min-h-screen flex items-center justify-center"
        style={{ backgroundImage: `url(${ASSETS.marketing.heroFamily})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="absolute inset-0 hero-overlay" />

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.div {...fadeInUp}>
            {/* Logo */}
            <div className="flex items-center justify-center mb-8">
              <img
                src={ASSETS.logos.main}
                alt="TheCookFlow"
                className="h-24 md:h-32"
                data-testid="img-logo"
              />
            </div>

            {/* Badge */}
            <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <span className="text-white text-sm font-medium">
                Únete a +10,000 familias españolas
              </span>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 chalk-title" data-testid="text-hero-title">
              ¿Qué quieres comer esta semana?
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-2xl mx-auto text-chalk">
              Tu chef personal con IA que planifica menús, crea listas de compra y te ayuda a comer mejor
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={`${APP_URL}/register`} data-testid="link-register">
                <button className="btn-chalk" data-testid="button-cta-primary">
                  Empezar Gratis
                </button>
              </a>
              <a href="#como-funciona" data-testid="link-how-it-works">
                <button className="btn-secondary-chalk" data-testid="button-cta-secondary">
                  Ver cómo funciona
                </button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Cómo Funciona */}
      <section id="como-funciona" className="py-20">
        <div className="section-container">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2
              className="text-4xl md:text-5xl font-bold text-center chalk-title mb-16"
              variants={fadeInUp}
            >
              ¿Cómo Funciona?
            </motion.h2>

            {/* Desktop: 4 columnas con línea conectora */}
            <div className="hidden lg:block relative">
              {/* Línea conectora */}
              <div className="absolute top-16 left-[12%] right-[12%] h-0.5 bg-white/20" />

              <div className="grid grid-cols-4 gap-6">
                {steps.map((step, index) => (
                  <motion.div
                    key={index}
                    className="relative text-center"
                    variants={fadeInUp}
                    data-testid={`card-step-${index + 1}`}
                  >
                    {/* Número grande estilo tiza */}
                    <div className="text-6xl font-bold text-white/10 absolute -top-2 left-1/2 -translate-x-1/2 select-none" style={{ fontFamily: 'Caveat, cursive' }}>
                      {index + 1}
                    </div>

                    {/* Icono */}
                    <div className="w-20 h-20 mx-auto mb-6 bg-[#5DB9A8]/20 border-2 border-white/30 rounded-full flex items-center justify-center relative z-10">
                      <step.icon className="w-10 h-10 text-white" />
                    </div>

                    <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                    <p className="text-white/70 text-sm">{step.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Tablet: 2x2 grid */}
            <div className="hidden md:grid lg:hidden grid-cols-2 gap-8">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  className="card-chalk text-center relative"
                  variants={fadeInUp}
                  data-testid={`card-step-tablet-${index + 1}`}
                >
                  <div className="text-5xl font-bold text-[#f5d742] absolute -top-3 -left-3" style={{ fontFamily: 'Caveat, cursive' }}>
                    {index + 1}
                  </div>
                  <div className="w-16 h-16 mx-auto mb-4 bg-[#5DB9A8]/20 border-2 border-white/30 rounded-full flex items-center justify-center">
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-white/70 text-sm">{step.description}</p>
                </motion.div>
              ))}
            </div>

            {/* Móvil: vertical con línea lateral */}
            <div className="md:hidden relative">
              {/* Línea lateral */}
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-white/20" />

              <div className="space-y-8">
                {steps.map((step, index) => (
                  <motion.div
                    key={index}
                    className="flex gap-6 relative"
                    variants={fadeInUp}
                    data-testid={`card-step-mobile-${index + 1}`}
                  >
                    {/* Número con círculo */}
                    <div className="w-12 h-12 bg-[#5DB9A8] rounded-full flex items-center justify-center flex-shrink-0 relative z-10">
                      <span className="text-white font-bold text-xl" style={{ fontFamily: 'Caveat, cursive' }}>{index + 1}</span>
                    </div>

                    <div className="flex-1 card-chalk">
                      <div className="flex items-center gap-3 mb-3">
                        <step.icon className="w-6 h-6 text-[#5DB9A8]" />
                        <h3 className="text-lg font-bold text-white">{step.title}</h3>
                      </div>
                      <p className="text-white/70 text-sm">{step.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Beneficios */}
      <section className="py-20">
        <div className="section-container">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2
              className="text-4xl md:text-5xl font-bold text-center chalk-title mb-16"
              variants={fadeInUp}
            >
              Beneficios
            </motion.h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  className="card-chalk text-center"
                  variants={fadeInUp}
                  data-testid={`card-benefit-${index + 1}`}
                >
                  <div className="w-16 h-16 mx-auto mb-4 bg-[#5DB9A8] rounded-full flex items-center justify-center">
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{benefit.title}</h3>
                  <p className="text-white/70 text-sm">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonios */}
      <section className="py-20">
        <div className="section-container">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2
              className="text-4xl md:text-5xl font-bold text-center chalk-title mb-4"
              variants={fadeInUp}
            >
              Lo que dicen nuestros usuarios
            </motion.h2>
            <motion.p
              className="text-xl text-white/70 text-center mb-16"
              variants={fadeInUp}
            >
              Miles de familias ya confían en TheCookFlow
            </motion.p>

            <div className="grid md:grid-cols-3 gap-6">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  className="card-chalk"
                  variants={fadeInUp}
                  data-testid={`card-testimonial-${index + 1}`}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg"
                      style={{ backgroundColor: testimonial.color }}
                    >
                      {testimonial.initials}
                    </div>
                    <div>
                      <h4 className="font-bold text-white">{testimonial.name}</h4>
                      <p className="text-white/60 text-sm">{testimonial.city}</p>
                    </div>
                  </div>
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-[#f5d742] text-[#f5d742]" />
                    ))}
                  </div>
                  <p className="text-white/80 leading-relaxed">"{testimonial.text}"</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Precios */}
      <section id="pricing" className="py-20">
        <div className="section-container">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2
              className="text-4xl md:text-5xl font-bold text-center chalk-title mb-4"
              variants={fadeInUp}
            >
              Transforma tu forma de comer
            </motion.h2>
            <motion.p
              className="text-xl text-white/70 text-center mb-16"
              variants={fadeInUp}
            >
              Comienza gratis, mejora a Profesional cuando estés listo.
            </motion.p>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">

              {/* Plan Free */}
              <motion.div
                className="relative p-8 md:p-10 rounded-2xl bg-black/40 border border-white/20 flex flex-col"
                variants={fadeInUp}
              >
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: 'Caveat, cursive' }}>
                    Plan Free
                  </h3>
                  <div className="flex items-baseline justify-center gap-2">
                    <span className="text-5xl font-bold text-white">0€</span>
                    <span className="text-xl text-white/50">/mes</span>
                  </div>
                  <p className="text-white/60 text-sm mt-3">Para empezar a organizarte</p>
                </div>

                <ul className="space-y-4 mb-8 flex-1">
                  {[
                    { icon: Sparkles, text: 'Recetas básicas generadas con IA' },
                    { icon: Salad, text: 'Inventario manual de nevera' },
                    { icon: Apple, text: 'Perfil nutricional estándar' },
                    { icon: CalendarDays, text: 'Límite de 2 menús mensuales' }
                  ].map((feature, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-white/50" />
                      <span className="text-white/80">{feature.text}</span>
                    </li>
                  ))}
                </ul>

                <a href={`${APP_URL}/register?plan=free`} className="block mt-auto">
                  <button className="w-full py-4 rounded-xl border-2 border-white/30 text-white font-bold hover:bg-white/10 transition-colors">
                    Empieza Gratis
                  </button>
                </a>
              </motion.div>

              {/* Plan Pro */}
              <motion.div
                className="relative p-8 md:p-10 rounded-2xl flex flex-col"
                style={{
                  background: '#2a2a2a',
                  border: '2px solid rgba(93, 185, 168, 0.5)',
                  boxShadow: '0 0 40px rgba(93, 185, 168, 0.2)'
                }}
                variants={fadeInUp}
              >
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#5DB9A8] text-white px-6 py-1.5 rounded-full text-sm font-bold shadow-lg">
                  El más elegido
                </div>

                <div className="text-center mb-8">
                  <h3 className="text-3xl font-bold text-[#5DB9A8] mb-4" style={{ fontFamily: 'Caveat, cursive' }}>
                    Plan Pro
                  </h3>
                  <div className="flex items-baseline justify-center gap-2">
                    <span className="text-6xl font-bold text-white">2,99€</span>
                    <span className="text-xl text-white/50">/mes</span>
                  </div>
                  <p className="text-[#f5d742] font-bold text-sm mt-3">Prueba 14 días gratis</p>
                </div>

                <ul className="space-y-4 mb-8 flex-1">
                  {[
                    { icon: CalendarDays, text: 'Menús semanales ilimitados automatizados' },
                    { icon: Sparkles, text: 'Auto-macros y nutrición predictiva' },
                    { icon: Leaf, text: 'Optimizador de sobras (Waste Reduction Score)' },
                    { icon: ListChecks, text: 'Lista de compra geolocalizada por pasillos' },
                    { icon: MessageCircle, text: 'Tu algoritmo aprende lo que te gusta' },
                    { icon: Shield, text: 'El chef virtual resuelve dudas 24/7' }
                  ].map((feature, i) => (
                    <li key={i} className="flex items-center gap-4">
                      <div className="w-8 h-8 bg-[#5DB9A8]/20 rounded-full flex items-center justify-center flex-shrink-0">
                        <feature.icon className="w-4 h-4 text-[#5DB9A8]" />
                      </div>
                      <span className="text-white font-medium">{feature.text}</span>
                    </li>
                  ))}
                </ul>

                <a href={`${APP_URL}/register?plan=pro`} className="block mt-auto">
                  <button className="btn-chalk w-full text-lg py-5 shadow-xl hover:shadow-[#5DB9A8]/30 transition-shadow">
                    Suscribirse al Pro
                  </button>
                </a>
              </motion.div>

            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="section-container">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2
              className="text-4xl md:text-5xl font-bold text-center chalk-title mb-16"
              variants={fadeInUp}
            >
              Preguntas Frecuentes
            </motion.h2>

            <div className="max-w-3xl mx-auto space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  className="card-chalk overflow-hidden"
                  variants={fadeInUp}
                  data-testid={`faq-${index + 1}`}
                >
                  <button
                    className="w-full px-6 py-4 text-left flex items-center justify-between gap-4"
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    data-testid={`button-faq-${index + 1}`}
                  >
                    <span className="font-semibold text-white">{faq.q}</span>
                    {openFaq === index ? (
                      <ChevronUp className="w-5 h-5 text-white/50 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-white/50 flex-shrink-0" />
                    )}
                  </button>
                  {openFaq === index && (
                    <div className="px-6 pb-4 text-white/70">
                      {faq.a}
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20">
        <div className="section-container text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="card-chalk max-w-3xl mx-auto py-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold chalk-title mb-6">
              Empieza a planificar hoy
            </h2>
            <p className="text-xl text-white/70 mb-10 max-w-2xl mx-auto">
              Únete a miles de familias que ya ahorran tiempo y comen mejor
            </p>
            <a href={`${APP_URL}/register`}>
              <button className="btn-chalk" data-testid="button-cta-final">
                Empezar Gratis
              </button>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 border-t border-white/10">
        <div className="section-container">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            {/* Brand */}
            <div>
              <div className="mb-4">
                <img src={ASSETS.logos.main} alt="TheCookFlow" className="h-12" />
              </div>
              <p className="text-white/60">
                Tu chef personal con IA para planificar menús saludables y ahorrar tiempo en la cocina.
              </p>
            </div>

            {/* Newsletter */}
            <div>
              <h4 className="font-bold text-lg mb-4 text-white">Newsletter</h4>
              <p className="text-white/60 mb-4">Recibe recetas y consejos semanales</p>
              <form
                action="https://formspree.io/f/mkgpqpkl"
                method="POST"
                className="flex gap-2"
              >
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="tu@email.com"
                  className="flex-1 px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:border-[#5DB9A8]"
                  required
                  data-testid="input-newsletter"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-[#5DB9A8] rounded-lg hover:bg-[#4CA897] transition-colors"
                  data-testid="button-newsletter"
                >
                  <Send className="w-5 h-5" />
                </button>
              </form>
            </div>

            {/* Links */}
            <div>
              <h4 className="font-bold text-lg mb-4 text-white">Legal</h4>
              <ul className="space-y-2">
                <li>
                  <a href="/privacidad" className="text-white/60 hover:text-white transition-colors" data-testid="link-privacy">
                    Política de privacidad
                  </a>
                </li>
                <li>
                  <a href="/terminos" className="text-white/60 hover:text-white transition-colors" data-testid="link-terms">
                    Términos de servicio
                  </a>
                </li>
                <li>
                  <a href="/cookies" className="text-white/60 hover:text-white transition-colors" data-testid="link-cookies">
                    Política de cookies
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom */}
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/40 text-sm">
              © 2024 TheCookFlow. Todos los derechos reservados.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-white/40 hover:text-white transition-colors" data-testid="link-instagram">
                <SiInstagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-white/40 hover:text-white transition-colors" data-testid="link-twitter">
                <SiX className="w-5 h-5" />
              </a>
              <a href="#" className="text-white/40 hover:text-white transition-colors" data-testid="link-facebook">
                <SiFacebook className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
