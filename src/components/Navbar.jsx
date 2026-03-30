import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div style={{ marginBottom: "20px" }}>
      <Link to="/">Home</Link> |{" "}
      <Link to="/tasks">Taken</Link>
    </div>
  );
}