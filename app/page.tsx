export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";
  return (
    <main className="max-w-3xl mx-auto px-6 py-20">
      {/* Hero */}
      <section className="text-center mb-20">
        <div className="inline-block bg-[#58a6ff22] text-[#58a6ff] text-sm font-medium px-3 py-1 rounded-full mb-6">
          Discord Voice Analytics
        </div>
        <h1 className="text-4xl font-bold text-white mb-4 leading-tight">
          Track Who Talks Most in<br />Your Discord Server
        </h1>
        <p className="text-[#8b949e] text-lg mb-8 max-w-xl mx-auto">
          VoiceLog connects to your Discord server and automatically logs voice channel activity — so you always know your most engaged members.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold px-8 py-3 rounded-lg transition-colors"
        >
          Start Tracking — $8/mo
        </a>
        <p className="text-[#8b949e] text-sm mt-3">Cancel anytime. No credit card required to try.</p>
      </section>

      {/* Features strip */}
      <section className="grid grid-cols-3 gap-6 mb-20 text-center">
        {[
          { icon: "🎙️", title: "Real-Time Logging", desc: "Tracks every voice session as it happens" },
          { icon: "📊", title: "Engagement Reports", desc: "Weekly summaries per user and channel" },
          { icon: "🏆", title: "Leaderboards", desc: "Rank members by total voice time" }
        ].map((f) => (
          <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-3xl mb-3">{f.icon}</div>
            <div className="font-semibold text-white mb-1">{f.title}</div>
            <div className="text-[#8b949e] text-sm">{f.desc}</div>
          </div>
        ))}
      </section>

      {/* Pricing */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border-2 border-[#58a6ff] rounded-2xl p-8 max-w-sm mx-auto text-center">
          <div className="text-[#58a6ff] font-semibold text-sm uppercase tracking-wider mb-2">Pro Plan</div>
          <div className="text-5xl font-bold text-white mb-1">$8</div>
          <div className="text-[#8b949e] mb-6">per month</div>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Unlimited voice channel tracking",
              "Up to 5 Discord servers",
              "Weekly engagement reports",
              "Member leaderboards",
              "CSV data export",
              "Priority support"
            ].map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm">
                <span className="text-[#58a6ff]">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold py-3 rounded-lg transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            {
              q: "How does VoiceLog connect to my Discord server?",
              a: "After subscribing, you invite our Discord bot to your server with read-only voice state permissions. No admin access required."
            },
            {
              q: "Is my server's data private?",
              a: "Yes. We only store anonymized voice duration data — no messages, no usernames beyond your server. Data is encrypted at rest."
            },
            {
              q: "Can I cancel my subscription anytime?",
              a: "Absolutely. Cancel from your billing portal at any time. Your data remains accessible until the end of your billing period."
            }
          ].map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <div className="font-semibold text-white mb-2">{item.q}</div>
              <div className="text-[#8b949e] text-sm leading-relaxed">{item.a}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center text-[#8b949e] text-sm border-t border-[#30363d] pt-8">
        <p>© {new Date().getFullYear()} VoiceLog. Built for Discord community managers.</p>
      </footer>
    </main>
  );
}
