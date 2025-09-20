// src/components/Form.js
import React, { useState } from "react";
import './Form.css';

function Form({ onAdd }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !phone) {
      alert("All fields are required!");
      return;
    }
    onAdd({ name, email, phone });
    setName("");
    setEmail("");
    setPhone("");
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={styles.input}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={styles.input}
      />
      <input
        type="tel"
        placeholder="Phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        style={styles.input}
      />
      <button type="submit" style={styles.button}>Add Contact</button>
    </form>
  );
}

const styles = {
  form: { margin: "20px 0", display: "flex", gap: "10px" },
  input: { padding: "8px", flex: 1 },
  button: { padding: "8px 16px", cursor: "pointer" },
};

export default Form;
