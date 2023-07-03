import { useState } from "react";
import { BsSearchHeart } from "react-icons/bs";
import { Link } from "react-router-dom";
import { BsPlusLg } from "react-icons/bs";
import NoteItem from "../components/NoteItem";

const Notes = ({notes}) => {
  //const [note, setNote] = useState([]);

  // const createNewNote = () => {
  //   const newNote = {
  //     id: note.length + 1,
  //     color: generateRandomColor(),
  //   };
  //   setNote((prevNote) => [...prevNote, newNote]);
  // };
  return (
    <section className="main-container">
      <header className="notes__header">
        <h2>My Notes</h2>
        {/* <input type="text" autoFocus placeholder='keyword...' /> */}
        <button className="btn search-btn">
          <BsSearchHeart />
        </button>
      </header>
      <div className="notes__container">
        {notes.map((note) => {
          return <NoteItem key={note.id} note={note} />;
        })}
      </div>
      <Link to="/create-note" className="btn add__btn">
        <BsPlusLg />
      </Link>
      {/* <footer>
        <h3>Developed by Perfect Elorm Avugla</h3>
      </footer> */}
    </section>
  );
};

export default Notes;