import { ContentHeader } from "../../components/ContentHeader"
import { SelectInput } from "../../components/SelectInput"
import { HistoryFinanceCard } from "../../components/HistoryFinanceCard"
import { Container, Content } from "./styles"

export const List: React.FC = () => {

  const options = [
    { value: 'Leonardo', label: 'Leonardo' },
    { value: 'Maria', label: 'Maria' },
    { value: 'Ana', label: 'Ana' }
  ]

  return (
    <Container>
      <ContentHeader title="Saídas" lineColor="#E44C4E">
        <SelectInput options={options} />
      </ContentHeader>

      <Content>
        <HistoryFinanceCard  
          tagColor="#E44C4E"
          title="Conta de luz"
          subTitle="01/03/2023"
          amount="R$ 130,00"
        />
      </Content>
    </Container>
  )
}