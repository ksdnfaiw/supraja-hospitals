import type { Metadata } from "next";
import Script from "next/script";
import { MapPin } from "lucide-react";
import { FaWhatsapp, FaPhoneAlt, FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";
import "./globals.css";
import Header from "../components/Header";

export const metadata: Metadata = {
  title: "Supraja Hospitals | Clinical Excellence, Compassionate Care",
  description: "Experience world-class healthcare with 12+ years of surgical precision and holistic patient well-being at Hyderabad's leading multi-specialty destination.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link href="https://fonts.googleapis.com" rel="preconnect" />
        <link crossOrigin="anonymous" href="https://fonts.gstatic.com" rel="preconnect" />
        <link href="https://fonts.googleapis.com/css2?family=Hanken+Grotesk:wght@400;500;600;700&family=Inter:wght@400;500;600&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-surface-gray text-on-surface font-body-md overflow-x-hidden transition-colors duration-500">
        
        <Header />

        <main>
          {children}
        </main>

        {/* Footer */}
        <footer className="bg-[#00162B] text-white pt-16 pb-8 md:pt-24 md:pb-8 relative overflow-hidden border-t border-white/10">
          {/* Subtle Background Glow */}
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-healing-emerald/50 to-transparent opacity-50"></div>
          
          <div className="max-w-container-max mx-auto px-4 md:px-gutter relative z-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 md:gap-12 mb-16">
              
              {/* Brand & Contact Block */}
              <div className="lg:col-span-4 space-y-8">
                <div>
                  <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBnN_wqiAxqU3lcCCKow6VetNtWy4M2Ok6yC_qw9SJ_lmiv_ZHNHYFGH0OIpYHuuxfe9-5fOBNc3r-bHuMMPH6z6aispG8GS2_EO3CiLUGC4AaO2NYRAa5ul41zlVGxCsfHHVsQLqE_4Na_zO9d5COXoU3lX6ttN1-_imzOwoD6DhIQ7e2I0_EPjHnHaqeq_8_AghWAc-ZgcQRH4REhCJOTC9TVT-YF0zg1kQimRCiSSVuPqBzwkX8oiOuRteaf1bD4JtS4VE_iyKbd" alt="Supraja Hospitals Logo" className="h-14 w-auto object-contain bg-white px-4 py-2 rounded-xl shadow-lg" />
                </div>
                <div className="bg-hospital-teal/10 text-hospital-teal border border-hospital-teal/20 px-4 py-2 rounded-full inline-block font-label-md tracking-wide text-sm">Caring for your health is all we do</div>
                <p className="text-surface-container-low/60 text-body-md leading-relaxed pr-4">At Supraja Hospitals, we strive to provide the best quality healthcare and the highest level of care to our patients through clinical excellence and compassion.</p>
                
                <div className="space-y-4 pt-2">
                  <h5 className="font-bold uppercase tracking-widest text-sm text-white flex items-center gap-2"><span className="w-4 h-px bg-healing-emerald"></span> CONTACT US</h5>
                  <div className="space-y-3 text-sm text-surface-container-low/70">
                    <div className="flex gap-3 items-start"><FaMapMarkerAlt size={18} className="text-healing-emerald mt-1 flex-shrink-0" /> <span className="leading-relaxed">Nagole X Road, Hyderabad<br/>Telangana, India</span></div>
                    <div className="flex gap-3 items-center"><FaPhoneAlt size={16} className="text-healing-emerald flex-shrink-0" /> 040-29329999</div>
                    <div className="flex gap-3 items-center"><FaWhatsapp size={18} className="text-[#25D366] flex-shrink-0" /> 9281038298</div>
                    <div className="flex gap-3 items-center"><FaEnvelope size={16} className="text-healing-emerald flex-shrink-0" /> info@suprajahospitals.com</div>
                  </div>
                </div>
              </div>

              {/* Patient Links */}
              <div className="lg:col-span-2 space-y-6 lg:ml-auto">
                <div>
                  <h5 className="font-bold uppercase tracking-widest text-sm border-b border-white/10 pb-3 mb-6 inline-block">FOR PATIENTS</h5>
                  <ul className="space-y-3 text-sm text-surface-container-low/70">
                    <li><a href="/doctors" className="hover:text-healing-emerald hover:translate-x-1 transition-all inline-block">Doctors</a></li>
                    <li><a href="/health-packages" className="hover:text-healing-emerald hover:translate-x-1 transition-all inline-block">Health Checkups</a></li>
                    <li><a href="/medicines" className="hover:text-healing-emerald hover:translate-x-1 transition-all inline-block">Medicines</a></li>
                    <li><a href="/contact" className="hover:text-healing-emerald hover:translate-x-1 transition-all inline-block">Book Appointment</a></li>
                  </ul>
                </div>
              </div>

              {/* CoE Links */}
              <div className="lg:col-span-2 space-y-6">
                <div>
                  <h5 className="font-bold uppercase tracking-widest text-sm border-b border-white/10 pb-3 mb-6 inline-block">CENTERS OF EXCELLENCE</h5>
                  <ul className="space-y-3 text-sm text-surface-container-low/70">
                    <li><a href="#" className="hover:text-healing-emerald hover:translate-x-1 transition-all inline-block">Cardiothoracic</a></li>
                    <li><a href="#" className="hover:text-healing-emerald hover:translate-x-1 transition-all inline-block">Neurology</a></li>
                    <li><a href="#" className="hover:text-healing-emerald hover:translate-x-1 transition-all inline-block">Oncology</a></li>
                    <li><a href="#" className="hover:text-healing-emerald hover:translate-x-1 transition-all inline-block">Orthopedics</a></li>
                    <li><a href="#" className="hover:text-healing-emerald hover:translate-x-1 transition-all inline-block">Gastroenterology</a></li>
                  </ul>
                </div>
              </div>

              {/* Company & Quick Links */}
              <div className="lg:col-span-2 space-y-8">
                <div>
                  <h5 className="font-bold uppercase tracking-widest text-sm border-b border-white/10 pb-3 mb-6 inline-block">COMPANY</h5>
                  <ul className="space-y-3 text-sm text-surface-container-low/70">
                    <li><a href="/about" className="hover:text-healing-emerald hover:translate-x-1 transition-all inline-block">About Us</a></li>
                    <li><a href="/careers" className="hover:text-healing-emerald hover:translate-x-1 transition-all inline-block">Careers</a></li>
                    <li><a href="/contact" className="hover:text-healing-emerald hover:translate-x-1 transition-all inline-block">Contact Us</a></li>
                    <li><a href="/privacy" className="hover:text-healing-emerald hover:translate-x-1 transition-all inline-block">Privacy Policy</a></li>
                  </ul>
                </div>
              </div>

              {/* Social Links */}
              <div className="lg:col-span-2 space-y-6">
                <div>
                  <h5 className="font-bold uppercase tracking-widest text-sm border-b border-white/10 pb-3 mb-6 inline-block">CONNECT WITH US</h5>
                  <div className="flex flex-wrap gap-3">
                    <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#1877F2] hover:border-[#1877F2] hover:-translate-y-1 transition-all group"><FaFacebookF size={18} className="text-white/70 group-hover:text-white transition-colors" /></a>
                    <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#1DA1F2] hover:border-[#1DA1F2] hover:-translate-y-1 transition-all group"><FaTwitter size={18} className="text-white/70 group-hover:text-white transition-colors" /></a>
                    <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#E4405F] hover:border-[#E4405F] hover:-translate-y-1 transition-all group"><FaInstagram size={18} className="text-white/70 group-hover:text-white transition-colors" /></a>
                    <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#0A66C2] hover:border-[#0A66C2] hover:-translate-y-1 transition-all group"><FaLinkedinIn size={18} className="text-white/70 group-hover:text-white transition-colors" /></a>
                    <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#FF0000] hover:border-[#FF0000] hover:-translate-y-1 transition-all group"><FaYoutube size={18} className="text-white/70 group-hover:text-white transition-colors" /></a>
                  </div>
                </div>
              </div>

            </div>

            {/* Bottom Bar */}
            <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-surface-container-low/50">
              <p>Copyrights © 2025 All Rights Reserved by Supraja Hospitals</p>
              <div className="flex gap-4">
                <a href="#" className="hover:text-healing-emerald transition-colors">Terms of Service</a>
                <a href="#" className="hover:text-healing-emerald transition-colors">Privacy Policy</a>
              </div>
            </div>
          </div>
        </footer>

        {/* Sticky Contact Float */}
        <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
          <a className="bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center" href="https://wa.me/9281038298">
            <FaWhatsapp size={24} />
          </a>
          <a className="bg-hospital-teal text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center" href="tel:04029329999">
            <FaPhoneAlt size={22} />
          </a>
        </div>

      </body>
    </html>
  );
}
