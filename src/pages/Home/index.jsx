import { useEffect, useRef, useState } from "react";
import { useDisclosure } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { LoginModal } from "../../components/Modal/LoginModal";
import Icon from "../../components/Icon";
import logo from "../../assets/pngs/logo-small.png";
import { links } from "../../data/organization";
import { useAuthStore } from "../../store";
import Landing, { About, Operations } from "./Landing";
import History from "./History";
import Manifesto from "./Manifesto";
import Charter from "./Charter";
import Video from "./Video";

const navItems = [
  ["About", "about"],
  ["Operations", "operations"],
  ["History", "history"],
  ["Our values", "manifesto"],
];

function Brand() {
  return (
    <a className="brand" href="#home" aria-label="Dark Water Privateers home">
      <img src={logo} width="49" height="50" alt="" />
      <span>
        DARK WATER
        <span>
          PRIVATEERS <small>LLC.</small>
        </span>
      </span>
    </a>
  );
}

function Recruitment() {
  return (
    <section id="join" className="section recruitment-section">
      <div className="container recruitment-layout">
        <div className="recruitment-intro">
          <p className="eyebrow">Your next chapter</p>
          <h2>
            There’s a place
            <br />
            for you <em>out here.</em>
          </h2>
          <p>
            Experienced pilot or fresh out of New Babbage — if you’re looking
            for good company and your next opportunity, let’s talk.
          </p>
          <div className="recruitment-actions">
            <a
              className="button button-primary"
              href={links.rsi}
              target="_blank"
              rel="noopener noreferrer"
            >
              Apply on RSI <Icon name="external" size={17} />
            </a>
            <a
              className="button button-outline"
              href={links.discord}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon name="discord" size={20} /> Join our Discord
            </a>
          </div>
        </div>
        <ol className="join-steps">
          <li>
            <span>01</span>
            <div>
              <h3>Meet the crew</h3>
              <p>
                Drop into Discord, introduce yourself, and see if Dark Water
                feels like home.
              </p>
            </div>
          </li>
          <li>
            <span>02</span>
            <div>
              <h3>Make it official</h3>
              <p>
                Sign in to your RSI account, visit our organization page, and
                select “Join us now!” to apply.
              </p>
            </div>
          </li>
          <li>
            <span>03</span>
            <div>
              <h3>Find your next contract</h3>
              <p>
                Connect with the crew and talk to a recruiter about getting
                involved.
              </p>
            </div>
          </li>
        </ol>
      </div>
    </section>
  );
}

function Crew() {
  return (
    <section id="crew" className="section crew-section">
      <div className="container">
        <div className="section-heading">
          <div>
            <p className="eyebrow">The people behind the callsigns</p>
            <h2>
              Independent. <span>Never alone.</span>
            </h2>
          </div>
          <a
            className="text-link"
            href={links.members}
            target="_blank"
            rel="noopener noreferrer"
          >
            Explore the full RSI roster <Icon name="external" size={16} />
          </a>
        </div>
        <div className="crew-grid">
          <a
            className="crew-member"
            href="https://robertsspaceindustries.com/en/citizens/FatalAngel"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/images/fatalangel.jpg"
              alt="FatalAngel’s RSI avatar"
              width="80"
              height="80"
              loading="lazy"
            />
            <div>
              <p className="eyebrow">Colonel · Founder</p>
              <h3>FatalAngel</h3>
              <p>General · Officer · Recruiter</p>
            </div>
            <Icon name="external" size={18} />
          </a>
          <a
            className="crew-member"
            href={links.admin}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/images/momo-king.png"
              alt="Momo_King’s RSI avatar"
              width="80"
              height="80"
              loading="lazy"
            />
            <div>
              <p className="eyebrow">Major · Officer</p>
              <h3>Momo_King</h3>
              <p>Recruiter · Marketing · Admin</p>
            </div>
            <Icon name="external" size={18} />
          </a>
        </div>
        <p className="roster-note">
          Ranks and public roles from the{" "}
          <a href={links.members} target="_blank" rel="noopener noreferrer">
            official RSI roster
          </a>
          . Visit RSI for current membership.
        </p>
      </div>
    </section>
  );
}

export default function Home() {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const menuButton = useRef(null);
  const loginTrigger = useRef(null);
  const { token, user } = useAuthStore();
  const openLogin = (event) => {
    loginTrigger.current = event.currentTarget;
    onOpen();
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-15% 0px -65% 0px" },
    );
    [
      "home",
      "about",
      "operations",
      "history",
      "manifesto",
      "charter",
      "transmission",
      "crew",
      "join",
    ].forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const close = (event) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        menuButton.current?.focus();
      }
      if (event.type === "click" && !event.target.closest(".site-header"))
        setMenuOpen(false);
    };
    document.addEventListener("keydown", close);
    document.addEventListener("click", close);
    return () => {
      document.removeEventListener("keydown", close);
      document.removeEventListener("click", close);
    };
  }, [menuOpen]);

  return (
    <div className="public-site">
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <div className="announcement">
        <span className="recruiting-dot" />
        <span>
          New horizons. New opportunities. <strong>Now recruiting.</strong>
        </span>
        <a href="#join">Join the crew</a>
      </div>
      <header className="site-header">
        <div className="container header-inner">
          <Brand />
          <nav className="desktop-nav" aria-label="Main navigation">
            {navItems.map(([label, id]) => (
              <a
                href={`#${id}`}
                key={id}
                aria-current={activeSection === id ? "location" : undefined}
              >
                {label}
              </a>
            ))}
          </nav>
          <div className="header-actions">
            {token && user ? (
              <Link to="/members" className="member-login">
                <Icon name="lock" size={16} />
                <span>Member portal</span>
              </Link>
            ) : (
              <button className="member-login" onClick={openLogin}>
                <Icon name="lock" size={16} />
                <span>Member login</span>
              </button>
            )}
            <a className="button button-primary header-join" href="#join">
              Join the crew
            </a>
            <button
              ref={menuButton}
              className="menu-toggle"
              aria-label={menuOpen ? "Close navigation" : "Open navigation"}
              aria-expanded={menuOpen}
              aria-controls="mobile-navigation"
              onClick={() => setMenuOpen((value) => !value)}
            >
              <Icon name={menuOpen ? "close" : "menu"} />
            </button>
          </div>
        </div>
        {menuOpen && (
          <nav
            id="mobile-navigation"
            className="mobile-nav"
            aria-label="Mobile navigation"
          >
            {[
              ...navItems,
              ["Charter", "charter"],
              ["Join the crew", "join"],
            ].map(([label, id]) => (
              <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)}>
                {label}
              </a>
            ))}
            <button
              onClick={() => {
                loginTrigger.current = menuButton.current;
                setMenuOpen(false);
                onOpen();
              }}
            >
              Member login <Icon name="lock" size={16} />
            </button>
          </nav>
        )}
      </header>
      <main id="main" tabIndex={-1}>
        <Landing />
        <About />
        <Operations />
        <History />
        <Manifesto />
        <Charter />
        <Video />
        <Crew />
        <Recruitment />
      </main>
      <footer className="site-footer">
        <div className="container">
          <div className="footer-top">
            <Brand />
            <p>A crew. A calling. A ’verse of possibility.</p>
            <div className="footer-social">
              <a href={links.rsi} target="_blank" rel="noopener noreferrer">
                RSI profile <Icon name="external" size={15} />
              </a>
              <a href={links.discord} target="_blank" rel="noopener noreferrer">
                Discord <Icon name="discord" size={18} />
              </a>
            </div>
          </div>
          <div className="footer-bottom">
            <p>© {new Date().getFullYear()} Dark Water Privateers LLC.</p>
            <div>
              <a href="#manifesto">Manifesto</a>
              <a href="#charter">Charter</a>
              <button onClick={openLogin}>Member login</button>
            </div>
            <a href="#home">Back to top</a>
          </div>
          <p className="fan-notice">
            An independent Star Citizen player organization. Not affiliated with
            Cloud Imperium Games or Roberts Space Industries. Star Citizen and
            associated imagery are the property of their respective owners.
          </p>
        </div>
      </footer>
      <LoginModal
        isOpen={isOpen}
        onClose={onClose}
        finalFocusRef={loginTrigger}
      />
    </div>
  );
}
