import * as Dialog from "@radix-ui/react-dialog";

import dtMoneyLogo from "../../assets/dt-money-logo.svg";
import { NewTranscationModal } from "../new-transaction-modal";
import { HeaderContainer, HeaderContent, NewTranscationButton } from "./styles";

export const Header = () => {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={dtMoneyLogo} alt="" />

        <Dialog.Root>
          <Dialog.Trigger asChild>
            <NewTranscationButton>Nova transação</NewTranscationButton>
          </Dialog.Trigger>

          <NewTranscationModal />
        </Dialog.Root>
      </HeaderContent>
    </HeaderContainer>
  );
};
