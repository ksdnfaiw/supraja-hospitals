export default function HealthPackagesPage() {
  const packages = [
    { title: "Basic Health Check", price: "$99", features: ["Blood Count", "Lipid Profile", "Blood Sugar", "Physician Consultation"] },
    { title: "Comprehensive Care", price: "$249", features: ["Basic Package +", "ECG & X-Ray", "Liver Function Test", "Dietitian Consultation"], featured: true },
    { title: "Executive Master", price: "$499", features: ["Comprehensive +", "Treadmill Test", "Cancer Markers", "Full Body Ultrasound"] }
  ];

  return (
    <div className="animate-fade-in stagger-children">
      <section className="section section-dark">
        <div className="container text-center">
          <h1 style={{ color: "white" }}>Health Checkup Packages</h1>
          <p style={{ maxWidth: "800px", margin: "0 auto", fontSize: "1.2rem", color: "rgba(255,255,255,0.8)" }}>
            Preventive healthcare is the best investment. Choose a health package tailored to your needs.
          </p>
        </div>
      </section>

      <section className="section section-light" style={{ backgroundColor: "var(--bg-color)" }}>
        <div className="container">
          <div className="grid grid-cols-3 gap-md" style={{ alignItems: "center" }}>
            {packages.map((pkg, idx) => (
              <div key={idx} className={`card ${pkg.featured ? 'featured-card' : ''}`} style={{ 
                border: pkg.featured ? "2px solid var(--secondary)" : "1px solid var(--border-color)",
                transform: pkg.featured ? "scale(1.05)" : "scale(1)",
                textAlign: "center",
                padding: "var(--spacing-md)"
              }}>
                {pkg.featured && <div style={{ color: "var(--secondary)", fontWeight: 800, marginBottom: "1rem", letterSpacing: "1px" }}>RECOMMENDED</div>}
                <h3 style={{ color: "var(--primary)" }}>{pkg.title}</h3>
                <p style={{ fontSize: "2.5rem", fontWeight: 800, color: "var(--text-main)", margin: "1rem 0" }}>{pkg.price}</p>
                <ul style={{ listStyle: "none", padding: 0, margin: "0 0 2rem 0" }}>
                  {pkg.features.map((f, i) => (
                    <li key={i} style={{ padding: "0.5rem 0", borderBottom: "1px solid var(--border-color)" }}>{f}</li>
                  ))}
                </ul>
                <a href="/contact" className={`btn ${pkg.featured ? 'btn-primary' : 'btn-outline'}`} style={{ width: "100%" }}>
                  Book Now
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
