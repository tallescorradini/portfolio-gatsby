import React from 'react'

import * as styles from './HomeSection.module.css'
import resumeFile from './downloads/Talles_Corradini_Resume.pdf'

const HomeSection = () => {
  return (
    <section id="home" data-testid="home">
      <h1>Hello! I'm Talles</h1>
      <h2>
        I'm a Front End Web Developer ready to code modern and responsive web
        pages
      </h2>
      <div className={styles.buttonWrapper}>
        <a href="#projects" className={styles.buttonFilled}>
          See projects
        </a>
        <a
          href={resumeFile}
          className={styles.buttonOutlined}
          target="_blank"
          download
        >
          Download CV
        </a>
      </div>
    </section>
  )
}

export default HomeSection
