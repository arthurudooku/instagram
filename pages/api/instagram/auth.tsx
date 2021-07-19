import type { NextApiRequest, NextApiResponse } from 'next'

const appId = 1124350121385716
const scopes = 'user_profile,user_media'
// const authUrl = `https://api.instagram.com/oauth/authorize?client_id=${appId}&redirect_uri=https://arthur-local-tests.ngrok.io/auth/authorize&response_type=code&scope=${scopes}`
const authUrl = `https://www.instagram.com/oauth/authorize?client_id=${appId}&redirect_uri=https://arthur-local-tests.ngrok.io/auth/authorize&response_type=code&scope=${scopes}`


const auth = (req: NextApiRequest, res: NextApiResponse) => {
  if (res.method === 'POST') {
    res.status(200).json({ test: true })
  } else {
    console.log(authUrl);
    res.status(200).json({
      authUrl
    })
  }
}

export default auth