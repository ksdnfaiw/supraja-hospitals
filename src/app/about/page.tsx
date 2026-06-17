import InsurancePartners from "@/components/InsurancePartners";
import { ArrowRight, Shield, Target, Eye, Heart, Award, Users, CheckCircle, Clock, Building2, Microscope, Stethoscope, ChevronRight, Activity } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Hero Section */}
      <section className="relative w-full py-24 md:py-32 overflow-hidden bg-clinical-blue -mt-[80px]">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[url('https://lh3.googleusercontent.com/aida-public/AB6AXuBOC_vXKhvc_1-2wqgchaS1p4TbJyIl99sTe7JNoqRVSOC5XeDeL0ODP_kbAW3HwYTMkSt5hpiDmKcYb5CqA3aiE6uoHjBJ6GRz53QWLLZqF285fP-GihSLxtIvvZOM_AJzY1xYnzJZz40XzY27OuzHvXwuY4sVKYhDE3dkAsyNh_uMuhuyKEMKKDr9tvaCMQEhWxpS2LJ-9gZOmE4j6osHVD43zgvGhGFpG0z_AjEGe_YuLlRYmFq-HbfvEygiyXNSwFGZXkAYbYI5')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-clinical-blue via-clinical-blue/90 to-transparent"></div>
        </div>
        
        <div className="max-w-container-max mx-auto px-4 md:px-gutter relative z-10 pt-24 md:pt-32 pb-16">
          <div className="max-w-3xl text-white">
            <div className="inline-block px-5 py-2 rounded-full bg-healing-emerald/20 border border-healing-emerald/30 text-healing-emerald font-label-sm tracking-widest uppercase mb-8 backdrop-blur-md">
              Our Legacy
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display-lg mb-6 leading-[1.1]">
              Healing Lives Through <span className="text-healing-emerald">Compassion & Trust</span>
            </h1>
            <p className="text-lg md:text-xl text-surface-container-low/90 mb-10 leading-relaxed max-w-2xl font-body-md">
              At Supraja Hospitals, our purpose transcends medical treatment. We are dedicated to providing accessible, high-quality healthcare that combines advanced technology with human-centric care.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#story" className="bg-healing-emerald text-white font-label-md px-8 py-4 rounded-xl shadow-lg hover:bg-opacity-90 transition-all flex items-center gap-2 group hover:shadow-healing-emerald/20 hover:shadow-xl">
                Explore Our Story <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#facilities" className="bg-white/5 backdrop-blur-md border border-white/20 text-white font-label-md px-8 py-4 rounded-xl hover:bg-white/10 transition-all">
                View Facilities
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Mission & Vision */}
      <section className="py-20 md:py-28 bg-surface-gray relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-healing-emerald/5 rounded-l-full blur-3xl -z-0"></div>
        <div className="max-w-container-max mx-auto px-4 md:px-gutter relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {/* Mission Card */}
            <div className="bg-white rounded-3xl p-10 md:p-12 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] border border-border-subtle group hover:shadow-[0_20px_40px_-15px_rgba(0,168,107,0.1)] transition-all duration-500 hover:-translate-y-2">
              <div className="w-16 h-16 rounded-2xl bg-clinical-blue/5 flex items-center justify-center mb-8 group-hover:bg-clinical-blue group-hover:scale-110 transition-all duration-500 shadow-sm">
                <Target size={32} className="text-clinical-blue group-hover:text-white transition-colors duration-500" />
              </div>
              <h3 className="text-3xl font-display-md text-clinical-blue mb-4">Our Mission</h3>
              <p className="text-on-surface-variant leading-relaxed text-lg font-body-md">
                To deliver world-class healthcare services through a patient-centric approach, fostering an environment of clinical excellence, medical research, and compassionate care that enhances the overall quality of life in our community.
              </p>
            </div>

            {/* Vision Card */}
            <div className="bg-white rounded-3xl p-10 md:p-12 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] border border-border-subtle group hover:shadow-[0_20px_40px_-15px_rgba(0,168,107,0.1)] transition-all duration-500 hover:-translate-y-2">
              <div className="w-16 h-16 rounded-2xl bg-healing-emerald/10 flex items-center justify-center mb-8 group-hover:bg-healing-emerald group-hover:scale-110 transition-all duration-500 shadow-sm">
                <Eye size={32} className="text-healing-emerald group-hover:text-white transition-colors duration-500" />
              </div>
              <h3 className="text-3xl font-display-md text-clinical-blue mb-4">Our Vision</h3>
              <p className="text-on-surface-variant leading-relaxed text-lg font-body-md">
                To be recognized as the premier destination for integrated healthcare, setting global standards in medical outcomes, innovation, and ethical practices, while remaining deeply rooted in our commitment to healing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Core Values */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-container-max mx-auto px-4 md:px-gutter">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-display-lg text-clinical-blue mb-6">Our Core Values</h2>
            <p className="text-lg text-on-surface-variant font-body-md">The guiding principles that drive our commitment to excellence every single day.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Heart, title: "Patient First", desc: "Prioritizing the needs and safety of our patients above all else in every decision." },
              { icon: Award, title: "Clinical Excellence", desc: "Striving for the highest medical standards and outcomes through continuous learning." },
              { icon: Shield, title: "Integrity & Transparency", desc: "Maintaining absolute honesty and ethical transparency in all clinical interactions." },
              { icon: Users, title: "Compassionate Care", desc: "Approaching every patient with empathy, kindness, and deep emotional support." },
              { icon: Stethoscope, title: "Collaboration", desc: "Working as a unified team of specialists to provide comprehensive health solutions." },
              { icon: Microscope, title: "Continuous Innovation", desc: "Adopting the latest medical breakthroughs and technologies for better recovery." }
            ].map((cv, i) => (
              <div key={i} className="p-8 rounded-2xl bg-surface-gray/30 border border-border-subtle hover:bg-white hover:shadow-xl transition-all duration-300 group hover:-translate-y-1">
                <div className="w-14 h-14 rounded-xl bg-white shadow-sm border border-border-subtle flex items-center justify-center mb-6 group-hover:bg-healing-emerald group-hover:border-healing-emerald group-hover:scale-110 transition-all duration-300">
                  <cv.icon size={24} className="text-hospital-teal group-hover:text-white transition-colors" />
                </div>
                <h4 className="text-xl font-display-sm text-clinical-blue mb-3">{cv.title}</h4>
                <p className="text-on-surface-variant leading-relaxed font-body-md">{cv.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Legacy Section */}
      <section id="story" className="py-20 md:py-32 bg-clinical-blue text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-[-20%] right-[-10%] w-[50%] h-[100%] bg-hospital-teal/10 blur-[120px] rounded-full"></div>
        </div>
        <div className="max-w-container-max mx-auto px-4 md:px-gutter relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-white font-label-sm tracking-widest uppercase mb-6 backdrop-blur-md">
                Our History
              </div>
              <h2 className="text-4xl md:text-5xl font-display-lg mb-6 leading-tight">The Dhanturi Group Legacy</h2>
              <p className="text-lg text-surface-container-low/80 mb-6 leading-relaxed font-body-md">
                Founded in 1990, the Dhanturi Group began with a singular vision: to redefine service standards in hospitality and healthcare. What started as a commitment to excellence has blossomed into a growing healthcare institution trusted by thousands.
              </p>
              <p className="text-lg text-surface-container-low/80 mb-12 leading-relaxed font-body-md">
                Our journey is marked by a series of transformative milestones, evolving from a multi-disciplinary business group to a specialized healthcare powerhouse that Supraja Hospitals represents today.
              </p>
              
              <div className="space-y-8 border-l-2 border-healing-emerald/30 pl-8 relative ml-3">
                <div className="relative">
                  <div className="absolute -left-[41px] top-1 w-4 h-4 rounded-full bg-healing-emerald shadow-[0_0_15px_rgba(0,168,107,0.6)] border-4 border-clinical-blue box-content"></div>
                  <div className="text-healing-emerald font-bold tracking-wider mb-1 text-sm uppercase">1990</div>
                  <h4 className="text-xl font-display-sm mb-2 text-white">Foundation of Dhanturi Group</h4>
                  <p className="text-surface-container-low/60 font-body-md">A commitment to service excellence begins across industries.</p>
                </div>
                <div className="relative">
                  <div className="absolute -left-[41px] top-1 w-4 h-4 rounded-full bg-healing-emerald shadow-[0_0_15px_rgba(0,168,107,0.6)] border-4 border-clinical-blue box-content"></div>
                  <div className="text-healing-emerald font-bold tracking-wider mb-1 text-sm uppercase">2010s</div>
                  <h4 className="text-xl font-display-sm mb-2 text-white">Strategic Pivot to Healthcare</h4>
                  <p className="text-surface-container-low/60 font-body-md">Identifying the critical need for high-quality clinical infrastructure.</p>
                </div>
                <div className="relative">
                  <div className="absolute -left-[41px] top-1 w-4 h-4 rounded-full bg-healing-emerald shadow-[0_0_15px_rgba(0,168,107,0.6)] border-4 border-clinical-blue box-content"></div>
                  <div className="text-healing-emerald font-bold tracking-wider mb-1 text-sm uppercase">Today</div>
                  <h4 className="text-xl font-display-sm mb-2 text-white">Supraja Hospitals Rising</h4>
                  <p className="text-surface-container-low/60 font-body-md">Evolving into a 100-bed multi-specialty institution.</p>
                </div>
              </div>
            </div>
            <div className="relative group">
              <div className="absolute inset-0 bg-healing-emerald/20 blur-2xl rounded-[2rem] transform group-hover:scale-105 transition-transform duration-700"></div>
              <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBOC_vXKhvc_1-2wqgchaS1p4TbJyIl99sTe7JNoqRVSOC5XeDeL0ODP_kbAW3HwYTMkSt5hpiDmKcYb5CqA3aiE6uoHjBJ6GRz53QWLLZqF285fP-GihSLxtIvvZOM_AJzY1xYnzJZz40XzY27OuzHvXwuY4sVKYhDE3dkAsyNh_uMuhuyKEMKKDr9tvaCMQEhWxpS2LJ-9gZOmE4j6osHVD43zgvGhGFpG0z_AjEGe_YuLlRYmFq-HbfvEygiyXNSwFGZXkAYbYI5" alt="Hospital Infrastructure" className="relative z-10 w-full h-[500px] lg:h-[600px] object-cover rounded-[2rem] shadow-2xl grayscale-[20%] group-hover:grayscale-0 transition-all duration-700" />
            </div>
          </div>
        </div>
      </section>

      {/* 5. Trust Strip */}
      <section className="py-8 border-b border-border-subtle bg-white">
        <div className="max-w-container-max mx-auto px-4 md:px-gutter flex flex-wrap justify-between items-center gap-6">
          {[
            "Multi-Specialty Center", "Advanced Infrastructure", "NABH Standards", "24/7 Patient Support"
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-3 text-clinical-blue font-label-md tracking-wide">
              <CheckCircle size={22} className="text-healing-emerald" /> {item}
            </div>
          ))}
        </div>
      </section>

      {/* 6. Infrastructure */}
      <section id="facilities" className="py-20 md:py-28 bg-surface-gray">
        <div className="max-w-container-max mx-auto px-4 md:px-gutter">
          <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-5xl font-display-lg text-clinical-blue mb-6">World-Class Infrastructure</h2>
              <p className="text-lg text-on-surface-variant leading-relaxed font-body-md">Equipped with state-of-the-art medical technology to ensure precision, speed, and safety in every clinical procedure.</p>
            </div>
            <button className="bg-white text-clinical-blue border border-border-subtle hover:border-clinical-blue hover:shadow-md font-label-md px-6 py-3 rounded-lg transition-all flex items-center gap-2 group">
              Download Facility Guide <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "100-Bed Facility", desc: "Comprehensive inpatient and outpatient services.", icon: Building2 },
              { title: "Advanced OTs", desc: "Modular Operation Theaters equipped for complex surgeries.", icon: Activity },
              { title: "Cath Lab", desc: "Specialized cardiac unit for interventional procedures.", icon: Heart },
              { title: "24/7 Emergency", desc: "Round-the-clock critical care with dedicated ambulances.", icon: Clock }
            ].map((infra, i) => (
              <div key={i} className="group relative overflow-hidden rounded-2xl bg-clinical-blue p-8 h-[280px] flex flex-col justify-end shadow-lg hover:-translate-y-2 transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-to-t from-clinical-blue via-clinical-blue/80 to-clinical-blue/20 z-10"></div>
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/5 rounded-full blur-2xl -z-0 group-hover:scale-150 transition-transform duration-700"></div>
                
                <div className="relative z-20">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-6 text-healing-emerald backdrop-blur-sm border border-white/10 group-hover:-translate-y-2 transition-transform duration-500">
                    <infra.icon size={24} />
                  </div>
                  <h4 className="text-xl font-display-sm text-white mb-2">{infra.title}</h4>
                  <p className="text-surface-container-low/70 text-sm leading-relaxed font-body-md">{infra.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Insurance Partners */}
      <InsurancePartners />

      {/* 9. Green CTA Strip */}
      <section className="py-20 md:py-24 bg-healing-emerald text-white text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl mix-blend-overlay"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full blur-3xl mix-blend-overlay"></div>
        
        <div className="max-w-3xl mx-auto px-4 relative z-10">
          <h2 className="text-4xl md:text-5xl font-display-lg mb-6">Ready to Experience Care?</h2>
          <p className="text-lg md:text-xl text-white/90 mb-10 leading-relaxed font-body-md">Schedule a visit or consult with our experts today to start your journey towards better health.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/contact" className="bg-clinical-blue text-white font-label-md px-8 py-4 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all">
              Book An Appointment
            </a>
            <a href="tel:04029329999" className="bg-white text-clinical-blue font-label-md px-8 py-4 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all">
              Contact Support
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
