import type { NextApiRequest, NextApiResponse } from "next"

type Data = {
  tabs: string[];
}

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>){

  res.status(200).json({
    tabs:[
      "Data",
      "Come",
      "From",
      "API",
      "Fetching"
    ]
  })

}