import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronLeft, ChevronRight, Layers, Maximize2 } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'

const VIOLET = '#8B5CF6'

type Project = {
  id: number
  title: string
  category: string
  images: string[]
  desc: string
  approach: string[]
  tags: string[]
  impact: string
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Global Malaria Burden & Trend Analysis',
    category: 'Dashboard',
    images: ['/projects/malaria-1.jpg', '/projects/malaria-2.jpg'],
    desc: 'An 18-year (2000–2017) surveillance report on global malaria cases, deaths, and regional patterns — built to support evidence-based public health intervention priorities.',
    approach: [
      'Consolidated 18 years of WHO malaria surveillance data, using SQL joins, CTEs and aggregations to clean and shape reported cases and deaths.',
      'Modeled the data in Power BI with region- and country-level breakdowns plus a case-fatality-rate measure.',
      'Identified the Democratic Republic of the Congo as the heaviest-burden country and Africa as the dominant WHO region.',
      'Added a second view analysing the cases-to-deaths relationship and a country-by-year burden ranking to guide intervention priorities.',
    ],
    tags: ['SQL', 'Power BI', 'Public Health'],
    impact: '666.44M cases · 0.32 fatality rate',
  },
  {
    id: 2,
    title: 'BlinkIT Grocery Sales Analysis',
    category: 'Analytics',
    images: ['/projects/blinkit.jpg'],
    desc: 'A retail performance dashboard analysing sales, revenue growth, product mix, and outlet efficiency across 8.5K items for a grocery delivery business.',
    approach: [
      'Wrote SQL queries with CTEs, CASE statements and aggregations to clean and shape raw transactional sales data.',
      'Built a Power BI dashboard tracking total sales, average sales, item count and customer ratings.',
      'Broke performance down by outlet type, size and location to surface top- and under-performing outlets.',
      'Found regular fat-content items and Tier-3 supermarket outlets driving the strongest returns.',
    ],
    tags: ['SQL', 'Power BI', 'Retail Analytics'],
    impact: '$1.20M sales · 3.97★ avg rating',
  },
  {
    id: 3,
    title: 'HR Attrition Deep-Dive',
    category: 'Dashboard',
    images: ['/projects/hr-attrition.png'],
    desc: 'A focused Power BI dashboard breaking down employee attrition across 606 records to help HR pinpoint where and why people leave.',
    approach: [
      'Analysed 606 employee records in Power BI to quantify attrition drivers across the organisation.',
      'Built DAX measures for attrition rate, headcount and department-level risk.',
      'Pinpointed R&D as the highest-risk department at 66% of total attrition.',
      'Flagged the 26–35 age group as the most affected, against an overall 14.69% attrition rate.',
    ],
    tags: ['Power BI', 'DAX', 'HR Analytics'],
    impact: '14.69% attrition rate',
  },
  {
    id: 4,
    title: 'Workforce Analytics & Job Satisfaction',
    category: 'Dashboard',
    images: ['/projects/hr-job-satisfaction.jpg'],
    desc: 'An interactive workforce dashboard over 1,470 employees, covering attrition, job satisfaction and performance to support data-driven HR decisions.',
    approach: [
      'Designed an interactive Power BI dashboard over 1,470 employee records.',
      'Segmented attrition and job satisfaction by department, age group, education and marital status.',
      'Used DAX measures and KPI visuals to make patterns readable for non-technical stakeholders.',
      'Supported HR decisions on retention and workforce planning.',
    ],
    tags: ['Power BI', 'DAX', 'HR Analytics'],
    impact: '1,470 employees analysed',
  },
  {
    id: 5,
    title: 'Pizza Sales Annual Performance',
    category: 'Analytics',
    images: ['/projects/pizza-sales.jpg'],
    desc: 'A full-year Tableau breakdown of a pizza restaurant\'s sales — $817K in revenue across 21,350 orders — surfacing trends, timing and category mix.',
    approach: [
      'Analysed a full year of restaurant sales in Tableau — $817K revenue across 21,350 orders.',
      'Built calculated fields for daily and monthly order trends and category mix.',
      'Identified Classic-style pizzas as the top category at 26.9% of total sales.',
      'Surfaced peak ordering days and hours to inform staffing and inventory.',
    ],
    tags: ['Tableau', 'Sales Analytics', 'Trend Analysis'],
    impact: '$817K across 21,350 orders',
  },
  {
    id: 6,
    title: 'Superstore Sales Dashboard',
    category: 'Analytics',
    images: ['/projects/superstore-sales.jpg'],
    desc: 'An interactive Excel dashboard consolidating $2.3M in sales across 4 regions and 3 product categories, with dynamic filters for quick exploration.',
    approach: [
      'Consolidated $2.3M in sales across 4 regions and 3 product categories in Excel.',
      'Used Power Query to clean and shape the source data and Pivot Tables to model it.',
      'Added dynamic region and category slicers for interactive exploration.',
      'Highlighted the West region as the top performer at $725K in sales.',
    ],
    tags: ['Excel', 'Power Query', 'Data Visualization'],
    impact: '$2.3M sales analysed',
  },
]

export default function Projects() {
  const { c } = useTheme()
  const [active, setActive] = useState<Project | null>(null)
  const [slide, setSlide] = useState(0)

  const openModal = (project: Project) => {
    setActive(project)
    setSlide(0)
  }
  const close = useCallback(() => setActive(null), [])

  const next = useCallback(() => {
    if (!active) return
    setSlide((s) => (s + 1) % active.images.length)
  }, [active])

  const prev = useCallback(() => {
    if (!active) return
    setSlide((s) => (s - 1 + active.images.length) % active.images.length)
  }, [active])

  // Keyboard navigation + scroll lock while the lightbox is open
  useEffect(() => {
    if (!active) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close()
      if (e.key === 'ArrowRight') next()
      if (e.key === 'ArrowLeft') prev()
    }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [active, close, next, prev])

  return (
    <section id="projects" className="py-28 relative overflow-hidden" style={{ backgroundColor: c.bg1 }}>
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(${c.dot} 1px, transparent 1px)`,
          backgroundSize: '36px 36px',
          opacity: 0.6,
        }}
      />
      <div
        className="absolute top-1/2 right-0 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: `radial-gradient(circle, ${c.orbC} 0%, transparent 70%)` }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span
            className="inline-block text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full mb-4"
            style={{ background: c.sectionPill, border: `1px solid ${c.sectionPillBorder}`, color: c.accent }}
          >
            Featured Work
          </span>
          <h2 className="section-title" style={{ color: c.text1 }}>
            Projects that <span className="gradient-text">delivered impact</span>
          </h2>
          <p className="mt-4 max-w-xl mx-auto mb-4" style={{ color: c.text3 }}>
            Real datasets, cleaned and modeled from source to decision-ready dashboard. Open any card to scroll the full report.
          </p>
        </motion.div>

        {/* Project grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {projects.map((project, i) => (
              <motion.div
                key={project.id}
                layout
                onClick={() => openModal(project)}
                className="rounded-2xl overflow-hidden group cursor-pointer flex flex-col"
                style={{ background: c.card, border: `1px solid ${c.border}` }}
                initial={{ opacity: 0, scale: 0.94, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.94 }}
                transition={{ duration: 0.45, delay: i * 0.07 }}
                whileHover={{ y: -6, boxShadow: '0 24px 60px rgba(139,92,246,0.14)', borderColor: 'rgba(139,92,246,0.35)' }}
              >
                {/* Card banner — real dashboard screenshot */}
                <div className="h-44 relative overflow-hidden">
                  <img
                    src={project.images[0]}
                    alt={project.title}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, transparent 40%, rgba(10,10,22,0.72) 100%)' }} />

                  {/* Hover overlay prompting the lightbox */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ background: 'rgba(14,16,32,0.4)' }}>
                    <span className="flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold backdrop-blur-md" style={{ background: 'rgba(139,92,246,0.9)', color: '#fff' }}>
                      <Maximize2 size={13} /> View Dashboard
                    </span>
                  </div>

                  {/* Multi-slide badge */}
                  {project.images.length > 1 && (
                    <div className="absolute top-3 right-3 flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold text-white backdrop-blur-sm" style={{ background: 'rgba(14,16,32,0.6)', border: '1px solid rgba(139,92,246,0.4)' }}>
                      <Layers size={12} /> {project.images.length}
                    </div>
                  )}

                  <div
                    className="absolute bottom-3 left-3 px-3 py-1 rounded-full text-xs font-bold backdrop-blur-sm"
                    style={{ background: 'rgba(139,92,246,0.16)', border: '1px solid rgba(139,92,246,0.4)', color: '#fff' }}
                  >
                    {project.impact}
                  </div>
                </div>

                {/* Card body */}
                <div className="p-6 flex flex-col flex-1">
                  <span className="text-xs font-semibold tracking-wider uppercase" style={{ color: c.accent }}>{project.category}</span>
                  <h3 className="font-bold text-lg mt-0.5 leading-tight" style={{ color: c.text1 }}>{project.title}</h3>

                  <p className="text-sm leading-relaxed mt-3 mb-5" style={{ color: c.text3 }}>{project.desc}</p>

                  <div className="flex flex-wrap gap-2 mb-5 mt-auto">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2.5 py-1 rounded-full font-medium"
                        style={{ background: c.tagBg, color: c.tagText, border: `1px solid ${c.tagBorder}` }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-1.5 text-xs font-semibold pt-4" style={{ borderTop: `1px solid ${c.divider}`, color: c.accent }}>
                    <Maximize2 size={13} /> View case study
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox / scrollable case-study popup */}
      <AnimatePresence>
        {active && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8 overflow-y-auto"
            style={{ background: 'rgba(6,6,16,0.85)', backdropFilter: 'blur(8px)' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
          >
            <motion.div
              className="relative w-full max-w-5xl rounded-2xl overflow-hidden my-auto"
              style={{ background: c.bg2, border: `1px solid rgba(139,92,246,0.28)`, boxShadow: '0 40px 120px rgba(0,0,0,0.5)' }}
              initial={{ scale: 0.92, y: 24, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.94, y: 20, opacity: 0 }}
              transition={{ type: 'spring', damping: 26, stiffness: 260 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex items-start justify-between gap-4 px-5 sm:px-6 py-4" style={{ borderBottom: `1px solid ${c.divider}` }}>
                <div>
                  <span className="text-xs font-semibold tracking-wider uppercase" style={{ color: c.accent }}>{active.category}</span>
                  <h3 className="font-bold text-base sm:text-lg leading-tight" style={{ color: c.text1 }}>{active.title}</h3>
                </div>
                <button
                  onClick={close}
                  aria-label="Close"
                  className="shrink-0 w-9 h-9 rounded-full flex items-center justify-center transition-colors"
                  style={{ background: c.card, border: `1px solid ${c.border}`, color: c.text2 }}
                >
                  <X size={18} />
                </button>
              </div>

              {/* Image stage */}
              <div className="relative flex items-center justify-center" style={{ background: '#EDE9FF' }}>
                <div className="w-full" style={{ maxHeight: '58vh' }}>
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={slide}
                      src={active.images[slide]}
                      alt={`${active.title} — slide ${slide + 1}`}
                      className="w-full h-full object-contain mx-auto"
                      style={{ maxHeight: '58vh' }}
                      initial={{ opacity: 0, x: 40 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -40 }}
                      transition={{ duration: 0.28 }}
                    />
                  </AnimatePresence>
                </div>

                {active.images.length > 1 && (
                  <>
                    <button
                      onClick={prev}
                      aria-label="Previous"
                      className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center backdrop-blur-md transition-transform hover:scale-110"
                      style={{ background: 'rgba(139,92,246,0.85)', color: '#fff' }}
                    >
                      <ChevronLeft size={22} />
                    </button>
                    <button
                      onClick={next}
                      aria-label="Next"
                      className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center backdrop-blur-md transition-transform hover:scale-110"
                      style={{ background: 'rgba(139,92,246,0.85)', color: '#fff' }}
                    >
                      <ChevronRight size={22} />
                    </button>
                    <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full text-xs font-bold text-white backdrop-blur-sm" style={{ background: 'rgba(14,16,32,0.6)', border: '1px solid rgba(139,92,246,0.4)' }}>
                      {slide + 1} / {active.images.length}
                    </div>
                  </>
                )}
              </div>

              {/* Footer — summary, methodology, tags */}
              <div className="px-5 sm:px-6 py-5">
                <p className="text-sm leading-relaxed mb-5" style={{ color: c.text2 }}>{active.desc}</p>

                <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: c.text3 }}>What I did</p>
                <ul className="space-y-2 mb-5">
                  {active.approach.map((step, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm" style={{ color: c.text2 }}>
                      <span
                        className="shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-[11px] font-bold mt-0.5"
                        style={{ background: 'rgba(139,92,246,0.14)', color: c.accent, border: '1px solid rgba(139,92,246,0.3)' }}
                      >
                        {idx + 1}
                      </span>
                      {step}
                    </li>
                  ))}
                </ul>

                <p className="text-xs mb-4 flex items-center gap-2" style={{ color: c.text4 }}>
                  <span className="w-1.5 h-1.5 rounded-full inline-block" style={{ background: c.accent }} />
                  Full report, dashboard file (.pbix/.twb) & underlying SQL available on request.
                </p>

                <div className="flex flex-wrap items-center justify-between gap-4 pt-4" style={{ borderTop: `1px solid ${c.divider}` }}>
                  <div className="flex flex-wrap gap-2">
                    {active.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2.5 py-1 rounded-full font-medium"
                        style={{ background: c.tagBg, color: c.tagText, border: `1px solid ${c.tagBorder}` }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {active.images.length > 1 && (
                    <div className="flex gap-2">
                      {active.images.map((_, idx) => (
                        <button
                          key={idx}
                          onClick={() => setSlide(idx)}
                          aria-label={`Go to slide ${idx + 1}`}
                          className="h-2 rounded-full transition-all"
                          style={{
                            width: idx === slide ? 24 : 8,
                            background: idx === slide ? VIOLET : c.text4,
                          }}
                        />
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
