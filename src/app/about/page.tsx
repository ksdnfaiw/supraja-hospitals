export default function AboutPage() {
  return (
    <div className="animate-fade-in">
      <section className="section section-dark">
        <div className="container text-center">
          <h1 style={{ color: "white" }}>About Supraja Hospitals</h1>
          <p style={{ maxWidth: "800px", margin: "0 auto", fontSize: "1.2rem", color: "rgba(255,255,255,0.8)" }}>
            A legacy of clinical excellence and compassionate healthcare.
          </p>
        </div>
      </section>

      <section className="section section-light">
        <div className="container grid grid-cols-2 items-center">
          <div>
            <div style={{ 
              width: "100%", 
              height: "400px", 
              backgroundColor: "var(--border-color)", 
              borderRadius: "var(--radius-lg)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "var(--text-muted)"
            }}>
              Hospital Building Image
            </div>
          </div>
          <div>
            <h2>Our Mission</h2>
            <p>
              To provide world-class healthcare services that are accessible, affordable, and compassionate. We strive to improve the health and well-being of the communities we serve through excellence in patient care, education, and research.
            </p>
            <h2 style={{ marginTop: "var(--spacing-md)" }}>Our Vision</h2>
            <p>
              To be the premier healthcare destination, recognized globally for clinical excellence, innovation, and patient-centric care.
            </p>
          </div>
        </div>
      </section>

      <section className="section section-light" style={{ backgroundColor: "var(--bg-color)" }}>
        <div className="container text-center">
          <h2>Our Core Values</h2>
          <div className="grid grid-cols-3" style={{ marginTop: "var(--spacing-md)" }}>
            {[
              { title: "Compassion", desc: "We treat everyone with empathy, respect, and dignity." },
              { title: "Excellence", desc: "We continuously strive for the highest standards in everything we do." },
              { title: "Integrity", desc: "We are honest, transparent, and ethical in all our interactions." }
            ].map((value, idx) => (
              <div key={idx} className="card">
                <h3 style={{ color: "var(--secondary)", marginBottom: "var(--spacing-xs)" }}>{value.title}</h3>
                <p>{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
