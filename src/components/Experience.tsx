import { motion } from 'framer-motion'
import { Briefcase, GraduationCap } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'

const experiences = [
  {
    type: 'work',
    role: 'Data Analyst',
    company: 'Luma Brand Digital Agency',
    period: 'Jan 2026 – Present',
    location: 'Nigeria',
    desc: 'Delivering data analysis and reporting support for the agency and its clients — turning campaign and business data into dashboards that guide decisions.',
    highlights: [
      'Build interactive dashboards and reports that support client decision-making',
      'Clean, shape, and model raw business data for analysis in SQL, Power BI, and Excel',
    ],
    color: '#8B5CF6',
  },
  {
    type: 'work',
    role: 'Data Analysis Tutor',
    company: 'Tech Challenge Academy',
    period: 'Apr 2025 – Dec 2025',
    location: 'Nigeria',
    desc: 'Taught data analysis fundamentals — Excel, SQL, and Power BI — guiding learners from data cleaning through dashboard design and interpretation.',
    highlights: [
      'Designed hands-on exercises and real-world datasets for portfolio-ready projects',
      'Provided one-on-one mentoring and feedback on student analytics projects',
      'Strengthened learners’ analytical thinking and data storytelling skills',
    ],
    color: '#8B5CF6',
  },
  {
    type: 'work',
    role: 'Primary Health Care Intern',
    company: 'Odo-Esa Primary Health Centre',
    period: 'Jul 2024 – Sep 2024',
    location: 'Nigeria',
    desc: 'Managed patient and immunisation records across maternal and child health services, compiling healthcare data used for facility-level reporting.',
    highlights: [
      'Maintained patient and immunisation records with accuracy, completeness, and confidentiality',
      'Compiled and documented service data used for reporting and programme monitoring',
      'Supported community outreach, gathering field data that informed service planning',
    ],
    color: '#8B5CF6',
  },
  {
    type: 'work',
    role: 'Sales Representative',
    company: 'Peniel Prestige Limited',
    period: 'Oct 2021 – Jan 2022',
    location: 'Nigeria',
    desc: 'Maintained daily sales and inventory records and prepared summaries used for management review.',
    highlights: [
      'Prepared accurate daily sales summaries used in management decisions',
      'Tracked stock movement and flagged record-vs-inventory discrepancies',
    ],
    color: '#8B5CF6',
  },
  {
    type: 'education',
    role: 'B.Sc. Public Health (Second Class Upper)',
    company: 'Lead City University, Ibadan',
    period: '2025',
    location: 'Nigeria',
    desc: 'Public health foundation covering surveillance, epidemiology, and health data — the analytical grounding behind my data work.',
    highlights: [
      'CAPM — Certified Associate in Project Management (PMI)',
      'CITI Program — Public Health Research & Responsible Conduct of Research',
      'Jobberman Soft Skills — Professionalism in the Workplace',
    ],
    color: '#8B5CF6',
  },
]

export default function Experience() {
  const { c } = useTheme()

  return (
    <section id="experience" className="py-28 relative overflow-hidden" style={{ backgroundColor: c.bg2 }}>
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(139,92,246,0.3), transparent)' }} />
      <div
        className="absolute top-0 right-0 w-96 h-96 rounded-full pointer-events-none"
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
            My Journey
          </span>
          <h2 className="section-title" style={{ color: c.text1 }}>
            Experience & <span className="gradient-text">education</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical line */}
          <div
            className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px md:-translate-x-0.5"
            style={{ background: `linear-gradient(to bottom, transparent, ${c.timelineLine} 10%, ${c.timelineLine} 90%, transparent)` }}
          />

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                className="relative flex gap-6 md:gap-0"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              >
                {/* Mobile: left dot */}
                <div className="relative flex-shrink-0 flex flex-col items-center md:hidden">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center z-10"
                    style={{ background: `${exp.color}18`, border: `2px solid ${exp.color}50` }}
                  >
                    {exp.type === 'education'
                      ? <GraduationCap size={18} style={{ color: exp.color }} />
                      : <Briefcase size={18} style={{ color: exp.color }} />}
                  </div>
                </div>

                {/* Desktop: alternating layout */}
                <div className={`hidden md:flex w-full items-start gap-8 ${i % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className="flex-1">
                    <motion.div
                      className="rounded-2xl p-6 relative"
                      style={{ background: c.card, border: `1px solid ${c.border}` }}
                      whileHover={{ scale: 1.01, boxShadow: `0 16px 50px ${exp.color}15` }}
                    >
                      <div
                        className={`absolute top-0 h-0.5 rounded-full ${i % 2 === 0 ? 'left-6 right-12' : 'right-6 left-12'}`}
                        style={{ background: `linear-gradient(${i % 2 === 0 ? '90' : '270'}deg, ${exp.color}, transparent)` }}
                      />
                      <div className="flex items-start justify-between gap-4 mb-3">
                        <div>
                          <h3 className="font-bold text-lg" style={{ color: c.text1 }}>{exp.role}</h3>
                          <p className="font-semibold text-sm mt-0.5" style={{ color: exp.color }}>{exp.company}</p>
                        </div>
                        <div className="text-right flex-shrink-0">
                          <div className="text-sm font-medium" style={{ color: c.text2 }}>{exp.period}</div>
                          <div className="text-xs mt-0.5" style={{ color: c.text4 }}>{exp.location}</div>
                        </div>
                      </div>
                      <p className="text-sm leading-relaxed mb-4" style={{ color: c.text3 }}>{exp.desc}</p>
                      <ul className="space-y-2">
                        {exp.highlights.map((h) => (
                          <li key={h} className="flex items-start gap-2 text-sm" style={{ color: c.text2 }}>
                            <span className="w-1 h-1 rounded-full mt-2 flex-shrink-0" style={{ background: exp.color }} />
                            {h}
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  </div>

                  {/* Center dot */}
                  <div className="flex-shrink-0 flex flex-col items-center">
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center z-10"
                      style={{ background: `${exp.color}18`, border: `2px solid ${exp.color}60`, boxShadow: `0 0 20px ${exp.color}30` }}
                    >
                      {exp.type === 'education'
                        ? <GraduationCap size={18} style={{ color: exp.color }} />
                        : <Briefcase size={18} style={{ color: exp.color }} />}
                    </div>
                  </div>

                  <div className="flex-1" />
                </div>

                {/* Mobile card */}
                <div className="flex-1 md:hidden">
                  <div className="rounded-2xl p-5" style={{ background: c.card, border: `1px solid ${c.border}` }}>
                    <div className="mb-3">
                      <h3 className="font-bold" style={{ color: c.text1 }}>{exp.role}</h3>
                      <p className="text-sm font-semibold mt-0.5" style={{ color: exp.color }}>{exp.company}</p>
                      <p className="text-xs mt-1" style={{ color: c.text4 }}>{exp.period} · {exp.location}</p>
                    </div>
                    <p className="text-sm leading-relaxed mb-3" style={{ color: c.text3 }}>{exp.desc}</p>
                    <ul className="space-y-1.5">
                      {exp.highlights.map((h) => (
                        <li key={h} className="flex items-start gap-2 text-xs" style={{ color: c.text2 }}>
                          <span className="w-1 h-1 rounded-full mt-1.5 flex-shrink-0" style={{ background: exp.color }} />
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(139,92,246,0.3), transparent)' }} />
    </section>
  )
}
