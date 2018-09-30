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
            <div className={css({
              display: 'flex'
            })}>
              <div className={css({
                width: '60%',
                paddingRight: '40px'
              })}>
                <h2 className={css({
                  fontSize: '32px',
                  lineHeight: 1.25,
                  fontWeight: 500,
                  color: 'black',
                })}>
                  Learn the smart, efficient way to test any JavaScript application. 
                </h2>
              </div>
              <div className={css({
                width: '40%'
              })}>
                <img
                  src="https://via.placeholder.com/350x250?text=ololo+alala"
                  alt="alt"
                  title="title"
                  className={css({
                    display: 'block',
                    width: '100%'
                  })}
                />
              </div>
            </div>
          </Container>
        </section>
      )}
    </UserContext.Consumer>
  )
}

export default Hero
