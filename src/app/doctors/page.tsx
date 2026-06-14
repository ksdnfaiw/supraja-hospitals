export default function DoctorsPage() {
  const doctors = [
    { name: "Dr. Sarah Jenkins", spec: "Chief of Cardiology", exp: "20+ Years" },
    { name: "Dr. Michael Chen", spec: "Senior Neurologist", exp: "15+ Years" },
    { name: "Dr. Emily Rodriguez", spec: "Pediatric Specialist", exp: "12+ Years" },
    { name: "Dr. James Wilson", spec: "Orthopedic Surgeon", exp: "18+ Years" },
    { name: "Dr. Anita Patel", spec: "Lead Oncologist", exp: "22+ Years" },
    { name: "Dr. David Thompson", spec: "General Surgery", exp: "14+ Years" },
  ];

  return (
    <div className="animate-fade-in">
      <section className="section section-dark">
        <div className="container text-center">
          <h1 style={{ color: "white" }}>Our Specialists</h1>
          <p style={{ maxWidth: "800px", margin: "0 auto", fontSize: "1.2rem", color: "rgba(255,255,255,0.8)" }}>
            Meet our team of highly qualified and experienced medical professionals dedicated to your health.
          </p>
        </div>
      </section>

      <section className="section section-light" style={{ backgroundColor: "var(--bg-color)" }}>
        <div className="container">
          {/* Filters/Search placeholder */}
          <div style={{ marginBottom: "var(--spacing-lg)", display: "flex", gap: "1rem", justifyContent: "center" }}>
            <input type="text" placeholder="Search by name or specialty..." className="form-input" style={{ maxWidth: "400px" }} />
            <button className="btn btn-primary">Search</button>
          </div>

          <div className="grid grid-cols-3">
            {doctors.map((doc, idx) => (
              <div key={idx} className="card" style={{ textAlign: "center" }}>
                <div style={{ 
                  width: "120px", 
                  height: "120px", 
                  backgroundColor: "var(--border-color)", 
                  borderRadius: "50%", 
                  margin: "0 auto var(--spacing-sm) auto",
                  overflow: "hidden"
                }}>
                  {/* Image placeholder */}
                </div>
                <h3 style={{ color: "var(--primary)" }}>{doc.name}</h3>
                <p style={{ color: "var(--secondary)", fontWeight: 600, margin: "0" }}>{doc.spec}</p>
                <p style={{ fontSize: "0.9rem", marginTop: "0.25rem" }}>Experience: {doc.exp}</p>
                
                <div style={{ marginTop: "var(--spacing-sm)" }}>
                  <a href="/appointment" className="btn btn-outline" style={{ width: "100%", padding: "0.5rem" }}>Book Appointment</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
