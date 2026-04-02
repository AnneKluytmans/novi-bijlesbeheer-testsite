import { Link } from "react-router-dom";

export default function FooterNav({
  prevTo,
  nextTo,
  backTo = "/taken",
  prevLabel = "Vorige",
  nextLabel = "Volgende",
  backLabel = "Terug naar taken",
}) {
  return (
    <nav className="footer-nav">
      <div className="footer-nav-left">
        {prevTo ? (
          <Link to={prevTo} className="footer-button footer-button-secondary">
            {prevLabel}
          </Link>
        ) : (
          <span />
        )}
      </div>

      <div className="footer-nav-center">
        <Link to={backTo} className="footer-button footer-button-ghost">
          {backLabel}
        </Link>
      </div>

      <div className="footer-nav-right">
        {nextTo ? (
          <Link to={nextTo} className="footer-button footer-button-primary">
            {nextLabel}
          </Link>
        ) : (
          <span />
        )}
      </div>
    </nav>
  );
}