import React, { useRef } from 'react'
import useHover from './useHover'

interface Props {
  style: React.CSSProperties | undefined
  optionName: string
  onSelect: (optionName: string) => void
  key: string
}

function OptionCard(props: Props) {
  const hoverRef = useRef(null)
  const isHover = useHover(hoverRef)
  const hoverStyle = isHover
    ? {
        backgroundColor: '#fff3f2'
      }
    : {}

  return (
    <div
      ref={hoverRef}
      className='option-card'
      style={{
        padding: '8px',
        borderBottom: 'solid 1px lightgray',
        height: '30px',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        cursor: 'pointer',
        ...hoverStyle,
        ...props.style
      }}
      onClick={() => props.onSelect(props.optionName)}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between'
        }}
        key={props.key}
      >
        <div>{props.optionName}</div>
      </div>
    </div>
  )
}

export default OptionCard
