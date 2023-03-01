import { ContentHeader } from "../../components/ContentHeader"
import { SelectInput } from "../../components/SelectInput"
import { Container } from "./styles"

export const List: React.FC = () => {

  const options = [
    { value: 'Leonardo', label: 'Leonardo' },
    { value: 'Maria', label: 'Maria' },
    { value: 'Ana', label: 'Ana' }
  ]

  return (
    <Container>
      <ContentHeader title="Lists" lineColor="#E44C4E">
        <SelectInput options={options} />
      </ContentHeader>
    </Container>
  )
}