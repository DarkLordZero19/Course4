import React, { useContext, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { contacts } from "../contacts";
import { FavoritesContext } from '../context/FavoritesContext';
import "../App.css";

function ContactDetailPage() {
    const { contactId } = useParams();
    const idNum = parseInt(contactId, 10);
    const contact = contacts.find(c => c.id === idNum)
    const { favoriteIds, toggleFavorite } = useContext(FavoritesContext);
    useEffect(() => {
        if (contact) document.title = contact.name;
        return () => { document.title = 'Сайт Контактов'};
    }, [contact]);

    if (!contact){
        return (
            <div className="page">
                <h2>Контакт не был найден</h2>
                <Link to="/contacts">Вернуться к списку</Link>
            </div>
        );
    }

    const isFav = favoriteIds.includes(contact.id);
    return (
        <div className="page">
            <h2>{contact.name}</h2>
            <p><strong>Контакт:</strong> {contact.phone} </p>
            <p><strong>Email:</strong> {contact.email} </p>

            <button className="fav-button" onClick={() => toggleFavorite(contact.id)}>
                {isFav ? 'Удалить из избранного' : 'Добавить в избранное'}
            </button>

            <div className="back-link">
                <Link to="/contacts">Вернуться к списку</Link>
            </div>
        </div>
    );
}

export default ContactDetailPage;