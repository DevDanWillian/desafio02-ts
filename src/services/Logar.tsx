import { api } from "../api";

export const Logar = async (email: string, password:string): Promise<boolean> => {
  const data: any = await api;

  if ((email !== data.email && password !== data.password) || (email !== data.email || password !==data.password ) ) {
    console.log('sem login')
    return false;
  }
  return true;
};
