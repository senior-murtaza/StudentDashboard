const subjects = [
  {
    id: 1,
    name: "Mathematics",
    teacher: "Mr. John",
    tasks: 3,
  },
  {
    id: 2,
    name: "Physics",
    teacher: "Mr. David",
    tasks: 2,
  },
  {
    id: 3,
    name: "English",
    teacher: "Mrs. Sarah",
    tasks: 1,
  },
  {
    id: 4,
    name: "Programming",
    teacher: "Mr. Alex",
    tasks: 4,
  },
  {
    id: 5,
    name: "History",
    teacher: "Mrs. Emma",
    tasks: 2,
  },
];

export default function Subjects() {
  return (
    <div className="page">
      <h1>Subjects</h1>

      <div className="cards">
        {subjects.map((subject) => (
          <div className="card" key={subject.id}>
            <h2>{subject.name}</h2>
            <p>Teacher: {subject.teacher}</p>
            <p>Tasks: {subject.tasks}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
