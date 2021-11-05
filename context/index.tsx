import { createContext, useState } from "react"

export interface IContext {
  firstLoad: boolean
}

export interface IRootContext {
  context: IContext
  setContext: (state: IContext) => void
}

export const RootContext = createContext<IRootContext>({
  context: {
    firstLoad: true,
  },
  setContext: (state: IContext) => {
    return state
  },
})

export const ContextProvider: React.FC<React.ReactNode> = ({ children }) => {
  const [context, setContext] = useState<IContext>({
    firstLoad: true,
  })

  return (
    <RootContext.Provider value={{ context, setContext }}>
      {children}
    </RootContext.Provider>
  )
}
