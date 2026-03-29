import { useNavigate } from "react-router-dom";

export default function StepLayout({
  title,
  children,
  next,
  showNext = true
}) {
  const navigate = useNavigate();

  return (
    <div className="container">
      {/* UX REGEL 1 */}
      <p className="hint">
        Probeer dit te doen zoals je dit normaal ook zou doen.
      </p>

      <h1>{title}</h1>

      <div className="content">{children}</div>

      {/* UX REGEL: 1 actie */}
      {showNext && (
        <button onClick={() => navigate(next)}>
          Volgende
        </button>
      )}
    </div>
  );
}
