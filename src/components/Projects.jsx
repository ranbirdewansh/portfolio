import '../styles/Projects.css'

import portfolioImg from '../assets/portfolio.png'
import aiAssistantImg from '../assets/AI_assistant.png.png'
import stsmsImg from '../assets/STSMS.png'

function Projects() {

  const projectData = [
    {
      title: "Portfolio Website",
      description:
        "A modern responsive portfolio website built using React and CSS.",

      image: portfolioImg
    },

    {
      title: "AI Assistant",
      description:
        "An AI-powered assistant application with smart interaction features.",

      image: aiAssistantImg
    },

    {
      title: "Smart Tourist Safety Management",
      description:
        "A tourist safety concerned app built on React and Vite .",

      image: stsmsImg
    }
  ]

  return (
    <section className="projects" id="projects">

      <h2>Projects</h2>

      <div className="projects-container">

        {
          projectData.map((project, index) => (
            <div className="project-card" key={index}>

              <img
                src={project.image}
                alt={project.title}
              />

              <h3>{project.title}</h3>

              <p>{project.description}</p>

            </div>
          ))
        }

      </div>

    </section>
  )
}

export default Projects