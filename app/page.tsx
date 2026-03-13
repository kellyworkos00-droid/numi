import Image from "next/image";

export default function HomePage() {
  return (
    <main className="page-shell">
      <section className="hero-grid">
        <div className="hero-copy panel reveal-up">
          <p className="eyebrow">Street Performance Label</p>
          <h1>
            Numi <span>Kicks</span>
          </h1>
          <p className="lead-copy">
            Designed for movement and impact. This page uses your logo palette
            as the entire art direction: matte black base, electric lime
            highlights, and sharp white contrast.
          </p>

          <div className="cta-row">
            <button type="button" className="cta-primary">
              Shop New Drop
            </button>
            <button type="button" className="cta-secondary">
              View Collection
            </button>
          </div>

          <div className="stat-row" aria-label="Brand stats">
            <article>
              <strong>24h</strong>
              <span>New drops</span>
            </article>
            <article>
              <strong>60k+</strong>
              <span>Community</span>
            </article>
            <article>
              <strong>4.9</strong>
              <span>Average rating</span>
            </article>
          </div>
        </div>

        <div className="hero-art panel reveal-up-delay">
          <div className="logo-beam" aria-hidden />
          <div className="brand-logo-wrap">
            <Image
              src="/numi-logo.jpeg"
              alt="Numi Kicks logo"
              width={700}
              height={700}
              className="brand-logo"
              priority
            />
          </div>
          <p className="hero-caption">Built to move. Built to stand out.</p>
        </div>
      </section>

      <section className="ticker" aria-label="Brand highlights ticker">
        <p>
          SPEED • COMFORT • EDGE • NUMI KICKS • SPEED • COMFORT • EDGE • NUMI
          KICKS •
        </p>
      </section>

      <section className="feature-grid" aria-label="Feature highlights">
        <article className="panel reveal-up">
          <h2>Logo-Driven Visuals</h2>
          <p>
            Every highlight color is tuned to your uploaded logo for instant
            brand recognition.
          </p>
        </article>
        <article className="panel reveal-up-delay">
          <h2>Purposeful Motion</h2>
          <p>
            Staggered reveals and a scrolling ticker add energy without visual
            noise.
          </p>
        </article>
        <article className="panel reveal-up-late">
          <h2>Ready Everywhere</h2>
          <p>
            Layout scales smoothly from compact mobile screens to wide desktop
            displays.
          </p>
        </article>
      </section>
    </main>
  );
}
