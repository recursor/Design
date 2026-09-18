// Appointment.jsx — request-appointment form, mirrors the form on
// the live site. Renders fully interactive (state local) — submits
// flip to a success state and back via a "Request another" button.

function AppointmentSection() {
  const [state, setState] = React.useState({
    first: '', last: '', phone: '', email: '',
    insurance: '', date: '', referred: '', message: '',
    consent: false,
  });
  const [submitted, setSubmitted] = React.useState(false);
  const set = (k) => (e) => setState((s) => ({ ...s, [k]: e.target ? (e.target.type === 'checkbox' ? e.target.checked : e.target.value) : e }));

  const submit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="appointment" style={apStyles.section}>
      <div style={apStyles.inner}>
        <header style={apStyles.head}>
          <p className="eyebrow" style={{ margin: 0 }}>Get Started</p>
          <h2 style={apStyles.h2}>Schedule your appointment</h2>
          <hr className="gradient-rule" />
          <p style={apStyles.lead}>Use the form below and a coordinator will reach out within one business day.</p>
        </header>

        <div style={apStyles.card}>
          {submitted ? (
            <div style={apStyles.success}>
              <div style={apStyles.successIcon}>
                <i data-lucide="check" style={{ width: 28, height: 28, color: '#fff' }}></i>
              </div>
              <h3 style={apStyles.successTitle}>Request received</h3>
              <p style={apStyles.successCopy}>
                Thanks{state.first ? `, ${state.first}` : ''}. A coordinator from INOV8 Orthopedics will follow up at
                {state.email ? <strong style={{ color: 'var(--fg-strong)' }}> {state.email}</strong> : ' the contact you provided'} within one business day.
              </p>
              <button onClick={() => { setSubmitted(false); setState({ first:'',last:'',phone:'',email:'',insurance:'',date:'',referred:'',message:'',consent:false }); }} style={apStyles.againBtn}>
                Request another
              </button>
            </div>
          ) : (
            <form onSubmit={submit} style={apStyles.form}>
              <Field label="First name" required>
                <input value={state.first} onChange={set('first')} style={apStyles.input} />
              </Field>
              <Field label="Last name" required>
                <input value={state.last} onChange={set('last')} style={apStyles.input} />
              </Field>
              <Field label="Phone" required>
                <input type="tel" value={state.phone} onChange={set('phone')} style={apStyles.input} />
              </Field>
              <Field label="Email" required>
                <input type="email" value={state.email} onChange={set('email')} style={apStyles.input} />
              </Field>
              <Field label="Insurance provider">
                <select value={state.insurance} onChange={set('insurance')} style={apStyles.input}>
                  <option value="">Select your provider</option>
                  <option>Blue Cross Blue Shield</option>
                  <option>Aetna</option>
                  <option>UnitedHealthcare</option>
                  <option>Cigna</option>
                  <option>Humana</option>
                  <option>Self-pay</option>
                  <option>Other</option>
                </select>
              </Field>
              <Field label="Preferred date">
                <input type="text" placeholder="MM / DD / YYYY" value={state.date} onChange={set('date')} style={apStyles.input} />
              </Field>
              <Field label="Referred by" full>
                <input value={state.referred} onChange={set('referred')} placeholder="Physician, friend, online search…" style={apStyles.input} />
              </Field>
              <Field label="What can we do for you?" required full>
                <textarea value={state.message} onChange={set('message')} rows={4} style={{ ...apStyles.input, resize: 'vertical' }} />
              </Field>
              <label style={apStyles.consent}>
                <input type="checkbox" checked={state.consent} onChange={set('consent')} style={{ accentColor: 'var(--cyan-500)', width: 16, height: 16 }} />
                <span>I agree to be contacted by INOV8 Orthopedics and have read the <a href="#" style={{ color: 'var(--cyan-700)' }}>Privacy Policy</a>.</span>
              </label>
              <div style={apStyles.actions}>
                <button type="submit" style={apStyles.submit}>Request appointment</button>
                <p style={apStyles.disclaimer}>Required fields are marked with <span style={{ color: 'var(--danger-500)' }}>*</span>. This form does not transmit protected health information.</p>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

function Field({ label, required, full, children }) {
  return (
    <label style={{ display: 'flex', flexDirection: 'column', gap: 6, gridColumn: full ? '1 / -1' : 'auto' }}>
      <span style={{ fontSize: 12, fontWeight: 600, color: 'var(--fg-strong)' }}>
        {label}{required && <span style={{ color: 'var(--danger-500)', marginLeft: 3 }}>*</span>}
      </span>
      {children}
    </label>
  );
}

const apStyles = {
  section: { background: '#fff' },
  inner: { maxWidth: 980, margin: '0 auto', padding: '88px 32px' },
  head: { maxWidth: 640, margin: '0 0 36px' },
  h2: { fontFamily: 'var(--font-display)', fontWeight: 300, fontSize: 40, color: 'var(--fg-strong)', margin: '8px 0 0' },
  lead: { fontSize: 17, lineHeight: 1.55, color: 'var(--fg-muted)', margin: '12px 0 0' },
  card: { background: 'var(--bg-soft)', border: '1px solid var(--border)', borderRadius: 16, padding: 32 },
  form: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 },
  input: {
    fontFamily: 'var(--font-body)', fontSize: 14, padding: '11px 13px',
    border: '1px solid var(--border)', borderRadius: 6, outline: 'none', color: 'var(--fg)',
    background: '#fff', width: '100%', boxSizing: 'border-box',
  },
  consent: { gridColumn: '1 / -1', display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: 13, color: 'var(--fg)', lineHeight: 1.45, marginTop: 4 },
  actions: { gridColumn: '1 / -1', display: 'flex', alignItems: 'center', gap: 18, flexWrap: 'wrap', marginTop: 8 },
  submit: {
    fontFamily: 'var(--font-body)', fontSize: 15, fontWeight: 600,
    padding: '14px 28px', border: 0, borderRadius: 999, background: 'var(--cyan-500)',
    color: '#fff', cursor: 'pointer', boxShadow: '0 2px 6px rgba(32,38,90,0.06)',
  },
  disclaimer: { fontSize: 12, color: 'var(--fg-subtle)', margin: 0, lineHeight: 1.45, maxWidth: 420 },

  success: { textAlign: 'center', padding: '24px 12px 12px' },
  successIcon: { width: 56, height: 56, borderRadius: '50%', background: 'var(--success-500)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', marginBottom: 14 },
  successTitle: { fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 28, color: 'var(--fg-strong)', margin: '0 0 8px' },
  successCopy: { fontSize: 15, color: 'var(--fg-muted)', maxWidth: 460, margin: '0 auto 18px', lineHeight: 1.5 },
  againBtn: { fontFamily: 'var(--font-body)', fontSize: 13, fontWeight: 600, padding: '10px 18px', border: '1px solid var(--border-strong)', borderRadius: 999, background: '#fff', color: 'var(--fg-strong)', cursor: 'pointer' },
};
