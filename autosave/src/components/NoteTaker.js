import React, { useState, useEffect } from "react";

export default function NoteTaker() {
  const [note, setNote] = useState("");

  useEffect(() => {
    const savedNote = localStorage.getItem("savedNote");

    if (savedNote) {
      setNote(savedNote);
    }
  }, []); 

  useEffect(() => {
    localStorage.setItem("savedNote", note);
  }, [note]); 

  return (
    <section className="note-taker">
      <h2>Мои заметки</h2>
      <textarea
        value={note}
        onChange={(e) => setNote(e.target.value)}
        placeholder="Пишите заметки здесь... Содержимое будет автоматически сохранено."
        rows={10}
        cols={50}
      />
      <div className="controls">
        <small>
          Сохранено локально (localStorage) под ключом{" "}
          <code>savedNote</code>.
        </small>
      </div>
    </section>
  );
}