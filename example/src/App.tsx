import React, { useState } from 'react'
import IncrementalSearchBox from 'incremental-search'
import { LineChart, XAxis, YAxis, CartesianGrid, Line } from 'recharts'

const App = () => {
  React.useEffect(() => {
    fetch('https://api.coingecko.com/api/v3/coins/list')
      .then((data: Response) => {
        return data.json()
      })
      .then((data) => setCoins(data))
  }, [])

  const [coins, setCoins] = React.useState([])
  const [selectedOption, setSelectedOption] = useState<{
    name: string
    symbol: string
    id: string
  } | null>(null)

  const [priceData, setPriceData] = useState([])

  React.useEffect(() => {
    if (selectedOption === null) {
      return
    }

    fetch(
      `https://api.coingecko.com/api/v3/coins/${selectedOption.id}/market_chart?vs_currency=usd&days=30`
    )
      .then((data: Response) => {
        return data.json()
      })
      .then((data) => setPriceData(data.prices))
  }, [selectedOption])

  return (
    <div
      style={{
        display: 'flex',
        height: '100vh'
      }}
    >
      <div
        style={{
          padding: '40px',
          display: 'flex',
          flexDirection: 'column',
          height: '100vh'
        }}
      >
        <h2>Search your favorite crypto:</h2>
        <IncrementalSearchBox
          options={coins}
          dataKey='name'
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
        <h3>Your favorite coin is : {selectedOption && selectedOption.name}</h3>
        {priceData.length !== 0 && (
          <LineChart width={500} height={300} data={priceData}>
            <XAxis dataKey='name' />
            <YAxis />
            <CartesianGrid stroke='#eee' strokeDasharray='5 5' />
            <Line type='monotone' dataKey='1' stroke='#8884d8' dot={false} />
          </LineChart>
        )}
      </div>
    </div>
  )
}

export default App
