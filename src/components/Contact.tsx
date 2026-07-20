import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, MapPin, Phone, Send, Linkedin } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'

const contactInfo = [
  { icon: Mail, label: 'Email', value: 'precioustaiwo852@gmail.com', href: 'mailto:precioustaiwo852@gmail.com' },
  { icon: Phone, label: 'Phone', value: '+234 808 885 9364', href: 'tel:+2348088859364' },
  { icon: MapPin, label: 'Location', value: 'Ijebu Ode, Ogun State, Nigeria', href: '#' },
]

const socials = [
  { icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com/in/taiwo-precious-a881682b3', color: '#8B5CF6' },
  { icon: Mail, label: 'Email', href: 'mailto:precioustaiwo852@gmail.com', color: '#8B5CF6' },
]

export default function Contact() {
  const { c } = useTheme()
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [sent, setSent] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)
    setError(false)
    try {
      const res = await fetch('https://formspree.io/f/mredbwlj', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ ...form, _subject: `Portfolio contact: ${form.subject}` }),
      })
      if (res.ok) {
        setSent(true)
        setForm({ name: '', email: '', subject: '', message: '' })
        setTimeout(() => setSent(false), 5000)
      } else {
        setError(true)
      }
    } catch {
      setError(true)
    } finally {
      setSubmitting(false)
    }
  }

  const inputBase: React.CSSProperties = {
    background: c.input,
    border: `1px solid ${c.inputBorder}`,
    color: c.text1,
    borderRadius: 12,
    padding: '14px 16px',
    width: '100%',
    outline: 'none',
    fontSize: 14,
    transition: 'border-color 0.2s, box-shadow 0.2s',
  }

  const focusOn = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    e.target.style.borderColor = 'rgba(139,92,246,0.6)'
    e.target.style.boxShadow = '0 0 0 3px rgba(139,92,246,0.1)'
  }
  const focusOff = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    e.target.style.borderColor = c.inputBorder
    e.target.style.boxShadow = 'none'
  }

  return (
    <section id="contact" className="py-28 relative overflow-hidden" style={{ backgroundColor: c.bg1 }}>
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ backgroundImage: `radial-gradient(${c.dot} 1px, transparent 1px)`, backgroundSize: '36px 36px', opacity: 0.6 }}
      />
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-96 h-96 rounded-full" style={{ background: `radial-gradient(circle, ${c.orbA} 0%, transparent 70%)`, top: '-5%', left: '-10%' }} />
        <div className="absolute w-96 h-96 rounded-full" style={{ background: `radial-gradient(circle, ${c.orbB} 0%, transparent 70%)`, bottom: '0%', right: '-10%' }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
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
            Get In Touch
          </span>
          <h2 className="section-title" style={{ color: c.text1 }}>
            Let's <span className="gradient-text">connect</span>
          </h2>
          <p className="mt-4 max-w-lg mx-auto" style={{ color: c.text3 }}>
            Whether you have a data challenge to solve, a project idea, or just want to talk numbers —
            my inbox is always open.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 max-w-5xl mx-auto">
          {/* Left */}
          <motion.div
            className="lg:col-span-2 space-y-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="rounded-2xl p-6" style={{ background: c.card, border: `1px solid ${c.border}` }}>
              <h3 className="font-bold text-xl mb-2" style={{ color: c.text1 }}>Ready to collaborate?</h3>
              <p className="text-sm leading-relaxed" style={{ color: c.text3 }}>
                I'm open to freelance projects, full-time roles, and consulting engagements.
                Let's talk about what we can build together.
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((item) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  className="rounded-2xl p-4 flex items-center gap-4 group"
                  style={{ background: c.card, border: `1px solid ${c.border}` }}
                  whileHover={{ x: 4, boxShadow: '0 8px 30px rgba(139,92,246,0.12)' }}
                >
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(139,92,246,0.1)' }}>
                    <item.icon size={18} style={{ color: '#8B5CF6' }} />
                  </div>
                  <div>
                    <div className="text-xs font-medium" style={{ color: c.text4 }}>{item.label}</div>
                    <div className="text-sm font-medium" style={{ color: c.text2 }}>{item.value}</div>
                  </div>
                </motion.a>
              ))}
            </div>

            <div>
              <p className="text-xs font-medium tracking-wider uppercase mb-4" style={{ color: c.text4 }}>Find me on</p>
              <div className="flex gap-3">
                {socials.map((s) => (
                  <motion.a
                    key={s.label}
                    href={s.href}
                    className="w-11 h-11 rounded-xl flex items-center justify-center"
                    style={{ background: c.card, border: `1px solid ${c.border}`, color: c.text3 }}
                    whileHover={{ scale: 1.1, boxShadow: `0 8px 25px ${s.color}25`, color: s.color }}
                    whileTap={{ scale: 0.95 }}
                    title={s.label}
                  >
                    <s.icon size={18} />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <div className="rounded-2xl p-8" style={{ background: c.card, border: `1px solid ${c.border}` }}>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-medium tracking-wider uppercase mb-2" style={{ color: c.text4 }}>Name</label>
                    <input type="text" required placeholder="Your name" value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      style={inputBase} onFocus={focusOn} onBlur={focusOff} />
                  </div>
                  <div>
                    <label className="block text-xs font-medium tracking-wider uppercase mb-2" style={{ color: c.text4 }}>Email</label>
                    <input type="email" required placeholder="your@email.com" value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      style={inputBase} onFocus={focusOn} onBlur={focusOff} />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium tracking-wider uppercase mb-2" style={{ color: c.text4 }}>Subject</label>
                  <input type="text" required placeholder="What's this about?" value={form.subject}
                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                    style={inputBase} onFocus={focusOn} onBlur={focusOff} />
                </div>

                <div>
                  <label className="block text-xs font-medium tracking-wider uppercase mb-2" style={{ color: c.text4 }}>Message</label>
                  <textarea required rows={5} placeholder="Tell me about your project or opportunity..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    style={{ ...inputBase, resize: 'none' }}
                    onFocus={focusOn} onBlur={focusOff} />
                </div>

                {error && (
                  <p className="text-xs text-center" style={{ color: '#F87171' }}>
                    Something went wrong. Please try emailing directly at precioustaiwo852@gmail.com
                  </p>
                )}
                <motion.button
                  type="submit"
                  disabled={submitting}
                  className="w-full flex items-center justify-center gap-2 py-4 rounded-xl font-semibold text-white"
                  style={{ background: 'linear-gradient(135deg, #8B5CF6, #7C3AED)', opacity: submitting ? 0.7 : 1 }}
                  whileHover={submitting ? {} : { scale: 1.02, boxShadow: '0 8px 40px rgba(139,92,246,0.4)' }}
                  whileTap={submitting ? {} : { scale: 0.98 }}
                >
                  {sent ? (
                    <motion.span initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="flex items-center gap-2">
                      ✓ Message Sent!
                    </motion.span>
                  ) : submitting ? (
                    'Sending...'
                  ) : (
                    <><Send size={16} /> Send Message</>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
