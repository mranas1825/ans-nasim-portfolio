import { Briefcase, CalendarDays, Check } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { experience } from "@/data/content";

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 md:py-32">
      <div
        className="absolute left-0 top-1/3 h-[380px] w-[380px] rounded-full bg-violet-600/10 blur-[130px]"
        aria-hidden
      />
      <div className="relative mx-auto max-w-5xl px-5 md:px-8">
        <SectionHeading
          kicker="Experience"
          title={<>Where I&apos;ve <span className="gradient-text">put in the work</span></>}
        />

        <Reveal>
          <article className="glass relative overflow-hidden rounded-3xl p-7 md:p-10">
            <div
              className="pointer-events-none absolute -left-24 -top-24 h-64 w-64 rounded-full bg-violet-500/15 blur-[90px]"
              aria-hidden
            />
            <div className="relative">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div className="flex items-start gap-4">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-violet-500 to-cyan-400 p-3 shadow-lg shadow-violet-500/30">
                    <Briefcase size={24} className="text-white" />
                  </span>
                  <div>
                    <h3 className="font-display text-xl font-bold text-white md:text-2xl">
                      {experience.role}
                    </h3>
                    <p className="mt-1 text-sm font-medium text-violet-300 md:text-base">
                      {experience.org}
                    </p>
                  </div>
                </div>
                <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-zinc-300">
                  <CalendarDays size={15} />
                  {experience.dates}
                </span>
              </div>

              <ul className="mt-8 grid gap-3.5 md:grid-cols-2">
                {experience.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-3 text-sm leading-relaxed text-zinc-300 md:text-[15px]">
                    <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-emerald-400/15">
                      <Check size={12} className="text-emerald-300" />
                    </span>
                    {b}
                  </li>
                ))}
              </ul>

              <div className="mt-8 border-t border-white/5 pt-6">
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
                  Tools & technologies
                </p>
                <div className="flex flex-wrap gap-2">
                  {experience.tools.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1.5 text-xs font-medium text-zinc-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </article>
        </Reveal>
      </div>
    </section>
  );
}
