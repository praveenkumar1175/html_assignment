import { useState } from "react";
import TextInput from "./TextInput";

function SignupForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [preview, setPreview] = useState(null);

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  const isValid =
    formData.name &&
    formData.email.includes("@") &&
    formData.password;

  function handleSubmit(e) {
    e.preventDefault();
    setPreview(formData);
  }

  function handleClear() {
    setFormData({
      name: "",
      email: "",
      password: "",
    });

    setPreview(null);
  }

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h1>Signup Form</h1>

      <form onSubmit={handleSubmit}>
        <TextInput
          label="Name"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />

        <TextInput
          label="Email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />

        <TextInput
          label="Password"
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />

        <button type="submit" disabled={!isValid}>
          Submit
        </button>

        <button
          type="button"
          onClick={handleClear}
          style={{ marginLeft: "10px" }}
        >
          Clear
        </button>
      </form>

      {preview && (
        <div
          style={{
            border: "1px solid black",
            padding: "20px",
            marginTop: "20px",
            display: "inline-block",
          }}
        >
          <h2>Preview</h2>

          <p>Name: {preview.name}</p>
          <p>Email: {preview.email}</p>
          <p>Password: {preview.password}</p>
        </div>
      )}
    </div>
  );
}

export default SignupForm;