import { useEffect, useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { api } from "../api";
import {
  ChakraProvider,
  Center,
  SimpleGrid,
  Spinner,
} from "@chakra-ui/react";

import { CardInfo } from "../components/CardInfo";
import { AppContext } from "../components/AppContext";
import {conta} from '../api'

interface IUserData {
  name: string;
  email: string;
  password: string;
  data: number;
  balance: number;
  id: string;
}

export const Conta = () => {
  
  const [userData, setUserData] = useState<IUserData>();

  const { id } = useParams();
  const navigate = useNavigate();
  if (userData && id !== userData.id) {
    navigate(`/`);
  }

  const { isLoggedIn } = useContext(AppContext);
;
  useEffect(() => {
    const getData = async () => {
      const data: any | IUserData = await api;
      setUserData(data);
    };
    getData();
  }, []);
!isLoggedIn && navigate("/")

  const actualDate = new Date();
  
  return (
    <ChakraProvider>
      <Center>
        <SimpleGrid columns={2} spacing={8} paddingTop={8}>
          {userData === undefined || userData === null ? (
            <Center>
              <Spinner />
            </Center>
          ) : (
            <>
              <CardInfo
                mainContent={`Bem vindo ${conta.nome}`}
                content={`${actualDate.getDate()} / ${
                  actualDate.getMonth() + 1
                } / ${actualDate.getFullYear()} ${actualDate.getHours()}:${actualDate.getMinutes()}`}
              />
              <CardInfo
                mainContent="Saldo"
                content={`R$ ${userData.balance}`}
              />
            </>
          )}
        </SimpleGrid>
      </Center>
    </ChakraProvider>
  );
};
