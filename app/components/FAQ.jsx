'use client'

import { useState } from 'react'

const faqs = [
  {
    q: 'Do I need experience to join?',
    a: 'No experience required at the Beginner tier. Module 01 starts with what OFM actually is, how the agency model works, and why AI is the unfair advantage that makes small teams competitive with large agencies. By Module 03 you have a contract template and an outreach system ready to use.',
  },
  {
    q: 'Are the income promises realistic?',
    a: 'They represent what members who follow the system consistently achieve. $10K in your first 90 days requires getting one or two creators signed and executing the PPV and chatting systems. $50K requires scaling to 5+ creators with a chatter and traffic system in place. $1M/year requires a real team, AI infrastructure, and 10–20 creators — it takes 12–24 months for most operators. The modules don\'t shortcut the work. They just remove every wrong turn.',
  },
  {
    q: 'What exactly is the AI chatting system?',
    a: 'It\'s a complete GPT-powered workflow that handles fan conversations, upsell sequences, re-engagement messages for lapsed subs, and PPV pitch scripts — all configured to sound human and match each creator\'s voice. Intermediate members get the advanced version with fan segmentation (high-value fans treated differently from casual ones), and Advanced members get a custom-built version configured for their specific creator roster by the Vault team.',
  },
  {
    q: 'Can I upgrade tiers? Does my content carry over?',
    a: 'Yes and yes. You can upgrade at any time and only pay the prorated difference. Every module, resource, and community access from your current tier carries over immediately to the new one. Beginner members who upgrade to Intermediate keep all seven original modules and unlock the next eight the moment the upgrade processes.',
  },
  {
    q: 'How do the 1-on-1 calls work?',
    a: 'Calls are 30 minutes, booked through the member portal. Intermediate members get two per month. Advanced members are unlimited. Sessions are not onboarding calls — they\'re working sessions. You come with a specific problem (a creator stalling, a chatter underperforming, a traffic channel not converting) and leave with a specific answer and next actions. The same team that built the program takes the calls.',
  },
  {
    q: "What's the refund policy?",
    a: 'Full refund within 7 days, no questions asked. After 7 days, you can cancel any time and keep access through the end of your billing period. We don\'t offer prorated refunds after the first week — the expectation is that you actually try the system before deciding. The 7-day window is enough time to go through the first three modules and run your first outreach.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i)

  return (
    <div className="faq-wrap" id="faq">
      <div className="faq-hdr">
        <div className="eyebrow">FAQ</div>
        <div className="sec-title" style={{ fontSize: 'clamp(28px, 3.5vw, 44px)', letterSpacing: '-1.5px' }}>
          Common questions
        </div>
      </div>
      <div className="faq-list">
        {faqs.map((faq, i) => (
          <div key={i} className={`faq-item${openIndex === i ? ' open' : ''}`}>
            <button className="faq-q" onClick={() => toggle(i)}>
              {faq.q}
              <span className="faq-plus">{openIndex === i ? '−' : '+'}</span>
            </button>
            <div className="faq-a">{faq.a}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
