import Image from "next/image";

export default function HomePage() {
  return (
    <main className="page-shell">
      <section className="hero-card">
        <div className="brand-row">
          <div className="brand-logo-wrap">
            <Image
              src="/numi-logo.jpeg"
              alt="Numi Kicks logo"
              width={220}
              height={220}
              className="brand-logo"
              priority
            />
          </div>
          <div>
            <p className="eyebrow">Built To Move</p>
            <h1>
              Numi <span>Kicks</span>
            </h1>
          </div>
        </div>

        <p className="lead-copy">
          Performance style with electric energy. This design is mapped to your
          logo palette: deep black, clean white, and high-voltage lime green.
        </p>

        <div className="cta-row">
          <button type="button" className="cta-primary">
            Shop Drops
          </button>
          <button type="button" className="cta-secondary">
            Explore Lookbook
          </button>
        </div>
      </section>

      <section className="feature-grid" aria-label="Brand highlights">
        <article>
          <h2>Logo-Matched Colors</h2>
          <p>Neon lime accents and monochrome contrast to mirror your brand.</p>
        </article>
        <article>
          <h2>Athletic Motion</h2>
          <p>Smooth staggered reveals and glow effects create speed and focus.</p>
        </article>
        <article>
          <h2>Mobile Ready</h2>
          <p>Responsive spacing and typography tuned for phone and desktop.</p>
        </article>
      </section>
    </main>
  );
}
