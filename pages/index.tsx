import styled from 'styled-components'
import { ThemeContext } from 'styled-components'
import { useContext, useState, useEffect } from 'react'
import useSWR from 'swr'
import { Tabs } from 'antd'
import { fetcher } from 'utils'
const { TabPane } = Tabs


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
  const { data, error } = useSWR('/api/tab', fetcher)
  const [ tabList, setTabList ] = useState<JSX.Element[]>()

  useEffect(() => {
    const tabs: string[] = data?.tabs
    const tabList = tabs?.map((tab, i) => <TabPane tab={tab} key={i}>
      {tab}
    </TabPane>)
    setTabList(tabList)
  }, [data, setTabList])

  if (error) return "An error has occurred"
  if (!data) return "Loading..."

  return (
    <>
      <Title>Title</Title>
      <Button onClick={() => themeContext.changeTheme()}>Change</Button>
      <Tabs>
        {tabList}
      </Tabs>
    </>
  )
}