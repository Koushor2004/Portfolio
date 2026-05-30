import { personal } from '../data/portfolio'
import './About.css'

export function AboutPanel() {
  return (
    <div id="about" className="hero-right about-panel">
      <p className="section-label">01 / About</p>
      <h2 className="section-title">
        WHO <span>I AM</span>
      </h2>
      <div className="about-body">
        <p className="about-lead">{personal.bio}</p>
        <p className="about-text">
          I'm a developer based in {personal.location}, passionate about crafting clean, efficient, and beautifully designed digital experiences. I thrive at the intersection of engineering and design, building things that not only work great but also look exceptional.
        </p>
        <p className="about-text">
          When I'm not coding, I'm exploring new technologies, contributing to open-source projects, or writing about design and development on my blog.
        </p>
      </div>
      <div className="about-info">
        <div className="about-info-item">
          <span className="about-info-label">Location</span>
          <span className="about-info-val">{personal.location}</span>
        </div>
        <div className="about-info-item">
          <span className="about-info-label">Email</span>
          <a href={`mailto:${personal.email}`} className="about-info-val about-info-link">{personal.email}</a>
        </div>
        <div className="about-info-item">
          <span className="about-info-label">Status</span>
          <span className="about-info-val about-status">
            <span className="about-status-dot"></span>
            Available for opportunities
          </span>
        </div>
      </div>
    </div>
  )
}
