// Header.jsx — INOV8 Orthopedics top utility bar + logo + primary nav.
// Sticky on scroll with a subtle backdrop blur; matches the live
// site's IA: Home · About · Procedures · Patients · Referring Doctors
// · Media · FAQ · Contact · Request Appointment.

function Header({ activeNav, onNav, onRequest }) {
  const items = [
    { id: 'home',       label: 'Home' },
    { id: 'about',      label: 'About',          hasMenu: true },
    { id: 'procedures', label: 'Procedures',     hasMenu: true },
    { id: 'patients',   label: 'Patients' },
    { id: 'referring',  label: 'Referring Doctors' },
    { id: 'media',      label: 'Media' },
    { id: 'faq',        label: 'FAQ' },
    { id: 'contact',    label: 'Contact' },
  ];

  return (
    <header style={headerStyles.root}>
      {/* Utility row */}
      <div style={headerStyles.utility}>
        <div style={headerStyles.utilityInner}>
          <a href="tel:3465717500" style={headerStyles.utilityLink}>
            <i data-lucide="phone" style={{ width: 12, height: 12 }}></i> (346) 571-7500
          </a>
          <span style={{ color: 'rgba(255,255,255,0.35)' }}>·</span>
          <a href="#" style={headerStyles.utilityLink}>
            <i data-lucide="map-pin" style={{ width: 12, height: 12 }}></i> 10496 Katy Fwy, Houston, TX
          </a>
          <span style={{ color: 'rgba(255,255,255,0.35)' }}>·</span>
          <span style={{ ...headerStyles.utilityLink, opacity: 0.85 }}>Mon – Fri  8:00 am – 5:00 pm</span>
        </div>
      </div>

      {/* Logo + nav row */}
      <div style={headerStyles.bar}>
        <div style={headerStyles.barInner}>
          <a href="#" onClick={(e) => { e.preventDefault(); onNav && onNav('home'); }} style={{ display: 'flex' }}>
            <img src="../../assets/inov8-logo.png" alt="INOV8 Orthopedics" style={{ height: 42 }} />
          </a>

          <nav style={headerStyles.nav}>
            {items.map((item) => {
              const active = activeNav === item.id;
              return (
                <a
                  key={item.id}
                  href="#"
                  onClick={(e) => { e.preventDefault(); onNav && onNav(item.id); }}
                  style={{ ...headerStyles.navLink, ...(active ? headerStyles.navLinkActive : null) }}
                >
                  {item.label}
                  {item.hasMenu && <i data-lucide="chevron-down" style={{ width: 12, height: 12, marginLeft: 3 }}></i>}
                </a>
              );
            })}
          </nav>

          <button onClick={onRequest} style={headerStyles.cta}>Request appointment</button>
        </div>
      </div>
    </header>
  );
}

const headerStyles = {
  root: { position: 'sticky', top: 0, zIndex: 50, background: '#fff', boxShadow: '0 1px 2px rgba(32,38,90,0.06)' },
  utility: { background: 'var(--navy-900)', color: '#fff' },
  utilityInner: {
    maxWidth: 1200, margin: '0 auto', padding: '8px 32px',
    display: 'flex', alignItems: 'center', gap: 14, fontSize: 12,
  },
  utilityLink: {
    color: 'rgba(255,255,255,0.92)', textDecoration: 'none',
    display: 'inline-flex', alignItems: 'center', gap: 6, fontWeight: 500,
  },
  bar: { background: 'rgba(255,255,255,0.94)', backdropFilter: 'blur(12px)' },
  barInner: {
    maxWidth: 1200, margin: '0 auto', padding: '14px 32px',
    display: 'flex', alignItems: 'center', gap: 24, justifyContent: 'space-between',
  },
  nav: { display: 'flex', alignItems: 'center', gap: 22, flex: 1, marginLeft: 40 },
  navLink: {
    fontSize: 13, fontWeight: 500, color: 'var(--fg-strong)', textDecoration: 'none',
    display: 'inline-flex', alignItems: 'center', cursor: 'pointer',
    padding: '6px 0',
    borderBottomWidth: 2,
    borderBottomStyle: 'solid',
    borderBottomColor: 'transparent',         // reserve the underline slot
  },
  navLinkActive: {
    color: 'var(--cyan-700)', fontWeight: 600,
    borderBottomColor: '#00A9D2',
  },
  cta: {
    fontFamily: 'var(--font-body)', fontSize: 13, fontWeight: 600,
    padding: '10px 18px', border: 0, borderRadius: 999,
    background: 'var(--cyan-500)', color: '#fff', cursor: 'pointer',
    boxShadow: '0 2px 6px rgba(32,38,90,0.06)',
    transition: 'background var(--dur-fast) var(--ease-out), transform var(--dur-fast) var(--ease-out)',
  },
};
