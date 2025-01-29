interface IDioBank {
  login: boolean;
}

const dioBank: IDioBank = {
  login: false,
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
