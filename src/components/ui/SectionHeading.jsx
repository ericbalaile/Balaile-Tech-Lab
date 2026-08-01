function SectionHeading({ title, className = "" }) {
  return (
    <div className={`mb-10 ${className}`}>
      <h2 className="font-heading text-4xl md:text-5xl font-medium text-primary leading-tight">
        {title}
      </h2>
      <div className="w-20 h-px bg-accent mt-6" />
    </div>
  );
}

export default SectionHeading;
