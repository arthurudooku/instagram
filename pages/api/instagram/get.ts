// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

const handler = (req: NextApiRequest, res: NextApiResponse<Data>) => {
  let result: Object = {}

  fetch('https://graph.facebook.com', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    },
    body: JSON.stringify({ query: '{ hello }' })
  })
    .then((r) => r.json())
    .then((data) => {
      result = data
      console.log('data returned:', data)
    })

  res.status(200).json(result)
}

export default handler
