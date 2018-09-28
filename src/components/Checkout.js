import React from 'react'
import PropTypes from 'prop-types'
import StripeCheckout from 'react-stripe-checkout'

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
    amount={amount} // cents
    currency="USD"
    stripeKey="pk_test_OOTSSmhjHw8HQBJKPe51fst1"
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
    <button>
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
