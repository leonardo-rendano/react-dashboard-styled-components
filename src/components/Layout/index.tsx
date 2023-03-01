import { MainHeader } from "../MainHeader"
import { Aside } from "../Aside"
import { Content } from "../Content"
import { Grid } from "./styles"
import { ReactNode } from "react"

interface ILayout {
  children: ReactNode
}

export const Layout: React.FC<ILayout> = ({ children }) => {
  return (
    <Grid>
      <MainHeader />
      <Aside />
      <Content>
        {children}
      </Content>
    </Grid>
  )
}