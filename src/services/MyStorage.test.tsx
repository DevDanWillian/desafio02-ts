import {
  changeLocalStorage,
  createLocalStorage,
  getAllLocalStorage,
} from "./MyStorage";

const dioBank = {
  login: false,
};

describe("MyStorage", () => {
  const mockSetItem = jest.spyOn(Storage.prototype, "setItem");
  const mockGetItem = jest.spyOn(Storage.prototype, "getItem");

  it("Deve retermar o objeto no localStorage com a chave dio_bank", () => {
    getAllLocalStorage();
    expect(mockGetItem).toHaveBeenCalledWith("dio_bank");
  });

  it("Deve criar o obj no localStorage", () => {
    createLocalStorage();
    expect(mockSetItem).toHaveBeenCalledWith(
      "dio_bank",
      JSON.stringify(dioBank)
    );
  });

  it("Deve alterar o valor do objeto no localStorage", () => {
    changeLocalStorage(dioBank);
    expect(mockSetItem).toHaveBeenCalledWith(
      "dio_bank",
      JSON.stringify(dioBank)
    );
  });
});
