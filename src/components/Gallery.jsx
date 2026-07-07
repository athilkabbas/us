import './Gallery.css';

const Gallery = () => {
  const photos = [
    { id: 1, url: "/20260531_172735.jpg", alt: "Anniversary memory 1" },
    { id: 2, url: "/PXL_20241230_200343416.jpg", alt: "Anniversary memory 2" },
    { id: 3, url: "/PXL_20250226_154443624.jpg", alt: "Anniversary memory 3" },
    { id: 4, url: "/PXL_20250405_230327692.jpg", alt: "Anniversary memory 4" },
    { id: 5, url: "/PXL_20250929_111056382.jpg", alt: "Anniversary memory 5" },
    { id: 6, url: "/PXL_20250929_134846096.jpg", alt: "Anniversary memory 6" },
    { id: 7, url: "/PXL_20250930_124806261~3.jpg", alt: "Anniversary memory 7" },
    { id: 8, url: "/PXL_20250930_160747724.jpg", alt: "Anniversary memory 8" },
    { id: 9, url: "/PXL_20250930_194902229.jpg", alt: "Anniversary memory 9" },
    { id: 10, url: "/PXL_20251018_164131219.jpg", alt: "Anniversary memory 10" },
    { id: 11, url: "/PXL_20251222_112406261.jpg", alt: "Anniversary memory 11" },
    { id: 12, url: "/PXL_20251223_084258988.jpg", alt: "Anniversary memory 12" },
  ];

  return (
    <section className="gallery-section">
      <div className="gallery-container">
        <h2 className="section-title">Memories</h2>
        <div className="photo-grid">
          {photos.map((photo, index) => (
            <div 
              key={photo.id} 
              className="photo-item fade-in-up hover-scale" 
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <img src={photo.url} alt={photo.alt} className="photo-img" />
              <div className="photo-overlay">
                <span className="photo-text">Beautiful Moment</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
