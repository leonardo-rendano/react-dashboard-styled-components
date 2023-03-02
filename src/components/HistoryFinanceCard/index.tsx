import { Container, Tag } from "./styles"

interface IHistoryFinanceCard {
  tagColor: string,
  title: string,
  subTitle: string,
  amount: string
}

export const HistoryFinanceCard: React.FC<IHistoryFinanceCard> = ({
  tagColor, title, subTitle, amount
}) => {
  return (
    <Container>
      <Tag color={tagColor} />
      <div>
        <span>{title}</span>
        <small>{subTitle}</small>
      </div>
      <h3>{amount}</h3>
    </Container>
  )
}