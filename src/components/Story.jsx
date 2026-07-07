import './Story.css';

const Story = () => {
  const milestones = [
    {
      year: "2023",
      title: "The Wedding",
      description: "Surrounded by friends and family, we said 'I do' and began our greatest adventure."
    },
    {
      year: "2024",
      title: "Turkey Escapade",
      description: "Things got a little too hot! We had to check out of our hotel at midnight because of the high temperature, drove for ages, and finally found another place to stay."
    },
    {
      year: "2025",
      title: "Albania Midnight Cravings",
      description: "After a nighttime disagreement where she refused to have dinner, midnight struck and she declared she was hungry! We spent the night searching everywhere for a restaurant."
    },
    {
      year: "2025",
      title: "Morocco Snack Scam",
      description: "We got tricked by a local into buying his snack. Just another funny memory added to our collection of travels!"
    },
    {
      year: "2026",
      title: "Happy 3rd Anniversary",
      description: "Through the midnight drives, late-night food hunts, and funny scams, every moment has been a blessing. Here's to many more adventures!"
    }
  ];

  return (
    <section className="story-section">
      <div className="story-container">
        <h2 className="section-title">Our Story</h2>
        <div className="timeline">
          {milestones.map((item, index) => (
            <div key={index} className="timeline-item fade-in-up" style={{ animationDelay: `${index * 0.2}s` }}>
              <div className="timeline-dot"></div>
              <div className="timeline-content hover-scale">
                <span className="timeline-year">{item.year}</span>
                <h3 className="timeline-title">{item.title}</h3>
                <p className="timeline-description">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Story;
