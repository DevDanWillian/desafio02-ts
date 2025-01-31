import React, { createContext, useEffect, useState } from "react";

import { getAllLocalStorage, } from "src/services/MyStorage";

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
    const { logar } = JSON.parse(storagelogin);
    setIsLoggedIn(logar);
  }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])


  const user = "Teste";

  return (
    <AppContext.Provider value={{ user, isLoggedIn, setIsLoggedIn }}>
      {children}
    </AppContext.Provider>
  );
};
