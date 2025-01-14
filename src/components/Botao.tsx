import { login } from '../services/login';

import {Button} from '@chakra-ui/react'

export const Botao = () => {
  return (
            <Button onClick={login} colorScheme='teal' size='sm' width='100%' marginTop='5px'>
              Button
            </Button>
  )
}