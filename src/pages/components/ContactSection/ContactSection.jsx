import React from 'react'

import * as styles from './ContactSection.module.css'

const ContactSection = () => {
  return (
    <section id="contact" data-testid="contact">
      <h2 className={styles.title}>Contact</h2>

      <div className={styles.container}>
        <form
          className={styles.form}
          method="post"
          netlify-honeypot="bot-field"
          data-netlify="true"
          name="contact"
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
            <label htmlFor="name">Name</label>
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
            <label htmlFor="message">Message</label>
          </div>

          <button type="submit" className={styles.buttonFilled}>
            Send
          </button>
        </form>
        <p>You can also find me on:</p>
      </div>
    </section>
  )
}

export default ContactSection
