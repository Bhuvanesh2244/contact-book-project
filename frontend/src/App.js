// src/App.js
import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import Form from "./components/Form";
import ContactList from "./components/ContactList";
import Pagination from "./components/Pagination";
import "./App.css";

function App() {
  const [contacts, setContacts] = useState([]);
  const [page, setPage] = useState(1);
  const [limit] = useState(5); // contacts per page
  const [total, setTotal] = useState(0);

  // Backend URL from environment variable
  const BASE_URL = process.env.REACT_APP_API_URL;

  // Fetch contacts
  const fetchContacts = useCallback(async () => {
    try {
      const res = await axios.get(
        `${BASE_URL}/contacts?page=${page}&limit=${limit}`
      );
      setContacts(res.data.contacts);
      setTotal(res.data.total);
    } catch (err) {
      console.error("Error fetching contacts:", err.message);
    }
  }, [page, limit, BASE_URL]);

  useEffect(() => {
    fetchContacts();
  }, [fetchContacts, page]);

  // Add contact
  const addContact = async (contact) => {
    try {
      await axios.post(`${BASE_URL}/contacts`, contact);
      fetchContacts(); // refresh list
    } catch (err) {
      console.error("Error adding contact:", err.message);
    }
  };

  // Delete contact
  const deleteContact = async (id) => {
    try {
      await axios.delete(`${BASE_URL}/contacts/${id}`);
      fetchContacts(); // refresh list
    } catch (err) {
      console.error("Error deleting contact:", err.message);
    }
  };

  return (
    <div className="container">
      <h1 className="heading">Contact Book</h1>
      <Form onAdd={addContact} />
      <ContactList contacts={contacts} onDelete={deleteContact} />
      <Pagination
        page={page}
        total={total}
        limit={limit}
        onPageChange={setPage}
      />
    </div>
  );
}

export default App;
