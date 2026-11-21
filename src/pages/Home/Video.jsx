import { useState } from "react";
import Icon from "../../components/Icon";
import { links } from "../../data/organization";

export default function Video() {
  const [playing, setPlaying] = useState(false);
  return (
    <section id="transmission" className="section video-section">
      <div className="container">
        <div className="video-heading">
          <div>
            <p className="eyebrow">A transmission from the crew</p>
            <h2>Welcome to our ’verse.</h2>
          </div>
          <a
            className="text-link"
            href={links.video}
            target="_blank"
            rel="noopener noreferrer"
          >
            Watch on YouTube <Icon name="external" size={16} />
          </a>
        </div>
        <div className="video-frame">
          {playing ? (
            <iframe
              src="https://www.youtube-nocookie.com/embed/cF9qWH1-oDM?autoplay=1&rel=0"
              title="Dark Water Privateers organization video"
              allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          ) : (
            <button
              className="video-poster"
              onClick={() => setPlaying(true)}
              aria-label="Play Dark Water Privateers organization video"
            >
              <img
                src="/images/org-background.webp"
                alt="Dark Water Privateers ship flying through an asteroid field"
                loading="lazy"
                width="1366"
                height="768"
              />
              <span className="play-button">
                <Icon name="play" size={25} />
              </span>
              <span className="video-caption">
                <span className="eyebrow">Dark Water Privateers LLC</span>
                <strong>A crew worth flying with.</strong>
                <span>Play organization video</span>
              </span>
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
