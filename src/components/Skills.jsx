import { useState } from 'react'
import { skills } from '../data/portfolio'
import './Skills.css'

const categories = ['All', ...new Set(skills.map(s => s.category))]

export default function Skills() {
  const [active, setActive] = useState('All')
  const filtered = active === 'All' ? skills : skills.filter(s => s.category === active)

  return (
    <section id="skills" className="section skills">
      <div className="container">
        <div className="skills-header">
          <p className="section-label">03 / Skills</p>
          <h2 className="section-title">TECH <span>STACK</span></h2>
        </div>

        <div className="skills-filters">
          {categories.map(c => (
            <button
              key={c}
              className={`skills-filter-btn ${active === c ? 'active' : ''}`}
              onClick={() => setActive(c)}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="skills-grid">
          {filtered.map((skill, i) => (
            <div className="skill-item" key={skill.name} style={{ animationDelay: `${i * 0.05}s` }}>
              <div className="skill-top">
                <span className="skill-name">{skill.name}</span>
                <span className="skill-level">{skill.level}%</span>
              </div>
              <div className="skill-bar-track">
                <div
                  className="skill-bar-fill"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
              <span className="skill-category">{skill.category}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
