import Navbar from './Navbar'

export default function Layout({ children }) {
  return (
    <div style={{ fontFamily: "Arial", padding: "20px" }}>
      <Navbar />
      <div style={{ maxWidth: "700px", margin: "0 auto" }}>
        {children}
      </div>
    </div>
  );
}