import { useState, createContext } from 'react'

export const AppCtx = createContext({})

export default function CtxProvider({ children }) {

  
  const [ testeCtx, setTesteCtx ] = useState('tese')

  return (
    <>
    <AppCtx.Provider value={{
        testeCtx, setTesteCtx
      }} >
        { children }
      </AppCtx.Provider>
    </>
  )
}