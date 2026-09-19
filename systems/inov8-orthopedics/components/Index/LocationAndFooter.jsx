// Location.jsx + Footer.jsx — final sections of the page.

function LocationSection() {
  return (
    <section style={locStyles.section}>
      <div style={locStyles.inner}>
        <header style={locStyles.head}>
          <p className="eyebrow" style={{ margin: 0 }}>Visit Us</p>
          <h2 style={locStyles.h2}>INOV8 Orthopedics location</h2>
          <hr className="gradient-rule" />
        </header>

        <div style={locStyles.grid}>
          <div style={locStyles.map}>
            <div style={locStyles.mapInner}>
              <i data-lucide="map-pin" style={{ width: 40, height: 40, color: 'var(--cyan-500)' }}></i>
              <div style={{ fontSize: 12, color: 'var(--fg-subtle)', marginTop: 6 }}>Map placeholder · Google Maps embed</div>
            </div>
          </div>

          <aside style={locStyles.card}>
            <h3 style={locStyles.cardTitle}>Houston</h3>
            <div style={locStyles.row}>
              <i data-lucide="map-pin" style={{ width: 16, height: 16, color: 'var(--cyan-500)', marginTop: 3, flex: '0 0 16px' }}></i>
              <div>
                <div style={{ fontWeight: 500, color: 'var(--fg-strong)' }}>10496 Katy Fwy, Suite 101</div>
                <div style={{ color: 'var(--fg-muted)' }}>Houston, TX 77043</div>
                <a href="#" style={locStyles.link}>Get directions <i data-lucide="external-link" style={{ width: 12, height: 12 }}></i></a>
              </div>
            </div>
            <div style={locStyles.row}>
              <i data-lucide="phone" style={{ width: 16, height: 16, color: 'var(--cyan-500)', flex: '0 0 16px' }}></i>
              <a href="tel:3465717500" style={{ color: 'var(--fg-strong)', fontWeight: 500, textDecoration: 'none' }}>(346) 571-7500</a>
            </div>
            <div style={locStyles.row}>
              <i data-lucide="clock" style={{ width: 16, height: 16, color: 'var(--cyan-500)', marginTop: 3, flex: '0 0 16px' }}></i>
              <div>
                <div style={{ color: 'var(--fg-strong)', fontWeight: 500 }}>Monday – Friday</div>
                <div style={{ color: 'var(--fg-muted)' }}>8:00 am – 5:00 pm</div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

const locStyles = {
  section: { background: 'var(--bg-soft)' },
  inner: { maxWidth: 1200, margin: '0 auto', padding: '88px 32px' },
  head: { maxWidth: 640, margin: '0 0 32px' },
  h2: { fontFamily: 'var(--font-display)', fontWeight: 300, fontSize: 40, color: 'var(--fg-strong)', margin: '8px 0 0' },
  grid: { display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: 24 },
  map: {
    borderRadius: 16, overflow: 'hidden', border: '1px solid var(--border)',
    background: 'linear-gradient(135deg, #E6F6FB, #DDE2EA)', minHeight: 280,
    display: 'flex', alignItems: 'center', justifyContent: 'center',
  },
  mapInner: { textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' },
  card: { background: '#fff', borderRadius: 16, border: '1px solid var(--border)', padding: 28, display: 'flex', flexDirection: 'column', gap: 16 },
  cardTitle: { fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 24, color: 'var(--fg-strong)', margin: 0 },
  row: { display: 'flex', gap: 10, alignItems: 'flex-start', fontSize: 14, lineHeight: 1.5 },
  link: { display: 'inline-flex', alignItems: 'center', gap: 4, fontSize: 13, color: 'var(--cyan-700)', textDecoration: 'none', fontWeight: 600, marginTop: 4 },
};

function Footer() {
  return (
    <footer style={footStyles.section}>
      <div style={footStyles.inner}>
        <div style={footStyles.brand}>
          <img src="../assets/inov8-logo.png" alt="INOV8 Orthopedics" style={{ height: 44, width: 'auto', alignSelf: 'flex-start', filter: 'brightness(0) invert(1)' }} />
          <p style={footStyles.tagline}>Innovative orthopedic care for exceptional patient outcomes.</p>
          <div style={footStyles.social}>
            <a href="https://www.facebook.com/inov8orthopedics" aria-label="Facebook" style={footStyles.socialIcon}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M13.5 21v-7.5h2.5l.4-3.1h-2.9V8.4c0-.9.25-1.5 1.55-1.5H16.5V4.1c-.28-.04-1.24-.12-2.36-.12-2.34 0-3.94 1.43-3.94 4.05v2.26H7.7v3.1h2.5V21h3.3Z"/>
              </svg>
            </a>
            <a href="https://www.instagram.com/inov8orthopedics/" aria-label="Instagram" style={footStyles.socialIcon}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect x="3" y="3" width="18" height="18" rx="5"/>
                <circle cx="12" cy="12" r="4"/>
                <circle cx="17.2" cy="6.8" r="0.9" fill="currentColor" stroke="none"/>
              </svg>
            </a>
          </div>
        </div>

        <FooterCol title="Quick Links" links={['Home', 'About Us', 'Procedures & Conditions', 'Patients', 'Media', 'FAQ']} />
        <FooterCol title="Procedures" links={['Hip', 'Knee', 'Shoulder', 'Elbow', 'Sports Medicine', 'Physical Therapy']} />

        <div>
          <p style={footStyles.colTitle}>Contact</p>
          <ul style={footStyles.list}>
            <li style={footStyles.contactLi}>10496 Katy Fwy, Suite 101<br/>Houston, TX 77043</li>
            <li style={footStyles.contactLi}><a href="tel:3465717500" style={footStyles.link}>(346) 571-7500</a></li>
            <li style={footStyles.contactLi}>Mon – Fri  8:00 am – 5:00 pm</li>
          </ul>
        </div>
      </div>

      <div style={footStyles.legal}>
        <div style={footStyles.legalInner}>
          <span>© 2026 INOV8 Orthopedics</span>
          <div style={{ display: 'flex', gap: 18 }}>
            <a href="#" style={footStyles.legalLink}>Privacy Policy</a>
            <a href="#" style={footStyles.legalLink}>Terms &amp; Conditions</a>
            <a href="#" style={footStyles.legalLink}>Accessibility Statement</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }) {
  return (
    <div>
      <p style={footStyles.colTitle}>{title}</p>
      <ul style={footStyles.list}>
        {links.map((l) => (
          <li key={l}><a href="#" style={footStyles.link}>{l}</a></li>
        ))}
      </ul>
    </div>
  );
}

const footStyles = {
  section: { background: 'var(--navy-900)', color: '#fff' },
  inner: { maxWidth: 1200, margin: '0 auto', padding: '64px 32px 32px', display: 'grid', gridTemplateColumns: '1.5fr 1fr 1fr 1fr', gap: 40 },
  brand: { display: 'flex', flexDirection: 'column', gap: 14 },
  tagline: { fontSize: 14, color: 'rgba(255,255,255,0.7)', lineHeight: 1.5, maxWidth: 280, margin: 0 },
  social: { display: 'flex', gap: 8, marginTop: 4 },
  socialIcon: { width: 32, height: 32, borderRadius: 999, background: 'rgba(255,255,255,0.08)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', color: '#fff', textDecoration: 'none' },
  colTitle: { fontSize: 11, fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--cyan-300)', margin: '0 0 14px' },
  list: { listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 8 },
  link: { color: 'rgba(255,255,255,0.85)', textDecoration: 'none', fontSize: 14 },
  contactLi: { fontSize: 14, color: 'rgba(255,255,255,0.85)', lineHeight: 1.5 },
  legal: { borderTop: '1px solid rgba(255,255,255,0.1)', marginTop: 16 },
  legalInner: { maxWidth: 1200, margin: '0 auto', padding: '20px 32px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: 12, color: 'rgba(255,255,255,0.55)', flexWrap: 'wrap', gap: 12 },
  legalLink: { color: 'rgba(255,255,255,0.55)', textDecoration: 'none' },
};
