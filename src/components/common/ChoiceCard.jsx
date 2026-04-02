export default function ChoiceCard({
  title,
  description,
  selected = false,
  onClick,
}) {
  return (
    <button
      type="button"
      className={`choice-card ${selected ? "selected" : ""}`}
      onClick={onClick}
    >
      <span className="choice-card-title">{title}</span>
      {description && (
        <span className="choice-card-description">{description}</span>
      )}
    </button>
  );
}