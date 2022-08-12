import React from 'react'
import { Helmet } from 'react-helmet'
import { graphql } from 'gatsby'
import { Trans } from 'gatsby-plugin-react-i18next'
import { Link, useI18next } from 'gatsby-plugin-react-i18next'

import * as styles from './index.module.css'
import logo from '../../static/logo-192.svg'
import NavigationBar from './components/NavigationBar/NavigationBar'
import HomeSection from './components/HomeSection/HomeSection'
import ContactSection from './components/ContactSection/ContactSection'
import ProjectsSection from './components/ProjectsSection/ProjectsSection'

const IndexPage = () => {
  const { originalPath, language } = useI18next()

  return (
    <div>
      <Helmet title="Talles Corradini" />
      <header>
        <div className={styles.headerWrapper}>
          <a className={styles.logo} href="#home">
            <img src={logo} />
            <span>Talles Corradini</span>
          </a>

          <NavigationBar />
        </div>
      </header>
      <main>
        <HomeSection />

        <ProjectsSection />

        <ContactSection />
      </main>

      <footer>
        <div className={styles.footerWrapper}>
          <div>
            <p>
              <Trans>Designing and developing this website was fun!</Trans>
            </p>

            <span>Talles Corradini</span>
          </div>
          <ul className={styles.languages}>
            <li>
              <Link
                to={originalPath}
                language="en"
                className={styles[`${language === 'en' ? 'active' : ''}`]}
              >
                English (US)
              </Link>
            </li>
            <li>
              <Link
                to={originalPath}
                language="pt"
                className={styles[`${language === 'pt' ? 'active' : ''}`]}
              >
                Português (BR)
              </Link>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  )
}

export default IndexPage

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`
