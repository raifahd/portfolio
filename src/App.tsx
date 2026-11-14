import { useEffect, useRef, useState } from "react";
import type { CSSProperties, ReactNode } from "react";

type IconName =
  | "arrow"
  | "down"
  | "up"
  | "sun"
  | "moon"
  | "code"
  | "close"
  | "left"
  | "right"
  | "pause"
  | "play"
  | "check"
  | "globe"
  | "layers";
function Icon({ name, size = 20 }: { name: IconName; size?: number }) {
  const paths: Record<IconName, ReactNode> = {
    arrow: (
      <>
        <path d="M5 19 19 5M5 5h14v14" />
      </>
    ),
    down: (
      <>
        <path d="M12 4v16m-6-6 6 6 6-6" />
      </>
    ),
    up: (
      <>
        <path d="M12 20V4m-6 6 6-6 6 6" />
      </>
    ),
    sun: (
      <>
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2m0 16v2M2 12h2m16 0h2M5 5l1.5 1.5m11 11L19 19M5 19l1.5-1.5m11-11L19 5" />
      </>
    ),
    moon: <path d="M20.5 14A9 9 0 0 1 10 3.5 9 9 0 1 0 20.5 14Z" />,
    code: (
      <>
        <path d="m8 7-5 5 5 5m8-10 5 5-5 5M14 4l-4 16" />
      </>
    ),
    close: <path d="m6 6 12 12M6 18 18 6" />,
    left: <path d="m14 6-6 6 6 6" />,
    right: <path d="m10 6 6 6-6 6" />,
    pause: (
      <>
        <path d="M9 5v14M15 5v14" />
      </>
    ),
    play: <path d="m8 5 11 7-11 7Z" />,
    check: <path d="m5 12 4 4L19 6" />,
    globe: (
      <>
        <circle cx="12" cy="12" r="9" />
        <ellipse cx="12" cy="12" rx="4" ry="9" />
        <path d="M3 12h18" />
      </>
    ),
    layers: (
      <>
        <path d="m12 3 10 5-10 5L2 8l10-5Zm-10 9 10 5 10-5M2 16l10 5 10-5" />
      </>
    ),
  };
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  );
}

function Asterisk({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="currentColor" aria-hidden="true">
      {Array.from({ length: 8 }, (_, i) => (
        <rect
          key={i}
          x="44"
          y="4"
          width="12"
          height="92"
          rx="2"
          transform={`rotate(${i * 22.5} 50 50)`}
        />
      ))}
    </svg>
  );
}

const projects = [
  {
    id: "orbit",
    name: "Orbit",
    type: "SaaS platform",
    category: "SaaS",
    tagline: "Less busywork. More big ideas.",
    description:
      "An all-in-one workspace that brings projects, people, and progress into one beautifully simple place.",
    stack: ["Next.js", "TypeScript", "PostgreSQL"],
    color: "mint",
    number: "01",
    problem:
      "Great ideas get lost between scattered tools, endless updates, and disconnected teams. Orbit explores a calmer, more connected way to work.",
    solution:
      "A focused workspace with at-a-glance insights, intuitive task boards, and a single home for every project.",
    stats: ["One workspace", "Three core workflows", "Web-first experience"],
  },
  {
    id: "pocket",
    name: "Pocket",
    type: "Mobile application",
    category: "Mobile apps",
    tagline: "Your money. A little clearer.",
    description:
      "A personal finance companion that makes everyday spending feel a little more intentional.",
    stack: ["React Native", "Node.js", "Firebase"],
    color: "blue",
    number: "02",
    problem:
      "Understanding everyday spending should not mean wrestling with complicated spreadsheets or overwhelming financial dashboards.",
    solution:
      "A friendly mobile experience that brings balances, spending categories, and savings goals together in a clear, approachable interface.",
    stats: ["Mobile-first", "Three key screens", "Everyday clarity"],
  },
  {
    id: "pulse",
    name: "Pulse",
    type: "Analytics dashboard",
    category: "Dashboards",
    tagline: "Big picture. Every little detail.",
    description:
      "Turning complex business data into clear insights, confident decisions, and the next right move.",
    stack: ["React", "Python", "FastAPI"],
    color: "navy",
    number: "03",
    problem:
      "Raw data is everywhere, but useful answers are hard to find. Teams need a way to see what matters without adding more complexity.",
    solution:
      "An intentional analytics interface with readable visualizations, meaningful comparisons, and the most important signals up front.",
    stats: ["Live-data ready", "Unified insights", "Desktop optimized"],
  },
];
type Project = (typeof projects)[number];

function ProductPreview({ project, variant = 0 }: { project: Project; variant?: number }) {
  if (project.id === "pocket")
    return (
      <div className={`product-scene pocket-scene variant-${variant}`}>
        <div className="pocket-circle" />
        <span className="scene-note">
          A little more
          <br />
          peace of mind.
        </span>
        <div className="phone phone-back">
          <div className="phone-notch" />
          <div className="phone-top">
            Your activity <span>↗</span>
          </div>
          <div className="spend-ring">
            <span>
              Expenses<strong>$1,284</strong>
            </span>
          </div>
          <div className="phone-subtitle">This month</div>
          {["Shopping", "Food & drinks", "Transport"].map((x, i) => (
            <div className="transaction" key={x}>
              <i>{["S", "F", "T"][i]}</i>
              <span>
                {x}
                <small>Personal expense</small>
              </span>
              <b>${[248, 126, 64][i]}</b>
            </div>
          ))}
        </div>
        <div className="phone phone-front">
          <div className="phone-notch" />
          <div className="phone-top">
            Hello, Alex <span className="mini-avatar">a.</span>
          </div>
          <div className="balance-label">Total balance</div>
          <div className="balance">
            $8,450<span>.00</span>
          </div>
          <div className="bank-card">
            <span>pocket.</span>
            <Icon name="globe" size={16} />
            <strong>•••• &nbsp; •••• &nbsp; •••• &nbsp; 2486</strong>
            <small>
              ALEX MORGAN <b>VISA</b>
            </small>
          </div>
          <div className="phone-actions">
            <span>
              ↗<small>Send</small>
            </span>
            <span>
              ＋<small>Add money</small>
            </span>
            <span>
              ↙<small>Request</small>
            </span>
          </div>
          <div className="phone-subtitle">
            Your spending <small>See all</small>
          </div>
          <div className="tiny-chart">
            {[35, 65, 48, 88, 60, 75, 46].map((n, i) => (
              <i key={i} style={{ height: `${n}%` }} />
            ))}
          </div>
          <div className="phone-nav">
            ⌂ <span>▥</span> ◇ <span>○</span>
          </div>
        </div>
        <div className="floating-spark">✳</div>
      </div>
    );
  const orbit = project.id === "orbit";
  return (
    <div className={`product-scene ${orbit ? "orbit-scene" : "pulse-scene"} variant-${variant}`}>
      <div className="scene-orbit" />
      <div className="app-window">
        <aside className="app-sidebar">
          <div className="app-brand">
            {orbit ? "◉ orbit" : "ϟ pulse"}
            <span>WORKSPACE</span>
          </div>
          {[
            "Overview",
            orbit ? "My projects" : "Analytics",
            orbit ? "My tasks" : "Audience",
            "Reports",
          ].map((s, i) => (
            <div key={s} className={i === variant ? "side-item selected" : "side-item"}>
              <span>{["▦", "◇", "▤", "▥"][i]}</span>
              {s}
            </div>
          ))}
          <small>YOUR WORKSPACE</small>
          <div className="workspace-item">
            <i />
            Design team
          </div>
          <div className="workspace-item">
            <i />
            Engineering
          </div>
          <div className="app-user">
            <span className="mini-avatar">a.</span>
            <span>
              Alex Morgan<small>Pro workspace</small>
            </span>
          </div>
        </aside>
        <div className="app-main">
          <div className="app-topbar">
            <span>
              {variant === 1
                ? "Project insights"
                : variant === 2
                  ? "Activity overview"
                  : "Overview"}
            </span>
            <span>
              ⌕ &nbsp; ◉ &nbsp; <b className="mini-avatar">a.</b>
            </span>
          </div>
          <div className="app-greeting">
            <div>
              <h4>{orbit ? "Let’s make things happen." : "Your business, at a glance."}</h4>
              <p>Here’s what’s happening in your workspace today.</p>
            </div>
            <b>+ {orbit ? "New project" : "Export"}</b>
          </div>
          <div className="app-stats">
            {(orbit
              ? [
                  ["Total projects", "24", "+4 this month"],
                  ["In progress", "12", "Right on track"],
                  ["Completed", "86%", "+12% this month"],
                ]
              : [
                  ["Total revenue", "$48,250", "↗ 18.4%"],
                  ["Active users", "12,840", "↗ 24.6%"],
                  ["Conversion", "4.82%", "↗ 2.1%"],
                ]
            ).map(([label, value, trend]) => (
              <div key={label}>
                <small>
                  {label}
                  <span>↗</span>
                </small>
                <strong>{value}</strong>
                <em>{trend}</em>
              </div>
            ))}
          </div>
          <div className="app-chart">
            <div className="chart-heading">
              {orbit ? "Project activity" : "Revenue overview"}
              <small>Last 7 months⌄</small>
            </div>
            <div className="chart-grid">
              <div className="axis">
                <span>{orbit ? "100" : "50k"}</span>
                <span>{orbit ? "75" : "35k"}</span>
                <span>{orbit ? "50" : "20k"}</span>
                <span>0</span>
              </div>
              <div className="chart-bars">
                {[40, 62, 48, 78, 64, 87, 72, 92, 70, 82, 94, 86].map((n, i) => (
                  <div
                    key={i}
                    style={
                      {
                        "--bar-height": `${variant === 1 ? 100 - n / 2 : n}%`,
                        "--i": i,
                      } as CSSProperties
                    }
                  >
                    <i />
                    <i />
                  </div>
                ))}
              </div>
            </div>
            <div className="chart-months">
              <span>Jan</span>
              <span>Feb</span>
              <span>Mar</span>
              <span>Apr</span>
              <span>May</span>
              <span>Jun</span>
            </div>
          </div>
          <div className="app-bottom">
            <span>{orbit ? "Your recent projects" : "Recent transactions"}</span>
            <small>View all →</small>
          </div>
          <div className="app-table">
            <i />
            {orbit ? "Website redesign" : "Subscription payment"}
            <span>In progress</span>
            <b>•••</b>
          </div>
        </div>
      </div>
      {orbit && (
        <div className="task-toast">
          <span className="toast-check">
            <Icon name="check" size={12} />
          </span>
          <div>
            Another one, done.<small>Good things are taking shape.</small>
          </div>
          <span>↗</span>
        </div>
      )}
    </div>
  );
}

function HeroArt() {
  return (
    <div className="hero-art" aria-label="Animated creative coding illustration">
      <div className="orbital orbital-one" />
      <div className="orbital orbital-two" />
      <span className="art-coordinate coord-top">FIG. 001 — THE BUILDER’S MIND</span>
      <div className="art-star">
        <Asterisk />
      </div>
      <div className="floating-label label-build">
        <span className="status-dot" /> built with intention
      </div>
      <div className="code-window">
        <div className="code-titlebar">
          <div>
            <i />
            <i />
            <i />
          </div>
          <span>the-way-i-build.tsx</span>
          <Icon name="code" size={14} />
        </div>
        <div className="code-body">
          <div>
            <span className="line-num">01</span>
            <span className="syntax-purple">const</span> developer{" "}
            <span className="syntax-teal">=</span> {"{"}
          </div>
          <div>
            <span className="line-num">02</span>&nbsp; name:{" "}
            <span className="syntax-teal">'Rai Fahd Sultan'</span>,
          </div>
          <div>
            <span className="line-num">03</span>&nbsp; role:{" "}
            <span className="syntax-teal">'Full Stack Engineer'</span>,
          </div>
          <div>
            <span className="line-num">04</span>&nbsp; fueledBy: [
            <span className="syntax-teal">'curiosity'</span>,{" "}
            <span className="syntax-teal">'coffee'</span>],
          </div>
          <div>
            <span className="line-num">05</span>&nbsp; <span className="syntax-blue">build</span>(){" "}
            {"{"}
          </div>
          <div>
            <span className="line-num">06</span>&nbsp; &nbsp;{" "}
            <span className="syntax-purple">return</span> ideas.
            <span className="syntax-blue">makeReal</span>();
          </div>
          <div>
            <span className="line-num">07</span>&nbsp; {"}"}
          </div>
          <div>
            <span className="line-num">08</span>
            {"}"};<span className="code-cursor" />
          </div>
        </div>
        <div className="code-status">
          <span>
            <i /> All systems creative
          </span>
          <span>TypeScript &nbsp; {"{ }"}</span>
        </div>
      </div>
      <div className="code-key">
        <Icon name="code" size={38} />
      </div>
      <div className="floating-label label-ship">
        <span className="ship-icon">
          <Icon name="check" size={15} />
        </span>{" "}
        idea → build → ship <span className="label-loop">↻</span>
      </div>
      <div className="art-plus plus-one">+</div>
      <div className="art-plus plus-two">+</div>
      <span className="art-coordinate coord-bottom">A WORK IN CONSTANT EVOLUTION.</span>
    </div>
  );
}

function Reveal({ children, className = "" }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("revealed");
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.08 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return (
    <div ref={ref} className={`reveal ${className}`}>
      {children}
    </div>
  );
}

function getProject() {
  return projects.find((p) => window.location.hash === `#/project/${p.id}`);
}

export default function App() {
  const [dark, setDark] = useState(() => localStorage.getItem("rfs-theme") === "dark");
  const [motion, setMotion] = useState(
    () => !window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  );
  const [filter, setFilter] = useState("All work");
  const [project, setProject] = useState(getProject);
  const [slide, setSlide] = useState(0);
  const [lightbox, setLightbox] = useState(false);
  const [contact, setContact] = useState(false);
  const [downloaded, setDownloaded] = useState(false);
  const [menu, setMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const modalRef = useRef<HTMLDialogElement>(null);
  const lightboxRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 15);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => {
    document.documentElement.dataset.theme = dark ? "dark" : "light";
    localStorage.setItem("rfs-theme", dark ? "dark" : "light");
  }, [dark]);
  useEffect(() => {
    document.documentElement.dataset.motion = motion ? "on" : "off";
  }, [motion]);
  useEffect(() => {
    const route = () => {
      const next = getProject();
      setProject(next);
      setSlide(0);
      setMenu(false);
      if (next || !window.location.hash || window.location.hash === "#/")
        window.scrollTo({ top: 0, behavior: "instant" });
      else
        requestAnimationFrame(() =>
          document
            .getElementById(window.location.hash.slice(1))
            ?.scrollIntoView({ behavior: "instant" }),
        );
    };
    window.addEventListener("hashchange", route);
    return () => window.removeEventListener("hashchange", route);
  }, []);
  useEffect(() => {
    if (contact) modalRef.current?.showModal();
    else modalRef.current?.close();
  }, [contact]);
  useEffect(() => {
    if (lightbox) lightboxRef.current?.showModal();
    else lightboxRef.current?.close();
  }, [lightbox]);
  useEffect(() => {
    document.body.style.overflow = contact || lightbox ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [contact, lightbox]);
  const openContact = () => {
    setDownloaded(false);
    setContact(true);
  };
  const nextSlide = (direction: number) => setSlide((s) => (s + direction + 3) % 3);
  const homeLink = (anchor: string) => `#${anchor}`;

  return (
    <>
      <header className={`site-header ${scrolled ? "scrolled" : ""}`}>
        <div className="site-header-inner">
          <a href="#/" className="wordmark" aria-label="Rai Fahd Sultan home">
            rfs<span>.</span>
            <span className="wordmark-star">✳</span>
          </a>
          <nav className={menu ? "main-nav mobile-open" : "main-nav"} aria-label="Main navigation">
            <a href={homeLink("work")} onClick={() => setMenu(false)}>
              Selected work<span>03</span>
            </a>
            <a href={homeLink("about")} onClick={() => setMenu(false)}>
              A bit about me
            </a>
            <button
              onClick={() => {
                openContact();
                setMenu(false);
              }}
            >
              Let’s talk <Icon name="arrow" size={14} />
            </button>
          </nav>
          <div className="header-actions">
            <button
              className="theme-toggle"
              onClick={() => setDark(!dark)}
              aria-label={`Switch to ${dark ? "light" : "dark"} theme`}
            >
              <Icon name={dark ? "sun" : "moon"} size={18} />
            </button>
            <span className="header-divider" />
            <span className="local-note">
              <span className="status-dot" /> Open to possibilities
            </span>
            <button
              className="menu-button"
              onClick={() => setMenu(!menu)}
              aria-expanded={menu}
              aria-label="Toggle navigation"
            >
              {menu ? <Icon name="close" /> : <span>☰</span>}
            </button>
          </div>
        </div>
      </header>

      <main>
        {!project ? (
          <>
            <section className="hero page-width">
              <div className="hero-copy">
                <div className="eyebrow hero-eyebrow">
                  <span className="tiny-square" /> THE INTERSECTION OF LOGIC & IMAGINATION
                </div>
                <div className="intro">
                  Hey there, I’m <span className="intro-line" />
                </div>
                <h1 className="hero-heading">
                  <span className="hero-name">Rai Fahd Sultan</span>
                  <span className="hero-tagline">
                    Crafting thoughtful{" "}
                    <span className="possibility">
                      digital experiences.
                      <svg viewBox="0 0 540 24" preserveAspectRatio="none" aria-hidden="true">
                        <path d="M4 16C145 2 370 2 533 12M90 21C220 10 376 9 493 16" />
                      </svg>
                    </span>
                  </span>
                </h1>
                <p className="hero-description">
                  Full stack software engineer. I turn ambitious ideas
                  <br className="desktop-break" /> into thoughtful SaaS, mobile apps, and digital
                  experiences
                  <br className="desktop-break" /> that look good, feel right, and just work.
                </p>
                <div className="hero-buttons">
                  <a href="#work" className="button button-primary">
                    Explore my work <Icon name="down" size={17} />
                  </a>
                  <button className="button button-text" onClick={openContact}>
                    Let’s build something <Icon name="arrow" size={16} />
                  </button>
                </div>
                <div className="hero-footnote">
                  <span className="status-dot" /> Always curious. Intentionally different.
                </div>
              </div>
              <HeroArt />
              <div className="hero-bottom">
                <span>IDEAS INTO INTERFACES. PIXELS INTO PURPOSE.</span>
                <a href="#work">
                  SCROLL TO EXPLORE{" "}
                  <span className="scroll-pill">
                    <span />
                  </span>
                </a>
              </div>
            </section>

            <div className="skills-strip">
              <div className="skills-track">
                {[0, 1, 2, 3].map((i) => (
                  <div className="skills-set" key={i} aria-hidden={i > 0}>
                    {[
                      "FULL STACK DEVELOPMENT",
                      "SAAS PRODUCTS",
                      "MOBILE EXPERIENCES",
                      "THOUGHTFUL INTERFACES",
                    ].map((s) => (
                      <span key={s}>
                        {s}
                        <Asterisk />
                      </span>
                    ))}
                  </div>
                ))}
              </div>
            </div>

            <section id="work" className="work-section page-width">
              <Reveal>
                <div className="section-overline">
                  <span className="tiny-square" /> SELECTED WORK <span className="overline-line" />
                  <span>2024 — 2026</span>
                </div>
                <div className="section-heading">
                  <div>
                    <h2>
                      Made to make <span>a difference.</span>
                      <span className="teal-period">.</span>
                    </h2>
                    <p>A few ideas I’ve turned into things you can actually use.</p>
                  </div>
                  <span className="work-count">
                    01 — 03 <Icon name="arrow" size={20} />
                  </span>
                </div>
              </Reveal>
              <div className="work-toolbar">
                <div className="filter-tabs" aria-label="Filter projects">
                  {["All work", "SaaS", "Mobile apps", "Dashboards"].map((f) => (
                    <button
                      key={f}
                      className={filter === f ? "active" : ""}
                      onClick={() => setFilter(f)}
                      aria-pressed={filter === f}
                    >
                      {f}
                      {f === "All work" && <span>3</span>}
                    </button>
                  ))}
                </div>
                <span className="toolbar-note">
                  <span className="status-dot" /> A little bit of everything.
                </span>
              </div>
              <div className="project-grid">
                {projects
                  .filter((p) => filter === "All work" || p.category === filter)
                  .map((p) => (
                    <Reveal key={p.id} className="project-reveal">
                      <a href={`#/project/${p.id}`} className={`project-card ${p.color}`}>
                        <div className="project-cover">
                          <div className="cover-label">
                            <span>{p.type}</span>
                            <span>↗</span>
                          </div>
                          <ProductPreview project={p} />
                          <div className="project-view">
                            Explore project <Icon name="arrow" size={15} />
                          </div>
                        </div>
                        <div className="project-info">
                          <div>
                            <span className="project-number">/{p.number}</span>
                            <h3>
                              {p.name}
                              <span className="project-dot">.</span>
                            </h3>
                            <span className="project-arrow">
                              <Icon name="arrow" size={18} />
                            </span>
                          </div>
                          <p>{p.tagline}</p>
                          <div className="project-tags">
                            {p.stack.map((t) => (
                              <span key={t}>{t}</span>
                            ))}
                          </div>
                        </div>
                      </a>
                    </Reveal>
                  ))}
              </div>
              <div className="work-bottom">
                <span>
                  <Icon name="code" size={15} /> Thoughtful on the outside. Solid on the inside.
                </span>
                <span>CONCEPT PROJECTS · REAL POSSIBILITIES</span>
              </div>
            </section>

            <section id="about" className="about-section page-width">
              <Reveal className="about-layout">
                <div className="about-art">
                  <div className="about-orbit" />
                  <Asterisk />
                  <span className="about-art-label">CURIOUS BY DEFAULT.</span>
                  <span className="about-sticker">
                    human
                    <br />
                    behind the code.
                  </span>
                </div>
                <div className="about-copy">
                  <div className="eyebrow">
                    <span className="tiny-square" /> MORE THAN THE CODE
                  </div>
                  <h2>
                    A builder’s mind.
                    <br />A designer’s eye<span className="teal-period">.</span>
                  </h2>
                  <p>
                    I’m Rai, a full stack software engineer who cares as much about how something
                    feels as how it works.
                  </p>
                  <p>
                    From the first sketch to the final deployment, I connect the dots between clean
                    engineering and considered design. SaaS platforms, mobile apps, complex
                    dashboards—if there’s an interesting problem, I’m in.
                  </p>
                  <div className="about-values">
                    <span>
                      <Icon name="layers" size={17} /> End-to-end thinker
                    </span>
                    <span>
                      <Icon name="code" size={17} /> Details make the difference
                    </span>
                  </div>
                </div>
              </Reveal>
            </section>
            <section className="toolkit-section page-width">
              <Reveal>
                <div className="toolkit-heading">
                  <span className="eyebrow">MY EVERYDAY TOOLKIT</span>
                  <span>Different tools. Same attention to detail.</span>
                </div>
                <div className="toolkit-list">
                  {[
                    ["Re", "React & Next.js"],
                    ["Ts", "TypeScript"],
                    ["No", "Node.js"],
                    ["Py", "Python"],
                    ["Pg", "PostgreSQL"],
                    ["Rn", "React Native"],
                  ].map(([symbol, label]) => (
                    <div key={symbol}>
                      <span>{symbol}</span>
                      {label}
                    </div>
                  ))}
                </div>
              </Reveal>
            </section>
            <section className="contact-section page-width">
              <Reveal>
                <div className="contact-box">
                  <div className="eyebrow">
                    <span className="status-dot" /> GOOD THINGS START WITH A CONVERSATION
                  </div>
                  <h2>
                    Your next big idea.
                    <br />
                    Let’s make it <span>real.</span>
                  </h2>
                  <button className="contact-cta" onClick={openContact}>
                    Let’s build something together <Icon name="arrow" size={25} />
                  </button>
                  <Asterisk className="contact-star" />
                  <span className="contact-small">A little curiosity can go a long way.</span>
                </div>
              </Reveal>
            </section>
          </>
        ) : (
          <section className="case-study page-width" key={project.id}>
            <a href="#work" className="back-link">
              <Icon name="left" size={17} /> Back to selected work
            </a>
            <div className="case-title">
              <div>
                <div className="eyebrow">
                  <span className="tiny-square" /> CONCEPT PROJECT / {project.type.toUpperCase()}
                </div>
                <h1>
                  {project.name}
                  <span className="teal-period">.</span>
                </h1>
                <p>{project.tagline}</p>
              </div>
              <Asterisk />
            </div>
            <div className="case-meta">
              <div>
                <span>THE IDEA</span>
                <p>{project.description}</p>
              </div>
              <div>
                <span>ROLE</span>
                <p>
                  Full stack engineering
                  <br />
                  Product & interface design
                </p>
              </div>
              <div>
                <span>BUILT WITH</span>
                <div className="project-tags">
                  {project.stack.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>
              </div>
            </div>
            <div className="gallery-heading">
              <span className="eyebrow">A CLOSER LOOK</span>
              <span>
                Click a preview to expand <Icon name="arrow" size={14} />
              </span>
            </div>
            <button
              className={`gallery-main ${project.color}`}
              onClick={() => setLightbox(true)}
              aria-label={`Expand ${["Overview", "Insights", "Activity"][slide]} preview`}
            >
              <ProductPreview project={project} variant={slide} />
              <span className="gallery-caption">
                {["01 / The overview", "02 / The details", "03 / The bigger picture"][slide]}{" "}
                <Icon name="arrow" size={18} />
              </span>
            </button>
            <div className="gallery-controls">
              <div className="gallery-thumbs">
                {[0, 1, 2].map((i) => (
                  <button
                    key={i}
                    className={slide === i ? "selected" : ""}
                    onClick={() => setSlide(i)}
                    aria-label={`View ${["overview", "insights", "activity"]} screenshot`}
                    aria-pressed={slide === i}
                  >
                    <ProductPreview project={project} variant={i} />
                  </button>
                ))}
              </div>
              <div className="gallery-arrows">
                <span>
                  0{slide + 1} <small>/ 03</small>
                </span>
                <button
                  className="circle-button"
                  onClick={() => nextSlide(-1)}
                  aria-label="Previous screenshot"
                >
                  <Icon name="left" />
                </button>
                <button
                  className="circle-button"
                  onClick={() => nextSlide(1)}
                  aria-label="Next screenshot"
                >
                  <Icon name="right" />
                </button>
              </div>
            </div>
            <div className="case-story">
              <div>
                <span className="eyebrow">01 / THE CHALLENGE</span>
                <h2>A problem worth solving.</h2>
                <p>{project.problem}</p>
              </div>
              <div>
                <span className="eyebrow">02 / THE APPROACH</span>
                <h2>Less friction. More flow.</h2>
                <p>{project.solution}</p>
              </div>
            </div>
            <div className="case-highlights">
              {project.stats.map((s, i) => (
                <div key={s}>
                  <span>0{i + 1}</span>
                  <Icon name={["globe", "layers", "code"][i] as IconName} size={24} />
                  <h3>{s}</h3>
                  <p>
                    {
                      [
                        "Built around real human needs.",
                        "Considered down to the details.",
                        "Engineered for what comes next.",
                      ][i]
                    }
                  </p>
                </div>
              ))}
            </div>
            <div className="concept-note">
              <Icon name="code" size={20} />
              <p>
                <strong>A preview of what’s possible.</strong> This is an illustrative concept.
                Final screenshots, project details, and verified impact statistics will be added
                with the real project content.
              </p>
            </div>
            <div className="next-project">
              <div>
                <span className="eyebrow">KEEP EXPLORING</span>
                <h2>
                  {projects[(projects.indexOf(project) + 1) % 3].name}
                  <span className="teal-period">.</span>
                </h2>
              </div>
              <a
                className="button button-primary"
                href={`#/project/${projects[(projects.indexOf(project) + 1) % 3].id}`}
              >
                Next project <Icon name="arrow" size={18} />
              </a>
            </div>
          </section>
        )}
      </main>
      <footer className="site-footer page-width">
        <a href="#/" className="wordmark">
          rfs<span>.</span>
        </a>
        <span>© {new Date().getFullYear()} Rai Fahd Sultan. Built with care, not a template.</span>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: motion ? "smooth" : "instant" })}
        >
          Back to top <span>↑</span>
        </button>
      </footer>
      <button
        className="motion-toggle"
        onClick={() => setMotion(!motion)}
        aria-label={motion ? "Pause animations" : "Enable animations"}
        aria-pressed={!motion}
      >
        <span className={motion ? "motion-indicator running" : "motion-indicator"}>
          {[0, 1, 2].map((i) => (
            <i key={i} />
          ))}
        </span>
        <span>MOTION {motion ? "ON" : "OFF"}</span>
        <Icon name={motion ? "pause" : "play"} size={11} />
      </button>

      <button
        className="scroll-top-button"
        onClick={() => window.scrollTo({ top: 0, behavior: motion ? "smooth" : "instant" })}
        aria-label="Scroll back to top"
        title="Scroll back to top"
      >
        <Icon name="up" size={19} />
      </button>

      <dialog
        ref={modalRef}
        className="contact-dialog"
        onCancel={() => setContact(false)}
        onClick={(e) => {
          if (e.target === e.currentTarget) setContact(false);
        }}
      >
        <button
          className="dialog-close circle-button"
          onClick={() => setContact(false)}
          aria-label="Close contact dialog"
        >
          <Icon name="close" />
        </button>
        <div className="eyebrow">
          <span className="tiny-square" /> THE START OF SOMETHING GOOD
        </div>
        <h2>
          Big idea?
          <br />
          I’m all ears<span className="teal-period">.</span>
        </h2>
        <p>
          My contact details are coming soon. In the meantime, put your idea into words and download
          a brief to share when we connect.
        </p>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const data = new FormData(e.currentTarget);
            const text = `PROJECT BRIEF FOR RAI FAHD SULTAN\n\nFrom: ${data.get("name")}\nEmail: ${data.get("email")}\n\nTHE IDEA\n${data.get("idea")}`;
            const url = URL.createObjectURL(new Blob([text], { type: "text/plain" }));
            const link = document.createElement("a");
            link.href = url;
            link.download = "my-project-brief.txt";
            link.click();
            URL.revokeObjectURL(url);
            setDownloaded(true);
          }}
        >
          <label>
            Your name
            <input name="name" required placeholder="Nice to meet you..." autoComplete="name" />
          </label>
          <label>
            Email address
            <input
              name="email"
              type="email"
              required
              placeholder="you@example.com"
              autoComplete="email"
            />
          </label>
          <label>
            What are you thinking?
            <textarea
              name="idea"
              required
              rows={3}
              placeholder="The idea, the challenge, the wild possibility..."
            />
          </label>
          <button className="button button-primary" type="submit">
            {downloaded ? "Download again" : "Download my project brief"}
            <Icon name={downloaded ? "check" : "down"} size={17} />
          </button>
          {downloaded && (
            <span className="form-success" role="status">
              Your brief is ready. Nothing has been submitted or stored.
            </span>
          )}
        </form>
      </dialog>
      <dialog
        ref={lightboxRef}
        className="lightbox"
        onCancel={() => setLightbox(false)}
        onKeyDown={(e) => {
          if (e.key === "ArrowRight") nextSlide(1);
          if (e.key === "ArrowLeft") nextSlide(-1);
        }}
        onClick={(e) => {
          if (e.target === e.currentTarget) setLightbox(false);
        }}
      >
        <div className="lightbox-header">
          <span>
            {project?.name} — {["Overview", "Insights", "Activity"][slide]}
          </span>
          <button
            className="circle-button"
            onClick={() => setLightbox(false)}
            aria-label="Close expanded preview"
          >
            <Icon name="close" />
          </button>
        </div>
        {project && (
          <div className={`lightbox-scene ${project.color}`}>
            <ProductPreview project={project} variant={slide} />
          </div>
        )}
        <div className="lightbox-controls">
          <button
            className="circle-button"
            onClick={() => nextSlide(-1)}
            aria-label="Previous expanded screenshot"
          >
            <Icon name="left" />
          </button>
          <span>{slide + 1} / 3</span>
          <button
            className="circle-button"
            onClick={() => nextSlide(1)}
            aria-label="Next expanded screenshot"
          >
            <Icon name="right" />
          </button>
        </div>
      </dialog>
    </>
  );
}
