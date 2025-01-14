import { ChakraProvider, Box, Center,Input } from "@chakra-ui/react";
import { Botao } from "./Botao";

export const Card = () => {
  return (
    <ChakraProvider>
      <Box minHeight="100vh" backgroundColor="#9413dc" padding="25px">
        <Box backgroundColor="#FFFFFF" borderRadius="25px" padding="15px">
          <Center>
            <h1>Faça o login</h1>
          </Center>
          <Input placeholder="Email" />
          <Input placeholder="Password" />
          <Botao />
        </Box>
      </Box>
    </ChakraProvider>
  );
};
