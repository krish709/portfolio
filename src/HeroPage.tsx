import "./Hero.scss";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__container">
        <div className="hero__content">
          <h1 className="hero__title">
            Build Modern UI with React ⚡
          </h1>

          <p className="hero__subtitle">
            Dark mode + Light mode portfolio system with smooth transitions.
          </p>

          <div className="hero__actions">
            <button className="hero__btn hero__btn--primary">
              Get Started
            </button>
            <button className="hero__btn hero__btn--secondary">
              View Work
            </button>
          </div>
        </div>

        <div className="hero__image">
          <img src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d" />
        </div>
      </div>
    </section>
  );
};

export default Hero;