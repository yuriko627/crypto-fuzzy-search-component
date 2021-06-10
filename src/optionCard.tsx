import React from 'react'

interface Props {
  style: React.CSSProperties | undefined
  optionName: string
}

function OptionCard(props: Props) {
  return (
    <div
      style={{
        margin: '10px',
        padding: '8px',
        border: 'solid 1px gray',
        borderRadius: '4px',
        height: '30px',
        textAlign: 'center',
        boxShadow: '4px 4px 8px 0px black',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        ...props.style
      }}
    >
      {props.optionName}
    </div>
  )
}

export default OptionCard
