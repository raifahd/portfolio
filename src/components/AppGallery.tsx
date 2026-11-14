import { useEffect, useRef, useState } from "react";
import type { Project, ProjectScreenshot } from "../data/projects";

interface AppGalleryProps {
  project: Project;
  onSelectScreenshot: (index: number) => void;
}

export function AppGallery({ project, onSelectScreenshot }: AppGalleryProps) {
  const [isPaused, setIsPaused] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const isDesktop = project.galleryType === "desktop";
  const screenshots = project.screenshots;

  // Manual scroll left/right handler
  const handleScroll = (direction: "left" | "right") => {
    if (!scrollContainerRef.current) return;
    const scrollAmount = isDesktop ? 440 : 280;
    scrollContainerRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  // We repeat the screenshots array to provide an uninterrupted infinite marquee
  // 3 repetitions ensures seamless continuous sliding across large screens
  const marqueeItems = [...screenshots, ...screenshots, ...screenshots];

  return (
    <section className="app-gallery-section" aria-label={`${project.name} Screenshot Gallery`}>
      <div className="gallery-header-row">
        <div className="gallery-title-group">
          <div className="eyebrow">
            <span className="tiny-square" /> VISUAL WALKTHROUGH & INTERFACE
          </div>
          <h2 className="gallery-main-title">
            {isDesktop ? "Platform Gallery" : "App Gallery"}
            <span className="gallery-pill-count">{screenshots.length} Screens</span>
          </h2>
          <p className="gallery-subtext">
            Continuously moving preview · Hover to pause · Click any screen to inspect in full
            resolution
          </p>
        </div>

        <div className="gallery-nav-actions">
          <button
            className="circle-button gallery-arrow-btn"
            onClick={() => handleScroll("left")}
            aria-label="Scroll gallery left"
            title="Scroll left"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="m15 18-6-6 6-6" />
            </svg>
          </button>
          <button
            className="circle-button gallery-arrow-btn"
            onClick={() => handleScroll("right")}
            aria-label="Scroll gallery right"
            title="Scroll right"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
          </button>
        </div>
      </div>

      {/* Viewport for continuous horizontal track */}
      <div
        className="app-gallery-viewport"
        ref={scrollContainerRef}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={() => setIsPaused(true)}
        onTouchEnd={() => setIsPaused(false)}
      >
        <div
          ref={trackRef}
          className={`app-gallery-marquee ${isDesktop ? "is-desktop-track" : "is-mobile-track"} ${
            isPaused ? "is-paused" : ""
          }`}
          style={
            {
              "--item-count": screenshots.length,
              "--duration": `${Math.max(30, screenshots.length * 5)}s`,
            } as React.CSSProperties
          }
        >
          {marqueeItems.map((shot, idx) => {
            const originalIndex = idx % screenshots.length;
            return (
              <button
                key={`${shot.url}-${idx}`}
                className={`gallery-mockup-card ${
                  isDesktop ? "mockup-desktop-card" : "mockup-mobile-card"
                } card-${project.id}`}
                onClick={() => onSelectScreenshot(originalIndex)}
                aria-label={`Enlarge screenshot: ${shot.title}`}
              >
                {/* Device Frame */}
                <div className="device-frame">
                  {isDesktop ? (
                    /* Desktop Window Header */
                    <div className="browser-chrome">
                      <div className="browser-dots">
                        <span className="dot red" />
                        <span className="dot yellow" />
                        <span className="dot green" />
                      </div>
                      <div className="browser-address">
                        <span className="lock-icon">🔒</span>
                        <span>
                          hms.stjude-cloud.internal/
                          {shot.title.toLowerCase().replace(/[^a-z0-9]/g, "-")}
                        </span>
                      </div>
                    </div>
                  ) : (
                    /* Mobile Notch */
                    <div className="phone-bezel-top">
                      <div className="phone-island">
                        <span className="island-lens" />
                      </div>
                    </div>
                  )}

                  {/* Screenshot Image */}
                  <div className="mockup-screen-area">
                    <img src={shot.url} alt={shot.title} loading="lazy" className="screen-img" />
                    <div className="screen-hover-overlay">
                      <span className="expand-badge">
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.2"
                        >
                          <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
                        </svg>
                        Click to enlarge
                      </span>
                    </div>
                  </div>
                </div>

                {/* Card Caption Tag */}
                <div className="mockup-meta">
                  <div className="meta-index">Screen 0{originalIndex + 1}</div>
                  <h4 className="meta-title">{shot.title}</h4>
                  <p className="meta-caption">{shot.caption}</p>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
