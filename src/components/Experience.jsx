import { experience } from '../data/portfolio'
import './Experience.css'

export default function Experience() {
  return (
    <section id="experience" className="section experience">
      <div className="container">
        <div className="exp-header">
          <p className="section-label">04 / Experience</p>
          <h2 className="section-title">WORK <span>HISTORY</span></h2>
        </div>

        <div className="exp-timeline">
          {experience.map((e, i) => (
            <div className="exp-item" key={i}>
              <div className="exp-line-col">
                <div className="exp-dot"></div>
                {i < experience.length - 1 && <div className="exp-connector"></div>}
              </div>
              <div className="exp-content">
                <div className="exp-meta">
                  <div>
                    <h3 className="exp-role">{e.role}</h3>
                    <div className="exp-company">
                      <span>{e.company}</span>
                      <span className="exp-sep">—</span>
                      <span className="exp-location">{e.location}</span>
                    </div>
                  </div>
                  <span className="exp-period">{e.period}</span>
                </div>
                <p className="exp-desc">{e.description}</p>
                {/* Will add later */}
                {/* <div className="exp-tags">
                  {e.tags.map(t => (
                    <span key={t} className="tag">{t}</span>
                  ))}
                </div> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
