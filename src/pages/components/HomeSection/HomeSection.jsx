import React from 'react'
import { Trans, useI18next } from 'gatsby-plugin-react-i18next'

import * as styles from './HomeSection.module.css'

const HomeSection = () => {
  const { t } = useI18next()

  return (
    <section id="home" data-testid="home" className={styles.section}>
      <div className={styles.headingContainer}>
        <h1 className="text-36 text-56:media-600-up text-lexend text-pre-wrap">
          {t('homeSection.heading.text').replace(
            t('homeSection.heading.highlightedText'),
            ''
          )}

          <span className={styles.highlight}>
            {t('homeSection.heading.highlightedText')}
          </span>
        </h1>

        <h2
          className={`text-18 text-20:media-600-up text-normal ${styles.subtitle}`}
        >
          {t('homeSection.subheading.text')
            .split(t('homeSection.subheading.highlightedText'))
            .map((substring, index) => (
              <span key={substring}>
                {index === 0 ? (
                  <>
                    {substring}
                    <span className="text-bold">
                      {t('homeSection.subheading.highlightedText')}
                    </span>
                  </>
                ) : (
                  substring
                )}
              </span>
            ))}
        </h2>

        <div className={styles.buttonWrapper}>
          <a href="#projects" className={styles.buttonFilled}>
            <Trans>See projects</Trans>
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
