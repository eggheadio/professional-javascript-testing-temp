import React from 'react'
import PropTypes from 'prop-types'
import Checkout from './Checkout'
import {isEmpty} from 'lodash'
import axios from 'axios'
import {css} from 'emotion'

import colorValues from '../lib/colorValues'

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
      <div
        className={css({
          width: '100%',
          border: '1px solid #e4e4e4',
          background: colorValues['white'],
          padding: '40px',
          borderRadius: '8px',
        })}
      >
        <div
          className={css({
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          })}
        >
          <h4
            className={css({
              fontSize: '18px',
              lineHeight: 1.25,
              fontWeight: 400,
              color: '#707185',
              fontFamily: 'TT Commons W01 Regular'
            })}
          >
            {name}
          </h4>
          <div
            className={css({
              marginTop: '24px',
              display: 'inline-block',
              fontSize: '22px',
              lineHeight: 1,
              color: '#333451',
              span: {
                verticalAlign: 'middle'
              }
            })}
          >
            <span
              className={css({
                fontSize: '16px',
                textTransform: 'uppercase'
              })}
            >
              usd
            </span>
            <span
              className={css({
                margin: '0 4px',
                fontSize: '26px',
              })}
            >
              {formattedAmount[0]}
            </span>
            <span
              className={css({
                fontSize: '62px',
                fontWeight: 400,
                fontFamily: 'TT Commons W01 DemiBold',
                color: colorValues['gray-darken-20'],
              })}
            >
              {formattedAmount.slice(1, -3)}
            </span>
          </div>
          <div className={css({
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'stretch',
            marginTop: '35px',
          })}>
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
          </div>
          { description && (
            <div
              className={css({
                minHeight: '40px',
                width: '100%',
                padding: '0 20px',
                fontSize: '16px',
                lineHeight: 1.25,
                color: 'rgba(0, 0, 0, 0.6)',
                marginTop: '25px',
                textAlign: 'center',
                fontFamily: 'TT Commons W01 Regular',
              })}
            >
              {description}
            </div>
          )}
        </div>
        {!isEmpty(features) &&
          <div
            className={css({
              width: '100%',
              padding: '35px 15px 0 15px',
              marginTop: '35px',
              display: 'flex',
              justifyContent: 'center',
              borderTop: '1px solid #e4e4e4'
            })}
          >
            <ul
              className={css({
                listStyle: 'none',
                fontFamily: 'TT Commons W01 Regular'
              })}
            >
              {features.map((feature, index) => (
                <li
                  key={`feature-${index}`}
                  className={css({
                    color: '#2D2E49',
                    fontSize: '18px',
                    lineHeight: 1.25,
                    display: 'flex',
                    ':not(:first-child)': {
                      marginTop: '10px',
                    },
                    ':before': {
                      content: '"\\2714"',
                      fontSize: '20px',
                      color: '#8debeb',
                      marginRight: '10px',
                    }
                  })}
                >
                  {feature}
                </li>
              ))}
            </ul>
          </div>
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
