import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

import { useSelector } from "react-redux";
import { selectUserById } from "./usersApiSlice";

function User({ userId }) {
  const user = useSelector((state) => selectUserById(state, userId));

  const navigate = useNavigate();

  let handleEdit;
  let userRolesString;
  let cellStatus;

  if (user) {
    handleEdit = () => navigate(`/dash/users/${userId}`);

    userRolesString = user.roles.toString().replaceAll(",", ", ");

    cellStatus = user.active ? "" : "table__cell--inactive";
  } else return null;

  return (
    <tr className="table__row user">
      <td className={`table__cell ${cellStatus}`}> {user.username} </td>
      <td className={`table__cell ${cellStatus}`}> {userRolesString} </td>
      <td className={`table__cell ${cellStatus}`}>
        <button className="icon-button table__button" onClick={handleEdit}>
          <FontAwesomeIcon icon={faPenToSquare} />
        </button>
      </td>
    </tr>
  );
}

export default User;
