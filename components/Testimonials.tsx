'use client'

import { Quote, Star } from 'lucide-react'
import ScrollFadeIn from './ScrollFadeIn'
import HoverCard from './HoverCard'
import { useLanguage } from './LanguageProvider'

export default function Testimonials() {
  const { language } = useLanguage()
  const t = language === 'fr'
    ? {
        eyebrow: 'Témoignages',
        heading: 'Des personnes réelles. Une vraie progression. Une vraie confiance.',
        intro:
          'Ces retours parlent de bien plus qu’un changement physique. Ils montrent une meilleure routine, plus de confiance et un accompagnement qui s’adapte à la vraie vie.',
        role: 'Client',
        testimonials: [
          {
            name: 'Raouf',
            content:
              'Avec Almia, j’ai trouvé de la structure, du suivi et des résultats visibles. Le coaching a été personnel dès le début et m’a aidé à rester constant.',
            rating: 5,
          },
          {
            name: 'Boubakker',
            content:
              'Je voulais un coach qui comprenne mes objectifs et garde le plan simple et efficace. Almia a fait exactement ça, et la transformation a suivi.',
            rating: 5,
          },
        ],
        ctaEyebrow: 'Travaille avec un coach présent à tes côtés',
        ctaTitle: 'Rejoins des centaines de clients satisfaits',
        ctaText:
          'Ta transformation peut être la prochaine. Commence avec un plan construit selon tes objectifs, ton rythme et ton quotidien.',
        ctaButton: 'Commencer ta transformation',
      }
    : {
        eyebrow: 'Testimonials',
        heading: 'Real people. Real momentum. Real confidence.',
        intro:
          'These stories speak to more than weight loss or muscle gain. They reflect stronger routines, sharper self-belief, and coaching that fits real life.',
        role: 'Client',
        testimonials: [
          {
            name: 'Raouf',
            content:
              'Working with Almia gave me structure, accountability, and results I could actually see. The coaching felt personal from day one and pushed me to stay consistent.',
            rating: 5,
          },
          {
            name: 'Boubakker',
            content:
              'I wanted a coach who understood my goals and kept the plan simple and effective. Almia did exactly that, and the physical transformation followed.',
            rating: 5,
          },
        ],
        ctaEyebrow: 'Work with a coach who stays in your corner',
        ctaTitle: 'Join hundreds of satisfied clients',
        ctaText:
          'Your transformation story could be next. Start with a plan built around your goals, your schedule, and your pace.',
        ctaButton: 'Start Your Transformation',
      }

  return (
    <section id="testimonials" className="section-shell px-4 py-24 md:px-6 md:py-32">
      <div className="mx-auto max-w-7xl">
        <ScrollFadeIn className="mb-16 max-w-3xl">
          <div className="eyebrow mb-5">
            <span>{t.eyebrow}</span>
          </div>
          <h2 className="section-heading mb-5">{t.heading}</h2>
          <p className="section-copy">
            {t.intro}
          </p>
        </ScrollFadeIn>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {t.testimonials.map((testimonial, index) => (
            <ScrollFadeIn key={index} delay={index * 0.08}>
              <HoverCard className="h-full p-7">
                <div>
                  <div className="mb-6 flex items-center justify-between">
                    <div className="flex gap-1">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                      ))}
                    </div>
                    <div className="rounded-full bg-white/5 p-3">
                      <Quote className="h-4 w-4 text-accent" />
                    </div>
                  </div>

                  <p className="mb-8 text-base leading-8 text-stone-300">
                    "{testimonial.content}"
                  </p>
                </div>

                <div className="border-t border-white/10 pt-5">
                  <h4 className="font-bold text-white">{testimonial.name}</h4>
                  <p className="mt-1 text-sm uppercase tracking-[0.16em] text-primary">{t.role}</p>
                </div>
              </HoverCard>
            </ScrollFadeIn>
          ))}
        </div>

        <ScrollFadeIn className="mt-16 text-center">
          <div className="glass-panel px-8 py-10 md:px-12 md:py-14">
            <p className="mb-3 text-sm uppercase tracking-[0.24em] text-accent">{t.ctaEyebrow}</p>
            <h3 className="mb-4 text-3xl font-bold text-white md:text-4xl">
              {t.ctaTitle}
            </h3>
            <p className="mx-auto mb-8 max-w-2xl text-stone-400 md:text-lg">
              {t.ctaText}
            </p>
            <a
              href="#contact"
              className="inline-flex rounded-full bg-primary px-8 py-4 font-bold text-black transition-colors hover:bg-[#ff824c]"
            >
              {t.ctaButton}
            </a>
          </div>
        </ScrollFadeIn>
      </div>
    </section>
  )
}
