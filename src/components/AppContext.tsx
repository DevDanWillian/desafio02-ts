import React, { createContext, useEffect, useState } from "react";

import { Conta } from "../pages/Conta";
import { api } from "src/api";
import { getAllLocalStorage, createLocalStorage } from "src/services/MyStorage";
import { Login } from "src/services/Login";

interface IAppContext {
  user: string;
  isLoggedIn: boolean;
  setIsLoggedIn: (isLoggedIn: boolean) => void;
}

export const AppContext = createContext({} as IAppContext);

export const AppContextProvider = ({ children }: any) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  const storagelogin = getAllLocalStorage();
  useEffect(() =>{
      if (storagelogin) {
    const { login } = JSON.parse(storagelogin);
    setIsLoggedIn(login);
  }
  }, [])


  const user = "Teste";

  return (
    <AppContext.Provider value={{ user, isLoggedIn, setIsLoggedIn }}>
      {children}
    </AppContext.Provider>
  );
};
