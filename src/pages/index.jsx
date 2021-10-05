import React from 'react'
import { Helmet } from 'react-helmet'
import { graphql } from 'gatsby'
import { Trans } from 'gatsby-plugin-react-i18next'

import * as styles from './index.module.css'
import logo from '../../static/logo-192.svg'
import NavigationBar from './components/NavigationBar/NavigationBar'
import HomeSection from './components/HomeSection/HomeSection'
import ContactSection from './components/ContactSection/ContactSection'
import ProjectsSection from './components/ProjectsSection/ProjectsSection'

import resumeFile from './downloads/Talles_Corradini_Resume.pdf'

const IndexPage = () => {
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
          <a href={resumeFile} target="_blank" download>
            <Trans>Download my CV</Trans>
          </a>
          <p>
            <Trans>Designing and developing this website was fun!</Trans>
          </p>

          <span>Talles Corradini</span>
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
