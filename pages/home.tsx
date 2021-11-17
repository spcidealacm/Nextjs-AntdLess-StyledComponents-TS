import styled from 'styled-components'
import { Button } from 'antd'

const MyButton = styled.button`
  padding: 10px;
  margin: 10px;
  border: 1px solid #888;
  border-radius: 50%;
  width: 10rem;
  height: 10rem;
  font-size: 16px;
`
const NewButton = styled(Button)`
  font-size: 16px;
  width: 10rem;
  height: 10rem;
`

const Home = () => {
  return (
    <>
      <MyButton>MyButton</MyButton>
      <NewButton>AntdButton</NewButton>
    </>
  )
}


export default Home