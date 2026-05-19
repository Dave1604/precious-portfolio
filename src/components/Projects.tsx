import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'

const categories = ['All', 'Dashboard', 'Analytics']

const projects = [
  {
    id: 1,
    title: 'HR Attrition Analytics Dashboard',
    category: 'Dashboard',
    color: '#8B5CF6',
    image: '/projects/hr-attrition.png',
    desc: 'Power BI dashboard analyzing attrition across 606 employees. Pinpointed R&D as the highest-risk department at 66% of total attrition, with the 26–35 age group most affected.',
    tags: ['Power BI', 'DAX', 'HR Analytics'],
    impact: '14.69% attrition rate',
  },
  {
    id: 2,
    title: 'Pizza Sales Annual Performance',
    category: 'Analytics',
    color: '#EC4899',
    image: '/projects/pizza-sales.jpg',
    desc: 'Annual breakdown of a pizza restaurant\'s 2015 performance — $817K revenue across 21,350 orders. Classic style leads at 26.9% of sales; daily and monthly order trends identified.',
    tags: ['Tableau', 'Sales Analytics', 'Trend Analysis'],
    impact: '$817K revenue in 2015',
  },
  {
    id: 3,
    title: 'Sample Store Performance Analysis',
    category: 'Dashboard',
    color: '#FBBF24',
    image: '/projects/store-analysis.jpg',
    desc: 'Multi-view store analysis tracking $2.3M in total sales and $286K profit. California leads at $457K in state revenue; Consumer segment drives over 50% of total sales.',
    tags: ['Excel', 'Sales Analytics', 'Data Visualization'],
    impact: '$2.3M revenue tracked',
  },
  {
    id: 4,
    title: 'Superstore Sales Dashboard',
    category: 'Analytics',
    color: '#8B5CF6',
    image: '/projects/superstore-sales.jpg',
    desc: 'Interactive Excel dashboard breaking down $2.3M in sales across 4 regions and 3 product categories with dynamic region and category filters. West leads at $725K.',
    tags: ['Excel', 'Power Query', 'Data Visualization'],
    impact: '$2.3M sales analyzed',
  },
  {
    id: 5,
    title: 'Statistical Analysis Dashboard',
    category: 'Analytics',
    color: '#FBBF24',
    image: '/projects/statistical-analysis.jpg',
    desc: 'Power BI report applying advanced DAX statistical functions — standard deviation, variance, percentile, and IQR — across 793 unique customers and 3 product categories.',
    tags: ['Power BI', 'DAX', 'Statistical Analysis'],
    impact: '793 customers profiled',
  },
  {
    id: 6,
    title: 'HR Data Analytics & Job Satisfaction',
    category: 'Dashboard',
    color: '#8B5CF6',
    image: '/projects/hr-job-satisfaction.jpg',
    desc: 'Workforce analytics dashboard for 1,470 employees covering attrition by department, age group, education, and marital status to support data-driven HR decision-making.',
    tags: ['Power BI', 'HR Analytics', 'Data Visualization'],
    impact: '1,470 employees analyzed',
  },
]

export default function Projects() {
  const { c } = useTheme()
  const [activeCategory, setActiveCategory] = useState('All')

  const filtered = projects.filter(
    (p) => activeCategory === 'All' || p.category === activeCategory
  )

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
            style={{ background: c.sectionPill, border: `1px solid ${c.sectionPillBorder}`, color: '#8B5CF6' }}
          >
            Featured Work
          </span>
          <h2 className="section-title" style={{ color: c.text1 }}>
            Projects that <span className="gradient-text">delivered impact</span>
          </h2>
          <p className="mt-4 max-w-xl mx-auto" style={{ color: c.text3 }}>
            Real-world data challenges solved with measurable, business-driving outcomes.
          </p>
        </motion.div>

        {/* Filter tabs */}
        <motion.div
          className="flex justify-center gap-2 mb-12 flex-wrap"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {categories.map((cat) => (
            <motion.button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className="px-5 py-2 rounded-full text-sm font-semibold transition-all"
              style={
                activeCategory === cat
                  ? { background: 'linear-gradient(135deg, #8B5CF6, #EC4899)', color: '#fff', boxShadow: '0 4px 20px rgba(139,92,246,0.3)' }
                  : { background: c.card, border: `1px solid ${c.border}`, color: c.text3 }
              }
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
            >
              {cat}
            </motion.button>
          ))}
        </motion.div>

        {/* Project grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.div
                key={project.id}
                layout
                className="rounded-2xl overflow-hidden group cursor-default"
                style={{ background: c.card, border: `1px solid ${c.border}` }}
                initial={{ opacity: 0, scale: 0.94, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.94 }}
                transition={{ duration: 0.45, delay: i * 0.07 }}
                whileHover={{ y: -8, boxShadow: `0 24px 60px ${project.color}22` }}
              >
                {/* Card banner — real dashboard screenshot */}
                <div className="h-44 relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, transparent 40%, rgba(0,0,0,0.55) 100%)' }} />
                  <div
                    className="absolute bottom-3 left-3 px-3 py-1 rounded-full text-xs font-bold backdrop-blur-sm"
                    style={{ background: `${project.color}33`, border: `1px solid ${project.color}66`, color: '#fff' }}
                  >
                    {project.impact}
                  </div>
                </div>

                {/* Card body */}
                <div className="p-6">
                  <span className="text-xs font-semibold tracking-wider uppercase" style={{ color: project.color }}>{project.category}</span>
                  <h3 className="font-bold text-lg mt-0.5 leading-tight" style={{ color: c.text1 }}>{project.title}</h3>

                  <p className="text-sm leading-relaxed mt-3 mb-5" style={{ color: c.text3 }}>{project.desc}</p>

                  <div className="flex flex-wrap gap-2 mb-5">
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

                  <div className="flex gap-3 pt-4" style={{ borderTop: `1px solid ${c.divider}` }}>
                    <motion.a
                      href={project.image}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-1.5 text-xs font-semibold"
                      style={{ color: project.color }}
                      whileHover={{ x: 2 }}
                    >
                      <ExternalLink size={13} /> View Dashboard
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
