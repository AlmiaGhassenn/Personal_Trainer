'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface HoverCardProps {
  children: ReactNode
  className?: string
}

export default function HoverCard({ children, className = '' }: HoverCardProps) {
  return (
    <motion.div
      whileHover={{
        y: -10,
        scale: 1.01,
        boxShadow: '0 24px 60px rgba(0, 0, 0, 0.38)',
      }}
      transition={{ duration: 0.3 }}
      className={`glass-panel ${className}`}
    >
      {children}
    </motion.div>
  )
}
