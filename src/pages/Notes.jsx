import { useState } from "react";
import { BsSearchHeart } from "react-icons/bs";
import dummyNotes from "../dummyNotes";
import { Link } from "react-router-dom";
import { BsPlusLg } from "react-icons/bs";
import NoteItem from "../components/NoteItem";
import randomColor from "randomcolor";

const Notes = () => {
  const [notes, setNotes] = useState([]);

  const generateRandomColor = () => {
    return randomColor();
  };

  const createNewNote = () => {
    const newNote = {
      id: notes.length + 1,
      color: generateRandomColor(),
    };
    setNotes((prevNotes) => [...prevNotes, newNote]);
  };

  return (
    <section>
      <header className="notes__header">
        <h2>My Notes</h2>
        {/* <input type="text" autoFocus placeholder='keyword...' /> */}
        <button className="btn">
          <BsSearchHeart />
        </button>
      </header>
      <div className="notes__container">
        {dummyNotes.map((note) => (
          <NoteItem
            key={note.id}
            note={note}
            style={{ backgroundColor: generateRandomColor() }}
          />
        ))}
      </div>
      <Link className="btn add__btn">
        <BsPlusLg />
      </Link>
    </section>
  );
};

export default Notes;
