"use client";

import { useEffect, useRef } from "react";

/**
 * Renders a TikTok video via the official embed.
 * `url` must be a real https://www.tiktok.com/@handle/video/<id> URL.
 */
export default function TikTokEmbed({ url, caption }: { url: string; caption?: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const load = () => {
      const w = window as unknown as { tiktokEmbed?: { lib?: { render?: () => void } } };
      w.tiktokEmbed?.lib?.render?.();
    };
    if (document.querySelector('script[src="https://www.tiktok.com/embed.js"]')) {
      load();
      return;
    }
    const s = document.createElement("script");
    s.src = "https://www.tiktok.com/embed.js";
    s.async = true;
    s.onload = load;
    document.body.appendChild(s);
  }, [url]);

  return (
    <div ref={ref} className="tiktok-embed-wrap w-full max-w-[340px] mx-auto">
      <blockquote
        className="tiktok-embed"
        cite={url}
        data-video-id={url.split("/video/")[1]?.split("?")[0] ?? ""}
        style={{ maxWidth: "340px", minWidth: "280px" }}
      >
        <section>
          <a target="_blank" rel="noopener noreferrer" href={url}>
            {caption ?? "Watch on TikTok"}
          </a>
        </section>
      </blockquote>
    </div>
  );
}
