"use client";

import { useState, type ComponentType } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowUpRight,
  BadgeCheck,
  Clapperboard,
  ExternalLink,
  Eye,
  Heart,
  Users,
  Wrench,
} from "lucide-react";
import { FacebookIcon, YoutubeIcon } from "./BrandIcons";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import TikTokEmbed from "./TikTokEmbed";
import {
  tiktokAccounts,
  facebookPages,
  facebookNetworkNote,
  youtubeChannels,
  formatReferences,
} from "@/data/content";

type Tab = "tiktok" | "facebook" | "youtube";

const tabs: { id: Tab; label: string; icon: ComponentType<{ size?: number | string; className?: string }> }[] = [
  { id: "tiktok", label: "TikTok", icon: Clapperboard },
  { id: "facebook", label: "Facebook", icon: FacebookIcon },
  { id: "youtube", label: "YouTube", icon: YoutubeIcon },
];

function TikTokPanel() {
  return (
    <div className="grid gap-5 md:grid-cols-2 md:gap-6">
      {tiktokAccounts.map((a, i) => (
        <Reveal key={a.handle} delay={i * 0.07}>
          <article className="glass card-hover flex h-full flex-col rounded-3xl p-6 md:p-7">
            <div className="flex items-start justify-between gap-3">
              <div>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-cyan-400/10 px-3 py-1 text-xs font-semibold text-cyan-300 border border-cyan-400/20">
                  <Clapperboard size={13} />
                  {a.niche}
                </span>
                <h3 className="font-display mt-3 text-xl font-bold text-white md:text-2xl">
                  {a.handle}
                </h3>
              </div>
              <a
                href={a.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open ${a.handle} on TikTok`}
                className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-white/10 text-zinc-300 transition hover:border-cyan-300/50 hover:text-cyan-300"
              >
                <ArrowUpRight size={18} />
              </a>
            </div>
            <div className="mt-3 flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white/5 px-3 py-1 text-xs font-semibold text-zinc-200 border border-white/10">
                <Users size={13} className="text-violet-300" />
                {a.followers} followers
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white/5 px-3 py-1 text-xs font-semibold text-zinc-200 border border-white/10">
                <Heart size={13} className="text-pink-300" />
                {a.likes} likes
              </span>
            </div>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-zinc-400 md:text-[15px]">
              {a.description}
            </p>
            <div className="mt-4 flex flex-wrap items-center gap-2">
              <Wrench size={14} className="text-zinc-500" />
              {a.tools.map((t) => (
                <span key={t} className="rounded-full bg-white/5 px-3 py-1 text-xs text-zinc-300 border border-white/5">
                  {t}
                </span>
              ))}
            </div>
            {a.videos.length > 0 && (
              <div className="mt-6 border-t border-white/5 pt-6">
                <p className="mb-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500">
                  <Eye size={14} className="text-cyan-300" />
                  Popular videos
                </p>
                <div className="grid gap-6 sm:grid-cols-2">
                  {a.videos.map((v) => (
                    <div key={v.url}>
                      <TikTokEmbed url={v.url} caption={v.caption} />
                      <p className="mx-auto mt-3 max-w-[340px] text-center text-xs leading-relaxed text-zinc-500">
                        {v.caption}
                        {v.metrics && (
                          <span className="mt-1 block font-semibold text-zinc-400">{v.metrics}</span>
                        )}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
            {a.videos.length === 0 && (
              <a
                href={a.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-cyan-300 hover:text-cyan-200"
              >
                Watch the latest videos on TikTok <ArrowUpRight size={15} />
              </a>
            )}
          </article>
        </Reveal>
      ))}
    </div>
  );
}

function FacebookPanel() {
  return (
    <div>
      <div className="grid gap-5 md:grid-cols-3 md:gap-6">
        {facebookPages.map((p, i) => (
          <Reveal key={p.name} delay={i * 0.07}>
            <article className="glass card-hover flex h-full flex-col rounded-3xl p-6 md:p-7">
              <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-blue-500/10 px-3 py-1 text-xs font-semibold text-blue-300 border border-blue-400/20">
                <FacebookIcon size={13} />
                {p.focus}
              </span>
              <h3 className="font-display mt-3 text-xl font-bold text-white">{p.name}</h3>
              <p className="mt-2.5 flex-1 text-sm leading-relaxed text-zinc-400">{p.description}</p>
              <div className="mt-4 flex items-center justify-between border-t border-white/5 pt-4">
                <span className="inline-flex items-center gap-1.5 text-xs font-medium text-zinc-500">
                  <BadgeCheck size={14} className="text-blue-300" />
                  {p.cadence}
                </span>
                <a
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Open ${p.name} on Facebook`}
                  className="inline-flex items-center gap-1 text-sm font-semibold text-blue-300 hover:text-blue-200"
                >
                  Visit Page <ArrowUpRight size={15} />
                </a>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
      <Reveal delay={0.15}>
        <p className="mx-auto mt-8 max-w-3xl text-center text-sm leading-relaxed text-zinc-500">
          {facebookNetworkNote}
        </p>
      </Reveal>
    </div>
  );
}

function YouTubePanel() {
  return (
    <div className="grid gap-5 md:grid-cols-2 md:gap-6">
      {youtubeChannels.map((c, i) => (
        <Reveal key={c.handle} delay={i * 0.07}>
          <article className="glass card-hover flex h-full flex-col rounded-3xl p-6 md:p-7">
            <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-red-500/10 px-3 py-1 text-xs font-semibold text-red-300 border border-red-400/20">
              <YoutubeIcon size={13} />
              {c.focus}
            </span>
            <h3 className="font-display mt-3 text-xl font-bold text-white md:text-2xl">{c.handle}</h3>
            <p className="mt-2.5 flex-1 text-sm leading-relaxed text-zinc-400 md:text-[15px]">
              {c.description}
            </p>
            <a
              href={c.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-red-300 hover:text-red-200"
            >
              Visit channel on YouTube <ArrowUpRight size={15} />
            </a>
          </article>
        </Reveal>
      ))}
      <Reveal delay={0.15} className="md:col-span-2">
        <div className="rounded-3xl border border-dashed border-white/10 p-6 text-center md:p-8">
          <p className="text-sm leading-relaxed text-zinc-500 md:text-base">
            Shorts-first strategy: faceless formats are researched on TikTok, refined with analytics,
            then expanded to YouTube Shorts and Facebook — one system, three platforms.
          </p>
        </div>
      </Reveal>
    </div>
  );
}

function FormatsBand() {
  return (
    <div className="mt-16 md:mt-20">
      <Reveal className="mb-8 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-violet-300/90">
          Viral formats I produce
        </p>
        <h3 className="font-display mx-auto mt-3 max-w-2xl text-2xl font-bold text-white md:text-3xl text-balance">
          Proven formats, <span className="gradient-text">ready on demand</span>
        </h3>
        <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-zinc-500">
          Reference videos below are by other creators — shown as examples of the viral formats
          I can create with my prompt-engineering systems, not as my own uploads.
        </p>
      </Reveal>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {formatReferences.map((f, i) => (
          <Reveal key={f.url} delay={(i % 4) * 0.06}>
            <a
              href={f.url}
              target="_blank"
              rel="noopener noreferrer"
              className="glass card-hover group flex h-full flex-col rounded-2xl p-5"
            >
              <div className="flex items-center justify-between">
                <span className="rounded-full bg-fuchsia-500/10 px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-fuchsia-300 border border-fuchsia-400/20">
                  Format
                </span>
                <ExternalLink
                  size={15}
                  className="text-zinc-600 transition group-hover:text-fuchsia-300"
                />
              </div>
              <h4 className="font-display mt-3 text-base font-bold text-white">{f.title}</h4>
              <p className="mt-1 text-xs text-zinc-500">
                Example by <span className="text-zinc-300">{f.creator}</span> · {f.metrics}
              </p>
              <p className="mt-2.5 flex-1 text-[13px] leading-relaxed text-zinc-400">{f.note}</p>
              <span className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-fuchsia-300">
                Watch reference <ArrowUpRight size={13} />
              </span>
            </a>
          </Reveal>
        ))}
      </div>
    </div>
  );
}

export default function Portfolio() {
  const [tab, setTab] = useState<Tab>("tiktok");

  return (
    <section id="work" className="relative py-24 md:py-32">
      <div
        className="absolute left-1/2 top-0 h-[400px] w-[700px] -translate-x-1/2 rounded-full bg-violet-700/10 blur-[140px]"
        aria-hidden
      />
      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          kicker="My Work"
          title={<>Faceless content, <span className="gradient-text">engineered to travel</span></>}
          description="A look inside the content operation — TikTok channels, Facebook Pages and YouTube, all built on AI-assisted faceless formats. Profiles, videos and figures verified October 2026."
        />

        <Reveal className="mb-10 flex justify-center">
          <div className="glass inline-flex rounded-full p-1.5" role="tablist" aria-label="Platform">
            {tabs.map((t) => (
              <button
                key={t.id}
                role="tab"
                aria-selected={tab === t.id}
                onClick={() => setTab(t.id)}
                className={`relative flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition md:px-7 ${
                  tab === t.id ? "text-white" : "text-zinc-400 hover:text-zinc-200"
                }`}
              >
                {tab === t.id && (
                  <motion.span
                    layoutId="tab-pill"
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-violet-500 to-cyan-400 shadow-lg shadow-violet-500/30"
                    transition={{ type: "spring", stiffness: 400, damping: 32 }}
                  />
                )}
                <t.icon size={16} className="relative z-10" />
                <span className="relative z-10">{t.label}</span>
              </button>
            ))}
          </div>
        </Reveal>

        <AnimatePresence mode="wait">
          <motion.div
            key={tab}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            {tab === "tiktok" && <TikTokPanel />}
            {tab === "facebook" && <FacebookPanel />}
            {tab === "youtube" && <YouTubePanel />}
          </motion.div>
        </AnimatePresence>

        <FormatsBand />
      </div>
    </section>
  );
}
