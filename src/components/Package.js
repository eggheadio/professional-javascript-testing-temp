import React from 'react'
import PropTypes from 'prop-types'
import Checkout from './Checkout'
import {isEmpty} from 'lodash'
import axios from 'axios'

const noop = () => {}
const http = axios.create()

class Package extends React.Component {
  formatAmount = amount => (amount / 100).toLocaleString(
    'en-US',
    { style: 'currency', currency: 'USD' }
  )

  onToken = ({token, email}) => {
    const {
      onSuccess,
      onError,
      url,
      sellableType,
      sellableID
    } = this.props

    http.post(url, {
      sellable: sellableType,
      sellable_id: sellableID,
      stripeToken: token,
      email
    })
    .then(onSuccess)
    .catch(onError)
  }

  render() {
    const {
      name,
      amount,
      email,
      description,
      features,
      onOpened,
      onClosed,
      image
    } = this.props

    const formattedAmount = this.formatAmount(amount)

    return (
      <div>
        <h3>{name}</h3>
        <span>USD {formattedAmount[0]}</span> <span>{formattedAmount.slice(1)}</span>
        <Checkout
          name={name}
          description={description}
          amount={amount}
          email={email}
          onToken={this.onToken}
          onOpened={onOpened}
          onClosed={onClosed}
          image={image}
        />
        {description &&
          <p>
            {description}
          </p>
        }
        {!isEmpty(features) &&
          <ul>
            {features.map((feature, index) => <li key={`feature-${index}`}>{feature}</li>)}
          </ul>
        }
      </div>
    )
  }
}

Package.propTypes = {
  url: PropTypes.string.isRequired,
  sellableType: PropTypes.string.isRequired,
  sellableID: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
  description: PropTypes.string,
  image: PropTypes.string,
  email: PropTypes.string,
  features: PropTypes.array,
  onSuccess: PropTypes.func.isRequired,
  onError: PropTypes.func.isRequired,
  onOpened: PropTypes.func,
  onClosed: PropTypes.func
}

Package.defaultProps = {
  onOpened: noop,
  onClosed: noop,
  image: ''
}

export default Package
