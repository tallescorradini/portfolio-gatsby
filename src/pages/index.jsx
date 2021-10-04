import React from 'react'
import { Helmet } from 'react-helmet'

import * as styles from './index.module.css'
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
            talles corradini
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
            Download my CV
          </a>
          <p>Designing and developing this website was fun!</p>

          <span>Talles Corradini</span>
        </div>
      </footer>
    </div>
  )
}

export default IndexPage
