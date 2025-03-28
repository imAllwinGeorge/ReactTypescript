import React from 'react'
type StylingProps = {
    styles: React.CSSProperties
}
export const Styling = (props: StylingProps) => {
  return (
    <div style={props.styles} >Styling</div>
  )
}
