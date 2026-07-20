import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Sun, Moon } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'

const links = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const { c, isDark, toggle } = useTheme()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [active, setActive] = useState('Home')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNav = (label: string, href: string) => {
    setActive(label)
    setMobileOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          background: scrolled ? c.navBg : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled ? `1px solid ${c.navBorder}` : 'none',
        }}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <motion.button
              onClick={() => handleNav('Home', '#home')}
              className="flex items-center gap-2 group"
              whileHover={{ scale: 1.02 }}
            >
              <div
                className="w-9 h-9 rounded-xl flex items-center justify-center text-white font-black text-sm"
                style={{ background: 'linear-gradient(135deg, #8B5CF6, #7C3AED)' }}
              >
                TP
              </div>
              <span className="hidden sm:block font-bold transition-colors" style={{ color: c.text1 }}>
                Taiwo Precious
              </span>
            </motion.button>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-1">
              {links.map((link) => (
                <motion.button
                  key={link.label}
                  onClick={() => handleNav(link.label, link.href)}
                  className="relative px-4 py-2 text-sm font-medium transition-colors"
                  style={{ color: active === link.label ? '#8B5CF6' : c.text3 }}
                  whileHover={{ y: -1 }}
                >
                  {active === link.label && (
                    <motion.span
                      layoutId="nav-indicator"
                      className="absolute inset-0 rounded-full"
                      style={{ background: 'rgba(139,92,246,0.1)' }}
                      transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{link.label}</span>
                </motion.button>
              ))}
            </div>

            <div className="flex items-center gap-2">
              <motion.button
                onClick={toggle}
                aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
                className="w-10 h-10 rounded-full flex items-center justify-center"
                style={{ background: c.card, border: `1px solid ${c.border}`, color: c.text2 }}
                whileHover={{ scale: 1.08, color: '#8B5CF6', borderColor: 'rgba(139,92,246,0.5)' }}
                whileTap={{ scale: 0.92 }}
              >
                {isDark ? <Sun size={18} /> : <Moon size={18} />}
              </motion.button>

              <motion.a
                href="mailto:precioustaiwo852@gmail.com"
                className="hidden md:flex items-center gap-2 px-5 py-2 rounded-full text-sm font-semibold text-white"
                style={{ background: 'linear-gradient(135deg, #8B5CF6, #7C3AED)' }}
                whileHover={{ scale: 1.04, boxShadow: '0 0 30px rgba(139,92,246,0.4)' }}
                whileTap={{ scale: 0.97 }}
              >
                Hire Me
              </motion.a>

              <button
                className="md:hidden p-2 transition-colors"
                style={{ color: c.text3 }}
                onClick={() => setMobileOpen(!mobileOpen)}
              >
                {mobileOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-40 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={() => setMobileOpen(false)} />
            <motion.div
              className="absolute top-16 left-4 right-4 rounded-2xl p-6"
              style={{ background: c.card, border: `1px solid ${c.border}`, backdropFilter: 'blur(20px)' }}
              initial={{ opacity: 0, y: -20, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.96 }}
              transition={{ duration: 0.2 }}
            >
              <div className="flex flex-col gap-1">
                {links.map((link, i) => (
                  <motion.button
                    key={link.label}
                    onClick={() => handleNav(link.label, link.href)}
                    className="text-left px-4 py-3 rounded-xl font-medium transition-all"
                    style={{ color: c.text2 }}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    whileHover={{ background: 'rgba(139,92,246,0.08)', color: c.text1 }}
                  >
                    {link.label}
                  </motion.button>
                ))}
                <div className="mt-3 pt-3" style={{ borderTop: `1px solid ${c.divider}` }}>
                  <a
                    href="mailto:precioustaiwo852@gmail.com"
                    className="flex justify-center py-3 rounded-xl font-semibold text-white"
                    style={{ background: 'linear-gradient(135deg, #8B5CF6, #7C3AED)' }}
                    onClick={() => setMobileOpen(false)}
                  >
                    Hire Me
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
