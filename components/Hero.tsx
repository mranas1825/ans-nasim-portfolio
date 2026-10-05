"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { ArrowDown, Download, MapPin, Play } from "lucide-react";
import { profile, niches } from "@/data/content";

const stats = [
  { value: "4+", label: "Years creating content" },
  { value: "3", label: "Platforms mastered" },
  { value: "8", label: "Facebook Pages managed" },
  { value: "4", label: "TikTok channels" },
];

const ease = [0.22, 1, 0.36, 1] as const;

export default function Hero() {
  const reduce = useReducedMotion();

  return (
    <section id="top" className="relative flex min-h-screen items-center overflow-hidden pt-16">
      {/* Backdrop */}
      <div className="bg-grid absolute inset-0" aria-hidden />
      <div
        className="absolute -top-40 left-1/2 h-[560px] w-[820px] -translate-x-1/2 rounded-full bg-violet-600/25 blur-[140px] animate-pulse-glow"
        aria-hidden
      />
      <div
        className="absolute right-[-160px] top-1/3 h-[420px] w-[420px] rounded-full bg-cyan-500/15 blur-[120px] animate-float-slower"
        aria-hidden
      />
      <div
        className="absolute bottom-[-120px] left-[-120px] h-[380px] w-[380px] rounded-full bg-fuchsia-600/15 blur-[120px] animate-float-slow"
        aria-hidden
      />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-ink-950 to-transparent" aria-hidden />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-20 pt-14 md:px-8 md:pt-20">
        <div className="mx-auto max-w-4xl text-center">
          {/* Portrait in circle frame with rotating gradient ring */}
          <motion.div
            initial={{ opacity: 0, scale: reduce ? 1 : 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease }}
            className="relative mx-auto mb-8 h-44 w-44 md:h-52 md:w-52"
          >
            <div
              className="absolute inset-0 rounded-full bg-[conic-gradient(from_0deg,#8b5cf6,#22d3ee,#f472b6,#8b5cf6)] animate-rotate-slow"
              aria-hidden
            />
            <div className="absolute inset-[10px] overflow-hidden rounded-full bg-ink-900">
              <Image
                src="/portrait.jpg"
                alt="Portrait of Ans Nasim"
                fill
                sizes="(max-width: 768px) 176px, 208px"
                className="object-cover object-top"
                priority
              />
            </div>
            <div
              className="absolute -inset-4 rounded-full bg-violet-600/20 blur-2xl -z-10"
              aria-hidden
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: reduce ? 0 : 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease }}
            className="mb-6 inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-xs font-medium text-zinc-300 md:text-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            Open to collaborations · {profile.location}
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: reduce ? 0 : 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.08, ease }}
            className="font-display text-sm font-semibold uppercase tracking-[0.3em] text-violet-300"
          >
            {profile.name}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: reduce ? 0 : 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.16, ease }}
            className="font-display mt-5 text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-6xl md:text-7xl text-balance"
          >
            AI-Powered Content Creator <span className="gradient-text">&amp; Digital Builder</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: reduce ? 0 : 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.28, ease }}
            className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-zinc-400 md:text-xl"
          >
            {profile.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: reduce ? 0 : 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease }}
            className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row"
          >
            <a
              href="#work"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-violet-500 to-cyan-400 px-8 py-4 text-base font-semibold text-white shadow-xl shadow-violet-500/30 transition hover:shadow-violet-500/50 hover:brightness-110 sm:w-auto"
            >
              <Play size={18} className="transition group-hover:scale-110" />
              View My Work
            </a>
            <a
              href={profile.cvPath}
              download
              className="inline-flex w-full items-center justify-center gap-2 rounded-full glass px-8 py-4 text-base font-semibold text-white transition hover:border-violet-400/50 hover:bg-white/10 sm:w-auto"
            >
              <Download size={18} />
              Download CV
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.55 }}
            className="mt-8 flex items-center justify-center gap-2 text-sm text-zinc-500"
          >
            <MapPin size={15} className="text-violet-300" />
            {profile.location} · {profile.titleLine}
          </motion.div>
        </div>

        {/* Stats */}
        <motion.dl
          initial={{ opacity: 0, y: reduce ? 0 : 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.65, ease }}
          className="mx-auto mt-14 grid max-w-4xl grid-cols-2 gap-3 md:grid-cols-4 md:gap-4"
        >
          {stats.map((s) => (
            <div
              key={s.label}
              className="glass card-hover rounded-2xl px-4 py-5 text-center"
            >
              <dt className="order-2 mt-1 block text-xs font-medium text-zinc-400 md:text-sm">
                {s.label}
              </dt>
              <dd className="font-display order-1 text-3xl font-bold gradient-text md:text-4xl">
                {s.value}
              </dd>
            </div>
          ))}
        </motion.dl>
      </div>

      {/* Niche marquee */}
      <div className="absolute inset-x-0 bottom-0 z-10 border-t border-white/5 bg-ink-950/60 py-4 backdrop-blur">
        <div className="mask-fade-x overflow-hidden">
          <div className="flex w-max animate-marquee gap-10 pr-10">
            {[...niches, ...niches].map((n, i) => (
              <span
                key={i}
                className="flex items-center gap-10 whitespace-nowrap text-sm font-medium uppercase tracking-widest text-zinc-500"
                aria-hidden={i >= niches.length}
              >
                {n}
                <span className="text-violet-400">✦</span>
              </span>
            ))}
          </div>
        </div>
      </div>

      <motion.a
        href="#about"
        aria-label="Scroll to about section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-20 left-1/2 z-10 hidden -translate-x-1/2 text-zinc-500 transition hover:text-white md:block"
      >
        <ArrowDown size={20} className="animate-bounce" />
      </motion.a>
    </section>
  );
}
