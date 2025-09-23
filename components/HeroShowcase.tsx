"use client";

import Image from "next/image";
import Link from "next/link";

type Props = {
  imageSrc: string;
  imageSrcMobile?: string;
  objectPositionDesktop?: string;
  objectPositionMobile?: string;
  title: string;
  subtitle: string;
  ctaHref: string;
  ctaLabel?: string;
  badge?: string;
  navOffset?: boolean;
};

export default function HeroShowcase({
  imageSrc,
  imageSrcMobile,
  objectPositionDesktop = "50% 55%",
  objectPositionMobile = "50% 40%",
  title,
  subtitle,
  ctaHref,
  ctaLabel = "Réserver",
  badge = "Villaverde • Vue volcans • Piscine privée",
  navOffset = true,
}: Props) {
  return (
    <section
      className={`
        relative isolate overflow-hidden grid grid-rows-[1fr_auto]
        min-h-[700px] md:min-h-[calc(100dvh-var(--nav-h,64px))]
        pt-[var(--nav-h,64px)]
      `}
    >
      {/* -- IMAGE DE FOND RESPONSIVE -- */}
      <div className="absolute inset-0 -z-10">
        {/* Mobile */}
        <Image
          src={imageSrcMobile || imageSrc}
          alt="Villa Villaverde"
          fill
          priority
          sizes="100vw"
          className="block md:hidden object-cover"
          style={{
            objectPosition: objectPositionMobile,
          }}
        />

        {/* Desktop */}
        <Image
          src={imageSrc}
          alt="Villa Villaverde"
          fill
          priority
          sizes="100vw"
          className="hidden md:block object-cover"
          style={{
            objectPosition: objectPositionDesktop,
          }}
        />

        {/* Overlays */}
        <div className="absolute inset-0 bg-black/20 md:bg-black/25" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/40 to-transparent" />
      </div>

      {/* -- CONTENU -- */}
      <div className="container self-start pt-6 md:pt-10 mb-10">
        <span className="chip text-[13px] bg-white/80 shadow-sm">{badge}</span>

        <h1 className="title-display h1 text-white drop-shadow-[0_2px_12px_rgba(0,0,0,.35)] mt-3 max-w-3xl md:max-w-4xl">
          {title}
        </h1>

        <p className="lead text-white/90 drop-shadow-[0_2px_10px_rgba(0,0,0,.35)] max-w-2xl mt-3">
          {subtitle}
        </p>

        <div className="mt-5">
          <Link
            href={ctaHref}
            target="_blank"
            className="btn rounded-full px-7 py-3 bg-white text-[color:var(--ink)] hover:bg-[color:var(--ocean)] hover:text-white transition-colors shadow-soft"
          >
            {ctaLabel}
          </Link>
        </div>
      </div>

      {/* -- BARRE D’INFO EN BAS DU HERO -- */}
      <div className="container w-full pb-[max(env(safe-area-inset-bottom),1rem)] md:pb-8">
        <div className="mx-auto w-[min(92vw,980px)] rounded-2xl bg-white/90 backdrop-blur border border-[color:var(--stone)]/60 shadow-soft">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-0 p-5 md:p-0">
            <InfoCell label="EMPLACEMENT" value="Villaverde, Fuerteventura" />
            <InfoCell label="CAPACITÉ" value="4–8 voyageurs" />
            <div className="flex items-center justify-between md:justify-center gap-4 md:gap-6 px-0 md:px-8 py-0 md:py-5">
              <div className="min-w-0">
                <div className="text-[11px] tracking-wider text-black/55 uppercase">
                  TYPE
                </div>
                <div className="truncate font-medium">
                  2 suites / Villa entière
                </div>
              </div>
              <Link
                href={ctaHref}
                target="_blank"
                className="shrink-0 rounded-full bg-[color:var(--ink)] text-white px-5 py-2 text-sm hover:bg-[color:var(--ocean)] transition-colors"
              >
                Réserver
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function InfoCell({ label, value }: { label: string; value: string }) {
  return (
    <div className="px-0 md:px-8 py-0 md:py-5">
      <div className="text-[11px] tracking-wider text-black/55 uppercase">
        {label}
      </div>
      <div className="font-medium">{value}</div>
    </div>
  );
}

