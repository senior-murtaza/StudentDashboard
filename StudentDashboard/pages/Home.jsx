export default function Home() {
  return (
    <div className="page">
      <h1>Welcome to Student Dashboard</h1>
      <p>Manage your subjects, tasks, and exams in one place.</p>

      <div className="stats">
        <div className="stat-card">
          <h2>5</h2>
          <p>Subjects</p>
        </div>

        <div className="stat-card">
          <h2>8</h2>
          <p>Tasks</p>
        </div>

        <div className="stat-card">
          <h2>2</h2>
          <p>Upcoming Exams</p>
        </div>
      </div>
    </div>
  );
}
