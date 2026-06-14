export default function CommunityPage() {
  const events = [
    { title: "Free Cardiac Camp", date: "July 01, 2026", location: "Supraja Main Campus", desc: "Complimentary ECG and physician consultation for senior citizens." },
    { title: "Blood Donation Drive", date: "August 15, 2026", location: "City Center Hall", desc: "Join us in saving lives. All donors receive a free basic health checkup." },
    { title: "Diabetes Awareness Walk", date: "November 14, 2026", location: "Central Park", desc: "A 5k walk to raise awareness and promote healthy lifestyles." }
  ];

  return (
    <div className="animate-fade-in stagger-children">
      <section className="section section-dark">
        <div className="container text-center">
          <h1 style={{ color: "white" }}>Community Wellness</h1>
          <p style={{ maxWidth: "800px", margin: "0 auto", fontSize: "1.2rem", color: "rgba(255,255,255,0.8)" }}>
            Our commitment to health extends beyond the hospital walls. Join our community outreach programs.
          </p>
        </div>
      </section>

      <section className="section section-light">
        <div className="container">
          <div className="grid grid-cols-3 gap-md">
            {events.map((evt, idx) => (
              <div key={idx} className="card hover-elevate">
                <div style={{ backgroundColor: "var(--primary-light)", color: "white", padding: "0.5rem", borderRadius: "var(--radius-sm)", display: "inline-block", marginBottom: "1rem", fontSize: "0.85rem", fontWeight: 700 }}>
                  {evt.date}
                </div>
                <h3 style={{ color: "var(--primary)", marginBottom: "0.5rem" }}>{evt.title}</h3>
                <p style={{ fontSize: "0.9rem", color: "var(--text-main)", fontWeight: 600, marginBottom: "0.5rem" }}>📍 {evt.location}</p>
                <p>{evt.desc}</p>
                <button className="btn btn-outline" style={{ marginTop: "1rem", width: "100%" }}>Register Now</button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
