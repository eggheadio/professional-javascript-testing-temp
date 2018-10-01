import React from 'react'

export const UserContext = React.createContext({
  authenticated: true,
  user: {
    email: "test@egghead.io"
  }
})
