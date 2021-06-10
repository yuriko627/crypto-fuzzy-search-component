import React, { useRef } from 'react'
import useHover from './useHover'

interface Props {
  style: React.CSSProperties | undefined
  option: { [key: string]: string }
  onSelect: (optionName: { [key: string]: string }) => void
  dataKey: string
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
      onClick={() => props.onSelect(props.option)}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between'
        }}
      >
        <div>{props.option[props.dataKey]}</div>
      </div>
    </div>
  )
}

export default OptionCard
