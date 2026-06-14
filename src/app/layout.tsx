import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Supraja Hospitals | Premium Healthcare Services",
  description: "Experience world-class healthcare at Supraja Hospitals. A Unit Of DHANTURI HOSPITALS Pvt. Ltd.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${outfit.variable}`}
    >
      <body>
        <header className="header">
          <div className="container flex items-center justify-between">
            <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", lineHeight: 1 }}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <span style={{ fontSize: "1.8rem", color: "var(--primary)", fontWeight: 800 }}>SUPRAJA</span>
              </div>
              <div style={{ fontSize: "1.4rem", color: "var(--secondary)", fontWeight: 700, letterSpacing: "1px" }}>
                HOSPITALS
              </div>
              <div style={{ fontSize: "0.6rem", color: "var(--text-main)", marginTop: "0.25rem", letterSpacing: "0.5px" }}>
                A Unit Of DHANTURI HOSPITALS Pvt. Ltd.
              </div>
            </div>
            <nav>
              <ul className="nav-links" style={{ gap: "1.5rem", fontSize: "0.95rem" }}>
                <li><a href="/about" className="nav-link">About Us</a></li>
                <li><a href="/doctors" className="nav-link">Doctors</a></li>
                <li><a href="/departments" className="nav-link">Specialties ▾</a></li>
                <li><a href="/gallery" className="nav-link">Gallery</a></li>
                <li><a href="/health-packages" className="nav-link">Health Packages</a></li>
                <li><a href="/blogs" className="nav-link">Blogs</a></li>
                <li><a href="/community" className="nav-link">Community Wellness</a></li>
                <li><a href="/contact" className="nav-link">Contact Us</a></li>
              </ul>
            </nav>
          </div>
        </header>

        <main>{children}</main>

        <footer className="footer" style={{ padding: "4rem 0 2rem 0", fontSize: "0.9rem" }}>
          <div className="container" style={{ display: "flex", flexWrap: "wrap", gap: "2rem", justifyContent: "space-between", borderBottom: "1px solid rgba(255,255,255,0.2)", paddingBottom: "2rem", marginBottom: "1rem" }}>
            
            {/* Left Column */}
            <div style={{ flex: "1 1 250px", maxWidth: "300px" }}>
              <div style={{ marginBottom: "1rem" }}>
                <span style={{ fontSize: "1.5rem", fontWeight: 800 }}>SUPRAJA</span><br/>
                <span style={{ fontSize: "1.2rem" }}>HOSPITALS</span>
              </div>
              <div style={{ 
                display: "inline-block", 
                backgroundColor: "white", 
                color: "var(--secondary)", 
                padding: "0.25rem 0.75rem", 
                borderRadius: "var(--radius-sm)", 
                fontWeight: 600,
                fontSize: "0.8rem",
                marginBottom: "1rem"
              }}>
                Caring for your health is all we do
              </div>
              <p style={{ color: "white", fontSize: "0.85rem", marginBottom: "2rem", lineHeight: 1.6 }}>
                At our hospital, we strive to provide the best quality healthcare and providing the highest level of care to our patients.
              </p>
              
              <h4 style={{ marginBottom: "1rem", fontSize: "1rem", letterSpacing: "1px" }}>CONTACT US</h4>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "1rem", padding: 0, margin: 0 }}>
                <li style={{ display: "flex", gap: "0.5rem" }}>
                  <span>📍</span>
                  <span>Nagole X Road, Hyderabad</span>
                </li>
                <li style={{ display: "flex", gap: "0.5rem" }}>
                  <span>📞</span>
                  <span>We provide 24*7 services<br/>040-29329999</span>
                </li>
                <li style={{ display: "flex", gap: "0.5rem" }}>
                  <span>💬</span>
                  <span>WhatsApp us at<br/>9281038298</span>
                </li>
              </ul>
            </div>

            {/* Middle Section 1 */}
            <div style={{ flex: "1 1 150px" }}>
              <h4 style={{ marginBottom: "1rem", fontSize: "0.9rem", borderBottom: "1px solid rgba(255,255,255,0.2)", paddingBottom: "0.5rem" }}>FOR PATIENTS</h4>
              <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "0.75rem", marginBottom: "2rem" }}>
                <li><a href="/doctors" style={{ color: "white" }}>Doctors</a></li>
                <li><a href="/health-packages" style={{ color: "white" }}>Health Checkups</a></li>
                <li><a href="/medicines" style={{ color: "white" }}>Medicines</a></li>
              </ul>

              <h4 style={{ marginBottom: "1rem", fontSize: "0.9rem", borderBottom: "1px solid rgba(255,255,255,0.2)", paddingBottom: "0.5rem" }}>CENTER OF EXCELLENCE</h4>
              <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                <li><a href="/departments/cardiology" style={{ color: "white" }}>Cardiology</a></li>
                <li><a href="/departments/cardiothoracic" style={{ color: "white" }}>Cardiothoracic</a></li>
                <li><a href="/departments/orthopedics" style={{ color: "white" }}>Orthopedics</a></li>
                <li><a href="/departments/gastroenterology" style={{ color: "white" }}>Gastroenterology</a></li>
                <li><a href="/departments/general-surgery" style={{ color: "white" }}>General Surgery</a></li>
                <li><a href="/departments/oncology" style={{ color: "white" }}>Oncology</a></li>
              </ul>
            </div>

            {/* Middle Section 2 */}
            <div style={{ flex: "1 1 150px" }}>
              <h4 style={{ marginBottom: "1rem", fontSize: "0.9rem", borderBottom: "1px solid rgba(255,255,255,0.2)", paddingBottom: "0.5rem" }}>COMPANY</h4>
              <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "0.75rem", marginBottom: "2rem" }}>
                <li><a href="/about" style={{ color: "white" }}>About Us</a></li>
                <li><a href="/careers" style={{ color: "white" }}>Careers</a></li>
                <li><a href="/contact" style={{ color: "white" }}>Contact Us</a></li>
              </ul>

              <div style={{ height: "2.5rem" }}></div> {/* Spacer */}
              <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "0.75rem", marginTop: "0.25rem" }}>
                <li><a href="/departments/gynecology" style={{ color: "white" }}>Gynecology</a></li>
                <li><a href="/departments/pediatrics" style={{ color: "white" }}>Pediatrics</a></li>
                <li><a href="/departments/neonatology" style={{ color: "white" }}>Neonatology</a></li>
                <li><a href="/departments/kidney" style={{ color: "white" }}>Kidney Transplantation</a></li>
                <li><a href="/departments/nephrology" style={{ color: "white" }}>Nephrology</a></li>
              </ul>
            </div>

            {/* Middle Section 3 */}
            <div style={{ flex: "1 1 150px" }}>
              <h4 style={{ marginBottom: "1rem", fontSize: "0.9rem", borderBottom: "1px solid rgba(255,255,255,0.2)", paddingBottom: "0.5rem" }}>QUICK LINKS</h4>
              <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "0.75rem", marginBottom: "2rem" }}>
                <li><a href="/woman-and-child" style={{ color: "white" }}>Woman And Child</a></li>
                <li><a href="/contact" style={{ color: "white" }}>Book An Appointment</a></li>
                <li><a href="/diagnostics" style={{ color: "white" }}>Diagnostics And Pathology Test</a></li>
              </ul>

              <div style={{ height: "2.5rem" }}></div> {/* Spacer */}
              <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "0.75rem", marginTop: "0.25rem" }}>
                <li><a href="/departments/internal-medicine" style={{ color: "white" }}>Internal Medicine</a></li>
                <li><a href="/departments/plastic-surgery" style={{ color: "white" }}>Plastic Surgery</a></li>
                <li><a href="/departments/urology" style={{ color: "white" }}>Urology</a></li>
                <li><a href="/departments/physiotherapy" style={{ color: "white" }}>Physiotherapy</a></li>
                <li><a href="/departments/pulmonology" style={{ color: "white" }}>Pulmonology</a></li>
              </ul>
            </div>

            {/* Right Section */}
            <div style={{ flex: "1 1 150px" }}>
              <div style={{ height: "2.5rem", marginBottom: "1rem", borderBottom: "1px solid rgba(255,255,255,0.2)", paddingBottom: "0.5rem" }}></div> {/* Spacer to match headers */}
              <div style={{ height: "6rem", marginBottom: "2rem" }}></div> {/* Spacer to push down to COE level */}
              <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                <li><a href="/departments/dental" style={{ color: "white" }}>Dental</a></li>
                <li><a href="/departments/ent" style={{ color: "white" }}>ENT</a></li>
                <li><a href="/departments/emergency" style={{ color: "white" }}>Emergency Medicine</a></li>
              </ul>
            </div>

          </div>
          <div className="container" style={{ textAlign: "center", fontSize: "0.8rem", color: "rgba(255,255,255,0.7)" }}>
            Copyrights © 2025 All Rights Reserved by Supraja Hospitals
          </div>
        </footer>
      </body>
    </html>
  );
}
