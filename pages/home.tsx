import styled from 'styled-components'
import { Button } from 'antd'
import { useEffect, useState, useCallback, useRef } from 'react'
import { io } from 'socket.io-client'

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

  useEffect((): any => {
    const socket = io({path: '/api/socketio'})
    socket.on('connect', ()=>{
      console.log('SOCKET CONNECTED!', socket.id)
    })
    if(socket) return () => socket.disconnect()
  }, [])

  return (
    <>
      <MyButton>MyButton</MyButton>
      <NewButton>AntdButton</NewButton>
    </>
  )
}


export default Home