import Icon from "../../components/Icon";
import { links } from "../../data/organization";

export default function Landing() {
  return (
    <>
      <section id="home" className="hero" aria-labelledby="hero-title">
        <img
          className="hero-image"
          src="/images/hero.webp"
          alt="A Drake Cutlass Black flying through a Star Citizen space battle"
          width="2048"
          height="1024"
          fetchpriority="high"
        />
        <div className="hero-shade" />
        <div className="container hero-content">
          <p className="eyebrow">
            <span className="small-rule" /> Independent. Enterprising. United.
          </p>
          <h1 id="hero-title">
            The ’verse is vast.
            <br />
            Make your
            <br />
            <em>own way.</em>
          </h1>
          <p className="hero-description">
            More than a contract. More than a crew.
            <br />
            We’re Dark Water Privateers — an independent PMC turning opportunity
            into a way of life.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#join">
              Find your place
            </a>
            <a className="button button-glass" href="#transmission">
              <Icon name="play" size={18} /> Meet the Privateers
            </a>
          </div>
          <div className="hero-signature">
            <span className="signature-line" />
            <span className="mono">Established in Levski · 17 August 2950</span>
          </div>
        </div>
        <div className="hero-bottom container">
          <span className="mono">STAR CITIZEN / INDEPENDENT PMC</span>
          <a href="#about">
            Explore the organization <Icon name="chevron" size={18} />
          </a>
          <span className="mono">STANTON · PYRO · NYX</span>
        </div>
      </section>
      <div className="identity-strip">
        <div className="container identity-grid">
          <div>
            <span className="identity-label">Our designation</span>
            <strong>DWPLLC</strong>
          </div>
          <div>
            <span className="identity-label">Our specialty</span>
            <strong>Freelancing & security</strong>
          </div>
          <div>
            <span className="identity-label">Our approach</span>
            <strong>Regular · Role play</strong>
          </div>
          <div>
            <span className="identity-label">Our next chapter</span>
            <a href="#join">
              <span className="recruiting-dot" /> You’re invited
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export function About() {
  return (
    <section id="about" className="section about-section">
      <div className="container about-layout">
        <div>
          <p className="eyebrow">Welcome to Dark Water</p>
          <h2>
            Opportunity favors
            <br />
            <span>those who take it.</span>
          </h2>
        </div>
        <div className="about-copy">
          <p className="lead">
            A private military company.
            <br />
            An independent way of life.
          </p>
          <p>
            We are a PMC focused on civilian contracts, and specialized economic
            opportunities around the ’verse. Constantly expanding and recruiting
            players for many play-styles.
          </p>
          <p>
            From security contracts in Stanton to salvage runs beyond UEE space,
            we follow the work — and look after the people flying beside us.
          </p>
          <a
            className="text-link"
            href={links.rsi}
            target="_blank"
            rel="noopener noreferrer"
          >
            Our official RSI profile <Icon name="external" size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}

const operations = [
  {
    title: "Security & combat",
    category: "Protect. Escort. Engage.",
    image: "/images/security.webp",
    icon: "shield",
    description:
      "Convoy escorts, ground operations, and combat contracts. Bring your skills to the fight and help the crew come home.",
  },
  {
    title: "Industry & recovery",
    category: "Recover. Trade. Prosper.",
    image: "/images/salvage.webp",
    icon: "cargo",
    description:
      "Salvage, valuable cargo, and the next economic opportunity. Build your fortune alongside people who share your ambition.",
  },
  {
    title: "The next frontier",
    category: "Explore. Connect. Expand.",
    image: "/images/org-background.webp",
    icon: "compass",
    description:
      "From Stanton to Pyro and back home to Levski. New systems, new connections, and a path we make together.",
  },
];

export function Operations() {
  return (
    <section id="operations" className="section operations-section">
      <div className="container">
        <div className="section-heading">
          <div>
            <p className="eyebrow">What we do</p>
            <h2>
              Your skills. <span>Our next operation.</span>
            </h2>
          </div>
          <p>
            Fly the fighter. Recover the cargo. Take the contract.
            <br />
            There’s more than one way to be a Privateer.
          </p>
        </div>
        <div className="operations-grid">
          {operations.map((op) => (
            <article className="operation-card" key={op.title}>
              <div className="operation-image">
                <img
                  src={op.image}
                  alt=""
                  loading="lazy"
                  width="710"
                  height="516"
                />
                <span className="operation-icon">
                  <Icon name={op.icon} size={24} />
                </span>
              </div>
              <div className="operation-body">
                <p className="eyebrow">{op.category}</p>
                <h3>{op.title}</h3>
                <p>{op.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
