import { MouseEventHandler } from 'react';
import {Button} from '@chakra-ui/react'
import { Login } from '../services/Login';

interface BotaoProps {
  onClick: MouseEventHandler
}

export const Botao = ({onClick }: BotaoProps) => {


  return (
            <Button onClick={onClick} colorScheme='teal' size='sm' width='100%' marginTop='5px'>
              Login
            </Button>
  )
}