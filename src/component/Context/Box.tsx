import { useContext } from 'react'
import { Themecontext } from './Themecontext'

export const Box = () => {
    const theme = useContext(Themecontext)
  return (
    <div style={{background: theme.primary.main, color: theme.primary.text}}>
        Theme Context
    </div>
  )
}
