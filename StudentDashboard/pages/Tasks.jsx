import { useState } from "react";

const initialTasks = [
  {
    id: 1,
    title: "Finish React homework",
    subject: "Programming",
    completed: false,
  },
  {
    id: 2,
    title: "Study Chapter 4",
    subject: "Physics",
    completed: false,
  },
  {
    id: 3,
    title: "Read English article",
    subject: "English",
    completed: true,
  },
];

export default function Tasks() {
  const [tasks, setTasks] = useState(initialTasks);
  const [title, setTitle] = useState("");
  const [subject, setSubject] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (title.trim() === "" || subject.trim() === "") {
      return;
    }

    const newTask = {
      id: Date.now(),
      title: title,
      subject: subject,
      completed: false,
    };

    setTasks([...tasks, newTask]);

    setTitle("");
    setSubject("");
  }

  function deleteTask(id) {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  function toggleTask(id) {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task,
      ),
    );
  }

  return (
    <div className="page">
      <h1>Tasks</h1>

      <form className="task-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Task title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          type="text"
          placeholder="Subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        />

        <button type="submit">Add Task</button>
      </form>

      <div className="task-list">
        {tasks.length === 0 ? (
          <p>No tasks found.</p>
        ) : (
          tasks.map((task) => (
            <div className="task-card" key={task.id}>
              <div>
                <h3 className={task.completed ? "completed" : ""}>
                  {task.title}
                </h3>

                <p>{task.subject}</p>
              </div>

              <div className="task-buttons">
                <button onClick={() => toggleTask(task.id)}>
                  {task.completed ? "Undo" : "Complete"}
                </button>

                <button onClick={() => deleteTask(task.id)}>Delete</button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
