import Image from "next/image";

const products = [
  { name: "Numi Sprint X", price: "$129", tag: "Best Seller" },
  { name: "Numi Street Pro", price: "$149", tag: "New" },
  { name: "Numi Glide Run", price: "$119", tag: "Lightweight" },
  { name: "Numi Court Flex", price: "$139", tag: "Limited" },
];

export default function HomePage() {
  return (
    <>
      <header className="floating-header" aria-label="Primary header">
        <div className="floating-header-inner">
          <p className="header-brand" aria-label="Numi Kicks brand">
            Numi <span>Kicks</span>
          </p>

          <nav className="header-links" aria-label="Main navigation">
            <a href="#shop">Shop</a>
            <a href="#drops">Drops</a>
            <a href="#reviews">Reviews</a>
          </nav>

          <button type="button" className="header-action" aria-label="View cart">
            Cart (2)
          </button>
        </div>
      </header>

      <main className="page-shell">
        <section className="hero-grid" id="shop">
          <div className="hero-copy panel reveal-up">
            <p className="eyebrow">Performance Footwear</p>
            <h1>
              Sell Fast With <span>Numi Kicks</span>
            </h1>
            <p className="lead-copy">
              Premium sneakers built for running, gym, and daily streetwear.
              Launch new drops, highlight best sellers, and drive conversions on
              mobile and desktop.
            </p>

            <div className="cta-row">
              <button type="button" className="cta-primary">
                Shop Men
              </button>
              <button type="button" className="cta-secondary">
                Shop Women
              </button>
            </div>

            <div className="stat-row" aria-label="Brand stats">
              <article>
                <strong>Free</strong>
                <span>Shipping 2+ pairs</span>
              </article>
              <article>
                <strong>30d</strong>
                <span>Easy returns</span>
              </article>
              <article>
                <strong>4.9</strong>
                <span>Verified rating</span>
              </article>
            </div>
          </div>

          <div className="hero-art panel reveal-up-delay">
            <div className="logo-beam" aria-hidden />
            <div className="brand-logo-wrap">
              <Image
                src="/numi-logo.jpeg"
                alt="Numi Kicks featured product visual"
                width={700}
                height={700}
                className="brand-logo"
                priority
              />
            </div>
            <p className="hero-caption">New season drop now live</p>
            <div className="hero-price-card">
              <p>Featured Pair</p>
              <strong>Numi Velocity One</strong>
              <span>$159</span>
            </div>
          </div>
        </section>

        <section className="ticker" aria-label="Store highlights ticker">
          <p>
            FREE SHIPPING • EASY RETURNS • NEW DROP EVERY FRIDAY • NUMI KICKS •
            FREE SHIPPING • EASY RETURNS • NEW DROP EVERY FRIDAY •
          </p>
        </section>

        <section className="category-strip" aria-label="Shop categories">
          <article className="panel reveal-up">
            <h2>Running</h2>
            <p>Feather-light cushioning for daily miles.</p>
          </article>
          <article className="panel reveal-up-delay">
            <h2>Training</h2>
            <p>Grip and stability for high-intensity sessions.</p>
          </article>
          <article className="panel reveal-up-late">
            <h2>Lifestyle</h2>
            <p>Street-ready comfort for all-day wear.</p>
          </article>
        </section>

        <section className="product-grid" id="drops" aria-label="Popular products">
          {products.map((product) => (
            <article className="product-card panel" key={product.name}>
              <div className="product-media">
                <Image
                  src="/numi-logo.jpeg"
                  alt={`${product.name} shoe preview`}
                  width={360}
                  height={260}
                  className="product-image"
                />
                <span className="product-tag">{product.tag}</span>
              </div>
              <div className="product-meta">
                <h3>{product.name}</h3>
                <p>Engineered mesh upper, responsive foam midsole.</p>
                <div className="product-bottom">
                  <strong>{product.price}</strong>
                  <button type="button">Add to Cart</button>
                </div>
              </div>
            </article>
          ))}
        </section>

        <section className="feature-grid" id="reviews" aria-label="Trust indicators">
          <article className="panel reveal-up">
            <h2>Fast Checkout</h2>
            <p>
              Streamlined cart flow optimized for mobile buyers and repeat
              customers.
            </p>
          </article>
          <article className="panel reveal-up-delay">
            <h2>Verified Reviews</h2>
            <p>
              Showcase social proof with real buyer ratings and top feedback.
            </p>
          </article>
          <article className="panel reveal-up-late">
            <h2>Weekly New Drops</h2>
            <p>
              Keep urgency high with limited launches every Friday at 8PM.
            </p>
          </article>
        </section>
      </main>

      <nav className="floating-bottom-nav" aria-label="Mobile quick navigation">
        <button type="button" className="nav-pill active" aria-label="Home">
          Home
        </button>
        <button type="button" className="nav-pill" aria-label="Shop">
          Shop
        </button>
        <button type="button" className="nav-pill" aria-label="Cart">
          Cart
        </button>
        <button type="button" className="nav-pill" aria-label="Profile">
          Profile
        </button>
      </nav>
    </>
  );
}
