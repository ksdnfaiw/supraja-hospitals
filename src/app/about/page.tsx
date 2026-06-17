import InsurancePartners from "@/components/InsurancePartners";

export default function AboutPage() {
  return (
    <div className="about-page">
      {/* 1. Hero Section */}
      <section className="about-hero" style={{ 
        backgroundColor: "#1e293b", 
        color: "white", 
        padding: "6rem 2rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start"
      }}>
        <div className="container" style={{ maxWidth: "800px", margin: "0 auto", textAlign: "left" }}>
          <div style={{ backgroundColor: "var(--secondary)", color: "white", padding: "0.25rem 0.75rem", borderRadius: "100px", display: "inline-block", fontSize: "0.8rem", fontWeight: 700, marginBottom: "1.5rem" }}>
            OUR LEGACY
          </div>
          <h1 style={{ fontSize: "3rem", lineHeight: 1.2, marginBottom: "1.5rem" }}>
            Healing Lives Through Compassion,<br/>Excellence & Trust
          </h1>
          <p style={{ fontSize: "1.1rem", lineHeight: 1.6, marginBottom: "2.5rem", maxWidth: "600px" }}>
            At Supraja Hospitals, our purpose transcends medical treatment. We are dedicated to providing accessible, high-quality healthcare that combines advanced technology with human-centric care, rooted in the legacy of the Dhanturi Group.
          </p>
          <div style={{ display: "flex", gap: "1rem" }}>
            <button className="btn btn-primary" style={{ backgroundColor: "#0A2540", borderColor: "#0A2540", color: "white" }}>Explore Our Story</button>
            <button className="btn btn-outline" style={{ borderColor: "rgba(255,255,255,0.3)", color: "white" }}>View Facilities</button>
          </div>
        </div>
      </section>

      {/* 2. Mission & Vision */}
      <section style={{ padding: "4rem 2rem", backgroundColor: "#f8fafc" }}>
        <div className="container" style={{ display: "flex", gap: "2rem", justifyContent: "center" }}>
          <div className="card" style={{ flex: 1, backgroundColor: "white", border: "none", boxShadow: "0 4px 6px -1px rgba(0,0,0,0.05)" }}>
            <div style={{ backgroundColor: "#003057", color: "white", width: "40px", height: "40px", borderRadius: "8px", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1rem" }}>
              <span className="material-symbols-outlined" style={{ fontSize: "20px" }}>rocket_launch</span>
            </div>
            <h3 style={{ color: "#003057", marginBottom: "1rem" }}>Our Mission</h3>
            <p style={{ color: "#43474e", fontSize: "0.95rem", lineHeight: 1.6 }}>
              To deliver world-class healthcare services through a patient-centric approach, fostering an environment of clinical excellence, medical research, and compassionate care that enhances the overall quality of life in our community.
            </p>
          </div>
          <div className="card" style={{ flex: 1, backgroundColor: "white", border: "none", boxShadow: "0 4px 6px -1px rgba(0,0,0,0.05)" }}>
            <div style={{ backgroundColor: "#008B8B", color: "white", width: "40px", height: "40px", borderRadius: "8px", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1rem" }}>
              <span className="material-symbols-outlined" style={{ fontSize: "20px" }}>visibility</span>
            </div>
            <h3 style={{ color: "#003057", marginBottom: "1rem" }}>Our Vision</h3>
            <p style={{ color: "#43474e", fontSize: "0.95rem", lineHeight: 1.6 }}>
              To be recognized as the premier destination for integrated healthcare, setting global standards in medical outcomes, innovation, and ethical practices, while remaining deeply rooted in our commitment to healing.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Core Values */}
      <section style={{ padding: "4rem 2rem", backgroundColor: "#ffffff" }}>
        <div className="container text-center">
          <h2 style={{ color: "#003057", marginBottom: "0.5rem" }}>Our Core Values</h2>
          <p style={{ color: "#43474e", marginBottom: "3rem" }}>The guiding principles that drive our commitment to excellence every single day.</p>
          
          <div className="grid grid-cols-3 gap-md" style={{ textAlign: "left" }}>
            {[
              { icon: "balance", title: "Patient First", desc: "Prioritizing the needs and safety of our patients above all else in every decision." },
              { icon: "settings", title: "Clinical Excellence", desc: "Striving for the highest medical standards and outcomes through continuous learning." },
              { icon: "shield", title: "Integrity & Transparency", desc: "Maintaining absolute honesty and ethical transparency in all clinical interactions." },
              { icon: "favorite", title: "Compassionate Care", desc: "Approaching every patient with empathy, kindness, and deep emotional support." },
              { icon: "handshake", title: "Collaboration", desc: "Working as a unified team of specialists to provide comprehensive health solutions." },
              { icon: "lightbulb", title: "Continuous Innovation", desc: "Adopting the latest medical breakthroughs and technologies for better recovery." }
            ].map((cv, i) => (
              <div key={i} className="card hover-elevate" style={{ border: "1px solid #e2e8f0", boxShadow: "none" }}>
                <div style={{ color: "#008B8B", marginBottom: "1rem" }}>
                  <span className="material-symbols-outlined" style={{ fontSize: "32px" }}>{cv.icon}</span>
                </div>
                <h4 style={{ color: "#003057", marginBottom: "0.5rem" }}>{cv.title}</h4>
                <p style={{ color: "#43474e", fontSize: "0.9rem", lineHeight: 1.5 }}>{cv.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Legacy Section */}
      <section style={{ padding: "5rem 2rem", backgroundColor: "#0A2540", color: "white" }}>
        <div className="container" style={{ display: "flex", gap: "4rem", alignItems: "center" }}>
          <div style={{ flex: 1 }}>
            <h2 style={{ marginBottom: "1.5rem" }}>The Dhanturi Group Legacy</h2>
            <p style={{ marginBottom: "1.5rem", color: "rgba(255,255,255,0.9)", lineHeight: 1.6 }}>
              Founded in 1990, the Dhanturi Group began with a singular vision: to redefine service standards in hospitality and healthcare. What started as a commitment to excellence has blossomed into a growing healthcare institution trusted by thousands.
            </p>
            <p style={{ marginBottom: "3rem", color: "rgba(255,255,255,0.9)", lineHeight: 1.6 }}>
              Our journey is marked by a series of transformative milestones, evolving from a multi-disciplinary business group to a specialized healthcare powerhouse that Supraja Hospitals represents today.
            </p>
            
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem", borderLeft: "2px solid var(--secondary)", paddingLeft: "1.5rem" }}>
              <div>
                <div style={{ color: "var(--secondary)", fontWeight: 700, fontSize: "0.9rem" }}>1990</div>
                <h4 style={{ margin: "0.25rem 0" }}>Foundation of Dhanturi Group</h4>
                <p style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.7)" }}>A commitment to service excellence begins across industries.</p>
              </div>
              <div>
                <div style={{ color: "var(--secondary)", fontWeight: 700, fontSize: "0.9rem" }}>2010s</div>
                <h4 style={{ margin: "0.25rem 0" }}>Strategic Pivot to Healthcare</h4>
                <p style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.7)" }}>Identifying the critical need for high-quality clinical infrastructure.</p>
              </div>
              <div>
                <div style={{ color: "var(--secondary)", fontWeight: 700, fontSize: "0.9rem" }}>Today</div>
                <h4 style={{ margin: "0.25rem 0" }}>Supraja Hospitals Rising</h4>
                <p style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.7)" }}>Evolving into a 100-bed multi-specialty institution.</p>
              </div>
            </div>
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ backgroundColor: "#cbd5e1", borderRadius: "12px", height: "400px", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <span style={{ color: "#475569", fontWeight: 700, fontSize: "1.5rem" }}>ADVANCED CATH-LAB IMAGE</span>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Trust Strip */}
      <section style={{ padding: "2rem", backgroundColor: "#eaf1ff", borderBottom: "1px solid #dce9ff" }}>
        <div className="container" style={{ display: "flex", justifyContent: "space-around", alignItems: "center", flexWrap: "wrap", gap: "2rem" }}>
          {[
            "Multi-Specialty Center", "Advanced Infrastructure", "NABH Standards", "24/7 Patient Support"
          ].map((item, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "#43474e", fontWeight: 600, fontSize: "0.9rem" }}>
              <span className="material-symbols-outlined" style={{ fontSize: "1.5rem", color: "#008B8B" }}>verified</span> {item}
            </div>
          ))}
        </div>
      </section>

      {/* 6. Infrastructure */}
      <section style={{ padding: "5rem 2rem", backgroundColor: "white" }}>
        <div className="container">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "3rem" }}>
            <div style={{ maxWidth: "600px" }}>
              <h2 style={{ color: "#0A2540", marginBottom: "0.5rem" }}>World-Class Infrastructure</h2>
              <p style={{ color: "#64748b" }}>Equipped with state-of-the-art medical technology to ensure precision, speed, and safety in every clinical procedure.</p>
            </div>
            <button className="btn" style={{ backgroundColor: "#e2e8f0", color: "#0f172a" }}>Download Facility Guide</button>
          </div>

          <div className="grid grid-cols-4 gap-md">
            {[
              { title: "100-Bed Facility", desc: "Comprehensive inpatient and outpatient services." },
              { title: "Advanced OTs", desc: "Modular Operation Theaters equipped for complex surgeries." },
              { title: "Cath Lab", desc: "Specialized cardiac unit for interventional procedures." },
              { title: "24/7 Emergency", desc: "Round-the-clock critical care with dedicated ambulances." }
            ].map((infra, i) => (
              <div key={i} style={{ backgroundColor: "#0A2540", color: "white", padding: "1.5rem", borderRadius: "8px", height: "250px", display: "flex", flexDirection: "column", justifyContent: "flex-end" }}>
                <h4 style={{ marginBottom: "0.5rem" }}>{infra.title}</h4>
                <p style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.8)" }}>{infra.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Leadership & CTA */}
      <section style={{ padding: "4rem 2rem", backgroundColor: "#f8fafc" }}>
        <div className="container" style={{ display: "flex", gap: "4rem", alignItems: "center" }}>
          <div style={{ flex: 1 }}>
            <h2 style={{ color: "#0A2540", marginBottom: "1rem" }}>The People Behind the Institution</h2>
            <p style={{ color: "#64748b", marginBottom: "2rem", lineHeight: 1.6 }}>
              Our leadership team brings decades of combined experience in hospital management and clinical excellence, ensuring Supraja Hospitals remains a beacon of trust.
            </p>
            <blockquote style={{ borderLeft: "3px solid var(--secondary)", paddingLeft: "1rem", fontStyle: "italic", color: "var(--secondary)", fontWeight: 600 }}>
              "Excellence is not an act, but a habit of continuous improvement."
            </blockquote>
          </div>
          <div style={{ flex: 2 }} className="grid grid-cols-2 gap-md">
            {[
              { title: "Vision-Driven Growth", desc: "Strategically expanding our services and facilities to meet evolving healthcare needs." },
              { title: "Ethical Governance", desc: "Implementing strict ethical frameworks and protocols to ensure patient safety." },
              { title: "Academic Leadership", desc: "Fostering a culture of research and teaching among our medical staff." },
              { title: "Community Engagement", desc: "Actively participating in local health initiatives and affordable care programs." }
            ].map((l, i) => (
              <div key={i} className="card" style={{ backgroundColor: "white", border: "1px solid #e2e8f0", boxShadow: "none" }}>
                <h4 style={{ color: "#0A2540", marginBottom: "0.5rem" }}>{l.title}</h4>
                <p style={{ color: "#64748b", fontSize: "0.85rem", lineHeight: 1.5 }}>{l.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Insurance Partners */}
      <InsurancePartners />

      {/* 9. Green CTA Strip */}
      <section style={{ backgroundColor: "var(--secondary)", padding: "4rem 2rem", textAlign: "center", color: "white" }}>
        <div className="container">
          <h2 style={{ marginBottom: "1rem" }}>Ready to Experience Care?</h2>
          <p style={{ marginBottom: "2rem", fontSize: "1.1rem" }}>Schedule a visit or consult with our experts today to start your journey towards better health.</p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center" }}>
            <button className="btn" style={{ backgroundColor: "#0A2540", color: "white", border: "none" }}>Book An Appointment</button>
            <button className="btn" style={{ backgroundColor: "white", color: "#0A2540", border: "none" }}>Contact Support</button>
          </div>
        </div>
      </section>
    </div>
  );
}
