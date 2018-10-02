import React from 'react'
import { css} from 'emotion'
import {Formik, Field, Form} from 'formik'
import * as yup from 'yup'
import { Container } from '../components/markupHelpers'

const announcementSchema = yup.object().shape({
  email: yup.string().email()
})

class Announcement extends React.Component {
  render(){
    return(
      <div className={css({
        backgroundColor: '#32323B',
        height: '100vh'
      })}>
        <Container maxWidth={580}>
          <div>
            <h1 className={css({
              color: "#FFFFFF",
              height: "15px",
              fontSize: "17px",
              fontWeight: "600",
              lineHeight: "15px"
            })}>JAVASCRIPT TESTING</h1>
            <p className={css({
              height: "13px",
              color: "#FFD473",
              fontSize: "13px",
              lineHeight: "15px"
            })}>with Kent C. Dodds</p>
          </div>
          <h2 className={css({
            marginTop: '55px',
            height: '80px',
            width: '580px',
            color: '#FFFFFF',
            fontSize: '40px',
            fontWeight: '600',
            lineHeight: '40px',
          })}>
            Learn the smart, efficient way to test any JavaScript application.
          </h2>
          <h3 className={css({
            marginTop: '24px',
            height: '50px',
            width: '580px',
            color: '#FFD473',
            fontSize: '22px',
            lineHeight: '25px',
          })}>
            What if you could ship 100% working code without slogging through the time-suck of manual testing?
          </h3>
          <div className={css({
            color: '#FFFFFF',
            fontSize: '18px',
            lineHeight: '25px',
          })}>
            <p className={css({
              marginTop: '24px',
              opacity: '0.9',
            })}>
              Kent C. Dodds will share a professional method for testing any Javascript application -- whether you're using React, Angular, Vue, or plain old Javascript.
            </p>
            <p className={css({
              marginTop: '24px',
              opacity: '0.9',
            })}>
              Learn to ship it right every time with a proven approach that makes you a more savvy, efficient, dependable developer by Monday.
            </p>
            <p className={css({
              marginTop: '22px',
              opacity: '0.9',
            })}>
              Be a professional. Be a winner.
            </p>
          </div>
          <Formik
            initialValues={{email: ''}}
            validationSchema={announcementSchema}
            onSubmit={(props) => {
              console.log(props)
              // setTimeout(() => {
              //   alert(JSON.stringify(values, null, 2));
              //   actions.setSubmitting(false);
              // }, 1000);
            }}
            render={({handleSubmit, handleChange, handleBlur, values, errors}) => {
              return(
                <Form className={css({
                  marginTop: '51px',
                  display: 'flex',
                  flexDirection: 'column',
                })}>
                  <h3 className={css({
                    height: '30px',
                    width: '570px',
                    color: '#FFFFFF',
                    fontSize: '18px',
                    fontWeight: '500',
                    lineHeight: '30px',
                  })}>
                    Get notified when the course goes live:
                  </h3>
                  <div className={css({
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginTop: '1rem',
                    marginBottom: '1rem',})
                  }>
                    <Field type="email" name="email" placeholder="enter e-mail"
                      className={css({
                      border: '0',
                      background: '#F4F6F8',
                      width: '300px',
                      height: '60px',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      alignItems: 'left',
                      padding: '0 16px',
                      fontSize: '1rem',
                      borderRadius: '5px 0 0 5px',
                      transition: 'all 600ms cubic-bezier(0.075, 0.82, 0.165, 1)',
                      '&:focus': {
                        outline: 'transparent',
                        filter: 'contrast(0.95)',
                        color: 'black',
                        transition: 'all 600ms cubic-bezier(0.075, 0.82, 0.165, 1)',
                      },
                      '&::placeholder': {
                        fontSize: '1rem',
                        fontWeight: '300',
                        opacity: '0.7',
                      }
                    })}
                    />
                    <button type="submit" className={css({
                      height: '60px',
                      display: 'inline-flex',
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '1rem',
                      cursor: 'pointer',
                      border: 'none',
                      borderRadius: '0 5px 5px 0',
                      padding: '1rem 1rem',
                      width: '130px',
                      margin: '0',
                      textDecoration: 'none',
                      background: 'black',
                      color: 'white',
                      'span': {
                        transition: 'all 250ms ease',
                      },
                      '&:hover': {
                        outline: 'transparent',
                        filter: 'contrast(1.2)',
                        'span': {
                          transition: 'all 250ms ease',
                          transform: 'scale(1.08)',
                        },
                      },})}>
                      Notify Me
                    </button>
                  </div>
                  <p>No spam. Only bacon.</p>
                </Form>
              )
            }}
          />
        </Container>
      </div>
    )
  }
}

export default Announcement