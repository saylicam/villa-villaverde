import { ReactNode } from "react";
export default function Section({
  tone = "default", id, children, className = "",
}: { tone?: "default" | "sand" | "dark"; id?: string; children: ReactNode; className?: string }) {
  const bg = tone === "sand" ? "bg-[color:var(--sand)]"
           : tone === "dark" ? "bg-[color:var(--forest)] text-white" : "";
  return (
    <section id={id} className={`${bg}`}>
      <div className={`container py-16 md:py-24 ${className}`}>{children}</div>
    </section>
  );
}
