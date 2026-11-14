import type { Project } from "../data/projects";

// ============================================================================
// 1. SAAS HMS THUMBNAIL (Clinical Command Center Desktop)
// ============================================================================
export function SaasHmsThumbnail({ variant = 0 }: { variant?: number }) {
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
                  <div key={b.id} className={`bed-pill ${b.status}`}>
                    <span className="bed-dot" />
                    <span className="bed-id">{b.label}</span>
                    <span className="bed-tag">{b.tag}</span>
                  </div>
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
// 2. TRENDSTREAM THUMBNAIL (Live Video E-Commerce Dual Phone)
// ============================================================================
export function TrendStreamThumbnail({ variant = 0 }: { variant?: number }) {
  const chartBars = [40, 75, 52, 95, 62, 85, 48];
  const items = [
    { code: "K", name: "Summer Kurta", sub: "Linen Kurta · Size M", val: "PKR 3,400" },
    { code: "S", name: "Silk Dupatta", sub: "Emerald Green", val: "PKR 2,300" },
    { code: "D", name: "Express Drop", sub: "Tracked Courier", val: "Free" },
  ];

  return (
    <div className={`product-scene pocket-scene trendstream-scene variant-${variant}`}>
      <div className="pocket-circle" />
      <span className="scene-note">
        Live video drops.
        <br />
        Instant checkout.
      </span>

      {/* Back Phone: Order Summary & Cart Progress */}
      <div className="phone phone-back">
        <div className="phone-notch" />
        <div className="phone-top">
          Order summary <span>↗</span>
        </div>
        <div className="spend-ring">
          <span>
            Cart Total
            <strong>PKR 5,700</strong>
          </span>
        </div>
        <div className="phone-subtitle">Active order</div>
        {items.map((item) => (
          <div className="transaction" key={item.name}>
            <i>{item.code}</i>
            <span>
              {item.name}
              <small>{item.sub}</small>
            </span>
            <b>{item.val}</b>
          </div>
        ))}
      </div>

      {/* Front Phone: Main App Interface & Video Pass */}
      <div className="phone phone-front">
        <div className="phone-notch" />
        <div className="phone-top">
          Hello, Fahd <span className="mini-avatar">f.</span>
        </div>
        <div className="balance-label">Live drop bag</div>
        <div className="balance">
          PKR 3,400<span>.00</span>
        </div>
        <div className="bank-card">
          <span>trendstream.</span>
          <svg className="bank-card-icon" viewBox="0 0 24 24" fill="currentColor">
            <polygon points="6 4 20 12 6 20 6 4" />
          </svg>
          <strong>•••• &nbsp; •••• &nbsp; •••• &nbsp; 8824</strong>
          <small>
            LIVE PASS VIP <b>HLS 4K</b>
          </small>
        </div>
        <div className="phone-actions">
          <span>
            🛍<small>Shop drops</small>
          </span>
          <span>
            ▶<small>Watch Live</small>
          </span>
          <span>
            ⚡<small>Flash Sale</small>
          </span>
        </div>
        <div className="phone-subtitle">
          Engagement <small>14.8k views</small>
        </div>
        <div className="tiny-chart">
          {chartBars.map((n, i) => (
            <i key={i} style={{ height: `${n}%` }} />
          ))}
        </div>
        <div className="phone-nav">
          <span>⌂</span> <span>▶</span> <span>🛍</span> <span>○</span>
        </div>
      </div>

      <div className="floating-spark">✳</div>
    </div>
  );
}

// ============================================================================
// 3. ZAMAN ARTS THUMBNAIL (Artisan Crafts & 4K Video Dual Phone)
// ============================================================================
export function ZamanArtsThumbnail({ variant = 0 }: { variant?: number }) {
  const chartBars = [45, 60, 52, 92, 70, 82, 64];
  const items = [
    { code: "C", name: "Thuluth Panel", sub: "Teak & Brass Inlay", val: "PKR 14,500" },
    { code: "W", name: "Carved Stand", sub: "Pure Acre Walnut", val: "PKR 6,200" },
    { code: "L", name: "Brass Lantern", sub: "Hand-forged Arabesque", val: "PKR 4,800" },
  ];

  return (
    <div className={`product-scene pocket-scene zamanarts-scene variant-${variant}`}>
      <div className="pocket-circle" />
      <span className="scene-note">
        Bespoke crafts,
        <br />
        brought to life.
      </span>

      {/* Back Phone: Workshop Score & Heritage Pieces */}
      <div className="phone phone-back">
        <div className="phone-notch" />
        <div className="phone-top">
          Artisan workshop <span>↗</span>
        </div>
        <div className="spend-ring">
          <span>
            Artisan Rating
            <strong>5.0 ★</strong>
          </span>
        </div>
        <div className="phone-subtitle">Recent creations</div>
        {items.map((item) => (
          <div className="transaction" key={item.name}>
            <i>{item.code}</i>
            <span>
              {item.name}
              <small>{item.sub}</small>
            </span>
            <b>{item.val}</b>
          </div>
        ))}
      </div>

      {/* Front Phone: Zaman Studio Showcase & Bespoke Card */}
      <div className="phone phone-front">
        <div className="phone-notch" />
        <div className="phone-top">
          Zaman Studio <span className="mini-avatar">🏛</span>
        </div>
        <div className="balance-label">Artisan showcase</div>
        <div className="balance">
          PKR 14,500<span>.00</span>
        </div>
        <div className="bank-card">
          <span>zaman arts.</span>
          <svg
            className="bank-card-icon"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
          >
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
          </svg>
          <strong>•••• &nbsp; •••• &nbsp; •••• &nbsp; 1984</strong>
          <small>
            MASTER CRAFT <b>4K CHEWIE</b>
          </small>
        </div>
        <div className="phone-actions">
          <span>
            ✦<small>Bespoke</small>
          </span>
          <span>
            ▶<small>Watch 4K</small>
          </span>
          <span>
            💬<small>Inquire</small>
          </span>
        </div>
        <div className="phone-subtitle">
          Handcraft rhythm <small>100% Handcrafted</small>
        </div>
        <div className="tiny-chart">
          {chartBars.map((n, i) => (
            <i key={i} style={{ height: `${n}%` }} />
          ))}
        </div>
        <div className="phone-nav">
          <span>⌂</span> <span>✦</span> <span>◈</span> <span>♡</span>
        </div>
      </div>

      <div className="floating-spark">✳</div>
    </div>
  );
}

// ============================================================================
// 4. AL-MIHRAB THUMBNAIL (Celestial Prayer Companion Dual Phone)
// ============================================================================
export function AlMihrabThumbnail({ variant = 0 }: { variant?: number }) {
  const chartBars = [50, 72, 85, 100, 78, 92, 82];
  const items = [
    { code: "F", name: "Fajr Prayer", sub: "Jama'ah at Masjid", val: "05:12 AM" },
    { code: "D", name: "Dhuhr Prayer", sub: "Completed on time", val: "12:30 PM" },
    { code: "A", name: "Asr Prayer", sub: "Next up in 24m", val: "04:15 PM" },
  ];

  return (
    <div className={`product-scene pocket-scene almihrab-scene variant-${variant}`}>
      <div className="pocket-circle" />
      <span className="scene-note">
        Peace and presence
        <br />
        in every prayer.
      </span>

      {/* Back Phone: Daily Prayers Log & Habit Ring */}
      <div className="phone phone-back">
        <div className="phone-notch" />
        <div className="phone-top">
          Daily prayers <span>↗</span>
        </div>
        <div className="spend-ring">
          <span>
            Habits Today
            <strong>4 / 5 Done</strong>
          </span>
        </div>
        <div className="phone-subtitle">Today's journal</div>
        {items.map((item) => (
          <div className="transaction" key={item.name}>
            <i>{item.code}</i>
            <span>
              {item.name}
              <small>{item.sub}</small>
            </span>
            <b>{item.val}</b>
          </div>
        ))}
      </div>

      {/* Front Phone: Celestial Prayer Countdown & Qibla Compass */}
      <div className="phone phone-front">
        <div className="phone-notch" />
        <div className="phone-top">
          Al-Mihrab <span className="mini-avatar">۞</span>
        </div>
        <div className="balance-label">Next prayer: Asr</div>
        <div className="balance">
          04:15<span> PM</span>
        </div>
        <div className="bank-card">
          <span>al-mihrab.</span>
          <svg className="bank-card-icon" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 3a9 9 0 1 0 9 9c0-.46-.04-.92-.1-1.36a5.389 5.389 0 0 1-4.4 2.26 5.403 5.403 0 0 1-3.14-9.77A9.038 9.038 0 0 0 12 3Z" />
          </svg>
          <strong>284° NW &nbsp;•&nbsp; QIBLA COMPASS</strong>
          <small>
            LAHORE, PAKISTAN <b>HIJRI 1447</b>
          </small>
        </div>
        <div className="phone-actions">
          <span>
            ۞<small>Check-in</small>
          </span>
          <span>
            🧭<small>Qibla</small>
          </span>
          <span>
            📖<small>Quran</small>
          </span>
        </div>
        <div className="phone-subtitle">
          Weekly streak <small>24 Days 🔥</small>
        </div>
        <div className="tiny-chart">
          {chartBars.map((n, i) => (
            <i key={i} style={{ height: `${n}%` }} />
          ))}
        </div>
        <div className="phone-nav">
          <span>⌂</span> <span>۞</span> <span>☪</span> <span>⚙</span>
        </div>
      </div>

      <div className="floating-spark">✳</div>
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
