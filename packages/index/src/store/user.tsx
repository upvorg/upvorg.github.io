import React from 'react'

export const UserContext = React.createContext<Record<string, any> | null>(null)

export const useUserStore = () => React.useContext(UserContext)

UserContext.displayName = 'UserContext'
