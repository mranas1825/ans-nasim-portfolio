import { ArrowUpRight, Check } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { featuredProjects } from "@/data/content";

export default function FeaturedWork() {
  return (
    <section id="featured" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          kicker="Featured Work"
          title={<>Selected <span className="gradient-text">builds & formats</span></>}
          description="The strongest things I make — content engines, viral formats and digital projects. Each one shows a different side of the same skill: turning ideas into finished work with AI."
        />

        <div className="grid gap-5 md:gap-6 lg:grid-cols-2">
          {featuredProjects.map((p, i) => (
            <Reveal key={p.index} delay={(i % 2) * 0.08} className={i === 0 ? "lg:col-span-2" : ""}>
              <article
                className={`glass card-hover group relative h-full overflow-hidden rounded-3xl p-7 md:p-10 ${
                  i === 0 ? "lg:grid lg:grid-cols-2 lg:gap-10" : ""
                }`}
              >
                <div
                  className={`pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-gradient-to-br ${p.accent} opacity-[0.12] blur-[80px] transition-opacity duration-500 group-hover:opacity-[0.22]`}
                  aria-hidden
                />
                <div className="relative">
                  <div className="flex items-center justify-between">
                    <span className="font-display text-sm font-bold tracking-widest text-zinc-500">
                      {p.index}
                    </span>
                    <span
                      className={`rounded-full bg-gradient-to-r ${p.accent} bg-clip-text text-xs font-bold uppercase tracking-widest text-transparent`}
                    >
                      {p.category}
                    </span>
                  </div>
                  <h3 className="font-display mt-4 text-2xl font-bold text-white md:text-3xl">
                    {p.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-zinc-400 md:text-base">
                    {p.description}
                  </p>
                  <ul className="mt-5 space-y-2.5">
                    {p.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2.5 text-sm text-zinc-300">
                        <span className={`mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-gradient-to-br ${p.accent}`}>
                          <Check size={12} className="text-white" />
                        </span>
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={`relative ${i === 0 ? "flex flex-col justify-end" : "mt-6"}`}>
                  <div className="flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-xs font-medium text-zinc-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  {i === 0 && (
                    <a
                      href="#work"
                      className="mt-6 inline-flex w-fit items-center gap-2 text-sm font-semibold text-white transition hover:gap-3"
                    >
                      Explore the content portfolio <ArrowUpRight size={16} />
                    </a>
                  )}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
