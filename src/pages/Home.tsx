import React, {
  useContext,
  useState,
  KeyboardEventHandler,
} from "react";
import { ChakraProvider, Box, Center, Input } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

import { Login } from "../services/Login";
import { AppContext } from "src/components/AppContext";
import { changeLocalStorage } from "src/services/MyStorage";

import { Botao } from "../components/Botao";
import { Card } from "../components/Card";


export const Home = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>('')
  const { setIsLoggedIn } = useContext(AppContext);
  const [show] = useState<boolean>(false);
  const navigate = useNavigate();

  const validateUser = async (email: string, password:string) => {
    if ((!email && !password) || (email && !password)) {
      return alert("Algo inesperado aconteceu");
    }
    const loggedIn = await Login(email, password);
    if(!loggedIn){
      return ('Dado incorreto')
    }

    setIsLoggedIn(true);
    changeLocalStorage({ login: true });
    navigate("/conta/1");
  };

  const enterLogin: KeyboardEventHandler<HTMLInputElement> = (event) => {
    if (event.key === "Enter") {
      if (!email && !password) {
        return alert("Dados Incorretos");
      }
      validateUser(email, password);
    }
  };

  

  return (
    <ChakraProvider>
      <Box minHeight="100vh" bg={"purple.500"}>
        <Card>
          <Box backgroundColor="#FFFFFF" borderRadius="25px" padding="15px">
            <Center>
              <h1>Faça o login</h1>
            </Center>
            <Input
              onKeyDown={enterLogin}
              id="inputEmail "
              placeholder="email"
              onChange={(event) => {
                setEmail(event.target.value);
                console.log(email);
              }}
            />
            <Input onKeyDown={enterLogin}
              id="inputPassword"
              placeholder="password"
              type={show ? 'text' : 'password'}
              onChange={(event) => {
                setPassword(event.target.value);
                console.log('password read');
              }}
             />
            <Botao onClick={() => validateUser(email, password)}/>
          </Box>
        </Card>
      </Box>
    </ChakraProvider>
  );
};
