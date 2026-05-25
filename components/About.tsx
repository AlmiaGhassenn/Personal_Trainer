'use client'

import Image from 'next/image'
import { ArrowUpRight, BadgeCheck, Dumbbell, HeartHandshake, Salad, Video } from 'lucide-react'
import ScrollFadeIn from './ScrollFadeIn'
import CountUp from './CountUp'
import HoverCard from './HoverCard'
import { useLanguage } from './LanguageProvider'

export default function About() {
  const { language } = useLanguage()
  const t = language === 'fr'
    ? {
        stats: [
          { label: "Années d'expérience", value: 10 },
          { label: 'Clients accompagnés', value: 10, suffix: '+' },
          { label: 'Taux de réussite', value: 95, suffix: '%' },
          { label: 'Programmes créés', value: 10, suffix: '+' },
        ],
        services: [
          {
            title: 'Coaching personnel',
            description: 'Des séances et plans adaptés à ton niveau, ton rythme et tes objectifs.',
            icon: Dumbbell,
          },
          {
            title: 'Coaching nutrition',
            description: 'Des conseils alimentaires simples et durables pour soutenir tes résultats.',
            icon: Salad,
          },
          {
            title: 'Coaching en ligne',
            description: 'Un suivi à distance avec ajustements, retours et progression structurée.',
            icon: Video,
          },
          {
            title: 'Habitudes & routine',
            description: 'Un accompagnement doux pour installer une meilleure discipline au quotidien.',
            icon: HeartHandshake,
          },
        ],
        highlights: [
          'Des programmes pensés selon ton corps et tes objectifs',
          'Un suivi clair avec de vrais repères de progression',
          'Un coaching qui équilibre esthétique, force et bien-être durable',
        ],
        eyebrow: 'À propos du coach',
        heading: 'Un coaching construit sur le concret, pas sur des promesses vides.',
        intro:
          'L’objectif est simple : t’aider à suivre un système plus intelligent, une routine plus solide et une progression que tu peux réellement garder dans le temps.',
        imageBadge: 'Coaching personnel',
        approachLabel: 'Approche',
        approachValue: 'Structurée, humaine, durable',
        meet: 'Rencontre ton coach',
        bio:
          "Avec plus de 10 ans d’expérience dans le fitness, j’ai aidé des centaines de clients à se sentir plus forts, mieux organisés et plus confiants. Chaque plan est construit pour s’adapter à ta vie, pas pour la compliquer.",
        workTitle: 'Ce que tu peux attendre du coaching',
        workItems: [
          'Une communication simple et un plan réaliste',
          'Des programmes adaptés à ton niveau, ton emploi du temps et tes objectifs',
          'Un accompagnement qui te pousse sans pression inutile',
          'Un vrai focus sur le progrès visible et l’équilibre sur le long terme',
        ],
        servicesEyebrow: 'Services',
        servicesTitle: 'Des offres pensées pour ta vraie façon de t’entraîner.',
        servicesCopy:
          'Du suivi individuel au coaching à distance, chaque offre est conçue pour créer de l’élan sans surcharge.',
        servicesTag: 'Axé résultats',
      }
    : {
        stats: [
          { label: 'Years of Experience', value: 10 },
          { label: 'Clients Trained', value: 10, suffix: '+' },
          { label: 'Success Rate', value: 95, suffix: '%' },
          { label: 'Programs Built', value: 10, suffix: '+' },
        ],
        services: [
          {
            title: 'Personal Training',
            description: 'One-on-one customized workout plans tailored to your goals and fitness level.',
            icon: Dumbbell,
          },
          {
            title: 'Nutrition Coaching',
            description: 'Personalized meal planning and dietary guidance for optimal results.',
            icon: Salad,
          },
          {
            title: 'Online Coaching',
            description: 'Remote training programs with video form checks and progress tracking.',
            icon: Video,
          },
          {
            title: 'Habits & Routine',
            description: 'Simple guidance to help you build better daily structure without feeling overwhelmed.',
            icon: HeartHandshake,
          },
        ],
        highlights: [
          'Evidence-based programming tailored to your body and goals',
          'Clear accountability with measurable progress checkpoints',
          'Coaching that balances aesthetics, strength, and long-term health',
        ],
        eyebrow: 'About the coach',
        heading: 'Coaching built around real performance, not empty motivation.',
        intro:
          'The goal is simple: give clients a smarter training system, sharper daily structure, and the confidence that comes from results they can actually sustain.',
        imageBadge: 'Personal coaching',
        approachLabel: 'Approach',
        approachValue: 'Structured, personal, sustainable',
        meet: 'Meet your coach',
        bio:
          "With over 10 years in the fitness industry, I&apos;ve helped hundreds of clients achieve stronger physiques, healthier routines, and more confidence in and out of the gym. Every plan is built to match your lifestyle, not fight against it.",
        workTitle: "What it's like to work with me",
        workItems: [
          'Straightforward communication and realistic planning',
          'Programs adjusted to your level, schedule, and goals',
          'Support that keeps you consistent without pressure',
          'A focus on visible progress and long-term balance',
        ],
        servicesEyebrow: 'Services',
        servicesTitle: 'Built to match how you train best.',
        servicesCopy:
          'From high-touch personal coaching to remote accountability, every offer is designed to create momentum without overwhelm.',
        servicesTag: 'Results-focused',
      }

  return (
    <section id="about" className="section-shell px-4 py-24 md:px-6 md:py-32">
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

        <div className="mb-20 grid grid-cols-1 items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">
          <ScrollFadeIn direction="left">
            <div className="glass-panel warm-ring relative overflow-hidden rounded-[2rem] p-3">
              <div className="absolute left-6 top-6 z-10 rounded-full bg-black/40 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-stone-100 backdrop-blur-md">
                {t.imageBadge}
              </div>
              <div className="absolute bottom-6 left-6 right-6 z-10 flex items-center justify-between rounded-[1.25rem] border border-white/10 bg-black/40 px-5 py-4 backdrop-blur-md">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-stone-400">{t.approachLabel}</p>
                  <p className="mt-1 text-lg font-semibold text-white">{t.approachValue}</p>
                </div>
                <ArrowUpRight className="h-5 w-5 text-primary" />
              </div>
              <div className="relative h-96 overflow-hidden rounded-[1.4rem] md:h-[560px]">
                <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
                <div className="absolute inset-0 z-10 bg-[radial-gradient(circle_at_top,transparent_35%,rgba(11,13,16,0.2)_100%)]" />
                <Image
                  src="/about.jpg"
                  alt="Fitness Coach"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </ScrollFadeIn>

          <ScrollFadeIn direction="right" className="space-y-8">
            <div className="glass-panel p-8 md:p-10">
              <div className="mb-6 flex items-center gap-3">
                <div className="rounded-full bg-primary/15 p-3">
                  <BadgeCheck className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm uppercase tracking-[0.2em] text-stone-400">{t.meet}</p>
                  <h3 className="text-3xl font-bold text-white md:text-4xl">Almia Ghassen</h3>
                </div>
              </div>

              <p className="section-copy">
                {t.bio}
              </p>

              <div className="mt-8 space-y-4">
                {t.highlights.map((item) => (
                  <div key={item} className="flex items-start gap-4 rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-4">
                    <div className="mt-0.5 rounded-full bg-accent/15 p-2">
                      <BadgeCheck className="h-4 w-4 text-accent" />
                    </div>
                    <p className="text-stone-300">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass-panel p-8">
              <h4 className="mb-4 text-xl font-bold text-white">{t.workTitle}</h4>
              <div className="grid gap-3 sm:grid-cols-2">
                {t.workItems.map((item) => (
                  <div key={item} className="rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-4 text-stone-300">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </ScrollFadeIn>
        </div>

        <ScrollFadeIn>
          <div className="mb-20 grid grid-cols-2 gap-4 md:grid-cols-4">
            {t.stats.map((stat, index) => (
              <div key={index} className="glass-panel p-6 text-center md:p-8">
                <div className="mb-2 text-4xl font-bold text-white md:text-5xl">
                  <CountUp end={stat.value} suffix={stat.suffix || ''} />
                </div>
                <p className="text-sm uppercase tracking-[0.18em] text-stone-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </ScrollFadeIn>

        <div>
          <ScrollFadeIn className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="eyebrow mb-4">
                <span>{t.servicesEyebrow}</span>
              </div>
              <h3 className="text-3xl font-bold text-white md:text-4xl">{t.servicesTitle}</h3>
            </div>
            <p className="max-w-2xl text-stone-400">
              {t.servicesCopy}
            </p>
          </ScrollFadeIn>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
            {t.services.map((service, index) => {
              const Icon = service.icon

              return (
                <ScrollFadeIn key={index} delay={index * 0.1}>
                  <HoverCard className="h-full p-7">
                    <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/12">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <h4 className="mb-3 text-xl font-bold text-white">{service.title}</h4>
                    <p className="mb-6 text-sm leading-7 text-stone-400">{service.description}</p>
                    <div className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">{t.servicesTag}</div>
                  </HoverCard>
                </ScrollFadeIn>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
