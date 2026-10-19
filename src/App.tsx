import { useEffect, useState } from "react";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Check,
  CircleDot,
  Globe2,
  MoveUpRight,
  Sparkles,
} from "lucide-react";
import { ButtonLink } from "./components/Button";
import { ContactForm } from "./components/ContactForm";
import { FAQItem } from "./components/FAQItem";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import { ProjectCard } from "./components/ProjectCard";
import { ProjectModal } from "./components/ProjectModal";
import {
  benefits,
  faqs,
  processSteps,
  projects,
  services,
  skillGroups,
  type Project,
} from "./data/portfolio";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Hari Sumanth",
  jobTitle: "Freelance Web Designer & Digital Marketing Specialist",
  description: "Freelance web designer creating modern, responsive websites and supporting digital marketing for businesses in India and beyond.",
  knowsAbout: [
    "Freelance web design",
    "Small business website design",
    "Website development",
    "Restaurant and cafe website design",
    "Landing page design",
    "Website redesign",
    "Search engine optimization",
    "Digital marketing",
    "Google Ads",
    "Social media marketing",
    "AI-assisted website development",
  ],
};

function App() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  useEffect(() => {
    document.body.classList.add("has-reveal");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const items = document.querySelectorAll<HTMLElement>(".reveal");
    if (reducedMotion || !("IntersectionObserver" in window)) {
      items.forEach((item) => item.classList.add("is-visible"));
      return () => document.body.classList.remove("has-reveal");
    }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -36px 0px" });
    items.forEach((item) => observer.observe(item));
    return () => {
      observer.disconnect();
      document.body.classList.remove("has-reveal");
    };
  }, []);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <Navbar />
      <main>
        <section className="hero section-pad" id="home" aria-labelledby="hero-title">
          <div className="hero-orb" aria-hidden="true" />
          <div className="shell hero-shell">
            <div className="hero-copy">
              <p className="availability"><span className="availability-dot" />Available for freelance projects</p>
              <h1 id="hero-title">Build a website<br />that makes your<br /><span>business stand out.</span></h1>
              <p className="hero-description">I design and build modern, responsive websites for small businesses, restaurants, startups and brands—combining thoughtful web design with practical digital marketing.</p>
              <div className="hero-actions">
                <ButtonLink href="#contact">Start your project</ButtonLink>
                <a className="text-link" href="#work">View my work <ArrowDown aria-hidden="true" size={15} /></a>
              </div>
              <div className="hero-meta">
                <span>WEB DESIGN</span><i /><span>DEVELOPMENT</span><i /><span>SEO & DIGITAL</span>
                <i /><span>AI-ASSISTED DEVELOPMENT</span>
              </div>
            </div>
            <div className="hero-art" aria-label="Website design previews">
              <div className="art-glow" aria-hidden="true" />
              <div className="hero-card hero-card-back">
                <img src="https://images.unsplash.com/photo-1559305616-3f99cd43e353?auto=format&fit=crop&w=900&q=80" alt="Cafe interior website design concept" width="900" height="1100" />
                <span className="art-caption">A considered digital home<br /><b>for your business.</b></span>
              </div>
              <div className="hero-card hero-card-front">
                <div className="mock-browser"><span><i /><i /><i /></span><b>yourbrand.studio</b><MoveUpRight aria-hidden="true" size={13} /></div>
                <img src="https://images.unsplash.com/photo-1559056199-641a0ac8b55e?auto=format&fit=crop&w=900&q=80" alt="Coffee and pastry arranged for a cafe website homepage concept" width="900" height="1100" />
                <div className="mock-card-bottom"><span>MADE TO FEEL<br />LIKE YOU.</span><ArrowUpRight aria-hidden="true" size={16} /></div>
              </div>
              <div className="hero-sticker"><span>Design<br />with a<br />purpose</span><Sparkles aria-hidden="true" size={17} /></div>
              <div className="hero-art-note"><span>01 / 04</span><i /> Thoughtful by design</div>
            </div>
          </div>
          <div className="hero-bottom shell">
            <span>Independent design for ambitious small businesses.</span>
            <a href="#intro" aria-label="Scroll to introduction"><ArrowDown aria-hidden="true" size={17} /></a>
            <span className="hero-location"><Globe2 aria-hidden="true" size={15} /> Working with businesses in India and beyond</span>
          </div>
        </section>

        <section className="quick-values" aria-label="What to expect">
          <div className="shell quick-values-grid">
            {[
              ["01", "Modern design", "Distinctive, thoughtful and built around you."],
              ["02", "Mobile first", "Made to work beautifully on every screen."],
              ["03", "Business focused", "Clear experiences with a reason behind them."],
              ["04", "Ready to grow", "SEO-conscious foundations from the start."],
            ].map(([number, title, description]) => (
              <div className="quick-value" key={number}>
                <span>{number}</span><div><h2>{title}</h2><p>{description}</p></div><ArrowUpRight aria-hidden="true" size={15} />
              </div>
            ))}
          </div>
        </section>

        <section className="intro section-pad" id="intro" aria-labelledby="intro-title">
          <div className="shell intro-layout">
            <div className="section-kicker reveal"><span>01 — THE DIFFERENCE</span><i /></div>
            <div className="intro-content reveal">
              <p className="eyebrow">Not just another website</p>
              <h2 id="intro-title">Your business deserves<br />more than <span>just a website.</span></h2>
              <p className="intro-lede">It needs a digital presence that communicates your brand, builds trust and makes it easy for customers to take action.</p>
              <div className="intro-features">
                <article className="intro-feature"><span>01</span><CircleDot aria-hidden="true" size={17} /><h3>Modern design</h3><p>Clean, professional interfaces designed around your brand.</p></article>
                <article className="intro-feature"><span>02</span><Globe2 aria-hidden="true" size={17} /><h3>Mobile first</h3><p>Websites that feel considered on phones, tablets and desktops.</p></article>
                <article className="intro-feature"><span>03</span><MoveUpRight aria-hidden="true" size={17} /><h3>Business focused</h3><p>Designed around your customers and what you want to achieve.</p></article>
              </div>
            </div>
          </div>
        </section>

        <section className="work section-pad" id="work" aria-labelledby="work-title">
          <div className="shell">
            <div className="section-heading work-heading reveal">
              <div><p className="eyebrow">Selected work <span>— 2026</span></p><h2 id="work-title">Digital experiences<br />designed to <em>be remembered.</em></h2></div>
              <p>A collection of websites and digital experiences created for businesses, brands and concepts.</p>
            </div>
            <div className="project-grid">
              {projects.map((project, index) => <ProjectCard key={project.name} project={project} index={index} onSelect={setActiveProject} />)}
            </div>
            <div className="work-footer reveal"><span>Concept work created to demonstrate creative direction.</span><a href="#contact">Have a project in mind? <ArrowUpRight aria-hidden="true" size={15} /></a></div>
          </div>
        </section>

        <section className="services section-pad" id="services" aria-labelledby="services-title">
          <div className="shell">
            <div className="section-heading services-heading reveal">
              <div><p className="eyebrow">02 — What I do</p><h2 id="services-title">Everything you need to<br />build your <em>online presence.</em></h2></div>
              <p>One point of contact for a considered website and the digital pieces around it.</p>
            </div>
            <div className="service-grid">
              {services.map(({ number, title, description, icon: Icon }, index) => (
                <article className="service-card reveal" key={number} style={{ "--service-index": index } as React.CSSProperties}>
                  <div className="service-card-top"><span>{number}</span><Icon aria-hidden="true" size={21} strokeWidth={1.5} /></div>
                  <div><h3>{title}</h3><p>{description}</p></div>
                  <a href="#contact" aria-label={`Discuss ${title}`}><ArrowUpRight aria-hidden="true" size={18} /></a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="approach section-pad" aria-labelledby="approach-title">
          <div className="shell approach-layout">
            <div className="approach-visual reveal" role="img" aria-label="A sample web design layout on a laptop and mobile screen">
              <div className="approach-visual-top"><span>THE DETAILS MATTER</span><span>HS — STUDIO NOTES</span></div>
              <div className="approach-monitor">
                <div className="monitor-top"><i /><i /><i /><span>yourbusiness.com</span></div>
                <div className="monitor-content">
                  <div className="monitor-nav"><b>brand.</b><span>About&nbsp;&nbsp; Services&nbsp;&nbsp; Contact</span><i /></div>
                  <div className="monitor-copy"><small>GOOD DESIGN, MADE HUMAN.</small><strong>Make room<br />for what's next.</strong><span>Websites made for real people<br />and growing businesses.</span><i>Explore the work ↗</i></div>
                  <div className="monitor-photo" />
                </div>
                <div className="monitor-stand" />
              </div>
              <div className="approach-phone"><div className="phone-speaker" /><div className="phone-img" /><div className="phone-lines"><i /><i /><i /></div></div>
              <span className="approach-orbit" />
              <div className="approach-stamp"><span>BEAUTIFULLY<br />PRACTICAL</span><Check aria-hidden="true" size={14} /></div>
            </div>
            <div className="approach-copy reveal">
              <p className="eyebrow">Built for real life</p>
              <h2 id="approach-title">More than just<br />a <em>good-looking</em><br />website.</h2>
              <p>I bring design, technology and digital marketing together to make websites that feel right for your brand and work hard for your business.</p>
              <ul className="benefit-list">{benefits.map((benefit) => <li key={benefit}><Check aria-hidden="true" size={14} />{benefit}</li>)}</ul>
              <ButtonLink href="#contact" variant="outline">Let’s work together</ButtonLink>
            </div>
          </div>
        </section>

        <section className="process section-pad" id="process" aria-labelledby="process-title">
          <div className="shell">
            <div className="process-heading reveal"><p className="eyebrow">03 — A clear process</p><h2 id="process-title">From first idea<br />to <em>launch day.</em></h2><p>No mystery, no unnecessary complexity. Just a considered process built around your goals.</p></div>
            <ol className="process-grid">
              {processSteps.map(({ number, title, description, icon: Icon }) => (
                <li className="process-step reveal" key={number}>
                  <div className="process-step-top"><span>{number}</span><Icon aria-hidden="true" size={18} strokeWidth={1.5} /></div>
                  <h3>{title}</h3><p>{description}</p>
                </li>
              ))}
            </ol>
            <div className="process-line" aria-hidden="true"><span /></div>
          </div>
        </section>

        <section className="about section-pad" id="about" aria-labelledby="about-title">
          <div className="shell about-layout">
            <div className="about-portrait reveal" aria-label="Hari Sumanth profile image placeholder">
              <div className="portrait-grid" aria-hidden="true" />
              <span className="portrait-monogram">H<span>S</span></span>
              <span className="portrait-label">HARI SUMANTH<br />DESIGNER & DIGITAL MARKETER</span>
              <span className="portrait-side">INDEPENDENT BY CHOICE — 2026</span>
              <span className="portrait-replace">Profile photo placeholder</span>
            </div>
            <div className="about-copy reveal">
              <p className="eyebrow">A little about me</p>
              <h2 id="about-title">Hi, I’m Hari<br /><em>Sumanth.</em></h2>
              <p className="about-lede">I’m a freelance web designer and digital marketing professional focused on helping businesses create a stronger online presence.</p>
              <p>I work across website design, AI-assisted development, social media content and digital marketing. My goal is simple: understand what a business needs and turn that into a professional digital experience.</p>
              <div className="about-note"><span>“</span><p>Thoughtful work, honest conversations, and a site you feel good sharing.</p></div>
              <span className="global-note"><Globe2 aria-hidden="true" size={15} />Working with businesses in India and beyond</span>
            </div>
          </div>
        </section>

        <section className="toolkit section-pad" aria-labelledby="toolkit-title">
          <div className="shell">
            <div className="toolkit-heading reveal"><p className="eyebrow">The right tools for the job</p><h2 id="toolkit-title">Thoughtful choices.<br /><em>Useful tools.</em></h2><p>A flexible toolkit means the approach can fit your project—not the other way around.</p></div>
            <div className="toolkit-grid">
              {skillGroups.map(({ label, icon: Icon, skills }) => (
                <article className="toolkit-group reveal" key={label}>
                  <div className="toolkit-label"><Icon aria-hidden="true" size={16} /><h3>{label}</h3></div>
                  <ul>{skills.map((skill) => <li key={skill}>{skill}</li>)}</ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="pricing section-pad" aria-labelledby="pricing-title">
          <div className="shell pricing-shell reveal">
            <div className="pricing-main">
              <p className="eyebrow">Straightforward starting point</p>
              <h2 id="pricing-title">Professional websites.<br /><em>No unnecessary complexity.</em></h2>
              <p>Every business and brief is different. Start with a clear conversation, then get a scope and price that makes sense for your project.</p>
              <div className="pricing-price"><span>Website projects starting from</span><strong>₹6,000<span>*</span></strong><small>*Final pricing depends on pages, features, design complexity and project requirements.</small></div>
              <ButtonLink href="#contact" variant="light">Get a project quote</ButtonLink>
            </div>
            <div className="pricing-aside">
              <div className="price-seal"><span>GOOD<br />WORK.<br /><b>FAIR</b><br />PRICING.</span><ArrowUpRight aria-hidden="true" size={17} /></div>
              <ul>{["Clear communication", "Transparent pricing", "Professional design", "Post-launch support"].map((item) => <li key={item}><Check aria-hidden="true" size={14} />{item}</li>)}</ul>
              <span className="pricing-aside-note">A good project starts with a conversation.</span>
            </div>
          </div>
        </section>

        <section className="faq section-pad" aria-labelledby="faq-title">
          <div className="shell faq-layout">
            <div className="faq-heading reveal"><p className="eyebrow">Good questions, clearly answered</p><h2 id="faq-title">The small<br />print, <em>made simple.</em></h2><p>Wondering if we’re a good fit? Here are a few things people often ask.</p><a className="text-link" href="#contact">Ask me something else <ArrowRight aria-hidden="true" size={15} /></a></div>
            <div className="faq-list">{faqs.map(({ question, answer }, index) => <FAQItem key={question} question={question} answer={answer} index={index} />)}</div>
          </div>
        </section>

        <section className="contact section-pad" id="contact" aria-labelledby="contact-title">
          <div className="shell">
            <div className="contact-heading reveal">
              <div><p className="eyebrow">04 — Start a conversation</p><h2 id="contact-title">Let’s build<br /><em>something great.</em></h2></div>
              <div><p>Have a business idea, an outdated website or a new project in mind? Tell me what you need and let’s discuss how I can help.</p><span className="contact-aside"><Globe2 aria-hidden="true" size={15} />India and international projects welcome</span></div>
            </div>
            <div className="contact-content reveal">
              <ContactForm />
              <aside className="contact-aside-panel">
                <div className="contact-aside-number">LET’S TALK<span>— HARI SUMANTH</span></div>
                <div className="contact-aside-copy"><p>Good work begins with a clear conversation.</p><span>Share what you’re building, where you’re stuck, or just the idea you can’t stop thinking about.</span></div>
                <div className="contact-aside-card"><span>01 / 01</span><div className="contact-spark" aria-hidden="true"><Sparkles size={34} strokeWidth={1.1} /></div><p>Make your next<br />move a good one.</p><a href={`https://wa.me/?text=${encodeURIComponent("Hi Hari, I’d like to discuss a project.")}`} target="_blank" rel="noreferrer">Say hello on WhatsApp <ArrowUpRight aria-hidden="true" size={15} /></a></div>
                <span className="contact-side-note">DESIGN WITH INTENTION — BUILD FOR PEOPLE</span>
              </aside>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />
    </>
  );
}

export default App;
