import { useState, useEffect, useCallback } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import { ArrowDown, Download, ExternalLink, TrendingUp, BarChart2, Target } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'

const roles = ['Data Analyst', 'BI Developer', 'Data Storyteller', 'Insights Strategist']

function useTypewriter(words: string[], speed = 80, pause = 2000) {
  const [display, setDisplay] = useState('')
  const [wordIdx, setWordIdx] = useState(0)
  const [typing, setTyping] = useState(true)

  useEffect(() => {
    const word = words[wordIdx]
    let timer: ReturnType<typeof setTimeout>

    if (typing) {
      if (display.length < word.length) {
        timer = setTimeout(() => setDisplay(word.slice(0, display.length + 1)), speed)
      } else {
        timer = setTimeout(() => setTyping(false), pause)
      }
    } else {
      if (display.length > 0) {
        timer = setTimeout(() => setDisplay(display.slice(0, -1)), speed / 2)
      } else {
        setWordIdx((i) => (i + 1) % words.length)
        setTyping(true)
      }
    }

    return () => clearTimeout(timer)
  }, [display, typing, wordIdx, words, speed, pause])

  return display
}

const floatingCards = [
  { icon: TrendingUp, label: 'Revenue Impact', value: '↑ 42%', color: '#8B5CF6', x: '72%', y: '12%' },
  { icon: Target, label: 'Model Accuracy', value: '95%', color: '#EC4899', x: '78%', y: '68%' },
  { icon: BarChart2, label: 'Dashboards Built', value: '50+', color: '#FBBF24', x: '2%', y: '70%' },
]

export default function Hero() {
  const { c } = useTheme()
  const role = useTypewriter(roles)

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const springX = useSpring(mouseX, { stiffness: 60, damping: 20 })
  const springY = useSpring(mouseY, { stiffness: 60, damping: 20 })

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    mouseX.set((e.clientX - rect.left - rect.width / 2) * 0.015)
    mouseY.set((e.clientY - rect.top - rect.height / 2) * 0.015)
  }, [mouseX, mouseY])

  const stagger = {
    container: { animate: { transition: { staggerChildren: 0.12 } } },
    item: {
      initial: { opacity: 0, y: 32 },
      animate: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
    },
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ backgroundColor: c.bg1 }}
      onMouseMove={handleMouseMove}
    >
      {/* Animated orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute rounded-full"
          style={{
            width: 700, height: 700,
            background: `radial-gradient(circle, ${c.orbA} 0%, transparent 70%)`,
            top: '-15%', left: '-15%',
          }}
          animate={{ x: [0, 60, 0], y: [0, 40, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute rounded-full"
          style={{
            width: 550, height: 550,
            background: `radial-gradient(circle, ${c.orbB} 0%, transparent 70%)`,
            top: '25%', right: '-10%',
          }}
          animate={{ x: [0, -50, 0], y: [0, -35, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute rounded-full"
          style={{
            width: 400, height: 400,
            background: `radial-gradient(circle, ${c.orbC} 0%, transparent 70%)`,
            bottom: '0%', left: '25%',
          }}
          animate={{ x: [0, 40, 0], y: [0, -25, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      {/* Dot grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(${c.dot} 1px, transparent 1px)`,
          backgroundSize: '36px 36px',
        }}
      />

      {/* Mouse spotlight */}
      <motion.div
        className="absolute pointer-events-none rounded-full"
        style={{
          width: 600, height: 600,
          background: 'radial-gradient(circle, rgba(139,92,246,0.05) 0%, transparent 70%)',
          x: springX,
          y: springY,
          top: '50%',
          left: '50%',
          translateX: '-50%',
          translateY: '-50%',
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-24 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left text */}
          <motion.div variants={stagger.container} initial="initial" animate="animate">
            <motion.div variants={stagger.item}>
              <span
                className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full"
                style={{
                  background: c.sectionPill,
                  border: `1px solid ${c.sectionPillBorder}`,
                  color: '#8B5CF6',
                }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-violet-400 inline-block" style={{ animation: 'pulse 2s infinite' }} />
                Available for opportunities
              </span>
            </motion.div>

            <motion.div variants={stagger.item} className="mt-4">
              <p className="text-base font-medium tracking-wider" style={{ color: c.text3 }}>Hello, I'm</p>
              <h1 className="mt-1 font-black leading-none tracking-tight" style={{ fontSize: 'clamp(3rem, 7vw, 5rem)', color: c.text1 }}>
                Taiwo
                <br />
                <span className="gradient-text">Precious</span>
              </h1>
            </motion.div>

            <motion.div variants={stagger.item} className="mt-4 flex items-center gap-2 h-9">
              <span className="text-xl sm:text-2xl font-light" style={{ color: c.text2 }}>{role}</span>
              <span
                className="inline-block w-0.5 h-6 rounded-full"
                style={{ background: '#8B5CF6', animation: 'pulse 1s infinite' }}
              />
            </motion.div>

            <motion.p
              variants={stagger.item}
              className="mt-6 text-base sm:text-lg leading-relaxed max-w-lg"
              style={{ color: c.text3 }}
            >
              Transforming complex datasets into compelling narratives that drive
              strategic decisions and measurable business impact — one insight at a time.
            </motion.p>

            <motion.div variants={stagger.item} className="mt-8 flex flex-wrap gap-4">
              <motion.a
                href="#projects"
                className="flex items-center gap-2 px-7 py-3.5 rounded-full text-white font-semibold text-sm"
                style={{ background: 'linear-gradient(135deg, #8B5CF6, #EC4899)' }}
                whileHover={{ scale: 1.04, boxShadow: '0 8px 40px rgba(139,92,246,0.4)' }}
                whileTap={{ scale: 0.97 }}
                onClick={(e) => { e.preventDefault(); document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' }) }}
              >
                View My Work <ExternalLink size={15} />
              </motion.a>
              <motion.a
                href="/Taiwo_Precious_CV.pdf"
                download
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-sm"
                style={{ border: `1px solid ${c.border}`, color: c.text2 }}
                whileHover={{ scale: 1.04, borderColor: '#8B5CF6', color: c.text1 }}
                whileTap={{ scale: 0.97 }}
              >
                Download CV <Download size={15} />
              </motion.a>
            </motion.div>

            {/* Stats */}
            <motion.div variants={stagger.item} className="mt-12 flex gap-8">
              {[
                { value: '5+', label: 'Years Exp.' },
                { value: '60+', label: 'Projects' },
                { value: '30+', label: 'Clients' },
              ].map((s) => (
                <div key={s.label}>
                  <div className="text-3xl font-black gradient-text">{s.value}</div>
                  <div className="text-xs mt-0.5 font-medium tracking-wider" style={{ color: c.text4 }}>{s.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: Profile + floating cards */}
          <div className="hidden lg:flex justify-center items-center relative" style={{ minHeight: 480 }}>
            {/* Floating metric cards */}
            {floatingCards.map((card, i) => (
              <motion.div
                key={card.label}
                className="absolute rounded-2xl px-4 py-3 flex items-center gap-3 z-20"
                style={{
                  left: card.x, top: card.y,
                  background: c.card,
                  border: `1px solid ${c.border}`,
                  backdropFilter: 'blur(16px)',
                  WebkitBackdropFilter: 'blur(16px)',
                }}
                initial={{ opacity: 0, scale: 0.7 }}
                animate={{ opacity: 1, scale: 1, y: [0, -8, 0] }}
                transition={{
                  opacity: { duration: 0.5, delay: 1 + i * 0.15 },
                  scale: { duration: 0.5, delay: 1 + i * 0.15 },
                  y: { duration: 4 + i, repeat: Infinity, ease: 'easeInOut', delay: i * 0.8 },
                }}
              >
                <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: `${card.color}20` }}>
                  <card.icon size={18} style={{ color: card.color }} />
                </div>
                <div>
                  <div className="text-lg font-black leading-none" style={{ color: c.text1 }}>{card.value}</div>
                  <div className="text-xs mt-0.5" style={{ color: c.text3 }}>{card.label}</div>
                </div>
              </motion.div>
            ))}

            {/* Profile circle */}
            <motion.div
              className="relative"
              style={{ width: 300, height: 300 }}
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Glow */}
              <div
                className="absolute inset-0 rounded-full"
                style={{
                  background: 'radial-gradient(circle, rgba(139,92,246,0.25) 0%, transparent 70%)',
                  transform: 'scale(1.3)',
                }}
              />

              {/* Spinning gradient ring */}
              <motion.div
                className="absolute inset-0 rounded-full"
                style={{
                  padding: 3,
                  background: 'conic-gradient(from 0deg, #8B5CF6, #EC4899, #FBBF24, #8B5CF6)',
                }}
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
              >
                <div className="w-full h-full rounded-full" style={{ backgroundColor: c.bg1 }} />
              </motion.div>

              {/* Photo */}
              <div
                className="absolute rounded-full overflow-hidden"
                style={{ inset: 10 }}
              >
                <img
                  src="/profile.jpg"
                  alt="Taiwo Precious"
                  className="w-full h-full"
                  style={{ objectFit: 'cover', objectPosition: '50% 15%' }}
                />
              </div>

              {/* Orbiting dot */}
              <motion.div
                className="absolute w-5 h-5 rounded-full"
                style={{
                  background: 'linear-gradient(135deg, #8B5CF6, #EC4899)',
                  top: '50%',
                  left: '50%',
                  marginTop: -152,
                  marginLeft: -10,
                  transformOrigin: '10px 152px',
                  boxShadow: '0 0 15px rgba(139,92,246,0.8)',
                }}
                animate={{ rotate: 360 }}
                transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
              />
            </motion.div>

            {/* Scatter dots */}
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute rounded-full"
                style={{
                  width: 6 + (i % 3) * 4,
                  height: 6 + (i % 3) * 4,
                  background: i % 2 === 0 ? '#8B5CF6' : '#EC4899',
                  opacity: 0.35,
                  left: `${10 + i * 14}%`,
                  top: `${15 + (i % 3) * 25}%`,
                }}
                animate={{ scale: [1, 1.5, 1], opacity: [0.35, 0.6, 0.35] }}
                transition={{ duration: 2 + i * 0.5, repeat: Infinity, ease: 'easeInOut' }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      >
        <span className="text-xs tracking-widest uppercase" style={{ color: c.text4 }}>Scroll</span>
        <ArrowDown size={18} style={{ color: '#8B5CF6' }} />
      </motion.div>
    </section>
  )
}
