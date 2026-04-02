export default function ScenarioCard({
  title,
  description,
  children,
  variant = "default",
}) {
  return (
    <section className={`scenario-card scenario-${variant}`}>
      <h3 className="scenario-title">{title}</h3>
      {description && <p className="scenario-description">{description}</p>}
      {children && <div className="scenario-content">{children}</div>}
    </section>
  );
}