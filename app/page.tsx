export default function Page() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9] font-sans">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold uppercase tracking-widest">
          For Technical Recruiters &amp; Engineering Managers
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Scan GitHub Profiles for{" "}
          <span className="text-[#58a6ff]">Hiring Red Flags</span>
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          Instantly detect fake commits, copied code, suspicious contribution graphs, and plagiarized projects before you make a costly hire.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Get Access — $15/mo
        </a>
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm">
          {[
            ["Fake Commits", "Detects padded or empty commit histories"],
            ["Copied Code", "Flags plagiarized repos and stolen projects"],
            ["Ghost Graphs", "Spots artificially inflated contribution graphs"],
            ["Instant Reports", "PDF-ready summaries for hiring managers"]
          ].map(([title, desc]) => (
            <div key={title} className="bg-[#161b22] border border-[#30363d] rounded-lg p-4 text-left">
              <div className="text-[#58a6ff] font-semibold mb-1">{title}</div>
              <div className="text-[#8b949e] text-xs">{desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center shadow-lg">
          <div className="text-[#58a6ff] text-xs font-semibold uppercase tracking-widest mb-2">Pro Plan</div>
          <div className="text-5xl font-bold text-white mb-1">$15</div>
          <div className="text-[#8b949e] text-sm mb-6">per month · cancel anytime</div>
          <ul className="text-left space-y-3 mb-8 text-sm">
            {[
              "Unlimited GitHub profile scans",
              "Detailed red flag reports",
              "Commit pattern analysis",
              "Code similarity detection",
              "Contribution graph audit",
              "Email PDF reports"
            ].map((f) => (
              <li key={f} className="flex items-center gap-2">
                <span className="text-[#58a6ff] font-bold">✓</span>
                <span className="text-[#c9d1d9]">{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors text-base"
          >
            Start for $15/mo
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {[
            {
              q: "How does the red flag detection work?",
              a: "We use the GitHub API to analyze commit timestamps, code similarity across public repos, contribution graph patterns, and repository metadata to surface suspicious signals that warrant a closer look."
            },
            {
              q: "Will candidates know they are being scanned?",
              a: "No. We only access publicly available GitHub data, the same information anyone can view in a browser. No notifications are sent to the candidate."
            },
            {
              q: "What if I want to cancel?",
              a: "You can cancel your subscription at any time from your billing portal. You will retain access until the end of your current billing period."
            }
          ].map(({ q, a }) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-lg p-5">
              <div className="font-semibold text-white mb-2">{q}</div>
              <div className="text-[#8b949e] text-sm leading-relaxed">{a}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-[#484f58] text-xs pb-8">
        &copy; {new Date().getFullYear()} GitHub Red Flag Detector. All rights reserved.
      </footer>
    </main>
  );
}
