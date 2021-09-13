import React from 'react'

const IndexPage = () => {
  return (
    <div>
      <header>
        <a href="#home">talles corradini</a>
        <nav>
          <ul>
            <li>
              <a href="#home">home</a>
            </li>
            <li>
              <a href="#projects">projects</a>
            </li>
            <li>
              <a href="#contact">contact</a>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <section id="#home" data-testid="home">
          I'm a Front End Web Developer
          <a href="#projects">Projects</a>
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
