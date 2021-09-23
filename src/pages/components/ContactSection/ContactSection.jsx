import React from 'react'

import * as styles from './ContactSection.module.css'

const ContactSection = () => {
  const handleSubmit = event => {
    event.preventDefault()
    let myForm = document.getElementById('contact-form')
    let formData = new FormData(myForm)
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(formData).toString(),
    })
      .then(() => console.log('Form successfully submitted'))
      .catch(error => alert(error))
  }

  return (
    <section id="contact" data-testid="contact">
      <h2 className={styles.title}>Contact</h2>

      <div className={styles.container}>
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
