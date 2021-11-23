import { address } from 'utils';
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  ip: {
    address: string
  }
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({
    ip: {
      address: address
    }
  })
}