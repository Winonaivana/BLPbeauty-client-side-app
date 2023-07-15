import { useNavigate } from "react-router-dom";

type Props = {};

const Book = (props: Props) => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };
  return (
    <div>
      <button onClick={handleLogout}>logout</button>
    </div>
  );
};

export default Book;
