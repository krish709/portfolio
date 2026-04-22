import "./Section.scss";

const Section = () => {
  return (
    <section className="section">
      <div className="section__container">
        
        {/* Content */}
        <div className="section__content">
          <h2 className="section__title">
            Build Beautiful Interfaces ⚡
          </h2>

          <p className="section__text">
            I specialize in creating modern, responsive web applications using
            React, TypeScript, and SCSS. Clean UI, smooth animations, and
            scalable architecture are my focus.
          </p>

          <button className="section__btn">Learn More</button>
        </div>

        {/* Image */}
        <div className="section__image">
          <img
            src="https://images.unsplash.com/photo-1555066931-4365d14bab8c"
            alt="section"
          />
        </div>

      </div>
    </section>
  );
};

export default Section;