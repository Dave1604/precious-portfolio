import { motion } from 'framer-motion'
import { Database, BarChart3, HeartPulse } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
})

const stats = [
  { value: '6', label: 'Analytics Projects' },
  { value: '5', label: 'Core BI Tools' },
  { value: 'B.Sc', label: 'Public Health' },
  { value: 'CAPM', label: 'PMI Certified' },
]

const approaches = [
  {
    icon: Database,
    title: 'Clean, Reliable Data',
    desc: 'I get datasets decision-ready — writing SQL with joins, CTEs and window functions to clean, shape and model raw data before a single chart is drawn.',
    color: '#8B5CF6',
  },
  {
    icon: BarChart3,
    title: 'Dashboards That Explain',
    desc: 'I build interactive Power BI and Tableau dashboards with DAX measures and clear KPIs, so the story in the data is obvious at a glance.',
    color: '#7C3AED',
  },
  {
    icon: HeartPulse,
    title: 'Grounded in Real Outcomes',
    desc: 'A public health background keeps my work focused on real-world impact — from disease surveillance to workforce and retail decisions.',
    color: '#A78BFA',
  },
]

export default function About() {
  const { c } = useTheme()

  return (
    <section id="about" className="relative py-28 overflow-hidden" style={{ backgroundColor: c.bg1 }}>
      <div
        className="absolute top-0 right-0 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: `radial-gradient(circle, ${c.orbB} 0%, transparent 70%)` }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div className="text-center mb-16" {...fadeUp()}>
          <span
            className="inline-block text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full mb-4"
            style={{ background: c.sectionPill, border: `1px solid ${c.sectionPillBorder}`, color: '#8B5CF6' }}
          >
            About Me
          </span>
          <h2 className="section-title" style={{ color: c.text1 }}>
            Passion meets <span className="gradient-text">precision</span>
          </h2>
        </motion.div>

        {/* Main content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Profile visual */}
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative">
              <div
                className="absolute inset-0 rounded-3xl"
                style={{
                  background: `radial-gradient(ellipse, ${c.orbA} 0%, transparent 70%)`,
                  transform: 'scale(1.2)',
                }}
              />

              {/* Profile card */}
              <div
                className="relative rounded-3xl overflow-hidden"
                style={{ width: 340, height: 420, background: c.card, border: `1px solid ${c.border}`, backdropFilter: 'blur(16px)' }}
              >
                <div className="h-2 w-full" style={{ background: 'linear-gradient(90deg, #8B5CF6, #7C3AED, #A78BFA)' }} />

                <div className="flex flex-col items-center justify-center pt-8 pb-6">
                  {/* Photo */}
                  <div
                    className="w-36 h-36 rounded-full overflow-hidden relative"
                    style={{
                      border: '3px solid rgba(139,92,246,0.4)',
                      boxShadow: '0 0 40px rgba(139,92,246,0.25)',
                    }}
                  >
                    <img
                      src="/profile.jpg"
                      alt="Taiwo Precious"
                      className="w-full h-full"
                      style={{ objectFit: 'cover', objectPosition: '50% 15%' }}
                    />
                    <div
                      className="absolute bottom-2 right-2 w-4 h-4 rounded-full border-2"
                      style={{ background: '#10B981', borderColor: c.bg2 }}
                    />
                  </div>

                  <h3 className="mt-5 text-2xl font-black" style={{ color: c.text1 }}>Taiwo Precious</h3>
                  <p className="text-sm mt-1 font-medium" style={{ color: c.text3 }}>Data Analyst & BI Developer</p>

                  <div className="flex gap-2 mt-4 flex-wrap justify-center px-4">
                    {['SQL', 'Power BI', 'Tableau', 'Excel'].map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2.5 py-1 rounded-full font-medium"
                        style={{ background: c.sectionPill, color: '#8B5CF6', border: `1px solid ${c.sectionPillBorder}` }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-px mx-6 mb-8 rounded-2xl overflow-hidden" style={{ background: c.border }}>
                  {[{ v: '6', l: 'Projects' }, { v: '5', l: 'BI Tools' }].map((s) => (
                    <div key={s.l} className="text-center py-4" style={{ background: c.bg1 }}>
                      <div className="text-2xl font-black gradient-text">{s.v}</div>
                      <div className="text-xs font-medium mt-0.5" style={{ color: c.text3 }}>{s.l}</div>
                    </div>
                  ))}
                </div>
              </div>

              <motion.div
                className="absolute -top-4 -right-4 w-20 h-20 rounded-full"
                style={{ background: c.sectionPill, border: `1px solid ${c.sectionPillBorder}` }}
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 4, repeat: Infinity }}
              />
              <motion.div
                className="absolute -bottom-4 -left-4 w-14 h-14 rounded-full"
                style={{ background: 'rgba(139,92,246,0.08)', border: '1px solid rgba(139,92,246,0.15)' }}
                animate={{ scale: [1, 1.15, 1] }}
                transition={{ duration: 5, repeat: Infinity }}
              />
            </div>
          </motion.div>

          {/* Bio text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <h3 className="text-2xl font-bold mb-5" style={{ color: c.text1 }}>
              Turning numbers into narratives{' '}
              <span className="gradient-text">that matter</span>
            </h3>
            <div className="space-y-4 text-base leading-relaxed" style={{ color: c.text3 }}>
              <p>
                I'm Taiwo Precious — a data analyst with a public health foundation, turning raw
                employee, retail, customer, and healthcare data into dashboards and insights that
                support real decisions.
              </p>
              <p>
                I work across the full analytics lifecycle: gathering requirements, cleaning and
                modeling data with SQL and Power Query, building interactive Power BI and Tableau
                dashboards, and presenting findings clearly to non-technical stakeholders.
              </p>
              <p>
                My background in public health drew me toward disease-surveillance and healthcare
                analytics — and I share what I know by tutoring aspiring analysts through data
                cleaning, SQL, and dashboard design.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-8">
              {stats.map((s) => (
                <motion.div
                  key={s.label}
                  className="rounded-2xl p-4"
                  style={{ background: c.card, border: `1px solid ${c.border}` }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="text-2xl font-black gradient-text">{s.value}</div>
                  <div className="text-xs font-medium mt-0.5" style={{ color: c.text3 }}>{s.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Approach cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {approaches.map((a, i) => (
            <motion.div
              key={a.title}
              className="rounded-2xl p-7 group"
              style={{ background: c.card, border: `1px solid ${c.border}` }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -6, boxShadow: `0 20px 60px ${a.color}18` }}
            >
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5" style={{ background: `${a.color}18` }}>
                <a.icon size={22} style={{ color: a.color }} />
              </div>
              <h4 className="font-bold text-lg mb-3" style={{ color: c.text1 }}>{a.title}</h4>
              <p className="text-sm leading-relaxed" style={{ color: c.text3 }}>{a.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
