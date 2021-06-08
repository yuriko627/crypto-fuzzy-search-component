import React from 'react'
import Fuse from 'fuse.js'
import IncrementalSearchBox, { FruitsCard } from 'incremental-search'

const App = () => {
  const [options, setOptions] = React.useState('')
  const [coins, setCoins] = React.useState([])
  console.log(coins)

  React.useEffect(() => {
    fetch('https://api.coingecko.com/api/v3/coins/list')
      .then((data: Response) => {
        return data.json()
      })
      .then((data) => setCoins(data.map((data: any) => data.name)))
  }, [])

  const fuse = new Fuse(coins)
  const results = fuse.search(options)
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        height: '100vh'
      }}
    >
      <h1>Search your favorite coin:</h1>
      <IncrementalSearchBox
        style={{ width: '400px' }}
        onInputChange={(event) => setOptions(event.target.value)}
        options={options}
      />
      <div
        className='fruitsCardContainer'
        style={{ position: 'relative', width: '100%' }}
      >
        <div
          style={{
            position: 'absolute',
            top: '0',
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column'
          }}
        >
          {results.map((result) => {
            return (
              <FruitsCard style={{ width: '400px' }} fruitName={result.item} />
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default App
