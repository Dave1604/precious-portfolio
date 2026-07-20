import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'

const proficiency = [
  {
    tier: 'Advanced',
    skills: [
      'SQL — Joins, CTEs, Window Functions',
      'Microsoft Power BI — DAX, Power Query',
      'Microsoft Excel — Pivot Tables, Power Query',
      'KPI Dashboard Design',
    ],
  },
  {
    tier: 'Proficient',
    skills: [
      'Tableau',
      'Data Cleaning & Modeling',
    ],
  },
]

const toolBadges = [
  'SQL Server', 'Power BI', 'Tableau', 'Excel',
  'DAX', 'Power Query', 'Pivot Tables', 'Data Modeling',
]

const softSkills = [
  'Data Storytelling', 'Stakeholder Communication', 'Critical Thinking',
  'Problem Solving', 'Attention to Detail', 'Documentation',
  'Project Management (CAPM)', 'Public Health Surveillance',
]

export default function Skills() {
  const { c } = useTheme()

  return (
    <section id="skills" className="py-28 relative overflow-hidden" style={{ backgroundColor: c.bg2 }}>
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(139,92,246,0.3), transparent)' }} />
      <div
        className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: `radial-gradient(circle, ${c.orbA} 0%, transparent 70%)` }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span
            className="inline-block text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full mb-4"
            style={{ background: c.sectionPill, border: `1px solid ${c.sectionPillBorder}`, color: '#8B5CF6' }}
          >
            My Expertise
          </span>
          <h2 className="section-title" style={{ color: c.text1 }}>
            Skills & <span className="gradient-text">tools</span>
          </h2>
          <p className="mt-4 max-w-xl mx-auto" style={{ color: c.text3 }}>
            The toolkit I use to take data from raw source to decision-ready dashboard.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Technical proficiency — grouped by level */}
          <div>
            <motion.h3
              className="text-sm font-semibold tracking-widest uppercase mb-8"
              style={{ color: c.text3 }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              Technical Proficiency
            </motion.h3>

            <div className="space-y-8">
              {proficiency.map((group, gi) => (
                <div key={group.tier}>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-xs font-bold tracking-wider uppercase" style={{ color: c.accent }}>
                      {group.tier}
                    </span>
                    <span className="h-px flex-1" style={{ background: c.divider }} />
                  </div>

                  <div className="space-y-2.5">
                    {group.skills.map((skill, i) => (
                      <motion.div
                        key={skill}
                        className="flex items-center gap-3 rounded-xl px-4 py-3"
                        style={{ background: c.card, border: `1px solid ${c.border}` }}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.45, delay: gi * 0.1 + i * 0.06 }}
                        whileHover={{ x: 4, borderColor: 'rgba(139,92,246,0.4)' }}
                      >
                        <span
                          className="w-6 h-6 rounded-lg flex items-center justify-center flex-shrink-0"
                          style={{ background: 'rgba(139,92,246,0.12)' }}
                        >
                          <Check size={13} style={{ color: c.accent }} />
                        </span>
                        <span className="text-sm font-medium" style={{ color: c.text2 }}>{skill}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right column */}
          <div className="space-y-12">
            {/* Tools grid */}
            <div>
              <motion.h3
                className="text-sm font-semibold tracking-widest uppercase mb-8"
                style={{ color: c.text3 }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                Tools & Platforms
              </motion.h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {toolBadges.map((tool, i) => (
                  <motion.div
                    key={tool}
                    className="rounded-xl px-3 py-3.5 flex items-center justify-center cursor-default"
                    style={{ background: c.card, border: `1px solid ${c.border}` }}
                    initial={{ opacity: 0, scale: 0.85 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.05 }}
                    whileHover={{ scale: 1.05, y: -3, borderColor: 'rgba(139,92,246,0.4)' }}
                  >
                    <span className="text-xs font-semibold text-center leading-tight tracking-wide" style={{ color: c.text2 }}>{tool}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Soft skills */}
            <div>
              <motion.h3
                className="text-sm font-semibold tracking-widest uppercase mb-6"
                style={{ color: c.text3 }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                Core Competencies
              </motion.h3>
              <div className="flex flex-wrap gap-2">
                {softSkills.map((skill, i) => (
                  <motion.span
                    key={skill}
                    className="px-4 py-2 rounded-full text-sm font-medium"
                    style={{ background: c.tagBg, color: c.tagText, border: `1px solid ${c.tagBorder}` }}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.05 }}
                    whileHover={{ background: 'rgba(139,92,246,0.15)', scale: 1.04 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(139,92,246,0.3), transparent)' }} />
    </section>
  )
}
