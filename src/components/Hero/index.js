import React from 'react'
import { css } from 'emotion'

import { UserContext } from '../../context/userContext'

const Hero = () => {
  return (
    <UserContext.Consumer>
      {({ user }) => (
        <section
          className={css({
            width: '100%',
            background: '#f8f8f8',
            padding: '2rem 0'
          })}
        >
          <div
            className={css({
              margin: '0 auto',
              maxWidth: 960,
              padding: '0 1rem'
            })}
          >
            Hero {user && user.name}
          </div>
        </section>
      )}
    </UserContext.Consumer>
  )
}

export default Hero
