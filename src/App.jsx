import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Briefcase,
  ExternalLink,
  FileText,
  Flower2,
  Github,
  GraduationCap,
  LayoutDashboard,
  Linkedin,
  Mail,
  MapPin,
  MessageCircleHeart,
  MoonStar,
  PawPrint,
  ShieldCheck,
  Sparkles,
  Users,
  BarChart3,
  BrainCircuit,
  PackageOpen,
  Award,
} from 'lucide-react';
const ASSET_BASE = import.meta.env.BASE_URL + 'assets/';

const links = {
  email: 'mailto:pravalikasure@gmail.com',
  linkedin: 'https://www.linkedin.com/in/pravalika-sure-abbb661ba/',
  github: 'https://github.com/Pravalikasure11',
  resume: import.meta.env.BASE_URL + 'assets/Pravalika_Sure_HP_BusinessPlanning.pdf',
};

const projectScreens = [
  { src: ASSET_BASE + 'liquor-login.png', alt: 'Liquor app login page' },
  { src: ASSET_BASE + 'liquor-dashboard.png', alt: 'Liquor app dashboard' },
  { src: ASSET_BASE + 'liquor-inventory.png', alt: 'Liquor app inventory page' },
  { src: ASSET_BASE + 'liquor-sales.png', alt: 'Liquor app sales page' },
  { src: ASSET_BASE + 'liquor-expenses.png', alt: 'Liquor app expenses page' },
  { src: ASSET_BASE + 'liquor-analytics.png', alt: 'Liquor app analytics page' },
  { src: ASSET_BASE + 'liquor-seasonal.png', alt: 'Liquor app seasonal page' },
  { src: ASSET_BASE + 'liquor-alerts.png', alt: 'Liquor app stock alerts page' },
  { src: ASSET_BASE + 'liquor-deals.png', alt: 'Liquor app supplier deals page' },
  { src: ASSET_BASE + 'liquor-settings.png', alt: 'Liquor app settings page' }
];

const certifications = [
  {
    title: 'Microsoft Certified: Fabric Data Engineer Associate (DP-700)',
    detail: 'Focused on data loading patterns, orchestration, scalable data architectures, and analytics solution management in Microsoft Fabric.',
    status: 'Exam scheduled for Monday',
    skills: ['Microsoft Fabric', 'Data Engineering', 'Pipelines', 'Analytics Architecture']
  },
  {
    title: 'Amazon ML Summer School',
    detail: 'Attended a competitive program covering supervised learning, deep neural networks, dimensionality reduction, unsupervised learning, causal inference, and reinforcement learning.',
    status: 'Completed',
    image: ASSET_BASE + 'amazon-ml-school.jpeg',
    skills: ['Machine Learning', 'Deep Learning', 'Causal Inference', 'Reinforcement Learning']
  },
  {
    title: 'McKinsey Forward Program',
    detail: 'Completed a structured global learning program centered on problem solving, communication, adaptability, and business decision-making.',
    status: 'Completed',
    image: ASSET_BASE + 'mckinsey-forward.jpeg',
    skills: ['Structured Thinking', 'Communication', 'Business Strategy', 'Professional Development']
  }
];

const achievements = [
  {
    title: 'Superior Creative Head — CSI, VNR VJIET',
    detail: 'Helped host, organize, coordinate, and volunteer across multiple college events under the Computer Society of India chapter, supporting participation, execution, and community engagement.'
  },
  {
    title: 'Top 5% of Class',
    detail: 'Graduated in the top 5% during undergraduate studies, reflecting strong academic consistency and execution.'
  }
];

const aboutCards = [
  { icon: PawPrint, text: 'I love dogs and warm, kind human connection.' },
  { icon: Flower2, text: 'Flowers, visual aesthetics, and thoughtful presentation genuinely inspire me.' },
  { icon: MoonStar, text: 'I enjoy going out at night, good conversations, and vibrant city energy.' },
  { icon: PackageOpen, text: 'I love solving business problems with systems, analytics, and product thinking.' },
  { icon: Users, text: 'I enjoy talking with people and building trust; people often describe me as sweet and nice.' }
];

function SectionHeading({ eyebrow, title, subtitle }) {
  return (
    <div className="section-heading">
      <div className="eyebrow">{eyebrow}</div>
      <h2>{title}</h2>
      {subtitle ? <p>{subtitle}</p> : null}
    </div>
  );
}

function Nav() {
  return (
    <header className="nav-shell">
      <div className="container nav-row">
        <a href="#top" className="brand-wrap">
          <span className="brand-mark">PS</span>
          <span className="brand-copy">
            <strong>Pravalika Sure</strong>
            <small>Data Science Graduate • Full-Stack Analytics Builder</small>
          </span>
        </a>
        <nav className="nav-links">
          <a href="#about">About</a>
          <a href="#featured-project">Featured</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="hero-section section-shell first-shell">
      <div className="hero-glow" />
      <div className="container hero-grid refined">
        <div className="hero-copy">
          <span className="eyebrow-pill">Business, analytics, product, and polished execution</span>
          <h1>I build polished analytics products that help businesses make smarter, faster, more confident decisions.</h1>
          <p>
            I combine business thinking, technical execution, and visual storytelling to build systems around inventory, revenue,
            forecasting, and decision intelligence.
          </p>
          <div className="button-row">
            <a className="btn btn-primary" href="#featured-project">View Featured Project <ArrowRight size={16} /></a>
            <a className="btn btn-secondary" href={links.resume} target="_blank" rel="noreferrer"><FileText size={16} /> Resume</a>
          </div>
          <div className="link-row">
            <a href={links.email}><Mail size={16}/> pravalikasure@gmail.com</a>
            <a href={links.linkedin} target="_blank" rel="noreferrer"><Linkedin size={16}/> LinkedIn</a>
            <a href={links.github} target="_blank" rel="noreferrer"><Github size={16}/> GitHub</a>
            <span><MapPin size={16}/> College Park, MD</span>
          </div>
        </div>

        <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="hero-portrait-only">
          <div className="portrait-card card refined-portrait">
            <img src={ASSET_BASE + 'pravalika-sun.png'} alt="Pravalika portrait" className="hero-photo refined-photo" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section id="about" className="section-shell bordered">
      <div className="container">
        <SectionHeading
          eyebrow="About Me"
          title="A builder who likes people, aesthetics, and solving real business problems"
          subtitle="I care about work that feels useful, beautiful, and grounded in the real world — especially when it helps people operate better and make decisions with more confidence."
        />
        <div className="about-layout">
          <div className="strength-grid">
            {strengthCards.map((item) => {
              const Icon = item.icon;
              return <div key={item.title} className="card strength-card"><Icon size={20}/><h3>{item.title}</h3><p>{item.text}</p></div>;
            })}
          </div>
          <div className="about-card-grid">
            {aboutCards.map((item) => {
              const Icon = item.icon;
              return <div key={item.text} className="card about-card"><Icon size={20}/><p>{item.text}</p></div>;
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function FeaturedProject() {
  const [active, setActive] = useState(projectScreens[0]);
  return (
    <section id="featured-project" className="section-shell bordered">
      <div className="container">
        <SectionHeading eyebrow="Featured Project" title={featuredProject.title} subtitle={featuredProject.subtitle} />
        <div className="feature-grid premium-gap">
          <div className="feature-media">
            <div className="main-shot-wrap card">
              <img src={active.src} alt={active.alt} className="main-shot" />
            </div>
            <div className="thumb-grid expanded">
              {projectScreens.map((shot) => (
                <button type="button" key={shot.src} className={shot.src === active.src ? 'thumb-card active' : 'thumb-card'} onClick={() => setActive(shot)}>
                  <img src={shot.src} alt={shot.alt} />
                </button>
              ))}
            </div>
          </div>
          <div className="feature-copy card">
            <span className="pill gold">Deployed • Business-focused • Full-stack</span>
            <h3>{featuredProject.title}</h3>
            <div className="stack-row">
              {featuredProject.stack.map((item) => <span key={item} className="chip gold-chip">{item}</span>)}
            </div>
            <ul className="bullet-list">
              {featuredProject.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
            </ul>
            <div className="skill-block">
              <div className="small-heading">Skills Used</div>
              <div className="stack-row compact">
                {featuredProject.skills.map((skill) => <span key={skill} className="chip">{skill}</span>)}
              </div>
            </div>
            <div className="button-row left wrap">
              <a className="btn btn-primary" href="#" onClick={(e) => e.preventDefault()}>Live Demo (add later) <ExternalLink size={16}/></a>
              <a className="btn btn-secondary" href={links.github} target="_blank" rel="noreferrer">GitHub Profile <Github size={16}/></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProjectsSection() {
  return (
    <section id="projects" className="section-shell bordered">
      <div className="container">
        <SectionHeading eyebrow="Selected Work" title="Analytics and business systems projects" subtitle="Projects shaped around forecasting, decision support, inventory analytics, and measurable business value." />
        <div className="project-grid three-up">
          {otherProjects.map((project) => (
            <article key={project.title} className="card project-card premium">
              <span className="pill muted">Selected Work</span>
              <h3>{project.title}</h3>
              <p className="subtle">{project.description}</p>
              <div className="small-heading">Skills Used</div>
              <div className="stack-row compact">
                {project.skills.map((item) => <span key={item} className="chip">{item}</span>)}
              </div>
              <div className="button-row left top-gap-sm wrap">
                <a className="btn btn-secondary" href={project.repo} target="_blank" rel="noreferrer">GitHub Repo <Github size={16}/></a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function SkillsSection() {
  return (
    <section id="skills" className="section-shell bordered">
      <div className="container">
        <SectionHeading eyebrow="Skills" title="Technical, analytical, and business-facing strengths" subtitle="A portfolio of skills spanning development, analytics, reporting, communication, and business problem solving." />
        <div className="skill-grid five-up">
          {Object.entries(skills).map(([group, items]) => (
            <div key={group} className="card skill-card premium">
              <h3>{group}</h3>
              <div className="stack-row compact">
                {items.map((item) => <span key={item} className="chip">{item}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CertificationsSection() {
  return (
    <section className="section-shell bordered">
      <div className="container">
        <SectionHeading eyebrow="Certifications & Programs" title="Technical depth and structured business learning" subtitle="Programs and certifications that strengthen both my engineering capability and business thinking." />
        <div className="cert-grid">
          {certifications.map((cert) => (
            <article key={cert.title} className="card cert-card premium">
              {cert.image ? <div className="cert-image-wrap"><img src={cert.image} alt={cert.title} className="cert-image" /></div> : null}
              <span className="pill muted">{cert.status}</span>
              <h3>{cert.title}</h3>
              <p className="subtle">{cert.detail}</p>
              <div className="small-heading">Skills Highlighted</div>
              <div className="stack-row compact cert-chip-wrap">
                {cert.skills.map((skill) => <span key={skill} className="chip">{skill}</span>)}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function AchievementsSection() {
  return (
    <section className="section-shell bordered">
      <div className="container">
        <SectionHeading eyebrow="Achievements & Leadership" title="Experiences that reflect initiative, ownership, and community involvement" subtitle="A mix of academic performance, student leadership, and event support that shaped how I work with people and execute ideas." />
        <div className="project-grid two-up">
          {achievements.map((item) => (
            <article key={item.title} className="card project-card premium">
              <MessageCircleHeart size={20} className="gold-icon" />
              <h3>{item.title}</h3>
              <p className="subtle">{item.detail}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function EducationSection() {
  return (
    <section className="section-shell bordered">
      <div className="container">
        <SectionHeading eyebrow="Education" title="Academic foundation" subtitle="Strong grounding in data science, computer science, analytics, and business-oriented problem solving." />
        <div className="project-grid two-up">
          <article className="card edu-card premium">
            <div className="edu-row">
              <div className="edu-logo-wrap"><img src={ASSET_BASE + 'umd.png'} alt="University of Maryland logo" className="edu-logo" /></div>
              <div>
                <h3>University of Maryland, College Park</h3>
                <p className="subtle">Master of Science in Data Science</p>
                <p className="meta-line">Aug 2024 – May 2026 • GPA: 3.87 / 4.0</p>
              </div>
            </div>
          </article>
          <article className="card edu-card premium">
            <div className="edu-row">
              <div className="edu-logo-wrap"><img src={ASSET_BASE + 'vnr.png'} alt="VNR VJIET logo" className="edu-logo" /></div>
              <div>
                <h3>VNR VJIET</h3>
                <p className="subtle">Bachelor of Technology in Computer Science and Engineering</p>
                <p className="meta-line">Aug 2020 – May 2024 • GPA: 9.01 / 10 • Graduated Top 5%</p>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section id="contact" className="section-shell bordered bottom-space">
      <div className="container contact-card card premium centerish">
        <span className="eyebrow">Contact</span>
        <h2>Let’s build something that creates real business value.</h2>
        <p>I’m excited by roles where analytics, product thinking, communication, and technical execution come together.</p>
        <div className="button-row center wrap">
          <a className="btn btn-primary" href={links.email}>Email Me</a>
          <a className="btn btn-secondary" href={links.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          <a className="btn btn-secondary" href={links.github} target="_blank" rel="noreferrer">GitHub</a>
          <a className="btn btn-secondary" href={links.resume} target="_blank" rel="noreferrer">Resume</a>
        </div>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <>
      <Nav />
      <main className="app-shell">
        <Hero />
        <AboutSection />
        <FeaturedProject />
        <ProjectsSection />
        <SkillsSection />
        <CertificationsSection />
        <AchievementsSection />
        <EducationSection />
        <ContactSection />
      </main>
    </>
  );
}
