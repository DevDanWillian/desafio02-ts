import { Text, Box } from "@chakra-ui/react";
import { conta } from "src/api";

export const ContaInfo = () => {
  return (
    <Box
      justifyContent={"flex-start"}
      borderRadius={10}
      bg={"purple.200"}
      margin={4}
      paddingInline={"30%"}
      paddingBottom={"5%"}
    >
      <Box justifySelf={"left"}>
        <Text fontSize={"3xl"} fontWeight={"bold"}>
          Informações da Conta:
        </Text>
        <Text fontSize={"2xl"}>Bem vindo {conta.nome}</Text>
        <Text fontSize={"md"}>Seu Email é: {conta.email}</Text>
        <Text fontSize={"md"}>Saldo: R$ {conta.balance.toFixed(2)}</Text>
        <Text fontSize={'md'}>Seu ID é : {conta.id}</Text>
      </Box>
    </Box>
  );
};
