import React from 'react'
import FruitsCard from './fruitsCard'

interface Props {
  style: React.CSSProperties | undefined
  onInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  options: string
}

function IncrementalSearchBox(props: Props) {
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
        onChange={props.onInputChange}
      />
    </div>
  )
}

export default IncrementalSearchBox
export { FruitsCard }
