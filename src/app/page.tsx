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
      "Premium includes barcode scanning, advanced insights, health tracking, unlimited saved foods and recipes, and additional customization. Plans are purchased and managed through Apple.",
  },
  {
    question: "How can I add food?",
    answer:
      "Search thousands of foods, enter a food manually, use a saved food or recipe, or choose a serving size in grams. Premium also includes barcode scanning for packaged foods.",
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
          fetchPriority={priority ? "high" : "auto"}
          loading={priority ? "eager" : "lazy"}
          priority={priority}
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
      "Barcode scanning with Premium",
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
            <a href="#how-it-works">How it works</a>
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
              <span aria-hidden="true" className="hero__ring" />
              <div className="hero__annotation hero__annotation--one">
                Find food in seconds.
              </div>
              <Phone
                alt="The Today screen showing calories, macro progress, and logged foods"
                className="phone--hero"
                priority
                src="/screens/today.png"
              />
              <div className="hero__annotation hero__annotation--two">
                See your day at a glance.
              </div>
            </div>
          </div>
        </section>

        <section aria-labelledby="problem-heading" className="problem section">
          <div className="container problem__inner">
            <div className="section-heading">
              <p className="eyebrow">Less friction, more follow-through</p>
              <h2 id="problem-heading">Food logging should not become another project.</h2>
            </div>
            <div className="problem__grid">
              <article>
                <span>01</span>
                <h3>Too many decisions</h3>
                <p>When every entry requires a maze of menus, logging becomes easy to put off.</p>
              </article>
              <article>
                <span>02</span>
                <h3>Too much on screen</h3>
                <p>When the important numbers are buried, it is harder to know where you stand.</p>
              </article>
              <article>
                <span>03</span>
                <h3>Too little consistency</h3>
                <p>When tracking feels heavy, it is difficult to turn a simple check-in into a routine.</p>
              </article>
            </div>
          </div>
        </section>

        <section className="process section" id="how-it-works">
          <div className="container process__inner">
            <div className="process__visual">
              <Phone
                alt="Food search screen with suggestions for logging a meal"
                className="phone--search"
                src="/screens/search.png"
              />
            </div>
            <div className="process__copy">
              <p className="eyebrow">How it works</p>
              <h2>Find it. Log it. See your day.</h2>
              <p className="section-copy">
                The app is designed around the few moments that matter: adding
                food and understanding today&apos;s progress.
              </p>
              <ol className="process__steps">
                <li>
                  <span>1</span>
                  <div>
                    <strong>Find your food</strong>
                    <p>Search, use a saved food, scan a barcode with Premium, or add it yourself.</p>
                  </div>
                </li>
                <li>
                  <span>2</span>
                  <div>
                    <strong>Log the serving</strong>
                    <p>Choose a serving size or grams, then add it to today in a few taps.</p>
                  </div>
                </li>
                <li>
                  <span>3</span>
                  <div>
                    <strong>See where you stand</strong>
                    <p>Your calorie and macro progress updates in one simple, useful view.</p>
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
