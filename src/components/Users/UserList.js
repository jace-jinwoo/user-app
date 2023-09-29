import { useContext } from "react";
import AuthContext from "../../store/auth-context";
import Card from "../UI/Card";
import classes from "./UserList.module.css";

const UserList = (props) => {
  const authContext = useContext(AuthContext);

  console.log("authContext :: ", authContext);

  return (
    <Card className={classes.users}>
      <ul>
        {props.users.map((user) => (
          <li key={user.id}>
            {user.name} ({user.age} years old)
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UserList;
