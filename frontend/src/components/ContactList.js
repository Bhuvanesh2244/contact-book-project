// src/components/ContactList.js
import React from "react";
import './my.css';


function ContactList({ contacts, onDelete }) {
  return (
    <div>
      <h2 className="head">Contacts</h2>
      {contacts.length === 0 ? (
        <p>No contacts available.</p>
      ) : (
        <table border="1" width="100%" cellPadding="10">
          <thead>
            <tr>
              <th className="titles">Name</th>
              <th className="titles">Email</th>
              <th className="titles">Phone</th>
              <th className="titles">Action</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((c) => (
              <tr key={c.id}>
                <td className="titles">{c.name}</td>
                <td className="titles">{c.email}</td>
                <td className="titles">{c.phone}</td>
                <td>
                  <button onClick={() => onDelete(c.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default ContactList;
