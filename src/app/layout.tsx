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
  description: "Experience world-class healthcare at Supraja Hospitals. We provide specialized care across cardiology, neurology, pediatrics, and more.",
  keywords: "hospital, healthcare, cardiology, neurology, pediatrics, supraja",
  openGraph: {
    title: "Supraja Hospitals | Premium Healthcare Services",
    description: "World-class healthcare and specialized medical services.",
    type: "website",
  },
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
            <div style={{ fontWeight: 700, fontSize: "1.5rem", color: "var(--primary)" }}>
              Supraja Hospitals
            </div>
            <nav>
              <ul className="nav-links">
                <li><a href="/" className="nav-link active">Home</a></li>
                <li><a href="/about" className="nav-link">About Us</a></li>
                <li><a href="/departments" className="nav-link">Specialties</a></li>
                <li><a href="/doctors" className="nav-link">Our Doctors</a></li>
                <li><a href="/contact" className="nav-link btn btn-primary" style={{color:'white'}}>Book Appointment</a></li>
              </ul>
            </nav>
          </div>
        </header>

        <main>{children}</main>

        <footer className="footer">
          <div className="container footer-grid">
            <div>
              <h3>Supraja Hospitals</h3>
              <p>Delivering clinical excellence with compassionate care.</p>
            </div>
            <div>
              <h4>Quick Links</h4>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                <li><a href="/" style={{ color: "white" }}>Home</a></li>
                <li><a href="/about" style={{ color: "white" }}>About Us</a></li>
                <li><a href="/departments" style={{ color: "white" }}>Departments</a></li>
              </ul>
            </div>
            <div>
              <h4>Contact</h4>
              <p>123 Health Avenue<br />Medical District</p>
              <p>+1 (555) 123-4567</p>
            </div>
            <div>
              <h4>Emergency</h4>
              <p style={{ color: "var(--accent)", fontWeight: "bold", fontSize: "1.2rem" }}>911</p>
              <p>24/7 Emergency Care</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
