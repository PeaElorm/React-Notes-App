import { RiSearch2Line } from "react-icons/ri";
import { MdClose } from "react-icons/md";
import { Link } from "react-router-dom";
import { BsPlusLg } from "react-icons/bs";
import NoteItem from "../components/NoteItem";
import { useEffect, useState } from "react";

const Notes = ({notes}) => {

  const [showSearch, setShowSearch] = useState(false);
  const [text, setText] = useState("");
  const [filteredNotes, setFilteredNotes] = useState(notes)
  
  const handleSearch = () => {
    setFilteredNotes(notes.filter(note => {
      if (note.title.toLowerCase().match(text.toLocaleLowerCase())) {
        return note;
      }
    }))
  }

  // useEffect(handleSearch), [text]
 
  return (
    <section className="main-container">
      <header className="notes__header">
        {!showSearch && <h2>My Notes</h2>}
        {showSearch && (
          <input
            type="text"
            value={text}
            onChange={(e) => {
              setText(e.target.value);
              handleSearch();
            }}
            autoFocus
            placeholder="keyword..."
          />
        )}
        <button
          className="btn search-btn"
          onClick={() => setShowSearch((prevState) => !prevState)}
        >
          {showSearch ? < MdClose/> : <RiSearch2Line />}
        </button>
      </header>
      <div className="notes__container">
        {filteredNotes.length == 0 && <p className="empty__notes">No notes found</p>}
        {filteredNotes.map((note) => {
          return <NoteItem key={note.id} note={note} />;
        })}
      </div>
      <Link to="/create-note" className="btn add__btn">
        <BsPlusLg />
      </Link>
    </section>
  );
};

export default Notes;