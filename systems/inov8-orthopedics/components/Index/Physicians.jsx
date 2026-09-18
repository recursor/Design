// Physicians.jsx — "Meet our physicians" grid.
// 4 board-certified surgeons from the live site, with the
// distinctive "FirstName **LastName**" emphasis treatment.

const PHYSICIANS = [
  {
    first: 'Keith P.', last: 'Aldrich', creds: 'M.D.',
    title: 'Board-Certified Orthopedic Surgeon',
    blurb: 'Sees patients with general orthopedic conditions and specializes in the hand and upper extremities.',
    cta: 'call',
  },
  {
    first: 'Stefan', last: 'Kreuzer', creds: 'M.D., MSc',
    title: 'Board-Certified Orthopedic Surgeon',
    blurb: 'Specializes in outpatient total joint replacement and computer-assisted joint replacement surgery.',
    cta: 'call',
  },
  {
    first: 'Dharmpal', last: 'Vansadia', creds: 'D.O.',
    title: 'Board-Certified Orthopedic Surgeon',
    blurb: 'Specializes in total joint replacement, arthroscopy, and sports-related injuries — particularly ACL and rotator cuff.',
    cta: 'book',
  },
  {
    first: 'Anthony', last: 'Gualtieri', creds: 'M.D.',
    title: 'Board-Certified Orthopedic Surgeon',
    blurb: 'Specializes in total joint replacement of the hip and knee, revision surgery, and fracture care.',
    cta: 'call',
  },
];

function PhysiciansSection({ onRequest }) {
  return (
    <section style={physStyles.section}>
      <div style={physStyles.inner}>
        <header style={physStyles.head}>
          <p className="eyebrow" style={{ margin: 0 }}>Our Team</p>
          <h2 style={physStyles.h2}>Meet our physicians</h2>
          <hr className="gradient-rule" style={{ margin: '16px auto' }} />
          <p style={physStyles.lead}>
            Board-certified orthopedic surgeons, physician assistants, and licensed physical therapists — the minds
            behind our individualized approach to treatment, rehabilitation, and surgical intervention.
          </p>
        </header>

        <div style={physStyles.grid}>
          {PHYSICIANS.map((p) => (
            <PhysicianCard key={p.last} physician={p} onRequest={onRequest} />
          ))}
        </div>

        <div style={physStyles.allLink}>
          <a href="#" style={{ color: 'var(--cyan-700)', fontSize: 14, fontWeight: 600, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 4 }}>
            Learn more about our team <i data-lucide="chevron-right" style={{ width: 14, height: 14 }}></i>
          </a>
        </div>
      </div>
    </section>
  );
}

function PhysicianCard({ physician, onRequest }) {
  const [hover, setHover] = React.useState(false);
  return (
    <article
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{ ...physStyles.card, transform: hover ? 'translateY(-2px)' : 'translateY(0)', boxShadow: hover ? '0 8px 24px -8px rgba(32,38,90,0.16), 0 2px 6px rgba(32,38,90,0.06)' : '0 2px 6px rgba(32,38,90,0.06), 0 1px 2px rgba(32,38,90,0.04)' }}
    >
      <div style={physStyles.portrait}>
        <i data-lucide="user-round" style={{ width: 56, height: 56, color: '#fff', opacity: 0.85 }}></i>
      </div>
      <div style={physStyles.cardBody}>
        <div style={{ fontFamily: 'var(--font-display)', fontWeight: 300, fontSize: 26, lineHeight: 1.1, color: 'var(--fg-strong)' }}>
          {physician.first} <strong style={{ fontWeight: 600 }}>{physician.last}</strong>
        </div>
        <div style={physStyles.creds}>{physician.creds}</div>
        <div style={physStyles.title}>{physician.title}</div>
        <p style={physStyles.blurb}>{physician.blurb}</p>
        <div style={{ marginTop: 'auto', display: 'flex', gap: 8 }}>
          {physician.cta === 'book' ? (
            <button onClick={onRequest} style={physStyles.bookBtn}>Book online</button>
          ) : (
            <a href="tel:3465717500" style={physStyles.callBtn}>
              <i data-lucide="phone" style={{ width: 11, height: 11 }}></i> (346) 571-7500
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

const physStyles = {
  section: { background: 'var(--bg-soft)' },
  inner: { maxWidth: 1200, margin: '0 auto', padding: '88px 32px' },
  head: { textAlign: 'center', maxWidth: 680, margin: '0 auto 40px' },
  h2: { fontFamily: 'var(--font-display)', fontWeight: 300, fontSize: 44, color: 'var(--fg-strong)', margin: '8px 0 0' },
  lead: { fontSize: 17, lineHeight: 1.55, color: 'var(--fg-muted)', margin: '14px auto 0', maxWidth: 540 },
  grid: { display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 20 },
  card: {
    background: '#fff', border: '1px solid var(--border)', borderRadius: 12,
    overflow: 'hidden', display: 'flex', flexDirection: 'column',
    transition: 'transform var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out)',
    cursor: 'pointer',
  },
  portrait: {
    aspectRatio: '1 / 1', background: 'linear-gradient(135deg, #4A7FB2, #20265A 75%, #163A6D)',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
  },
  cardBody: { padding: '18px 20px 20px', display: 'flex', flexDirection: 'column', gap: 6, flex: 1 },
  creds: { fontSize: 11, fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--fg-subtle)' },
  title: { fontSize: 12, color: 'var(--brand-strong)', fontWeight: 500 },
  blurb: { fontSize: 13, lineHeight: 1.5, color: 'var(--fg-muted)', margin: '6px 0 14px' },
  bookBtn: { fontFamily: 'var(--font-body)', fontSize: 12, fontWeight: 600, padding: '8px 14px', border: 0, borderRadius: 999, background: 'var(--cyan-500)', color: '#fff', cursor: 'pointer' },
  callBtn: { fontFamily: 'var(--font-body)', fontSize: 12, fontWeight: 500, padding: '8px 12px', border: '1px solid var(--border)', borderRadius: 999, background: '#fff', color: 'var(--fg-strong)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 5 },
  allLink: { textAlign: 'center', marginTop: 36 },
};
