import React from 'react'
import PropTypes from 'prop-types'

import * as styles from './Project.module.css'

const Project = ({ displayType }) => {
  return (
    <article className={`${styles.project} ${styles[displayType]}`}>
      <div className={styles.contentBox}>
        <div className={styles.descriptionBox}>
          <h3 className={styles.title}>Gatsby Portfolio</h3>
          <p>
            Conheça alguns dos meus projetos, portfólio Seção pra resumir e
            React.js de projeto talvez principais Firebase tecnologias. Conheça
            alguns dos meus projetos, portfólio Seção pra resumir e React.js de
            projeto talvez principais Firebase tecnologias.
          </p>
        </div>

        <section className={styles.sectionTech}>
          <h4 className={styles.title}>Technology stack</h4>
          <ul role="list">
            <li>Gatsby</li>
            <li>Jest</li>
            <li>React-testing-library</li>
            <li>CSS modules</li>
            <li>Gatsby</li>
            <li>Jest</li>
            <li>React-testing-library</li>
            <li>CSS modules</li>
          </ul>
        </section>
      </div>
      <div className={styles.imageContainer}>
        <img src="https://via.placeholder.com/800x450" alt="Website snapshot" />
      </div>

      <div className={styles.buttonWrapper}>
        <button className={styles.buttonFilled}>site</button>
        <button className={styles.buttonOutlined}>{`<code/>`}</button>
      </div>
    </article>
  )
}

Project.propTypes = {
  displayType: PropTypes.oneOf(['primary', 'secondary']),
}

export default Project
