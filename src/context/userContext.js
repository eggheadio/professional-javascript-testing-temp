import React from 'react'

export const UserContext = React.createContext({
  authenticated: false,
  user: {}
})
