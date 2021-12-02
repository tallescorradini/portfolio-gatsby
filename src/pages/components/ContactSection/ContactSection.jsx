import React, { useState } from 'react'
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai'
import { Trans, useTranslation } from 'gatsby-plugin-react-i18next'

import * as styles from './ContactSection.module.css'

const ContactSection = () => {
  const [formSubmitted, setFormSubitted] = useState()

  const handleSubmit = event => {
    event.preventDefault()
    let myForm = document.getElementById('contact-form')
    let formData = new FormData(myForm)
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(formData).toString(),
    })
      .then(() => {
        myForm.reset()
        setFormSubitted({ result: 'success' })
      })
      .catch(error => setFormSubitted({ result: 'error' }))
  }

  return (
    <section id="contact" data-testid="contact">
      <h2 className={styles.title}>
        <Trans>Contact</Trans>
      </h2>

      <div className={styles.container}>
        {formSubmitted ? (
          <Alert
            severity={formSubmitted.result}
            className={styles.form}
            onClose={() => setFormSubitted(false)}
          />
        ) : (
          <form
            id="contact-form"
            onSubmit={handleSubmit}
            netlify-honeypot="bot-field"
            data-netlify="true"
            name="contact"
            className={styles.form}
          >
            <input type="hidden" name="bot-field" />
            <input type="hidden" name="form-name" value="contact" />
            <div className={styles.field}>
              <input
                id="name"
                name="name"
                type="text"
                required
                placeholder=" "
                className={styles.input}
              ></input>
              <label htmlFor="name">
                <Trans>Name</Trans>
              </label>
            </div>
            <div className={styles.field}>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder=" "
                className={styles.input}
              ></input>
              <label htmlFor="email">E-mail</label>
            </div>
            <div className={styles.field}>
              <textarea
                id="message"
                name="message"
                required
                placeholder=" "
                className={styles.input}
                rows="4"
              ></textarea>
              <label htmlFor="message">
                <Trans>Message</Trans>
              </label>
            </div>

            <button type="submit" className={styles.buttonFilled}>
              <Trans>Send</Trans>
            </button>
          </form>
        )}
        <div className={styles.socialLinks}>
          <p>
            <Trans>You can also find me on:</Trans>
          </p>
          <div className={styles.socialLinksWrapper}>
            <a
              href="https://www.linkedin.com/in/tallescorradini/"
              target="_blank"
              className={styles.socialIcons}
            >
              <AiFillLinkedin size="3rem" />
            </a>

            <a
              href="https://github.com/tallescorradini"
              target="_blank"
              className={styles.socialIcons}
            >
              <AiFillGithub size="2.875rem" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection

const Alert = ({ severity, className, onClose }) => {
  const { t } = useTranslation()

  const content = {
    success: {
      message: t('Message sent!'),
      details: t('I appreciate you reaching out.'),
      style: styles.alertSuccess,
    },
    error: {
      message: t('Something went wrong!'),
      details: t(
        'Please, try reaching out through any of my social media links.'
      ),
      style: styles.alertError,
    },
  }

  return (
    <section role="alert" className={`${content[severity].style} ${className}`}>
      <div>
        <strong>{content[severity].message}</strong>
        <p>{content[severity].details}</p>
      </div>
      <button onClick={onClose} className={styles.buttonClose}>
        <span className={styles.iconClose}></span>
      </button>
    </section>
  )
}
