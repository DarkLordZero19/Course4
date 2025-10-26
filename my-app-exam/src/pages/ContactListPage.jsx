import React from "react";
import { Link } from "react-router-dom";
import { contacts } from "../contacts";
import "../App.css";

function ContactListPage() {
    return (
        <div className="page">
            <h2>Список контактов</h2>
            <ul className="contact-list">
                {contacts.map((contact) => (
                <li key={contact.id}>
                    <Link to={`/contacts/${contact.id}`}>{contact.name}</Link>
                </li>
                ))}
            </ul>
        </div>
    );
}

export default ContactListPage;