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
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
      })}>
        <Container maxWidth={600}>
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
            
            color: '#FFFFFF',
            fontSize: '40px',
            fontWeight: '500',
            lineHeight: '40px',
          })}>
            Learn the smart, efficient way to test any JavaScript application.
          </h2>
          <h3 className={css({
            marginTop: '24px',
            marginBottom: '40px',
            color: '#FFD473',
            fontSize: '22px',
            lineHeight: '28px',
            fontWeight: 300,
          })}>
            What if you could ship 100% working code without slogging through the time-suck of manual testing?
          </h3>
          <div className={css({
            color: '#FFFFFF',
            fontSize: '18px',
            lineHeight: '28px',
            fontWeight: 300,
            opacity: '0.9',
          })}>
            <p className={css({
              marginTop: '30px',
              
            })}>
              Kent C. Dodds will share a professional method for testing any Javascript application -- whether you're using React, Angular, Vue, or plain old Javascript.
            </p>
            <p className={css({
              marginTop: '24px',
              
              
            })}>
              Learn to ship it right every time with a proven approach that makes you a more savvy, efficient, dependable developer by Monday.
            </p>
            <p className={css({
              marginTop: '22px',
            })}>
              Be a professional. Be a winner. 🏆
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
                    marginBottom: '0.5rem',})
                  }>
                    <Field type="email" name="email" placeholder="Enter your email"
                      className={css({
                      border: '0',
                      color: '#FFFFFF',
                      backgroundColor: '#4D4D56',
                      width: '350px',
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
                        color: '#FFFFFF',
                        fontWeight: '300',
                        fontSize: '18px',
                        transition: 'all 600ms cubic-bezier(0.075, 0.82, 0.165, 1)',
                      },
                      '&::placeholder': {
                        fontSize: '1rem',
                        color: '#fff',
                        fontWeight: '300',
                        opacity: '0.5',
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
                      backgroundColor: '#FFD473',
                      color: 'black',
                      transition: 'all 250ms ease',
                      ':focus:not(:focus-visible)': { outline: 'none', },
                      outline: 'none',
                      'span': {
                        transition: 'all 250ms ease',
                      },
                      '&:hover, :focus': {
                        transition: 'all 250ms ease',
                        outline: 'none',
                        filter: 'contrast(1.1)',
                        'span': {
                          transition: 'all 250ms ease',
                          transform: 'scale(1.08)',
                        },
                      },})}>
                      <span>Notify Me</span>
                    </button>
                  </div>
                  <p className={css({
                    width: '570px',
                    opacity: '0.6',
                    color: '#F2F2F2',
                    fontSize: '14px',
                    lineHeight: '30px',
                  })}>No spam.</p>
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