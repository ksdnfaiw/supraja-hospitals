"use client";

import { ArrowRight, Calendar, TestTube, Stethoscope, Activity, ChevronRight, Check, Phone, HeartPulse, Brain, Microscope, Bone, Users, Award, Clock } from "lucide-react";
import InsurancePartners from "@/components/InsurancePartners";
import TestimonialVideo from "@/components/TestimonialVideo";
import Link from "next/link";
import BookVisitModal from "@/components/BookVisitModal";
import { useState } from "react";

const testimonials = [
  {
    name: "Lalitha",
    condition: "Cardiac Surgery Recovery",
    videoSrc: "https://res.cloudinary.com/dizaawlyl/video/upload/v1781695281/Copy_of_Lalitha_testi_Final_01_usg5fu.mp4",
    posterSrc: "https://res.cloudinary.com/dizaawlyl/video/upload/v1781695281/Copy_of_Lalitha_testi_Final_01_usg5fu.jpg"
  },
  {
    name: "Krishnam Raju",
    condition: "Neurological Care Journey",
    videoSrc: "https://res.cloudinary.com/dizaawlyl/video/upload/v1781696670/Copy_of_Kirhnam_raju_testi_njctym.mp4",
    posterSrc: "https://res.cloudinary.com/dizaawlyl/video/upload/v1781696670/Copy_of_Kirhnam_raju_testi_njctym.jpg"
  },
  {
    name: "G. Latha",
    condition: "Maternity Care Experience",
    videoSrc: "https://res.cloudinary.com/dizaawlyl/video/upload/v1781699907/Copy_of_G.latha_testi_1_gadlur.mp4",
    posterSrc: "https://res.cloudinary.com/dizaawlyl/video/upload/v1781699907/Copy_of_G.latha_testi_1_gadlur.jpg"
  },
  {
    name: "Shoba",
    condition: "Brain Surgery Recovery",
    videoSrc: "https://res.cloudinary.com/dizaawlyl/video/upload/v1781700783/Copy_of_Copy_of_Shoba_Brain_surgery_testi_Final_03_1_ss6jau.mp4",
    posterSrc: "https://res.cloudinary.com/dizaawlyl/video/upload/v1781700783/Copy_of_Copy_of_Shoba_Brain_surgery_testi_Final_03_1_ss6jau.jpg"
  }
];

export default function HomePage() {
  const [isBookVisitOpen, setIsBookVisitOpen] = useState(false);

  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full h-[600px] md:h-[700px] lg:h-[800px] overflow-hidden bg-clinical-blue -mt-[80px]">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[url('/images/new_hero_bg.png')] bg-cover bg-center opacity-60 mix-blend-overlay"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-clinical-blue via-clinical-blue/80 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-clinical-blue via-transparent to-transparent"></div>
        </div>
        
        <div className="absolute inset-0 flex items-center z-10 px-4 md:px-gutter max-w-container-max mx-auto">
          <div className="max-w-3xl text-left">
            <div className="inline-block px-5 py-2 rounded-full bg-white/10 border border-white/20 text-white font-label-sm tracking-widest uppercase mb-6 backdrop-blur-md animate-in slide-in-from-bottom-8 duration-700 fade-in">
              World-Class Healthcare
            </div>
            <h1 className="font-display-lg text-4xl md:text-5xl lg:text-7xl text-white mb-6 leading-[1.1] animate-in slide-in-from-bottom-8 duration-700 delay-150 fade-in fill-mode-backwards drop-shadow-lg">
              Clinical <span className="text-healing-emerald">Excellence,</span><br/>Compassionate <span className="text-healing-emerald">Care.</span>
            </h1>
            <p className="font-body-lg text-lg md:text-xl lg:text-2xl text-white/90 mb-10 max-w-2xl animate-in slide-in-from-bottom-8 duration-700 delay-300 fade-in fill-mode-backwards drop-shadow-md">
              Experience world-class healthcare with state-of-the-art oncology, advanced infrastructure, and 24/7 dedicated patient care.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-in slide-in-from-bottom-8 duration-700 delay-500 fade-in fill-mode-backwards">
              <a href="/contact" className="bg-healing-emerald text-white px-8 py-4 rounded-xl font-label-lg text-lg shadow-xl hover:bg-white hover:text-clinical-blue transition-all duration-300 hover:-translate-y-1 flex items-center justify-center gap-2">
                Book Consultation <ArrowRight size={20} />
              </a>
              <a href="/departments" className="bg-white/10 text-white border border-white/20 px-8 py-4 rounded-xl font-label-lg text-lg flex items-center justify-center hover:bg-white/20 transition-all backdrop-blur-sm">
                View Specialties
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Actions Bento Grid */}
      <section className="max-w-container-max mx-auto px-4 md:px-gutter -mt-8 md:-mt-16 relative z-20 mb-12 md:mb-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <button onClick={() => setIsBookVisitOpen(true)} className="glass-card p-6 rounded-xl shadow-xl flex flex-col items-center text-center gap-3 border border-white hover:-translate-y-1 transition-transform w-full">
            <Calendar className="text-clinical-blue" size={36} />
            <h3 className="font-headline-md text-headline-md text-clinical-blue">Book Visit</h3>
            <p className="text-label-sm font-label-sm text-on-surface-variant">Schedule your consultation instantly online.</p>
          </button>
          <Link href="/health-packages" className="glass-card p-6 rounded-xl shadow-xl flex flex-col items-center text-center gap-3 border border-white hover:-translate-y-1 transition-transform">
            <TestTube className="text-clinical-blue" size={36} />
            <h3 className="font-headline-md text-headline-md text-clinical-blue">Diagnostics</h3>
            <p className="text-label-sm font-label-sm text-on-surface-variant">Access pathology & imaging reports easily.</p>
          </Link>
          <div className="glass-card p-6 rounded-xl shadow-xl flex flex-col items-center text-center gap-3 border border-white hover:-translate-y-1 transition-transform">
            <Stethoscope className="text-clinical-blue" size={36} />
            <h3 className="font-headline-md text-headline-md text-clinical-blue">2nd Opinion</h3>
            <p className="text-label-sm font-label-sm text-on-surface-variant">Expert medical validation from senior specialists.</p>
          </div>
          <div className="glass-card p-6 rounded-xl shadow-xl flex flex-col items-center text-center gap-3 border border-white hover:-translate-y-1 transition-transform">
            <Activity className="text-healing-emerald" size={36} />
            <h3 className="font-headline-md text-headline-md text-clinical-blue">Emergency</h3>
            <p className="text-label-sm font-label-sm text-on-surface-variant">24/7 Critical Care: 040-29329999</p>
          </div>
        </div>
      </section>

      {/* Centers of Excellence */}
      <section className="py-12 md:py-margin-desktop bg-surface-gray">
        <div className="max-w-container-max mx-auto px-4 md:px-gutter">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="font-display-lg text-display-lg text-clinical-blue mb-2">Our Centers of Excellence</h2>
              <p className="font-body-md text-body-md text-on-surface-variant">Precision medical care across advanced surgical and medical disciplines.</p>
            </div>
            <a className="hidden md:flex items-center gap-2 text-hospital-teal font-label-md text-label-md hover:underline transition-all" href="/departments">
              View All Specialties <ArrowRight size={18} />
            </a>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <Link href="/departments" className="group bg-white p-8 rounded-xl border border-border-subtle hover:border-hospital-teal hover:shadow-xl transition-all duration-300 block">
              <div className="w-16 h-16 rounded-xl bg-clinical-blue/5 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-clinical-blue/10 transition-all">
                <HeartPulse className="text-hospital-teal" size={32} />
              </div>
              <h4 className="font-headline-md text-headline-md text-clinical-blue mb-3">Cardiology</h4>
              <p className="font-body-md text-body-md text-on-surface-variant mb-6">Comprehensive cardiac care including advanced bypass surgeries and interventions.</p>
              <span className="text-hospital-teal font-label-md text-label-md flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                View Details <ChevronRight size={18} />
              </span>
            </Link>
            <Link href="/departments" className="group bg-white p-8 rounded-xl border border-border-subtle hover:border-hospital-teal hover:shadow-xl transition-all duration-300 block">
              <div className="w-16 h-16 rounded-xl bg-clinical-blue/5 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-clinical-blue/10 transition-all">
                <Brain className="text-hospital-teal" size={32} />
              </div>
              <h4 className="font-headline-md text-headline-md text-clinical-blue mb-3">Neurology</h4>
              <p className="font-body-md text-body-md text-on-surface-variant mb-6">Expert treatment for neurological disorders and advanced neuro-spine surgeries.</p>
              <span className="text-hospital-teal font-label-md text-label-md flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                View Details <ChevronRight size={18} />
              </span>
            </Link>
            <Link href="/departments" className="group bg-white p-8 rounded-xl border border-border-subtle hover:border-hospital-teal hover:shadow-xl transition-all duration-300 block">
              <div className="w-16 h-16 rounded-xl bg-clinical-blue/5 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-clinical-blue/10 transition-all">
                <Microscope className="text-hospital-teal" size={32} />
              </div>
              <h4 className="font-headline-md text-headline-md text-clinical-blue mb-3">Oncology</h4>
              <p className="font-body-md text-body-md text-on-surface-variant mb-6">Advanced surgical and medical oncology protocols for precise cancer treatments.</p>
              <span className="text-hospital-teal font-label-md text-label-md flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                View Details <ChevronRight size={18} />
              </span>
            </Link>
            <Link href="/departments" className="group bg-white p-8 rounded-xl border border-border-subtle hover:border-hospital-teal hover:shadow-xl transition-all duration-300 block">
              <div className="w-16 h-16 rounded-xl bg-clinical-blue/5 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-clinical-blue/10 transition-all">
                <Bone className="text-hospital-teal" size={32} />
              </div>
              <h4 className="font-headline-md text-headline-md text-clinical-blue mb-3">Orthopedics</h4>
              <p className="font-body-md text-body-md text-on-surface-variant mb-6">Modern orthopedic procedures including joint replacement and trauma care.</p>
              <span className="text-hospital-teal font-label-md text-label-md flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                View Details <ChevronRight size={18} />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* About Us Modern Split */}
      <section className="py-12 md:py-margin-desktop bg-surface overflow-hidden">
        <div className="max-w-container-max mx-auto px-4 md:px-gutter">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="w-full lg:w-1/2 relative">
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
                <img alt="Supraja Hospitals Medical Team" className="w-full h-[500px] object-cover" src="/images/home_about_team.png" />
              </div>
              <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-healing-emerald rounded-2xl flex flex-col items-center justify-center text-white p-6 shadow-xl z-20">
                <span className="text-4xl font-bold">12+</span>
                <p className="text-center text-label-sm font-label-sm leading-tight">Years of Healthcare Excellence</p>
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <span className="text-hospital-teal font-label-md text-label-md uppercase tracking-widest mb-4 block">About Supraja Hospitals</span>
              <h2 className="font-display-lg text-display-lg text-clinical-blue mb-6">A Legacy of Saving Lives and Restoring Hope</h2>
              <p className="font-body-md text-body-md text-on-surface-variant mb-6 leading-relaxed">
                Supraja Hospitals is a multi-specialty healthcare provider committed to providing comprehensive and quality medical care for all our patients. We strive to stay ahead of the curve in terms of cutting edge medical technology, highly experienced doctors, and caring staff.
              </p>
              <div className="space-y-4 mb-10">
                <div className="flex items-start gap-4 hover:translate-x-2 transition-transform">
                  <div className="mt-1 w-6 h-6 rounded-full bg-hospital-teal/10 flex items-center justify-center flex-shrink-0">
                    <Check className="text-hospital-teal" size={14} />
                  </div>
                  <p className="font-body-md text-body-md text-on-surface"><strong className="text-clinical-blue">Our Mission:</strong> To provide accessible medical services with compassion, dignity, respect, and excellence.</p>
                </div>
                <div className="flex items-start gap-4 hover:translate-x-2 transition-transform">
                  <div className="mt-1 w-6 h-6 rounded-full bg-hospital-teal/10 flex items-center justify-center flex-shrink-0">
                    <Check className="text-hospital-teal" size={14} />
                  </div>
                  <p className="font-body-md text-body-md text-on-surface"><strong className="text-clinical-blue">Our Vision:</strong> High-quality affordable healthcare for everyone so they can live healthier lives.</p>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <button className="bg-clinical-blue text-white font-label-md text-label-md px-8 py-4 rounded-lg shadow-md hover:bg-opacity-90 transition-all hover:scale-105">
                  Learn More About Us
                </button>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-hospital-teal/10 flex items-center justify-center text-hospital-teal">
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="text-label-sm font-label-sm text-on-surface-variant">General Inquiry</p>
                    <p className="font-label-md text-label-md font-bold text-clinical-blue">040-68334455</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Patient Testimonials */}
      <section className="py-12 md:py-margin-desktop bg-surface-gray">
        <div className="max-w-container-max mx-auto px-4 md:px-gutter">
          <div className="text-center mb-12">
            <h2 className="font-display-lg text-display-lg text-clinical-blue mb-4">Our Patients Love Us</h2>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl mx-auto">Hear from those who have experienced our care firsthand.</p>
          </div>
          <div className="overflow-hidden w-full px-4 md:px-0 pb-8">
            <div className="flex w-max animate-marquee hover:[animation-play-state:paused] gap-6">
              {[...testimonials, ...testimonials].map((testimonial, index) => (
                <TestimonialVideo key={index} testimonial={testimonial} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Insurance Partners */}
      <InsurancePartners />

      {/* Impact Statistics */}
      <section className="relative py-16 md:py-24 bg-clinical-blue overflow-hidden border-t border-white/10">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
          <div className="absolute -top-[50%] -left-[10%] w-[60%] h-[150%] rounded-full bg-healing-emerald/10 blur-[120px]"></div>
          <div className="absolute -bottom-[50%] -right-[10%] w-[60%] h-[150%] rounded-full bg-hospital-teal/20 blur-[150px]"></div>
        </div>
        
        <div className="max-w-container-max mx-auto px-4 md:px-gutter relative z-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            <div className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-all duration-300 hover:-translate-y-2 group shadow-2xl flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-healing-emerald/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-healing-emerald/30 transition-all duration-500 shadow-[0_0_30px_rgba(0,168,107,0.2)]">
                <Users className="text-healing-emerald" size={32} />
              </div>
              <h3 className="text-5xl md:text-6xl font-display-lg text-white mb-2 tracking-tight">50k+</h3>
              <p className="text-label-md font-label-md text-surface-container-low opacity-80 uppercase tracking-widest mt-2">Happy Patients</p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-all duration-300 hover:-translate-y-2 group shadow-2xl flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-healing-emerald/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-healing-emerald/30 transition-all duration-500 shadow-[0_0_30px_rgba(0,168,107,0.2)]">
                <Award className="text-healing-emerald" size={32} />
              </div>
              <h3 className="text-5xl md:text-6xl font-display-lg text-white mb-2 tracking-tight">12+</h3>
              <p className="text-label-md font-label-md text-surface-container-low opacity-80 uppercase tracking-widest mt-2">Years Experience</p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-all duration-300 hover:-translate-y-2 group shadow-2xl flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-healing-emerald/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-healing-emerald/30 transition-all duration-500 shadow-[0_0_30px_rgba(0,168,107,0.2)]">
                <Stethoscope className="text-healing-emerald" size={32} />
              </div>
              <h3 className="text-5xl md:text-6xl font-display-lg text-white mb-2 tracking-tight">100+</h3>
              <p className="text-label-md font-label-md text-surface-container-low opacity-80 uppercase tracking-widest mt-2">Expert Doctors</p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-all duration-300 hover:-translate-y-2 group shadow-2xl flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-healing-emerald/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-healing-emerald/30 transition-all duration-500 shadow-[0_0_30px_rgba(0,168,107,0.2)]">
                <Clock className="text-healing-emerald" size={32} />
              </div>
              <h3 className="text-5xl md:text-6xl font-display-lg text-white mb-2 tracking-tight">24/7</h3>
              <p className="text-label-md font-label-md text-surface-container-low opacity-80 uppercase tracking-widest mt-2">Emergency Care</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Book Visit Modal */}
      <BookVisitModal isOpen={isBookVisitOpen} onClose={() => setIsBookVisitOpen(false)} />
    </>
  );
}
