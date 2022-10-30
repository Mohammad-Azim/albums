import React, { useState, useContext } from "react";

const LoginContext = React.createContext();
const LoginUpdateContext = React.createContext();

export function useLogin() {
  return useContext(LoginContext);
}

export function useLoginUpdate() {
  return useContext(LoginUpdateContext);
}

export function LoginProvider({ children }) {
  const [IsLogedIn, setIsLogedIn] = useState(false);

  function toggleLogin(action) {
    if (action === "LOGIN") {
      setIsLogedIn(true);
    } else {
      setIsLogedIn(false);
    }
  }

  return (
    <LoginContext.Provider value={IsLogedIn}>
      <LoginUpdateContext.Provider value={toggleLogin}>
        {children}
      </LoginUpdateContext.Provider>
    </LoginContext.Provider>
  );
}
