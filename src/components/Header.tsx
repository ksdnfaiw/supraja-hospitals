"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, Activity, Heart, Brain, Bone, Stethoscope, Baby, Eye, Scissors } from "lucide-react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSpecialtiesOpen, setIsSpecialtiesOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const pathname = usePathname();

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsSpecialtiesOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsSpecialtiesOpen(false);
    }, 300); // Shorter timeout for better UX
  };

  const handleDropdownClick = () => {
    setIsSpecialtiesOpen(false);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  };

  const NavLink = ({ href, children }: { href: string, children: React.ReactNode }) => {
    const isActive = pathname === href;
    return (
      <Link 
        href={href} 
        className={`font-label-md text-label-md transition-colors pb-1 ${isActive ? 'text-hospital-teal font-bold border-b-2 border-hospital-teal' : 'text-on-surface-variant hover:text-hospital-teal border-b-2 border-transparent'}`}
      >
        {children}
      </Link>
    );
  };

  const specialties = [
    { name: "Cardiology", desc: "Expert heart care", icon: Heart, color: "text-clinical-blue", bg: "bg-clinical-blue/5", hoverBg: "group-hover/item:bg-clinical-blue" },
    { name: "Neurology", desc: "Brain & spine specialists", icon: Brain, color: "text-healing-emerald", bg: "bg-healing-emerald/10", hoverBg: "group-hover/item:bg-healing-emerald" },
    { name: "Oncology", desc: "Comprehensive cancer care", icon: Activity, color: "text-clinical-blue", bg: "bg-clinical-blue/5", hoverBg: "group-hover/item:bg-clinical-blue" },
    { name: "Orthopedics", desc: "Bone & joint treatments", icon: Bone, color: "text-healing-emerald", bg: "bg-healing-emerald/10", hoverBg: "group-hover/item:bg-healing-emerald" },
    { name: "Pediatrics", desc: "Comprehensive child care", icon: Baby, color: "text-clinical-blue", bg: "bg-clinical-blue/5", hoverBg: "group-hover/item:bg-clinical-blue" },
    { name: "Ophthalmology", desc: "State-of-the-art eye care", icon: Eye, color: "text-healing-emerald", bg: "bg-healing-emerald/10", hoverBg: "group-hover/item:bg-healing-emerald" },
    { name: "Internal Medicine", desc: "Preventive care", icon: Stethoscope, color: "text-clinical-blue", bg: "bg-clinical-blue/5", hoverBg: "group-hover/item:bg-clinical-blue" },
    { name: "General Surgery", desc: "Minimally invasive", icon: Scissors, color: "text-healing-emerald", bg: "bg-healing-emerald/10", hoverBg: "group-hover/item:bg-healing-emerald" },
  ];

  return (
    <>
      {/* Top Navigation */}
      <nav id="main-nav" className="fixed top-0 left-0 w-full z-50 bg-white border-b border-border-subtle shadow-sm flex justify-between items-center px-4 md:px-gutter py-4 max-w-full transition-all duration-300">
        <div className="max-w-container-max mx-auto w-full flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/">
              <img alt="Supraja Hospitals Logo" className="h-10 md:h-16 w-auto object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBmpCShrqjBNivLsDwdr7FHpoBlYJVYWXDyRH15TdmWVVXWj73jNtxBnz2Jv0JivPhlfyAIadxcaBUW8TzoQWb1sR1xcQ7aslugDpm6_71yZ1S_cLUO2MF5ot75J1Ms-PEOCCgoZt7-a411eu6H_fJj5zmuNE23pkELaSpRTx8sFHx-KVng9JuAQyM8AEKQPg9THR5c1G9qCPiVcJMVkRvJoWWfHOv51ZYfBt7Mz5nP0WEKzz7_fzptvniLPyOuj0_GZrVxuW3CGnFA" />
            </Link>
          </div>
          
          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-8">
            <NavLink href="/">Home</NavLink>
            <div 
              className="relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <Link 
                href="/departments"
                className={`font-label-md text-label-md transition-colors flex items-center gap-1 cursor-pointer py-6 -my-6 border-b-2 ${pathname === '/departments' ? 'text-hospital-teal font-bold border-hospital-teal' : 'text-on-surface-variant hover:text-hospital-teal border-transparent'}`}
                onClick={handleDropdownClick}
              >
                Specialties <ChevronDown size={14} className={`transition-transform duration-300 ${isSpecialtiesOpen ? 'rotate-180 text-hospital-teal' : ''}`} />
              </Link>
              
              {/* Dropdown Menu */}
              <div 
                className={`absolute top-[calc(100%+1.5rem)] left-1/2 -translate-x-1/2 w-[600px] bg-white rounded-2xl shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] border border-border-subtle p-4 transition-all duration-400 ease-out origin-top ${
                  isSpecialtiesOpen ? "opacity-100 visible scale-100 translate-y-0" : "opacity-0 invisible scale-95 -translate-y-4"
                }`}
              >
                {/* Decorative arrow pointing up */}
                <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white border-t border-l border-border-subtle rotate-45 rounded-tl-sm"></div>
                
                <div className="relative z-10 grid grid-cols-2 gap-2">
                  {specialties.map((spec, idx) => (
                    <Link key={idx} href="/departments" className="flex items-center gap-4 p-3 rounded-xl hover:bg-surface-gray/50 transition-colors group/item" onClick={handleDropdownClick}>
                      <div className={`w-10 h-10 rounded-full ${spec.bg} ${spec.color} flex items-center justify-center ${spec.hoverBg} group-hover/item:text-white transition-all group-hover/item:scale-110 shadow-sm`}>
                        <spec.icon size={18} />
                      </div>
                      <div>
                        <div className="font-label-md text-sm text-clinical-blue font-bold transition-colors">{spec.name}</div>
                        <div className="text-xs text-on-surface-variant/70 mt-0.5">{spec.desc}</div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <NavLink href="/doctors">Doctors</NavLink>
            <NavLink href="/health-packages">Health Packages</NavLink>
            <NavLink href="/about">About Us</NavLink>
            <NavLink href="/gallery">Gallery</NavLink>
            <NavLink href="/contact">Contact Us</NavLink>
          </div>

          <div className="flex items-center gap-4 md:gap-6">
            <div className="hidden xl:flex flex-col items-end">
              <span className="text-label-sm font-label-sm text-on-surface-variant uppercase tracking-wider">Emergency 24/7</span>
              <a className="text-headline-md font-headline-md font-bold text-clinical-blue" href="tel:040-29329999">040-29329999</a>
            </div>
            <Link href="/contact" className="hidden sm:block bg-healing-emerald text-white font-label-md text-label-md px-4 py-2 md:px-6 md:py-3 rounded-lg shadow-sm hover:brightness-110 active:scale-95 transition-all">
              Book Appointment
            </Link>
            
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
            <Link className={`font-label-md text-lg ${pathname === '/' ? 'text-hospital-teal font-bold' : 'text-on-surface-variant'}`} href="/" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
            <Link className={`font-label-md text-lg ${pathname === '/departments' ? 'text-hospital-teal font-bold' : 'text-on-surface-variant'}`} href="/departments" onClick={() => setIsMobileMenuOpen(false)}>Specialties</Link>
            <Link className={`font-label-md text-lg ${pathname === '/doctors' ? 'text-hospital-teal font-bold' : 'text-on-surface-variant'}`} href="/doctors" onClick={() => setIsMobileMenuOpen(false)}>Doctors</Link>
            <Link className={`font-label-md text-lg ${pathname === '/health-packages' ? 'text-hospital-teal font-bold' : 'text-on-surface-variant'}`} href="/health-packages" onClick={() => setIsMobileMenuOpen(false)}>Health Packages</Link>
            <Link className={`font-label-md text-lg ${pathname === '/about' ? 'text-hospital-teal font-bold' : 'text-on-surface-variant'}`} href="/about" onClick={() => setIsMobileMenuOpen(false)}>About Us</Link>
            <Link className={`font-label-md text-lg ${pathname === '/gallery' ? 'text-hospital-teal font-bold' : 'text-on-surface-variant'}`} href="/gallery" onClick={() => setIsMobileMenuOpen(false)}>Gallery</Link>
            <Link className={`font-label-md text-lg ${pathname === '/contact' ? 'text-hospital-teal font-bold' : 'text-on-surface-variant'}`} href="/contact" onClick={() => setIsMobileMenuOpen(false)}>Contact Us</Link>
          </div>
          
          <div className="flex flex-col gap-4 pt-2">
            <span className="text-label-sm font-label-sm text-on-surface-variant uppercase tracking-wider">Emergency 24/7</span>
            <a className="text-headline-md font-headline-md font-bold text-clinical-blue" href="tel:040-29329999">040-29329999</a>
            <Link href="/contact" className="w-full text-center bg-healing-emerald text-white font-label-md text-label-md px-6 py-4 rounded-lg shadow-sm active:scale-95 transition-all mt-4" onClick={() => setIsMobileMenuOpen(false)}>
              Book Appointment
            </Link>
          </div>
        </div>
      </div>
      
      {/* Spacer to prevent content from going under fixed header */}
      <div className="h-[72px] md:h-[96px] w-full"></div>
    </>
  );
}
