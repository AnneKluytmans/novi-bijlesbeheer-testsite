export default function MobileFrame({ title = "Medewerkersapp", children }) {
  return (
    <section className="mobile-frame-wrapper">
      <div className="mobile-frame">
        <div className="mobile-notch" />
        <div className="mobile-header">{title}</div>
        <div className="mobile-content">{children}</div>
      </div>
    </section>
  );
}