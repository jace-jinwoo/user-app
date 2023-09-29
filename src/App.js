import React, { useState } from "react";
import AddUser from "./components/Users/AddUser";
import UserList from "./components/Users/UserList";
import AddUserValidation from "./components/Users/AddUserValidation";
import AuthContext from "./store/auth-context";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [userList, setUserList] = useState([]);

  const loginHandler = () => {
    localStorage.setItem("isLoggedIn", "SECRET_KEY");
    setIsLoggedIn(true);
  };
  const logoutHandler = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
  };

  const addUserHandler = (uName, uAge) => {
    setUserList((prevUserList) => {
      return [
        ...prevUserList,
        { id: Math.random().toString(), name: uName, age: uAge },
      ];
    });
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, onLogout: logoutHandler }}>
      <AddUserValidation onAddUser={addUserHandler} />
      {/* <AddUser onAddUser={addUserHandler} /> */}
      <UserList users={userList} />
    </AuthContext.Provider>
  );
}

export default App;
