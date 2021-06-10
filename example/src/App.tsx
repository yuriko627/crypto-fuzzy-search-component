import React, { useState } from 'react'
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
  const [selectedOption, setSelectedOption] = useState('')

  return (
    <div
      style={{
        display: 'flex',
        // justifyContent: 'center',
        // alignItems: 'center',
        height: '100vh'
      }}
    >
      <div
        style={{
          padding: '40px',
          display: 'flex',
          // justifyContent: 'center',
          // alignItems: 'center',
          flexDirection: 'column',
          height: '100vh'
        }}
      >
        <h2>Search your favorite coin:</h2>
        <IncrementalSearchBox
          options={coins}
          style={undefined}
          onSelect={setSelectedOption}
        />
      </div>
      <div
        style={{
          padding: '40px',
          width: '100vh'
        }}
      >
        your favorite coin is: {selectedOption}
      </div>
    </div>
  )
}

export default App
