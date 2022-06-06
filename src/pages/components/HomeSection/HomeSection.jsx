import React from 'react'
import { Trans } from 'gatsby-plugin-react-i18next'

import * as styles from './HomeSection.module.css'

const HomeSection = ({ resume }) => {
  return (
    <section id="home" data-testid="home" className={styles.section}>
      <div className={styles.headingContainer}>
        <h1 className={styles.title}>
          <Trans
            i18nKey="homeHeading"
            defaults="I code webistes <br />so  <highlight>you don't have to</highlight>"
            components={{
              br: <br />,
              highlight: <span className={styles.highlight} />,
            }}
          />
        </h1>

        <h2 className={styles.subtitle}>
          <Trans
            i18nKey="homeSubHeading"
            defaults="Hello, my name is Talles and I am a freelance <bold>front-end developer</bold> that builds custom web applications with HTML, CSS, JavaScript and React"
            components={{ bold: <span style={{ fontWeight: '700' }} /> }}
          />
        </h2>

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
