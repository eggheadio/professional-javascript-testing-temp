import React from 'react'
import { css } from 'emotion'

const Container = props => {
  const { maxWidth = 960 } = props
  return (
    <div
      className={css({
        margin: '0 auto',
        maxWidth: maxWidth,
        padding: '0 1rem'
      })}
    >
      {props.children}
    </div>
  )
}

export default Container
