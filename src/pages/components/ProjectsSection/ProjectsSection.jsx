import React from 'react'
import Project from './components/Project'

import * as styles from './ProjectsSection.module.css'

const getProjectDisplayType = index => {
  const isEven = index % 2 === 0
  return isEven ? 'primary' : 'secondary'
}

const ProjectsSection = () => {
  return (
    <section id="projects" data-testid="projects">
      <h2 className={styles.sectionTitle}>Favorite projects</h2>

      {['p1', 'p2', 'p3'].map((project, index) => (
        <Project displayType={getProjectDisplayType(index)} />
      ))}
    </section>
  )
}

export default ProjectsSection
