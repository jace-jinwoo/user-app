import React, { useState } from "react";
import AddUser from "./components/Users/AddUser";
import UserList from "./components/Users/UserList";
import AddUserValidation from "./components/Users/AddUserValidation";

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
    <div>
      <AddUserValidation onAddUser={addUserHandler} />
      {/* <AddUser onAddUser={addUserHandler} /> */}
      <UserList users={userList} />
    </div>
  );
}

export default App;
