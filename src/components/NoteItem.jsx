import { Link } from "react-router-dom";

const NoteItem = ({ note }) => {
  const predefinedColors = [
    "#ffc182",
    "#e3acac",
    "#e9c4c7",
    "#ba1bc0",
    "#436953",
    "#9592f5",
  ];

  const generateRandomColor = () => {
    const randomIndex = Math.floor(Math.random() * predefinedColors.length);
    return predefinedColors[randomIndex];
  };

  const backgroundColor = generateRandomColor();

  return (
    <Link
      to={`/edit-note/${note.id}`}
      className="note"
      style={{ backgroundColor }}
    >
      <h4>
        {note.title.length > 40 ? note.title.substr(0, 30) + "..." : note.title}
      </h4>
      <p>{note.details.length > 20 ? note.details.substr(0, 20) + "..." : note.details}</p>
      <p>{note.date}</p>
    </Link>
  );
};

export default NoteItem;
