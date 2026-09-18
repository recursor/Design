// Procedures.jsx — anatomy-organized procedure tiles.
// Order matches the live site: Hip, Knee, Shoulder, Elbow,
// Sports Medicine, Physical Therapy.

const PROCEDURES = [
  { id: 'hip',      title: 'Hip procedures',      icon: 'bone',
    blurb: 'Traditional and outpatient total hip replacements, total hip revisions, and total hip arthroplasty.' },
  { id: 'knee',     title: 'Knee procedures',     icon: 'activity',
    blurb: 'Unicompartmental knee replacement, knee resurfacing, total knee replacements, and total knee revisions.' },
  { id: 'shoulder', title: 'Shoulder procedures', icon: 'move-up-right',
    blurb: 'Shoulder replacement, rotator cuff repair, labral tears, and overuse conditions.' },
  { id: 'elbow',    title: 'Elbow procedures',    icon: 'move-right',
    blurb: 'Medial epicondyle release (golfer’s elbow), lateral epicondylitis release (tennis elbow), and total elbow arthroplasty.' },
  { id: 'sports',   title: 'Sports medicine',     icon: 'heart-pulse',
    blurb: 'Surgical and non-surgical care for exercise-related injuries to the hips, knees, shoulders, and elbows.' },
  { id: 'pt',       title: 'Physical therapy',    icon: 'hand-helping',
    blurb: 'Non-surgical treatment plans and individualized post-surgery rehabilitation, in-house with our PTs.' },
];

function ProceduresSection({ onSelect, selected }) {
  return (
    <section style={procStyles.section}>
      <div style={procStyles.inner}>
        <header style={procStyles.head}>
          <p className="eyebrow" style={{ margin: 0 }}>Procedures &amp; Conditions</p>
          <h2 style={procStyles.h2}>Our innovative orthopedic procedures</h2>
          <hr className="gradient-rule" />
        </header>

        <div style={procStyles.grid}>
          {PROCEDURES.map((p) => (
            <ProcedureTile
              key={p.id}
              proc={p}
              active={selected === p.id}
              onClick={() => onSelect && onSelect(p.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProcedureTile({ proc, active, onClick }) {
  const [hover, setHover] = React.useState(false);
  const lifted = hover || active;
  return (
    <article
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={onClick}
      style={{ ...procStyles.tile, transform: lifted ? 'translateY(-3px)' : 'translateY(0)', boxShadow: lifted ? '0 24px 48px -16px rgba(32,38,90,0.18), 0 8px 16px -8px rgba(32,38,90,0.08)' : '0 2px 6px rgba(32,38,90,0.06), 0 1px 2px rgba(32,38,90,0.04)' }}
    >
      <div style={procStyles.image}>
        <i data-lucide={proc.icon} style={{ width: 56, height: 56, color: '#fff', opacity: 0.7, transform: lifted ? 'scale(1.06)' : 'scale(1)', transition: 'transform var(--dur-base) var(--ease-out)' }}></i>
      </div>
      <div style={procStyles.body}>
        <h3 style={procStyles.title}>{proc.title}</h3>
        <hr style={{ ...procStyles.rule, width: lifted ? 56 : 32 }} />
        <p style={procStyles.blurb}>{proc.blurb}</p>
        <div style={procStyles.more}>
          Learn more <i data-lucide="chevron-right" style={{ width: 12, height: 12 }}></i>
        </div>
      </div>
    </article>
  );
}

const procStyles = {
  section: { background: '#fff' },
  inner: { maxWidth: 1200, margin: '0 auto', padding: '88px 32px' },
  head: { maxWidth: 720, margin: '0 0 40px' },
  h2: { fontFamily: 'var(--font-display)', fontWeight: 300, fontSize: 44, color: 'var(--fg-strong)', margin: '8px 0 0' },
  grid: { display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 },
  tile: {
    background: '#fff', border: '1px solid var(--border)', borderRadius: 12,
    overflow: 'hidden', display: 'flex', flexDirection: 'column', cursor: 'pointer',
    transition: 'transform var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out)',
  },
  image: {
    aspectRatio: '4 / 3',
    background: 'linear-gradient(135deg, var(--neutral-200), var(--neutral-300))',
    display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden',
  },
  body: { padding: '20px 22px 22px', display: 'flex', flexDirection: 'column' },
  title: { fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 22, color: 'var(--fg-strong)', margin: 0 },
  rule: { border: 0, height: 3, borderRadius: 2, background: 'var(--inov8-gradient)', margin: '8px 0 10px', transition: 'width var(--dur-base) var(--ease-out)' },
  blurb: { fontSize: 14, lineHeight: 1.5, color: 'var(--fg-muted)', margin: '0 0 14px' },
  more: { fontSize: 13, fontWeight: 600, color: 'var(--cyan-700)', display: 'inline-flex', alignItems: 'center', gap: 4 },
};
