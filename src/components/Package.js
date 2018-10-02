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
          border: '1px solid #e4e4e4',
          background: colorValues['white'],
          padding: '40px',
          borderRadius: '8px',
        })}
      >
        <div
          className={css({
            paddingBottom: '30px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            borderBottom: '1px solid #e4e4e4'
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
          { description && (
            <div
              className={css({
                fontSize: '16px',
                color: 'rgba(0, 0, 0, 0.6)',
                marginTop: '16px'
              })}
            >
              {description}
            </div>
          )}
        </div>
        {!isEmpty(features) &&
          <ul>
            {features.map((feature, index) => <li key={`feature-${index}`}>{feature}</li>)}
          </ul>
        }



        {/* <div
          className={css({
            border: '1px solid #e4e4e4'
          })}
        >

          <div
            className={css({
              padding: '60px 20px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              borderBottom: '1px solid #e4e4e4'
            })}
          >
            <h4
              className={css({
                fontSize: '20px',
                lineHeight: 1.25,
                fontWeight: 400,
                color: 'black'
              })}
            >
              Plan 1
            </h4>
            <div
              className={css({
                marginTop: '24px',
                display: 'inline-block',
                fontSize: '22px',
                lineHeight: 1,
                color: 'black',
                span: {
                  verticalAlign: 'middle'
                }
              })}
            >
              <span
                className={css({
                  fontSize: '16px',
                  color: 'rgba(0, 0, 0, 0.5)',
                  textTransform: 'uppercase'
                })}
              >
                us
              </span>
              <span
                className={css({
                  margin: '0 4px'
                })}
              >
                $
              </span>
              <span
                className={css({
                  fontSize: '56px',
                  fontWeight: 300
                })}
              >
                149
              </span>
              <span
                className={css({
                  marginLeft: '4px',
                  fontWeight: 300
                })}
              >
                .00
              </span>
            </div>
            <div
              className={css({
                fontSize: '16px',
                color: 'rgba(0, 0, 0, 0.6)',
                marginTop: '16px'
              })}
            >
              Lorem ipsum dolor sit amet.
            </div>
          </div>
          <div
            className={css({
              padding: '60px 20px',
              display: 'flex',
              justifyContent: 'center'
            })}
          >
            <ul
              className={css({
                listStyle: 'none'
              })}
            >
              <li
                className={css({
                  ':before': {
                    content: '"\\2714"'
                  }
                })}
              />
            </ul>
          </div>
        </div> */}
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
