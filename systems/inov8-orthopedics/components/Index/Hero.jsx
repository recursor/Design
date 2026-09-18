// Hero.jsx — full-width hero section with eyebrow / display heading /
// gradient rule / lead / CTA pair / right-side image placeholder.
// Matches the live site's hero copy verbatim.

function Hero({ onRequest }) {
  return (
    <section style={heroStyles.section}>
      <div style={heroStyles.inner}>
        <div style={heroStyles.text}>
          <p className="eyebrow" style={{ margin: 0, color: 'var(--cyan-600)' }}>Welcome to INOV8 Orthopedics</p>
          <h1 style={heroStyles.h1}>
            Orthopedic surgery, sports medicine, and physical therapy in <span className="gradient-text" style={{ fontWeight: 500 }}>Houston, TX</span>.
          </h1>
          <hr className="gradient-rule" />
          <p style={heroStyles.lead}>
            Innovative orthopedic care for exceptional patient outcomes. Our team specializes in outpatient
            total joint replacement and the full range of musculoskeletal, orthopedic, and arthritic conditions.
          </p>
          <div style={heroStyles.ctas}>
            <button onClick={onRequest} style={heroStyles.primary}>Request appointment</button>
            <a href="tel:3465717500" style={heroStyles.secondary}>
              <i data-lucide="phone" style={{ width: 14, height: 14 }}></i> (346) 571-7500
            </a>
          </div>
          <div style={heroStyles.proof}>
            <Stat n="4" label="Board-certified surgeons" />
            <Divider />
            <Stat n="6" label="Specialty areas" />
            <Divider />
            <Stat n="1" label="ASC in Texas with AAAHC orthopedic certification" small />
          </div>
        </div>

        <div style={heroStyles.media}>
          <div style={heroStyles.mediaCard}>
            <div style={heroStyles.mediaImg}>
              <i data-lucide="image" style={{ width: 48, height: 48, color: '#fff', opacity: 0.6 }}></i>
              <div style={heroStyles.mediaCaption}>Photography placeholder · physician with patient</div>
            </div>
            <div style={heroStyles.floatChip}>
              <span style={{ width: 8, height: 8, borderRadius: 999, background: 'var(--success-500)', display: 'inline-block' }}></span>
              Accepting new patients
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ n, label, small }) {
  return (
    <div>
      <div style={{ fontFamily: 'var(--font-display)', fontWeight: 300, fontSize: 38, lineHeight: 1, color: 'var(--fg-strong)' }}>{n}</div>
      <div style={{ fontSize: small ? 11 : 12, color: 'var(--fg-muted)', marginTop: 4, maxWidth: 160, lineHeight: 1.35 }}>{label}</div>
    </div>
  );
}
function Divider() {
  return <div style={{ width: 1, alignSelf: 'stretch', background: 'var(--divider)' }} />;
}

const heroStyles = {
  section: { background: '#fff', borderBottom: '1px solid var(--divider)' },
  inner: {
    maxWidth: 1200, margin: '0 auto', padding: '72px 32px 64px',
    display: 'grid', gridTemplateColumns: '1.05fr 0.95fr', gap: 64, alignItems: 'center',
  },
  text: { minWidth: 0 },
  h1: {
    fontFamily: 'var(--font-display)', fontWeight: 300, fontSize: 56, lineHeight: 1.05,
    letterSpacing: '-0.01em', color: 'var(--fg-strong)', margin: '12px 0 4px',
  },
  lead: { fontSize: 18, lineHeight: 1.55, color: 'var(--fg-muted)', maxWidth: 520, margin: '8px 0 24px' },
  ctas: { display: 'flex', alignItems: 'center', gap: 12, marginBottom: 36 },
  primary: {
    fontFamily: 'var(--font-body)', fontSize: 15, fontWeight: 600, padding: '14px 26px',
    border: 0, borderRadius: 999, background: 'var(--cyan-500)', color: '#fff',
    cursor: 'pointer', boxShadow: '0 2px 6px rgba(32,38,90,0.08)',
  },
  secondary: {
    fontFamily: 'var(--font-body)', fontSize: 15, fontWeight: 600, padding: '12px 22px',
    border: '1.5px solid var(--border-strong)', borderRadius: 999, background: '#fff',
    color: 'var(--fg-strong)', textDecoration: 'none',
    display: 'inline-flex', alignItems: 'center', gap: 8,
  },
  proof: { display: 'flex', alignItems: 'stretch', gap: 24 },
  media: { position: 'relative' },
  mediaCard: {
    position: 'relative', borderRadius: 16, overflow: 'visible',
    boxShadow: '0 24px 48px -16px rgba(32,38,90,0.18), 0 8px 16px -8px rgba(32,38,90,0.08)',
  },
  mediaImg: {
    aspectRatio: '4 / 5', borderRadius: 16,
    background: 'linear-gradient(135deg, #4A7FB2, #20265A 70%, #163A6D)',
    display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
    gap: 12,
  },
  mediaCaption: { fontSize: 12, color: 'rgba(255,255,255,0.7)' },
  floatChip: {
    position: 'absolute', bottom: -16, left: -16,
    background: '#fff', padding: '10px 16px', borderRadius: 999,
    boxShadow: '0 8px 24px -8px rgba(32,38,90,0.16)',
    fontSize: 13, fontWeight: 600, color: 'var(--fg-strong)',
    display: 'inline-flex', alignItems: 'center', gap: 8,
  },
};
