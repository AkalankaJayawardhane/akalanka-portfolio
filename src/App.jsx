import React, { useEffect, useMemo, useState } from 'react';
import { profile, projects, projectFilters, skillGroups } from './config';

function Arrow({ diagonal = false }) {
  return diagonal ? (
    <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 17 17 7M7 7h10v10" /></svg>
  ) : (
    <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 12h15m-6-6 6 6-6 6" /></svg>
  );
}

function GithubIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.55.1.76-.24.76-.53v-2.05c-3.1.68-3.76-1.31-3.76-1.31-.5-1.29-1.24-1.63-1.24-1.63-1.01-.7.08-.69.08-.69 1.12.08 1.71 1.15 1.71 1.15 1 .1.74 2.14 3.37 1.52.1-.73.39-1.22.7-1.5-2.48-.28-5.09-1.24-5.09-5.52 0-1.22.44-2.21 1.15-2.99-.12-.28-.5-1.42.11-2.95 0 0 .94-.3 3.05 1.14a10.6 10.6 0 0 1 5.55 0c2.11-1.44 3.05-1.14 3.05-1.14.61 1.53.23 2.67.11 2.95.72.78 1.15 1.77 1.15 2.99 0 4.29-2.62 5.24-5.11 5.51.4.35.75 1.02.75 2.06V22c0 .29.2.63.77.52A11.1 11.1 0 0 0 12 .9Z" /></svg>;
}

function LinkedinIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.35V8.98h3.42v1.57h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.26 2.37 4.26 5.45v6.3ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12Zm1.78 13.02H3.56V8.98h3.56v11.47ZM22.22 0H1.77C.8 0 .01.77.01 1.72v20.56c0 .95.79 1.72 1.76 1.72h20.45c.97 0 1.77-.77 1.77-1.72V1.72C23.99.77 23.19 0 22.22 0Z" /></svg>;
}

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const items = [['Home', '#home'], ['About', '#about'], ['Skills', '#skills'], ['Projects', '#projects'], ['Education', '#education'], ['Contact', '#contact']];
  const close = () => setMenuOpen(false);
  return (
    <header className="site-header">
      <a className="brand" href="#home" onClick={close} aria-label="Akalanka home">
        <span className="brand-mark">AJ<span>.</span></span>
        <span className="brand-copy"><strong>AKALANKA JAYAWARDHANE</strong><small>IT UNDERGRADUATE</small></span>
      </a>
      <button className="menu-toggle" onClick={() => setMenuOpen((v) => !v)} aria-label="Toggle menu" aria-expanded={menuOpen}>
        <span /><span />
      </button>
      <nav className={menuOpen ? 'nav-links nav-open' : 'nav-links'} aria-label="Main navigation">
        {items.map(([label, href]) => <a href={href} onClick={close} key={label}>{label}</a>)}
      </nav>
      <div className="header-actions">
        <a className="icon-link" href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub"><GithubIcon /></a>
        <a className="icon-link" href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><LinkedinIcon /></a>
        {profile.cvPath ? <a className="button button-primary button-small" href={profile.cvPath} download>Download CV <Arrow diagonal /></a> : <a className="button button-primary button-small" href="#contact">Let's talk <Arrow diagonal /></a>}
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero section-shell" id="home">
      <div className="hero-copy">
        <div className="eyebrow"><span className="eyebrow-line" /> HELLO, I'M</div>
        <h1>{profile.firstName}<br /><span>{profile.lastName}</span></h1>
        <div className="hero-role">IT Undergraduate <i /> Rajarata University of Sri Lanka</div>
        <p className="hero-intro">A passionate IT undergraduate interested in AI, Computer Vision, Web Development and Mobile App Development. I enjoy building practical solutions that combine intelligent systems and modern web technologies.</p>
        <div className="hero-tags"><span>AI & COMPUTER VISION</span><span>WEB DEVELOPMENT</span><span>MOBILE APPS</span></div>
        <div className="hero-actions">
          <a className="button button-primary" href="#projects">View My Work <Arrow /></a>
          <a className="button button-outline" href="#contact">Contact Me <Arrow diagonal /></a>
        </div>
        <div className="hero-socials">
          <a href={profile.github} target="_blank" rel="noreferrer"><GithubIcon /> GitHub <Arrow diagonal /></a>
          <span />
          <a href={profile.linkedin} target="_blank" rel="noreferrer"><LinkedinIcon /> LinkedIn <Arrow diagonal /></a>
        </div>
      </div>
      <div className="hero-portrait-wrap" aria-label="Portrait">
        <img className="hero-portrait" src="/akalanka-profile.png" alt="Akalanka Jayawardhane" />
      </div>
      <div className="hero-foot"><span>BASED IN SRI LANKA</span><span>CURIOUS BY NATURE. BUILDER BY CHOICE.</span><span>SCROLL TO EXPLORE ↓</span></div>
    </section>
  );
}

function SectionTitle({ eyebrow, title, accent, description, aside }) {
  return (
    <div className="section-title">
      <div>
        <div className="section-eyebrow">{eyebrow}</div>
        <h2>{title} <em>{accent}</em></h2>
      </div>
      {description && <p>{description}</p>}
      {aside}
    </div>
  );
}

function SkillsSection() {
  return (
    <section className="section-shell section-block" id="skills">
      <SectionTitle eyebrow="WHAT I WORK WITH" title="Skills &" accent="Tools" />
      <div className="skills-grid">
        {skillGroups.map((group, index) => (
          <article className="skill-card" key={group.title}>
            <div className="skill-card-head">
              <span className="skill-icon">{group.icon}</span>
              <div><h3>{group.title}</h3><small>{group.subtitle}</small></div>
            </div>
            <div className="skill-chips">{group.skills.map((skill) => <span key={skill}>{skill}</span>)}</div>
            <span className="skill-index">0{index + 1}</span>
          </article>
        ))}
      </div>
    </section>
  );
}

function ProjectCard({ project, onOpen }) {
  return (
    <article className="project-card">
      <button className="project-image-button" onClick={() => onOpen(project)} aria-label={`View ${project.name} details`}>
        <img src={project.image} alt={`${project.name} project preview`} loading="lazy" />
        <span className="image-open"><Arrow diagonal /></span>
      </button>
      <div className="project-content">
        <div className="project-meta"><span>{project.category}</span><span className="project-status">{project.status}</span></div>
        <h3>{project.name}</h3>
        <h4>{project.subtitle}</h4>
        <p>{project.description}</p>
        <div className="project-tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
        <button className="project-details-link" onClick={() => onOpen(project)}>View details <Arrow /></button>
      </div>
    </article>
  );
}

function ProjectsSection() {
  const [filter, setFilter] = useState('All');
  const [selected, setSelected] = useState(null);
  const visibleProjects = useMemo(() => filter === 'All' ? projects : projects.filter((project) => project.filter === filter), [filter]);

  useEffect(() => {
    if (!selected) return undefined;
    const onKey = (event) => { if (event.key === 'Escape') setSelected(null); };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [selected]);

  return (
    <section className="section-shell section-block projects-section" id="projects">
      <SectionTitle eyebrow="A FEW THINGS I'VE BUILT" title="Selected" accent="Projects" description="From computer vision experiments to web and mobile concepts, these projects reflect what I enjoy learning and building." />
      <div className="project-filters" role="group" aria-label="Filter projects">
        {projectFilters.map((item) => <button className={filter === item ? 'filter-button active' : 'filter-button'} key={item} onClick={() => setFilter(item)}>{item}</button>)}
      </div>
      <div className="projects-grid">
        {visibleProjects.map((project) => <ProjectCard key={project.id} project={project} onOpen={setSelected} />)}
      </div>
      <div className="project-count"><span>SHOWING {String(visibleProjects.length).padStart(2, '0')} / {String(projects.length).padStart(2, '0')} PROJECTS</span><span>ACADEMIC WORK · PROTOTYPES · EXPERIMENTS</span></div>
      {selected && (
        <div className="modal-backdrop" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) setSelected(null); }}>
          <section className="project-modal" role="dialog" aria-modal="true" aria-labelledby="modal-title">
            <button className="modal-close" onClick={() => setSelected(null)} aria-label="Close project details">×</button>
            <img src={selected.image} alt="" />
            <div className="modal-copy">
              <span className="modal-kicker">{selected.category} · {selected.status}</span>
              <h3 id="modal-title">{selected.name}</h3>
              <h4>{selected.subtitle}</h4>
              <p>{selected.details}</p>
              <div className="project-tags">{selected.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
            </div>
          </section>
        </div>
      )}
    </section>
  );
}

function AboutSection() {
  return (
    <section className="about-section" id="about">
      <div className="section-shell about-layout">
        <div className="about-title">
          <div className="section-eyebrow">A LITTLE ABOUT ME</div>
          <h2>Curious about<br />how things <em>work.</em></h2>
        </div>
        <div className="about-copy">
          <p className="about-lead">I like exploring how technology can turn complex ideas into useful, approachable experiences.</p>
          <p>My interests sit across artificial intelligence, computer vision, web development and mobile applications. I enjoy learning by building, testing ideas and improving them through practical work.</p>
          <p>I'm currently an IT undergraduate at <strong>Rajarata University of Sri Lanka</strong>, working on academic projects and developing my skills through hands-on experiments.</p>
          <a className="inline-link" href={profile.github} target="_blank" rel="noreferrer">Explore my GitHub <Arrow diagonal /></a>
        </div>
      </div>
    </section>
  );
}

function EducationSection() {
  return (
    <section
      className="section-shell section-block education-section"
      id="education"
    >
      <SectionTitle
        eyebrow="MY ACADEMIC JOURNEY"
        title="Education &"
        accent="Learning"
      />

      {/* University */}
      <article className="education-card">
        <div className="education-mark">RUSL</div>

        <div className="education-main">
          <span className="education-kicker">
            UNDERGRADUATE STUDIES
          </span>
          <h3>Rajarata University of Sri Lanka</h3>
          <p>Information Technology · Undergraduate</p>
        </div>

        <div className="education-side">
          <span className="education-dot" />
          CURRENT
        </div>
      </article>

      {/* Advanced Level */}
      <article className="education-card">
        <div className="education-mark">PCC</div>

        <div className="education-main">
          <span className="education-kicker">
            G.C.E. ADVANCED LEVEL
          </span>
          <h3>Pinnawala Central College</h3>
          <p>Advanced Level Studies</p>
        </div>

        <div className="education-side">
          COMPLETED
        </div>
      </article>
    </section>
  );
}

function ContactSection() {
  const emailReady = profile.email && !profile.email.includes('YOUR_EMAIL');
  return (
    <section className="contact-section" id="contact">
      <div className="section-shell contact-inner">
        <div className="section-eyebrow">HAVE A PROJECT OR AN IDEA?</div>
        <h2>Let's build<br /><em>something good.</em></h2>
        <div className="contact-row">
          <p>I'm always interested in learning, collaborating and discussing interesting technology ideas.</p>
          <div className="contact-actions">
            {emailReady ? <a className="button button-primary" href={`mailto:${profile.email}`}>Email me <Arrow diagonal /></a> : <span className="contact-hint">Add your email in <code>src/config.js</code> to enable the email button.</span>}
            <div className="contact-socials"><a href={profile.github} target="_blank" rel="noreferrer"><GithubIcon /> GitHub</a><a href={profile.linkedin} target="_blank" rel="noreferrer"><LinkedinIcon /> LinkedIn</a></div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return <footer className="site-footer"><div className="section-shell footer-inner"><a className="footer-brand" href="#home">AJ<span>.</span></a><span>DESIGNED & BUILT BY AKALANKA JAYAWARDHANE</span><a href="#home">BACK TO TOP ↑</a><span>© {new Date().getFullYear()}</span></div></footer>;
}

export default function App() {
  useEffect(() => {
    const items = document.querySelectorAll('.reveal');
    if (!('IntersectionObserver' in window)) { items.forEach((item) => item.classList.add('visible')); return undefined; }
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
      if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); }
    }), { threshold: 0.12 });
    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Header />
      <main>
        <Hero />
        <div className="focus-strip"><div className="section-shell focus-strip-inner"><span>ARTIFICIAL INTELLIGENCE</span><i>✳</i><span>COMPUTER VISION</span><i>✳</i><span>WEB DEVELOPMENT</span><i>✳</i><span>MOBILE APPLICATIONS</span><i>✳</i><span>3D VISUALIZATION</span></div></div>
        <SkillsSection />
        <ProjectsSection />
        <AboutSection />
        <EducationSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
