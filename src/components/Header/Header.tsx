import { AppContext } from "../AppContext";

import React, { useContext } from "react";
import { Route, Routes, Link, useNavigate } from "react-router-dom";
import { Flex, Box, Button, ChakraProvider, Text } from "@chakra-ui/react";
import { changeLocalStorage } from "src/services/MyStorage";

export const Header = () => {
  const { isLoggedIn, setIsLoggedIn } = useContext(AppContext);
  const navigate = useNavigate();

  const logout = () => {
    changeLocalStorage({ login: false });
    setIsLoggedIn(false);
    navigate("/");
  };

  return (
    <ChakraProvider>
      <Box
        className="header"
        justifyContent={"space-between"}
        justifyItems={"center"}
        color={"purple.500"}
        bg={"pink.300"}
      >
        <Text fontSize={"5em"}  paddingBottom={0}>Dio Bank</Text>
        <Flex paddingBottom={4}>
          <Link to="/">
            <Button margin={"2"}>Home</Button>
          </Link>

          {isLoggedIn && (
            <>
              <Link to={"/conta/:id"}>
                <Button margin={"2"}>Conta</Button>
              </Link>
              <Link to={"/containfo/:id"}>
                <Button margin={2}>Informações</Button>
              </Link>

              <Button margin={"2"} onClick={() => logout()}>Sair</Button>
            </>
          )}
        </Flex>
      </Box>
    </ChakraProvider>
  );
};
