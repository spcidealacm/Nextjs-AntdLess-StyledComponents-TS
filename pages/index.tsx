import styled from 'styled-components'
import { ThemeContext } from 'styled-components'
import { useContext } from 'react'

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.theme_color[0]};
`

const Button = styled.button`
  font-size: 30px;
  color: ${({ theme }) => theme.theme_color[0]};
`

export default function Home() {
  const themeContext = useContext(ThemeContext);
  return (
    <>
      <Title>Title</Title>
      <Button onClick={() => themeContext.changeTheme()}>Change</Button>
    </>
  )
}