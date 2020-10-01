import React from 'react'

import { useAxiosMamene } from 'use-axios-mamene'

const App = () => {
  const [data, loading, error] = useAxiosMamene(
    'https://api.kanye.rest/?format=json'
  )

  return (
    <>
      {loading && <div>Loading...</div>}
      {error && <div>Error: {error}</div>}
      {data && <div>Kanye said "{data.quote}"</div>}
    </>
  )
}

export default App
