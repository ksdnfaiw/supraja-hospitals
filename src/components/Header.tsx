"use client";

import { useState, useRef } from "react";
import { Menu, X, ChevronDown, Activity, Heart, Brain, Bone, Stethoscope } from "lucide-react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSpecialtiesOpen, setIsSpecialtiesOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsSpecialtiesOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsSpecialtiesOpen(false);
    }, 3000);
  };

  const handleDropdownClick = () => {
    setIsSpecialtiesOpen(false);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  };

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
            <div 
              className="relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <a 
                className="font-label-md text-label-md text-on-surface-variant hover:text-hospital-teal transition-colors flex items-center gap-1 cursor-pointer py-6 -my-6" 
                href="/departments"
                onClick={handleDropdownClick}
              >
                Specialties <ChevronDown size={14} className={`transition-transform duration-300 ${isSpecialtiesOpen ? 'rotate-180 text-hospital-teal' : ''}`} />
              </a>
              
              {/* Dropdown Menu */}
              <div 
                className={`absolute top-[calc(100%+1.5rem)] left-1/2 -translate-x-1/2 w-[280px] bg-white rounded-2xl shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] border border-border-subtle p-3 transition-all duration-400 ease-out origin-top ${
                  isSpecialtiesOpen ? "opacity-100 visible scale-100 translate-y-0" : "opacity-0 invisible scale-95 -translate-y-4"
                }`}
              >
                {/* Decorative arrow pointing up */}
                <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white border-t border-l border-border-subtle rotate-45 rounded-tl-sm"></div>
                
                <div className="relative z-10 flex flex-col gap-1">
                  <a href="/departments" className="flex items-center gap-4 p-3 rounded-xl hover:bg-surface-gray/50 transition-colors group/item" onClick={handleDropdownClick}>
                    <div className="w-10 h-10 rounded-full bg-clinical-blue/5 text-clinical-blue flex items-center justify-center group-hover/item:bg-clinical-blue group-hover/item:text-white transition-all group-hover/item:scale-110 shadow-sm"><Heart size={18} /></div>
                    <div>
                      <div className="font-label-md text-sm text-clinical-blue font-bold transition-colors">Cardiology</div>
                      <div className="text-xs text-on-surface-variant/70 mt-0.5">Expert heart care</div>
                    </div>
                  </a>
                  <a href="/departments" className="flex items-center gap-4 p-3 rounded-xl hover:bg-surface-gray/50 transition-colors group/item" onClick={handleDropdownClick}>
                    <div className="w-10 h-10 rounded-full bg-healing-emerald/10 text-healing-emerald flex items-center justify-center group-hover/item:bg-healing-emerald group-hover/item:text-white transition-all group-hover/item:scale-110 shadow-sm"><Brain size={18} /></div>
                    <div>
                      <div className="font-label-md text-sm text-clinical-blue font-bold transition-colors">Neurology</div>
                      <div className="text-xs text-on-surface-variant/70 mt-0.5">Brain & spine specialists</div>
                    </div>
                  </a>
                  <a href="/departments" className="flex items-center gap-4 p-3 rounded-xl hover:bg-surface-gray/50 transition-colors group/item" onClick={handleDropdownClick}>
                    <div className="w-10 h-10 rounded-full bg-clinical-blue/5 text-clinical-blue flex items-center justify-center group-hover/item:bg-clinical-blue group-hover/item:text-white transition-all group-hover/item:scale-110 shadow-sm"><Activity size={18} /></div>
                    <div>
                      <div className="font-label-md text-sm text-clinical-blue font-bold transition-colors">Oncology</div>
                      <div className="text-xs text-on-surface-variant/70 mt-0.5">Comprehensive cancer care</div>
                    </div>
                  </a>
                  <a href="/departments" className="flex items-center gap-4 p-3 rounded-xl hover:bg-surface-gray/50 transition-colors group/item" onClick={handleDropdownClick}>
                    <div className="w-10 h-10 rounded-full bg-healing-emerald/10 text-healing-emerald flex items-center justify-center group-hover/item:bg-healing-emerald group-hover/item:text-white transition-all group-hover/item:scale-110 shadow-sm"><Bone size={18} /></div>
                    <div>
                      <div className="font-label-md text-sm text-clinical-blue font-bold transition-colors">Orthopedics</div>
                      <div className="text-xs text-on-surface-variant/70 mt-0.5">Bone & joint treatments</div>
                    </div>
                  </a>
                  <a href="/departments" className="flex items-center gap-4 p-3 rounded-xl hover:bg-surface-gray/50 transition-colors group/item" onClick={handleDropdownClick}>
                    <div className="w-10 h-10 rounded-full bg-clinical-blue/5 text-clinical-blue flex items-center justify-center group-hover/item:bg-clinical-blue group-hover/item:text-white transition-all group-hover/item:scale-110 shadow-sm"><Stethoscope size={18} /></div>
                    <div>
                      <div className="font-label-md text-sm text-clinical-blue font-bold transition-colors">Gastroenterology</div>
                      <div className="text-xs text-on-surface-variant/70 mt-0.5">Digestive health center</div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
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
