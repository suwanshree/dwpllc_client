import { charter } from "../../data/organization";
import Icon from "../../components/Icon";

export default function Charter() {
  return (
    <section id="charter" className="section charter-section">
      <div className="container charter-layout">
        <div className="charter-intro">
          <p className="eyebrow">The charter</p>
          <h2>
            Independent spirits.
            <br />
            <span>Shared standards.</span>
          </h2>
          <p>
            There’s a difference between flying together and being a crew. This
            is what we stand for.
          </p>
          <div className="charter-note">
            <Icon name="shield" size={28} />
            <span>
              Private military company.
              <br />
              <strong>Not a pirate organization.</strong>
            </span>
          </div>
        </div>
        <div className="charter-articles">
          {charter.map((item, index) => (
            <details key={item.title} open={index === 0 || undefined}>
              <summary>
                {item.title}
                <Icon name="chevron" size={20} />
              </summary>
              <p>{item.text}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
