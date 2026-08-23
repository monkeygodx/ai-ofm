const tiers = [
  {
    step: '01 — Beginner',
    income: '$10,000',
    period: '/mo',
    label: 'Your first real income milestone',
    milestones: [
      'Sign your first creator within 30 days using tested outreach scripts',
      'Set up your first AI chatting workflow — fans engaged without manual typing',
      'Run your first PPV drop and understand the revenue mechanics',
      'Reach $5K–$10K MRR from one to two creators',
    ],
    cls: '',
  },
  {
    step: '02 — Intermediate',
    income: '$50,000',
    period: '/mo',
    label: 'Build leverage and scale',
    milestones: [
      'Scale from 2 to 5+ creators using a repeatable onboarding system',
      'Hire and train your first chatter with AI oversight replacing manual QC',
      'Drive organic traffic from Reddit, TikTok, and Twitter/X to creator pages',
      'Build SOPs that mean the agency runs even when you\'re not working',
    ],
    cls: 'j2',
  },
  {
    step: '03 — Advanced',
    income: '$1,000,000',
    period: '/yr',
    label: 'The full agency machine',
    milestones: [
      'Operate a 10–20+ creator portfolio with a lean team and AI infrastructure',
      'Build an offshore team that manages operations across time zones',
      'Run paid creator acquisition with CPL under $200 and clear ROI',
      'Know your agency\'s valuation — and build toward a real exit if you want one',
    ],
    cls: 'j3',
  },
]

export default function IncomeJourney() {
  return (
    <section className="journey">
      <div className="journey-hdr">
        <div className="eyebrow">The roadmap</div>
        <div className="sec-title">Three tiers.<br />One clear destination.</div>
        <div className="sec-sub">Every tier has a defined income milestone and the exact system to hit it.</div>
      </div>
      <div className="journey-grid">
        {tiers.map((tier) => (
          <div key={tier.step} className={`jcard ${tier.cls}`}>
            <div className="j-step">{tier.step}</div>
            <div className="j-income">{tier.income}<span className="green">{tier.period}</span></div>
            <div className="j-label">{tier.label}</div>
            <div className="j-milestones">
              {tier.milestones.map((ms, i) => (
                <div key={i} className="j-ms">
                  <div className="j-bullet"></div>
                  {ms}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
