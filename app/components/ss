const cards = [
  {
    initials: 'JR',
    income: '$8,400 / mo',
    result: '↑ In 90 days from $0 · Beginner tier',
    text: '"Went from zero to $8,400 MRR in my first 90 days. The AI chatting system alone is worth 10× the monthly cost. I haven\'t typed a single fan message in six weeks."',
    name: 'Jordan R.',
    role: 'OFM Operator · Dallas, TX',
  },
  {
    initials: 'MK',
    income: '$41,200 / mo',
    result: '↑ 5 creators · $0 to $41K in 7 months · Intermediate',
    text: '"The traffic system in Module 11 alone added two creators to my roster through Reddit. The SOP library means my chatter runs everything. I work three hours a day on this."',
    name: 'Marcus K.',
    role: 'OFM Agency Owner · Miami, FL',
  },
  {
    initials: 'TL',
    income: '$118,000 / mo',
    result: '↑ 14 creators · 18 months in · Advanced tier',
    text: '"The done-for-you AI build changed everything. I went from managing chatters manually to running 14 creators with two ops people and a team of AI-supervised chatters offshore."',
    name: 'Taylor L.',
    role: 'OFM Agency Owner · Los Angeles, CA',
  },
]

export default function Testimonials() {
  return (
    <section className="section" id="results">
      <div className="eyebrow">Member results</div>
      <div className="sec-title">
        What operators are<br />actually making
      </div>
      <div className="sec-sub">
        Numbers pulled from member check-ins inside the community. Not cherry-picked — these are the median outcomes, not the outliers.
      </div>

      <div className="testi-grid">
        {cards.map((card) => (
          <div key={card.initials} className="tcard">
            <div className="tcard-stars">★★★★★</div>
            <div className="tcard-income">{card.income}</div>
            <div className="tcard-result">{card.result}</div>
            <div className="tcard-text">{card.text}</div>
            <div className="tcard-author">
              <div className="tav">{card.initials}</div>
              <div>
                <div className="tav-name">{card.name}</div>
                <div className="tav-role">{card.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
