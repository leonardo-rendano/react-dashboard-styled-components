import { useState } from "react";
import { Container, ToggleLabel, ToggleSelector } from "./styles";


export const Toggle: React.FC = () => {
  const [isChecked, setIsChecked] = useState(false)

  return (
    <Container>
      <ToggleLabel>Light</ToggleLabel>
      <ToggleSelector
        checked={isChecked}
        uncheckedIcon={false}
        checkedIcon={false}
        onChange={() => setIsChecked(!isChecked)}
      />
      <ToggleLabel>Dark</ToggleLabel>
    </Container>
  )
}