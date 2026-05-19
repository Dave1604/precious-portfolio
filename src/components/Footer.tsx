import { motion } from 'framer-motion'
import { Linkedin, Github, Twitter, Mail, Heart } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'

const socials = [
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Github, href: '#', label: 'GitHub' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Mail, href: 'mailto:taiwo.precious@email.com', label: 'Email' },
]

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

export default function Footer() {
  const { c } = useTheme()

  return (
    <footer className="relative py-16 overflow-hidden" style={{ backgroundColor: c.bg2 }}>
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(139,92,246,0.3), transparent)' }} />
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-48 rounded-full pointer-events-none"
        style={{ background: `radial-gradient(ellipse, ${c.orbA} 0%, transparent 70%)` }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex flex-col items-center gap-8 mb-10">
          <motion.div className="flex items-center gap-3" whileHover={{ scale: 1.02 }}>
            <div
              className="w-12 h-12 rounded-2xl flex items-center justify-center text-white font-black text-base"
              style={{ background: 'linear-gradient(135deg, #8B5CF6, #EC4899)', boxShadow: '0 0 30px rgba(139,92,246,0.25)' }}
            >
              TP
            </div>
            <div>
              <div className="font-black text-xl leading-none" style={{ color: c.text1 }}>Taiwo Precious</div>
              <div className="text-xs mt-0.5 font-medium" style={{ color: c.text4 }}>Data Analyst & Insights Strategist</div>
            </div>
          </motion.div>

          <nav className="flex flex-wrap justify-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium transition-colors hover:text-violet-500"
                style={{ color: c.text4 }}
                onClick={(e) => { e.preventDefault(); document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' }) }}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex gap-3">
            {socials.map((s) => (
              <motion.a
                key={s.label}
                href={s.href}
                className="w-10 h-10 rounded-xl flex items-center justify-center transition-colors"
                style={{ background: c.card, border: `1px solid ${c.border}`, color: c.text4 }}
                whileHover={{ scale: 1.1, y: -2, borderColor: 'rgba(139,92,246,0.4)', color: '#8B5CF6' }}
                title={s.label}
              >
                <s.icon size={16} />
              </motion.a>
            ))}
          </div>
        </div>

        <div className="h-px mb-8" style={{ background: c.divider }} />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs" style={{ color: c.text4 }}>
          <span>© {new Date().getFullYear()} Taiwo Precious. All rights reserved.</span>
          <span className="flex items-center gap-1.5">
            Built with <Heart size={12} className="text-pink-500" fill="currentColor" /> and{' '}
            <span className="font-semibold gradient-text">lots of data</span>
          </span>
        </div>
      </div>
    </footer>
  )
}
