"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Top Navigation */}
      <nav id="main-nav" className="fixed top-0 left-0 w-full z-50 bg-white border-b border-border-subtle shadow-sm flex justify-between items-center px-4 md:px-gutter py-4 max-w-full transition-all duration-300">
        <div className="max-w-container-max mx-auto w-full flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img alt="Supraja Hospitals Logo" className="h-10 md:h-16 w-auto object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBmpCShrqjBNivLsDwdr7FHpoBlYJVYWXDyRH15TdmWVVXWj73jNtxBnz2Jv0JivPhlfyAIadxcaBUW8TzoQWb1sR1xcQ7aslugDpm6_71yZ1S_cLUO2MF5ot75J1Ms-PEOCCgoZt7-a411eu6H_fJj5zmuNE23pkELaSpRTx8sFHx-KVng9JuAQyM8AEKQPg9THR5c1G9qCPiVcJMVkRvJoWWfHOv51ZYfBt7Mz5nP0WEKzz7_fzptvniLPyOuj0_GZrVxuW3CGnFA" />
          </div>
          
          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-8">
            <a className="font-label-md text-label-md text-hospital-teal font-bold border-b-2 border-hospital-teal pb-1" href="/">Home</a>
            <a className="font-label-md text-label-md text-on-surface-variant hover:text-hospital-teal transition-colors" href="/departments">Specialties</a>
            <a className="font-label-md text-label-md text-on-surface-variant hover:text-hospital-teal transition-colors" href="/doctors">Doctors</a>
            <a className="font-label-md text-label-md text-on-surface-variant hover:text-hospital-teal transition-colors" href="/health-packages">Health Packages</a>
            <a className="font-label-md text-label-md text-on-surface-variant hover:text-hospital-teal transition-colors" href="/about">About Us</a>
            <a className="font-label-md text-label-md text-on-surface-variant hover:text-hospital-teal transition-colors" href="/contact">Contact Us</a>
          </div>

          <div className="flex items-center gap-4 md:gap-6">
            <div className="hidden xl:flex flex-col items-end">
              <span className="text-label-sm font-label-sm text-on-surface-variant uppercase tracking-wider">Emergency 24/7</span>
              <a className="text-headline-md font-headline-md font-bold text-clinical-blue" href="tel:040-29329999">040-29329999</a>
            </div>
            <a href="/contact" className="hidden sm:block bg-healing-emerald text-white font-label-md text-label-md px-4 py-2 md:px-6 md:py-3 rounded-lg shadow-sm hover:brightness-110 active:scale-95 transition-all">
              Book Appointment
            </a>
            
            {/* Mobile Menu Toggle Button */}
            <button 
              className="lg:hidden p-2 text-clinical-blue hover:bg-surface-gray rounded-md transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation Dropdown */}
      <div 
        className={`fixed inset-0 z-40 bg-white transform transition-transform duration-300 ease-in-out lg:hidden ${
          isMobileMenuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
        style={{ top: "72px" }} // offset by navbar height approx
      >
        <div className="flex flex-col p-6 gap-6 overflow-y-auto h-[calc(100vh-72px)]">
          <div className="flex flex-col gap-4 border-b border-border-subtle pb-6">
            <a className="font-label-md text-lg text-hospital-teal font-bold" href="/" onClick={() => setIsMobileMenuOpen(false)}>Home</a>
            <a className="font-label-md text-lg text-on-surface-variant" href="/departments" onClick={() => setIsMobileMenuOpen(false)}>Specialties</a>
            <a className="font-label-md text-lg text-on-surface-variant" href="/doctors" onClick={() => setIsMobileMenuOpen(false)}>Doctors</a>
            <a className="font-label-md text-lg text-on-surface-variant" href="/health-packages" onClick={() => setIsMobileMenuOpen(false)}>Health Packages</a>
            <a className="font-label-md text-lg text-on-surface-variant" href="/about" onClick={() => setIsMobileMenuOpen(false)}>About Us</a>
            <a className="font-label-md text-lg text-on-surface-variant" href="/contact" onClick={() => setIsMobileMenuOpen(false)}>Contact Us</a>
          </div>
          
          <div className="flex flex-col gap-4 pt-2">
            <span className="text-label-sm font-label-sm text-on-surface-variant uppercase tracking-wider">Emergency 24/7</span>
            <a className="text-headline-md font-headline-md font-bold text-clinical-blue" href="tel:040-29329999">040-29329999</a>
            <a href="/contact" className="w-full text-center bg-healing-emerald text-white font-label-md text-label-md px-6 py-4 rounded-lg shadow-sm active:scale-95 transition-all mt-4" onClick={() => setIsMobileMenuOpen(false)}>
              Book Appointment
            </a>
          </div>
        </div>
      </div>
      
      {/* Spacer to prevent content from going under fixed header */}
      <div className="h-[72px] md:h-[96px] w-full"></div>
    </>
  );
}
