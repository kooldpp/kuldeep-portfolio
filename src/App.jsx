import CustomCursor from './components/CustomCursor';
import TextPressure from './components/TextPressure';
import Lanyard from './components/Lanyard';
import MagnetLines from './components/MagnetLines';
import ProjectRing from './components/ProjectRing';
import DecryptedText from './components/DecryptedText';
import Reveal from './components/Reveal';

/* ============ DATA (from resume / LinkedIn) ============ */

const LINKS = {
  email: 'kulxerror@gmail.com',
  phone: '+91 6003092535',
  linkedin: 'https://www.linkedin.com/in/kooldp',
  github: 'https://github.com/kooldpp',
};

const SKILLS = [
  'Python', 'SQL', 'C++', 'Machine Learning', 'Scikit-Learn', 'Pandas',
  'NumPy', 'Matplotlib', 'Seaborn', 'PCA', 'Clustering', 'Classification',
  'Feature Engineering', 'MySQL', 'PostgreSQL', 'MongoDB', 'Git',
  'Jupyter', 'Predictive Analytics', 'Data Mining', 'Statistical Analysis',
  'Data Visualization',
];

const RING_ITEMS = [
  { img: '/projects/predictive.svg', label: 'PREDICTIVE MAINTENANCE' },
  { img: '/projects/drowsiness.svg', label: 'DROWSINESS DETECTION' },
  { img: '/projects/ml.svg', label: 'ML PIPELINES' },
  { img: '/projects/viz.svg', label: 'DATA VISUALIZATION' },
  { img: '/projects/github.svg', label: 'GITHUB / KOOLDPP' },
  { img: '/projects/contact.svg', label: 'LET’S WORK TOGETHER' },
];

const PROJECTS = [
  {
    index: 'PROJECT_01',
    title: 'Industrial Predictive Maintenance Analytics',
    img: '/projects/predictive.svg',
    points: [
      'Exploratory data analysis on NASA CMAPSS & AI4I industrial datasets.',
      'PCA + clustering to surface hidden degradation patterns.',
      'Random Forest based Remaining-Useful-Life (RUL) prediction models.',
      'Actionable maintenance insights via predictive analytics.',
    ],
    tags: ['Python', 'Scikit-Learn', 'PCA', 'Random Forest', 'NASA CMAPSS', 'AI4I'],
    link: LINKS.github,
  },
  {
    index: 'PROJECT_02',
    title: 'Driver Drowsiness Detection System',
    img: '/projects/drowsiness.svg',
    points: [
      'Raspberry Pi based real-time driver monitoring hardware.',
      'OpenCV eye-state detection with instant alert generation.',
      'Fatigue detection mechanisms engineered for road safety.',
    ],
    tags: ['Raspberry Pi', 'OpenCV', 'Computer Vision', 'Python', 'Real-time'],
    link: LINKS.github,
  },
];

const EXPERIENCE = [
  {
    date: 'AUG 2024 — SEP 2024',
    role: 'IT Security & Data Management Intern',
    org: 'NEEPCO India — Assam',
    points: [
      'IT security operations & enterprise data management.',
      'Hardware maintenance and system administration.',
      'Technical documentation & IT infrastructure support.',
      'Hands-on information security and data handling practice.',
    ],
  },
  {
    date: 'AUG 2023 — SEP 2023',
    role: 'Cloud Computing Intern',
    org: 'Cursa — Remote',
    points: [
      'Cloud fundamentals: virtualization, networking, storage.',
      'Cloud deployment models & service architectures.',
      'Practical assignments on cloud infrastructure concepts.',
    ],
  },
];

const EDUCATION = [
  {
    date: 'AUG 2025 — PRESENT',
    title: 'M.Tech — Data Science',
    body: 'Tezpur University, Assam · CGPA 7.2/10 · Coursework: ML, Data Mining, Pattern Recognition, Recommender Systems, Computational Biology.',
  },
  {
    date: '2021 — 2025',
    title: 'B.Tech — Computer Science & Engineering',
    body: 'Dhemaji Engineering College, Assam · CGPA 6.7/10.',
  },
  {
    date: '2019 — 2021',
    title: 'CBSE — Class X & XII',
    body: 'Kendriya Vidyalaya CRPF Amerigog, Guwahati.',
  },
];

/* ============ APP ============ */

export default function App() {
  return (
    <>
      <CustomCursor />

      {/* ---- NAV ---- */}
      <nav className="nav">
        <div className="nav-logo">
          KULDEEP<span>·</span>KH <span>/ '26</span>
        </div>
        <div className="nav-links">
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </div>
        <div className="nav-avail">
          <i /> Available
        </div>
      </nav>

      {/* ---- HERO ---- */}
      <header className="hero" id="top">
        <div>
          <p className="hero-init">
            | INITIALIZING — PORTFOLIO_2026 <b>// DATA LAB ONLINE</b> |
          </p>
          <h1 className="hero-title">
            <div>STAY</div>
            <div className="row2">
              <DecryptedText text="CURIOUS" />
            </div>
          </h1>
          <div className="hero-roles">
            <span>Data Scientist</span>
            <span>ML</span>
            <span>Analytics</span>
          </div>
          <p className="hero-bio">
            I'm Kuldeep — I turn messy industrial data into models that
            predict failures before they happen. Currently doing M.Tech Data
            Science @ Tezpur University.
          </p>
          <div className="hero-meta">
            <span>N26.14° — ASSAM, IN</span>
            <span>M.TECH @ TEZPUR UNIV</span>
            <a href="#work" className="scroll-cue">
              <i>↓</i> SCROLL TO WORK
            </a>
          </div>
        </div>
        <div className="hero-right">
          <Lanyard
            photo="/profile.jpg"
            name="Kuldeep Kashyap Haloi"
            role="Data Science · ML · Analytics"
          />
        </div>
      </header>

      {/* ---- TEXT PRESSURE ---- */}
      <section className="section" aria-label="Hello">
        <TextPressure text="HELLO" />
      </section>

      {/* ---- ABOUT ---- */}
      <section className="section" id="about">
        <Reveal>
          <div className="section-tag">
            <em>01</em> ABOUT — <DecryptedText text="WHO_AM_I" />
          </div>
        </Reveal>
        <div className="about-grid">
          <Reveal>
            <div className="about-copy">
              <p>
                M.Tech Data Science student at <span className="hl">Tezpur University</span> with
                hands-on experience in Machine Learning, Predictive Analytics,
                Data Visualization, Statistical Analysis and Data Mining.
              </p>
              <p>
                Skilled in <span className="hl">Python, SQL, Scikit-Learn, Pandas</span> and
                end-to-end ML workflows. Interested in Data Science, Artificial
                Intelligence, Predictive Analytics and Research.
              </p>
              <p>
                Languages — English / Hindi / Assamese.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="about-stats">
              <div className="stat">
                <b>02</b>
                <span>Industry Internships</span>
              </div>
              <div className="stat">
                <b>10+</b>
                <span>ML Tools & Libraries</span>
              </div>
              <div className="stat">
                <b>02</b>
                <span>Applied ML Projects</span>
              </div>
              <div className="stat">
                <b>'26</b>
                <span>M.Tech Data Science</span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---- SKILLS MARQUEE ---- */}
      <div className="marquee" aria-hidden="true">
        {[0, 1].map((k) => (
          <div className="marquee-track" key={k}>
            {SKILLS.slice(0, 11).map((s, i) => (
              <span key={i} className={i % 4 === 0 ? 'solid' : ''}>{s}</span>
            ))}
          </div>
        ))}
      </div>
      <div className="marquee reverse" aria-hidden="true">
        {[0, 1].map((k) => (
          <div className="marquee-track" style={{ '--dur': '34s' }} key={k}>
            {SKILLS.slice(11).map((s, i) => (
              <span key={i} className={i % 4 === 2 ? 'solid' : ''}>{s}</span>
            ))}
          </div>
        ))}
      </div>

      {/* ---- MAGNET LINES ---- */}
      <MagnetLines rows={7} columns={18} />

      {/* ---- WORK ---- */}
      <section className="section" id="work">
        <Reveal>
          <div className="section-tag">
            <em>02</em> WORK — <DecryptedText text="SELECTED_PROJECTS" />
          </div>
        </Reveal>

        <Reveal>
          <ProjectRing items={RING_ITEMS} />
        </Reveal>

        <div className="projects-list">
          {PROJECTS.map((p) => (
            <Reveal key={p.index}>
              <article className="project-card">
                <div className="project-media">
                  <img src={p.img} alt={p.title} />
                </div>
                <div className="project-body">
                  <div className="project-index">{p.index}</div>
                  <h3 className="project-title">{p.title}</h3>
                  <ul className="project-desc">
                    {p.points.map((pt, i) => (
                      <li key={i}>{pt}</li>
                    ))}
                  </ul>
                  <div className="project-tags">
                    {p.tags.map((t) => (
                      <span key={t}>{t}</span>
                    ))}
                  </div>
                  <a
                    className="project-link"
                    href={p.link}
                    target="_blank"
                    rel="noreferrer"
                  >
                    VIEW ON GITHUB ↗
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ---- EXPERIENCE ---- */}
      <section className="section" id="experience">
        <Reveal>
          <div className="section-tag">
            <em>03</em> EXPERIENCE — <DecryptedText text="WHERE_I'VE_BEEN" />
          </div>
        </Reveal>
        <div className="timeline">
          {EXPERIENCE.map((e) => (
            <Reveal key={e.role}>
              <div className="tl-item">
                <div className="tl-date">{e.date}</div>
                <div className="tl-role">{e.role}</div>
                <div className="tl-org">{e.org}</div>
                <ul className="tl-points">
                  {e.points.map((pt, i) => (
                    <li key={i}>{pt}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ---- EDUCATION ---- */}
      <section className="section" id="education">
        <Reveal>
          <div className="section-tag">
            <em>04</em> EDUCATION — <DecryptedText text="THE_TRAINING_DATA" />
          </div>
        </Reveal>
        <div className="edu-grid">
          {EDUCATION.map((e) => (
            <div className="edu-card" key={e.title} data-hover>
              <div className="edu-date">{e.date}</div>
              <h3>{e.title}</h3>
              <p>{e.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ---- CONTACT ---- */}
      <section className="contact" id="contact">
        <Reveal>
          <div className="section-tag" style={{ justifyContent: 'center' }}>
            <em>05</em> CONTACT — <DecryptedText text="SAY_HELLO" />
          </div>
          <h2 className="contact-big">
            LET'S BUILD
            <br />
            <a href={`mailto:${LINKS.email}`}>SOMETHING WEIRD</a>
          </h2>
          <div className="contact-links">
            <a href={`mailto:${LINKS.email}`}>{LINKS.email} ↗</a>
            <a href={LINKS.linkedin} target="_blank" rel="noreferrer">
              LinkedIn / kooldp ↗
            </a>
            <a href={LINKS.github} target="_blank" rel="noreferrer">
              GitHub / kooldpp ↗
            </a>
            <a href={`tel:${LINKS.phone.replace(/\s/g, '')}`}>{LINKS.phone}</a>
          </div>
        </Reveal>
      </section>

      <footer className="footer">
        <span>© 2026 KULDEEP KASHYAP HALOI</span>
        <span>DESIGNED IN THE DARK · POWERED BY DATA</span>
        <span>ASSAM, INDIA — N26.14° E92.79°</span>
      </footer>
    </>
  );
}
