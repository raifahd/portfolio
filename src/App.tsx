import { useEffect, useRef, useState } from "react";
import type { CSSProperties, ReactNode } from "react";
import { projects, type Project, type ProjectScreenshot } from "./data/projects";
import { ProductPreview } from "./components/ProjectThumbnails";
import { AppGallery } from "./components/AppGallery";

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
  | "layers"
  | "mail"
  | "linkedin"
  | "github"
  | "copy";
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
    mail: (
      <>
        <rect width="20" height="16" x="2" y="4" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </>
    ),
    linkedin: (
      <>
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect width="4" height="12" x="2" y="9" />
        <circle cx="4" cy="4" r="2" />
      </>
    ),
    github: (
      <>
        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
        <path d="M9 18c-4.51 2-5-2-7-2" />
      </>
    ),
    copy: (
      <>
        <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
        <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
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
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [menu, setMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const modalRef = useRef<HTMLDialogElement>(null);
  const touchStartX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);

  const handleLightboxTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  };

  const handleLightboxTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null || touchStartY.current === null) return;
    const deltaX = e.changedTouches[0].clientX - touchStartX.current;
    const deltaY = e.changedTouches[0].clientY - touchStartY.current;
    touchStartX.current = null;
    touchStartY.current = null;
    if (Math.abs(deltaX) > 40 && Math.abs(deltaX) > Math.abs(deltaY) * 1.2) {
      if (deltaX < 0) {
        nextSlide(1);
      } else {
        nextSlide(-1);
      }
    }
  };

  const copyEmail = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText("fahd.w871@gmail.com");
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2400);
    }
  };

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
  const performScroll = (id: string) => {
    if (!id || id === "/" || id === "top") {
      window.scrollTo({ top: 0, behavior: motion ? "smooth" : "instant" });
      return;
    }
    const cleanId = id.replace(/^[#/]+/, "");
    if (!cleanId) {
      window.scrollTo({ top: 0, behavior: motion ? "smooth" : "instant" });
      return;
    }
    const el = document.getElementById(cleanId);
    if (!el) return;

    const header = document.querySelector(".site-header") as HTMLElement | null;
    const headerHeight = header ? header.offsetHeight : 68;
    // Section top offset with generous breathing space below sticky header
    const offset = headerHeight + 16;

    const elementPosition = el.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;

    window.scrollTo({
      top: Math.max(0, offsetPosition),
      behavior: motion ? "smooth" : "instant",
    });
  };

  const scrollToSection = (id: string, e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    setMenu(false);

    if (project) {
      setProject(undefined);
      window.location.hash = id === "top" ? "#/" : `#${id}`;
      setTimeout(() => {
        performScroll(id);
      }, 50);
      return;
    }

    if (id === "top") {
      if (window.location.hash && window.location.hash !== "#/") {
        window.history.pushState(null, "", "#/");
      }
      performScroll("top");
      return;
    }

    if (window.location.hash !== `#${id}`) {
      window.history.pushState(null, "", `#${id}`);
    }
    performScroll(id);
  };

  useEffect(() => {
    const route = () => {
      const next = getProject();
      setProject(next);
      setSlide(0);
      setMenu(false);
      if (next) {
        window.scrollTo({ top: 0, behavior: "instant" });
      } else if (
        !window.location.hash ||
        window.location.hash === "#/" ||
        window.location.hash === "#top"
      ) {
        window.scrollTo({ top: 0, behavior: motion ? "smooth" : "instant" });
      } else {
        const id = window.location.hash.replace(/^[#/]+/, "");
        setTimeout(() => {
          performScroll(id);
        }, 50);
      }
    };
    window.addEventListener("hashchange", route);
    return () => window.removeEventListener("hashchange", route);
  }, [motion]);
  useEffect(() => {
    if (contact) {
      if (!modalRef.current?.open) modalRef.current?.showModal();
    } else {
      if (modalRef.current?.open) modalRef.current?.close();
    }
  }, [contact]);
  useEffect(() => {
    if (!lightbox) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(false);
      if (e.key === "ArrowRight") nextSlide(1);
      if (e.key === "ArrowLeft") nextSlide(-1);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightbox, project, slide]);
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
  const nextSlide = (direction: number) => {
    if (!project || !project.screenshots.length) return;
    setSlide((s) => (s + direction + project.screenshots.length) % project.screenshots.length);
  };
  const homeLink = (anchor: string) => `#${anchor}`;

  return (
    <>
      <header className={`site-header ${scrolled ? "scrolled" : ""}`}>
        <div className="site-header-inner">
          <a
            href="#/"
            className="wordmark"
            onClick={(e) => scrollToSection("top", e)}
            aria-label="Rai Fahd Sultan home"
          >
            rfs<span>.</span>
            <span className="wordmark-star">✳</span>
          </a>
          <nav className={menu ? "main-nav mobile-open" : "main-nav"} aria-label="Main navigation">
            <a href="#work" onClick={(e) => scrollToSection("work", e)}>
              Selected work<span>04</span>
            </a>
            <a href="#about" onClick={(e) => scrollToSection("about", e)}>
              A bit about me
            </a>
            <a
              href="#contact"
              onClick={(e) => scrollToSection("contact", e)}
              className="nav-contact-link"
            >
              Contact <Icon name="arrow" size={14} />
            </a>
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
                  <a
                    href="#work"
                    className="button button-primary"
                    onClick={(e) => scrollToSection("work", e)}
                  >
                    Explore my work <Icon name="down" size={17} />
                  </a>
                  <button
                    className="button button-text"
                    onClick={(e) => scrollToSection("contact", e)}
                  >
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
                <a href="#work" onClick={(e) => scrollToSection("work", e)}>
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
                    01 — 04 <Icon name="arrow" size={20} />
                  </span>
                </div>
              </Reveal>
              <div className="work-toolbar">
                <div className="filter-tabs" aria-label="Filter projects">
                  {["All work", "SaaS", "Mobile apps", "Full stack"].map((f) => {
                    const count =
                      f === "All work"
                        ? projects.length
                        : projects.filter((p) => p.category === f || p.categories.includes(f))
                            .length;
                    return (
                      <button
                        key={f}
                        className={filter === f ? "active" : ""}
                        onClick={() => setFilter(f)}
                        aria-pressed={filter === f}
                      >
                        {f}
                        <span>{count}</span>
                      </button>
                    );
                  })}
                </div>
                <span className="toolbar-note">
                  <span className="status-dot" /> A little bit of everything.
                </span>
              </div>
              <div className="project-grid">
                {projects
                  .filter(
                    (p) =>
                      filter === "All work" ||
                      p.category === filter ||
                      p.categories.includes(filter),
                  )
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
                            {p.stack.slice(0, 4).map((t) => (
                              <span key={t}>
                                <span className="tech-badge-dot" />
                                {t}
                              </span>
                            ))}
                            {p.stack.length > 4 && (
                              <span className="tag-more">+{p.stack.length - 4}</span>
                            )}
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
                <span>PROJECTS · REAL POSSIBILITIES</span>
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
                    I’m Fahd, a full stack software engineer who cares as much about how something
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
            <section id="contact" className="contact-section page-width">
              <Reveal>
                <div className="contact-panel">
                  <Asterisk className="contact-star" />

                  <div className="contact-header">
                    <div className="eyebrow">
                      <span className="status-dot" /> CONTACT & INQUIRIES
                    </div>
                    <h2>
                      Let’s build something <span>exceptional.</span>{" "}
                      <span className="contact-title-arrow">
                        <Icon name="arrow" size={32} />
                      </span>
                    </h2>
                    <p className="contact-lead">
                      Have a product to architect, a complex challenge to tackle, or looking for an
                      experienced full stack and mobile engineer? Reach out directly through any of
                      these platforms.
                    </p>
                  </div>

                  <div className="contact-cards-grid">
                    {/* Gmail Card */}
                    <div className="contact-channel-card card-gmail">
                      <div className="channel-top">
                        <div className="channel-icon-wrap email-icon">
                          <Icon name="mail" size={20} />
                        </div>
                        <span className="channel-badge">Primary Email</span>
                      </div>
                      <div className="channel-content">
                        <h3>Direct Email</h3>
                        <p className="channel-subtitle">
                          Fastest response · Project inquiries & consulting
                        </p>
                        <a href="mailto:fahd.w871@gmail.com" className="channel-value email-value">
                          fahd.w871@gmail.com
                        </a>
                      </div>
                      <div className="channel-actions">
                        <a
                          href="mailto:fahd.w871@gmail.com"
                          className="button button-primary channel-btn"
                        >
                          Send Email <Icon name="arrow" size={14} />
                        </a>
                        <button
                          type="button"
                          className="channel-copy-btn"
                          onClick={copyEmail}
                          title="Copy email to clipboard"
                        >
                          <Icon name={copiedEmail ? "check" : "copy"} size={15} />
                          <span>{copiedEmail ? "Copied!" : "Copy"}</span>
                        </button>
                      </div>
                    </div>

                    {/* LinkedIn Card */}
                    <div className="contact-channel-card card-linkedin">
                      <div className="channel-top">
                        <div className="channel-icon-wrap linkedin-icon">
                          <Icon name="linkedin" size={20} />
                        </div>
                        <span className="channel-badge">Network</span>
                      </div>
                      <div className="channel-content">
                        <h3>LinkedIn</h3>
                        <p className="channel-subtitle">
                          Professional profile, experience & recommendations
                        </p>
                        <a
                          href="https://www.linkedin.com/in/rai-fahd-s-23074936b/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="channel-value"
                        >
                          in/rai-fahd-s-23074936b
                        </a>
                      </div>
                      <div className="channel-actions">
                        <a
                          href="https://www.linkedin.com/in/rai-fahd-s-23074936b/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="button button-outline channel-btn"
                        >
                          Connect on LinkedIn <Icon name="arrow" size={14} />
                        </a>
                      </div>
                    </div>

                    {/* GitHub Card */}
                    <div className="contact-channel-card card-github">
                      <div className="channel-top">
                        <div className="channel-icon-wrap github-icon">
                          <Icon name="github" size={20} />
                        </div>
                        <span className="channel-badge">Code</span>
                      </div>
                      <div className="channel-content">
                        <h3>GitHub</h3>
                        <p className="channel-subtitle">
                          Open source repositories, architectures & code
                        </p>
                        <a
                          href="https://github.com/RaiFahd"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="channel-value"
                        >
                          github.com/RaiFahd
                        </a>
                      </div>
                      <div className="channel-actions">
                        <a
                          href="https://github.com/RaiFahd"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="button button-outline channel-btn"
                        >
                          Explore GitHub <Icon name="arrow" size={14} />
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Inline Project Brief / Quick Message Generator */}
                  <div className="contact-form-container">
                    <div className="contact-form-header">
                      <div className="eyebrow">
                        <span className="tiny-square" /> QUICK INQUIRY OR PROJECT BRIEF
                      </div>
                      <h4>Prefer to draft your idea?</h4>
                      <p>
                        Submit below to prefill an email directly to my inbox and generate a
                        downloadable brief.
                      </p>
                    </div>

                    <form
                      className="contact-inline-form"
                      onSubmit={(e) => {
                        e.preventDefault();
                        const data = new FormData(e.currentTarget);
                        const name = String(data.get("name") || "");
                        const email = String(data.get("email") || "");
                        const idea = String(data.get("idea") || "");
                        const text = `PROJECT BRIEF FOR RAI FAHD SULTAN\n\nFrom: ${name}\nEmail: ${email}\n\nTHE IDEA & REQUIREMENTS\n${idea}\n\nDate: ${new Date().toLocaleDateString()}`;

                        const mailSubject = encodeURIComponent(`Project Inquiry from ${name}`);
                        const mailBody = encodeURIComponent(
                          `Hi Fahd,\n\nName: ${name}\nEmail: ${email}\n\nProject Overview:\n${idea}\n\nBest regards,\n${name}`,
                        );
                        window.location.href = `mailto:fahd.w871@gmail.com?subject=${mailSubject}&body=${mailBody}`;

                        const url = URL.createObjectURL(new Blob([text], { type: "text/plain" }));
                        const link = document.createElement("a");
                        link.href = url;
                        link.download = `project-brief-${name.toLowerCase().replace(/[^a-z0-9]/g, "-") || "inquiry"}.txt`;
                        link.click();
                        URL.revokeObjectURL(url);
                        setDownloaded(true);
                      }}
                    >
                      <div className="form-fields-grid">
                        <label>
                          Your name
                          <input
                            name="name"
                            required
                            placeholder="What should I call you?"
                            autoComplete="name"
                          />
                        </label>
                        <label>
                          Email address
                          <input
                            name="email"
                            type="email"
                            required
                            placeholder="your.email@example.com"
                            autoComplete="email"
                          />
                        </label>
                      </div>
                      <label>
                        What are you looking to build?
                        <textarea
                          name="idea"
                          required
                          rows={3}
                          placeholder="Tell me about the goals, timeline, or engineering challenges..."
                        />
                      </label>
                      <div className="form-actions-row">
                        <button className="button button-primary" type="submit">
                          {downloaded ? "Send again" : "Send email & download brief"}
                          <Icon name={downloaded ? "check" : "arrow"} size={16} />
                        </button>
                        {downloaded && (
                          <span className="form-success-chip">
                            <Icon name="check" size={15} /> Brief downloaded & email initiated!
                          </span>
                        )}
                      </div>
                    </form>
                  </div>
                </div>
              </Reveal>
            </section>
          </>
        ) : (
          <section className="case-study page-width" key={project.id}>
            <a href="#work" className="back-link" onClick={(e) => scrollToSection("work", e)}>
              <Icon name="left" size={17} /> Back to selected work
            </a>

            {/* Project Hero Header: Name on left, Thumbnail on right */}
            <div className="case-title-row">
              <div className="case-title-left">
                <div className="eyebrow">
                  <span className="tiny-square" /> {project.timeline} · {project.type.toUpperCase()}
                </div>
                <h1>
                  {project.name}
                  <span className="teal-period">.</span>
                </h1>
                <p className="case-hero-tagline">{project.tagline}</p>
                <div className="case-quick-stats">
                  {project.stats.map((s) => (
                    <span key={s} className="quick-stat-badge">
                      <span className="stat-bullet">✦</span> {s}
                    </span>
                  ))}
                </div>
              </div>
              <div className="case-title-right">
                <div className={`case-header-mockup ${project.color}`}>
                  <ProductPreview project={project} />
                </div>
              </div>
            </div>

            {/* Metadata Bar */}
            <div className="case-meta">
              <div>
                <span>OVERVIEW</span>
                <p>{project.description}</p>
              </div>
              <div>
                <span>ROLE & PLATFORMS</span>
                <p>
                  <strong>{project.role}</strong>
                  <br />
                  <small>{project.platform}</small>
                </p>
              </div>
              <div className="case-meta-stack">
                <span className="case-meta-label">
                  <span className="meta-label-dot" />
                  CORE TECH STACK
                </span>
                <div className="project-tags">
                  {project.stack.map((t) => (
                    <span key={t}>
                      <span className="tech-badge-dot" />
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* CONTINUOUS MOVING APP GALLERY (SLIDESHOW) */}
            <AppGallery
              project={project}
              onSelectScreenshot={(idx) => {
                setSlide(idx);
                setLightbox(true);
              }}
            />

            {/* CRISP 2-COLUMN STORY (CHALLENGE & SOLUTION) */}
            <div className="case-story">
              <div>
                <span className="eyebrow">01 / THE CHALLENGE</span>
                <h2>{project.problem.headline}</h2>
                <p>{project.problem.narrative}</p>
              </div>
              <div>
                <span className="eyebrow">02 / THE SOLUTION & IMPACT</span>
                <h2>{project.solution.headline}</h2>
                <p>{project.solution.narrative}</p>
              </div>
            </div>

            {/* NEXT PROJECT (CYCLING ALL 4 IN ORDER) */}
            <div className="next-project">
              <div>
                <span className="eyebrow">CONTINUE EXPLORING</span>
                <h2>
                  {projects[(projects.indexOf(project) + 1) % projects.length].name}
                  <span className="teal-period">.</span>
                </h2>
              </div>
              <a
                className="button button-primary"
                href={`#/project/${projects[(projects.indexOf(project) + 1) % projects.length].id}`}
              >
                Next project <Icon name="arrow" size={18} />
              </a>
            </div>
          </section>
        )}
      </main>
      <footer className="site-footer page-width">
        <div className="footer-left">
          <a href="#/" className="wordmark">
            rfs<span>.</span>
          </a>
          <span className="footer-copy">
            © {new Date().getFullYear()} Rai Fahd Sultan · Full Stack & Mobile Engineer
          </span>
        </div>
        <div className="footer-links">
          <a href="mailto:fahd.w871@gmail.com" className="footer-link">
            <Icon name="mail" size={15} /> fahd.w871@gmail.com
          </a>
          <a
            href="https://www.linkedin.com/in/rai-fahd-s-23074936b/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            <Icon name="linkedin" size={15} /> LinkedIn
          </a>
          <a
            href="https://github.com/RaiFahd"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            <Icon name="github" size={15} /> GitHub
          </a>
        </div>
        <button
          className="footer-top-btn"
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
          <span className="tiny-square" /> GET IN TOUCH
        </div>
        <h2>
          Let’s connect<span className="teal-period">.</span>
        </h2>
        <p className="dialog-subtext">
          Reach out directly via email, connect on LinkedIn or GitHub, or generate a formatted
          project brief below.
        </p>

        {/* Quick Contact Chips inside dialog */}
        <div className="dialog-channels-row">
          <a href="mailto:fahd.w871@gmail.com" className="dialog-channel-chip email-chip">
            <Icon name="mail" size={15} /> fahd.w871@gmail.com
          </a>
          <a
            href="https://www.linkedin.com/in/rai-fahd-s-23074936b/"
            target="_blank"
            rel="noopener noreferrer"
            className="dialog-channel-chip"
          >
            <Icon name="linkedin" size={15} /> LinkedIn ↗
          </a>
          <a
            href="https://github.com/RaiFahd"
            target="_blank"
            rel="noopener noreferrer"
            className="dialog-channel-chip"
          >
            <Icon name="github" size={15} /> GitHub ↗
          </a>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            const data = new FormData(e.currentTarget);
            const name = String(data.get("name") || "");
            const email = String(data.get("email") || "");
            const idea = String(data.get("idea") || "");
            const text = `PROJECT BRIEF FOR RAI FAHD SULTAN\n\nFrom: ${name}\nEmail: ${email}\n\nTHE IDEA\n${idea}\n\nDate: ${new Date().toLocaleDateString()}`;

            const mailSubject = encodeURIComponent(`Project Inquiry from ${name}`);
            const mailBody = encodeURIComponent(
              `Hi Fahd,\n\nName: ${name}\nEmail: ${email}\n\nProject Overview:\n${idea}\n\nBest regards,\n${name}`,
            );
            window.location.href = `mailto:fahd.w871@gmail.com?subject=${mailSubject}&body=${mailBody}`;

            const url = URL.createObjectURL(new Blob([text], { type: "text/plain" }));
            const link = document.createElement("a");
            link.href = url;
            link.download = `my-project-brief-${name.toLowerCase().replace(/[^a-z0-9]/g, "-") || "inquiry"}.txt`;
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
      {lightbox && project && project.screenshots[slide] && (
        <div
          className="lightbox-overlay"
          role="dialog"
          aria-modal="true"
          aria-label="Image preview"
          onClick={() => setLightbox(false)}
        >
          <div
            className="lightbox-card"
            onClick={(e) => e.stopPropagation()}
            onTouchStart={handleLightboxTouchStart}
            onTouchEnd={handleLightboxTouchEnd}
          >
            <div className="lightbox-header">
              <div className="lightbox-title-info">
                <span className="lightbox-proj-name">{project.name}</span>
                <span className="lightbox-sep">/</span>
                <span className="lightbox-shot-title">
                  {project.screenshots[slide]?.title || `Screen ${slide + 1}`}
                </span>
              </div>
              <div className="lightbox-nav-right">
                <span className="lightbox-counter">
                  {String(slide + 1).padStart(2, "0")} /{" "}
                  {String(project.screenshots.length).padStart(2, "0")}
                </span>
                <button
                  type="button"
                  className="circle-button lightbox-close-btn"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setLightbox(false);
                  }}
                  aria-label="Close expanded preview"
                >
                  <Icon name="close" />
                </button>
              </div>
            </div>

            <div
              className={`lightbox-stage ${project.color} ${
                project.galleryType === "desktop" ? "stage-desktop" : "stage-mobile"
              }`}
            >
              <button
                type="button"
                className="circle-button lightbox-arrow left-arrow"
                onClick={(e) => {
                  e.stopPropagation();
                  nextSlide(-1);
                }}
                aria-label="Previous screenshot"
              >
                <Icon name="left" />
              </button>

              <div className="lightbox-image-container">
                <img
                  src={project.screenshots[slide].url}
                  alt={project.screenshots[slide].title}
                  className="lightbox-full-img"
                />
              </div>

              <button
                type="button"
                className="circle-button lightbox-arrow right-arrow"
                onClick={(e) => {
                  e.stopPropagation();
                  nextSlide(1);
                }}
                aria-label="Next screenshot"
              >
                <Icon name="right" />
              </button>
            </div>

            <div className="lightbox-caption-bar">
              <div>
                <h4>{project.screenshots[slide].title}</h4>
                <p>{project.screenshots[slide].caption}</p>
              </div>
              <div className="lightbox-shortcut-hint">
                <span>Use ← and → keyboard arrows to browse • Esc to close</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
