import React, { createContext } from 'react'
import { theme } from './theme'
type ThemeContextProviderProps = {
    children: React.ReactNode
}


export const Themecontext = createContext(theme)

export const ThemecontextProvider = ({children}: ThemeContextProviderProps) => {
  return (
    <Themecontext.Provider value={theme}>{children}</Themecontext.Provider>
  )
}
