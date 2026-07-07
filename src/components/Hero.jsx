import './Hero.css';

const Hero = () => {
  const base = import.meta.env.BASE_URL;
  return (
    <section className="hero" style={{ backgroundImage: `url('${base}/hero_bg.png')` }}>
      <div className="hero-overlay"></div>
      <div className="hero-content fade-in-up">
        <h2 className="hero-subtitle">Celebrating Our Journey</h2>
        <h1 className="hero-title">Athil & Sameya</h1>
        <p className="hero-date">July 9, 2026</p>
      </div>
    </section>
  );
};

export default Hero;
