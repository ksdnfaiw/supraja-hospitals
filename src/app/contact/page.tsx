"use client";

import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim() || !/^\S+@\S+\.\S+$/.test(formData.email)) newErrors.email = "Valid email is required";
    if (!formData.phone.trim() || !/^\d{10,}$/.test(formData.phone.replace(/\D/g, ''))) newErrors.phone = "Valid phone number is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    
    setStatus("loading");
    // Simulate API call
    setTimeout(() => {
      setStatus("success");
      setFormData({ name: "", email: "", phone: "", message: "" });
    }, 1500);
  };

  return (
    <div className="animate-fade-in">
      <section className="section section-dark">
        <div className="container text-center">
          <h1 style={{ color: "white" }}>Contact Us</h1>
          <p style={{ maxWidth: "800px", margin: "0 auto", fontSize: "1.2rem", color: "rgba(255,255,255,0.8)" }}>
            We're here to help. Reach out to us for appointments, inquiries, or emergency assistance.
          </p>
        </div>
      </section>

      <section className="section section-light">
        <div className="container grid grid-cols-2">
          {/* Contact Information */}
          <div style={{ paddingRight: "var(--spacing-md)" }}>
            <h2 style={{ color: "var(--primary)", marginBottom: "var(--spacing-sm)" }}>Get in Touch</h2>
            <p>Our support team is available to assist you with your healthcare journey.</p>
            
            <div style={{ marginTop: "var(--spacing-md)" }}>
              <div style={{ marginBottom: "var(--spacing-sm)" }}>
                <h4 style={{ color: "var(--secondary)" }}>Emergency Line (24/7)</h4>
                <p style={{ fontSize: "1.5rem", fontWeight: "bold" }}>+1 (555) 911-0000</p>
              </div>
              
              <div style={{ marginBottom: "var(--spacing-sm)" }}>
                <h4 style={{ color: "var(--secondary)" }}>General Inquiries</h4>
                <p>+1 (555) 123-4567<br/>info@suprajahospitals.com</p>
              </div>
              
              <div>
                <h4 style={{ color: "var(--secondary)" }}>Location</h4>
                <p>123 Health Avenue<br/>Medical District, NY 10001</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="card" style={{ padding: "var(--spacing-md)" }}>
            <h3 style={{ marginBottom: "var(--spacing-sm)" }}>Send us a Message</h3>
            
            {status === "success" && (
              <div style={{ padding: "1rem", backgroundColor: "rgba(5, 196, 107, 0.1)", borderLeft: "4px solid var(--secondary)", marginBottom: "1rem" }}>
                <p style={{ margin: 0, color: "var(--secondary-hover)", fontWeight: 600 }}>Message sent successfully! We will contact you soon.</p>
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label className="form-label">Full Name</label>
                <input 
                  type="text" 
                  className="form-input" 
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
                {errors.name && <span style={{ color: "var(--accent)", fontSize: "0.85rem" }}>{errors.name}</span>}
              </div>

              <div className="form-group">
                <label className="form-label">Email Address</label>
                <input 
                  type="email" 
                  className="form-input" 
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
                {errors.email && <span style={{ color: "var(--accent)", fontSize: "0.85rem" }}>{errors.email}</span>}
              </div>

              <div className="form-group">
                <label className="form-label">Phone Number</label>
                <input 
                  type="tel" 
                  className="form-input" 
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                />
                {errors.phone && <span style={{ color: "var(--accent)", fontSize: "0.85rem" }}>{errors.phone}</span>}
              </div>

              <div className="form-group">
                <label className="form-label">Message / Inquiry</label>
                <textarea 
                  className="form-input" 
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                ></textarea>
                {errors.message && <span style={{ color: "var(--accent)", fontSize: "0.85rem" }}>{errors.message}</span>}
              </div>

              <button 
                type="submit" 
                className="btn btn-primary" 
                style={{ width: "100%", marginTop: "1rem", opacity: status === "loading" ? 0.7 : 1 }}
                disabled={status === "loading"}
              >
                {status === "loading" ? "Sending..." : "Submit Message"}
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
