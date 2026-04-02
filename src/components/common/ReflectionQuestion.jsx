export default function ReflectionQuestion({
  title,
  description,
  children,
}) {
  return (
    <section className={`reflection-question`}>
      <h3 className="question-title">{title}</h3>
      {description && <p className="question-description">{description}</p>}
      {children && <div className="question-content">{children}</div>}
    </section>
  );
}