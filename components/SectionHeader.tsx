export default function SectionHeader({title, subtitle}:{title:string; subtitle?:string}) {
  return (
    <div className="mb-8">
      <h3 className="title-serif text-2xl md:text-3xl font-semibold">{title}</h3>
      {subtitle && <p className="opacity-70 mt-2 max-w-2xl">{subtitle}</p>}
    </div>
  );
}
