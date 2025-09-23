"use client";

import Image from "next/image";
import Link from "next/link";

export type Activity = {
  title: string;
  category: string;
  subtitle?: string;
  img: string;
  href: string;
  objectPosition?: string;
  /** "poster" (plein cadre, overlay texte) ou "classic" (image + contenu) */
  variant?: "poster" | "classic";
  className?: string;
};

export default function ActivityCard({
  title,
  category,
  subtitle,
  img,
  href,
  objectPosition = "50% 50%",
  variant = "poster",
  className = "",
}: Activity) {
  if (variant === "classic") {
    // Version classique si tu en as besoin ailleurs
    return (
      <Link
        href={href}
        className={`block h-full ${className}`}
      >
        <div className="relative" style={{ aspectRatio: "4/3" }}>
          <Image
            src={img}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            style={{ objectFit: "cover", objectPosition }}
          />
        </div>
        <div className="p-5">
          <div className="text-xs uppercase tracking-wide text-[color:var(--accent)]">
            {category}
          </div>
          <div className="title-serif text-lg font-semibold mt-1">{title}</div>
          {subtitle ? (
            <div className="mt-2 text-sm text-[color:var(--muted)]">{subtitle}</div>
          ) : null}
        </div>
      </Link>
    );
  }

  // ====== POSTER : l'image suit 100% du rectangle ======
  return (
    <Link
      href={href}
      className={`group relative block h-full w-full ${className}`}
    >
      {/* Image pleine hauteur */}
      <Image
        src={img}
        alt={title}
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        style={{ objectFit: "cover", objectPosition }}
        priority={false}
      />

      {/* Légère voile + gradient bas pour lisibilité */}
      <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-5 transition-opacity" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/55 via-black/15 to-transparent" />

      {/* Badge + textes en overlay */}
      <span className="chip absolute left-3 top-3 text-[11px] bg-white/85">
        {category}
      </span>

      <div className="absolute left-4 right-4 bottom-4 text-white">
        <div className="title-serif text-xl font-semibold drop-shadow">
          {title}
        </div>
        {subtitle ? (
          <div className="text-sm opacity-90 mt-1 drop-shadow">{subtitle}</div>
        ) : null}
      </div>

      {/* Accessibilité */}
      <span className="sr-only">{title}</span>
    </Link>
  );
}

