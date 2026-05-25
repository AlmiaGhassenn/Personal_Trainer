'use client'

import { useState } from 'react'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import ScrollFadeIn from './ScrollFadeIn'
import { useLanguage } from './LanguageProvider'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from './ui/dialog'

export default function Gallery() {
  const { language } = useLanguage()
  const [selectedTransformation, setSelectedTransformation] = useState<null | {
    id: number
    image: string
    title: string
    detail: string
  }>(null)
  const t = language === 'fr'
    ? {
        eyebrow: 'Transformations',
        heading: 'Des résultats visibles, construits avec régularité.',
        intro:
          'Découvre des transformations réelles. Chaque image reflète un travail cohérent, un accompagnement adapté et une progression durable.',
        sideLabel: 'Ce qui change le plus',
        sideValue: 'Composition corporelle, confiance et habitudes solides.',
        resultLabel: 'Résultat client',
        verified: 'Vérifié',
        openDetails: 'Voir le détail',
        popupLabel: 'Transformation en détail',
        closeLabel: 'Fermer',
        ctaEyebrow: 'À toi maintenant',
        ctaTitle: 'Prêt(e) à commencer ta propre transformation ?',
        ctaText:
          'La prochaine réussite peut commencer avec un plan clair, le bon accompagnement et une première discussion sur tes objectifs.',
        ctaButton: 'Rejoindre les réussites',
        transformations: [
          { id: 1, image: '/transformation 1.jpeg', title: 'Reset Silhouette', detail: 'Une recomposition physique nette avec plus de tonicité et une meilleure présence.' },
          { id: 2, image: '/transformation 2.jpeg', title: 'Retour en Force', detail: 'Une progression régulière transformée en résultat visible et durable.' },
          { id: 3, image: '/transformation 3.jpeg', title: 'Reconstruction Athlétique', detail: 'Un physique plus sec et plus fort grâce à un travail structuré.' },
          { id: 4, image: '/transformation 4.jpeg', title: 'Confiance Retrouvée', detail: 'Un changement qui se voit autant sur le corps que dans l’attitude.' },
          { id: 5, image: '/transformation 5.jpeg', title: 'Définition & Contrôle', detail: 'Un meilleur encadrement, plus de discipline, et une silhouette plus affirmée.' },
          { id: 6, image: '/transformation 6.jpeg', title: 'Progression Stable', detail: 'Des résultats construits étape par étape avec une méthode réaliste.' },
          { id: 7, image: '/transformation 7.jpeg', title: 'Nouvel Élan', detail: 'Une transformation portée par la constance, le coaching et de bons ajustements.' },
        ],
      }
    : {
        eyebrow: 'Transformations',
        heading: 'Visible progress, backed by consistent coaching.',
        intro:
          'Explore real client outcomes. Each image reflects consistent work, tailored coaching, and sustainable progress.',
        sideLabel: 'What changes most',
        sideValue: 'Body composition, confidence, and sustainable routines.',
        resultLabel: 'Client result',
        verified: 'Verified',
        openDetails: 'View details',
        popupLabel: 'Transformation details',
        closeLabel: 'Close',
        ctaEyebrow: 'Your turn',
        ctaTitle: 'Ready to start your own transformation journey?',
        ctaText:
          'The next success story can start with a clear plan, the right support, and a first conversation about your goals.',
        ctaButton: 'Join Our Success Stories',
        transformations: [
          { id: 1, image: '/transformation 1.jpeg', title: 'Lean Reset', detail: 'A focused body recomposition journey with visible strength and physique improvements.' },
          { id: 2, image: '/transformation 2.jpeg', title: 'Strength Revival', detail: 'Structured coaching that turned consistency into clear, visible progress.' },
          { id: 3, image: '/transformation 3.jpeg', title: 'Athletic Rebuild', detail: 'A leaner, stronger result built through disciplined training and recovery.' },
          { id: 4, image: '/transformation 4.jpeg', title: 'Shape & Confidence', detail: 'Proof that tailored programming creates lasting changes in shape and confidence.' },
          { id: 5, image: '/transformation 5.jpeg', title: 'Performance Cut', detail: 'A high-accountability plan that delivered a noticeably stronger physique.' },
          { id: 6, image: '/transformation 6.jpeg', title: 'Balanced Progress', detail: 'Steady progress over time with a program designed for sustainable results.' },
          { id: 7, image: '/transformation 7.jpeg', title: 'Momentum Shift', detail: 'Another client result shaped by consistency, coaching, and smart progression.' },
        ],
      }

  return (
    <section id="gallery" className="section-shell px-4 py-24 md:px-6 md:py-32">
      <div className="mx-auto max-w-7xl">
        <ScrollFadeIn className="mb-16 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <div className="eyebrow mb-5">
              <span>{t.eyebrow}</span>
            </div>
            <h2 className="section-heading mb-5">{t.heading}</h2>
            <p className="section-copy">
              {t.intro}
            </p>
          </div>
          <div className="glass-panel max-w-sm p-6">
            <p className="text-sm uppercase tracking-[0.2em] text-stone-400">{t.sideLabel}</p>
            <p className="mt-3 text-xl font-semibold text-white">{t.sideValue}</p>
          </div>
        </ScrollFadeIn>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
          {t.transformations.map((transformation, index) => (
            <ScrollFadeIn key={transformation.id} delay={index * 0.15} className="flex flex-col">
              <button
                type="button"
                onClick={() => setSelectedTransformation(transformation)}
                className="glass-panel flex h-full flex-col overflow-hidden p-3 text-left transition-transform hover:-translate-y-1"
              >
                <div className="mb-6 h-96 overflow-hidden rounded-[1.4rem] md:h-80">
                  <div
                    className="h-full w-full bg-cover bg-center bg-no-repeat transition-transform duration-500 hover:scale-105"
                    style={{ backgroundImage: `url("${transformation.image}")` }}
                  />
                </div>

                <div className="flex flex-1 flex-col px-3 pb-3">
                  <div className="mb-4 flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-bold text-white">{transformation.title}</h3>
                      <p className="mt-1 text-sm uppercase tracking-[0.18em] text-primary">{t.resultLabel}</p>
                    </div>
                    <div className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-stone-300">
                      {t.verified}
                    </div>
                  </div>
                  <p className="text-stone-400">{transformation.detail}</p>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-accent">
                    {t.openDetails}
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </button>
            </ScrollFadeIn>
          ))}
        </div>

        <ScrollFadeIn className="mt-16 text-center">
          <div className="glass-panel mx-auto max-w-4xl px-8 py-10 md:px-12">
            <p className="mb-3 text-sm uppercase tracking-[0.24em] text-accent">{t.ctaEyebrow}</p>
            <h3 className="mb-4 text-3xl font-bold text-white md:text-4xl">{t.ctaTitle}</h3>
            <p className="mx-auto mb-8 max-w-2xl text-stone-400">
              {t.ctaText}
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-8 py-4 font-bold text-black transition-colors hover:bg-[#e2ff87]"
            >
              {t.ctaButton}
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </ScrollFadeIn>
      </div>

      <Dialog open={selectedTransformation !== null} onOpenChange={(open) => !open && setSelectedTransformation(null)}>
        <DialogContent className="glass-panel max-w-4xl border-white/10 bg-[#10151b] p-0 text-white sm:max-w-4xl">
          {selectedTransformation && (
            <div className="grid overflow-hidden md:grid-cols-[1.05fr_0.95fr]">
              <div className="relative min-h-[320px] md:min-h-[620px]">
                <Image
                  src={selectedTransformation.image}
                  alt={selectedTransformation.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 55vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
              </div>

              <div className="flex flex-col justify-between p-8 md:p-10">
                <DialogHeader className="text-left">
                  <p className="mb-3 text-sm uppercase tracking-[0.22em] text-accent">{t.popupLabel}</p>
                  <DialogTitle className="text-3xl font-bold text-white">{selectedTransformation.title}</DialogTitle>
                  <DialogDescription className="mt-4 text-base leading-8 text-stone-300">
                    {selectedTransformation.detail}
                  </DialogDescription>
                </DialogHeader>

                <div className="mt-10 space-y-4">
                  <div className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-4">
                    <p className="text-sm uppercase tracking-[0.18em] text-stone-400">{t.resultLabel}</p>
                    <p className="mt-2 text-lg font-semibold text-white">{selectedTransformation.title}</p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setSelectedTransformation(null)}
                    className="inline-flex w-full items-center justify-center rounded-full bg-primary px-6 py-4 font-bold text-black transition-colors hover:bg-[#ff824c]"
                  >
                    {t.closeLabel}
                  </button>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  )
}
