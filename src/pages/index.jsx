import React from 'react'

import NavigationBar from './components/NavigationBar'
import * as styles from './index.module.css'
import resumeFile from './downloads/Talles_Corradini_Resume.pdf'

// [x] TODO feat: add project and download CV buttons
// [x] TODO feat: serve pdf when clicking on download CV button
// [ ] TODO refactor: create HomeSection component
// [ ] TODO feat (NavigationBar): add navigation for smaller devices

const IndexPage = () => {
  return (
    <div>
      <header>
        <div className={styles.headerWrapper}>
          <a className={styles.logo} href="#home">
            talles corradini
          </a>

          <NavigationBar />
        </div>
      </header>
      <main>
        <section id="home" data-testid="home">
          <h1>Hello! I'm Talles</h1>
          <h2>
            I'm a Front End Web Developer ready to code modern and responsive
            web pages
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

        <section id="projects" data-testid="projects">
          Projects
        </section>

        <section id="contact" data-testid="contact">
          Contact
        </section>
      </main>
    </div>
  )
}

export default IndexPage
