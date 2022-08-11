import { Header } from "../../components/header";
import { Summary } from "../../components/summary";
import { SearchForm } from "./search-form";
import {
  PriceHighlight,
  TransactionsContainer,
  TransactionsTable,
} from "./styles";

export const Transactions = () => {
  return (
    <div>
      <Header />
      <Summary />

      <TransactionsContainer>
        <SearchForm />

        <TransactionsTable>
          <tbody>
            <tr>
              <td width="50%">Desenvolvimento de site</td>
              <PriceHighlight variant="income">R$ 12.000,00</PriceHighlight>
              <td>Venda</td>
              <td>13/04/2022</td>
            </tr>
            <tr>
              <td width="50%">Desenvolvimento de site</td>
              <PriceHighlight variant="outcome">R$ 12.000,00</PriceHighlight>
              <td>Venda</td>
              <td>13/04/2022</td>
            </tr>
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </div>
  );
};
