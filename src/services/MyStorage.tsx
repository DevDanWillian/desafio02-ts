interface IDioBank {
  logar: boolean;
}

const dioBank: IDioBank = {
  logar: false,
};

export const getAllLocalStorage = (): string | null => {
  return localStorage.getItem("dio_bank");
};

export const createLocalStorage = (): void => {
  localStorage.setItem("dio_bank", JSON.stringify(dioBank));
};

export const changeLocalStorage = (dioBank: IDioBank) => {
  localStorage.setItem("dio_bank", JSON.stringify(dioBank));
};
