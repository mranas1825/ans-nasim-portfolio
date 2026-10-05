import {
  Lightbulb,
  Search,
  Terminal,
  Clapperboard,
  Scissors,
  Gauge,
  Rocket,
} from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { workflowSteps } from "@/data/content";

const icons = [Lightbulb, Search, Terminal, Clapperboard, Scissors, Gauge, Rocket];

export default function Workflow() {
  return (
    <section id="workflow" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          kicker="My AI Workflow"
          title={<>From idea to published, <span className="gradient-text">on repeat</span></>}
          description="A simple, honest process. AI and creative tools do the heavy lifting at every step — but judgment, taste and analytics decide what ships."
        />

        <div className="relative">
          {/* Connector line (desktop) */}
          <div
            className="absolute left-0 right-0 top-8 hidden h-px bg-gradient-to-r from-transparent via-violet-400/40 to-transparent lg:block"
            aria-hidden
          />
          <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-7 lg:gap-3">
            {workflowSteps.map((s, i) => {
              const Icon = icons[i];
              return (
                <Reveal key={s.step} delay={i * 0.07}>
                  <li className="group relative h-full">
                    <div className="glass card-hover flex h-full flex-col rounded-2xl p-5">
                      <div className="relative z-10 mb-4 flex items-center justify-between">
                        <span className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-violet-500/30 to-cyan-400/30 text-violet-200 transition group-hover:from-violet-500/50 group-hover:to-cyan-400/50">
                          <Icon size={20} />
                        </span>
                        <span className="font-display text-xs font-bold text-zinc-600">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                      </div>
                      <h3 className="font-display text-base font-bold text-white">{s.step}</h3>
                      <p className="mt-2 text-[13px] leading-relaxed text-zinc-400">{s.detail}</p>
                    </div>
                    {i < workflowSteps.length - 1 && (
                      <span
                        className="absolute -right-3 top-8 z-10 hidden text-violet-400 lg:block"
                        aria-hidden
                      >
                        →
                      </span>
                    )}
                  </li>
                </Reveal>
              );
            })}
          </ol>
        </div>

        <Reveal delay={0.15}>
          <p className="mx-auto mt-10 max-w-2xl text-center text-sm leading-relaxed text-zinc-500 md:text-base">
            The loop never really ends — every publish feeds analytics back into the next idea,
            so formats get sharper and systems get faster over time.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
