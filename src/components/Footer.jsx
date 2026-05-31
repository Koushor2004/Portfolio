import { personal } from '../data/portfolio'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <span className="footer-logo">{personal.name.split(' ')[0]}<span>.</span></span>
        <p className="footer-copy">
          © {new Date().getFullYear()} {personal.name}
        </p>
        <div className="footer-socials">
          {Object.entries(personal.social).map(([key, url]) => url && (
            <a key={key} href={url} target="_blank" rel="noopener noreferrer" className="footer-social-link">
              {key}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
