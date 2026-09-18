/* @ds-bundle: {"format":3,"namespace":"INOV8OrthopedicsDesignSystem_137bbb","components":[],"sourceHashes":{"ui_kits/website/Appointment.jsx":"159cee744769","ui_kits/website/Header.jsx":"e10ad36bf23b","ui_kits/website/Hero.jsx":"2e1f7b3248b4","ui_kits/website/LocationAndFooter.jsx":"175dd53bbe7c","ui_kits/website/Mission.jsx":"cefdef36242c","ui_kits/website/Physicians.jsx":"a4d51be3b880","ui_kits/website/Procedures.jsx":"d0bf66c63c01"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.INOV8OrthopedicsDesignSystem_137bbb = window.INOV8OrthopedicsDesignSystem_137bbb || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// ui_kits/website/Appointment.jsx
try { (() => {
// Appointment.jsx — request-appointment form, mirrors the form on
// the live site. Renders fully interactive (state local) — submits
// flip to a success state and back via a "Request another" button.

function AppointmentSection() {
  const [state, setState] = React.useState({
    first: '',
    last: '',
    phone: '',
    email: '',
    insurance: '',
    date: '',
    referred: '',
    message: '',
    consent: false
  });
  const [submitted, setSubmitted] = React.useState(false);
  const set = k => e => setState(s => ({
    ...s,
    [k]: e.target ? e.target.type === 'checkbox' ? e.target.checked : e.target.value : e
  }));
  const submit = e => {
    e.preventDefault();
    setSubmitted(true);
  };
  return /*#__PURE__*/React.createElement("section", {
    id: "appointment",
    style: apStyles.section
  }, /*#__PURE__*/React.createElement("div", {
    style: apStyles.inner
  }, /*#__PURE__*/React.createElement("header", {
    style: apStyles.head
  }, /*#__PURE__*/React.createElement("p", {
    className: "eyebrow",
    style: {
      margin: 0
    }
  }, "Get Started"), /*#__PURE__*/React.createElement("h2", {
    style: apStyles.h2
  }, "Schedule your appointment"), /*#__PURE__*/React.createElement("hr", {
    className: "gradient-rule"
  }), /*#__PURE__*/React.createElement("p", {
    style: apStyles.lead
  }, "Use the form below and a coordinator will reach out within one business day.")), /*#__PURE__*/React.createElement("div", {
    style: apStyles.card
  }, submitted ? /*#__PURE__*/React.createElement("div", {
    style: apStyles.success
  }, /*#__PURE__*/React.createElement("div", {
    style: apStyles.successIcon
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "check",
    style: {
      width: 28,
      height: 28,
      color: '#fff'
    }
  })), /*#__PURE__*/React.createElement("h3", {
    style: apStyles.successTitle
  }, "Request received"), /*#__PURE__*/React.createElement("p", {
    style: apStyles.successCopy
  }, "Thanks", state.first ? `, ${state.first}` : '', ". A coordinator from INOV8 Orthopedics will follow up at", state.email ? /*#__PURE__*/React.createElement("strong", {
    style: {
      color: 'var(--fg-strong)'
    }
  }, " ", state.email) : ' the contact you provided', " within one business day."), /*#__PURE__*/React.createElement("button", {
    onClick: () => {
      setSubmitted(false);
      setState({
        first: '',
        last: '',
        phone: '',
        email: '',
        insurance: '',
        date: '',
        referred: '',
        message: '',
        consent: false
      });
    },
    style: apStyles.againBtn
  }, "Request another")) : /*#__PURE__*/React.createElement("form", {
    onSubmit: submit,
    style: apStyles.form
  }, /*#__PURE__*/React.createElement(Field, {
    label: "First name",
    required: true
  }, /*#__PURE__*/React.createElement("input", {
    value: state.first,
    onChange: set('first'),
    style: apStyles.input
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Last name",
    required: true
  }, /*#__PURE__*/React.createElement("input", {
    value: state.last,
    onChange: set('last'),
    style: apStyles.input
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Phone",
    required: true
  }, /*#__PURE__*/React.createElement("input", {
    type: "tel",
    value: state.phone,
    onChange: set('phone'),
    style: apStyles.input
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Email",
    required: true
  }, /*#__PURE__*/React.createElement("input", {
    type: "email",
    value: state.email,
    onChange: set('email'),
    style: apStyles.input
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Insurance provider"
  }, /*#__PURE__*/React.createElement("select", {
    value: state.insurance,
    onChange: set('insurance'),
    style: apStyles.input
  }, /*#__PURE__*/React.createElement("option", {
    value: ""
  }, "Select your provider"), /*#__PURE__*/React.createElement("option", null, "Blue Cross Blue Shield"), /*#__PURE__*/React.createElement("option", null, "Aetna"), /*#__PURE__*/React.createElement("option", null, "UnitedHealthcare"), /*#__PURE__*/React.createElement("option", null, "Cigna"), /*#__PURE__*/React.createElement("option", null, "Humana"), /*#__PURE__*/React.createElement("option", null, "Self-pay"), /*#__PURE__*/React.createElement("option", null, "Other"))), /*#__PURE__*/React.createElement(Field, {
    label: "Preferred date"
  }, /*#__PURE__*/React.createElement("input", {
    type: "text",
    placeholder: "MM / DD / YYYY",
    value: state.date,
    onChange: set('date'),
    style: apStyles.input
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Referred by",
    full: true
  }, /*#__PURE__*/React.createElement("input", {
    value: state.referred,
    onChange: set('referred'),
    placeholder: "Physician, friend, online search\u2026",
    style: apStyles.input
  })), /*#__PURE__*/React.createElement(Field, {
    label: "What can we do for you?",
    required: true,
    full: true
  }, /*#__PURE__*/React.createElement("textarea", {
    value: state.message,
    onChange: set('message'),
    rows: 4,
    style: {
      ...apStyles.input,
      resize: 'vertical'
    }
  })), /*#__PURE__*/React.createElement("label", {
    style: apStyles.consent
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    checked: state.consent,
    onChange: set('consent'),
    style: {
      accentColor: 'var(--cyan-500)',
      width: 16,
      height: 16
    }
  }), /*#__PURE__*/React.createElement("span", null, "I agree to be contacted by INOV8 Orthopedics and have read the ", /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      color: 'var(--cyan-700)'
    }
  }, "Privacy Policy"), ".")), /*#__PURE__*/React.createElement("div", {
    style: apStyles.actions
  }, /*#__PURE__*/React.createElement("button", {
    type: "submit",
    style: apStyles.submit
  }, "Request appointment"), /*#__PURE__*/React.createElement("p", {
    style: apStyles.disclaimer
  }, "Required fields are marked with ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--danger-500)'
    }
  }, "*"), ". This form does not transmit protected health information."))))));
}
function Field({
  label,
  required,
  full,
  children
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      gridColumn: full ? '1 / -1' : 'auto'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      fontWeight: 600,
      color: 'var(--fg-strong)'
    }
  }, label, required && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--danger-500)',
      marginLeft: 3
    }
  }, "*")), children);
}
const apStyles = {
  section: {
    background: '#fff'
  },
  inner: {
    maxWidth: 980,
    margin: '0 auto',
    padding: '88px 32px'
  },
  head: {
    maxWidth: 640,
    margin: '0 0 36px'
  },
  h2: {
    fontFamily: 'var(--font-display)',
    fontWeight: 300,
    fontSize: 40,
    color: 'var(--fg-strong)',
    margin: '8px 0 0'
  },
  lead: {
    fontSize: 17,
    lineHeight: 1.55,
    color: 'var(--fg-muted)',
    margin: '12px 0 0'
  },
  card: {
    background: 'var(--bg-soft)',
    border: '1px solid var(--border)',
    borderRadius: 16,
    padding: 32
  },
  form: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: 16
  },
  input: {
    fontFamily: 'var(--font-body)',
    fontSize: 14,
    padding: '11px 13px',
    border: '1px solid var(--border)',
    borderRadius: 6,
    outline: 'none',
    color: 'var(--fg)',
    background: '#fff',
    width: '100%',
    boxSizing: 'border-box'
  },
  consent: {
    gridColumn: '1 / -1',
    display: 'flex',
    alignItems: 'flex-start',
    gap: 10,
    fontSize: 13,
    color: 'var(--fg)',
    lineHeight: 1.45,
    marginTop: 4
  },
  actions: {
    gridColumn: '1 / -1',
    display: 'flex',
    alignItems: 'center',
    gap: 18,
    flexWrap: 'wrap',
    marginTop: 8
  },
  submit: {
    fontFamily: 'var(--font-body)',
    fontSize: 15,
    fontWeight: 600,
    padding: '14px 28px',
    border: 0,
    borderRadius: 999,
    background: 'var(--cyan-500)',
    color: '#fff',
    cursor: 'pointer',
    boxShadow: '0 2px 6px rgba(32,38,90,0.06)'
  },
  disclaimer: {
    fontSize: 12,
    color: 'var(--fg-subtle)',
    margin: 0,
    lineHeight: 1.45,
    maxWidth: 420
  },
  success: {
    textAlign: 'center',
    padding: '24px 12px 12px'
  },
  successIcon: {
    width: 56,
    height: 56,
    borderRadius: '50%',
    background: 'var(--success-500)',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 14
  },
  successTitle: {
    fontFamily: 'var(--font-display)',
    fontWeight: 400,
    fontSize: 28,
    color: 'var(--fg-strong)',
    margin: '0 0 8px'
  },
  successCopy: {
    fontSize: 15,
    color: 'var(--fg-muted)',
    maxWidth: 460,
    margin: '0 auto 18px',
    lineHeight: 1.5
  },
  againBtn: {
    fontFamily: 'var(--font-body)',
    fontSize: 13,
    fontWeight: 600,
    padding: '10px 18px',
    border: '1px solid var(--border-strong)',
    borderRadius: 999,
    background: '#fff',
    color: 'var(--fg-strong)',
    cursor: 'pointer'
  }
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Appointment.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Header.jsx
try { (() => {
// Header.jsx — INOV8 Orthopedics top utility bar + logo + primary nav.
// Sticky on scroll with a subtle backdrop blur; matches the live
// site's IA: Home · About · Procedures · Patients · Referring Doctors
// · Media · FAQ · Contact · Request Appointment.

function Header({
  activeNav,
  onNav,
  onRequest
}) {
  const items = [{
    id: 'home',
    label: 'Home'
  }, {
    id: 'about',
    label: 'About',
    hasMenu: true
  }, {
    id: 'procedures',
    label: 'Procedures',
    hasMenu: true
  }, {
    id: 'patients',
    label: 'Patients'
  }, {
    id: 'referring',
    label: 'Referring Doctors'
  }, {
    id: 'media',
    label: 'Media'
  }, {
    id: 'faq',
    label: 'FAQ'
  }, {
    id: 'contact',
    label: 'Contact'
  }];
  return /*#__PURE__*/React.createElement("header", {
    style: headerStyles.root
  }, /*#__PURE__*/React.createElement("div", {
    style: headerStyles.utility
  }, /*#__PURE__*/React.createElement("div", {
    style: headerStyles.utilityInner
  }, /*#__PURE__*/React.createElement("a", {
    href: "tel:3465717500",
    style: headerStyles.utilityLink
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "phone",
    style: {
      width: 12,
      height: 12
    }
  }), " (346) 571-7500"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'rgba(255,255,255,0.35)'
    }
  }, "\xB7"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: headerStyles.utilityLink
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "map-pin",
    style: {
      width: 12,
      height: 12
    }
  }), " 10496 Katy Fwy, Houston, TX"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'rgba(255,255,255,0.35)'
    }
  }, "\xB7"), /*#__PURE__*/React.createElement("span", {
    style: {
      ...headerStyles.utilityLink,
      opacity: 0.85
    }
  }, "Mon \u2013 Fri  8:00 am \u2013 5:00 pm"))), /*#__PURE__*/React.createElement("div", {
    style: headerStyles.bar
  }, /*#__PURE__*/React.createElement("div", {
    style: headerStyles.barInner
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNav && onNav('home');
    },
    style: {
      display: 'flex'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/inov8-logo.png",
    alt: "INOV8 Orthopedics",
    style: {
      height: 42
    }
  })), /*#__PURE__*/React.createElement("nav", {
    style: headerStyles.nav
  }, items.map(item => {
    const active = activeNav === item.id;
    return /*#__PURE__*/React.createElement("a", {
      key: item.id,
      href: "#",
      onClick: e => {
        e.preventDefault();
        onNav && onNav(item.id);
      },
      style: {
        ...headerStyles.navLink,
        ...(active ? headerStyles.navLinkActive : null)
      }
    }, item.label, item.hasMenu && /*#__PURE__*/React.createElement("i", {
      "data-lucide": "chevron-down",
      style: {
        width: 12,
        height: 12,
        marginLeft: 3
      }
    }));
  })), /*#__PURE__*/React.createElement("button", {
    onClick: onRequest,
    style: headerStyles.cta
  }, "Request appointment"))));
}
const headerStyles = {
  root: {
    position: 'sticky',
    top: 0,
    zIndex: 50,
    background: '#fff',
    boxShadow: '0 1px 2px rgba(32,38,90,0.06)'
  },
  utility: {
    background: 'var(--navy-900)',
    color: '#fff'
  },
  utilityInner: {
    maxWidth: 1200,
    margin: '0 auto',
    padding: '8px 32px',
    display: 'flex',
    alignItems: 'center',
    gap: 14,
    fontSize: 12
  },
  utilityLink: {
    color: 'rgba(255,255,255,0.92)',
    textDecoration: 'none',
    display: 'inline-flex',
    alignItems: 'center',
    gap: 6,
    fontWeight: 500
  },
  bar: {
    background: 'rgba(255,255,255,0.94)',
    backdropFilter: 'blur(12px)'
  },
  barInner: {
    maxWidth: 1200,
    margin: '0 auto',
    padding: '14px 32px',
    display: 'flex',
    alignItems: 'center',
    gap: 24,
    justifyContent: 'space-between'
  },
  nav: {
    display: 'flex',
    alignItems: 'center',
    gap: 22,
    flex: 1,
    marginLeft: 40
  },
  navLink: {
    fontSize: 13,
    fontWeight: 500,
    color: 'var(--fg-strong)',
    textDecoration: 'none',
    display: 'inline-flex',
    alignItems: 'center',
    cursor: 'pointer',
    padding: '6px 0',
    borderBottomWidth: 2,
    borderBottomStyle: 'solid',
    borderBottomColor: 'transparent' // reserve the underline slot
  },
  navLinkActive: {
    color: 'var(--cyan-700)',
    fontWeight: 600,
    borderBottomColor: '#00A9D2'
  },
  cta: {
    fontFamily: 'var(--font-body)',
    fontSize: 13,
    fontWeight: 600,
    padding: '10px 18px',
    border: 0,
    borderRadius: 999,
    background: 'var(--cyan-500)',
    color: '#fff',
    cursor: 'pointer',
    boxShadow: '0 2px 6px rgba(32,38,90,0.06)',
    transition: 'background var(--dur-fast) var(--ease-out), transform var(--dur-fast) var(--ease-out)'
  }
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Header.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Hero.jsx
try { (() => {
// Hero.jsx — full-width hero section with eyebrow / display heading /
// gradient rule / lead / CTA pair / right-side image placeholder.
// Matches the live site's hero copy verbatim.

function Hero({
  onRequest
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: heroStyles.section
  }, /*#__PURE__*/React.createElement("div", {
    style: heroStyles.inner
  }, /*#__PURE__*/React.createElement("div", {
    style: heroStyles.text
  }, /*#__PURE__*/React.createElement("p", {
    className: "eyebrow",
    style: {
      margin: 0,
      color: 'var(--cyan-600)'
    }
  }, "Welcome to INOV8 Orthopedics"), /*#__PURE__*/React.createElement("h1", {
    style: heroStyles.h1
  }, "Orthopedic surgery, sports medicine, and physical therapy in ", /*#__PURE__*/React.createElement("span", {
    className: "gradient-text",
    style: {
      fontWeight: 500
    }
  }, "Houston, TX"), "."), /*#__PURE__*/React.createElement("hr", {
    className: "gradient-rule"
  }), /*#__PURE__*/React.createElement("p", {
    style: heroStyles.lead
  }, "Innovative orthopedic care for exceptional patient outcomes. Our team specializes in outpatient total joint replacement and the full range of musculoskeletal, orthopedic, and arthritic conditions."), /*#__PURE__*/React.createElement("div", {
    style: heroStyles.ctas
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onRequest,
    style: heroStyles.primary
  }, "Request appointment"), /*#__PURE__*/React.createElement("a", {
    href: "tel:3465717500",
    style: heroStyles.secondary
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "phone",
    style: {
      width: 14,
      height: 14
    }
  }), " (346) 571-7500")), /*#__PURE__*/React.createElement("div", {
    style: heroStyles.proof
  }, /*#__PURE__*/React.createElement(Stat, {
    n: "4",
    label: "Board-certified surgeons"
  }), /*#__PURE__*/React.createElement(Divider, null), /*#__PURE__*/React.createElement(Stat, {
    n: "6",
    label: "Specialty areas"
  }), /*#__PURE__*/React.createElement(Divider, null), /*#__PURE__*/React.createElement(Stat, {
    n: "1",
    label: "ASC in Texas with AAAHC orthopedic certification",
    small: true
  }))), /*#__PURE__*/React.createElement("div", {
    style: heroStyles.media
  }, /*#__PURE__*/React.createElement("div", {
    style: heroStyles.mediaCard
  }, /*#__PURE__*/React.createElement("div", {
    style: heroStyles.mediaImg
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "image",
    style: {
      width: 48,
      height: 48,
      color: '#fff',
      opacity: 0.6
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: heroStyles.mediaCaption
  }, "Photography placeholder \xB7 physician with patient")), /*#__PURE__*/React.createElement("div", {
    style: heroStyles.floatChip
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      borderRadius: 999,
      background: 'var(--success-500)',
      display: 'inline-block'
    }
  }), "Accepting new patients")))));
}
function Stat({
  n,
  label,
  small
}) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 300,
      fontSize: 38,
      lineHeight: 1,
      color: 'var(--fg-strong)'
    }
  }, n), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: small ? 11 : 12,
      color: 'var(--fg-muted)',
      marginTop: 4,
      maxWidth: 160,
      lineHeight: 1.35
    }
  }, label));
}
function Divider() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: 1,
      alignSelf: 'stretch',
      background: 'var(--divider)'
    }
  });
}
const heroStyles = {
  section: {
    background: '#fff',
    borderBottom: '1px solid var(--divider)'
  },
  inner: {
    maxWidth: 1200,
    margin: '0 auto',
    padding: '72px 32px 64px',
    display: 'grid',
    gridTemplateColumns: '1.05fr 0.95fr',
    gap: 64,
    alignItems: 'center'
  },
  text: {
    minWidth: 0
  },
  h1: {
    fontFamily: 'var(--font-display)',
    fontWeight: 300,
    fontSize: 56,
    lineHeight: 1.05,
    letterSpacing: '-0.01em',
    color: 'var(--fg-strong)',
    margin: '12px 0 4px'
  },
  lead: {
    fontSize: 18,
    lineHeight: 1.55,
    color: 'var(--fg-muted)',
    maxWidth: 520,
    margin: '8px 0 24px'
  },
  ctas: {
    display: 'flex',
    alignItems: 'center',
    gap: 12,
    marginBottom: 36
  },
  primary: {
    fontFamily: 'var(--font-body)',
    fontSize: 15,
    fontWeight: 600,
    padding: '14px 26px',
    border: 0,
    borderRadius: 999,
    background: 'var(--cyan-500)',
    color: '#fff',
    cursor: 'pointer',
    boxShadow: '0 2px 6px rgba(32,38,90,0.08)'
  },
  secondary: {
    fontFamily: 'var(--font-body)',
    fontSize: 15,
    fontWeight: 600,
    padding: '12px 22px',
    border: '1.5px solid var(--border-strong)',
    borderRadius: 999,
    background: '#fff',
    color: 'var(--fg-strong)',
    textDecoration: 'none',
    display: 'inline-flex',
    alignItems: 'center',
    gap: 8
  },
  proof: {
    display: 'flex',
    alignItems: 'stretch',
    gap: 24
  },
  media: {
    position: 'relative'
  },
  mediaCard: {
    position: 'relative',
    borderRadius: 16,
    overflow: 'visible',
    boxShadow: '0 24px 48px -16px rgba(32,38,90,0.18), 0 8px 16px -8px rgba(32,38,90,0.08)'
  },
  mediaImg: {
    aspectRatio: '4 / 5',
    borderRadius: 16,
    background: 'linear-gradient(135deg, #4A7FB2, #20265A 70%, #163A6D)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 12
  },
  mediaCaption: {
    fontSize: 12,
    color: 'rgba(255,255,255,0.7)'
  },
  floatChip: {
    position: 'absolute',
    bottom: -16,
    left: -16,
    background: '#fff',
    padding: '10px 16px',
    borderRadius: 999,
    boxShadow: '0 8px 24px -8px rgba(32,38,90,0.16)',
    fontSize: 13,
    fontWeight: 600,
    color: 'var(--fg-strong)',
    display: 'inline-flex',
    alignItems: 'center',
    gap: 8
  }
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/LocationAndFooter.jsx
try { (() => {
// Location.jsx + Footer.jsx — final sections of the page.

function LocationSection() {
  return /*#__PURE__*/React.createElement("section", {
    style: locStyles.section
  }, /*#__PURE__*/React.createElement("div", {
    style: locStyles.inner
  }, /*#__PURE__*/React.createElement("header", {
    style: locStyles.head
  }, /*#__PURE__*/React.createElement("p", {
    className: "eyebrow",
    style: {
      margin: 0
    }
  }, "Visit Us"), /*#__PURE__*/React.createElement("h2", {
    style: locStyles.h2
  }, "INOV8 Orthopedics location"), /*#__PURE__*/React.createElement("hr", {
    className: "gradient-rule"
  })), /*#__PURE__*/React.createElement("div", {
    style: locStyles.grid
  }, /*#__PURE__*/React.createElement("div", {
    style: locStyles.map
  }, /*#__PURE__*/React.createElement("div", {
    style: locStyles.mapInner
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "map-pin",
    style: {
      width: 40,
      height: 40,
      color: 'var(--cyan-500)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--fg-subtle)',
      marginTop: 6
    }
  }, "Map placeholder \xB7 Google Maps embed"))), /*#__PURE__*/React.createElement("aside", {
    style: locStyles.card
  }, /*#__PURE__*/React.createElement("h3", {
    style: locStyles.cardTitle
  }, "Houston"), /*#__PURE__*/React.createElement("div", {
    style: locStyles.row
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "map-pin",
    style: {
      width: 16,
      height: 16,
      color: 'var(--cyan-500)',
      marginTop: 3,
      flex: '0 0 16px'
    }
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 500,
      color: 'var(--fg-strong)'
    }
  }, "10496 Katy Fwy, Suite 101"), /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'var(--fg-muted)'
    }
  }, "Houston, TX 77043"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: locStyles.link
  }, "Get directions ", /*#__PURE__*/React.createElement("i", {
    "data-lucide": "external-link",
    style: {
      width: 12,
      height: 12
    }
  })))), /*#__PURE__*/React.createElement("div", {
    style: locStyles.row
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "phone",
    style: {
      width: 16,
      height: 16,
      color: 'var(--cyan-500)',
      flex: '0 0 16px'
    }
  }), /*#__PURE__*/React.createElement("a", {
    href: "tel:3465717500",
    style: {
      color: 'var(--fg-strong)',
      fontWeight: 500,
      textDecoration: 'none'
    }
  }, "(346) 571-7500")), /*#__PURE__*/React.createElement("div", {
    style: locStyles.row
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "clock",
    style: {
      width: 16,
      height: 16,
      color: 'var(--cyan-500)',
      marginTop: 3,
      flex: '0 0 16px'
    }
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'var(--fg-strong)',
      fontWeight: 500
    }
  }, "Monday \u2013 Friday"), /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'var(--fg-muted)'
    }
  }, "8:00 am \u2013 5:00 pm")))))));
}
const locStyles = {
  section: {
    background: 'var(--bg-soft)'
  },
  inner: {
    maxWidth: 1200,
    margin: '0 auto',
    padding: '88px 32px'
  },
  head: {
    maxWidth: 640,
    margin: '0 0 32px'
  },
  h2: {
    fontFamily: 'var(--font-display)',
    fontWeight: 300,
    fontSize: 40,
    color: 'var(--fg-strong)',
    margin: '8px 0 0'
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: '1.5fr 1fr',
    gap: 24
  },
  map: {
    borderRadius: 16,
    overflow: 'hidden',
    border: '1px solid var(--border)',
    background: 'linear-gradient(135deg, #E6F6FB, #DDE2EA)',
    minHeight: 280,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  mapInner: {
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  card: {
    background: '#fff',
    borderRadius: 16,
    border: '1px solid var(--border)',
    padding: 28,
    display: 'flex',
    flexDirection: 'column',
    gap: 16
  },
  cardTitle: {
    fontFamily: 'var(--font-display)',
    fontWeight: 400,
    fontSize: 24,
    color: 'var(--fg-strong)',
    margin: 0
  },
  row: {
    display: 'flex',
    gap: 10,
    alignItems: 'flex-start',
    fontSize: 14,
    lineHeight: 1.5
  },
  link: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 4,
    fontSize: 13,
    color: 'var(--cyan-700)',
    textDecoration: 'none',
    fontWeight: 600,
    marginTop: 4
  }
};
function Footer() {
  return /*#__PURE__*/React.createElement("footer", {
    style: footStyles.section
  }, /*#__PURE__*/React.createElement("div", {
    style: footStyles.inner
  }, /*#__PURE__*/React.createElement("div", {
    style: footStyles.brand
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/inov8-logo.png",
    alt: "INOV8 Orthopedics",
    style: {
      height: 44,
      width: 'auto',
      alignSelf: 'flex-start',
      filter: 'brightness(0) invert(1)'
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: footStyles.tagline
  }, "Innovative orthopedic care for exceptional patient outcomes."), /*#__PURE__*/React.createElement("div", {
    style: footStyles.social
  }, /*#__PURE__*/React.createElement("a", {
    href: "https://www.facebook.com/inov8orthopedics",
    "aria-label": "Facebook",
    style: footStyles.socialIcon
  }, /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M13.5 21v-7.5h2.5l.4-3.1h-2.9V8.4c0-.9.25-1.5 1.55-1.5H16.5V4.1c-.28-.04-1.24-.12-2.36-.12-2.34 0-3.94 1.43-3.94 4.05v2.26H7.7v3.1h2.5V21h3.3Z"
  }))), /*#__PURE__*/React.createElement("a", {
    href: "https://www.instagram.com/inov8orthopedics/",
    "aria-label": "Instagram",
    style: footStyles.socialIcon
  }, /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.6",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "3",
    y: "3",
    width: "18",
    height: "18",
    rx: "5"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "4"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "17.2",
    cy: "6.8",
    r: "0.9",
    fill: "currentColor",
    stroke: "none"
  }))))), /*#__PURE__*/React.createElement(FooterCol, {
    title: "Quick Links",
    links: ['Home', 'About Us', 'Procedures & Conditions', 'Patients', 'Media', 'FAQ']
  }), /*#__PURE__*/React.createElement(FooterCol, {
    title: "Procedures",
    links: ['Hip', 'Knee', 'Shoulder', 'Elbow', 'Sports Medicine', 'Physical Therapy']
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    style: footStyles.colTitle
  }, "Contact"), /*#__PURE__*/React.createElement("ul", {
    style: footStyles.list
  }, /*#__PURE__*/React.createElement("li", {
    style: footStyles.contactLi
  }, "10496 Katy Fwy, Suite 101", /*#__PURE__*/React.createElement("br", null), "Houston, TX 77043"), /*#__PURE__*/React.createElement("li", {
    style: footStyles.contactLi
  }, /*#__PURE__*/React.createElement("a", {
    href: "tel:3465717500",
    style: footStyles.link
  }, "(346) 571-7500")), /*#__PURE__*/React.createElement("li", {
    style: footStyles.contactLi
  }, "Mon \u2013 Fri  8:00 am \u2013 5:00 pm")))), /*#__PURE__*/React.createElement("div", {
    style: footStyles.legal
  }, /*#__PURE__*/React.createElement("div", {
    style: footStyles.legalInner
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2026 INOV8 Orthopedics"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 18
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: footStyles.legalLink
  }, "Privacy Policy"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: footStyles.legalLink
  }, "Terms & Conditions"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: footStyles.legalLink
  }, "Accessibility Statement")))));
}
function FooterCol({
  title,
  links
}) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    style: footStyles.colTitle
  }, title), /*#__PURE__*/React.createElement("ul", {
    style: footStyles.list
  }, links.map(l => /*#__PURE__*/React.createElement("li", {
    key: l
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: footStyles.link
  }, l)))));
}
const footStyles = {
  section: {
    background: 'var(--navy-900)',
    color: '#fff'
  },
  inner: {
    maxWidth: 1200,
    margin: '0 auto',
    padding: '64px 32px 32px',
    display: 'grid',
    gridTemplateColumns: '1.5fr 1fr 1fr 1fr',
    gap: 40
  },
  brand: {
    display: 'flex',
    flexDirection: 'column',
    gap: 14
  },
  tagline: {
    fontSize: 14,
    color: 'rgba(255,255,255,0.7)',
    lineHeight: 1.5,
    maxWidth: 280,
    margin: 0
  },
  social: {
    display: 'flex',
    gap: 8,
    marginTop: 4
  },
  socialIcon: {
    width: 32,
    height: 32,
    borderRadius: 999,
    background: 'rgba(255,255,255,0.08)',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff',
    textDecoration: 'none'
  },
  colTitle: {
    fontSize: 11,
    fontWeight: 600,
    letterSpacing: '0.14em',
    textTransform: 'uppercase',
    color: 'var(--cyan-300)',
    margin: '0 0 14px'
  },
  list: {
    listStyle: 'none',
    margin: 0,
    padding: 0,
    display: 'flex',
    flexDirection: 'column',
    gap: 8
  },
  link: {
    color: 'rgba(255,255,255,0.85)',
    textDecoration: 'none',
    fontSize: 14
  },
  contactLi: {
    fontSize: 14,
    color: 'rgba(255,255,255,0.85)',
    lineHeight: 1.5
  },
  legal: {
    borderTop: '1px solid rgba(255,255,255,0.1)',
    marginTop: 16
  },
  legalInner: {
    maxWidth: 1200,
    margin: '0 auto',
    padding: '20px 32px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    fontSize: 12,
    color: 'rgba(255,255,255,0.55)',
    flexWrap: 'wrap',
    gap: 12
  },
  legalLink: {
    color: 'rgba(255,255,255,0.55)',
    textDecoration: 'none'
  }
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/LocationAndFooter.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Mission.jsx
try { (() => {
// Mission.jsx — copy block + tech list, on a soft surface
// with the dark-CTA block tucked below.

const TECH = ['Corin OPS', 'THINK Surgical TSolution One®', 'OrthoSensor VERASENSE™', 'Bodycad Unicompartmental Knee System', 'Intellijoint HIP®'];
function MissionSection({
  onRequest
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: missionStyles.section
  }, /*#__PURE__*/React.createElement("div", {
    style: missionStyles.inner
  }, /*#__PURE__*/React.createElement("div", {
    style: missionStyles.text
  }, /*#__PURE__*/React.createElement("p", {
    className: "eyebrow",
    style: {
      margin: 0
    }
  }, "Our Mission"), /*#__PURE__*/React.createElement("h2", {
    style: missionStyles.h2
  }, "\"Innovate\" isn\u2019t just our namesake \u2014 it\u2019s a way of life."), /*#__PURE__*/React.createElement("hr", {
    className: "gradient-rule"
  }), /*#__PURE__*/React.createElement("p", {
    style: missionStyles.lead
  }, "We provide Texas residents with premier orthopedic care through cutting-edge surgical interventions and the latest rehabilitation protocols. From check-in to recovery, every part of your experience with INOV8 is efficient and patient-focused."), /*#__PURE__*/React.createElement("p", {
    style: missionStyles.body
  }, "For total joint replacement, we utilize the latest advancements in surgical technology so we can perform complex procedures \u2014 like total joint replacements \u2014 as outpatient procedures.")), /*#__PURE__*/React.createElement("aside", {
    style: missionStyles.techCard
  }, /*#__PURE__*/React.createElement("p", {
    className: "eyebrow",
    style: {
      margin: 0,
      color: 'var(--cyan-600)'
    }
  }, "Surgical technology"), /*#__PURE__*/React.createElement("h3", {
    style: missionStyles.techTitle
  }, "What we operate with"), /*#__PURE__*/React.createElement("ul", {
    style: missionStyles.techList
  }, TECH.map(t => /*#__PURE__*/React.createElement("li", {
    key: t,
    style: missionStyles.techItem
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "check",
    style: {
      width: 16,
      height: 16,
      color: 'var(--teal-500)',
      flex: '0 0 16px',
      marginTop: 2
    }
  }), /*#__PURE__*/React.createElement("span", null, t)))), /*#__PURE__*/React.createElement("p", {
    style: missionStyles.techFoot
  }, "Outpatient joint replacement reduces infection risk and improves overall recovery."))), /*#__PURE__*/React.createElement("div", {
    style: missionStyles.ctaWrap
  }, /*#__PURE__*/React.createElement("div", {
    style: missionStyles.cta
  }, /*#__PURE__*/React.createElement("div", {
    style: missionStyles.ctaGradient
  }), /*#__PURE__*/React.createElement("div", {
    style: missionStyles.ctaInner
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    className: "eyebrow",
    style: {
      margin: 0,
      color: 'var(--cyan-300)'
    }
  }, "Schedule"), /*#__PURE__*/React.createElement("h3", {
    style: missionStyles.ctaTitle
  }, "Ready to move without pain?"), /*#__PURE__*/React.createElement("p", {
    style: missionStyles.ctaCopy
  }, "Request an appointment and a coordinator will reach out within one business day.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onRequest,
    style: missionStyles.ctaPrimary
  }, "Request appointment"), /*#__PURE__*/React.createElement("a", {
    href: "tel:3465717500",
    style: missionStyles.ctaSecondary
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "phone",
    style: {
      width: 13,
      height: 13
    }
  }), " (346) 571-7500"))))));
}
const missionStyles = {
  section: {
    background: 'var(--bg-soft)'
  },
  inner: {
    maxWidth: 1200,
    margin: '0 auto',
    padding: '88px 32px 40px',
    display: 'grid',
    gridTemplateColumns: '1.2fr 0.8fr',
    gap: 64,
    alignItems: 'start'
  },
  text: {
    minWidth: 0
  },
  h2: {
    fontFamily: 'var(--font-display)',
    fontWeight: 300,
    fontSize: 40,
    color: 'var(--fg-strong)',
    margin: '8px 0 0',
    lineHeight: 1.15
  },
  lead: {
    fontSize: 18,
    lineHeight: 1.55,
    color: 'var(--fg-muted)',
    margin: '8px 0 16px'
  },
  body: {
    fontSize: 15,
    lineHeight: 1.6,
    color: 'var(--fg)',
    margin: 0
  },
  techCard: {
    background: '#fff',
    border: '1px solid var(--border)',
    borderRadius: 16,
    padding: 28,
    boxShadow: '0 8px 24px -8px rgba(32,38,90,0.08)'
  },
  techTitle: {
    fontFamily: 'var(--font-display)',
    fontWeight: 400,
    fontSize: 22,
    color: 'var(--fg-strong)',
    margin: '6px 0 14px'
  },
  techList: {
    listStyle: 'none',
    margin: 0,
    padding: 0,
    display: 'flex',
    flexDirection: 'column',
    gap: 10
  },
  techItem: {
    display: 'flex',
    gap: 10,
    fontSize: 14,
    color: 'var(--fg)',
    lineHeight: 1.4
  },
  techFoot: {
    fontSize: 12,
    color: 'var(--fg-subtle)',
    margin: '16px 0 0',
    borderTop: '1px solid var(--divider)',
    paddingTop: 14,
    lineHeight: 1.5
  },
  ctaWrap: {
    maxWidth: 1200,
    margin: '0 auto',
    padding: '24px 32px 88px'
  },
  cta: {
    position: 'relative',
    overflow: 'hidden',
    borderRadius: 16,
    background: 'var(--navy-900)'
  },
  ctaGradient: {
    position: 'absolute',
    inset: 0,
    background: 'var(--inov8-gradient)',
    opacity: 0.16
  },
  ctaInner: {
    position: 'relative',
    padding: '36px 40px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 32,
    flexWrap: 'wrap'
  },
  ctaTitle: {
    fontFamily: 'var(--font-display)',
    fontWeight: 300,
    fontSize: 32,
    color: '#fff',
    margin: '6px 0 4px'
  },
  ctaCopy: {
    fontSize: 14,
    color: 'rgba(255,255,255,0.78)',
    margin: 0,
    maxWidth: 420
  },
  ctaPrimary: {
    fontFamily: 'var(--font-body)',
    fontSize: 14,
    fontWeight: 600,
    padding: '12px 22px',
    border: 0,
    borderRadius: 999,
    background: '#fff',
    color: 'var(--navy-900)',
    cursor: 'pointer'
  },
  ctaSecondary: {
    fontFamily: 'var(--font-body)',
    fontSize: 14,
    fontWeight: 600,
    padding: '12px 22px',
    border: '1.5px solid rgba(255,255,255,0.45)',
    borderRadius: 999,
    background: 'transparent',
    color: '#fff',
    textDecoration: 'none',
    display: 'inline-flex',
    alignItems: 'center',
    gap: 8
  }
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Mission.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Physicians.jsx
try { (() => {
// Physicians.jsx — "Meet our physicians" grid.
// 4 board-certified surgeons from the live site, with the
// distinctive "FirstName **LastName**" emphasis treatment.

const PHYSICIANS = [{
  first: 'Keith P.',
  last: 'Aldrich',
  creds: 'M.D.',
  title: 'Board-Certified Orthopedic Surgeon',
  blurb: 'Sees patients with general orthopedic conditions and specializes in the hand and upper extremities.',
  cta: 'call'
}, {
  first: 'Stefan',
  last: 'Kreuzer',
  creds: 'M.D., MSc',
  title: 'Board-Certified Orthopedic Surgeon',
  blurb: 'Specializes in outpatient total joint replacement and computer-assisted joint replacement surgery.',
  cta: 'call'
}, {
  first: 'Dharmpal',
  last: 'Vansadia',
  creds: 'D.O.',
  title: 'Board-Certified Orthopedic Surgeon',
  blurb: 'Specializes in total joint replacement, arthroscopy, and sports-related injuries — particularly ACL and rotator cuff.',
  cta: 'book'
}, {
  first: 'Anthony',
  last: 'Gualtieri',
  creds: 'M.D.',
  title: 'Board-Certified Orthopedic Surgeon',
  blurb: 'Specializes in total joint replacement of the hip and knee, revision surgery, and fracture care.',
  cta: 'call'
}];
function PhysiciansSection({
  onRequest
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: physStyles.section
  }, /*#__PURE__*/React.createElement("div", {
    style: physStyles.inner
  }, /*#__PURE__*/React.createElement("header", {
    style: physStyles.head
  }, /*#__PURE__*/React.createElement("p", {
    className: "eyebrow",
    style: {
      margin: 0
    }
  }, "Our Team"), /*#__PURE__*/React.createElement("h2", {
    style: physStyles.h2
  }, "Meet our physicians"), /*#__PURE__*/React.createElement("hr", {
    className: "gradient-rule",
    style: {
      margin: '16px auto'
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: physStyles.lead
  }, "Board-certified orthopedic surgeons, physician assistants, and licensed physical therapists \u2014 the minds behind our individualized approach to treatment, rehabilitation, and surgical intervention.")), /*#__PURE__*/React.createElement("div", {
    style: physStyles.grid
  }, PHYSICIANS.map(p => /*#__PURE__*/React.createElement(PhysicianCard, {
    key: p.last,
    physician: p,
    onRequest: onRequest
  }))), /*#__PURE__*/React.createElement("div", {
    style: physStyles.allLink
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      color: 'var(--cyan-700)',
      fontSize: 14,
      fontWeight: 600,
      textDecoration: 'none',
      display: 'inline-flex',
      alignItems: 'center',
      gap: 4
    }
  }, "Learn more about our team ", /*#__PURE__*/React.createElement("i", {
    "data-lucide": "chevron-right",
    style: {
      width: 14,
      height: 14
    }
  })))));
}
function PhysicianCard({
  physician,
  onRequest
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("article", {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      ...physStyles.card,
      transform: hover ? 'translateY(-2px)' : 'translateY(0)',
      boxShadow: hover ? '0 8px 24px -8px rgba(32,38,90,0.16), 0 2px 6px rgba(32,38,90,0.06)' : '0 2px 6px rgba(32,38,90,0.06), 0 1px 2px rgba(32,38,90,0.04)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: physStyles.portrait
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "user-round",
    style: {
      width: 56,
      height: 56,
      color: '#fff',
      opacity: 0.85
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: physStyles.cardBody
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 300,
      fontSize: 26,
      lineHeight: 1.1,
      color: 'var(--fg-strong)'
    }
  }, physician.first, " ", /*#__PURE__*/React.createElement("strong", {
    style: {
      fontWeight: 600
    }
  }, physician.last)), /*#__PURE__*/React.createElement("div", {
    style: physStyles.creds
  }, physician.creds), /*#__PURE__*/React.createElement("div", {
    style: physStyles.title
  }, physician.title), /*#__PURE__*/React.createElement("p", {
    style: physStyles.blurb
  }, physician.blurb), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'auto',
      display: 'flex',
      gap: 8
    }
  }, physician.cta === 'book' ? /*#__PURE__*/React.createElement("button", {
    onClick: onRequest,
    style: physStyles.bookBtn
  }, "Book online") : /*#__PURE__*/React.createElement("a", {
    href: "tel:3465717500",
    style: physStyles.callBtn
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "phone",
    style: {
      width: 11,
      height: 11
    }
  }), " (346) 571-7500"))));
}
const physStyles = {
  section: {
    background: 'var(--bg-soft)'
  },
  inner: {
    maxWidth: 1200,
    margin: '0 auto',
    padding: '88px 32px'
  },
  head: {
    textAlign: 'center',
    maxWidth: 680,
    margin: '0 auto 40px'
  },
  h2: {
    fontFamily: 'var(--font-display)',
    fontWeight: 300,
    fontSize: 44,
    color: 'var(--fg-strong)',
    margin: '8px 0 0'
  },
  lead: {
    fontSize: 17,
    lineHeight: 1.55,
    color: 'var(--fg-muted)',
    margin: '14px auto 0',
    maxWidth: 540
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: 20
  },
  card: {
    background: '#fff',
    border: '1px solid var(--border)',
    borderRadius: 12,
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    transition: 'transform var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out)',
    cursor: 'pointer'
  },
  portrait: {
    aspectRatio: '1 / 1',
    background: 'linear-gradient(135deg, #4A7FB2, #20265A 75%, #163A6D)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  cardBody: {
    padding: '18px 20px 20px',
    display: 'flex',
    flexDirection: 'column',
    gap: 6,
    flex: 1
  },
  creds: {
    fontSize: 11,
    fontWeight: 600,
    letterSpacing: '0.12em',
    textTransform: 'uppercase',
    color: 'var(--fg-subtle)'
  },
  title: {
    fontSize: 12,
    color: 'var(--brand-strong)',
    fontWeight: 500
  },
  blurb: {
    fontSize: 13,
    lineHeight: 1.5,
    color: 'var(--fg-muted)',
    margin: '6px 0 14px'
  },
  bookBtn: {
    fontFamily: 'var(--font-body)',
    fontSize: 12,
    fontWeight: 600,
    padding: '8px 14px',
    border: 0,
    borderRadius: 999,
    background: 'var(--cyan-500)',
    color: '#fff',
    cursor: 'pointer'
  },
  callBtn: {
    fontFamily: 'var(--font-body)',
    fontSize: 12,
    fontWeight: 500,
    padding: '8px 12px',
    border: '1px solid var(--border)',
    borderRadius: 999,
    background: '#fff',
    color: 'var(--fg-strong)',
    textDecoration: 'none',
    display: 'inline-flex',
    alignItems: 'center',
    gap: 5
  },
  allLink: {
    textAlign: 'center',
    marginTop: 36
  }
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Physicians.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Procedures.jsx
try { (() => {
// Procedures.jsx — anatomy-organized procedure tiles.
// Order matches the live site: Hip, Knee, Shoulder, Elbow,
// Sports Medicine, Physical Therapy.

const PROCEDURES = [{
  id: 'hip',
  title: 'Hip procedures',
  icon: 'bone',
  blurb: 'Traditional and outpatient total hip replacements, total hip revisions, and total hip arthroplasty.'
}, {
  id: 'knee',
  title: 'Knee procedures',
  icon: 'activity',
  blurb: 'Unicompartmental knee replacement, knee resurfacing, total knee replacements, and total knee revisions.'
}, {
  id: 'shoulder',
  title: 'Shoulder procedures',
  icon: 'move-up-right',
  blurb: 'Shoulder replacement, rotator cuff repair, labral tears, and overuse conditions.'
}, {
  id: 'elbow',
  title: 'Elbow procedures',
  icon: 'move-right',
  blurb: 'Medial epicondyle release (golfer’s elbow), lateral epicondylitis release (tennis elbow), and total elbow arthroplasty.'
}, {
  id: 'sports',
  title: 'Sports medicine',
  icon: 'heart-pulse',
  blurb: 'Surgical and non-surgical care for exercise-related injuries to the hips, knees, shoulders, and elbows.'
}, {
  id: 'pt',
  title: 'Physical therapy',
  icon: 'hand-helping',
  blurb: 'Non-surgical treatment plans and individualized post-surgery rehabilitation, in-house with our PTs.'
}];
function ProceduresSection({
  onSelect,
  selected
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: procStyles.section
  }, /*#__PURE__*/React.createElement("div", {
    style: procStyles.inner
  }, /*#__PURE__*/React.createElement("header", {
    style: procStyles.head
  }, /*#__PURE__*/React.createElement("p", {
    className: "eyebrow",
    style: {
      margin: 0
    }
  }, "Procedures & Conditions"), /*#__PURE__*/React.createElement("h2", {
    style: procStyles.h2
  }, "Our innovative orthopedic procedures"), /*#__PURE__*/React.createElement("hr", {
    className: "gradient-rule"
  })), /*#__PURE__*/React.createElement("div", {
    style: procStyles.grid
  }, PROCEDURES.map(p => /*#__PURE__*/React.createElement(ProcedureTile, {
    key: p.id,
    proc: p,
    active: selected === p.id,
    onClick: () => onSelect && onSelect(p.id)
  })))));
}
function ProcedureTile({
  proc,
  active,
  onClick
}) {
  const [hover, setHover] = React.useState(false);
  const lifted = hover || active;
  return /*#__PURE__*/React.createElement("article", {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    onClick: onClick,
    style: {
      ...procStyles.tile,
      transform: lifted ? 'translateY(-3px)' : 'translateY(0)',
      boxShadow: lifted ? '0 24px 48px -16px rgba(32,38,90,0.18), 0 8px 16px -8px rgba(32,38,90,0.08)' : '0 2px 6px rgba(32,38,90,0.06), 0 1px 2px rgba(32,38,90,0.04)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: procStyles.image
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": proc.icon,
    style: {
      width: 56,
      height: 56,
      color: '#fff',
      opacity: 0.7,
      transform: lifted ? 'scale(1.06)' : 'scale(1)',
      transition: 'transform var(--dur-base) var(--ease-out)'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: procStyles.body
  }, /*#__PURE__*/React.createElement("h3", {
    style: procStyles.title
  }, proc.title), /*#__PURE__*/React.createElement("hr", {
    style: {
      ...procStyles.rule,
      width: lifted ? 56 : 32
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: procStyles.blurb
  }, proc.blurb), /*#__PURE__*/React.createElement("div", {
    style: procStyles.more
  }, "Learn more ", /*#__PURE__*/React.createElement("i", {
    "data-lucide": "chevron-right",
    style: {
      width: 12,
      height: 12
    }
  }))));
}
const procStyles = {
  section: {
    background: '#fff'
  },
  inner: {
    maxWidth: 1200,
    margin: '0 auto',
    padding: '88px 32px'
  },
  head: {
    maxWidth: 720,
    margin: '0 0 40px'
  },
  h2: {
    fontFamily: 'var(--font-display)',
    fontWeight: 300,
    fontSize: 44,
    color: 'var(--fg-strong)',
    margin: '8px 0 0'
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: 20
  },
  tile: {
    background: '#fff',
    border: '1px solid var(--border)',
    borderRadius: 12,
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    cursor: 'pointer',
    transition: 'transform var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out)'
  },
  image: {
    aspectRatio: '4 / 3',
    background: 'linear-gradient(135deg, var(--neutral-200), var(--neutral-300))',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden'
  },
  body: {
    padding: '20px 22px 22px',
    display: 'flex',
    flexDirection: 'column'
  },
  title: {
    fontFamily: 'var(--font-display)',
    fontWeight: 400,
    fontSize: 22,
    color: 'var(--fg-strong)',
    margin: 0
  },
  rule: {
    border: 0,
    height: 3,
    borderRadius: 2,
    background: 'var(--inov8-gradient)',
    margin: '8px 0 10px',
    transition: 'width var(--dur-base) var(--ease-out)'
  },
  blurb: {
    fontSize: 14,
    lineHeight: 1.5,
    color: 'var(--fg-muted)',
    margin: '0 0 14px'
  },
  more: {
    fontSize: 13,
    fontWeight: 600,
    color: 'var(--cyan-700)',
    display: 'inline-flex',
    alignItems: 'center',
    gap: 4
  }
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Procedures.jsx", error: String((e && e.message) || e) }); }

})();
