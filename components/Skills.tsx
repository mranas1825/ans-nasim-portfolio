"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Bot, CheckCircle2, Code2, Megaphone, Puzzle, Terminal } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { skillGroups, toolStack } from "@/data/content";

const icons: Record<string, typeof Bot> = {
  ai: Bot,
  prompt: Terminal,
  vibe: Code2,
  problem: Puzzle,
  content: Megaphone,
};

export default function Skills() {
  const [active, setActive] = useState(skillGroups[0].id);
  const group = skillGroups.find((g) => g.id === active)!;
  const Icon = icons[group.id];

  return (
    <section id="skills" className="relative py-24 md:py-32">
      <div
        className="absolute right-0 top-1/4 h-[420px] w-[420px] rounded-full bg-cyan-500/10 blur-[130px]"
        aria-hidden
      />
      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          kicker="AI & Digital Skills"
          title={<>A modern <span className="gradient-text">creator&apos;s toolkit</span></>}
          description="Five skill pillars — every one of them practiced daily across real channels, pages and projects. Select a pillar to explore it."
        />

        <Reveal>
          <div className="mb-8 flex flex-wrap justify-center gap-2.5" role="tablist" aria-label="Skill groups">
            {skillGroups.map((g) => {
              const GIcon = icons[g.id];
              const isActive = g.id === active;
              return (
                <button
                  key={g.id}
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActive(g.id)}
                  className={`flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition-all duration-300 ${
                    isActive
                      ? "bg-gradient-to-r from-violet-500 to-cyan-400 text-white shadow-lg shadow-violet-500/30"
                      : "glass text-zinc-300 hover:border-violet-400/40 hover:text-white"
                  }`}
                >
                  <GIcon size={16} />
                  {g.title}
                </button>
              );
            })}
          </div>
        </Reveal>

        <AnimatePresence mode="wait">
          <motion.div
            key={group.id}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -14 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="glass mx-auto max-w-5xl rounded-3xl p-7 md:p-10">
              <div className="flex items-center gap-4">
                <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-violet-500 to-cyan-400 shadow-lg shadow-violet-500/30">
                  <Icon size={26} className="text-white" />
                </span>
                <div>
                  <h3 className="font-display text-xl font-bold text-white md:text-2xl">{group.title}</h3>
                  <p className="text-sm text-zinc-400">{group.tagline}</p>
                </div>
              </div>
              <ul className="mt-7 grid gap-4 sm:grid-cols-2">
                {group.points.map((p) => (
                  <li
                    key={p.title}
                    className="rounded-2xl border border-white/5 bg-white/[0.03] p-5 transition hover:border-violet-400/30"
                  >
                    <p className="flex items-center gap-2 font-semibold text-zinc-100">
                      <CheckCircle2 size={16} className="shrink-0 text-cyan-300" />
                      {p.title}
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-zinc-400">{p.detail}</p>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </AnimatePresence>

        <Reveal delay={0.1} className="mt-10">
          <p className="mb-4 text-center text-xs font-semibold uppercase tracking-[0.22em] text-zinc-500">
            Daily tools
          </p>
          <div className="flex flex-wrap justify-center gap-2.5">
            {toolStack.map((t) => (
              <span
                key={t}
                className="card-hover cursor-default rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-medium text-zinc-300"
              >
                {t}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
