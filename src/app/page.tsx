import Image from "next/image";

export default function Home() {
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="section section-light" style={{ position: "relative", overflow: "hidden", padding: "var(--spacing-xl) 0" }}>
        <div className="container grid grid-cols-2 items-center">
          <div>
            <h1 style={{ marginBottom: "var(--spacing-sm)" }}>
              Advanced Healthcare<br />With Compassion
            </h1>
            <p style={{ fontSize: "1.2rem", marginBottom: "var(--spacing-md)", maxWidth: "500px" }}>
              Experience world-class medical excellence tailored to your needs. Our dedicated specialists provide comprehensive care for you and your family.
            </p>
            <div className="flex gap-sm">
              <a href="/appointment" className="btn btn-primary">Book an Appointment</a>
              <a href="/departments" className="btn btn-outline">Explore Departments</a>
            </div>
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div style={{ 
              width: "100%", 
              height: "400px", 
              backgroundColor: "var(--primary-light)", 
              borderRadius: "var(--radius-lg)",
              boxShadow: "var(--shadow-lg)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              fontSize: "1.5rem"
            }}>
              Hero Image Placeholder
            </div>
          </div>
        </div>
      </section>

      {/* Stats/Highlight Section */}
      <section className="section section-dark">
        <div className="container flex justify-between" style={{ textAlign: "center", flexWrap: "wrap", gap: "2rem" }}>
          <div>
            <h3 style={{ fontSize: "2.5rem", color: "var(--secondary)" }}>25+</h3>
            <p>Years of Excellence</p>
          </div>
          <div>
            <h3 style={{ fontSize: "2.5rem", color: "var(--secondary)" }}>150+</h3>
            <p>Specialist Doctors</p>
          </div>
          <div>
            <h3 style={{ fontSize: "2.5rem", color: "var(--secondary)" }}>50k+</h3>
            <p>Happy Patients</p>
          </div>
          <div>
            <h3 style={{ fontSize: "2.5rem", color: "var(--secondary)" }}>24/7</h3>
            <p>Emergency Care</p>
          </div>
        </div>
      </section>

      {/* Departments Section */}
      <section className="section section-light">
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "var(--spacing-lg)" }}>
            <h2>Our Centers of Excellence</h2>
            <p>Comprehensive care across multiple medical specialties.</p>
          </div>
          
          <div className="grid grid-cols-3">
            {[
              { title: "Cardiology", desc: "Advanced heart care and surgeries." },
              { title: "Neurology", desc: "Expert care for brain and nervous system." },
              { title: "Orthopedics", desc: "Comprehensive bone and joint treatments." },
              { title: "Pediatrics", desc: "Specialized care for infants and children." },
              { title: "Oncology", desc: "State-of-the-art cancer treatment center." },
              { title: "General Surgery", desc: "Minimally invasive surgical procedures." }
            ].map((dept, idx) => (
              <div key={idx} className="card">
                <div style={{ 
                  width: "50px", 
                  height: "50px", 
                  backgroundColor: "var(--primary)", 
                  borderRadius: "50%", 
                  marginBottom: "var(--spacing-sm)" 
                }}></div>
                <h3>{dept.title}</h3>
                <p>{dept.desc}</p>
                <a href={`/departments/${dept.title.toLowerCase()}`} style={{ fontWeight: 600, fontSize: "0.9rem" }}>Learn more &rarr;</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section section-light" style={{ backgroundColor: "var(--border-color)" }}>
        <div className="container text-center" style={{ textAlign: "center" }}>
          <h2 style={{ color: "var(--primary)" }}>Ready to prioritize your health?</h2>
          <p style={{ maxWidth: "600px", margin: "0 auto var(--spacing-md) auto" }}>
            Our team of experts is here to provide you with the best medical care possible. Schedule your visit today.
          </p>
          <a href="/contact" className="btn btn-primary" style={{ padding: "1rem 2rem", fontSize: "1.1rem" }}>
            Schedule an Appointment
          </a>
        </div>
      </section>
    </div>
  );
}
