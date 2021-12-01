import React from 'react'
import { Trans, useTranslation } from 'gatsby-plugin-react-i18next'

import Project from './components/Project'
import * as styles from './ProjectsSection.module.css'

const getProjectDisplayType = index => {
  const isEven = index % 2 === 0
  return isEven ? 'primary' : 'secondary'
}

const ProjectsSection = () => {
  const { t } = useTranslation()

  const projects = [
    {
      title: t('Favorite Channels'),
      description: t(
        'A multilingual web app to organize Youtube subscriptions in meaningful categories. All subscriptions and channel activities are fetched using the Youtube API, and users can sign up to save their preferences.'
      ),
      technologies: ['NextJS', 'Firebase', 'Youtube API', 'i18next'],
      codeUrl: 'https://github.com/tallescorradini/favorite-channels',
      image: {
        src: 'https://user-images.githubusercontent.com/43918107/144124411-df88c17d-dd0a-4965-a82b-662eb53e2a4c.png',
        alt: t('Screenshot of the web app Favorite Channels'),
      },
    },
    {
      title: t('Personal Portfolio'),
      description: t(
        'I had been curious about static site generation for a while, so I have decided to try GatsbyJS. In the process, I also challenged myself to add multiple language support for both Brazilian Portuguese and English. '
      ),
      technologies: ['GatsbyJS', 'Jest', 'React Testing Library', 'i18next'],
      codeUrl: 'https://github.com/tallescorradini/portfolio-gatsby',
      image: {
        src: 'https://user-images.githubusercontent.com/43918107/144257891-5d1abc8d-3c99-4b97-a65b-843acdf19c75.png',
        alt: t('Screenshot of my personal portfolio website'),
      },
    },
  ]
  return (
    <section id="projects" data-testid="projects">
      <h2 className={styles.sectionTitle}>
        <Trans>Favorite projects</Trans>
      </h2>

      {projects.map((project, index) => (
        <Project project={project} displayType={getProjectDisplayType(index)} />
      ))}
    </section>
  )
}

export default ProjectsSection
