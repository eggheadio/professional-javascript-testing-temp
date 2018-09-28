import React from 'react'
import PropTypes from 'prop-types'
import Checkout from './Checkout'

const formatAmount = amount => (amount / 100).toLocaleString('en-US', { style: 'currency', currency: 'USD' })

const Package = props => {
  const {name, amount, email, description, features = []} = props
  const formattedAmount = formatAmount(amount)

  return (
    <div>
      <h3>{name}</h3>
      <span>USD {formattedAmount[0]}</span> <span>{formattedAmount.slice(1)}</span>
      <Checkout
        name={name}
        description={description}
        amount={amount}
        email={email}
        onToken={args => console.log('onToken', args) }
        onOpened={args => console.log('onOpened', args) }
        onClosed={args => console.log('onClosed', args) }
      />
      <p>
        {description}
      </p>
      <ul>
        {features.map((feature, index) => <li key={index}>{feature.title}</li>)}
      </ul>
    </div>
  )
}

export default Package
