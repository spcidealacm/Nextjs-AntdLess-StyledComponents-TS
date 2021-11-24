// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest } from 'next'
import { NextApiResponseServerIO } from 'types/next'
import { Server as ServerIO } from 'socket.io'
import { Server as NetServer } from 'http'

export default async function handler(req: NextApiRequest, res: NextApiResponseServerIO){
  if(!res.socket.server.io){
    console.log('New Socket.io Server...')
    const httpServer: NetServer = res.socket.server as any;
    const io = new ServerIO(httpServer, {path: '/api/socketio'})
    res.socket.server.io = io
  }
  res.end();
}