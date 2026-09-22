"use client";

import { ArrowRight, Check } from "lucide-react";
import { useState } from "react";
import { APP_STORE_URL, pricingPlans } from "../_content/marketing";

type BillingPeriod = "monthly" | "yearly";

const freePlan = pricingPlans[0];
const premiumPlans = {
  monthly: pricingPlans[1],
  yearly: pricingPlans[2],
} as const;

export function PricingPlans() {
  const [billingPeriod, setBillingPeriod] = useState<BillingPeriod>("monthly");
  const premiumPlan = premiumPlans[billingPeriod];

  return (
    <div className="pricing-grid">
      <article className="pricing-card">
        <h3>{freePlan.name}</h3>
        <p className="pricing-card__price">{freePlan.price}</p>
        <p className="pricing-card__detail">{freePlan.detail}</p>
        <ul>
          {freePlan.features.map((feature) => (
            <li key={feature}><Check aria-hidden="true" />{feature}</li>
          ))}
        </ul>
        <a
          className="pricing-card__link"
          data-app-store-link="pricing-free"
          href={APP_STORE_URL}
          rel="noopener noreferrer"
          target="_blank"
        >
          Download on the App Store <ArrowRight aria-hidden="true" size={16} />
        </a>
      </article>

      <article className="pricing-card pricing-card--featured pricing-card--premium">
        {premiumPlan.badge && <span className="pricing-card__badge">{premiumPlan.badge}</span>}
        <h3>Premium</h3>
        <div className="pricing-billing-toggle" role="group" aria-label="Premium billing frequency">
          {(Object.keys(premiumPlans) as BillingPeriod[]).map((period) => {
            const plan = premiumPlans[period];
            const isSelected = period === billingPeriod;

            return (
              <button
                aria-pressed={isSelected}
                className={`pricing-billing-toggle__option${isSelected ? " is-selected" : ""}`}
                key={period}
                onClick={() => setBillingPeriod(period)}
                type="button"
              >
                <span>{period === "yearly" ? "Yearly" : "Monthly"}</span>
                <strong>{plan.price}{period === "yearly" ? "/yr" : "/mo"}</strong>
                {plan.badge && <small>{plan.badge}</small>}
              </button>
            );
          })}
        </div>
        <p className="pricing-card__price" aria-live="polite">{premiumPlan.price}</p>
        <p className="pricing-card__detail">{premiumPlan.detail}</p>
        <ul>
          {premiumPlan.features.map((feature) => (
            <li key={feature}><Check aria-hidden="true" />{feature}</li>
          ))}
        </ul>
        <a
          className="pricing-card__link"
          data-app-store-link={`pricing-premium-${billingPeriod}`}
          href={APP_STORE_URL}
          rel="noopener noreferrer"
          target="_blank"
        >
          Download on the App Store <ArrowRight aria-hidden="true" size={16} />
        </a>
      </article>
    </div>
  );
}
