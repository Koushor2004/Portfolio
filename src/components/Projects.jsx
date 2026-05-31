import { projects } from '../data/portfolio'
import './Projects.css'

function StarIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  )
}

function ExternalIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
      <path d="M7 17L17 7M17 7H7M17 7v10" />
    </svg>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="section projects">
      <div className="container">
        <div className="projects-header">
          <div>
            <p className="section-label">02 / Projects</p>
            <h2 className="section-title">FEATURED <span>WORK</span></h2>
          </div>
          <p className="projects-subtitle">
            A selection of projects I've built — open source tools, web apps, and experiments.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((p, i) => (
            <div className="project-card" key={i}>
              <div className="project-card-top">
                <span className="project-year">{p.year}</span>
              </div>
              <h3 className="project-title">{p.title}</h3>
              <p className="project-desc">{p.description}</p>
              <div className="project-tags">
                {p.tags.map(tag => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>
              <div className="project-actions">
                <a
                  href={p.repoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-btn project-btn-accent"
                >
                  View Project <ExternalIcon />
                </a>
                {p.demoLink && (
                  <a
                    href={p.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-btn project-btn-dark"
                  >
                    Demo <ExternalIcon />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
