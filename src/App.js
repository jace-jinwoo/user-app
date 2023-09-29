import React, { useState } from "react";
import AddUser from "./components/Users/AddUser";
import UserList from "./components/Users/UserList";
import AddUserValidation from "./components/Users/AddUserValidation";
import AuthContext, { AuthContextProvider } from "./store/auth-context";

function App() {
  const [userList, setUserList] = useState([]);

  const addUserHandler = (uName, uAge) => {
    setUserList((prevUserList) => {
      return [
        ...prevUserList,
        { id: Math.random().toString(), name: uName, age: uAge },
      ];
    });
  };

  return (
    <React.Fragment>
      <AddUserValidation onAddUser={addUserHandler} />
      {/* <AddUser onAddUser={addUserHandler} /> */}
      <UserList users={userList} />
    </React.Fragment>
  );
}

export default App;
