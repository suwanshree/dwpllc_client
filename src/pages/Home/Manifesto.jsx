import Icon from "../../components/Icon";
import { manifesto } from "../../data/organization";

export default function Manifesto() {
  return (
    <section id="manifesto" className="section manifesto-section">
      <div className="container">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Our manifesto</p>
            <h2>
              A shared direction.
              <br />
              <span>Room for your own path.</span>
            </h2>
          </div>
          <p>
            Good people. Profitable work. A reason to log back in. These are the
            principles that keep us moving.
          </p>
        </div>
        <div className="manifesto-grid">
          {manifesto.map((item) => (
            <article className="manifesto-item" key={item.title}>
              <Icon name={item.icon} size={32} />
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
