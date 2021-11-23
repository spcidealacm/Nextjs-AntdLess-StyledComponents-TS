import type { NextApiRequest, NextApiResponse} from 'next'

import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async function handler (req: NextApiRequest, res: NextApiResponse){
  if( req.method === 'GET'){
    const contacts = await prisma.contact.findMany();
    res.status(200).json({contacts})
  }else{
    return res.status(405).json({ message: 'Method not allowed'})
  }
}