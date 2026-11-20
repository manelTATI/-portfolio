import { useState } from 'react';
import Head from 'next/head';
import styles from '@/styles/Contact.module.css';

const initial = { name: '', email: '', message: '' };
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const LIMITS = { name: 100, email: 254, message: 2000 };

function validate({ name, email, message }) {
  const errors = {};
  if (!name.trim()) errors.name = 'Please enter your name.';
  else if (name.trim().length < 2) errors.name = 'Name must be at least 2 characters.';

  if (!email.trim()) errors.email = 'Please enter your email address.';
  else if (!EMAIL_RE.test(email.trim())) errors.email = 'That email address does not look right.';

  if (!message.trim()) errors.message = 'Please write a message.';
  else if (message.trim().length < 10) errors.message = 'Message must be at least 10 characters.';

  return errors;
}

export default function Contact() {
  const [form, setForm] = useState(initial);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value.slice(0, LIMITS[name]) }));
    if (errors[name]) setErrors((err) => ({ ...err, [name]: undefined }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const found = validate(form);
    setErrors(found);
    if (Object.keys(found).length > 0) return;

    setStatus('sending');
    await new Promise((r) => setTimeout(r, 800));
    setStatus('sent');
  };

  const reset = () => {
    setForm(initial);
    setErrors({});
    setStatus('idle');
  };

  return (
    <>
      <Head>
        <title>Contact - Manel Tati</title>
      </Head>
      <section className={styles.wrap}>
        <div className={styles.aside}>
          <span className="eyebrow">Contact</span>
          <h1 className={styles.title}>Say hello.</h1>
          <p className={styles.lead}>
            Send me a message here, or
            write to me at <a href="mailto:manel.tati@gmail.com">manel.tati@gmail.com</a>.
          </p>
          <p className={styles.lead}>
            You can also find my code on{' '}
            <a href="https://github.com/manelTATI" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            .
          </p>
        </div>

        {status === 'sent' ? (
          <div className={styles.success} role="status">
            <h2>Thank you, {form.name.trim()}.</h2>
            <p>Your message is on its way. I will reply to {form.email.trim()}.</p>
            <button type="button" className="button button-ghost" onClick={reset}>
              Write another
            </button>
          </div>
        ) : (
          <form className={styles.form} onSubmit={handleSubmit} noValidate>
            <Field label="Name" name="name" error={errors.name}>
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                value={form.name}
                onChange={handleChange}
                maxLength={LIMITS.name}
                aria-invalid={!!errors.name}
                aria-describedby={errors.name ? 'name-error' : undefined}
              />
            </Field>

            <Field label="Email" name="email" error={errors.email}>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                value={form.email}
                onChange={handleChange}
                maxLength={LIMITS.email}
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? 'email-error' : undefined}
              />
            </Field>

            <Field label="Message" name="message" error={errors.message}>
              <textarea
                id="message"
                name="message"
                rows={6}
                value={form.message}
                onChange={handleChange}
                maxLength={LIMITS.message}
                aria-invalid={!!errors.message}
                aria-describedby={errors.message ? 'message-error' : undefined}
              />
              <span className={styles.counter}>
                {form.message.length} / {LIMITS.message}
              </span>
            </Field>

            <button type="submit" className="button" disabled={status === 'sending'}>
              {status === 'sending' ? 'Sending' : 'Send message'}
            </button>
          </form>
        )}
      </section>
    </>
  );
}

function Field({ label, name, error, children }) {
  return (
    <div className={`${styles.field} ${error ? styles.hasError : ''}`}>
      <label htmlFor={name}>{label}</label>
      {children}
      {error && (
        <span id={`${name}-error`} className={styles.error} role="alert">
          {error}
        </span>
      )}
    </div>
  );
}
