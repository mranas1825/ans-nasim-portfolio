import { BrainCircuit, Clapperboard, Code2, Lightbulb, Puzzle } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const pillars = [
  { icon: BrainCircuit, label: "AI", detail: "Generative tools & prompt systems" },
  { icon: Clapperboard, label: "Content", detail: "Faceless short-form that travels" },
  { icon: Code2, label: "Technology", detail: "Vibe coding & web building" },
  { icon: Lightbulb, label: "Creativity", detail: "Storytelling & visual ideas" },
  { icon: Puzzle, label: "Problem Solving", detail: "Research → experiment → ship" },
];

const facts = [
  { label: "Based in", value: "Lahore, Pakistan" },
  { label: "Education", value: "BS Computer Science" },
  { label: "Experience", value: "Content Creator since 2022" },
  { label: "Languages", value: "Urdu · English" },
];

export default function About() {
  return (
    <section id="about" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          kicker="About Me"
          title={<>Working at the intersection of <span className="gradient-text">five disciplines</span></>}
          description="I'm Ans Nasim — a Social Media Manager, Content Creator and Software Engineer. I build faceless content brands and digital projects by combining AI workflows with human creativity."
        />

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5 md:gap-4">
          {pillars.map((p, i) => (
            <Reveal key={p.label} delay={i * 0.08}>
              <div className="glass card-hover group h-full rounded-2xl p-6 text-center">
                <div className="mx-auto mb-4 grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-violet-500/25 to-cyan-400/25 text-violet-300 transition group-hover:from-violet-500/40 group-hover:to-cyan-400/40">
                  <p.icon size={22} />
                </div>
                <h3 className="font-display text-lg font-bold text-white">{p.label}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-zinc-400">{p.detail}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1} className="mt-10">
          <div className="glass rounded-3xl p-8 md:p-10">
            <div className="grid gap-8 md:grid-cols-[1.4fr_1fr] md:gap-12">
              <div>
                <h3 className="font-display text-xl font-bold text-white md:text-2xl">
                  From computer science to content systems
                </h3>
                <p className="mt-4 leading-relaxed text-zinc-400">
                  With a BS in Computer Science and years as a content creator and freelancer, I treat
                  content like engineering: research the trend, design the prompt, build the format,
                  then optimize with analytics. That mindset powers everything — from four TikTok
                  channels and a network of Facebook Pages to AI-assisted web applications.
                </p>
                <p className="mt-4 leading-relaxed text-zinc-400">
                  I don&apos;t just post videos. I design <span className="text-zinc-200 font-medium">repeatable
                  content systems</span> — niche research, structured prompts, editing pipelines —
                  so one good idea becomes a series that keeps publishing.
                </p>
              </div>
              <dl className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2">
                {facts.map((f) => (
                  <div key={f.label} className="rounded-2xl bg-white/[0.03] p-4 border border-white/5">
                    <dt className="text-xs font-semibold uppercase tracking-widest text-zinc-500">{f.label}</dt>
                    <dd className="mt-1.5 font-medium text-zinc-100">{f.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
