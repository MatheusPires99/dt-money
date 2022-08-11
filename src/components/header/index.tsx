import dtMoneyLogo from "../../assets/dt-money-logo.svg";
import { HeaderContainer, HeaderContent, NewTranscationButton } from "./styles";

export const Header = () => {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={dtMoneyLogo} alt="" />
        <NewTranscationButton>Nova transação</NewTranscationButton>
      </HeaderContent>
    </HeaderContainer>
  );
};
