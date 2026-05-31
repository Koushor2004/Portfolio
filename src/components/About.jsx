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
          I am a computer science student with strong knowledge of Data Structures and Algorithms, and Web Development.
          Proficient in C, Java, Python, and JavaScript with experience building full-stack applications. Developed AI-based
          projects and actively participated in competitive programming and hackathons. Interested in building scalable
          software and intelligent systems.
        </p>
        <p className="about-text">
          When I'm not coding, I'm exploring new technologies and improving my problem solving ability.
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
