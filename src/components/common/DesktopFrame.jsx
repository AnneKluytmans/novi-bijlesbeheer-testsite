export default function DesktopFrame({ title = "LVS", children }) {
  return (
    <section className="desktop-frame">
      <div className="desktop-topbar">
        <div className="desktop-dots">
          <span />
          <span />
          <span />
        </div>
        <div className="desktop-title">{title}</div>
      </div>
      <div className="desktop-content">{children}</div>
    </section>
  );
}