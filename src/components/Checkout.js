import React from 'react'
import PropTypes from 'prop-types'
import {css} from 'emotion'
import StripeCheckout from 'react-stripe-checkout'

import colorValues from '../lib/colorValues'

const Checkout = ({
  name,
  description,
  image,
  onToken,
  onOpened,
  onClosed,
  email,
  amount
}) => (
  <StripeCheckout
    name={name}
    description={description}
    image={image}
    ComponentClass="div"
    panelLabel="Pay"
    amount={amount} // stripe amount in cents
    currency="USD"
    stripeKey={process.env.STRIPE_TOKEN}
    locale="en"
    email={email}
    shippingAddress={false}
    billingAddress={false}
    zipCode={false}
    token={onToken}
    opened={onOpened}
    closed={onClosed}
    triggerEvent="onClick"
  >
    <button className={css({
      border: 'none',
      fontFamily: 'TT Commons W01 Regular',
      fontWeight: 400,
      fontSize: '20px',
      lineHeight: 1.25,
      color: colorValues['white'],
      background: colorValues['base-orange'],
      borderRadius: '4px',
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '15px 20px',
    })}>
      Start Learning
    </button>
  </StripeCheckout>
)

Checkout.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string,
  image: PropTypes.string,
  onToken: PropTypes.func.isRequired,
  onOpened: PropTypes.func,
  onClosed: PropTypes.func
}

export default Checkout
