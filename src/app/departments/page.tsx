export default function DepartmentsPage() {
  const departments = [
    { name: "Cardiology", desc: "Comprehensive heart care including diagnostics, surgery, and rehabilitation." },
    { name: "Neurology", desc: "Expert diagnosis and treatment of disorders of the nervous system." },
    { name: "Orthopedics", desc: "Specialized care for bones, joints, ligaments, tendons, and muscles." },
    { name: "Pediatrics", desc: "Compassionate healthcare for infants, children, and adolescents." },
    { name: "Oncology", desc: "Advanced cancer treatments including chemotherapy, radiation, and surgery." },
    { name: "Gastroenterology", desc: "Treatment for digestive system disorders and diseases." },
    { name: "Dermatology", desc: "Expert care for skin, hair, and nail conditions." },
    { name: "Ophthalmology", desc: "Comprehensive eye care and vision correction services." },
  ];

  return (
    <div className="animate-fade-in">
      <section className="section section-dark">
        <div className="container text-center">
          <h1 style={{ color: "white" }}>Medical Specialties</h1>
          <p style={{ maxWidth: "800px", margin: "0 auto", fontSize: "1.2rem", color: "rgba(255,255,255,0.8)" }}>
            Explore our wide range of specialized medical departments designed to provide you with the best possible care.
          </p>
        </div>
      </section>

      <section className="section section-light">
        <div className="container">
          <div className="grid grid-cols-3">
            {departments.map((dept, idx) => (
              <div key={idx} className="card" style={{ display: "flex", flexDirection: "column", height: "100%" }}>
                <div style={{ 
                  width: "60px", 
                  height: "60px", 
                  backgroundColor: "var(--primary-light)", 
                  borderRadius: "var(--radius-md)", 
                  marginBottom: "var(--spacing-sm)" 
                }}></div>
                <h3 style={{ marginBottom: "0.5rem" }}>{dept.name}</h3>
                <p style={{ flexGrow: 1 }}>{dept.desc}</p>
                <a href={`/departments/${dept.name.toLowerCase()}`} className="btn btn-outline" style={{ marginTop: "var(--spacing-sm)", width: "100%" }}>
                  View Details
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
