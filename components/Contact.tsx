import { ArrowUpRight, Mail } from "lucide-react";
import { FacebookIcon, InstagramIcon, LinkedinIcon, TiktokIcon, WhatsappIcon, YoutubeIcon } from "./BrandIcons";
import Reveal from "./Reveal";
import { profile } from "@/data/content";

const channels = [
  { label: "Email", value: profile.email, href: profile.gmailCompose, icon: Mail },
  { label: "WhatsApp", value: "+92 340 4494401", href: "https://wa.me/923404494401", icon: WhatsappIcon },
  { label: "LinkedIn", value: "anas-nasim-2984bb319", href: profile.linkedin, icon: LinkedinIcon },
  { label: "Instagram", value: "@mdanas.2804", href: "https://www.instagram.com/mdanas.2804", icon: InstagramIcon },
  { label: "TikTok", value: "@ai.cinemalab52", href: "https://www.tiktok.com/@ai.cinemalab52", icon: TiktokIcon },
  { label: "Facebook", value: "MegaVerse Ai", href: "https://www.facebook.com/1131002856755610", icon: FacebookIcon },
  { label: "Facebook", value: "View Profile", href: "https://www.facebook.com/share/19ZAbDWs2o/", icon: FacebookIcon },
  { label: "YouTube", value: "@PUBGFIMLY", href: "https://www.youtube.com/@PUBGFIMLY", icon: YoutubeIcon },
];

export default function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden py-24 md:py-32">
      <div className="bg-grid absolute inset-0 opacity-60" aria-hidden />
      <div
        className="absolute left-1/2 top-1/2 h-[480px] w-[760px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/20 blur-[150px]"
        aria-hidden
      />

      <div className="relative mx-auto max-w-5xl px-5 text-center md:px-8">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-violet-300">
            Contact
          </p>
          <h2 className="font-display mx-auto mt-4 max-w-3xl text-4xl font-bold leading-tight text-white md:text-6xl text-balance">
            Have an idea? <span className="gradient-text">Let&apos;s build it.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-zinc-400 md:text-lg">
            Whether it&apos;s a faceless channel, a viral format, an AI workflow or a digital
            project — I turn ideas into finished work. Reach out and let&apos;s talk.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={profile.gmailCompose}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-violet-500 to-cyan-400 px-8 py-4 text-base font-semibold text-white shadow-xl shadow-violet-500/30 transition hover:brightness-110 sm:w-auto"
            >
              <Mail size={18} />
              {profile.email}
            </a>
            <a
              href={profile.cvPath}
              download
              className="glass inline-flex w-full items-center justify-center gap-2 rounded-full px-8 py-4 text-base font-semibold text-white transition hover:border-violet-400/50 hover:bg-white/10 sm:w-auto"
            >
              Download CV
            </a>
          </div>
        </Reveal>

        <div className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
          {channels.map((c, i) => (
            <Reveal key={c.label} delay={i * 0.06}>
              <a
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="glass card-hover group flex items-center gap-3.5 rounded-2xl p-4 text-left md:p-5"
              >
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-violet-500/25 to-cyan-400/25 text-violet-200 transition group-hover:from-violet-500/45 group-hover:to-cyan-400/45">
                  <c.icon size={20} />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block text-xs font-semibold uppercase tracking-widest text-zinc-500">
                    {c.label}
                  </span>
                  <span className="block truncate text-sm font-medium text-zinc-100">
                    {c.value}
                  </span>
                </span>
                <ArrowUpRight
                  size={16}
                  className="shrink-0 text-zinc-600 transition group-hover:text-violet-300"
                />
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
