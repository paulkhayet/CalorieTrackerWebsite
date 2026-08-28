import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  CircleHelp,
  Mail,
  Settings2,
  ShieldCheck,
  Smartphone,
} from "lucide-react";

const SUPPORT_EMAIL = "support@thesimplestcalorietracker.com";
const SUPPORT_MAILTO = `mailto:${SUPPORT_EMAIL}`;

export const metadata: Metadata = {
  title: "Support",
  description:
    "Get help with The Simplest Calorie Tracker for iPhone, including meal logging, goals, iCloud backup, and Premium.",
  alternates: { canonical: "/support" },
};

const helpCards = [
  {
    icon: Mail,
    title: "Contact support",
    copy: "Send us a note and we’ll get back to you within two business days.",
    action: "Email support",
    href: SUPPORT_MAILTO,
  },
  {
    icon: Settings2,
    title: "Before you email",
    copy: "A few details help us solve an issue much faster.",
    items: [
      "Your iPhone model and iOS version",
      "Your app version, found in Settings",
      "What happened and steps to reproduce it",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Your data stays yours",
    copy: "Your tracking data is stored on your device. If you enable iCloud Backup, Apple manages a protected copy in your private iCloud account.",
    action: "Read the privacy policy",
    href: "/privacy-policy",
  },
];

const quickAnswers = [
  {
    question: "Can I use the app offline?",
    answer:
      "Yes. Your food entries and goals stay available on your device. Some features, such as food search, barcode lookup, and purchases, need an internet connection.",
  },
  {
    question: "How do I restore my data?",
    answer:
      "If you use iCloud Backup, data may restore when you reinstall the app or move to a new iPhone using the same Apple Account. Apple manages iCloud backup and restore.",
  },
  {
    question: "How do I manage Premium?",
    answer:
      "Subscriptions and purchases are managed through Apple. On your iPhone, open Settings, tap your name, then Subscriptions to review or manage them.",
  },
];

export default function SupportPage() {
  return (
    <main className="support-page">
      <header className="support-hero">
        <div className="container support-hero__inner">
          <div className="support-nav">
            <Link href="/" className="support-back">
              <ArrowLeft size={16} aria-hidden="true" /> Back to home
            </Link>
            <Link href="/privacy-policy" className="support-privacy-link">
              Privacy policy <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>
          <div className="support-hero__content">
            <div className="support-mark">
              <Image src="/app-icon.png" width={64} height={64} alt="" priority />
              <span><CircleHelp aria-hidden="true" /> Help center</span>
            </div>
            <h1>We&apos;re here to help.</h1>
            <p>
              Need a hand with your goals, food logging, or your app settings? Send us a message and we&apos;ll help you get back to the simple part.
            </p>
            <a className="support-email-button" href={SUPPORT_MAILTO}>
              <Mail aria-hidden="true" /> {SUPPORT_EMAIL}
            </a>
          </div>
        </div>
      </header>

      <section className="support-main">
        <div className="container">
          <div className="support-grid">
            {helpCards.map((card) => {
              const Icon = card.icon;
              const isInternalLink = card.href?.startsWith("/");

              return (
                <article className="support-card" key={card.title}>
                  <span className="support-card__icon"><Icon aria-hidden="true" /></span>
                  <h2>{card.title}</h2>
                  <p>{card.copy}</p>
                  {card.items && (
                    <ul>
                      {card.items.map((item) => <li key={item}><Check aria-hidden="true" />{item}</li>)}
                    </ul>
                  )}
                  {card.href && card.action && (
                    isInternalLink ? (
                      <Link href={card.href} className="support-card__link">{card.action} <ArrowRight size={16} aria-hidden="true" /></Link>
                    ) : (
                      <a href={card.href} className="support-card__link">{card.action} <ArrowRight size={16} aria-hidden="true" /></a>
                    )
                  )}
                </article>
              );
            })}
          </div>

          <div className="support-answers">
            <div className="support-answers__heading">
              <span className="kicker">Quick answers</span>
              <h2>Good to know before you reach out.</h2>
              <p>These are the questions we hear most often from new trackers.</p>
            </div>
            <div className="support-answers__list">
              {quickAnswers.map((answer) => (
                <details key={answer.question}>
                  <summary>{answer.question}<span aria-hidden="true">+</span></summary>
                  <p>{answer.answer}</p>
                </details>
              ))}
            </div>
          </div>

          <section className="support-note">
            <span className="support-note__icon"><Smartphone aria-hidden="true" /></span>
            <div>
              <h2>Want the fastest answer?</h2>
              <p>Include a screenshot when it helps, but please don&apos;t include sensitive personal information in your email.</p>
            </div>
            <a href={SUPPORT_MAILTO}>Contact support <ArrowRight size={17} aria-hidden="true" /></a>
          </section>
        </div>
      </section>

      <footer className="support-footer">
        <div className="container support-footer__inner">
          <Link href="/">The Simplest Calorie Tracker</Link>
          <Link href="/privacy-policy">Privacy Policy</Link>
          <a href={SUPPORT_MAILTO}>{SUPPORT_EMAIL}</a>
        </div>
      </footer>
    </main>
  );
}
