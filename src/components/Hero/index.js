import React from 'react'
import { css } from 'emotion'

import { UserContext } from '../../context/userContext'
import { Container } from '../markupHelpers'

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
          <Container>
            Hero {user && user.name}
          </Container>
        </section>
      )}
    </UserContext.Consumer>
  )
}

export default Hero
