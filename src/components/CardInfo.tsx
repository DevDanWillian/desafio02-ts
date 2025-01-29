import React from "react";
import { ChakraProvider, Box, Text } from "@chakra-ui/react";

interface ICardInfo {
  mainContent: string;
  content: string;
}

export const CardInfo = ({ mainContent, content }: ICardInfo) => {
  return (
    <ChakraProvider>
      <Box
        bg="white"
        minHeight={"10em"}
        minWidth={"21em"}
        borderRadius={20}
        padding={8}
      >
        <Text fontSize='2x1' fontWeight={'bold'}>{mainContent}</Text>
        <Text fontSize={'2x1'}>{content}</Text>
      </Box>
    </ChakraProvider>
  );
};
