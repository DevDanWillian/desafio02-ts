import React from "react";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider, Box} from "@chakra-ui/react";


import { Layout } from "./components/Layout";
import { AppContextProvider } from "./components/AppContext";
import { MainRoutes } from "./services/routes";
import { createLocalStorage, getAllLocalStorage } from "./services/MyStorage";

function App() {

!getAllLocalStorage() && createLocalStorage()



console.log(getAllLocalStorage())

  return (
    <BrowserRouter>
      <AppContextProvider>
        <ChakraProvider>
          <Box bg={'purple.500'} minHeight="100vh">
            <Layout>
              <MainRoutes/>
            </Layout>
          </Box>
        </ChakraProvider>
      </AppContextProvider>
    </BrowserRouter>
  );
}

export default App;
