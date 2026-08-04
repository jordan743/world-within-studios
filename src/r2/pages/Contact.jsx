import { useState } from 'react'
import Nav from '../Nav.jsx'
import Ticker from '../Ticker.jsx'
import Footer from '../Footer.jsx'
import './Contact.css'

const FIELDS = [
  { name: 'name', label: 'NAME', placeholder: 'Your name', type: 'text', required: true },
  { name: 'email', label: 'EMAIL', placeholder: 'you@example.com', type: 'email', required: true },
  { name: 'organization', label: 'ORGANIZATION (OPTIONAL)', placeholder: 'Company / org', type: 'text' },
  { name: 'subject', label: 'SUBJECT', placeholder: 'What is this about', type: 'text', required: true },
]

const CONTACT_EMAIL = 'info@worldwithin.org'

/** Get in Touch — Figma 2425:1426. */
export default function Contact() {
  const [values, setValues] = useState({ name: '', email: '', organization: '', subject: '', message: '' })

  const set = (k) => (e) => setValues((v) => ({ ...v, [k]: e.target.value }))

  // No backend on this site yet — hand off to the user's mail client so the
  // form is functional rather than decorative.
  const handleSubmit = (e) => {
    e.preventDefault()
    const subject = values.subject || 'World Within Studios enquiry'
    const body = [
      `Name: ${values.name}`,
      `Email: ${values.email}`,
      values.organization ? `Organization: ${values.organization}` : null,
      '',
      values.message,
    ].filter(Boolean).join('\n')
    window.location.href =
      `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  }

  return (
    <div className="r2-page">
      <Nav tone="green" />
      <main>
        <section className="r2-wrap r2contact__head">
          <h1 className="r2-display">Get in touch.</h1>
        </section>

        <section className="r2-wrap r2contact__body">
          <form className="r2contact__form" onSubmit={handleSubmit}>
            <div className="r2contact__row">
              {FIELDS.slice(0, 2).map((f) => (
                <Field key={f.name} field={f} value={values[f.name]} onChange={set(f.name)} />
              ))}
            </div>
            <div className="r2contact__row">
              {FIELDS.slice(2).map((f) => (
                <Field key={f.name} field={f} value={values[f.name]} onChange={set(f.name)} />
              ))}
            </div>

            <div className="r2contact__field">
              <label htmlFor="message">MESSAGE</label>
              <textarea
                id="message"
                name="message"
                rows={3}
                placeholder="Tell us about the project…"
                value={values.message}
                onChange={set('message')}
                required
              />
            </div>

            <div className="r2contact__note">
              <p className="r2-label">NO UNSOLICITED SUBMISSIONS</p>
              <p>
                World Within Studios does not accept unsolicited submissions, pitches, or screeners.
                Messages sent through this form are read, but sending material does not create any
                obligation to review, respond, or keep it confidential.
              </p>
            </div>

            <button type="submit" className="r2contact__submit">
              SEND MESSAGE <span aria-hidden="true">→</span>
            </button>
          </form>
        </section>

        <Ticker />
      </main>

      <div className="r2contact__footer-dots" aria-hidden="true">
        {[0, 1, 2, 3].map((i) => (
          <img key={i} src="/assets/r2/pages/pink-dot.webp" alt="" className={`r2contact__dot r2contact__dot--${i}`} />
        ))}
        <Footer />
      </div>
    </div>
  )
}

function Field({ field, value, onChange }) {
  return (
    <div className="r2contact__field">
      <label htmlFor={field.name}>{field.label}</label>
      <input
        id={field.name}
        name={field.name}
        type={field.type}
        placeholder={field.placeholder}
        value={value}
        onChange={onChange}
        required={field.required}
      />
    </div>
  )
}
