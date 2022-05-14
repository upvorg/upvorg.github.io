import React from 'react'

export const UserContext = React.createContext<R.User | null>(null)

export const useUserStore = () => React.useContext(UserContext)

UserContext.displayName = 'UserContext'
