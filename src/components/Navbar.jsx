import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div style={{ padding: "10px", background: "#fff", borderBottom: "1px solid #ddd" }}>
      <Link to="/">Home</Link> |{" "}
      <Link to="/tasks">Taken</Link>
    </div>
  );
}