import React, { useRef, useState } from 'react'
import OptionCard from './optionCard'
import Fuse from 'fuse.js'

interface Props {
  style: React.CSSProperties | undefined
  options: any[]
  onSelect: any
}

function IncrementalSearchBox(props: Props) {
  const inputRef = useRef<HTMLInputElement>(null)
  const [searchWords, setSearchWords] = React.useState('')
  const [open, setOpen] = useState(false)
  const fuse = new Fuse(props.options)
  const results = fuse.search(searchWords, { limit: 10 })

  return (
    <div style={{ position: 'relative' }}>
      <input
        ref={inputRef}
        style={{
          backgroundColor: 'white',
          padding: '8px',
          fontSize: '1.2rem',
          border: 'solid 1px gray',
          borderRadius: '8px',
          ...props.style
        }}
        placeholder='ex. Ethereum'
        onChange={(event) => {
          const keyword = event.target.value
          setSearchWords(keyword)
          if (keyword.length !== 0) {
            setOpen(true)
          }
        }}
      />
      {open && (
        <div
          style={{
            position: 'absolute',
            top: '38px',
            width: '225px',
            height: '150px',
            display: 'flex',
            flexDirection: 'column',
            marginTop: '8px',
            overflowY: 'scroll',
            overflowX: 'hidden',
            border: 'solid 1px gray',
            borderRadius: '4px',
            boxShadow: 'lightgrey 0px 1px 4px 1px'
          }}
        >
          {results.map((result) => {
            return (
              <OptionCard
                style={{ width: '209px' }}
                optionName={result.item}
                key={result.item}
                onSelect={(item) => {
                  props.onSelect(item)
                  setOpen(false)
                  ;(inputRef.current as HTMLInputElement).value = item
                }}
              />
            )
          })}
        </div>
      )}
    </div>
  )
}

export default IncrementalSearchBox
export { OptionCard }
