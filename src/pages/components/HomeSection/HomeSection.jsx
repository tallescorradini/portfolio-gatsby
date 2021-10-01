import React from 'react'

import * as styles from './HomeSection.module.css'
import resumeFile from '../../../pages/downloads/Talles_Corradini_Resume.pdf'

const HomeSection = () => {
  return (
    <section id="home" data-testid="home" className={styles.section}>
      <div className={styles.headingContainer}>
        <h1 className={styles.introduction}>Hello! I'm Talles,</h1>
        <h1 className={styles.introductionLarge}>Hello! My name is Talles,</h1>

        <h2 className={styles.title}>I build interfaces for the web.</h2>

        <h3 className={styles.subtitle}>
          I’m a Front End Web Developer currently working with ReactJS.
        </h3>

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
      </div>

      <a href="#projects" className={styles.arrowLink}>
        <span className={styles.arrowIcon}></span>
      </a>
    </section>
  )
}

export default HomeSection
