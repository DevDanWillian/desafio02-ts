import React from "react";
import { useState } from "react";

import { ChakraProvider, Box, Center, Input } from "@chakra-ui/react";
import { Botao } from "./Botao";

export const Card = ({children}:any) => {

  return (
    <ChakraProvider>
      <Box padding="25px">
      {children}
      </Box>
    </ChakraProvider>
  );
};
