import { NavLink } from "react-router-dom";

export default function App() {
  return (
    <nav className="navbar">
      <h2>Student Dashboard</h2>

      <div className="nav-links">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/subjects">Subjects</NavLink>
        <NavLink to="/tasks">Tasks</NavLink>
        <NavLink to="/exams">Exams</NavLink>
        <NavLink to="/register">Register</NavLink>
      </div>
    </nav>
  );
}
