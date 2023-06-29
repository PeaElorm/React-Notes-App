import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { RiDeleteBin6Fill} from "react-icons/ri"

const EditNote = () => {
  return (
    <section>
      <header className="create-note__header">
        <Link to="/" className="btn">
          <IoIosArrowBack />
        </Link>
        <button className="btn lg primary">Save</button>
        <button className="btn danger"><RiDeleteBin6Fill/></button>
      </header>
      <form className="create-note__form">
        <input type="text" placeholder="Title" autoFocus />
        <textarea rows="28" placeholder="write notes here..."></textarea>
      </form>
    </section>
  );
};

export default EditNote;
