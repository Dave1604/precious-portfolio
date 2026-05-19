import { motion } from 'framer-motion'
import { useTheme } from '../context/ThemeContext'

const technicalSkills = [
  { name: 'SQL & Database Querying', level: 95, color: '#8B5CF6' },
  { name: 'Microsoft Power BI', level: 92, color: '#EC4899' },
  { name: 'Tableau', level: 88, color: '#8B5CF6' },
  { name: 'Python (Pandas, NumPy, Matplotlib)', level: 85, color: '#EC4899' },
  { name: 'Statistical Analysis', level: 90, color: '#8B5CF6' },
  { name: 'Microsoft Excel / Google Sheets', level: 98, color: '#FBBF24' },
  { name: 'R Programming', level: 78, color: '#EC4899' },
  { name: 'Data Modeling & ETL', level: 83, color: '#8B5CF6' },
]

const toolBadges = [
  { label: 'Power BI', icon: '📊' },
  { label: 'Tableau', icon: '📈' },
  { label: 'Python', icon: '🐍' },
  { label: 'SQL', icon: '🗄️' },
  { label: 'R Studio', icon: '📉' },
  { label: 'Excel', icon: '📋' },
  { label: 'Looker', icon: '🔍' },
  { label: 'BigQuery', icon: '☁️' },
  { label: 'Snowflake', icon: '❄️' },
  { label: 'dbt', icon: '🔧' },
  { label: 'Azure', icon: '⚡' },
  { label: 'Git', icon: '🌿' },
]

const softSkills = [
  'Critical Thinking', 'Data Storytelling', 'Stakeholder Communication',
  'Problem Solving', 'Project Management', 'Attention to Detail',
  'Collaboration', 'Presentation Skills', 'Business Acumen',
]

function SkillBar({ name, level, color, delay }: { name: string; level: number; color: string; delay: number }) {
  const { c } = useTheme()
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium" style={{ color: c.text2 }}>{name}</span>
        <motion.span
          className="text-xs font-bold"
          style={{ color }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: delay + 0.4 }}
        >
          {level}%
        </motion.span>
      </div>
      <div className="h-1.5 rounded-full overflow-hidden" style={{ background: 'rgba(139,92,246,0.12)' }}>
        <motion.div
          className="h-full rounded-full"
          style={{ width: `${level}%`, background: `linear-gradient(90deg, ${color}, ${color === '#8B5CF6' ? '#EC4899' : '#8B5CF6'})` }}
          initial={{ scaleX: 0, originX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: delay + 0.2, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>
    </motion.div>
  )
}

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
            A toolkit built over 5+ years across diverse industries and data challenges.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Skill bars */}
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
            <div className="space-y-6">
              {technicalSkills.map((skill, i) => (
                <SkillBar key={skill.name} {...skill} delay={i * 0.06} />
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
              <div className="grid grid-cols-3 gap-3">
                {toolBadges.map((tool, i) => (
                  <motion.div
                    key={tool.label}
                    className="rounded-2xl p-3 flex flex-col items-center gap-2 cursor-default"
                    style={{ background: c.card, border: `1px solid ${c.border}` }}
                    initial={{ opacity: 0, scale: 0.85 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.05 }}
                    whileHover={{ scale: 1.06, y: -3, boxShadow: '0 10px 40px rgba(139,92,246,0.15)' }}
                  >
                    <span className="text-2xl">{tool.icon}</span>
                    <span className="text-xs font-medium text-center leading-tight" style={{ color: c.text3 }}>{tool.label}</span>
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
