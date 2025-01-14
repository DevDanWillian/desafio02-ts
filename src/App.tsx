import { Header } from "./components/Header/Header";
import { Card } from "./components/Card";

import { Center, ChakraProvider, Input, Box } from "@chakra-ui/react";

function App() {
  return (
    <ChakraProvider>
      <Header />
      <Card/>
    </ChakraProvider>
  );
}

export default App;
