import React from 'react'
import IncrementalSearchBox from 'incremental-search'

const App = () => {
  React.useEffect(() => {
    fetch('https://api.coingecko.com/api/v3/coins/list')
      .then((data: Response) => {
        return data.json()
      })
      .then((data) => setCoins(data.map((data: any) => data.name)))
  }, [])
  const [coins, setCoins] = React.useState([])

  return (
    <div
      style={{
        padding: '40px',
        display: 'flex',
        // justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        height: '100vh'
      }}
    >
      <h1>Search your favorite coin:</h1>
      <IncrementalSearchBox options={coins} style={undefined} />
    </div>
  )
}

export default App
