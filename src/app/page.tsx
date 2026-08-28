import Image from "next/image";
import {
  Apple,
  ArrowRight,
  BarChart3,
  BellRing,
  Bookmark,
  Check,
  Cloud,
  Crown,
  Droplets,
  Flame,
  Palette,
  PencilLine,
  ScanBarcode,
  Search,
  ShieldCheck,
  Sparkles,
  Utensils,
  Zap,
} from "lucide-react";

const APP_STORE_URL =
  "https://apps.apple.com/us/app/the-simplest-calorie-tracker/id6761067469";

const features = [
  {
    icon: Search,
    title: "Find food fast",
    copy: "Search popular foods, scan a barcode, choose a saved favorite, or enter it yourself.",
  },
  {
    icon: BarChart3,
    title: "See what matters",
    copy: "Keep calories, protein, carbs, fat, and optional water tracking in one calm view.",
  },
  {
    icon: Bookmark,
    title: "Save your regulars",
    copy: "Build a reusable library of foods and recipes so tomorrow takes even less effort.",
  },
  {
    icon: Flame,
    title: "Build a steady streak",
    copy: "Simple streaks and smart reminders help consistency feel rewarding—not demanding.",
  },
  {
    icon: Sparkles,
    title: "Understand your habits",
    copy: "Explore history, trends, patterns, and macro insights when you want the bigger picture.",
  },
  {
    icon: Palette,
    title: "Make it feel like yours",
    copy: "Choose your theme, goals, macros, day end, water units, and appearance.",
  },
];

const faqs = [
  {
    question: "Is The Simplest Calorie Tracker free?",
    answer:
      "Yes. The app is free to download and includes everything you need to start tracking. Optional Premium unlocks extras like barcode scanning, advanced insights, unlimited saved foods and recipes, and more customization.",
  },
  {
    question: "What can I track?",
    answer:
      "Track calories, protein, carbohydrates, fat, and water. You decide which macros appear and can set targets that fit your routine.",
  },
  {
    question: "Can I scan food barcodes?",
    answer:
      "Yes. Premium includes barcode scanning for quick nutrition lookup, alongside food search, manual entry, saved foods, and recipes.",
  },
  {
    question: "Do I need to create an account?",
    answer:
      "You can start tracking without creating a separate app account. Optional iCloud backup uses your Apple account to help keep your data safe.",
  },
  {
    question: "Is it only for weight loss?",
    answer:
      "No. Choose a deficit, maintenance, or surplus goal. The app is designed to support the way you want to eat—not prescribe a single plan.",
  },
];

function AppStoreButton({ compact = false }: { compact?: boolean }) {
  return (
    <a
      className={`app-store-button${compact ? " app-store-button--compact" : ""}`}
      href={APP_STORE_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Download The Simplest Calorie Tracker on the App Store"
    >
      <Apple aria-hidden="true" strokeWidth={2.4} />
      <span>
        <small>Download on the</small>
        <strong>App Store</strong>
      </span>
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
          src={src}
          alt={alt}
          fill
          priority={priority}
          loading={priority ? "eager" : "lazy"}
          fetchPriority={priority ? "high" : "auto"}
          sizes="(max-width: 720px) 72vw, 360px"
        />
      </div>
    </div>
  );
}

export default function Home() {
  const softwareApplicationJsonLd = {
    "@context": "https://schema.org",
    "@type": "MobileApplication",
    name: "The Simplest Calorie Tracker",
    operatingSystem: "iOS",
    applicationCategory: "HealthApplication",
    url: "https://thesimplestcalorietracker.com",
    downloadUrl: APP_STORE_URL,
    image: "https://thesimplestcalorietracker.com/app-icon.png",
    description:
      "A simple calorie tracker for iPhone with fast food logging, macro and water tracking, saved foods, recipes, streaks, and insights.",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    featureList: [
      "Calorie and macro tracking",
      "Food search",
      "Barcode scanning",
      "Water tracking",
      "Saved foods and recipes",
      "Nutrition insights and history",
      "Tracking streaks and reminders",
      "iCloud backup",
    ],
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(softwareApplicationJsonLd),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <header className="site-header">
        <div className="container header-inner">
          <a className="brand" href="#top" aria-label="Back to top">
            <Image
              className="brand__icon"
              src="/app-icon.png"
              width={48}
              height={48}
              alt=""
              priority
            />
            <span>
              <strong>The Simplest</strong>
              <small>Calorie Tracker</small>
            </span>
          </a>
          <nav aria-label="Primary navigation">
            <a href="#how-it-works">How it works</a>
            <a href="#features">Features</a>
            <a href="#faq">FAQ</a>
          </nav>
          <a
            className="header-cta"
            href={APP_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            Get the app <ArrowRight size={17} aria-hidden="true" />
          </a>
        </div>
      </header>

      <main id="top">
        <section className="hero">
          <div className="hero__glow hero__glow--one" />
          <div className="hero__glow hero__glow--two" />
          <div className="container hero__inner">
            <div className="hero__copy">
              <div className="eyebrow">
                <Zap size={16} fill="currentColor" aria-hidden="true" />
                Calorie tracking without the homework
              </div>
              <h1>
                The calorie tracker that keeps it <em>simple.</em>
              </h1>
              <p className="hero__lead">
                Log food in seconds, see where you stand, and get on with your
                day. No clutter. No nutrition degree required.
              </p>
              <div className="hero__actions">
                <AppStoreButton />
                <a className="text-link" href="#how-it-works">
                  See how it works <ArrowRight size={18} aria-hidden="true" />
                </a>
              </div>
              <div className="hero__trust" aria-label="Product details">
                <span>
                  <Check aria-hidden="true" /> Free to download
                </span>
                <span>
                  <Check aria-hidden="true" /> Built for iPhone
                </span>
                <span>
                  <Check aria-hidden="true" /> No separate account
                </span>
              </div>
            </div>

            <div className="hero__visual" aria-label="The app's Today screen">
              <div className="float-card float-card--search">
                <span className="float-card__icon">
                  <Search aria-hidden="true" />
                </span>
                <span>
                  <small>FAST FOOD SEARCH</small>
                  <strong>Greek yogurt</strong>
                </span>
                <span className="float-card__cal">180 kcal</span>
              </div>
              <Phone
                src="/screens/today.png"
                alt="Today screen showing remaining calories, macros, and recently logged foods"
                priority
                className="phone--hero"
              />
              <div className="float-card float-card--streak">
                <span className="float-card__flame">
                  <Flame fill="currentColor" aria-hidden="true" />
                </span>
                <span>
                  <strong>2 day streak</strong>
                  <small>One day at a time</small>
                </span>
              </div>
            </div>
          </div>
        </section>

        <section className="proof-bar" aria-label="App highlights">
          <div className="container proof-bar__inner">
            <span><Search aria-hidden="true" /> Fast food search</span>
            <span><ScanBarcode aria-hidden="true" /> Barcode scanning</span>
            <span><Utensils aria-hidden="true" /> Saved foods &amp; recipes</span>
            <span><BarChart3 aria-hidden="true" /> Clear progress</span>
          </div>
        </section>

        <section className="section intro" id="how-it-works">
          <div className="container">
            <div className="section-heading section-heading--center">
              <span className="kicker">Three steps. That&apos;s it.</span>
              <h2>Tracking that fits into real life.</h2>
              <p>
                The best calorie tracker is the one you keep using. So every
                interaction is designed to be quick, clear, and easy to repeat.
              </p>
            </div>

            <div className="steps">
              <article className="step-card">
                <span className="step-card__number">01</span>
                <div className="step-card__icon"><Search aria-hidden="true" /></div>
                <h3>Find your food</h3>
                <p>Search, scan, pick a saved favorite, or enter it manually.</p>
              </article>
              <article className="step-card step-card--featured">
                <span className="step-card__number">02</span>
                <div className="step-card__icon"><PencilLine aria-hidden="true" /></div>
                <h3>Log in a tap</h3>
                <p>Adjust the serving if you need to, then add it to today.</p>
              </article>
              <article className="step-card">
                <span className="step-card__number">03</span>
                <div className="step-card__icon"><BarChart3 aria-hidden="true" /></div>
                <h3>Know where you stand</h3>
                <p>Calories and macros update instantly in one simple view.</p>
              </article>
            </div>
          </div>
        </section>

        <section className="section showcase">
          <div className="container showcase__inner">
            <div className="showcase__copy">
              <span className="kicker">Clear at a glance</span>
              <h2>All the signal. None of the noise.</h2>
              <p>
                Open the app and immediately see your remaining calories,
                macros, streak, and today&apos;s food—without digging through
                dashboards.
              </p>
              <ul className="check-list">
                <li><Check aria-hidden="true" /> Personalized calorie goal</li>
                <li><Check aria-hidden="true" /> Optional macro targets</li>
                <li><Check aria-hidden="true" /> Optional water tracking</li>
                <li><Check aria-hidden="true" /> Deficit, maintenance, or surplus</li>
              </ul>
              <AppStoreButton compact />
            </div>
            <div className="showcase__phones">
              <div className="phone-caption phone-caption--back">
                <Phone
                  src="/screens/search.png"
                  alt="Search Foods screen with popular food suggestions"
                />
                <span>Find food fast</span>
              </div>
              <div className="phone-caption phone-caption--front">
                <Phone
                  src="/screens/today.png"
                  alt="Calorie and macro progress on the Today screen"
                />
                <span>Stay on pace</span>
              </div>
            </div>
          </div>
        </section>

        <section className="section features" id="features">
          <div className="container">
            <div className="section-heading">
              <span className="kicker">Simple doesn&apos;t mean limited</span>
              <h2>Everything you need. Exactly where you expect it.</h2>
            </div>
            <div className="feature-grid">
              {features.map((feature) => {
                const Icon = feature.icon;
                return (
                  <article className="feature-card" key={feature.title}>
                    <span className="feature-card__icon">
                      <Icon aria-hidden="true" />
                    </span>
                    <h3>{feature.title}</h3>
                    <p>{feature.copy}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="section insights">
          <div className="container insights__inner">
            <div className="insights__visual">
              <div className="insights__halo" />
              <Phone
                src="/screens/insights.png"
                alt="Insights screen showing nutrition trends and tracking history"
              />
              <div className="mini-stat mini-stat--top">
                <Flame fill="currentColor" aria-hidden="true" />
                <span><strong>Keep the streak</strong><small>Consistency, made visible</small></span>
              </div>
              <div className="mini-stat mini-stat--bottom">
                <BarChart3 aria-hidden="true" />
                <span><strong>Spot patterns</strong><small>Understand your habits</small></span>
              </div>
            </div>
            <div className="insights__copy">
              <span className="kicker">Progress without pressure</span>
              <h2>Look back. Learn. Keep going.</h2>
              <p>
                Your history turns daily logs into useful context. Review
                streaks, calorie trends, macro patterns, and calendar history
                whenever you&apos;re ready to go deeper.
              </p>
              <div className="quiet-features">
                <div><BellRing aria-hidden="true" /><span><strong>Gentle reminders</strong><small>Daily and streak nudges you control.</small></span></div>
                <div><Cloud aria-hidden="true" /><span><strong>iCloud backup</strong><small>Keep your tracking data backed up.</small></span></div>
                <div><ShieldCheck aria-hidden="true" /><span><strong>No separate login</strong><small>Open the app and start tracking.</small></span></div>
              </div>
            </div>
          </div>
        </section>

        <section className="section premium">
          <div className="container premium__card">
            <div className="premium__icon"><Crown fill="currentColor" aria-hidden="true" /></div>
            <div className="premium__copy">
              <span className="kicker">Start free. Go further when you want.</span>
              <h2>Simple from day one.</h2>
              <p>
                Download for free and start tracking. Optional Premium adds
                barcode scanning, deeper insights, unlimited saved foods and
                recipes, more themes, and a custom tracking day.
              </p>
            </div>
            <AppStoreButton compact />
          </div>
        </section>

        <section className="section faq" id="faq">
          <div className="container faq__inner">
            <div className="section-heading">
              <span className="kicker">Good to know</span>
              <h2>Frequently asked questions.</h2>
              <p>Still wondering about something?</p>
              <a href="mailto:support@thesimplestcalorietracker.com">
                Ask us directly <ArrowRight size={17} aria-hidden="true" />
              </a>
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
          <div className="final-cta__orb final-cta__orb--one" />
          <div className="final-cta__orb final-cta__orb--two" />
          <div className="container final-cta__inner">
            <Image src="/app-icon.png" width={96} height={96} alt="" />
            <span className="kicker">Your simplest first step</span>
            <h2>Make tracking the easy part.</h2>
            <p>
              Download The Simplest Calorie Tracker and log your first meal in
              minutes.
            </p>
            <AppStoreButton />
            <small>Free to download on iPhone. Optional in-app purchases.</small>
          </div>
        </section>
      </main>

      <footer>
        <div className="container footer__inner">
          <a className="brand brand--footer" href="#top">
            <Image className="brand__icon" src="/app-icon.png" width={44} height={44} alt="" />
            <span><strong>The Simplest</strong><small>Calorie Tracker</small></span>
          </a>
          <div className="footer__links">
            <a href={APP_STORE_URL} target="_blank" rel="noopener noreferrer">App Store</a>
            <a href="/privacy-policy">Privacy</a>
            <a href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/" target="_blank" rel="noopener noreferrer">Terms</a>
            <a href="/support">Support</a>
          </div>
          <p>© {new Date().getFullYear()} The Simplest Calorie Tracker.</p>
        </div>
      </footer>

      <div className="mobile-download">
        <a href={APP_STORE_URL} target="_blank" rel="noopener noreferrer">
          <Apple fill="currentColor" aria-hidden="true" /> Download on the App Store
        </a>
      </div>
    </>
  );
}
