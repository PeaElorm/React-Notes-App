import { BrowserRouter, Routes, Route } from "react-router-dom";
import Notes from "./pages/Notes";
import CreateNote from "./pages/CreateNote";
import EditNote from "./pages/EditNote";
// import dummyNotes from "./dummyNotes";

import { useEffect, useState } from 'react';

function App() {

  const [notes, setNotes] = useState(JSON.parse(localStorage.getItem('notes')) || [])
  console.log(notes)

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes))
  }, [notes])
  return (
    <div className="main-container">
      <main id="app">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Notes notes={notes} />} />
            <Route
              path="/create-note"
              element={<CreateNote setNotes={setNotes} />}
            />
            <Route
              path="/edit-note/:id"
              element={<EditNote notes={notes} setNotes={setNotes} />}
            />
          </Routes>
        </BrowserRouter>
        <footer>
          <h3>Developed by Perfect Elorm Avugla</h3>
        </footer>
      </main>
    </div>
  );
}

export default App;
