export default function Showcase() {
  return (
    <div className="showcase">
      <div className="sc-wrap">
        <div className="dash">
          <div className="ds-side">
            <div className="ds-brand">VAULT</div>
            <div className="ds-sl">Main</div>
            <div className="ds-item on"><div className="ds-ico"></div>Dashboard</div>
            <div className="ds-item"><div className="ds-ico"></div>Creators<span className="ds-badge">12</span></div>
            <div className="ds-item"><div className="ds-ico"></div>AI Chatting</div>
            <div className="ds-item"><div className="ds-ico"></div>Campaigns</div>
            <div className="ds-item"><div className="ds-ico"></div>Analytics</div>
            <div className="ds-sl">Resources</div>
            <div className="ds-item"><div className="ds-ico"></div>AI Prompts</div>
            <div className="ds-item"><div className="ds-ico"></div>Playbooks</div>
            <div className="ds-item"><div className="ds-ico"></div>Community</div>
          </div>
          <div className="ds-main">
            <div className="ds-breadcrumb">Dashboard <span>›</span> <strong>Agency Overview</strong></div>
            <div className="ds-title">Agency Overview</div>
            <div className="ds-sync"><span className="sync-dot"></span> AI sync: just now · all creators active</div>
            <div className="ds-stats">
              <div className="dst">
                <div className="dst-l">Monthly Revenue</div>
                <div className="dst-v">$24,830</div>
                <div className="dst-c">↑ 34% this month</div>
              </div>
              <div className="dst">
                <div className="dst-l">Active Creators</div>
                <div className="dst-v">12</div>
                <div className="dst-c">↑ 4 onboarded</div>
              </div>
              <div className="dst">
                <div className="dst-l">AI Messages Sent</div>
                <div className="dst-v">3.2k</div>
                <div className="dst-c">↑ 89% vs last mo</div>
              </div>
            </div>
            <div className="ai-blk">
              <div className="ai-hdr"><div className="ai-dot"></div> AI Recommendations · Live</div>
              <div className="ai-r"><span className="ai-arr">→</span> Schedule PPV drop for @creator_3 — 140% above avg engagement today</div>
              <div className="ai-r"><span className="ai-arr">→</span> Mass message template #7 underperforming — switch to variant B</div>
              <div className="ai-r"><span className="ai-arr">→</span> Creator @creator_8 fan retention dropped 12% — review chat scripts</div>
            </div>
            <div className="ds-th"><div>Creator</div><div>Status</div><div>Revenue</div><div>Fans</div></div>
            <div className="ds-tr"><div className="tr-name">@creator_1</div><div><span className="chip chip-ai">AI Managed</span></div><div>$4,210</div><div>1,832</div></div>
            <div className="ds-tr"><div className="tr-name">@creator_2</div><div><span className="chip chip-act">Active</span></div><div>$3,890</div><div>1,440</div></div>
            <div className="ds-tr"><div className="tr-name">@creator_3</div><div><span className="chip chip-ai">AI Managed</span></div><div>$5,120</div><div>2,271</div></div>
          </div>
          <div className="ds-right">
            <div className="rp-t">AI Insights</div>
            <div className="ins"><div className="ins-tag">Revenue</div>PPV revenue up 41% when sent 8–10 PM. Schedule drops tonight.</div>
            <div className="ins"><div className="ins-tag">Retention</div>Fan retention 2.3× higher on AI chatting vs manual management.</div>
            <div className="ins"><div className="ins-tag">Growth</div>3 creators ready to promote — AI referral draft ready for review.</div>
          </div>
        </div>
      </div>
    </div>
  )
}
