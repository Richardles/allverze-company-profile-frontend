import { useState } from 'react';

const ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;
const WEB3FORMS_URL = 'https://api.web3forms.com/submit';

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<FormStatus>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [botcheck, setBotcheck] = useState('');

  const resetForm = () => {
    setName('');
    setEmail('');
    setMessage('');
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    const formData = new FormData();
    formData.append('access_key', ACCESS_KEY);
    formData.append('name', name);
    formData.append('email', email);
    formData.append('message', message);
    formData.append('subject', 'New Contact Message from Allverze Website');
    formData.append('from_name', 'Allverze Website');
    formData.append('botcheck', botcheck);

    try {
      const res = await fetch(WEB3FORMS_URL, {
        method: 'POST',
        body: formData,
        headers: { Accept: 'application/json' },
      });
      const json = await res.json();

      if (json.success) {
        setStatus('success');
        resetForm();
      } else {
        setStatus('error');
        setErrorMessage(json.message || 'Something went wrong. Please try again.');
      }
    } catch {
      setStatus('error');
      setErrorMessage('Network error. Please check your connection and try again.');
    }
  };

  return (
    <section className="contact-page">
      <div className="contact-header">
        <h1>Contact Us</h1>
        <p>We'd love to hear from you. Send us a message and we'll get back to you soon.</p>
      </div>

      {status === 'success' && (
        <div className="contact-alert contact-alert--success" role="status">
          <strong>Thank you! Your message has been sent successfully.</strong>
        </div>
      )}
      {status === 'error' && (
        <div className="contact-alert contact-alert--error" role="alert">
          <strong>Something went wrong.</strong> {errorMessage}
        </div>
      )}

      <form className="contact-form" onSubmit={handleSubmit} noValidate>
        <input
          type="checkbox"
          name="botcheck"
          className="botcheck"
          value="1"
          checked={botcheck === '1'}
          onChange={(e) => setBotcheck(e.target.checked ? '1' : '')}
          tabIndex={-1}
          autoComplete="off"
        />
        <div className="form-field">
          <label htmlFor="name">Name</label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            autoComplete="name"
            placeholder="Your full name"
          />
        </div>

        <div className="form-field">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            autoComplete="email"
            placeholder="you@example.com"
          />
        </div>

        <div className="form-field">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            rows={5}
            placeholder="How can we help?"
          />
        </div>

        <button
          type="submit"
          className="submit-button"
          disabled={status === 'submitting'}
        >
          {status === 'submitting' ? 'Sending...' : 'Send Message'}
        </button>
      </form>
    </section>
  );
}
