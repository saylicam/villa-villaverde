"use client";

import Image from "next/image";

type Panel = {
  title: string;
  subtitle?: string;
  image: string;
  objectPosition?: string; // ex "50% 50%"
};

export default function StickyFeaturePanels({
  heading,
  panels = [],
}: {
  heading?: string;
  panels: Panel[];
}) {
  return (
    <section className="py-16 md:py-24">
      {/* Titre section (dans la grille centrale) */}
      {heading && (
        <div className="container mb-8 md:mb-12">
          <h2 className="title-display h2">{heading}</h2>
        </div>
      )}

      {/* Panneaux alternés */}
      <div className="space-y-20 md:space-y-28">
        {panels.map((p, i) => {
          const imageSideRight = i % 2 === 0; // 0,2,4 → image à droite ; 1,3,5 → image à gauche
          return (
            <div key={p.title} className="container">
              <div className="grid grid-cols-12 items-center gap-x-6 md:gap-x-10">
                {/* TEXTE */}
                <div
                  className={
                    imageSideRight
                      ? "col-span-12 md:col-span-5 md:order-1"
                      : "col-span-12 md:col-span-5 md:col-start-8 md:order-2"
                  }
                >
                  <h3 className="title-display text-[clamp(22px,3.2vw,34px)] leading-tight">
                    {p.title}
                  </h3>
                  {p.subtitle && (
                    <p className="lead mt-2">{p.subtitle}</p>
                  )}
                </div>

                {/* IMAGE qui colle au bord du viewport */}
                <div
                  className={[
                    "col-span-12 md:col-span-7 mt-6 md:mt-0",
                    imageSideRight ? "md:order-2 edge-right" : "md:order-1 edge-left",
                  ].join(" ")}
                >
                  <div className="relative w-full h-[54vh] md:h-[66vh] lg:h-[72vh] overflow-hidden">
                    <Image
                      src={p.image}
                      alt={p.title}
                      fill
                      sizes="100vw"
                      className="object-cover"
                      style={{ objectPosition: p.objectPosition || "50% 50%" }}
                      priority={i === 0}
                    />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
