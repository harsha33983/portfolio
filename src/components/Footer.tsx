import { ArrowUpRight } from "lucide-react";
import { navigation, socialLinks, whatsappLink } from "../data/portfolio";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell">
        <div className="footer-top">
          <a className="brand footer-brand" href="#home" aria-label="Hari Sumanth, back to top">
            <span className="brand-mark">H<span>S</span></span>
            <span className="brand-name">Hari Sumanth<span>Freelance Web Designer & Digital Marketing Specialist</span></span>
          </a>
          <a className="footer-back-top" href="#home">Back to top <ArrowUpRight aria-hidden="true" size={15} /></a>
        </div>
        <div className="footer-bottom">
          <p>© 2026 Hari Sumanth. All rights reserved.<br /><span>Designed with purpose. Built for growth.</span></p>
          <nav className="footer-links" aria-label="Footer navigation">
            {navigation.filter((item) => ["Home", "Work", "Services", "About", "Contact"].includes(item.label)).map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}
          </nav>
          <div className="social-links" aria-label="Social links">
            {socialLinks.map((link) => link.href
              ? <a key={link.label} href={link.href} target="_blank" rel="noreferrer">{link.label}<ArrowUpRight aria-hidden="true" size={12} /></a>
              : <span key={link.label} title={`Add ${link.label} profile URL in .env`}>{link.label}</span>)}
            <a href={whatsappLink} target="_blank" rel="noreferrer">WhatsApp<ArrowUpRight aria-hidden="true" size={12} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
