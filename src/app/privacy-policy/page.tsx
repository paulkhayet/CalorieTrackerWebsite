import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowRight, Check, ShieldCheck } from "lucide-react";

const APP_STORE_URL =
  "https://apps.apple.com/us/app/the-simplest-calorie-tracker/id6761067469";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy policy for The Simplest Calorie Tracker iOS app, including our PostHog product analytics practices.",
  alternates: { canonical: "/privacy-policy" },
};

export default function PrivacyPolicyPage() {
  return (
    <main className="privacy-page">
      <header className="privacy-hero">
        <div className="container privacy-hero__inner">
          <div className="privacy-nav">
            <Link href="/" className="privacy-back">
              <ArrowLeft size={16} aria-hidden="true" /> Back to home
            </Link>
            <a href={APP_STORE_URL} target="_blank" rel="noopener noreferrer" className="privacy-download">
              Get the app <ArrowRight size={16} aria-hidden="true" />
            </a>
          </div>
          <div className="privacy-title-row">
            <Image src="/app-icon.png" width={68} height={68} alt="" className="privacy-icon" priority />
            <div>
              <span className="kicker">The Simplest Calorie Tracker</span>
              <h1>Privacy Policy</h1>
            </div>
          </div>
          <p className="privacy-subtitle">
            A clear explanation of what information the app handles, what stays on your device, and how we use limited product analytics.
          </p>
          <div className="privacy-meta">
            <span>Effective date: August 28, 2026</span>
            <span>Applies to: The Simplest Calorie Tracker for iPhone</span>
          </div>
        </div>
      </header>

      <div className="container privacy-layout">
        <aside className="privacy-aside" aria-label="Policy highlights">
          <div className="privacy-aside__card">
            <ShieldCheck size={22} aria-hidden="true" />
            <strong>Privacy by default</strong>
            <p>Your nutrition log is designed to stay on your device.</p>
          </div>
          <nav className="privacy-contents" aria-label="On this page">
            <a href="#summary">Summary</a>
            <a href="#information">Information we collect</a>
            <a href="#analytics">PostHog analytics</a>
            <a href="#choices">Your choices</a>
            <a href="#contact">Contact</a>
          </nav>
        </aside>

        <article className="privacy-card">
          <section id="summary" className="privacy-section">
            <span className="privacy-section__number">01</span>
            <div>
              <h2>Summary</h2>
              <p>The Simplest Calorie Tracker is built to help you log food without requiring a separate account. Your nutrition entries and settings are stored locally on your device. We do not sell your personal information.</p>
              <p>We use limited, anonymous or pseudonymous product analytics to understand which app features are useful and to improve reliability. The analytics are designed not to include the details of what you eat.</p>
            </div>
          </section>

          <section id="information" className="privacy-section">
            <span className="privacy-section__number">02</span>
            <div>
              <h2>Information we collect</h2>
              <h3>Information you enter</h3>
              <p>Foods, calories, macro goals, water entries, exercise, weight entries, recipes, reminders, and other tracking settings are used to provide the app’s features and are stored on your device.</p>
              <h3>Support messages</h3>
              <p>If you contact us, we receive the email address you use and the contents of your message so we can respond and resolve your request. Support messages are retained only as long as reasonably needed.</p>
              <h3>Apple services</h3>
              <p>If you enable iCloud backup or HealthKit features, Apple processes information under Apple’s terms and privacy policy. The app does not send HealthKit samples to our analytics provider.</p>
            </div>
          </section>

          <section id="analytics" className="privacy-section privacy-section--highlight">
            <span className="privacy-section__number">03</span>
            <div>
              <h2>PostHog product analytics</h2>
              <p>We use PostHog, a product analytics service, at <a href="https://us.i.posthog.com" target="_blank" rel="noopener noreferrer">us.i.posthog.com</a> to understand high-level app usage. PostHog may process a pseudonymous device or installation identifier, app version and build, platform, debug-build status, screen names, and broad event properties.</p>
              <p>Examples of events include opening the app, viewing a screen, logging food, completing a search, using barcode scanning, changing a setting, viewing a Premium screen, and completing or cancelling a purchase. Search telemetry uses coarse buckets such as query length and result-count ranges.</p>
              <p>We intentionally do <strong>not</strong> send food names, search terms, nutrition amounts, barcode values, HealthKit samples, or free-form text to PostHog. The app also disables automatic application lifecycle capture, automatic screen views, element-interaction capture, session replay, feature-flag preloading, swizzling, and rage-click tracking.</p>
              <p>PostHog processes analytics according to its <a href="https://posthog.com/privacy" target="_blank" rel="noopener noreferrer">privacy policy</a>. We use the information to measure feature usage, diagnose reliability issues, and improve the app—not to sell or advertise based on your food or health data.</p>
            </div>
          </section>

          <section className="privacy-section">
            <span className="privacy-section__number">04</span>
            <div>
              <h2>How we use information</h2>
              <ul className="privacy-list">
                <li><Check aria-hidden="true" /> Provide calorie, macro, water, history, and reminder features.</li>
                <li><Check aria-hidden="true" /> Keep the app reliable and understand broad feature usage.</li>
                <li><Check aria-hidden="true" /> Respond to support requests.</li>
                <li><Check aria-hidden="true" /> Process optional Premium purchases through Apple.</li>
              </ul>
            </div>
          </section>

          <section className="privacy-section">
            <span className="privacy-section__number">05</span>
            <div>
              <h2>Storage, sharing, and retention</h2>
              <p>We do not sell or rent your information. Your on-device tracking data is not shared with us by default. If you use iCloud, Apple manages that backup. Analytics and support information may be processed by the service providers described above only to provide their respective services.</p>
              <p>We keep support communications and analytics only for as long as reasonably necessary for support, security, reliability, and product-improvement purposes.</p>
            </div>
          </section>

          <section id="choices" className="privacy-section">
            <span className="privacy-section__number">06</span>
            <div>
              <h2>Your choices</h2>
              <ul className="privacy-list">
                <li><Check aria-hidden="true" /> Delete individual entries inside the app.</li>
                <li><Check aria-hidden="true" /> Remove local app data by deleting the app from your device.</li>
                <li><Check aria-hidden="true" /> Manage Apple permissions, iCloud, HealthKit, and notifications in iOS Settings.</li>
                <li><Check aria-hidden="true" /> Contact us with questions or a request about support information.</li>
              </ul>
            </div>
          </section>

          <section className="privacy-section">
            <span className="privacy-section__number">07</span>
            <div>
              <h2>Children’s privacy</h2>
              <p>The app is not directed to children under 13, and we do not knowingly collect personal information from children.</p>
            </div>
          </section>

          <section className="privacy-section" id="contact">
            <span className="privacy-section__number">08</span>
            <div>
              <h2>Changes and contact</h2>
              <p>We may update this policy as the app or its services change. When we do, we will update the effective date on this page.</p>
              <p>Questions about privacy? Email <a href="mailto:support@thesimplescalorietracker.com">support@thesimplescalorietracker.com</a>.</p>
            </div>
          </section>
        </article>
      </div>

      <footer className="privacy-footer">
        <div className="container privacy-footer__inner">
          <Link href="/">The Simplest Calorie Tracker</Link>
          <span>Last updated: August 28, 2026</span>
          <a href={APP_STORE_URL} target="_blank" rel="noopener noreferrer">Download on the App Store <ArrowRight size={15} aria-hidden="true" /></a>
        </div>
      </footer>
    </main>
  );
}
