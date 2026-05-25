'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

interface ImageTransitionProps {
  beforeImage: string
  afterImage: string
  beforeLabel?: string
  afterLabel?: string
  className?: string
}

export default function ImageTransition({
  beforeImage,
  afterImage,
  beforeLabel = 'Before',
  afterLabel = 'After',
  className = '',
}: ImageTransitionProps) {
  const [isAfter, setIsAfter] = useState(false)

  return (
    <div className={`relative cursor-pointer overflow-hidden rounded-lg ${className}`}>
      <AnimatePresence mode="wait">
        {isAfter ? (
          <motion.div
            key="after"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.4 }}
            onClick={() => setIsAfter(false)}
            className="relative w-full h-full"
          >
            <Image
              src={afterImage}
              alt={afterLabel}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            <div className="absolute top-3 right-3 bg-primary text-white px-3 py-1 rounded-full text-sm font-semibold">
              {afterLabel}
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="before"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.4 }}
            onClick={() => setIsAfter(true)}
            className="relative w-full h-full"
          >
            <Image
              src={beforeImage}
              alt={beforeLabel}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            <div className="absolute top-3 right-3 bg-muted text-white px-3 py-1 rounded-full text-sm font-semibold">
              {beforeLabel}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
