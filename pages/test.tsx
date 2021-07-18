const Test = () => {
  let result = null
  const appId = 785462762144570
  const scopes = 'user_profile,user_media,instagram_basic'
  const authUrl = `https://api.instagram.com/oauth/authorize
  ?client_id=${appId},
  &redirect_uri=https://arthur-local-tests.ngrok.io/ok,
  &response_type=code,
  &scope=${scopes}`

  //https://graph.facebook.com/785462762144570/media

  console.log(authUrl)
  fetch(authUrl)
    .then((r) => r.json())
    .then((data) => {
      result = data
      console.log('data returned:', data)
    })

  //   fetch('https://graph.facebook.com/785462762144570/media', {
  //   method: 'GET',
  //   headers: {
  //     'Content-Type': 'application/json',
  //     Accept: 'application/json'
  //   },
  //   body: JSON.stringify({ query: '{ hello }' })
  // })
  //   .then((r) => r.json())
  //   .then((data) => {
  //     result = data
  //     console.log('data returned:', data)
  //   })

  return <div>Test</div>
}

export default Test
