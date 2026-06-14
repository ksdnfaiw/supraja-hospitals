export default function BlogsPage() {
  const blogs = [
    { title: "Understanding Heart Health", category: "Cardiology", date: "June 12, 2026", excerpt: "Learn the early signs of cardiovascular issues and how to maintain a healthy heart." },
    { title: "Nutrition for Growing Kids", category: "Pediatrics", date: "June 08, 2026", excerpt: "A comprehensive guide on balanced diets for infants and toddlers." },
    { title: "Advances in Joint Replacement", category: "Orthopedics", date: "June 01, 2026", excerpt: "How new robotic surgery techniques are making recovery faster than ever." },
    { title: "Managing Stress Effectively", category: "Wellness", date: "May 25, 2026", excerpt: "Tips from our top neurologists on keeping your nervous system calm." }
  ];

  return (
    <div className="animate-fade-in stagger-children">
      <section className="section section-dark">
        <div className="container text-center">
          <h1 style={{ color: "white" }}>Medical Blogs & News</h1>
          <p style={{ maxWidth: "800px", margin: "0 auto", fontSize: "1.2rem", color: "rgba(255,255,255,0.8)" }}>
            Stay updated with the latest medical insights, health tips, and hospital news.
          </p>
        </div>
      </section>

      <section className="section section-light">
        <div className="container">
          <div className="grid grid-cols-2 gap-md">
            {blogs.map((blog, idx) => (
              <div key={idx} className="card hover-elevate" style={{ display: "flex", gap: "1rem" }}>
                <div style={{ flex: "0 0 150px", backgroundColor: "var(--border-color)", borderRadius: "var(--radius-sm)" }}></div>
                <div>
                  <span style={{ fontSize: "0.8rem", color: "var(--secondary)", fontWeight: 700, textTransform: "uppercase" }}>{blog.category}</span>
                  <h3 style={{ margin: "0.5rem 0", color: "var(--primary)" }}>{blog.title}</h3>
                  <p style={{ fontSize: "0.9rem", marginBottom: "0.5rem" }}>{blog.excerpt}</p>
                  <p style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>{blog.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
