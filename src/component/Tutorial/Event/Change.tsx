import React from 'react'
type ChangeProps = {
    handleChange:(event: React.ChangeEvent<HTMLInputElement>) => void
    value: string
}

export const Change = (props: ChangeProps) => {
  return (
    <div>
        <input type="text" value={props.value} onChange={props.handleChange} />
    </div>
  )
}
