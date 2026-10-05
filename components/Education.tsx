import { Award, GraduationCap, Trophy } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { education, achievements } from "@/data/content";

export default function Education() {
  return (
    <section id="education" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          kicker="Education & Achievements"
          title={<>The foundation <span className="gradient-text">behind the work</span></>}
        />

        <div className="grid gap-5 md:gap-6 lg:grid-cols-[1.5fr_1fr]">
          <div className="space-y-4">
            {education.map((e, i) => (
              <Reveal key={e.degree} delay={i * 0.07}>
                <article className="glass card-hover flex gap-5 rounded-3xl p-6 md:p-7">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-violet-500/25 to-cyan-400/25 text-violet-200">
                    <GraduationCap size={22} />
                  </span>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <h3 className="font-display text-lg font-bold text-white">{e.degree}</h3>
                      <span className="text-xs font-semibold text-zinc-500">{e.dates}</span>
                    </div>
                    <p className="mt-1 text-sm text-zinc-300">{e.school}</p>
                    <p className="mt-0.5 text-sm text-zinc-500">{e.place}</p>
                    <p className="mt-2 inline-block rounded-full bg-violet-500/10 px-3 py-1 text-xs font-medium text-violet-200 border border-violet-400/20">
                      {e.note}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.12}>
            <aside className="glass h-full rounded-3xl p-6 md:p-7">
              <div className="flex items-center gap-3">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-amber-400/25 to-orange-500/25 text-amber-200">
                  <Trophy size={22} />
                </span>
                <h3 className="font-display text-lg font-bold text-white">Achievements</h3>
              </div>
              <ul className="mt-6 space-y-5">
                {achievements.map((a) => (
                  <li key={a} className="flex items-start gap-3 text-sm leading-relaxed text-zinc-300">
                    <Award size={17} className="mt-0.5 shrink-0 text-amber-300" />
                    {a}
                  </li>
                ))}
              </ul>
              <p className="mt-6 rounded-2xl border border-white/5 bg-white/[0.03] p-4 text-xs leading-relaxed text-zinc-500">
                No inflated numbers here — every claim on this page comes straight from the CV.
              </p>
            </aside>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
