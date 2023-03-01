import { ReactNode } from 'react'
import { Container } from './styles'

interface IContent {
  children: ReactNode
}

export const Content: React.FC<IContent> = ({ children }) => {
  return (
    <Container>
      {children}
    </Container>
  )
}