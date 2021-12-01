import React from 'react'
import PropTypes from 'prop-types'
import { Trans, useTranslation } from 'gatsby-plugin-react-i18next'

import * as styles from './Project.module.css'

const Project = ({
  project = { technologies: [], image: {} },
  displayType,
}) => {
  const { t } = useTranslation()
  return (
    <article className={`${styles.project} ${styles[displayType]}`}>
      <div className={styles.contentBox}>
        <div className={styles.descriptionBox}>
          <h3 className={styles.title}>{project.title}</h3>
          <p>{project.description}</p>
        </div>

        <section className={styles.sectionTech}>
          <h4 className={styles.title}>
            <Trans>Technology stack</Trans>
          </h4>
          <ul role="list">
            {project.technologies.map(technology => (
              <li key={technology}>{technology}</li>
            ))}
          </ul>
        </section>
      </div>

      <div className={styles.linksContainer}>
        <div className={styles.imageContainer}>
          <img src={project.image.src} alt={project.image.alt} />
        </div>

        <div className={styles.buttonWrapper}>
          {project.siteUrl ? (
            <a
              href={project.siteUrl}
              target="_blank"
              rel="noreferrer"
              className={styles.buttonFilled}
            >
              site
            </a>
          ) : null}
          {project.codeUrl ? (
            <a
              href={project.codeUrl}
              target="_blank"
              rel="noreferrer"
              className={styles.buttonOutlined}
            >{`<${t('code')}/>`}</a>
          ) : null}
        </div>
      </div>
    </article>
  )
}

Project.propTypes = {
  displayType: PropTypes.oneOf(['primary', 'secondary']),
}

export default Project
