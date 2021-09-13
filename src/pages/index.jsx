import React from 'react'

import NavigationBar from './components/NavigationBar'

const IndexPage = () => {
  return (
    <div>
      <header>
        <a href="#home">talles corradini</a>
        <NavigationBar />
      </header>
      <main>
        <section id="#home" data-testid="home">
          I'm a Front End Web Developer
          <a href="#projects">See projects</a>
        </section>

        <section id="#projects" data-testid="projects">
          Projects
        </section>

        <section id="#contact" data-testid="contact">
          Contact
        </section>
      </main>
    </div>
  )
}

export default IndexPage
