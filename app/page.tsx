
import Image from "next/image";
import { useState } from "react";

const featuredProducts = [
  {
    name: "Numi Sprint X",
    price: "KES 18,900",
    tag: "Best Seller",
    image: "/numi-logo.jpeg",
    desc: "Elite running shoe for speed and comfort.",
  },
  {
    name: "Numi Street Pro",
    price: "KES 21,900",
    tag: "New",
    image: "/numi-logo.jpeg",
    desc: "Urban style meets athletic performance.",
  },
  {
    name: "Numi Glide Run",
    price: "KES 16,900",
    tag: "Lightweight",
    image: "/numi-logo.jpeg",
    desc: "Feather-light for daily miles.",
  },
];

const products = [
  { name: "Numi Sprint X", price: "KES 18,900", tag: "Best Seller" },
  { name: "Numi Street Pro", price: "KES 21,900", tag: "New" },
  { name: "Numi Glide Run", price: "KES 16,900", tag: "Lightweight" },
  { name: "Numi Court Flex", price: "KES 19,900", tag: "Limited" },
];

export default function HomePage() {
  const [carouselIdx, setCarouselIdx] = useState(0);
  const nextProduct = () => setCarouselIdx((i) => (i + 1) % featuredProducts.length);
  const prevProduct = () => setCarouselIdx((i) => (i - 1 + featuredProducts.length) % featuredProducts.length);
  const featured = featuredProducts[carouselIdx];
  return (
    <>
      <header className="floating-header" aria-label="Primary header">
        <div className="floating-header-inner">
          <p className="header-brand" aria-label="Numi Kicks brand">
            Numi <span>Kicks</span>
            <span className="kenya-flag" title="Kenya" aria-label="Kenyan flag">🇰🇪</span>
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
            <p className="eyebrow">Kenya's Performance Footwear</p>
            <h1>
              Step Up Kenya With <span>Numi Kicks</span>
            </h1>
            <p className="lead-copy">
              Premium sneakers for Nairobi streets, running, and daily style. Fast local delivery, M-Pesa checkout, and new drops every week.
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
                <span>Nairobi delivery</span>
              </article>
              <article>
                <strong>30d</strong>
                <span>Pay on delivery</span>
              </article>
              <article>
                <strong>4.9</strong>
                <span>Trusted by Kenyans</span>
              </article>
            </div>
          </div>

          <div className="hero-art panel reveal-up-delay">
            <div className="logo-beam" aria-hidden />
            <div className="brand-logo-wrap">
              <Image
                src={featured.image}
                alt={featured.name + " featured product visual"}
                width={700}
                height={700}
                className="brand-logo"
                priority
              />
            </div>
            <p className="hero-caption">{featured.desc}</p>
            <div className="hero-price-card">
              <p>Featured Pair</p>
              <strong>{featured.name}</strong>
              <span>{featured.price}</span>
              <span className="product-tag" style={{marginLeft:8}}>{featured.tag}</span>
              <div className="carousel-controls">
                <button aria-label="Previous product" onClick={prevProduct}>&lt;</button>
                <button aria-label="Next product" onClick={nextProduct}>&gt;</button>
              </div>
            </div>
          </div>
        </section>

         <section className="ticker" aria-label="Store highlights ticker">
           <p>
             FREE NAIROBI DELIVERY • M-PESA ACCEPTED • NEW DROP EVERY FRIDAY • NUMI KICKS • KES PRICING •
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
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M3 10.5L12 4L21 10.5V20A1.5 1.5 0 0 1 19.5 21.5H4.5A1.5 1.5 0 0 1 3 20V10.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M9 21.5V14.5H15V21.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </button>
        <button type="button" className="nav-pill" aria-label="Shop">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M6 7V6A6 6 0 0 1 18 6V7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><rect x="3" y="7" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.5"/><path d="M16 11V17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><path d="M8 11V17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
        </button>
        <button type="button" className="nav-pill" aria-label="Cart">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><circle cx="8.5" cy="20.5" r="1.5" stroke="currentColor" strokeWidth="1.5"/><circle cx="17.5" cy="20.5" r="1.5" stroke="currentColor" strokeWidth="1.5"/><path d="M2 3H4.5L6.5 16.5H19.5L21.5 7.5H6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </button>
        <button type="button" className="nav-pill" aria-label="Profile">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="1.5"/><path d="M4 20C4 16.6863 7.58172 14 12 14C16.4183 14 20 16.6863 20 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
        </button>
      </nav>
    </>
  );
}
