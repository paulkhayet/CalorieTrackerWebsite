import Image from "next/image";
import {
  ArrowRight,
  BarChart3,
  Check,
  Cloud,
  Search,
  ShieldCheck,
} from "lucide-react";
import {
  APP_STORE_URL,
  appStoreSnapshot,
  pricingPlans,
  SITE_URL,
} from "./_content/marketing";

const faqs = [
  {
    question: "Is The Simplest Calorie Tracker free?",
    answer:
      "Yes. The app is free to download and gives you the essentials for logging food, tracking calories and macros, and setting daily goals. Premium is optional.",
  },
  {
    question: "What does Premium add?",
    answer:
      "Premium includes barcode scanning, AI Meal Scan, advanced insights, health tracking, unlimited saved foods and recipes, and additional customization. Plans are purchased and managed through Apple.",
  },
  {
    question: "How can I add food?",
    answer:
      "Search thousands of foods, enter a food manually, use a saved food or recipe, or choose a serving size in grams. Premium also includes barcode scanning and AI Meal Scan.",
  },
  {
    question: "Can I scan a barcode?",
    answer:
      "Yes. Barcode scanning is included with Premium for fast packaged-food lookup.",
  },
  {
    question: "Does the app work with Apple Health?",
    answer:
      "The app can work with Apple Health for steps, goals, and streaks. Premium adds active calories, workouts, and weight tracking with Apple Health. You choose which permissions to grant in iOS.",
  },
  {
    question: "Where is my tracking data stored?",
    answer:
      "The data you enter is stored securely on your device and is not accessible to us. If you enable iCloud backup, Apple may store a protected copy in your private iCloud account, which we also cannot access.",
  },
  {
    question: "How do I get help?",
    answer:
      "Visit our Support page or email support@thesimplestcalorietracker.com. Include your iPhone model, iOS version, app version, and a screenshot when it helps us understand an issue.",
  },
];

const benefits = [
  {
    icon: Search,
    title: "Log with less effort",
    copy: "Search thousands of foods, enter nutrition yourself, or return to foods and recipes you use often.",
    points: ["Food search", "Manual entry", "Saved foods and recipes"],
  },
  {
    icon: BarChart3,
    title: "See your day clearly",
    copy: "Calories, macros, optional fiber, and water stay together in a Today view that is easy to scan.",
    points: ["Daily calorie goals", "Optional macros and water", "Serving sizes and grams"],
  },
  {
    icon: Cloud,
    title: "Keep it your way",
    copy: "Set the goals and reminders that fit your routine, see your history when useful, and keep your data backed up.",
    points: ["Goals and streaks", "Insights and history", "Private iCloud backup"],
  },
];

function AppStoreButton({
  compact = false,
  placement,
}: {
  compact?: boolean;
  placement: string;
}) {
  return (
    <a
      className={`app-store-button${compact ? " app-store-button--compact" : ""}`}
      data-app-store-link={placement}
      href={APP_STORE_URL}
      rel="noopener noreferrer"
      target="_blank"
    >
      <Image
        alt="Download on the App Store"
        className="app-store-badge"
        height={40}
        src="/app-store-badge.svg"
        width={135}
      />
    </a>
  );
}

function Phone({
  src,
  alt,
  priority = false,
  className = "",
}: {
  src: string;
  alt: string;
  priority?: boolean;
  className?: string;
}) {
  return (
    <div className={`phone ${className}`.trim()}>
      <div className="phone__screen">
        <Image
          alt={alt}
          fill
          preload={priority}
          sizes="(max-width: 720px) 72vw, (max-width: 1100px) 34vw, 330px"
          src={src}
        />
      </div>
    </div>
  );
}

export default function Home() {
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: "The Simplest Calorie Tracker",
    alternateName: "Simplest Calorie Tracker",
    url: SITE_URL,
    logo: { "@type": "ImageObject", url: `${SITE_URL}/app-icon.png` },
    sameAs: [APP_STORE_URL],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer support",
      email: "support@thesimplestcalorietracker.com",
      url: `${SITE_URL}/support`,
    },
  };

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    name: "The Simplest Calorie Tracker",
    alternateName: "Simplest Calorie Tracker",
    url: SITE_URL,
    publisher: { "@id": `${SITE_URL}/#organization` },
  };

  const mobileApplicationJsonLd = {
    "@context": "https://schema.org",
    "@type": "MobileApplication",
    "@id": `${SITE_URL}/#mobile-application`,
    name: "The Simplest Calorie Tracker",
    operatingSystem: "iOS",
    applicationCategory: "HealthApplication",
    url: SITE_URL,
    downloadUrl: APP_STORE_URL,
    image: `${SITE_URL}/app-icon.png`,
    isPartOf: { "@id": `${SITE_URL}/#website` },
    publisher: { "@id": `${SITE_URL}/#organization` },
    description:
      "A calm calorie and macro tracker for iPhone with food search, manual entry, goals, saved foods, recipes, insights, and optional Premium features.",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    featureList: [
      "Food search and manual entry",
      "Calorie, macro, fiber, and water tracking",
      "Barcode scanning and AI Meal Scan with Premium",
      "Saved foods and recipes",
      "Apple Health integration",
      "Insights, streaks, and reminders",
      "iCloud backup",
    ],
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  return (
    <>
      <script
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [organizationJsonLd, websiteJsonLd, mobileApplicationJsonLd],
          }),
        }}
        type="application/ld+json"
      />
      <script
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        type="application/ld+json"
      />

      <header className="site-header">
        <div className="container header-inner">
          <a aria-label="Back to top" className="brand" href="#top">
            <Image
              alt=""
              className="brand__icon"
              height={44}
              priority
              src="/app-icon.png"
              width={44}
            />
            <span>The Simplest Calorie Tracker</span>
          </a>
          <nav aria-label="Primary navigation">
            <a href="#health">Health</a>
            <a href="#features">Features</a>
            <a href="#pricing">Pricing</a>
            <a href="#faq">FAQ</a>
          </nav>
          <a
            className="header-download"
            data-app-store-link="header"
            href={APP_STORE_URL}
            rel="noopener noreferrer"
            target="_blank"
          >
            Download on the App Store <ArrowRight aria-hidden="true" size={16} />
          </a>
        </div>
      </header>

      <main id="top">
        <section className="hero">
          <div className="container hero__inner">
            <div className="hero__copy">
              <p className="eyebrow">The official app for iPhone</p>
              <h1>
                The <span className="hero__headline-accent">Simplest</span>{" "}
                Way to Track Calories
              </h1>
              <p className="hero__lead">
                Track what matters: log food quickly, see your
                calories and macros at a glance, and move on with your day.
              </p>
              <div className="hero__actions">
                <AppStoreButton placement="hero" />
                <a
                  aria-label="Read App Store reviews"
                  className="rating-proof"
                  data-app-store-link="hero-rating"
                  href={APP_STORE_URL}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span aria-hidden="true">★★★★★</span>
                  <strong>{appStoreSnapshot.rating} on the App Store</strong>
                  <small>{appStoreSnapshot.ratingCount} ratings</small>
                </a>
              </div>
              <ul className="hero__details" aria-label="App highlights">
                <li><Check aria-hidden="true" /> Free to download</li>
                <li><Check aria-hidden="true" /> Built for iPhone</li>
                <li><Check aria-hidden="true" /> No separate login</li>
              </ul>
            </div>
            <div className="hero__visual">
              <Phone
                alt="The Today screen showing calories, macro progress, and logged foods"
                className="phone--hero"
                priority
                src="/screens/today.png"
              />
              <Phone
                alt="The Health screen showing daily steps, an activity streak, and workout progress"
                className="phone--hero-health"
                src="/screens/health-today.png"
              />
            </div>
          </div>
        </section>

        <section aria-labelledby="logging-heading" className="logging-methods section" id="how-to-log">
          <div className="container">
            <div className="section-heading logging-methods__heading">
              <p className="eyebrow">Six simple ways to log</p>
              <h2 id="logging-heading">There&apos;s an easy way to log every meal.</h2>
              <p className="section-copy">
                Search, type it in, reuse what you love, or scan when that is faster.
              </p>
            </div>

            <div className="logging-methods__rail" aria-label="Ways to log food in the app">
              <article className="logging-methods__card">
                <div className="logging-methods__screen">
                  <Image alt="Search Foods screen with popular food suggestions" fill sizes="(max-width: 700px) 72vw, 180px" src="/screens/logging/search-food.png" />
                </div>
                <div className="logging-methods__caption">
                  <h3>Search food</h3>
                  <p>Find a food in seconds.</p>
                </div>
              </article>
              <article className="logging-methods__card">
                <div className="logging-methods__screen">
                  <Image alt="Manual food entry screen for calories and macros" fill sizes="(max-width: 700px) 72vw, 180px" src="/screens/logging/manual-entry.png" />
                </div>
                <div className="logging-methods__caption">
                  <h3>Manual entry</h3>
                  <p>Use your own numbers.</p>
                </div>
              </article>
              <article className="logging-methods__card">
                <div className="logging-methods__screen">
                  <Image alt="Saved Foods library showing everyday meals" fill sizes="(max-width: 700px) 72vw, 180px" src="/screens/logging/saved-foods.png" />
                </div>
                <div className="logging-methods__caption">
                  <h3>Saved foods</h3>
                  <p>Reuse your regulars.</p>
                </div>
              </article>
              <article className="logging-methods__card">
                <div className="logging-methods__screen">
                  <Image alt="Recipes library showing a saved meal" fill sizes="(max-width: 700px) 72vw, 180px" src="/screens/logging/recipes.png" />
                </div>
                <div className="logging-methods__caption">
                  <h3>Recipes</h3>
                  <p>Log the whole meal.</p>
                </div>
              </article>
              <article className="logging-methods__card">
                <div className="logging-methods__screen">
                  <Image alt="Barcode scanner for packaged foods" fill sizes="(max-width: 700px) 72vw, 180px" src="/screens/logging/scan-barcode.png" />
                </div>
                <div className="logging-methods__caption">
                  <div className="logging-methods__title-row"><h3>Scan barcode</h3><span>Premium</span></div>
                  <p>Point, scan, and add.</p>
                </div>
              </article>
              <article className="logging-methods__card">
                <div className="logging-methods__screen">
                  <Image alt="AI meal scan screen with photo and photo-library options" fill sizes="(max-width: 700px) 72vw, 180px" src="/screens/logging/scan-meal.png" />
                </div>
                <div className="logging-methods__caption">
                  <div className="logging-methods__title-row"><h3>Scan meal</h3><span>Premium</span></div>
                  <p>Snap it, then review it.</p>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section aria-labelledby="health-heading" className="process section" id="health">
          <div className="container process__inner">
            <div className="process__visual">
              <Phone
                alt="Health screen showing daily steps, an activity streak, and workout progress"
                className="phone--health"
                src="/screens/health-today.png"
              />
            </div>
            <div className="process__copy">
              <p className="eyebrow">Health features</p>
              <h2 id="health-heading">Bring movement into your day.</h2>
              <p className="section-copy">
                Keep your food tracking and everyday activity in one calm place, with Apple Health
                controls that stay in your hands.
              </p>
              <ol className="process__steps">
                <li>
                  <span>1</span>
                  <div>
                    <strong>Connect Apple Health</strong>
                    <p>Start with steps. You choose the permissions you share and can change them in iOS Settings at any time.</p>
                  </div>
                </li>
                <li>
                  <span>2</span>
                  <div>
                    <strong>Set a step goal</strong>
                    <p>Give your daily movement a clear target alongside the calories and macros you already track.</p>
                  </div>
                </li>
                <li>
                  <span>3</span>
                  <div>
                    <strong>Build a steady streak</strong>
                    <p>See your progress over time and keep the habits that work for you in view.</p>
                  </div>
                </li>
              </ol>
            </div>
          </div>
        </section>

        <section className="features section" id="features">
          <div className="container">
            <div className="section-heading section-heading--center">
              <p className="eyebrow">Made for the everyday</p>
              <h2>Simple on purpose. Capable when you need it.</h2>
              <p className="section-copy">The features stay focused on helping you log, understand, and continue.</p>
            </div>
            <div className="benefit-grid">
              {benefits.map((benefit) => {
                const Icon = benefit.icon;

                return (
                  <article className="benefit-card" key={benefit.title}>
                    <span className="benefit-card__icon"><Icon aria-hidden="true" /></span>
                    <h3>{benefit.title}</h3>
                    <p>{benefit.copy}</p>
                    <ul>
                      {benefit.points.map((point) => (
                        <li key={point}><Check aria-hidden="true" />{point}</li>
                      ))}
                    </ul>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="insights section">
          <div className="container insights__inner">
            <div className="insights__copy">
              <p className="eyebrow">A little more context, when you want it</p>
              <h2>See patterns without turning tracking into a spreadsheet.</h2>
              <p className="section-copy">
                Check your history, trends, and streaks when it is helpful—then get back to your day.
              </p>
              <ul className="icon-list">
                <li>
                  <BarChart3 aria-hidden="true" />
                  <span><strong>Insights and history</strong><small>Review your progress over time.</small></span>
                </li>
                <li>
                  <ShieldCheck aria-hidden="true" />
                  <span><strong>Your data stays yours</strong><small>Your food log stays on your device.</small></span>
                </li>
                <li>
                  <Cloud aria-hidden="true" />
                  <span><strong>iCloud backup</strong><small>Use Apple&apos;s private iCloud backup when you choose.</small></span>
                </li>
              </ul>
            </div>
            <div className="insights__visual">
              <Phone
                alt="Insights screen showing trends and nutrition history"
                className="phone--insights"
                src="/screens/insights.png"
              />
            </div>
          </div>
        </section>

        <section aria-labelledby="testimonials-heading" className="testimonials section">
          <div className="container">
            <div className="testimonial-intro">
              <p className="eyebrow">From the App Store</p>
              <h2 id="testimonials-heading">A simple tracker people enjoy using.</h2>
              <a
                data-app-store-link="testimonials-rating"
                href={APP_STORE_URL}
                rel="noopener noreferrer"
                target="_blank"
              >
                <span aria-hidden="true">★★★★★</span> {appStoreSnapshot.rating} from {appStoreSnapshot.ratingCount} ratings <ArrowRight aria-hidden="true" size={17} />
              </a>
            </div>
            <div className="testimonial-grid">
              {appStoreSnapshot.testimonials.map((testimonial) => (
                <figure className="testimonial" key={testimonial.quote}>
                  <blockquote>“{testimonial.quote}”</blockquote>
                  <figcaption>{testimonial.label}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section className="pricing section" id="pricing">
          <div className="container">
            <div className="section-heading section-heading--center">
              <p className="eyebrow">Clear pricing</p>
              <h2>Start free. Choose the Premium option that fits.</h2>
              <p className="section-copy">All purchases are completed and managed securely through the App Store.</p>
            </div>
            <div className="pricing-grid">
              {pricingPlans.map((plan) => (
                <article className={`pricing-card${plan.featured ? " pricing-card--featured" : ""}`} key={plan.name}>
                  {plan.badge && <span className="pricing-card__badge">{plan.badge}</span>}
                  <h3>{plan.name}</h3>
                  <p className="pricing-card__price">{plan.price}</p>
                  <p className="pricing-card__detail">{plan.detail}</p>
                  <ul>
                    {plan.features.map((feature) => (
                      <li key={feature}><Check aria-hidden="true" />{feature}</li>
                    ))}
                  </ul>
                  <a
                    className="pricing-card__link"
                    data-app-store-link={`pricing-${plan.name.toLowerCase()}`}
                    href={APP_STORE_URL}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    Download on the App Store <ArrowRight aria-hidden="true" size={16} />
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="faq section" id="faq">
          <div className="container faq__inner">
            <div className="section-heading">
              <p className="eyebrow">Good to know</p>
              <h2>Questions, answered simply.</h2>
              <p className="section-copy">Need something more specific? <a href="/support">Visit support</a>.</p>
            </div>
            <div className="faq__list">
              {faqs.map((faq) => (
                <details key={faq.question}>
                  <summary>{faq.question}<span aria-hidden="true">+</span></summary>
                  <p>{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="final-cta">
          <div className="container final-cta__inner">
            <Image alt="" height={82} src="/app-icon.png" width={82} />
            <p className="eyebrow">A calmer way to track</p>
            <h2>Make food logging the easy part.</h2>
            <p>Download The Simplest Calorie Tracker and start with today.</p>
            <AppStoreButton placement="final-cta" />
            <small>Free to download. Optional in-app purchases.</small>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container site-footer__inner">
          <a className="brand brand--footer" href="#top">
            <Image alt="" className="brand__icon" height={38} src="/app-icon.png" width={38} />
            <span>The Simplest Calorie Tracker</span>
          </a>
          <div className="site-footer__links">
            <a data-app-store-link="footer" href={APP_STORE_URL} rel="noopener noreferrer" target="_blank">App Store</a>
            <a href="/privacy-policy">Privacy</a>
            <a href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/" rel="noopener noreferrer" target="_blank">Terms</a>
            <a href="/support">Support</a>
          </div>
          <p>© {new Date().getFullYear()} Paul Khayet</p>
        </div>
      </footer>

      <div className="mobile-download">
        <a className="mobile-download__badge" data-app-store-link="mobile-sticky" href={APP_STORE_URL} rel="noopener noreferrer" target="_blank">
          <Image alt="Download on the App Store" height={40} src="/app-store-badge.svg" width={135} />
        </a>
      </div>
    </>
  );
}
