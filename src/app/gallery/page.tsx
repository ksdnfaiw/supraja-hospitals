export default function GalleryPage() {
  const images = Array.from({ length: 9 }).map((_, i) => `Image ${i + 1}`);

  return (
    <div className="animate-fade-in stagger-children">
      <section className="section section-dark">
        <div className="container text-center">
          <h1 style={{ color: "white" }}>Hospital Gallery</h1>
          <p style={{ maxWidth: "800px", margin: "0 auto", fontSize: "1.2rem", color: "rgba(255,255,255,0.8)" }}>
            Take a look at our state-of-the-art facilities, advanced equipment, and comfortable patient rooms.
          </p>
        </div>
      </section>

      <section className="section section-light">
        <div className="container">
          <div className="grid grid-cols-3 gap-md">
            {images.map((img, idx) => (
              <div key={idx} className="card hover-zoom" style={{ padding: 0, overflow: "hidden", height: "250px", display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "var(--border-color)", border: "none" }}>
                <span style={{ color: "var(--text-muted)", fontWeight: 600 }}>{img} Placeholder</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
