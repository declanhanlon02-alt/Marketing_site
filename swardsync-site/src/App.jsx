const stats = [
  { value: "Less admin", label: "for office teams managing schedules, jobs, and customer updates" },
  { value: "Less wasted travel", label: "through smarter route planning and cleaner daily workflows" },
  { value: "More control", label: "over crews, jobs, customers, and completed work" },
];

const painPoints = [
  {
    title: "Admin that eats into profit",
    text: "When schedules, notes, customer details, and job updates live in different places, the office spends too much time chasing information instead of moving work forward.",
  },
  {
    title: "Crews losing time in the field",
    text: "Unclear job details, route confusion, and constant calls back to the office all reduce the amount of productive work that gets done each day.",
  },
  {
    title: "Small mistakes that become costly",
    text: "Missed details, forgotten follow-ups, and incomplete service records lead to revisit work, customer frustration, and margin leakage.",
  },
  {
    title: "Software that feels overpriced",
    text: "Many platforms are packed with complexity lawn care businesses do not need. SwardSync is positioned as a more focused, more practical option.",
  },
];

const features = [
  {
    kicker: "Scheduling",
    title: "Recurring and one-off job planning",
    text: "Keep the week organised, reduce manual scheduling effort, and make day-to-day planning easier to manage.",
  },
  {
    kicker: "Routing",
    title: "Smarter route flow for crews",
    text: "Help teams move through the day with less wasted mileage, clearer job order, and fewer avoidable delays.",
  },
  {
    kicker: "Customers",
    title: "Customer and property records in one place",
    text: "Keep contact details, site notes, service history, and property information easy to access when it matters.",
  },
  {
    kicker: "Field access",
    title: "Mobile job visibility for crews",
    text: "Give crews the details they need on the go so they can stay focused without repeated back-and-forth with the office.",
  },
  {
    kicker: "Tracking",
    title: "Clear status and follow-up management",
    text: "See what is done, what still needs attention, and what needs a revisit before problems slip through the cracks.",
  },
  {
    kicker: "Proof of work",
    title: "Notes and photo records",
    text: "Keep stronger service records for quality control, customer communication, and better visibility across the operation.",
  },
];

const savings = [
  {
    title: "Reduce office waste",
    points: [
      "Less time spent chasing updates and rewriting notes",
      "Cleaner scheduling and customer visibility",
      "Fewer avoidable communication gaps",
    ],
  },
  {
    title: "Improve crew productivity",
    points: [
      "Clearer job instructions for each visit",
      "Better route flow across the day",
      "More productive time on site",
    ],
  },
  {
    title: "Protect margins",
    points: [
      "Fewer missed details and incomplete records",
      "Less revisit work caused by preventable issues",
      "Better operational control as the business grows",
    ],
  },
];

const steps = [
  {
    number: "01",
    title: "Organise the office",
    text: "Keep schedules, customer records, and job details together so the team spends less time piecing information together.",
  },
  {
    number: "02",
    title: "Support the field",
    text: "Give crews clearer direction throughout the day so they can work faster, with fewer interruptions and less wasted movement.",
  },
  {
    number: "03",
    title: "Stay in control",
    text: "Track completed work, outstanding issues, and follow-up needs so operations stay tighter as you grow.",
  },
];

function Styles() {
  return (
    <style>{`
      :root {
        --bg: #f5fbf6;
        --surface: #ffffff;
        --surface-soft: #f8fafc;
        --text: #0f172a;
        --muted: #475569;
        --line: #e2e8f0;
        --green: #059669;
        --green-dark: #065f46;
        --green-soft: #d1fae5;
        --navy: #0f172a;
        --navy-soft: #172033;
        --shadow: 0 22px 60px rgba(15, 23, 42, 0.08);
        --shadow-soft: 0 14px 34px rgba(15, 23, 42, 0.06);
        --radius-xl: 34px;
        --radius-lg: 24px;
        --radius-md: 18px;
      }

      * { box-sizing: border-box; }
      html { scroll-behavior: smooth; }
      body {
        margin: 0;
        font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
        color: var(--text);
        background:
          radial-gradient(circle at top left, rgba(5, 150, 105, 0.10), transparent 28%),
          linear-gradient(180deg, #f3fbf4 0%, #ffffff 24%);
      }
      a { color: inherit; text-decoration: none; }
      button, input, textarea { font: inherit; }

      .page-shell { min-height: 100vh; }
      .container {
        width: min(1160px, calc(100% - 28px));
        margin: 0 auto;
      }
      .section { padding: 92px 0; }
      .section-tight { padding: 72px 0; }
      .section-dark {
        background: linear-gradient(180deg, #0f172a 0%, #111827 100%);
        color: white;
      }
      .section-soft {
        background: linear-gradient(180deg, #f8fafc 0%, #ffffff 100%);
      }
      .top-line { border-top: 1px solid var(--line); }

      .header {
        position: sticky;
        top: 0;
        z-index: 50;
        backdrop-filter: blur(12px);
        background: rgba(255, 255, 255, 0.84);
        border-bottom: 1px solid rgba(226, 232, 240, 0.9);
      }
      .header-inner {
        min-height: 78px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 18px;
      }
      .brand {
        display: flex;
        align-items: center;
        gap: 12px;
        min-width: 0;
      }
      .brand-badge {
        width: 44px;
        height: 44px;
        border-radius: 16px;
        display: grid;
        place-items: center;
        font-weight: 800;
        font-size: 20px;
        color: white;
        background: linear-gradient(135deg, var(--green) 0%, #10b981 100%);
        box-shadow: 0 14px 30px rgba(5, 150, 105, 0.24);
        flex: 0 0 auto;
      }
      .brand-copy {
        min-width: 0;
      }
      .brand-name {
        font-size: 15px;
        font-weight: 800;
        line-height: 1.1;
      }
      .brand-sub {
        font-size: 13px;
        color: var(--muted);
        margin-top: 4px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .nav {
        display: flex;
        align-items: center;
        gap: 26px;
        color: var(--muted);
        font-weight: 600;
        font-size: 14px;
      }
      .nav a:hover { color: var(--text); }

      .button {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        min-height: 48px;
        padding: 0 20px;
        border-radius: 14px;
        border: 1px solid transparent;
        font-weight: 700;
        transition: transform .18s ease, background .18s ease, border-color .18s ease, color .18s ease;
      }
      .button:hover { transform: translateY(-1px); }
      .button-primary {
        background: linear-gradient(135deg, var(--green) 0%, #10b981 100%);
        color: white;
        box-shadow: 0 14px 32px rgba(5, 150, 105, 0.20);
      }
      .button-primary:hover { background: linear-gradient(135deg, #047857 0%, #059669 100%); }
      .button-dark {
        background: var(--navy);
        color: white;
      }
      .button-dark:hover { background: #1e293b; }
      .button-outline {
        background: rgba(255,255,255,0.88);
        color: var(--text);
        border-color: var(--line);
      }
      .button-outline:hover { background: white; }
      .button-light {
        background: white;
        color: var(--green-dark);
      }
      .button-light:hover { background: #ecfdf5; }
      .button-block { width: 100%; }

      .hero {
        padding: 72px 0 54px;
      }
      .hero-grid {
        display: grid;
        grid-template-columns: minmax(0, 1.08fr) minmax(0, 0.92fr);
        gap: 34px;
        align-items: center;
      }
      .pill {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        padding: 9px 14px;
        border-radius: 999px;
        background: rgba(209, 250, 229, 0.95);
        color: var(--green-dark);
        font-size: 13px;
        font-weight: 800;
        letter-spacing: 0.01em;
      }
      .pill::before {
        content: "";
        width: 8px;
        height: 8px;
        border-radius: 999px;
        background: var(--green);
        box-shadow: 0 0 0 5px rgba(16, 185, 129, 0.15);
      }
      .hero-title {
        margin: 20px 0 0;
        font-size: clamp(2.55rem, 5vw, 5rem);
        line-height: 0.97;
        letter-spacing: -0.05em;
        max-width: 11ch;
      }
      .hero-copy {
        margin-top: 22px;
        max-width: 58ch;
        font-size: 1.1rem;
        line-height: 1.82;
        color: var(--muted);
      }
      .hero-actions {
        display: flex;
        flex-wrap: wrap;
        gap: 14px;
        margin-top: 30px;
      }
      .stats {
        display: grid;
        grid-template-columns: repeat(3, minmax(0, 1fr));
        gap: 16px;
        margin-top: 34px;
      }

      .card {
        background: var(--surface);
        border: 1px solid var(--line);
        border-radius: var(--radius-lg);
        box-shadow: var(--shadow-soft);
      }
      .card-body { padding: 24px; }
      .stat-card .card-body { padding: 22px; }
      .stat-value {
        font-size: 1.65rem;
        font-weight: 800;
        letter-spacing: -0.03em;
      }
      .stat-label {
        margin-top: 8px;
        color: var(--muted);
        line-height: 1.65;
        font-size: 14px;
      }

      .showcase {
        position: relative;
        padding: 18px;
        border-radius: 34px;
        background: linear-gradient(145deg, #0f172a 0%, #111827 100%);
        box-shadow: 0 28px 70px rgba(15, 23, 42, 0.24);
      }
      .showcase::after {
        content: "";
        position: absolute;
        inset: auto -18px -18px auto;
        width: 150px;
        height: 150px;
        background: radial-gradient(circle, rgba(16, 185, 129, 0.28), transparent 70%);
        pointer-events: none;
      }
      .showcase-inner {
        background: linear-gradient(180deg, #ffffff 0%, #f8fafc 100%);
        border-radius: 28px;
        padding: 18px;
      }
      .showcase-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 16px;
      }
      .showcase-feature {
        padding: 22px;
        border-radius: 22px;
        background: white;
        border: 1px solid var(--line);
      }
      .showcase-feature.highlight {
        background: linear-gradient(180deg, #ecfdf5 0%, #f0fdf4 100%);
        border-color: #a7f3d0;
      }
      .showcase-kicker {
        display: inline-block;
        font-size: 12px;
        font-weight: 800;
        color: var(--green-dark);
        letter-spacing: 0.08em;
        text-transform: uppercase;
        margin-bottom: 10px;
      }
      .showcase-feature h3,
      .content-card h3,
      .step-card h3,
      .saving-card h3,
      .contact-card h3 {
        font-size: 1.18rem;
        line-height: 1.3;
        letter-spacing: -0.02em;
        margin: 0;
      }
      .showcase-feature p,
      .content-card p,
      .step-card p,
      .saving-card p,
      .contact-card p,
      .contact-meta {
        margin-top: 10px;
        color: var(--muted);
        line-height: 1.75;
      }
      .showcase-wide {
        grid-column: 1 / -1;
        background: #f8fafc;
      }
      .check-list {
        list-style: none;
        padding: 0;
        margin: 0;
        display: grid;
        gap: 12px;
      }
      .check-list li {
        position: relative;
        padding-left: 22px;
        color: #334155;
        line-height: 1.65;
      }
      .check-list li::before {
        content: "✓";
        position: absolute;
        left: 0;
        top: 0;
        font-weight: 800;
        color: var(--green);
      }

      .section-head {
        max-width: 760px;
        margin-bottom: 34px;
      }
      .section-badge {
        display: inline-flex;
        align-items: center;
        padding: 8px 13px;
        border-radius: 999px;
        background: #e2e8f0;
        color: #334155;
        font-size: 13px;
        font-weight: 800;
      }
      .section-badge.light {
        background: rgba(255,255,255,0.10);
        color: white;
      }
      .section-head h2 {
        margin: 16px 0 0;
        font-size: clamp(2rem, 3.5vw, 3.2rem);
        line-height: 1.03;
        letter-spacing: -0.045em;
      }
      .section-head p {
        margin-top: 16px;
        font-size: 1.02rem;
      }
      .section-dark .section-head p { color: #cbd5e1; }

      .grid-4,
      .grid-3 {
        display: grid;
        gap: 18px;
      }
      .grid-4 { grid-template-columns: repeat(4, minmax(0, 1fr)); }
      .grid-3 { grid-template-columns: repeat(3, minmax(0, 1fr)); }

      .content-card {
        padding: 24px;
        border-radius: 24px;
        background: var(--surface);
        border: 1px solid var(--line);
        box-shadow: var(--shadow-soft);
      }
      .card-kicker {
        display: inline-block;
        margin-bottom: 10px;
        font-size: 12px;
        font-weight: 800;
        letter-spacing: 0.08em;
        text-transform: uppercase;
        color: var(--green-dark);
      }

      .steps-wrap {
        display: grid;
        grid-template-columns: repeat(3, minmax(0, 1fr));
        gap: 18px;
      }
      .step-card {
        position: relative;
        overflow: hidden;
        padding: 24px;
        border-radius: 24px;
        background: white;
        border: 1px solid var(--line);
        box-shadow: var(--shadow-soft);
      }
      .step-number {
        width: 54px;
        height: 54px;
        border-radius: 18px;
        display: grid;
        place-items: center;
        font-size: 15px;
        font-weight: 800;
        color: var(--green-dark);
        background: linear-gradient(180deg, #d1fae5 0%, #ecfdf5 100%);
        margin-bottom: 16px;
      }

      .saving-card {
        padding: 24px;
        border-radius: 24px;
        border: 1px solid rgba(255,255,255,0.10);
        background: rgba(255,255,255,0.06);
        box-shadow: none;
      }
      .saving-card h3 { color: white; }
      .saving-card .check-list li { color: #cbd5e1; }
      .saving-card .check-list li::before { color: #34d399; }

      .cta-box {
        display: grid;
        grid-template-columns: minmax(0, 1fr) auto;
        gap: 24px;
        align-items: center;
        padding: 40px;
        border-radius: 32px;
        background: linear-gradient(135deg, #059669 0%, #065f46 100%);
        box-shadow: 0 24px 64px rgba(5, 150, 105, 0.24);
        color: white;
      }
      .cta-box h2 {
        margin: 14px 0 0;
        font-size: clamp(2rem, 3.4vw, 3rem);
        line-height: 1.02;
        letter-spacing: -0.04em;
      }
      .cta-box p {
        margin-top: 16px;
        color: rgba(255,255,255,0.9);
        max-width: 62ch;
      }
      .cta-badge {
        display: inline-flex;
        padding: 8px 13px;
        border-radius: 999px;
        background: rgba(255,255,255,0.16);
        color: #dcfce7;
        font-size: 13px;
        font-weight: 800;
      }

      .contact-grid {
        display: grid;
        grid-template-columns: minmax(0, 0.9fr) minmax(0, 1.1fr);
        gap: 20px;
        align-items: start;
      }
      .contact-card,
      .form-shell {
        border-radius: 26px;
        background: white;
        border: 1px solid var(--line);
        box-shadow: var(--shadow-soft);
      }
      .contact-card { padding: 28px; }
      .contact-meta {
        display: grid;
        gap: 12px;
        margin-top: 26px;
        color: #334155;
      }
      .contact-meta strong { color: var(--text); }
      .form-shell { overflow: hidden; }
      .form-body {
        padding: 26px;
        display: grid;
        gap: 16px;
      }
      .form-row {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 16px;
      }
      .field {
        width: 100%;
        border: 1px solid #cbd5e1;
        border-radius: 16px;
        padding: 14px 16px;
        background: white;
        color: var(--text);
        transition: border-color .18s ease, box-shadow .18s ease;
      }
      .field:focus {
        outline: none;
        border-color: #86efac;
        box-shadow: 0 0 0 4px rgba(134, 239, 172, 0.18);
      }
      .form-note {
        font-size: 13px;
        color: #64748b;
        line-height: 1.6;
      }

      @media (max-width: 1100px) {
        .hero-grid,
        .contact-grid,
        .cta-box {
          grid-template-columns: 1fr;
        }
        .grid-4 { grid-template-columns: repeat(2, minmax(0, 1fr)); }
        .grid-3,
        .steps-wrap { grid-template-columns: repeat(2, minmax(0, 1fr)); }
      }

      @media (max-width: 760px) {
        .section { padding: 72px 0; }
        .section-tight { padding: 56px 0; }
        .nav { display: none; }
        .header-inner { min-height: 72px; }
        .stats,
        .grid-4,
        .grid-3,
        .steps-wrap,
        .showcase-grid,
        .form-row {
          grid-template-columns: 1fr;
        }
        .showcase-wide { grid-column: auto; }
        .hero { padding-top: 44px; }
        .hero-title { max-width: none; }
      }

      @media (max-width: 520px) {
        .container { width: min(1160px, calc(100% - 18px)); }
        .brand-sub,
        .header .button-dark {
          display: none;
        }
        .card-body,
        .content-card,
        .step-card,
        .saving-card,
        .contact-card,
        .form-body,
        .showcase-feature,
        .showcase-inner,
        .cta-box {
          padding: 20px;
        }
        .hero-actions {
          display: grid;
          grid-template-columns: 1fr;
        }
        .button { width: 100%; }
      }
    `}</style>
  );
}

function Header() {
  return (
    <header className="header">
      <div className="container header-inner">
        <div className="brand">
          <div className="brand-badge">S</div>
          <div className="brand-copy">
            <div className="brand-name">SwardSync Systems</div>
            <div className="brand-sub">Affordable software for lawn care operations</div>
          </div>
        </div>

        <nav className="nav">
          <a href="#why">Why SwardSync</a>
          <a href="#features">Features</a>
          <a href="#savings">Savings</a>
          <a href="#contact">Contact</a>
        </nav>

        <a className="button button-dark" href="#contact">Book a demo</a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero">
      <div className="container hero-grid">
        <div>
          <div className="pill">Built for lawn care and landscaping companies</div>
          <h1 className="hero-title">Run more efficiently, reduce wasted time, and lower operating costs.</h1>
          <p className="hero-copy">
            SwardSync Systems helps lawn care companies keep schedules tighter, routes cleaner, crews better informed, and daily operations easier to manage without paying for bloated software they do not need.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#contact">Request a demo</a>
            <a className="button button-outline" href="#savings">See how it saves time</a>
          </div>

          <div className="stats">
            {stats.map((item) => (
              <div className="card stat-card" key={item.label}>
                <div className="card-body">
                  <div className="stat-value">{item.value}</div>
                  <div className="stat-label">{item.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="showcase">
          <div className="showcase-inner">
            <div className="showcase-grid">
              <div className="showcase-feature highlight">
                <div className="showcase-kicker">Scheduling</div>
                <h3>Faster planning with less admin</h3>
                <p>Keep the week more organised and reduce the time spent manually moving jobs around.</p>
              </div>

              <div className="showcase-feature">
                <div className="showcase-kicker">Routing</div>
                <h3>Tighter crew movement</h3>
                <p>Reduce wasted travel time and help crews stay productive across the day.</p>
              </div>

              <div className="showcase-feature showcase-wide">
                <div className="showcase-kicker">Operational control</div>
                <ul className="check-list">
                  <li>Keep job information organised and easy to access</li>
                  <li>Give crews clearer direction before they arrive on site</li>
                  <li>Track completed work and follow-up needs more clearly</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function WhySection() {
  return (
    <section id="why" className="section section-soft">
      <div className="container">
        <div className="section-head">
          <div className="section-badge">Why SwardSync</div>
          <h2>Built around the places lawn care companies lose time, money, and margin</h2>
          <p>
            Operational costs do not only come from labour and fuel. They also come from disorganised schedules, poor job visibility, unnecessary travel, and constant back-and-forth between the office and the field. SwardSync is positioned as a more affordable, more focused alternative to heavier field service platforms.
          </p>
        </div>

        <div className="grid-4">
          {painPoints.map((item) => (
            <div className="content-card" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FeaturesSection() {
  return (
    <section id="features" className="section">
      <div className="container">
        <div className="section-head">
          <div className="section-badge">Features</div>
          <h2>The features that keep lawn care operations under control</h2>
          <p>
            SwardSync Systems focuses on the practical tools that help office teams stay organised and crews stay productive throughout the day.
          </p>
        </div>

        <div className="grid-3">
          {features.map((item) => (
            <div className="content-card" key={item.title}>
              <div className="card-kicker">{item.kicker}</div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WorkflowSection() {
  return (
    <section className="section section-tight">
      <div className="container">
        <div className="section-head">
          <div className="section-badge">How it helps</div>
          <h2>A simpler system for the office, the field, and the jobs in between</h2>
          <p>
            The goal is to make daily operations feel more controlled from the moment a job is planned to the moment the work is recorded and reviewed.
          </p>
        </div>

        <div className="steps-wrap">
          {steps.map((step) => (
            <div className="step-card" key={step.number}>
              <div className="step-number">{step.number}</div>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SavingsSection() {
  return (
    <section id="savings" className="section section-dark">
      <div className="container">
        <div className="section-head">
          <div className="section-badge light">Savings and value</div>
          <h2>Reduce waste and get better value from your software</h2>
          <p>
            The goal is simple: reduce wasted time, improve coordination, and give lawn care businesses more control over daily work without forcing them into the cost and complexity of heavyweight platforms.
          </p>
        </div>

        <div className="grid-3">
          {savings.map((group) => (
            <div className="saving-card" key={group.title}>
              <h3>{group.title}</h3>
              <ul className="check-list" style={{ marginTop: 16 }}>
                {group.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CtaSection() {
  return (
    <section className="section">
      <div className="container">
        <div className="cta-box">
          <div>
            <div className="cta-badge">For growth-minded lawn care businesses</div>
            <h2>Choose software that supports growth without unnecessary overhead</h2>
            <p>
              SwardSync Systems is designed to help lawn care companies run more efficiently, control costs, and get the operational tools they need in a more practical, more affordable package.
            </p>
          </div>
          <a className="button button-light" href="#contact">Book a demo</a>
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section id="contact" className="section section-soft top-line">
      <div className="container contact-grid">
        <div className="contact-card">
          <div className="section-badge">Contact</div>
          <h3 style={{ marginTop: 16, fontSize: "2rem", lineHeight: 1.05, letterSpacing: "-0.04em" }}>
            See how SwardSync can support your lawn care business
          </h3>
          <p>
            Request a demo, join the early access list, or tell us where your operation is losing time and money today.
          </p>

          <div className="contact-meta">
            <div><strong>Location:</strong> Leicester, United Kingdom</div>
            <div><strong>Email:</strong> hello@swardsyncsystems.com</div>
            <div><strong>Availability:</strong> Demos and early access enquiries</div>
          </div>
        </div>

        <div className="form-shell">
          <div className="form-body">
            <div className="form-row">
              <input className="field" type="text" placeholder="Your name" />
              <input className="field" type="text" placeholder="Company name" />
            </div>
            <input className="field" type="email" placeholder="Email address" />
            <input className="field" type="tel" placeholder="Phone number" />
            <textarea className="field" rows="6" placeholder="Tell us where your business is losing time, money, or efficiency today."></textarea>
            <button type="button" className="button button-dark button-block">Request a demo</button>
            <div className="form-note">
              This contact form is a demo placeholder and can be connected to your preferred form or CRM later.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <div className="page-shell">
      <Styles />
      <Header />
      <Hero />
      <WhySection />
      <FeaturesSection />
      <WorkflowSection />
      <SavingsSection />
      <CtaSection />
      <ContactSection />
    </div>
  );
}
