"use client";

export default function TerminalSnippet() {
  return (
    <div className="glass-card !rounded-2xl overflow-hidden shadow-lg">
      {/* Terminal header */}
      <div className="flex items-center gap-2 px-4 py-3 bg-navy-800/20">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
        </div>
        <span className="text-[11px] font-mono text-text-muted ml-2">redoy@kali:~</span>
      </div>
      {/* Terminal body */}
      <div className="p-5 font-mono text-xs sm:text-sm leading-relaxed">
        <div className="flex gap-2">
          <span className="text-emerald-400">$</span>
          <span className="text-text-secondary">whoami</span>
        </div>
        <div className="text-electric-400 mb-3">redoy — Penetration Tester</div>
        <div className="flex gap-2">
          <span className="text-emerald-400">$</span>
          <span className="text-text-secondary">cat /etc/skills.conf</span>
        </div>
        <div className="text-text-muted mb-3 space-y-0.5">
          <div><span className="text-cyan-accent">LANGS</span>=python,c,javascript,sql</div>
          <div><span className="text-cyan-accent">OS</span>=kali-linux,linux</div>
          <div><span className="text-cyan-accent">TOOLS</span>=burpsuite,metasploit,aircrack-ng</div>
          <div><span className="text-cyan-accent">FOCUS</span>=webappsec,pentesting,osint</div>
        </div>
        <div className="flex gap-2">
          <span className="text-emerald-400">$</span>
          <span className="text-text-secondary">echo $STATUS</span>
        </div>
        <div className="text-amber-400">Available for authorized security engagements<span className="animate-pulse">_</span></div>
      </div>
    </div>
  );
}
