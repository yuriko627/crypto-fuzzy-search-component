import React from 'react'
import OptionCard from './optionCard'
import Fuse from 'fuse.js'

interface Props {
  style: React.CSSProperties | undefined
  options: any[]
}

function IncrementalSearchBox(props: Props) {
  const [searchWords, setSearchWords] = React.useState('')
  const fuse = new Fuse(props.options)
  const results = fuse.search(searchWords)

  return (
    <div>
      <input
        style={{
          backgroundColor: 'white',
          padding: '8px',
          fontSize: '1.2rem',
          border: 'solid 1px gray',
          borderRadius: '8px',
          ...props.style
        }}
        placeholder='ex. Ethereum'
        onChange={(event) => setSearchWords(event.target.value)}
      />
      <div
        className='optionCardContainer'
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
          {/* 最初からoptions(coin names)が表示されてて選択できるようにしたい */}
          {/* 選択したらvalueにselected coinが入り、表示されるようにしたい */}
          {results.map((result) => {
            return (
              <OptionCard
                style={{ width: '400px' }}
                optionName={result.item}
                key={result.item}
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default IncrementalSearchBox
export { OptionCard }
