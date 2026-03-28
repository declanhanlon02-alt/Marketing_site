import { useEffect, useState } from "react";

export default function SwardSyncLanding() {
  const [email, setEmail] = useState("");
  const [heroSubmitted, setHeroSubmitted] = useState(false);
  const [waitlistSubmitted, setWaitlistSubmitted] = useState(false);
  const [heroSaving, setHeroSaving] = useState(false);
  const [waitlistSaving, setWaitlistSaving] = useState(false);
  const [heroError, setHeroError] = useState("");
  const [waitlistError, setWaitlistError] = useState("");
  const [waitlistForm, setWaitlistForm] = useState({
    firstName: "",
    lastName: "",
    company: "",
    phone: "",
    email: "",
    size: "",
    note: "",
  });

  const BETA_LAUNCH_DATE = new Date("2026-06-01T09:00:00");

  const getCountdown = () => {
    const now = new Date().getTime();
    const target = BETA_LAUNCH_DATE.getTime();
    const distance = target - now;

    if (distance <= 0) {
      return {
        days: "000",
        hours: "00",
        mins: "00",
        secs: "00",
      };
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
    const mins = Math.floor((distance / (1000 * 60)) % 60);
    const secs = Math.floor((distance / 1000) % 60);

    return {
      days: String(days).padStart(3, "0"),
      hours: String(hours).padStart(2, "0"),
      mins: String(mins).padStart(2, "0"),
      secs: String(secs).padStart(2, "0"),
    };
  };

  const [countdown, setCountdown] = useState(getCountdown());

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown(getCountdown());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const saveInterest = async (payload) => {
    const response = await fetch("/api/register-interest", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    const data = await response.json();

    if (!response.ok || !data.ok) {
      throw new Error(data.error || "Failed to save interest");
    }

    return data;
  };

  const handleHeroSubmit = async (e) => {
    e.preventDefault();
    setHeroError("");

    if (!email.trim()) return;

    try {
      setHeroSaving(true);

      await saveInterest({
        source: "hero",
        email: email.trim(),
        pageUrl: window.location.href,
        userAgent: navigator.userAgent,
      });

      setHeroSubmitted(true);
      setEmail("");
    } catch (error) {
      setHeroError("Sorry, we couldn't save your details. Please try again.");
    } finally {
      setHeroSaving(false);
    }
  };

  const handleWaitlistSubmit = async () => {
    setWaitlistError("");

    if (!waitlistForm.email.trim()) return;

    try {
      setWaitlistSaving(true);

      await saveInterest({
        source: "waitlist",
        firstName: waitlistForm.firstName.trim(),
        lastName: waitlistForm.lastName.trim(),
        company: waitlistForm.company.trim(),
        phone: waitlistForm.phone.trim(),
        email: waitlistForm.email.trim(),
        size: waitlistForm.size,
        note: waitlistForm.note.trim(),
        pageUrl: window.location.href,
        userAgent: navigator.userAgent,
      });

      setWaitlistSubmitted(true);
      setWaitlistForm({
        firstName: "",
        lastName: "",
        company: "",
        phone: "",
        email: "",
        size: "",
        note: "",
      });
    } catch (error) {
      setWaitlistError("Sorry, we couldn't save your details. Please try again.");
    } finally {
      setWaitlistSaving(false);
    }
  };

  const styles = `
    @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=DM+Sans:wght@300;400;500;600&display=swap');

    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

    :root {
      --green-900: #0b2016;
      --green-800: #112b1e;
      --green-700: #1a3d2b;
      --green-600: #245238;
      --green-500: #2e6b48;
      --green-400: #3b8c60;
      --green-300: #5aad7e;
      --green-200: #a8d8ba;
      --green-100: #d8f0e4;
      --green-50:  #eef8f2;
      --gold:      #b8922a;
      --gold-light:#d4a93c;
      --cream:     #faf9f6;
      --white:     #ffffff;
      --text-900:  #0d1f16;
      --text-700:  #2a4035;
      --text-500:  #4d6b5c;
      --text-300:  #8aaa97;
      --error:     #ffdddd;
      --error-dark:#b91c1c;
      --radius-sm: 6px;
      --radius-md: 12px;
      --radius-lg: 20px;
      --radius-xl: 32px;
      --shadow-sm: 0 1px 4px rgba(11,32,22,0.08);
      --shadow-md: 0 4px 20px rgba(11,32,22,0.10);
      --shadow-lg: 0 12px 48px rgba(11,32,22,0.14);
      --shadow-xl: 0 24px 80px rgba(11,32,22,0.18);
      --font-display: 'Cormorant Garamond', Georgia, serif;
      --font-body: 'DM Sans', system-ui, sans-serif;
    }

    html, body, #root {
      width: 100%;
      min-height: 100%;
      overflow-x: hidden;
      scroll-behavior: smooth;
      background: var(--cream);
    }

    body { margin: 0; }

    .sws-root {
      width: 100%;
      min-height: 100vh;
      font-family: var(--font-body);
      background: var(--cream);
      color: var(--text-900);
      overflow-x: hidden;
    }

    .announce-bar {
      background: linear-gradient(90deg, var(--green-900) 0%, var(--green-700) 50%, var(--green-800) 100%);
      padding: 9px 4vw;
      display: flex; align-items: center; justify-content: center; gap: 12px;
      position: fixed; top: 0; left: 0; right: 0; z-index: 101;
    }
    .announce-pill {
      background: var(--gold); color: var(--green-900);
      font-size: 9px; font-weight: 700; letter-spacing: 0.14em; text-transform: uppercase;
      padding: 3px 9px; border-radius: 100px; white-space: nowrap; flex-shrink: 0;
    }
    .announce-text {
      font-size: 12.5px; font-weight: 400; color: rgba(216,240,228,0.88);
      text-align: center;
    }
    .announce-text strong { color: var(--white); font-weight: 600; }
    .announce-link {
      font-size: 12px; font-weight: 600; color: var(--gold-light);
      text-decoration: none; white-space: nowrap; flex-shrink: 0;
      transition: color 0.2s;
    }
    .announce-link:hover { color: var(--white); }

    .nav {
      position: fixed; top: 38px; left: 0; right: 0; z-index: 100;
      display: flex; align-items: center; justify-content: space-between;
      padding: 0 4vw; height: 64px;
      background: rgba(250,249,246,0.93);
      backdrop-filter: blur(14px);
      border-bottom: 1px solid rgba(46,107,72,0.10);
      box-shadow: 0 1px 12px rgba(11,32,22,0.06);
    }
    .nav-brand { display: flex; flex-direction: column; gap: 1px; text-decoration: none; }
    .nav-brand-name { font-family: var(--font-display); font-size: 22px; font-weight: 700; color: var(--green-700); letter-spacing: 0.01em; line-height: 1; }
    .nav-brand-sub { font-size: 9.5px; font-weight: 500; letter-spacing: 0.12em; text-transform: uppercase; color: var(--text-500); }
    .nav-mobile-hide { display: flex; align-items: center; gap: 28px; }
    .nav-link { font-size: 14px; font-weight: 500; color: var(--text-700); text-decoration: none; letter-spacing: 0.01em; transition: color 0.2s; }
    .nav-link:hover { color: var(--green-500); }
    .nav-cta {
      background: var(--green-700); color: var(--white);
      font-family: var(--font-body); font-size: 13.5px; font-weight: 600;
      padding: 9px 20px; border-radius: var(--radius-sm);
      border: none; cursor: pointer; letter-spacing: 0.02em;
      transition: background 0.2s, transform 0.15s, box-shadow 0.2s;
      box-shadow: 0 2px 8px rgba(26,61,43,0.25);
      text-decoration: none; display: inline-flex; align-items: center; gap: 6px;
    }
    .nav-cta:hover { background: var(--green-600); transform: translateY(-1px); box-shadow: 0 4px 16px rgba(26,61,43,0.30); }
    .nav-cta-dot { width: 6px; height: 6px; border-radius: 50%; background: var(--green-300); flex-shrink: 0; animation: pulse 2s ease-in-out infinite; }

    @keyframes pulse { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:0.55;transform:scale(0.85)} }

    .hero {
      min-height: 100vh;
      display: flex; flex-direction: column; justify-content: center;
      padding: 140px 4vw 72px;
      background: linear-gradient(160deg, var(--green-900) 0%, var(--green-700) 55%, var(--green-600) 100%);
      position: relative; overflow: hidden;
      width: 100%;
    }
    .hero-bg-pattern {
      position: absolute; inset: 0; pointer-events: none;
      background-image:
        radial-gradient(circle at 75% 30%, rgba(90,173,126,0.13) 0%, transparent 50%),
        radial-gradient(circle at 12% 80%, rgba(184,146,42,0.09) 0%, transparent 42%);
    }
    .hero-bg-lines {
      position: absolute; inset: 0; pointer-events: none; opacity: 0.05;
      background-image: repeating-linear-gradient(90deg, rgba(255,255,255,1) 0px, rgba(255,255,255,1) 1px, transparent 1px, transparent 80px);
    }
    .hero-inner {
      position: relative; z-index: 2;
      display: grid; grid-template-columns: 1.08fr 0.92fr;
      gap: 64px; align-items: center;
      max-width: 1440px; margin: 0 auto; width: 100%;
    }
    .hero-badge-row { display: flex; align-items: center; gap: 10px; margin-bottom: 28px; flex-wrap: wrap; }
    .hero-badge {
      display: inline-flex; align-items: center; gap: 7px;
      background: rgba(184,146,42,0.18); border: 1px solid rgba(212,169,60,0.38);
      color: var(--gold-light); font-size: 10.5px; font-weight: 600;
      letter-spacing: 0.11em; text-transform: uppercase;
      padding: 5px 13px; border-radius: 100px;
    }
    .hero-badge-dot { width: 6px; height: 6px; border-radius: 50%; background: var(--gold-light); animation: pulse 2s ease-in-out infinite; }
    .hero-badge-secondary {
      display: inline-flex; align-items: center;
      background: rgba(255,255,255,0.08); border: 1px solid rgba(255,255,255,0.15);
      color: rgba(216,240,228,0.75); font-size: 10.5px; font-weight: 500;
      letter-spacing: 0.08em; text-transform: uppercase;
      padding: 5px 13px; border-radius: 100px;
    }
    .hero-headline {
      font-family: var(--font-display);
      font-size: clamp(36px, 4.8vw, 62px);
      font-weight: 700; line-height: 1.10;
      color: var(--white); margin-bottom: 22px; letter-spacing: -0.01em;
    }
    .hero-headline em { font-style: italic; color: var(--green-200); }
    .hero-sub {
      font-size: 16.5px; font-weight: 300; line-height: 1.72;
      color: rgba(216,240,228,0.82); max-width: 560px; margin-bottom: 36px;
    }
    .hero-capture { margin-bottom: 28px; }
    .hero-capture-form {
      display: flex; align-items: stretch;
      background: rgba(255,255,255,0.10); border: 1.5px solid rgba(255,255,255,0.20);
      border-radius: var(--radius-sm); overflow: hidden; max-width: 520px;
      transition: border-color 0.2s, box-shadow 0.2s;
    }
    .hero-capture-form:focus-within { border-color: rgba(255,255,255,0.40); box-shadow: 0 0 0 4px rgba(255,255,255,0.06); }
    .hero-capture-input { flex: 1; font-family: var(--font-body); font-size: 14.5px; font-weight: 400; padding: 13px 18px; background: transparent; border: none; outline: none; color: var(--white); }
    .hero-capture-input::placeholder { color: rgba(216,240,228,0.45); }
    .hero-capture-btn {
      background: var(--white); color: var(--green-700); font-family: var(--font-body); font-size: 13.5px; font-weight: 700;
      padding: 13px 22px; border: none; cursor: pointer; white-space: nowrap; letter-spacing: 0.02em; transition: background 0.2s; flex-shrink: 0;
    }
    .hero-capture-btn:hover { background: var(--green-50); }
    .hero-capture-btn:disabled {
      opacity: 0.75;
      cursor: not-allowed;
    }
    .hero-capture-success {
      display: flex; align-items: center; gap: 10px;
      background: rgba(90,173,126,0.18); border: 1.5px solid rgba(90,173,126,0.35);
      border-radius: var(--radius-sm); padding: 13px 18px; max-width: 520px;
    }
    .hero-capture-success-icon { font-size: 18px; }
    .hero-capture-success-text { font-size: 14px; color: var(--green-100); font-weight: 400; line-height: 1.4; }
    .hero-capture-success-text strong { font-weight: 600; }
    .hero-capture-note { font-size: 11.5px; color: rgba(216,240,228,0.45); margin-top: 9px; }
    .hero-capture-note.error { color: var(--error); }
    .hero-social-proof { display: flex; align-items: center; gap: 20px; flex-wrap: wrap; }
    .hero-proof-item { display: flex; align-items: center; gap: 7px; font-size: 12.5px; color: rgba(216,240,228,0.65); font-weight: 300; }

    .hero-right { display: flex; flex-direction: column; gap: 14px; }
    .hero-launch-box {
      background: rgba(184,146,42,0.14); border: 1.5px solid rgba(212,169,60,0.28);
      border-radius: var(--radius-md); padding: 28px 26px;
    }
    .hero-launch-title { font-size: 12.5px; font-weight: 600; letter-spacing: 0.06em; color: var(--gold-light); text-transform: uppercase; margin-bottom: 20px; }
    .hero-countdown-row { display: grid; grid-template-columns: repeat(4, 1fr); gap: 10px; margin-bottom: 18px; }
    .hero-countdown-cell { text-align: center; }
    .hero-countdown-num { font-family: var(--font-display); font-size: 32px; font-weight: 700; color: var(--white); line-height: 1; margin-bottom: 4px; }
    .hero-countdown-label { font-size: 9px; font-weight: 600; letter-spacing: 0.10em; text-transform: uppercase; color: rgba(216,240,228,0.50); }
    .hero-countdown-divider { height: 1px; background: rgba(212,169,60,0.18); margin-bottom: 18px; }
    .hero-launch-date { font-size: 13px; color: rgba(216,240,228,0.72); font-weight: 300; line-height: 1.55; }
    .hero-launch-date strong { color: var(--gold-light); font-weight: 600; }
    .hero-card-row { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
    .hero-card { background: rgba(255,255,255,0.07); border: 1px solid rgba(255,255,255,0.11); border-radius: var(--radius-md); padding: 20px 18px; backdrop-filter: blur(8px); transition: transform 0.25s, background 0.25s; }
    .hero-card:hover { transform: translateY(-3px); background: rgba(255,255,255,0.11); }
    .hero-card-icon { font-size: 20px; margin-bottom: 9px; }
    .hero-card-val { font-family: var(--font-display); font-size: 28px; font-weight: 700; color: var(--white); line-height: 1; margin-bottom: 4px; }
    .hero-card-val span { font-size: 15px; font-weight: 500; }
    .hero-card-label { font-size: 11px; font-weight: 400; color: var(--green-200); line-height: 1.4; }

    .section { padding: 96px 4vw; width: 100%; }
    .section-inner { max-width: 1440px; margin: 0 auto; width: 100%; }
    .section-label { display: inline-flex; align-items: center; gap: 8px; font-size: 11px; font-weight: 600; letter-spacing: 0.12em; text-transform: uppercase; color: var(--green-500); margin-bottom: 16px; }
    .section-label::before { content: ''; display: block; width: 20px; height: 2px; background: var(--green-400); border-radius: 2px; }
    .section-title { font-family: var(--font-display); font-size: clamp(28px, 3.5vw, 46px); font-weight: 700; line-height: 1.15; color: var(--text-900); margin-bottom: 16px; letter-spacing: -0.01em; }
    .section-title em { font-style: italic; color: var(--green-500); }
    .section-sub { font-size: 17px; font-weight: 300; line-height: 1.7; color: var(--text-500); max-width: 700px; }

    .pain { background: var(--white); }
    .pain-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; margin-top: 56px; }
    .pain-card { border: 1px solid rgba(46,107,72,0.12); border-radius: var(--radius-md); padding: 32px 28px; background: var(--white); transition: box-shadow 0.25s, transform 0.25s, border-color 0.25s; position: relative; overflow: hidden; }
    .pain-card::before { content: ''; position: absolute; top: 0; left: 0; right: 0; height: 3px; background: linear-gradient(90deg, var(--green-500), var(--green-300)); transform: scaleX(0); transform-origin: left; transition: transform 0.35s; }
    .pain-card:hover { box-shadow: var(--shadow-lg); transform: translateY(-4px); border-color: rgba(46,107,72,0.22); }
    .pain-card:hover::before { transform: scaleX(1); }
    .pain-icon { width: 48px; height: 48px; border-radius: var(--radius-sm); background: var(--green-50); display: flex; align-items: center; justify-content: center; font-size: 22px; margin-bottom: 18px; }
    .pain-title { font-size: 16px; font-weight: 600; color: var(--text-900); margin-bottom: 10px; }
    .pain-desc { font-size: 14px; font-weight: 300; line-height: 1.65; color: var(--text-500); }

    .features { background: var(--green-900); }
    .features .section-title { color: var(--white); }
    .features .section-sub { color: rgba(216,240,228,0.70); }
    .features .section-label { color: var(--green-300); }
    .features .section-label::before { background: var(--green-400); }
    .features-coming-note { display: inline-flex; align-items: center; gap: 8px; background: rgba(184,146,42,0.15); border: 1px solid rgba(212,169,60,0.25); color: var(--gold-light); font-size: 12px; font-weight: 500; padding: 8px 16px; border-radius: 100px; margin-top: 16px; }
    .features-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 2px; margin-top: 52px; background: rgba(255,255,255,0.05); border-radius: var(--radius-lg); overflow: hidden; border: 1px solid rgba(255,255,255,0.06); }
    .feature-cell { padding: 36px 30px; background: var(--green-900); transition: background 0.25s; }
    .feature-cell:hover { background: rgba(255,255,255,0.04); }
    .feature-num { font-family: var(--font-display); font-size: 13px; font-weight: 600; color: var(--green-400); letter-spacing: 0.05em; margin-bottom: 16px; }
    .feature-icon { font-size: 26px; margin-bottom: 14px; display: block; }
    .feature-title { font-size: 16px; font-weight: 600; color: var(--white); margin-bottom: 10px; }
    .feature-desc { font-size: 13.5px; font-weight: 300; line-height: 1.65; color: rgba(216,240,228,0.65); }

    .workflow { background: var(--cream); }
    .workflow-header { display: grid; grid-template-columns: 1fr 1fr; gap: 80px; align-items: start; margin-bottom: 72px; }
    .workflow-step { display: grid; grid-template-columns: 80px 1fr; gap: 0; align-items: start; }
    .workflow-step-num-col { display: flex; flex-direction: column; align-items: center; }
    .workflow-step-num { width: 44px; height: 44px; border-radius: 50%; background: var(--green-700); color: var(--white); font-family: var(--font-display); font-size: 18px; font-weight: 700; display: flex; align-items: center; justify-content: center; flex-shrink: 0; box-shadow: 0 0 0 6px rgba(46,107,72,0.12); }
    .workflow-step-line { width: 2px; flex: 1; min-height: 48px; background: linear-gradient(to bottom, var(--green-300), transparent); margin: 8px auto 0; }
    .workflow-step:last-child .workflow-step-line { display: none; }
    .workflow-step-body { padding: 2px 0 52px 0; }
    .workflow-step-tag { font-size: 10px; font-weight: 600; letter-spacing: 0.12em; text-transform: uppercase; color: var(--green-500); margin-bottom: 6px; }
    .workflow-step-title { font-size: 18px; font-weight: 600; color: var(--text-900); margin-bottom: 8px; }
    .workflow-step-desc { font-size: 14px; font-weight: 300; line-height: 1.7; color: var(--text-500); }
    .workflow-visual-col { display: flex; flex-direction: column; gap: 14px; padding-top: 8px; }
    .workflow-badge { background: var(--white); border: 1px solid rgba(46,107,72,0.15); border-radius: var(--radius-md); padding: 20px 22px; box-shadow: var(--shadow-sm); display: flex; align-items: flex-start; gap: 14px; }
    .workflow-badge-icon { font-size: 20px; margin-top: 1px; }
    .workflow-badge-title { font-size: 14px; font-weight: 600; color: var(--text-900); margin-bottom: 3px; }
    .workflow-badge-desc { font-size: 12.5px; color: var(--text-500); line-height: 1.5; font-weight: 300; }

    .savings { background: linear-gradient(135deg, var(--green-800) 0%, var(--green-700) 100%); position: relative; overflow: hidden; }
    .savings-bg { position: absolute; inset: 0; pointer-events: none; background: radial-gradient(circle at 80% 50%, rgba(90,173,126,0.15) 0%, transparent 60%); }
    .savings .section-title { color: var(--white); }
    .savings .section-sub { color: rgba(216,240,228,0.75); }
    .savings .section-label { color: var(--gold-light); }
    .savings .section-label::before { background: var(--gold); }
    .savings-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; margin-top: 56px; }
    .savings-card { background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.10); border-radius: var(--radius-lg); padding: 34px 30px; backdrop-filter: blur(6px); transition: background 0.25s, transform 0.25s; }
    .savings-card:hover { background: rgba(255,255,255,0.10); transform: translateY(-3px); }
    .savings-card-head { display: flex; align-items: flex-start; justify-content: space-between; margin-bottom: 18px; }
    .savings-card-icon { font-size: 26px; }
    .savings-card-badge { font-size: 10.5px; font-weight: 600; letter-spacing: 0.08em; text-transform: uppercase; color: var(--gold-light); background: rgba(184,146,42,0.18); border: 1px solid rgba(212,169,60,0.25); padding: 4px 10px; border-radius: 100px; }
    .savings-card-title { font-size: 17px; font-weight: 600; color: var(--white); margin-bottom: 10px; }
    .savings-card-desc { font-size: 13.5px; font-weight: 300; line-height: 1.7; color: rgba(216,240,228,0.72); }
    .savings-list { margin-top: 14px; display: flex; flex-direction: column; gap: 8px; }
    .savings-list-item { display: flex; align-items: baseline; gap: 8px; font-size: 13px; color: rgba(216,240,228,0.80); font-weight: 300; }
    .savings-list-item::before { content: '✓'; color: var(--green-300); font-size: 11px; font-weight: 700; flex-shrink: 0; }

    .waitlist { background: var(--cream); }
    .waitlist-inner-wrap {
      background: var(--green-900);
      border-radius: var(--radius-xl);
      overflow: hidden;
      box-shadow: var(--shadow-xl);
      display: grid;
      grid-template-columns: 1fr 1.35fr;
      width: 100%;
    }
    .waitlist-left { padding: 64px 48px; background: linear-gradient(160deg, var(--green-800) 0%, var(--green-900) 100%); }
    .waitlist-eyebrow { font-size: 11px; font-weight: 600; letter-spacing: 0.14em; text-transform: uppercase; color: var(--gold-light); margin-bottom: 20px; }
    .waitlist-title { font-family: var(--font-display); font-size: clamp(26px, 3vw, 38px); font-weight: 700; line-height: 1.18; color: var(--white); margin-bottom: 18px; }
    .waitlist-title em { font-style: italic; color: var(--green-200); }
    .waitlist-desc { font-size: 15px; font-weight: 300; line-height: 1.7; color: rgba(216,240,228,0.72); margin-bottom: 40px; }
    .waitlist-perks { display: flex; flex-direction: column; gap: 18px; }
    .waitlist-perk { display: flex; align-items: flex-start; gap: 12px; }
    .waitlist-perk-icon { font-size: 18px; flex-shrink: 0; }
    .waitlist-perk-title { font-size: 14px; font-weight: 600; color: var(--white); margin-bottom: 2px; }
    .waitlist-perk-desc { font-size: 12.5px; color: rgba(216,240,228,0.60); font-weight: 300; line-height: 1.45; }
    .waitlist-right { padding: 64px 48px; background: var(--white); }
    .waitlist-form-title { font-family: var(--font-display); font-size: 24px; font-weight: 700; color: var(--text-900); margin-bottom: 6px; }
    .waitlist-form-sub { font-size: 14px; font-weight: 300; color: var(--text-500); margin-bottom: 32px; line-height: 1.55; }
    .contact-form { display: flex; flex-direction: column; gap: 16px; }
    .form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; }
    .form-group { display: flex; flex-direction: column; gap: 5px; }
    .form-label { font-size: 11.5px; font-weight: 600; letter-spacing: 0.04em; color: var(--text-700); }
    .form-input { font-family: var(--font-body); font-size: 14px; font-weight: 400; padding: 11px 15px; border-radius: var(--radius-sm); border: 1.5px solid rgba(46,107,72,0.18); background: var(--cream); color: var(--text-900); outline: none; transition: border-color 0.2s, box-shadow 0.2s; width: 100%; }
    .form-input:focus { border-color: var(--green-500); box-shadow: 0 0 0 3px rgba(46,107,72,0.10); }
    .form-input::placeholder { color: var(--text-300); }
    .form-select { appearance: none; background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%238aaa97' d='M6 8L1 3h10z'/%3E%3C/svg%3E"); background-repeat: no-repeat; background-position: right 14px center; cursor: pointer; }
    .form-textarea { resize: vertical; min-height: 90px; }
    .form-submit {
      background: var(--green-700); color: var(--white); font-family: var(--font-body); font-size: 15px; font-weight: 600;
      padding: 14px 28px; border-radius: var(--radius-sm); border: none; cursor: pointer; letter-spacing: 0.02em;
      box-shadow: 0 4px 18px rgba(26,61,43,0.25); transition: background 0.2s, transform 0.15s, box-shadow 0.2s; align-self: flex-start;
    }
    .form-submit:hover { background: var(--green-600); transform: translateY(-1px); box-shadow: 0 6px 22px rgba(26,61,43,0.30); }
    .form-submit:disabled {
      opacity: 0.75;
      cursor: not-allowed;
      transform: none;
    }
    .form-note { font-size: 11.5px; color: var(--text-300); line-height: 1.5; }
    .form-note.error { color: var(--error-dark); }
    .waitlist-success { display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; padding: 32px 16px; gap: 18px; min-height: 400px; }
    .waitlist-success-icon { font-size: 52px; }
    .waitlist-success-title { font-family: var(--font-display); font-size: 28px; font-weight: 700; color: var(--text-900); }
    .waitlist-success-desc { font-size: 15px; color: var(--text-500); font-weight: 300; line-height: 1.65; max-width: 320px; }

    .footer { background: var(--green-900); padding: 52px 4vw 32px; width: 100%; }
    .footer-inner { max-width: 1440px; margin: 0 auto; width: 100%; }
    .footer-top { display: grid; grid-template-columns: 2fr 1fr 1fr; gap: 48px; margin-bottom: 48px; }
    .footer-brand-name { font-family: var(--font-display); font-size: 22px; font-weight: 700; color: var(--white); margin-bottom: 8px; }
    .footer-brand-desc { font-size: 13px; font-weight: 300; line-height: 1.65; color: rgba(216,240,228,0.50); max-width: 320px; margin-bottom: 20px; }
    .footer-brand-status { display: inline-flex; align-items: center; gap: 7px; background: rgba(184,146,42,0.15); border: 1px solid rgba(212,169,60,0.25); color: var(--gold-light); font-size: 10.5px; font-weight: 600; letter-spacing: 0.10em; text-transform: uppercase; padding: 5px 12px; border-radius: 100px; }
    .footer-brand-status-dot { width: 5px; height: 5px; border-radius: 50%; background: var(--gold-light); animation: pulse 2s ease-in-out infinite; }
    .footer-col-title { font-size: 11.5px; font-weight: 600; letter-spacing: 0.10em; text-transform: uppercase; color: rgba(216,240,228,0.40); margin-bottom: 18px; }
    .footer-links { display: flex; flex-direction: column; gap: 11px; }
    .footer-link { font-size: 13px; color: rgba(216,240,228,0.60); text-decoration: none; font-weight: 300; transition: color 0.2s; }
    .footer-link:hover { color: var(--green-200); }
    .footer-divider { height: 1px; background: rgba(255,255,255,0.07); margin-bottom: 26px; }
    .footer-bottom { display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 12px; }
    .footer-copy { font-size: 12px; color: rgba(216,240,228,0.30); font-weight: 300; }
    .footer-legal { display: flex; gap: 22px; }
    .footer-legal a { font-size: 12px; color: rgba(216,240,228,0.30); text-decoration: none; font-weight: 300; transition: color 0.2s; }
    .footer-legal a:hover { color: rgba(216,240,228,0.60); }

    @media (max-width: 1200px) {
      .hero-inner { grid-template-columns: 1fr; gap: 48px; }
      .hero-right { max-width: 700px; }
      .pain-grid { grid-template-columns: 1fr 1fr; }
      .features-grid { grid-template-columns: 1fr 1fr; }
      .workflow-header { grid-template-columns: 1fr; gap: 40px; }
      .savings-grid { grid-template-columns: 1fr; }
      .waitlist-inner-wrap { grid-template-columns: 1fr; }
      .waitlist-left { padding: 48px 40px; }
      .waitlist-right { padding: 48px 40px; }
      .footer-top { grid-template-columns: 1fr 1fr; gap: 36px; }
    }

    @media (max-width: 768px) {
      .nav-mobile-hide { display: none; }
      .announce-bar { gap: 8px; }
      .announce-text { font-size: 11px; }
      .pain-grid { grid-template-columns: 1fr; }
      .features-grid { grid-template-columns: 1fr; }
      .hero-card-row { grid-template-columns: 1fr 1fr; }
      .section { padding: 72px 4vw; }
      .form-row { grid-template-columns: 1fr; }
      .waitlist-left { padding: 40px 28px; }
      .waitlist-right { padding: 40px 28px; }
      .footer-top { grid-template-columns: 1fr; gap: 28px; }
      .footer-bottom { flex-direction: column; align-items: flex-start; }
    }

    @media (max-width: 480px) {
      .hero-card-row { grid-template-columns: 1fr; }
      .hero-countdown-num { font-size: 24px; }
      .announce-link { display: none; }
      .hero-capture-form { flex-direction: column; max-width: 100%; }
      .hero-capture-btn { width: 100%; }
    }
  `;

  return (
    <div className="sws-root">
      <style>{styles}</style>

      <div className="announce-bar">
        <div className="announce-pill">Coming Soon</div>
        <div className="announce-text">
          <strong>SwardSync beta launches in June 2026.</strong> Join the waitlist for early access updates and launch news.
        </div>
        <a href="#waitlist" className="announce-link">Join the waitlist →</a>
      </div>

      <nav className="nav">
        <a href="#" className="nav-brand">
          <span className="nav-brand-name">SwardSync Systems</span>
          <span className="nav-brand-sub">Lawn &amp; Landscape Software</span>
        </a>
        <div className="nav-mobile-hide">
          <a href="#features" className="nav-link">Features</a>
          <a href="#workflow" className="nav-link">How It Works</a>
          <a href="#waitlist" className="nav-cta">
            <span className="nav-cta-dot" />
            Join the Waitlist
          </a>
        </div>
      </nav>

      <section className="hero">
        <div className="hero-bg-pattern" />
        <div className="hero-bg-lines" />
        <div className="hero-inner">
          <div>
            <div className="hero-badge-row">
              <div className="hero-badge"><span className="hero-badge-dot" />Beta Launching June 2026</div>
              <div className="hero-badge-secondary">Early Access Open</div>
            </div>
            <h1 className="hero-headline">
              Run a tighter operation.<br /><em>Keep more of what you earn.</em>
            </h1>
            <p className="hero-sub">
              SwardSync is new software built specifically for lawn care and landscaping companies — smarter scheduling, better routing, informed crews, and cleaner daily operations.
            </p>

            <div className="hero-capture">
              {!heroSubmitted ? (
                <>
                  <form className="hero-capture-form" onSubmit={handleHeroSubmit}>
                    <input
                      className="hero-capture-input"
                      type="email"
                      placeholder="Enter your email to join the waitlist"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <button className="hero-capture-btn" type="submit" disabled={heroSaving}>
                      {heroSaving ? "Saving..." : "Get Early Access"}
                    </button>
                  </form>
                  <div className="hero-capture-note">No spam. We'll notify you before we launch. Unsubscribe any time.</div>
                  {heroError && <div className="hero-capture-note error">{heroError}</div>}
                </>
              ) : (
                <div className="hero-capture-success">
                  <div className="hero-capture-success-icon">🌿</div>
                  <div className="hero-capture-success-text">
                    <strong>You're on the list.</strong> We'll be in touch before launch — watch your inbox.
                  </div>
                </div>
              )}
            </div>

            <div className="hero-social-proof">
              <div className="hero-proof-item">⚡ Early access updates before launch</div>
              <div className="hero-proof-item">💬 Shape the product before launch</div>
              <div className="hero-proof-item">🤝 Direct onboarding support when we go live</div>
            </div>
          </div>

          <div className="hero-right">
            <div className="hero-launch-box">
              <div className="hero-launch-title">⏳ Estimated launch countdown</div>
              <div className="hero-countdown-row">
                {[
                  [countdown.days, "Days"],
                  [countdown.hours, "Hours"],
                  [countdown.mins, "Mins"],
                  [countdown.secs, "Secs"],
                ].map(([n, l]) => (
                  <div className="hero-countdown-cell" key={l}>
                    <div className="hero-countdown-num">{n}</div>
                    <div className="hero-countdown-label">{l}</div>
                  </div>
                ))}
              </div>
              <div className="hero-countdown-divider" />
              <div className="hero-launch-date">
                Targeting a <strong>June 2026 beta launch</strong>. Waitlist members get early access updates and a direct line to the team during onboarding.
              </div>
            </div>

            <div className="hero-card-row">
              {[
                { icon: "📅", val: "2", unit: "hrs", label: "Daily admin time saved per office manager" },
                { icon: "🗺️", val: "18", unit: "%", label: "Typical reduction in wasted drive time" },
                { icon: "📋", val: "↓", unit: " rework", label: "Fewer revisits when crews are fully briefed" },
                { icon: "💰", val: "1", unit: " tool", label: "Replace spreadsheets, texts, and paper" },
              ].map((c) => (
                <div className="hero-card" key={c.label}>
                  <div className="hero-card-icon">{c.icon}</div>
                  <div className="hero-card-val">{c.val}<span>{c.unit}</span></div>
                  <div className="hero-card-label">{c.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section pain" id="pain">
        <div className="section-inner">
          <div className="section-label">Why we're building this</div>
          <h2 className="section-title">Where lawn care businesses <em>lose time and money</em></h2>
          <p className="section-sub">
            SwardSync is being built to address the most common inefficiencies in lawn care and landscaping operations — ones that compound quietly across every week.
          </p>
          <div className="pain-grid">
            {[
              { icon: "📂", title: "Admin overload", desc: "Hours each week consumed by manual scheduling, confirmation chasing, and spreadsheets that no one else can navigate." },
              { icon: "🔄", title: "Route inefficiency", desc: "Crews zig-zag across the day, burning fuel and billable time with no intelligent grouping of nearby jobs." },
              { icon: "📡", title: "Poor office-to-field comms", desc: "Field crews miss updates. Offices don’t know job status until day end. Issues fall through the gap in between." },
              { icon: "📝", title: "Missing job details", desc: "Gate codes, customer notes, and special instructions live in texts and inboxes — not with the crew doing the job." },
              { icon: "🔁", title: "Costly revisit work", desc: "When crews aren’t fully briefed, mistakes happen. Revisit jobs quietly erode your margins and frustrate customers." },
              { icon: "🖥️", title: "Overcomplicated software", desc: "Enterprise platforms built for multi-trade contractors bring a learning curve and a price tag your business doesn’t need." },
            ].map((item) => (
              <div className="pain-card" key={item.title}>
                <div className="pain-icon">{item.icon}</div>
                <div className="pain-title">{item.title}</div>
                <div className="pain-desc">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section features" id="features">
        <div className="section-inner">
          <div className="section-label">What's being built</div>
          <h2 className="section-title">Everything your operation needs. <em>Nothing it doesn't.</em></h2>
          <p className="section-sub">
            SwardSync is designed around the practical tools lawn care and landscaping businesses actually use every day.
          </p>
          <div className="features-coming-note">🚧 In active development — waitlist members get early updates and product news</div>
          <div className="features-grid">
            {[
              { num: "01", icon: "🗓️", title: "Flexible Scheduling", desc: "One-off and recurring jobs managed side by side. Set frequencies, block out dates, reschedule in seconds." },
              { num: "02", icon: "🗺️", title: "Smarter Routing", desc: "Automatically group and sequence nearby jobs to reduce drive time. Less fuel, more jobs per day." },
              { num: "03", icon: "🏡", title: "Customer & Property Records", desc: "Gate codes, access notes, service history, and preferences stored against each property — always accessible." },
              { num: "04", icon: "📱", title: "Mobile Crew Access", desc: "Crews see their full job list, property notes, and status updates on their phone. No printing or group chats." },
              { num: "05", icon: "✅", title: "Job Status Tracking", desc: "Track which jobs are scheduled, in-progress, or completed. Full visibility from a single screen." },
              { num: "06", icon: "📷", title: "Notes & Photo Records", desc: "Capture photos, on-site notes, and issue flags directly on the job. Records that protect you and inform customers." },
            ].map((f) => (
              <div className="feature-cell" key={f.num}>
                <div className="feature-num">{f.num}</div>
                <span className="feature-icon">{f.icon}</span>
                <div className="feature-title">{f.title}</div>
                <div className="feature-desc">{f.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section workflow" id="workflow">
        <div className="section-inner">
          <div className="workflow-header">
            <div>
              <div className="section-label">How it will work</div>
              <h2 className="section-title">From morning dispatch <em>to final sign-off</em></h2>
              <p className="section-sub">
                SwardSync will connect every part of your operation — office scheduling, field execution, and end-of-day follow-up — into one clean loop.
              </p>
            </div>
            <div className="workflow-visual-col">
              {[
                { icon: "🏢", title: "Office", desc: "Scheduling, customer management, and route planning from one dashboard." },
                { icon: "🌿", title: "Field", desc: "Crews get full job details and update status live from their phones." },
                { icon: "📊", title: "Follow-up", desc: "Photo records, notes, and logs keep every job properly closed out." },
              ].map((b) => (
                <div className="workflow-badge" key={b.title}>
                  <div className="workflow-badge-icon">{b.icon}</div>
                  <div>
                    <div className="workflow-badge-title">{b.title}</div>
                    <div className="workflow-badge-desc">{b.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="workflow-steps">
            {[
              { tag: "Morning — Office", num: "1", title: "Build and dispatch the day’s schedule", desc: "Your office manager sets the schedule, groups nearby jobs, and sends each crew their full job list before they leave. No printed sheets, no phone calls." },
              { tag: "In the field — Crew", num: "2", title: "Crews arrive informed and ready to work", desc: "Each crew member opens the app and sees their jobs, property details, access notes, and customer preferences. First-time errors drop. Revisit work falls." },
              { tag: "Live — Office visibility", num: "3", title: "Track job progress without chasing anyone", desc: "The office sees job status update in real time as crews start and complete work. No status calls. No end-of-day scramble." },
              { tag: "Close of day — Records", num: "4", title: "Close every job with a proper record", desc: "Crews log notes and photos on completion. Every job closes with a clean record — useful for disputes, quality checks, and customer conversations." },
            ].map((s) => (
              <div className="workflow-step" key={s.num}>
                <div className="workflow-step-num-col">
                  <div className="workflow-step-num">{s.num}</div>
                  <div className="workflow-step-line" />
                </div>
                <div className="workflow-step-body">
                  <div className="workflow-step-tag">{s.tag}</div>
                  <div className="workflow-step-title">{s.title}</div>
                  <div className="workflow-step-desc">{s.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section savings" id="savings">
        <div className="savings-bg" />
        <div className="section-inner" style={{ position: "relative", zIndex: 2 }}>
          <div className="section-label">Value &amp; cost efficiency</div>
          <h2 className="section-title">Built to pay for itself — <em>from month one</em></h2>
          <p className="section-sub">
            SwardSync is priced for lawn care and landscaping businesses — not large enterprise contractors. Focused tools, honest pricing, and real return for your scale.
          </p>
          <div className="savings-grid">
            {[
              { icon: "⏱️", badge: "Office efficiency", title: "Reclaim hours from admin work", desc: "Manual scheduling, confirmation chasing, and spreadsheet upkeep quietly consume your office team. Centralised tools give those hours back.", items: ["Faster daily schedule builds", "No more manual status calls", "Centralised customer and property records"] },
              { icon: "🛣️", badge: "Crew productivity", title: "More jobs per crew, per day", desc: "Smarter route grouping and better upfront job briefing mean crews spend more time on-site and less time driving or asking questions.", items: ["Reduced wasted travel between jobs", "Fewer incomplete or incorrect visits", "Crews briefed before they arrive"] },
              { icon: "🛡️", badge: "Margin protection", title: "Cut the quiet costs that erode profit", desc: "Revisit jobs, fuel waste, poor records, and miscommunication are margin killers. SwardSync targets each one without adding complexity.", items: ["Fewer costly revisit jobs", "Lower fuel spend through better routing", "Records that protect you in disputes"] },
              { icon: "💵", badge: "Software cost", title: "Priced to fit your operation", desc: "Most field-service platforms are built and priced for multi-trade contractors. SwardSync is focused, affordable, and sized for your business — not theirs.", items: ["No enterprise pricing for features you won’t use", "Transparent, straightforward pricing", "Built for practical day-to-day operations"] },
            ].map((c) => (
              <div className="savings-card" key={c.title}>
                <div className="savings-card-head">
                  <div className="savings-card-icon">{c.icon}</div>
                  <div className="savings-card-badge">{c.badge}</div>
                </div>
                <div className="savings-card-title">{c.title}</div>
                <div className="savings-card-desc">{c.desc}</div>
                <div className="savings-list">
                  {c.items.map((item) => (
                    <div className="savings-list-item" key={item}>{item}</div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section waitlist" id="waitlist">
        <div className="section-inner">
          <div className="waitlist-inner-wrap">
            <div className="waitlist-left">
              <div className="waitlist-eyebrow">Join the waitlist</div>
              <h2 className="waitlist-title">Get in early.<br /><em>Stay in the loop.</em></h2>
              <p className="waitlist-desc">
                Register your interest and we’ll reach out before launch with early access updates, product news, and onboarding support. No commitment required.
              </p>
              <div className="waitlist-perks">
                {[
                  { icon: "🚀", title: "Early access updates", desc: "Be the first to hear about launch timing, product updates, and availability." },
                  { icon: "💬", title: "Shape the product", desc: "Your feedback directly influences what we build before and after launch." },
                  { icon: "🤝", title: "Dedicated onboarding", desc: "We’ll get you set up and running — not left to figure it out alone." },
                  { icon: "🌿", title: "Built for your workflow", desc: "We are designing SwardSync around the real day-to-day needs of lawn care businesses." },
                ].map((p) => (
                  <div className="waitlist-perk" key={p.title}>
                    <div className="waitlist-perk-icon">{p.icon}</div>
                    <div>
                      <div className="waitlist-perk-title">{p.title}</div>
                      <div className="waitlist-perk-desc">{p.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="waitlist-right">
              {!waitlistSubmitted ? (
                <>
                  <div className="waitlist-form-title">Reserve your spot</div>
                  <div className="waitlist-form-sub">Tell us about your operation and we’ll follow up personally before launch.</div>
                  <div className="contact-form">
                    <div className="form-row">
                      <div className="form-group">
                        <label className="form-label">First name</label>
                        <input
                          className="form-input"
                          type="text"
                          placeholder="Jane"
                          value={waitlistForm.firstName}
                          onChange={(e) => setWaitlistForm((f) => ({ ...f, firstName: e.target.value }))}
                        />
                      </div>
                      <div className="form-group">
                        <label className="form-label">Last name</label>
                        <input
                          className="form-input"
                          type="text"
                          placeholder="Smith"
                          value={waitlistForm.lastName}
                          onChange={(e) => setWaitlistForm((f) => ({ ...f, lastName: e.target.value }))}
                        />
                      </div>
                    </div>

                    <div className="form-row">
                      <div className="form-group">
                        <label className="form-label">Company name</label>
                        <input
                          className="form-input"
                          type="text"
                          placeholder="Green Horizons Ltd"
                          value={waitlistForm.company}
                          onChange={(e) => setWaitlistForm((f) => ({ ...f, company: e.target.value }))}
                        />
                      </div>
                      <div className="form-group">
                        <label className="form-label">Phone number</label>
                        <input
                          className="form-input"
                          type="tel"
                          placeholder="+44 7700 000000"
                          value={waitlistForm.phone}
                          onChange={(e) => setWaitlistForm((f) => ({ ...f, phone: e.target.value }))}
                        />
                      </div>
                    </div>

                    <div className="form-group">
                      <label className="form-label">Email address</label>
                      <input
                        className="form-input"
                        type="email"
                        placeholder="jane@company.com"
                        value={waitlistForm.email}
                        onChange={(e) => setWaitlistForm((f) => ({ ...f, email: e.target.value }))}
                      />
                    </div>

                    <div className="form-group">
                      <label className="form-label">How many crew members do you run?</label>
                      <select
                        className="form-input form-select"
                        value={waitlistForm.size}
                        onChange={(e) => setWaitlistForm((f) => ({ ...f, size: e.target.value }))}
                      >
                        <option value="">Select crew size</option>
                        <option>Just me (sole trader)</option>
                        <option>2–3 crew members</option>
                        <option>4–8 crew members</option>
                        <option>9–15 crew members</option>
                        <option>16+ crew members</option>
                      </select>
                    </div>

                    <div className="form-group">
                      <label className="form-label">What’s your biggest operational challenge right now?</label>
                      <textarea
                        className="form-input form-textarea"
                        placeholder="e.g. scheduling takes too long, crews miss job details, too much time on admin..."
                        value={waitlistForm.note}
                        onChange={(e) => setWaitlistForm((f) => ({ ...f, note: e.target.value }))}
                      />
                    </div>

                    <button className="form-submit" type="button" onClick={handleWaitlistSubmit} disabled={waitlistSaving}>
                      {waitlistSaving ? "Saving..." : "Reserve My Spot →"}
                    </button>

                    <p className="form-note">We’ll never share your details. Unsubscribe any time.</p>
                    {waitlistError && <p className="form-note error">{waitlistError}</p>}
                  </div>
                </>
              ) : (
                <div className="waitlist-success">
                  <div className="waitlist-success-icon">🌿</div>
                  <div className="waitlist-success-title">You’re on the list.</div>
                  <div className="waitlist-success-desc">
                    We’ll be in touch personally before launch with your early access details and product updates. Thank you for believing in what we’re building.
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-inner">
          <div className="footer-top">
            <div>
              <div className="footer-brand-name">SwardSync Systems</div>
              <p className="footer-brand-desc">
                Affordable scheduling, routing, and crew management software built for lawn care and landscaping businesses. Beta launching June 2026.
              </p>
              <div className="footer-brand-status">
                <span className="footer-brand-status-dot" />
                Pre-launch — waitlist open
              </div>
            </div>
            <div>
              <div className="footer-col-title">The Product</div>
              <div className="footer-links">
                {[["Features", "#features"], ["How It Works", "#workflow"], ["Join the Waitlist", "#waitlist"]].map(([l, h]) => (
                  <a href={h} className="footer-link" key={l}>{l}</a>
                ))}
              </div>
            </div>
            <div>
              <div className="footer-col-title">Company</div>
              <div className="footer-links">
                {[["About Us", "#"], ["Our Roadmap", "#"], ["Contact", "#waitlist"], ["hello@swardsync.com", "#"]].map(([l, h]) => (
                  <a href={h} className="footer-link" key={l}>{l}</a>
                ))}
              </div>
            </div>
          </div>
          <div className="footer-divider" />
          <div className="footer-bottom">
            <div className="footer-copy">© {new Date().getFullYear()} SwardSync Systems Ltd. All rights reserved.</div>
            <div className="footer-legal">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
              <a href="#">Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}