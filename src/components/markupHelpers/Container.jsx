import React from 'react'
import {css} from 'emotion'

const Container = props => (
  <div
    className={css({
      margin: '0 auto',
      maxWidth: 960,
      padding: '0 1rem'
    })}
  >
    {props.children}
  </div>
)

export default Container
