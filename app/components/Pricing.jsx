'use client'

import { useState } from 'react'

const plans = [
  {
    promise: 'Promise — Your First $10K Month',
    tier: 'Beginner',
    monthly: '29',
    annual: '23',
    cents: '.99',
    tagline: 'For operators who haven\'t made their first dollar yet. Modules 01–07 get you signed, set up, and generating income in your first 30 days.',
    modLabel: 'Modules included',
    modules: [
      { n: '01', text: 'OFM fundamentals & business model' },
      { n: '02', text: 'Creator acquisition & outreach system' },
      { n: '03', text: 'Contracts, revenue splits & onboarding' },
      { n: '04', text: 'AI chatting basics & first automation' },
      { n: '05', text: 'PPV strategy & pricing framework' },
      { n: '06', text: 'Fan retention fundamentals' },
      { n: '07', text: 'First $10K blueprint (30-day plan)' },
    ],
    extras: '500+ DM templates · AI prompt library · Contract template · Weekly group calls · Community access',
    ctaCls: 'outline-btn',
    ctaText: 'Start for $29.99 / mo',
    pop: false,
  },
  {
    promise: 'Promise — Your First $50K Month',
    tier: 'Intermediate',
    monthly: '59',
    annual: '47',
    cents: '.99',
    tagline: 'For operators with income ready to build leverage. Modules 08–15 install the AI systems, the team layer, and the traffic engine that gets you to $50K/mo.',
    modLabel: 'All of Beginner, plus',
    modules: [
      { n: '08', text: 'Scaling to 5+ creators systematically' },
      { n: '09', text: 'Advanced AI chatting & GPT workflows' },
      { n: '10', text: 'Mass message mastery & A/B testing' },
      { n: '11', text: 'Traffic systems — Reddit, TikTok, Twitter' },
      { n: '12', text: 'Hiring & training your first chatter' },
      { n: '13', text: 'Revenue stack optimization' },
      { n: '14', text: 'Agency SOP library (20+ SOPs)' },
      { n: '15', text: '$50K agency blueprint (90-day roadmap)' },
    ],
    extras: 'AI chatting workflow · Chatter hiring kit · 3-platform traffic playbooks · 2× monthly 1-on-1 calls · Priority Slack',
    ctaCls: 'accent-btn',
    ctaText: 'Start for $59.99 / mo',
    pop: true,
  },
  {
    promise: 'Promise — The Path to $1M+ / Year',
    tier: 'Advanced',
    monthly: '99',
    annual: '79',
    cents: '.99',
    tagline: 'For operators building a real business. Modules 16–24 install the team, the AI infrastructure, and the financial systems that run a seven-figure OFM operation.',
    modLabel: 'All of Intermediate, plus',
    modules: [
      { n: '16', text: '$100K agency architecture & automation' },
      { n: '17', text: 'Full AI management system' },
      { n: '18', text: 'Building your leadership team' },
      { n: '19', text: 'Creator acquisition at scale (paid + organic)' },
      { n: '20', text: 'The $1M revenue roadmap' },
      { n: '21', text: 'Offshore team building & management' },
      { n: '22', text: 'Agency financials, P&L & margins' },
      { n: '23', text: 'Agency valuation & exit strategy' },
      { n: '24', text: 'Done-for-you custom AI builds' },
    ],
    extras: 'Custom AI builds (done for you) · $1M roadmap · Private mastermind · Unlimited 1-on-1s · Direct Telegram access',
    ctaCls: 'dark-btn',
    ctaText: 'Start for $99.99 / mo',
    pop: false,
  },
]

export default function Pricing() {
  const [billing, setBilling] = useState('monthly')

  return (
    <div className="pricing-wrap" id="pricing">
      <div className="pricing-in">
        <div className="pricing-hdr">
          <div className="eyebrow">Pricing</div>
          <div className="sec-title">Pick your starting point.</div>
          <div className="sec-sub">
            Upgrade when you&apos;re ready — all content, progress, and community access carries over instantly.
          </div>
          <div className="billing-row">
            <div className="billing-tog">
              <button
                className={`tog${billing === 'monthly' ? ' on' : ''}`}
                onClick={() => setBilling('monthly')}
              >
                Monthly
              </button>
              <button
                className={`tog${billing === 'annual' ? ' on' : ''}`}
                onClick={() => setBilling('annual')}
              >
                Annual
              </button>
            </div>
            <div className="save-pill">Save 20%</div>
          </div>
        </div>

        <div className="plans">
          {plans.map((plan) => (
            <div key={plan.tier} className={`plan${plan.pop ? ' pop' : ''}`}>
              {plan.pop && <div className="pop-flag">Most Popular</div>}
              <div className="plan-promise">{plan.promise}</div>
              <div className="plan-tier">{plan.tier}</div>
              <div className="plan-price">
                <span className="plan-cur">$</span>
                <span className="plan-amt">
                  {billing === 'monthly' ? plan.monthly : plan.annual}
                </span>
              </div>
              <div className="plan-per">{plan.cents} / month</div>
              <div className="plan-tagline">{plan.tagline}</div>

              <div className="plan-mod-label">{plan.modLabel}</div>
              <div className="plan-mods">
                {plan.modules.map((mod) => (
                  <div key={mod.n} className="pm">
                    <span className="pm-n">{mod.n}</span>
                    {mod.text}
                  </div>
                ))}
              </div>

              <div className="plan-extras">
                <strong>Includes:</strong> {plan.extras}
              </div>

              <button className={`pcta ${plan.ctaCls}`}>{plan.ctaText}</button>
            </div>
          ))}
        </div>

        <div className="pricing-note">Cancel anytime · Stripe checkout · 7-day full refund</div>
      </div>
    </div>
  )
}
