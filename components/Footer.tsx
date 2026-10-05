import { Sparkles, ArrowUp } from "lucide-react";
import { profile, navLinks } from "@/data/content";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-ink-950">
      <div className="mx-auto max-w-7xl px-5 py-10 md:px-8">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <a href="#top" className="flex items-center gap-2.5">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-violet-500 to-cyan-400">
              <Sparkles size={18} className="text-white" />
            </span>
            <span className="font-display text-lg font-bold text-white">{profile.name}</span>
          </a>

          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-sm text-zinc-500 transition hover:text-white">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <a
            href="#top"
            aria-label="Back to top"
            className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-zinc-400 transition hover:border-violet-400/50 hover:text-white"
          >
            <ArrowUp size={18} />
          </a>
        </div>
        <p className="mt-8 text-center text-xs text-zinc-600">
          © {new Date().getFullYear()} {profile.name} · AI-Powered Content Creator & Digital Builder ·
          Built with AI, naturally.
        </p>
      </div>
    </footer>
  );
}
