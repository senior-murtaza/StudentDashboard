import { useState } from "react";

export default function Register() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState([]);

  function handleChange(e) {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    const newErrors = [];

    if (form.name.trim() === "") {
      newErrors.push("Name is required.");
    }

    if (!form.email.includes("@")) {
      newErrors.push("Enter a valid email.");
    }

    if (form.username.length < 4) {
      newErrors.push("Username must be at least 4 characters.");
    }

    if (form.password.length < 8) {
      newErrors.push("Password must be at least 8 characters.");
    }

    if (!/[0-9]/.test(form.password)) {
      newErrors.push("Password must contain a number.");
    }

    if (form.password !== form.confirmPassword) {
      newErrors.push("Passwords do not match.");
    }

    setErrors(newErrors);

    if (newErrors.length === 0) {
      alert("Registration successful!");

      setForm({
        name: "",
        email: "",
        username: "",
        password: "",
        confirmPassword: "",
      });
    }
  }

  return (
    <div className="page">
      <div className="register-box">
        <h1>Register</h1>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
          />

          <input
            type="text"
            name="username"
            placeholder="Username"
            value={form.username}
            onChange={handleChange}
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
          />

          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={form.confirmPassword}
            onChange={handleChange}
          />

          {errors.length > 0 && (
            <div className="errors">
              {errors.map((error, index) => (
                <p key={index}>{error}</p>
              ))}
            </div>
          )}

          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  );
}
