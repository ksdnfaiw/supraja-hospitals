import type { Metadata } from "next";
import Script from "next/script";
import { MapPin, Phone, MessageCircle, Globe, Video, Share2, Camera } from "lucide-react";
import "./globals.css";
import "./globals.css";

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
        
        {/* Top Navigation */}
        <nav id="main-nav" className="fixed top-0 left-0 w-full z-50 bg-white border-b border-border-subtle shadow-sm flex justify-between items-center px-gutter py-4 max-w-full transition-all duration-300">
          <div className="max-w-container-max mx-auto w-full flex items-center justify-between">
            <div className="flex items-center gap-4">
              <img alt="Supraja Hospitals Logo" className="h-12 md:h-16 w-auto object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBmpCShrqjBNivLsDwdr7FHpoBlYJVYWXDyRH15TdmWVVXWj73jNtxBnz2Jv0JivPhlfyAIadxcaBUW8TzoQWb1sR1xcQ7aslugDpm6_71yZ1S_cLUO2MF5ot75J1Ms-PEOCCgoZt7-a411eu6H_fJj5zmuNE23pkELaSpRTx8sFHx-KVng9JuAQyM8AEKQPg9THR5c1G9qCPiVcJMVkRvJoWWfHOv51ZYfBt7Mz5nP0WEKzz7_fzptvniLPyOuj0_GZrVxuW3CGnFA" />
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a className="font-label-md text-label-md text-hospital-teal font-bold border-b-2 border-hospital-teal pb-1" href="/">Home</a>
              <a className="font-label-md text-label-md text-on-surface-variant hover:text-hospital-teal transition-colors" href="/departments">Specialties</a>
              <a className="font-label-md text-label-md text-on-surface-variant hover:text-hospital-teal transition-colors" href="/doctors">Doctors</a>
              <a className="font-label-md text-label-md text-on-surface-variant hover:text-hospital-teal transition-colors" href="/health-packages">Health Packages</a>
              <a className="font-label-md text-label-md text-on-surface-variant hover:text-hospital-teal transition-colors" href="/about">About Us</a>
              <a className="font-label-md text-label-md text-on-surface-variant hover:text-hospital-teal transition-colors" href="/contact">Contact Us</a>
            </div>
            <div className="flex items-center gap-6">
              <div className="hidden lg:flex flex-col items-end">
                <span className="text-label-sm font-label-sm text-on-surface-variant uppercase tracking-wider">Emergency 24/7</span>
                <a className="text-headline-md font-headline-md font-bold text-clinical-blue" href="tel:040-29329999">040-29329999</a>
              </div>
              <a href="/contact" className="bg-healing-emerald text-white font-label-md text-label-md px-6 py-3 rounded-lg shadow-sm hover:brightness-110 active:scale-95 transition-all">
                Book Appointment
              </a>
            </div>
          </div>
        </nav>

        <main className="mt-[80px]">
          {children}
        </main>

        {/* Footer */}
        <footer className="bg-clinical-blue text-white py-margin-desktop">
          <div className="max-w-container-max mx-auto px-gutter">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
              <div className="space-y-6">
                <div>
                  <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBnN_wqiAxqU3lcCCKow6VetNtWy4M2Ok6yC_qw9SJ_lmiv_ZHNHYFGH0OIpYHuuxfe9-5fOBNc3r-bHuMMPH6z6aispG8GS2_EO3CiLUGC4AaO2NYRAa5ul41zlVGxCsfHHVsQLqE_4Na_zO9d5COXoU3lX6ttN1-_imzOwoD6DhIQ7e2I0_EPjHnHaqeq_8_AghWAc-ZgcQRH4REhCJOTC9TVT-YF0zg1kQimRCiSSVuPqBzwkX8oiOuRteaf1bD4JtS4VE_iyKbd" alt="Supraja Hospitals Logo" className="h-16 w-auto object-contain bg-white p-2 rounded-lg" />
                </div>
                <div className="bg-white text-hospital-teal px-4 py-2 rounded-full inline-block font-bold text-sm">Caring for your health is all we do</div>
                <p className="text-surface-container-low/70 text-sm leading-relaxed">At Supraja Hospitals, we strive to provide the best quality healthcare and the highest level of care to our patients through clinical excellence and compassion.</p>
                <div className="space-y-4">
                  <h5 className="font-bold uppercase tracking-wider text-sm">CONTACT US</h5>
                  <div className="space-y-2 text-sm text-surface-container-low/80">
                    <div className="flex gap-2 items-center"><MapPin size={16} /> Nagole X Road, Hyderabad</div>
                    <div className="flex gap-2 items-center"><Phone size={16} /> 040-29329999</div>
                    <div className="flex gap-2 items-center"><MessageCircle size={16} /> 9281038298</div>
                  </div>
                  <div className="flex gap-3">
                    <a href="#" className="w-8 h-8 rounded bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"><Globe size={18} /></a>
                    <a href="#" className="w-8 h-8 rounded bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"><Video size={18} /></a>
                    <a href="#" className="w-8 h-8 rounded bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"><Share2 size={18} /></a>
                    <a href="#" className="w-8 h-8 rounded bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"><Camera size={18} /></a>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <div>
                  <h5 className="font-bold uppercase tracking-wider text-sm border-b border-white/20 pb-2 mb-4">FOR PATIENTS</h5>
                  <ul className="space-y-2 text-sm text-surface-container-low/80">
                    <li><a href="/doctors" className="hover:text-white">Doctors</a></li>
                    <li><a href="/health-packages" className="hover:text-white">Health Checkups</a></li>
                    <li><a href="/medicines" className="hover:text-white">Medicines</a></li>
                    <li><a href="/contact" className="hover:text-white">Book Appointment</a></li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-bold uppercase tracking-wider text-sm border-b border-white/20 pb-2 mb-4">CENTERS OF EXCELLENCE</h5>
                  <div className="grid grid-cols-1 gap-y-2 text-sm text-surface-container-low/80">
                    <div>Cardiothoracic</div><div>Neurology</div><div>Oncology</div><div>Orthopedics</div><div>Gastroenterology</div>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <div>
                  <h5 className="font-bold uppercase tracking-wider text-sm border-b border-white/20 pb-2 mb-4">COMPANY</h5>
                  <ul className="space-y-2 text-sm text-surface-container-low/80">
                    <li><a href="/about" className="hover:text-white">About Us</a></li>
                    <li><a href="/careers" className="hover:text-white">Careers</a></li>
                    <li><a href="/contact" className="hover:text-white">Contact Us</a></li>
                    <li><a href="/privacy" className="hover:text-white">Privacy Policy</a></li>
                  </ul>
                </div>
              </div>
              <div className="space-y-6">
                <div>
                  <h5 className="font-bold uppercase tracking-wider text-sm border-b border-white/20 pb-2 mb-4">QUICK LINKS</h5>
                  <ul className="space-y-2 text-sm text-surface-container-low/80">
                    <li><a href="#" className="hover:text-white">Woman And Child</a></li>
                    <li><a href="#" className="hover:text-white">Pathology & Diagnostics</a></li>
                    <li><a href="#" className="hover:text-white">Obstetrics & Gynecology</a></li>
                    <li><a href="#" className="hover:text-white">Emergency Services</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="pt-8 border-t border-white/10 text-center text-xs text-surface-container-low/60">
              <p>Copyrights © 2025 All Rights Reserved by Supraja Hospitals</p>
            </div>
          </div>
        </footer>

        {/* Sticky Contact Float */}
        <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
          <a className="bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center" href="https://wa.me/9281038298">
            <MessageCircle size={24} />
          </a>
          <a className="bg-hospital-teal text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center" href="tel:04029329999">
            <Phone size={24} />
          </a>
        </div>

      </body>
    </html>
  );
}
