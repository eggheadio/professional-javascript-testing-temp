import React from 'react'
import { css } from 'emotion'

const Hero = () => {
  return (
    <section
      className={css({
        width: '100%',
        background: '#f8f8f8',
        padding: '1rem 0'
      })}
    >
      <div
        className={css({
          margin: '0 auto',
          maxWidth: 960,
          padding: '0 1rem'
        })}
      >
        Hero
      </div>
    </section>
  )
}

export default Hero
