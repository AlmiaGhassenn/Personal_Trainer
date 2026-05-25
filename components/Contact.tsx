'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Clock3, Mail, MapPin, Phone, ShieldCheck } from 'lucide-react'
import ScrollFadeIn from './ScrollFadeIn'
import { useLanguage } from './LanguageProvider'

export default function Contact() {
  const { language } = useLanguage()
  const t = language === 'fr'
    ? {
        contactMethods: [
          { icon: Mail, label: 'Email', value: 'ghassenalmia.business@gmail.com', href: 'mailto:ghassenalmia.business@gmail.com' },
          { icon: Phone, label: 'Téléphone', value: '53 519 301', href: 'tel:+15551234567' },
          { icon: MapPin, label: 'Localisation', value: 'Bizerte, Tunisie', href: '#' },
          { icon: Clock3, label: 'Disponibilité', value: 'Tous les jours', href: '#' },
        ],
        eyebrow: 'Contact',
        heading: 'Prêt(e) à t’entraîner avec plus de clarté et d’élan ?',
        intro:
          'Réserve ta première consultation gratuite et construisons ensemble une stratégie simple, réaliste et efficace.',
        success: 'Merci pour ton message ! Je te répondrai dans les 24 heures.',
        labels: {
          name: 'Nom complet',
          email: 'Email',
          phone: 'Téléphone',
          service: 'Service souhaité',
          message: 'Message',
        },
        placeholders: {
          name: 'Ton nom',
          email: 'ton@email.com',
          phone: '(555) 123-4567',
          message: 'Parle-moi de tes objectifs...',
        },
        options: [
          { value: 'personal-training', label: 'Coaching personnel' },
          { value: 'nutrition-coaching', label: 'Coaching nutrition' },
          { value: 'online-coaching', label: 'Coaching en ligne' },
        ],
        submit: 'Réserver une consultation',
        connectTitle: 'Restons en contact',
        connectText:
          'Que tu débutes ou que tu veuilles passer un cap, je suis là pour t’aider à avancer avec un plan qui te correspond.',
        why: 'Pourquoi travailler avec moi ?',
        whyItems: [
          'Une première consultation gratuite pour parler de tes objectifs',
          'Des programmes adaptés à ton niveau et à ton rythme',
          'Des horaires flexibles selon ton quotidien',
          'Un suivi continu et de vrais ajustements',
          'Des résultats visibles avec une méthode durable',
        ],
        offerLabel: 'Offre spéciale',
        offerText: 'Réserve tes 3 premières séances ce mois-ci et profite de ',
        offerAccent: '20% de réduction',
        offerEnd: ' sur ton pack coaching.',
      }
    : {
        contactMethods: [
          { icon: Mail, label: 'Email', value: 'ghassenalmia.business@gmail.com', href: 'mailto:ghassenalmia.business@gmail.com' },
          { icon: Phone, label: 'Phone', value: '53 519 301', href: 'tel:+15551234567' },
          { icon: MapPin, label: 'Location', value: 'Bizerte, Tunisia', href: '#' },
          { icon: Clock3, label: 'Availability', value: 'Daily', href: '#' },
        ],
        eyebrow: 'Contact',
        heading: 'Ready to train with more clarity and momentum?',
        intro:
          "Book your free initial consultation and let's map out the training, nutrition, and accountability strategy that fits your life.",
        success: "Thanks for reaching out! I'll get back to you within 24 hours.",
        labels: {
          name: 'Full Name',
          email: 'Email',
          phone: 'Phone Number',
          service: 'Interested Service',
          message: 'Message',
        },
        placeholders: {
          name: 'Your name',
          email: 'your@email.com',
          phone: '(555) 123-4567',
          message: 'Tell me about your fitness goals...',
        },
        options: [
          { value: 'personal-training', label: 'Personal Training' },
          { value: 'nutrition-coaching', label: 'Nutrition Coaching' },
          { value: 'online-coaching', label: 'Online Coaching' },
        ],
        submit: 'Book Free Consultation',
        connectTitle: "Let's Connect",
        connectText:
          "Whether you're just starting your fitness journey or looking to take your training to the next level, I'm here to help you achieve your goals.",
        why: 'Why Book With Me?',
        whyItems: [
          'Free initial consultation to discuss your goals',
          'Customized training programs based on your needs',
          'Flexible scheduling to fit your lifestyle',
          'Continuous support and progress tracking',
          'Proven results with 10+ satisfied clients',
        ],
        offerLabel: 'Special offer',
        offerText: 'Book your first 3 sessions this month and get ',
        offerAccent: '20% off',
        offerEnd: ' your coaching package.',
      }
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'personal-training',
    message: '',
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setTimeout(() => {
      setSubmitted(true)
      setFormData({ name: '', email: '', phone: '', service: 'personal-training', message: '' })
      setTimeout(() => setSubmitted(false), 5000)
    }, 500)
  }

  return (
    <section id="contact" className="section-shell px-4 py-24 md:px-6 md:py-32">
      <div className="mx-auto max-w-6xl">
        <ScrollFadeIn className="mb-16 max-w-3xl">
          <div className="eyebrow mb-5">
            <span>{t.eyebrow}</span>
          </div>
          <h2 className="section-heading mb-5">{t.heading}</h2>
          <p className="section-copy">
            {t.intro}
          </p>
        </ScrollFadeIn>

        <div className="mb-16 grid grid-cols-2 gap-4 md:grid-cols-4">
          {t.contactMethods.map((method, index) => (
            <ScrollFadeIn key={index} delay={index * 0.1}>
              <a
                href={method.href}
                className="glass-panel group block p-6 text-center transition-colors hover:border-primary/40"
              >
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/12">
                  <method.icon className="h-6 w-6 text-primary transition-colors group-hover:text-accent" />
                </div>
                <h4 className="mb-2 text-sm font-semibold uppercase tracking-[0.16em] text-stone-300">{method.label}</h4>
                <p className="text-sm font-semibold text-white">{method.value}</p>
              </a>
            </ScrollFadeIn>
          ))}
        </div>

        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <ScrollFadeIn direction="left">
            <div className="glass-panel p-8 md:p-10">
              {submitted && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 rounded-2xl border border-accent/30 bg-accent/10 p-4"
                >
                  <p className="font-semibold text-accent">
                    {t.success}
                  </p>
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="mb-2 block text-sm font-semibold uppercase tracking-[0.14em] text-stone-300">{t.labels.name}</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-white placeholder-stone-500 outline-none transition-colors focus:border-primary"
                    placeholder={t.placeholders.name}
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold uppercase tracking-[0.14em] text-stone-300">{t.labels.email}</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-white placeholder-stone-500 outline-none transition-colors focus:border-primary"
                    placeholder={t.placeholders.email}
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold uppercase tracking-[0.14em] text-stone-300">{t.labels.phone}</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-white placeholder-stone-500 outline-none transition-colors focus:border-primary"
                    placeholder={t.placeholders.phone}
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold uppercase tracking-[0.14em] text-stone-300">{t.labels.service}</label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full appearance-none rounded-2xl border border-white/10 bg-secondary px-4 py-3 text-white outline-none transition-colors focus:border-primary"
                  >
                    {t.options.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold uppercase tracking-[0.14em] text-stone-300">{t.labels.message}</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full resize-none rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-white placeholder-stone-500 outline-none transition-colors focus:border-primary"
                    placeholder={t.placeholders.message}
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full rounded-full bg-primary px-6 py-4 font-bold text-black transition-colors hover:bg-[#ff824c]"
                >
                  {t.submit}
                </motion.button>
              </form>
            </div>
          </ScrollFadeIn>

          <ScrollFadeIn direction="right" className="space-y-8">
            <div className="glass-panel p-8 md:p-10">
              <h3 className="mb-4 text-3xl font-bold text-white">{t.connectTitle}</h3>
              <p className="text-lg leading-relaxed text-stone-300">
                {t.connectText}
              </p>

              <div className="mt-8 space-y-4">
                <h4 className="text-xl font-bold text-white">{t.why}</h4>
                <div className="space-y-3 text-stone-300">
                  {t.whyItems.map((item) => (
                    <div key={item} className="flex items-start gap-3 rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-4">
                      <div className="mt-0.5 rounded-full bg-accent/12 p-2">
                        <ShieldCheck className="h-4 w-4 text-accent" />
                      </div>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="glass-panel p-8">
              <p className="mb-2 text-sm uppercase tracking-[0.18em] text-primary">{t.offerLabel}</p>
              <p className="text-lg leading-8 text-white">
                {t.offerText}<span className="font-bold text-accent">{t.offerAccent}</span>{t.offerEnd}
              </p>
            </div>
          </ScrollFadeIn>
        </div>
      </div>
    </section>
  )
}
