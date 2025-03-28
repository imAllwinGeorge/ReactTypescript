import React from 'react'

type ChildrenProps = {
    children: React.ReactNode
}

export const ChildrenComponent = (props: ChildrenProps) => {
  return (
    <div>{props.children}</div>
  )
}
