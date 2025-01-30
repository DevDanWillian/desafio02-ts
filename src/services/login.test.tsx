
import { Logar } from "../services/Logar"

/**jest.mock("react", () => ({
  ...jest.requireActual("react"),
  useContext: () => ({
    setIsLoggedIn: mockSetIsLoggedIn,
  }),
}));

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: jest.fn(),
  }));**/
  

describe("Logar", () => {
  const mockEmail = "test@conta.com";
  const mockPassword = '123456'

  it("Deve exibir um alert com boas vindas caso o email seja válido.", async () => {
    const response = await Logar(mockEmail, mockPassword);

    expect(response).toBeTruthy()
    
  });

  it("Deve exibir um erro caso o email seja inválido", async () => {
    const response = await Logar("invalidEmail", 'invalidKey');
    expect(response).toBeFalsy();
  });
});
