import React from "react";

import { ChakraProvider, Box, } from "@chakra-ui/react";


export const Card = ({children}:any) => {

  return (
    <ChakraProvider>
      <Box padding="25px">
      {children}
      </Box>
    </ChakraProvider>
  );
};
