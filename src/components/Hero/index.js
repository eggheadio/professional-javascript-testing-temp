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
            padding: '4rem 0'
          })}
        >
          <Container>
            <div
              className={css({
                display: 'flex'
              })}
            >
              <div
                className={css({
                  width: '60%',
                  paddingRight: '40px'
                })}
              >
                <h2
                  className={css({
                    fontSize: '32px',
                    lineHeight: 1.25,
                    fontWeight: 500,
                    color: 'black'
                  })}
                >
                  Learn the smart, efficient way to test any JavaScript
                  application.
                </h2>
                <p
                  className={css({
                    fontSize: '20px',
                    lineHeight: 1.25,
                    color: '#2e2e36'
                  })}
                >
                  Kent C. Dodds shares a professional method for testing any
                  JavaScript application—whether you’re using React, Angular,
                  Vue, or plain old JavaScript. Learn to ship it right every
                  time with a proven approach that makes you a more savvy,
                  efficient, dependable developer by Monday.
                </p>
              </div>
              <div
                className={css({
                  width: '40%'
                })}
              >
                <img
                  src="https://via.placeholder.com/350x250?text=learn+smart"
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
