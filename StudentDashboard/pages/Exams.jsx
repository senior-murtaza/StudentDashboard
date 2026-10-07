const exams = [
  {
    id: 1,
    subject: "Mathematics",
    date: "October 15",
    time: "10:00 AM",
  },
  {
    id: 2,
    subject: "Physics",
    date: "October 18",
    time: "9:00 AM",
  },
];

export default function Exams() {
  return (
    <div className="page">
      <h1>Upcoming Exams</h1>

      <div className="cards">
        {exams.map((exam) => (
          <div className="card" key={exam.id}>
            <h2>{exam.subject}</h2>
            <p>Date: {exam.date}</p>
            <p>Time: {exam.time}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
