import { Link } from "react-router-dom";

const NoteItem = ({ note }) => {
  const predefinedColors = [
    "#ffcc80",
    "##ffab91",
    "#e6ee9b",
    "#80deea",
    "#cf93d9",
    "#f691b3",
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
      <p>{note.date}</p>
    </Link>
  );
};

export default NoteItem;
