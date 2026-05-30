import { personal } from '../data/portfolio'
import './Resume.css'

export default function Resume() {
  return (
    <section id="resume" className="section resume">
      <div className="container">
        <div className="resume-inner">
          <div className="resume-left">
            <p className="section-label">05 / Resume</p>
            <h2 className="section-title">DOWN<span>LOAD</span></h2>
            <p className="resume-text">
              Get a copy of my full resume — includes detailed experience, education, certifications, and a complete skill overview.
            </p>
            <p className="resume-note">
              Place your <code>resume.pdf</code> in the <code>/public/</code> folder to enable the download.
            </p>
          </div>
          <div className="resume-right">
            <div className="resume-card">
              <div className="resume-icon">
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                  <line x1="16" y1="13" x2="8" y2="13" />
                  <line x1="16" y1="17" x2="8" y2="17" />
                  <polyline points="10 9 9 9 8 9" />
                </svg>
              </div>
              <div className="resume-file-info">
                <span className="resume-filename">resume.pdf</span>
                <span className="resume-filemeta">PDF Document · Updated 2024</span>
              </div>
              <a
                href={personal.resumeLink}
                download
                className="btn btn-primary resume-download-btn"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
