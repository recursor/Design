// Mission.jsx — copy block + tech list, on a soft surface
// with the dark-CTA block tucked below.

const TECH = [
  'Corin OPS',
  'THINK Surgical TSolution One®',
  'OrthoSensor VERASENSE™',
  'Bodycad Unicompartmental Knee System',
  'Intellijoint HIP®',
];

function MissionSection({ onRequest }) {
  return (
    <section style={missionStyles.section}>
      <div style={missionStyles.inner}>
        <div style={missionStyles.text}>
          <p className="eyebrow" style={{ margin: 0 }}>Our Mission</p>
          <h2 style={missionStyles.h2}>"Innovate" isn’t just our namesake — it’s a way of life.</h2>
          <hr className="gradient-rule" />
          <p style={missionStyles.lead}>
            We provide Texas residents with premier orthopedic care through cutting-edge surgical interventions
            and the latest rehabilitation protocols. From check-in to recovery, every part of your experience
            with INOV8 is efficient and patient-focused.
          </p>
          <p style={missionStyles.body}>
            For total joint replacement, we utilize the latest advancements in surgical technology so we can
            perform complex procedures — like total joint replacements — as outpatient procedures.
          </p>
        </div>

        <aside style={missionStyles.techCard}>
          <p className="eyebrow" style={{ margin: 0, color: 'var(--cyan-600)' }}>Surgical technology</p>
          <h3 style={missionStyles.techTitle}>What we operate with</h3>
          <ul style={missionStyles.techList}>
            {TECH.map((t) => (
              <li key={t} style={missionStyles.techItem}>
                <i data-lucide="check" style={{ width: 16, height: 16, color: 'var(--teal-500)', flex: '0 0 16px', marginTop: 2 }}></i>
                <span>{t}</span>
              </li>
            ))}
          </ul>
          <p style={missionStyles.techFoot}>Outpatient joint replacement reduces infection risk and improves overall recovery.</p>
        </aside>
      </div>

      <div style={missionStyles.ctaWrap}>
        <div style={missionStyles.cta}>
          <div style={missionStyles.ctaGradient}></div>
          <div style={missionStyles.ctaInner}>
            <div>
              <p className="eyebrow" style={{ margin: 0, color: 'var(--cyan-300)' }}>Schedule</p>
              <h3 style={missionStyles.ctaTitle}>Ready to move without pain?</h3>
              <p style={missionStyles.ctaCopy}>Request an appointment and a coordinator will reach out within one business day.</p>
            </div>
            <div style={{ display: 'flex', gap: 10 }}>
              <button onClick={onRequest} style={missionStyles.ctaPrimary}>Request appointment</button>
              <a href="tel:3465717500" style={missionStyles.ctaSecondary}>
                <i data-lucide="phone" style={{ width: 13, height: 13 }}></i> (346) 571-7500
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const missionStyles = {
  section: { background: 'var(--bg-soft)' },
  inner: {
    maxWidth: 1200, margin: '0 auto', padding: '88px 32px 40px',
    display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: 64, alignItems: 'start',
  },
  text: { minWidth: 0 },
  h2: { fontFamily: 'var(--font-display)', fontWeight: 300, fontSize: 40, color: 'var(--fg-strong)', margin: '8px 0 0', lineHeight: 1.15 },
  lead: { fontSize: 18, lineHeight: 1.55, color: 'var(--fg-muted)', margin: '8px 0 16px' },
  body: { fontSize: 15, lineHeight: 1.6, color: 'var(--fg)', margin: 0 },

  techCard: {
    background: '#fff', border: '1px solid var(--border)', borderRadius: 16,
    padding: 28, boxShadow: '0 8px 24px -8px rgba(32,38,90,0.08)',
  },
  techTitle: { fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 22, color: 'var(--fg-strong)', margin: '6px 0 14px' },
  techList: { listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 10 },
  techItem: { display: 'flex', gap: 10, fontSize: 14, color: 'var(--fg)', lineHeight: 1.4 },
  techFoot: { fontSize: 12, color: 'var(--fg-subtle)', margin: '16px 0 0', borderTop: '1px solid var(--divider)', paddingTop: 14, lineHeight: 1.5 },

  ctaWrap: { maxWidth: 1200, margin: '0 auto', padding: '24px 32px 88px' },
  cta: { position: 'relative', overflow: 'hidden', borderRadius: 16, background: 'var(--navy-900)' },
  ctaGradient: { position: 'absolute', inset: 0, background: 'var(--inov8-gradient)', opacity: 0.16 },
  ctaInner: {
    position: 'relative', padding: '36px 40px', display: 'flex', alignItems: 'center',
    justifyContent: 'space-between', gap: 32, flexWrap: 'wrap',
  },
  ctaTitle: { fontFamily: 'var(--font-display)', fontWeight: 300, fontSize: 32, color: '#fff', margin: '6px 0 4px' },
  ctaCopy: { fontSize: 14, color: 'rgba(255,255,255,0.78)', margin: 0, maxWidth: 420 },
  ctaPrimary: { fontFamily: 'var(--font-body)', fontSize: 14, fontWeight: 600, padding: '12px 22px', border: 0, borderRadius: 999, background: '#fff', color: 'var(--navy-900)', cursor: 'pointer' },
  ctaSecondary: { fontFamily: 'var(--font-body)', fontSize: 14, fontWeight: 600, padding: '12px 22px', border: '1.5px solid rgba(255,255,255,0.45)', borderRadius: 999, background: 'transparent', color: '#fff', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 8 },
};
