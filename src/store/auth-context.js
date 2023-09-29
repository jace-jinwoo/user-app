import React, { useState } from "react";

const AuthContext = React.createContext({
  isLoggedIn: false,
});

export const AuthContextProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const loginHandler = () => {
    localStorage.setItem("isLoggedIn", "SECRET_KEY");
    setIsLoggedIn(true);
  };
  const logoutHandler = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, onLogout: logoutHandler }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
