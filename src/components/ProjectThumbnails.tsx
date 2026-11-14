import { useState } from "react";
import type { Project } from "../data/projects";

// ============================================================================
// 1. SAAS HMS THUMBNAIL (Clinical Command Center)
// ============================================================================
export function SaasHmsThumbnail({ variant = 0 }: { variant?: number }) {
  const [activeBed, setActiveBed] = useState<number>(1);

  const beds = [
    { id: 1, label: "ICU-1", status: "occupied", tag: "P-401" },
    { id: 2, label: "ICU-2", status: "free", tag: "Ready" },
    { id: 3, label: "PVT-1", status: "occupied", tag: "P-389" },
    { id: 4, label: "PVT-2", status: "cleaning", tag: "Sanitizing" },
    { id: 5, label: "GEN-1", status: "occupied", tag: "P-377" },
    { id: 6, label: "GEN-2", status: "free", tag: "Ready" },
  ];

  return (
    <div className={`product-scene hms-scene variant-${variant}`}>
      <div className="hms-glow-orb" />

      <div className="hms-window">
        {/* Title Bar */}
        <div className="hms-titlebar">
          <div className="hms-traffic-lights">
            <span className="dot red" />
            <span className="dot yellow" />
            <span className="dot green" />
          </div>
          <div className="hms-title-text">
            <span className="hms-cross">✚</span>
            <strong>SaaS HMS</strong>
            <span className="hms-sep">/</span>
            <span>Clinical Cloud</span>
          </div>
          <div className="hms-live-badge">
            <span className="pulse-dot" />
            <span>10 DEPTS LIVE</span>
          </div>
        </div>

        {/* Dashboard Body */}
        <div className="hms-body">
          {/* Top KPI Ribbon */}
          <div className="hms-kpi-row">
            <div className="hms-kpi">
              <span className="kpi-label">Avg Wait Time</span>
              <div className="kpi-val">
                4.2<small>min</small> <span className="kpi-pill green">-52%</span>
              </div>
            </div>
            <div className="hms-kpi">
              <span className="kpi-label">Bed Occupancy</span>
              <div className="kpi-val">
                42<small>/48</small> <span className="kpi-pill teal">88%</span>
              </div>
            </div>
            <div className="hms-kpi">
              <span className="kpi-label">Active Token</span>
              <div className="kpi-val">
                #104 <span className="kpi-pill blue">OPD</span>
              </div>
            </div>
          </div>

          {/* Split: ECG Heartbeat Monitor + Bed Grid */}
          <div className="hms-middle-row">
            {/* Real-time ECG Vitals */}
            <div className="hms-ecg-box">
              <div className="box-head">
                <span>Patient Vitals (ECG)</span>
                <span className="ecg-bpm">♥ 74 BPM</span>
              </div>
              <div className="ecg-track">
                <svg className="ecg-svg" viewBox="0 0 240 32" preserveAspectRatio="none">
                  <path
                    className="ecg-wave"
                    d="M0,16 L35,16 L40,10 L45,24 L50,4 L55,28 L60,14 L65,16 L120,16 L125,10 L130,24 L135,4 L140,28 L145,14 L150,16 L205,16 L210,10 L215,24 L220,4 L225,28 L230,14 L235,16 L240,16"
                  />
                </svg>
                <div className="ecg-glow-sweep" />
              </div>
            </div>

            {/* Inpatient Bed Map */}
            <div className="hms-beds-box">
              <div className="box-head">
                <span>Inpatient Bed Map</span>
                <span className="bed-legend-mini">6 Active</span>
              </div>
              <div className="bed-pills-grid">
                {beds.map((b) => (
                  <button
                    type="button"
                    key={b.id}
                    className={`bed-pill ${b.status} ${activeBed === b.id ? "active" : ""}`}
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      setActiveBed(b.id);
                    }}
                  >
                    <span className="bed-dot" />
                    <span className="bed-id">{b.label}</span>
                    <span className="bed-tag">{b.tag}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Prescription Toast */}
          <div className="hms-rx-strip">
            <span className="rx-icon">Rx</span>
            <span className="rx-name">Amoxicillin 500mg · 1 tab post meals</span>
            <span className="rx-done">Dispensed ✓</span>
          </div>
        </div>
      </div>

      {/* Floating Emergency Badge */}
      <div className="hms-floating-tag">
        <span className="hms-pulse-ring" />
        <div>
          <strong>⚡ OPD Fast-Track Active</strong>
          <small>100% Paperless Cloud EMR</small>
        </div>
      </div>
    </div>
  );
}

// ============================================================================
// 2. TRENDSTREAM THUMBNAIL (TikTok-style Video E-Commerce)
// ============================================================================
export function TrendStreamThumbnail({ variant = 0 }: { variant?: number }) {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(14820);

  const handleLike = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (liked) {
      setLiked(false);
      setLikeCount((c) => c - 1);
    } else {
      setLiked(true);
      setLikeCount((c) => c + 1);
    }
  };

  return (
    <div className={`product-scene trendstream-scene variant-${variant}`}>
      <div className="ts-aura" />

      {/* Primary Phone Mockup */}
      <div className="ts-phone">
        {/* Dynamic Island Notch */}
        <div className="ts-island-bar">
          <div className="ts-island">
            <span className="ts-camera" />
          </div>
        </div>

        {/* Video Canvas Stage */}
        <div className="ts-screen">
          {/* Animated Ambient Video Backdrop */}
          <div className="ts-video-bg">
            <div className="ts-gradient-mesh" />
            <div className="ts-shimmer" />
          </div>

          {/* Top Live Pill & Categories */}
          <div className="ts-top-overlay">
            <div className="ts-live-tag">
              <span className="ts-red-dot" />
              <span>LIVE HLS</span>
            </div>
            <div className="ts-cat-pills">
              <span className="cat active">Trending</span>
              <span className="cat">Men</span>
              <span className="cat">Women</span>
            </div>
          </div>

          {/* Right Action Bar */}
          <div className="ts-sidebar-actions">
            <button
              type="button"
              className={`ts-action-pill ${liked ? "liked" : ""}`}
              onClick={handleLike}
              aria-label="Like product video"
            >
              <span className="heart-icon">♥</span>
              <span className="action-num">{likeCount.toLocaleString()}</span>
              {liked && <span className="heart-particle">♥</span>}
            </button>
            <div className="ts-action-pill">
              <span className="chat-icon">💬</span>
              <span className="action-num">1.2k</span>
            </div>
            <div className="ts-vinyl">
              <span className="vinyl-groove">♫</span>
            </div>
          </div>

          {/* Bottom In-Video Product Overlay */}
          <div className="ts-product-overlay">
            {/* Audio Waveform */}
            <div className="ts-sound-bars">
              <i style={{ height: "40%" }} />
              <i style={{ height: "90%" }} />
              <i style={{ height: "60%" }} />
              <i style={{ height: "100%" }} />
              <i style={{ height: "50%" }} />
            </div>

            {/* Product Card */}
            <div className="ts-card">
              <div className="ts-card-left">
                <span className="ts-in-video">In this video</span>
                <h4>Embroidered Summer Kurta</h4>
                <div className="ts-pricing">
                  <strong>PKR 3,400</strong>
                  <span className="ts-discount">-29%</span>
                </div>
              </div>
              <button
                type="button"
                className="ts-cart-cta"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                }}
              >
                <span>Bag</span>
                <span>＋</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Speed Chip */}
      <div className="ts-floating-chip">
        <span className="lightning">⚡</span>
        <div>
          <strong>&lt;250ms Preload</strong>
          <small>HLS 1080p · 60 FPS Fluid</small>
        </div>
      </div>
    </div>
  );
}

// ============================================================================
// 3. ZAMAN ARTS THUMBNAIL (Artisan Crafts & Video Commerce)
// ============================================================================
export function ZamanArtsThumbnail({ variant = 0 }: { variant?: number }) {
  const [inCart, setInCart] = useState(false);

  return (
    <div className={`product-scene zamanarts-scene variant-${variant}`}>
      <div className="za-warm-aura" />

      {/* Smartphone Frame */}
      <div className="za-phone">
        {/* Notch */}
        <div className="za-notch-bar">
          <div className="za-notch-dot" />
        </div>

        {/* Screen */}
        <div className="za-screen">
          {/* Header */}
          <div className="za-header">
            <span className="za-logo">
              <span className="za-crest">🏛</span> Zaman Arts
            </span>
            <span className="za-star-score">5.0 ★</span>
          </div>

          {/* Video Demonstration Card */}
          <div className="za-video-hero">
            <div className="za-wood-bg" />
            <div className="za-play-ring">
              <span className="za-triangle">▶</span>
              <span className="za-pulse-ring-1" />
              <span className="za-pulse-ring-2" />
            </div>
            <div className="za-video-meta">
              <span className="za-hd-badge">4K Chewie Player</span>
              <strong>Hand-Carving Walnut Calligraphy</strong>
            </div>
          </div>

          {/* Featured Craft Product Card */}
          <div className="za-craft-card">
            <div className="za-craft-badge-row">
              <span className="za-heritage-tag">Artisan Heritage</span>
              <span className="za-free-ship">Free Shipping</span>
            </div>
            <h4 className="za-craft-title">Bespoke Thuluth Wall Panel</h4>
            <div className="za-craft-bottom">
              <div className="za-price-box">
                <span className="za-price-val">PKR 7,500</span>
                <small className="za-price-tax">Handcrafted to order</small>
              </div>
              <button
                type="button"
                className={`za-add-cta ${inCart ? "is-added" : ""}`}
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setInCart(!inCart);
                }}
              >
                {inCart ? "In Bag ✓" : "Add to Cart ＋"}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Artisan Seal */}
      <div className="za-floating-seal">
        <span className="za-seal-star">✦</span>
        <div>
          <strong>100% Certified Handcrafted</strong>
          <small>Dual-Tier Cache · &lt;180ms Latency</small>
        </div>
      </div>
    </div>
  );
}

// ============================================================================
// 4. AL-MIHRAB THUMBNAIL (The Celestial Sanctuary)
// ============================================================================
export function AlMihrabThumbnail({ variant = 0 }: { variant?: number }) {
  return (
    <div className={`product-scene almihrab-scene variant-${variant}`}>
      <div className="am-stardust" />

      {/* Smartphone Frame */}
      <div className="am-phone">
        {/* Notch */}
        <div className="am-notch-bar">
          <div className="am-notch-dot" />
        </div>

        {/* Midnight Sanctuary Canvas */}
        <div className="am-screen">
          {/* Top Status */}
          <div className="am-header">
            <div className="am-loc">
              <span className="am-compass">📍 284° NW</span>
              <span className="am-city">Lahore, Pakistan</span>
            </div>
            <div className="am-streak-pill">
              <span className="flame">🔥</span>
              <span>24 DAYS</span>
            </div>
          </div>

          {/* Central Glowing Golden Prayer Progress Ring */}
          <div className="am-ring-stage">
            <div className="am-gauge-container">
              <svg className="am-gauge-svg" viewBox="0 0 120 120">
                <circle cx="60" cy="60" r="48" className="am-gauge-track" />
                <circle
                  cx="60"
                  cy="60"
                  r="48"
                  className="am-gauge-val"
                  strokeDasharray="301.6"
                  strokeDashoffset="100"
                />
              </svg>
              <div className="am-gauge-content">
                <span className="gauge-label">NEXT PRAYER</span>
                <strong className="gauge-name">ASR</strong>
                <span className="gauge-countdown">01h 24m remaining</span>
                <span className="gauge-time">04:15 PM</span>
              </div>
            </div>
          </div>

          {/* 3 Prominent Daily Prayer Status Rows */}
          <div className="am-prayers-stack">
            <div className="am-p-row done">
              <span className="p-check">✓</span>
              <span className="p-name">Fajr</span>
              <span className="p-badge gold">On Time</span>
              <span className="p-time">05:12 AM</span>
            </div>
            <div className="am-p-row done">
              <span className="p-check">👥</span>
              <span className="p-name">Dhuhr</span>
              <span className="p-badge gold">In Jama'ah</span>
              <span className="p-time">12:30 PM</span>
            </div>
            <div className="am-p-row current">
              <span className="p-pulse" />
              <span className="p-name">Asr</span>
              <span className="p-badge amber">Next Up</span>
              <span className="p-time">04:15 PM</span>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Verse Toast */}
      <div className="am-floating-toast">
        <span className="am-star">۞</span>
        <div>
          <strong>"Prayer is decreed at specified times."</strong>
          <small>Surah An-Nisa 4:103 · 98.4% Consistency</small>
        </div>
      </div>
    </div>
  );
}

// ============================================================================
// PRODUCT PREVIEW SWITCHER
// ============================================================================
export function ProductPreview({ project, variant = 0 }: { project: Project; variant?: number }) {
  if (project.id === "saas-hms") {
    return <SaasHmsThumbnail variant={variant} />;
  }
  if (project.id === "trendstream") {
    return <TrendStreamThumbnail variant={variant} />;
  }
  if (project.id === "zamanarts") {
    return <ZamanArtsThumbnail variant={variant} />;
  }
  if (project.id === "al-mihrab") {
    return <AlMihrabThumbnail variant={variant} />;
  }

  return <SaasHmsThumbnail variant={variant} />;
}
