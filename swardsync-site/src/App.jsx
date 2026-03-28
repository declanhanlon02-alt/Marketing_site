import React from "react";

const valuePoints = [
  {
    title: "Reduce avoidable costs",
    description:
      "Cut down on wasted admin time, missed visits, duplicated effort, and the hidden costs that build up when daily operations are not organised properly.",
  },
  {
    title: "Save time in the office",
    description:
      "Keep schedules, customer details, job notes, and updates in one place instead of spread across calls, texts, and spreadsheets.",
  },
  {
    title: "Get more from each crew day",
    description:
      "Give crews better visibility of routes and jobs so they spend less time waiting, calling back, or travelling inefficiently.",
  },
  {
    title: "Stay on top of every job",
    description:
      "Keep service records, site notes, and completion updates clear so issues are easier to spot and follow-up work is easier to manage.",
  },
];

const features = [
  {
    title: "Scheduling built for recurring work",
    description:
      "Organise one-off and repeat visits faster, keep the week structured, and reduce time spent manually juggling jobs.",
  },
  {
    title: "Route planning that reduces wasted travel",
    description:
      "Help crews move through the day more efficiently with clearer job order and less unnecessary mileage.",
  },
  {
    title: "Customer and property records in one place",
    description:
      "Keep service history, contact details, site notes, and property information easy to access when your team needs it.",
  },
  {
    title: "Mobile access for crews in the field",
    description:
      "Give crews the day’s jobs, notes, and updates on the go so they can stay focused without constant calls back to the office.",
  },
  {
    title: "Clear job status and follow-up tracking",
    description:
      "See what is done, what still needs attention, and which jobs need a revisit before things slip through the cracks.",
  },
  {
    title: "Photos and proof of service",
    description:
      "Keep better records of completed work with notes and photos that support quality control and customer communication.",
  },
];

const savingsGroups = [
  {
    title: "Where money gets lost",
    points: [
      "Office staff spending too much time chasing updates and rewriting notes",
      "Crews losing time between jobs because details are unclear or routes are inefficient",
      "Missed tasks, incomplete records, and avoidable revisit work eating into margins",
    ],
  },
  {
    title: "How SwardSync helps",
    points: [
      "Brings schedules, job details, customer info, and updates into one organised workflow",
      "Makes it easier for crews to know where they are going and what needs to be done",
      "Helps managers keep better visibility over work completed and issues needing follow-up",
    ],
  },
  {
    title: "Why the value is stronger",
    points: [
      "Focused on the features lawn care companies actually use day to day",
      "Built as a more practical alternative to bloated field service platforms",
      "Designed to give growing operators better value without unnecessary overhead",
    ],
  },
];

const stats = [
  { value: "Less admin", label: "for office teams managing schedules, jobs, and customer updates" },
  { value: "Less wasted travel", label: "through better route planning and clearer daily job flow" },
  { value: "More control", label: "over customers, crews, visits, and completed work" },
];

function Styles() {
  return (
    <style>{`
      * { box-sizing: border-box; }
      html { scroll-behavior: smooth; }
      body { margin: 0; font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; background: #ffffff; color: #0f172a; }
      a { color: inherit; text-decoration: none; }
      .site-shell { min-height: 100vh; background: linear-gradient(180deg, #f8fff9 0%, #ffffff 24%); }
      .container { width: min(1120px, calc(100% - 32px)); margin: 0 auto; }
      .section { padding: 88px 0; }
      .section-soft { background: #f8fafc; }
      .section-dark { background: #0f172a; color: #ffffff; }
      .top-border { border-top: 1px solid #e2e8f0; }
      .site-header { position: sticky; top: 0; z-index: 30; background: rgba(255,255,255,0.92); backdrop-filter: blur(10px); border-bottom: 1px solid #e2e8f0; }
      .nav-wrap { display: flex; align-items: center; justify-content: space-between; gap: 20px; min-height: 78px; }
      .brand { display: flex; align-items: center; gap: 12px; }
      .brand-mark { width: 42px; height: 42px; border-radius: 14px; background: #059669; color: white; display: flex; align-items: center; justify-content: center; font-weight: 800; font-size: 20px; box-shadow: 0 10px 30px rgba(5, 150, 105, 0.22); }
      .brand-name { font-weight: 800; font-size: 16px; }
      .brand-tag { font-size: 13px; color: #475569; }
      .nav-links { display: flex; gap: 26px; color: #475569; font-weight: 600; font-size: 14px; }
      .nav-links a:hover { color: #0f172a; }
      .nav-cta { white-space: nowrap; }
      .hero { padding: 72px 0 56px; }
      .hero-grid { display: grid; grid-template-columns: 1.1fr 0.9fr; gap: 40px; align-items: center; }
      .eyebrow { display: inline-block; margin-bottom: 18px; padding: 8px 14px; border-radius: 999px; background: #d1fae5; color: #065f46; font-size: 13px; font-weight: 700; }
      .eyebrow.muted { background: #e2e8f0; color: #334155; }
      .eyebrow.light { background: rgba(255,255,255,0.12); color: #ffffff; }
      .eyebrow.light-green { background: rgba(255,255,255,0.18); color: #dcfce7; }
      h1, h2, h3 { margin: 0; line-height: 1.1; }
      h1 { font-size: clamp(2.4rem, 5vw, 4.25rem); letter-spacing: -0.03em; max-width: 12ch; }
      h2 { font-size: clamp(2rem, 4vw, 3rem); letter-spacing: -0.03em; }
      h3 { font-size: 1.2rem; }
      p { margin: 0; color: #475569; line-height: 1.75; }
      .section-dark p, .section-dark li { color: #cbd5e1; }
      .hero-copy { font-size: 1.1rem; margin-top: 24px; max-width: 58ch; }
      .hero-actions { display: flex; gap: 14px; margin-top: 30px; flex-wrap: wrap; }
      .button { display: inline-flex; align-items: center; justify-content: center; min-height: 48px; padding: 0 20px; border-radius: 14px; font-weight: 700; transition: 0.2s ease; border: 1px solid transparent; }
      .button:hover { transform: translateY(-1px); }
      .button-primary { background: #059669; color: #ffffff; }
      .button-primary:hover { background: #047857; }
      .button-dark { background: #0f172a; color: #ffffff; }
      .button-dark:hover { background: #1e293b; }
      .button-outline { border-color: #cbd5e1; background: #ffffff; color: #0f172a; }
      .button-outline:hover { background: #f8fafc; }
      .button-light { background: #ffffff; color: #065f46; }
      .button-light:hover { background: #ecfdf5; }
      .full-width { width: 100%; }
      .stats-grid, .grid { display: grid; gap: 20px; }
      .stats-grid { grid-template-columns: repeat(3, 1fr); margin-top: 34px; }
      .three-up { grid-template-columns: repeat(3, 1fr); }
      .four-up { grid-template-columns: repeat(4, 1fr); }
      .card { background: #ffffff; border: 1px solid #e2e8f0; border-radius: 24px; padding: 26px; box-shadow: 0 10px 30px rgba(15, 23, 42, 0.05); }
      .stat-card { padding: 22px; }
      .stat-value { font-size: 1.6rem; font-weight: 800; color: #0f172a; margin-bottom: 8px; }
      .hero-panel { border-radius: 32px; background: #0f172a; padding: 18px; box-shadow: 0 25px 60px rgba(15, 23, 42, 0.24); }
      .hero-panel-inner { background: #ffffff; border-radius: 26px; padding: 18px; }
      .mini-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
      .feature-mini-highlight { background: #ecfdf5; border-color: #a7f3d0; }
      .feature-wide { grid-column: 1 / -1; background: #f8fafc; }
      .tick-list { list-style: none; padding: 0; margin: 18px 0 0; display: grid; gap: 12px; }
      .tick-list.compact { margin-top: 0; }
      .tick-list li { position: relative; padding-left: 22px; }
      .tick-list li::before { content: "✓"; position: absolute; left: 0; top: 0; color: #10b981; font-weight: 800; }
      .section-intro { max-width: 760px; margin-bottom: 38px; }
      .section-intro.narrow { max-width: 720px; }
      .section-intro h2 { margin-bottom: 16px; }
      .section-intro.light h2 { color: #ffffff; }
      .cta-box { background: linear-gradient(135deg, #059669 0%, #065f46 100%); color: #ffffff; border-radius: 34px; padding: 40px; display: grid; grid-template-columns: 1fr auto; gap: 24px; align-items: center; box-shadow: 0 22px 50px rgba(5, 150, 105, 0.22); }
      .cta-box p { color: rgba(255,255,255,0.92); margin-top: 16px; max-width: 60ch; }
      .contact-grid { display: grid; grid-template-columns: 0.9fr 1.1fr; gap: 28px; align-items: start; }
      .contact-list { display: grid; gap: 14px; margin-top: 24px; color: #334155; }
      .form-card { padding: 0; overflow: hidden; }
      .contact-form { display: grid; gap: 16px; padding: 26px; }
      .form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
      input, textarea { width: 100%; border: 1px solid #cbd5e1; border-radius: 14px; padding: 14px 16px; font: inherit; color: #0f172a; background: #ffffff; }
      input:focus, textarea:focus { outline: 2px solid #86efac; outline-offset: 1px; border-color: #86efac; }
      .form-note { font-size: 13px; color: #64748b; }
      .dark-card { background: rgba(255,255,255,0.06); border-color: rgba(255,255,255,0.1); box-shadow: none; }
      @media (max-width: 980px) {
        .hero-grid, .contact-grid, .cta-box { grid-template-columns: 1fr; }
        .three-up, .four-up, .stats-grid { grid-template-columns: 1fr 1fr; }
        .nav-links { display: none; }
      }
      @media (max-width: 640px) {
        .section { padding: 68px 0; }
        .container { width: min(1120px, calc(100% - 20px)); }
        .stats-grid, .three-up, .four-up, .mini-grid, .form-row { grid-template-columns: 1fr; }
        .brand-tag { display: none; }
        .nav-cta { display: none; }
        .cta-box, .card, .hero-panel-inner, .contact-form { padding: 20px; }
      }
    `}</style>
  );
}

function Header() {
  return (
    <header className="site-header">
      <div className="container nav-wrap">
        <div className="brand">
          <div className="brand-mark">S</div>
          <div>
            <div className="brand-name">SwardSync Systems</div>
            <div className="brand-tag">Affordable software for lawn care operations</div>
          </div>
        </div>
        <nav className="nav-links">
          <a href="#why">Why SwardSync</a>
          <a href="#features">Features</a>
          <a href="#savings">Savings</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="button button-dark nav-cta" href="#contact">Book a demo</a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero section">
      <div className="container hero-grid">
        <div>
          <div className="eyebrow">Built for lawn care and landscaping companies</div>
          <h1>Run more efficiently, reduce wasted time, and lower operating costs.</h1>
          <p className="hero-copy">
            SwardSync Systems helps lawn care companies keep schedules tighter, routes cleaner, crews better informed, and daily operations easier to manage without paying for bloated software they do not need.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#contact">Request a demo</a>
            <a className="button button-outline" href="#savings">See how it saves time</a>
          </div>
          <div className="stats-grid">
            {stats.map((stat) => (
              <div className="card stat-card" key={stat.label}>
                <div className="stat-value">{stat.value}</div>
                <p>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="hero-panel">
          <div className="hero-panel-inner">
            <div className="mini-grid">
              <div className="card feature-mini-highlight">
                <h3>Faster scheduling</h3>
                <p>Cut time spent organising jobs and keep the week easier to manage.</p>
              </div>
              <div className="card">
                <h3>Tighter routes</h3>
                <p>Reduce wasted travel time and help crews stay productive through the day.</p>
              </div>
              <div className="card feature-wide">
                <ul className="tick-list compact">
                  <li>Keep job information organised</li>
                  <li>Give crews clearer direction</li>
                  <li>Track completed work more easily</li>
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
        <div className="section-intro">
          <div className="eyebrow muted">Why SwardSync</div>
          <h2>Built around the places lawn care companies lose time, money, and margin</h2>
          <p>
            Operational costs do not only come from labour and fuel. They also come from disorganised schedules, poor job visibility, unnecessary travel, and constant back-and-forth between the office and the field. SwardSync is positioned as a more affordable, more focused alternative to heavier field service platforms.
          </p>
        </div>
        <div className="grid four-up">
          {valuePoints.map((item) => (
            <div className="card" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
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
        <div className="section-intro">
          <div className="eyebrow muted">Features</div>
          <h2>The features that keep lawn care operations under control</h2>
          <p>
            SwardSync Systems focuses on the practical tools that help office teams stay organised and crews stay productive throughout the day.
          </p>
        </div>
        <div className="grid three-up">
          {features.map((feature) => (
            <div className="card" key={feature.title}>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
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
        <div className="section-intro narrow light">
          <div className="eyebrow light">Savings and value</div>
          <h2>Reduce waste and get better value from your software</h2>
          <p>
            The goal is simple: reduce wasted time, improve coordination, and give lawn care businesses more control over daily work without forcing them into the cost and complexity of heavyweight platforms.
          </p>
        </div>
        <div className="grid three-up">
          {savingsGroups.map((group) => (
            <div className="card dark-card" key={group.title}>
              <h3>{group.title}</h3>
              <ul className="tick-list">
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
            <div className="eyebrow light-green">For growth-minded lawn care businesses</div>
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
    <section id="contact" className="section section-soft top-border">
      <div className="container contact-grid">
        <div>
          <div className="eyebrow muted">Contact</div>
          <h2>See how SwardSync can support your lawn care business</h2>
          <p>
            Request a demo, join the early access list, or tell us where your operation is losing time and money today.
          </p>

          <div className="contact-list">
            <div><strong>Location:</strong> Leicester, United Kingdom</div>
            <div><strong>Email:</strong> hello@swardsyncsystems.com</div>
            <div><strong>Availability:</strong> Demos and early access enquiries</div>
          </div>
        </div>

        <div className="card form-card">
          <form className="contact-form">
            <div className="form-row">
              <input type="text" placeholder="Your name" />
              <input type="text" placeholder="Company name" />
            </div>
            <input type="email" placeholder="Email address" />
            <input type="tel" placeholder="Phone number" />
            <textarea placeholder="Tell us where your business is losing time, money, or efficiency today." rows="6"></textarea>
            <button type="button" className="button button-dark full-width">Request a demo</button>
            <p className="form-note">
              This contact form is a demo placeholder and can be connected to your preferred form or CRM later.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <>
      <Styles />
      <div className="site-shell">
        <Header />
        <Hero />
        <WhySection />
        <FeaturesSection />
        <SavingsSection />
        <CtaSection />
        <ContactSection />
      </div>
    </>
  );
}
