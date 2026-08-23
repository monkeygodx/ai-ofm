const tiers = [
  {
    badge: 'Beginner · $29.99/mo',
    badgeCls: 'badge-beg',
    promise: 'Promise: Your first $10K month',
    who: 'For anyone starting from zero — no creators, no experience, no income yet. You will have all three by the end of Module 3.',
    sectionLabel: '7 Core Modules',
    modules: [
      { n: '01', text: 'OFM fundamentals — how agencies work, revenue splits, niche selection' },
      { n: '02', text: 'Creator acquisition — outreach strategy, 500+ DM templates, pitch scripts that convert' },
      { n: '03', text: 'Contracts & onboarding — revenue protection, legal basics, creator onboarding SOP' },
      { n: '04', text: 'AI chatting basics — your first automated fan conversation workflow' },
      { n: '05', text: 'PPV strategy 101 — what to sell, optimal pricing, when to drop for max revenue' },
      { n: '06', text: 'Fan retention fundamentals — reducing churn, building loyalty, subscription psychology' },
      { n: '07', text: 'Your first $10K blueprint — 30-day action plan, day by day' },
    ],
    bonuses: [
      '500+ tested DM outreach templates (sorted by creator niche)',
      '30-day action plan with daily tasks and weekly revenue targets',
      'Starter AI prompt library (50 fan conversation prompts, ready to use)',
      'Creator contract template (lawyer-reviewed, plug-and-play)',
      'Private community access + weekly group coaching call',
    ],
  },
  {
    badge: 'Intermediate · $59.99/mo',
    badgeCls: 'badge-int',
    promise: 'Promise: Your first $50K month',
    who: 'For operators with their first creator and first income. This is where the real leverage gets built — systems, AI, and a team that runs without you.',
    sectionLabel: 'Everything in Beginner, plus 8 new modules',
    modules: [
      { n: '08', text: 'Scaling to 5 creators — the creator pipeline, parallel onboarding, workload management' },
      { n: '09', text: 'Advanced AI chatting — custom GPT workflows, fan segmentation, automated upsell sequences' },
      { n: '10', text: 'Mass message mastery — copy frameworks, A/B testing, optimal send windows, CTR optimization' },
      { n: '11', text: 'Traffic systems — Reddit growth playbook, TikTok organic strategy, Twitter/X promo system' },
      { n: '12', text: 'Hiring your first chatter — job post template, 7-day training framework, KPI system' },
      { n: '13', text: 'Revenue stack optimization — layering PPV, subs, tips, custom content, and bundles' },
      { n: '14', text: 'Agency SOP library — 20+ SOPs covering every function in your operation' },
      { n: '15', text: '$50K agency blueprint — 90-day scaling roadmap with weekly revenue milestones' },
    ],
    bonuses: [
      'Full AI chatting workflow (copy-paste into any creator setup, tested at scale)',
      'Chatter hiring kit — job post, interview questions, training curriculum',
      'Traffic playbooks for Reddit, TikTok, and Twitter/X (updated quarterly)',
      '90-day $50K roadmap with weekly income targets',
      '2× monthly 1-on-1 strategy calls + priority Slack access',
    ],
  },
  {
    badge: 'Advanced · $99.99/mo',
    badgeCls: 'badge-adv',
    promise: 'Promise: The path to $1M+/year',
    who: 'For operators running multiple creators and ready to build the architecture for a seven-figure agency — team, AI systems, and exit optionality.',
    sectionLabel: 'Everything in Intermediate, plus 9 advanced modules',
    modules: [
      { n: '16', text: '$100K agency architecture — team structure, automation stack, creator portfolio management' },
      { n: '17', text: 'Full AI management system — replacing manual chatters with AI, quality-control automation' },
      { n: '18', text: 'Building your leadership team — ops manager hire, creator manager role, VA network setup' },
      { n: '19', text: 'Creator acquisition at scale — paid traffic for creators, referral networks, agency-to-agency deals' },
      { n: '20', text: 'The $1M revenue roadmap — 10–20 creator portfolio structure, delegation framework' },
      { n: '21', text: 'Offshore team building — hiring overseas, timezone management, quality control systems' },
      { n: '22', text: 'Agency financials — P&L structure, owner compensation, reinvestment strategy, margins' },
      { n: '23', text: 'Agency valuation & exit — how agencies are valued, what buyers look for, exit playbook' },
      { n: '24', text: 'Done-for-you AI builds — we build your custom automations inside your existing setup' },
    ],
    bonuses: [
      'Custom AI automation built for your agency by the Vault team (done for you)',
      '$1M revenue roadmap — month-by-month milestones and KPI targets',
      'Private mastermind access — top-earning operators only, vetted entry',
      'Unlimited 1-on-1 coaching + direct Telegram line to the team',
      'Early access to all new tools, playbooks, and platform updates',
    ],
  },
]

export default function Curriculum() {
  return (
    <div className="curriculum" id="curriculum">
      <div className="cur-in">
        <div className="eyebrow">What&apos;s inside</div>
        <div className="sec-title" style={{ maxWidth: '540px' }}>
          Real modules. Real tactics.<br />Nothing held back.
        </div>
        <div className="sec-sub">
          Each tier unlocks the next layer of the system — Beginner content stays fully accessible when you upgrade.
        </div>

        <div className="cur-tiers">
          {tiers.map((tier) => (
            <div key={tier.badge} className="cur-card">
              <div className="cur-card-head">
                <div className={`cur-tier-badge ${tier.badgeCls}`}>{tier.badge}</div>
                <div className="cur-promise">{tier.promise}</div>
                <div className="cur-who">{tier.who}</div>
              </div>
              <div className="cur-card-body">
                <div className="cur-section-title">{tier.sectionLabel}</div>
                <div className="mod-list">
                  {tier.modules.map((mod) => (
                    <div key={mod.n} className="mod-item">
                      <span className="mod-num">{mod.n}</span>
                      {mod.text}
                    </div>
                  ))}
                </div>
                <div className="cur-section-title">Bonuses</div>
                {tier.bonuses.map((bonus, i) => (
                  <div key={i} className="bonus-item">
                    <span className="bonus-icon">★</span>
                    {bonus}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
