import React from 'react'
import { Trans } from 'gatsby-plugin-react-i18next'

import * as styles from './HomeSection.module.css'

const HomeSection = ({ resume }) => {
  return (
    <section id="home" data-testid="home" className={styles.section}>
      <div className={styles.headingContainer}>
        <h1 className={styles.introduction}>
          <Trans>Hello! I'm Talles,</Trans>
        </h1>
        <h1 className={styles.introductionLarge}>
          <Trans>Hello! My name is Talles,</Trans>
        </h1>

        <h2 className={styles.title}>
          <Trans>I build interfaces for the web.</Trans>
        </h2>

        <h3 className={styles.subtitle}>
          <Trans>
            I’m a Front End Web Developer currently working with ReactJS.
          </Trans>
        </h3>

        <div className={styles.buttonWrapper}>
          <a href="#projects" className={styles.buttonFilled}>
            <Trans>See projects</Trans>
          </a>
          <a
            href={resume?.file}
            download={resume?.filename}
            className={styles.buttonOutlined}
            target="_blank"
          >
            <Trans>Download Resume</Trans>
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
