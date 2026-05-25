'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Play, Sparkles } from 'lucide-react'
import { useLanguage } from './LanguageProvider'

export default function Hero() {
  const { language } = useLanguage()
  const t = language === 'fr'
    ? {
        eyebrow: 'Coaching fitness premium',
        titleTop: 'Construis un corps',
        titleAccent: 'qui performe',
        titleBottom: 'autant qu’il impressionne',
        description:
          'Un coaching précis, une nutrition durable et un vrai suivi pour les personnes ambitieuses qui veulent des résultats visibles et une vie plus forte au quotidien.',
        pills: ['Plans axés force', 'Conseils nutrition', 'En ligne + présentiel'],
        book: 'Réserver une consultation',
        results: 'Voir les résultats',
        stats: ['Clients accompagnés', 'Années d’expérience', 'Taux de réussite'],
        badge: 'Coaching haute performance',
        focusLabel: 'Signature',
        focusValue: 'Force. Forme. Régularité.',
      }
    : {
        eyebrow: 'Elite Fitness Coaching',
        titleTop: 'Build a body',
        titleAccent: 'that performs',
        titleBottom: 'as powerfully as it looks',
        description:
          'Precision training, sustainable nutrition, and high-accountability coaching for ambitious people who want visible results and a stronger daily life.',
        pills: ['Strength-first plans', 'Nutrition guidance', 'Online + in-person'],
        book: 'Book a Consultation',
        results: 'View Results',
        stats: ['Clients coached', 'Years in the field', 'Client success rate'],
        badge: 'High-performance coaching',
        focusLabel: 'Signature focus',
        focusValue: 'Strength. Shape. Consistency.',
      }

  return (
    <section className="section-shell relative min-h-screen w-full overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 opacity-25"
          style={{
            backgroundImage: 'url(/hero-bg.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed',
          }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(242,106,46,0.25),transparent_22%),radial-gradient(circle_at_80%_12%,rgba(213,255,95,0.12),transparent_18%)]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#090b0e] via-[#0b0d10]/88 to-[#0b0d10]/58" />
      </div>

      <div className="relative z-10 flex min-h-screen items-center justify-center px-4 py-20 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="grid w-full max-w-7xl items-center gap-14 lg:grid-cols-[1.08fr_0.92fr]"
        >
          <div className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="eyebrow mb-6"
            >
              <Sparkles className="h-3.5 w-3.5" />
              <span>{t.eyebrow}</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-6 text-5xl font-bold leading-[0.95] text-white md:text-7xl xl:text-[5.4rem]"
            >
              {t.titleTop}
              <br />
              <span className="bg-gradient-to-r from-primary via-[#ff9f66] to-accent bg-clip-text text-transparent">
                {t.titleAccent}
              </span>
              <br />
              {t.titleBottom}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mb-8 max-w-2xl text-lg leading-8 text-stone-300 md:text-xl"
            >
              {t.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.35 }}
              className="mb-10 flex flex-wrap justify-center gap-3 lg:justify-start"
            >
              {t.pills.map((pill) => (
                <div key={pill} className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-stone-200">
                  {pill}
                </div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col justify-center gap-4 sm:flex-row lg:justify-start"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-4 font-bold text-black transition-colors hover:bg-[#ff824c]"
                >
                  {t.book}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="#gallery"
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/6 px-7 py-4 font-bold text-white transition-colors hover:border-white/30"
                >
                  {t.results}
                  <Play className="h-4 w-4" />
                </Link>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-12 grid grid-cols-3 gap-4 border-t border-white/10 pt-8 text-left"
            >
              <div>
                <p className="text-3xl font-bold text-white">10+</p>
                <p className="mt-1 text-sm uppercase tracking-[0.18em] text-stone-400">{t.stats[0]}</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-white">10+</p>
                <p className="mt-1 text-sm uppercase tracking-[0.18em] text-stone-400">{t.stats[1]}</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-white">95%</p>
                <p className="mt-1 text-sm uppercase tracking-[0.18em] text-stone-400">{t.stats[2]}</p>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="mx-auto w-full max-w-md lg:max-w-xl"
          >
            <div className="warm-ring relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5">
              <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              <div className="pointer-events-none absolute -left-10 top-6 z-10 rounded-full border border-white/10 bg-black/35 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-stone-200 backdrop-blur-md">
                {t.badge}
              </div>
              <div className="pointer-events-none absolute -right-6 bottom-10 z-10 glass-panel px-5 py-4">
                <p className="text-xs uppercase tracking-[0.2em] text-stone-400">{t.focusLabel}</p>
                <p className="mt-2 text-xl font-bold text-white">{t.focusValue}</p>
              </div>
              <Image
                src="/cv_coach_image.webp"
                alt="Fitness coach portrait"
                width={900}
                height={1100}
                priority
                className="h-auto w-full object-cover"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 transform"
      >
        <div className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-primary p-2">
          <motion.div className="h-2 w-1 rounded-full bg-primary" />
        </div>
      </motion.div>
    </section>
  )
}
