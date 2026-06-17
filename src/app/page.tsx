import { ArrowRight, Calendar, TestTube, Stethoscope, Activity, ChevronRight, Check, Play, Phone, HeartPulse, Brain, Microscope, Bone } from "lucide-react";

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full h-[80vh] md:h-[85vh] min-h-[500px] md:min-h-[600px] overflow-hidden -mt-[80px]">
        <div className="absolute inset-0 z-0">
          <div className="w-full h-full bg-clinical-blue relative overflow-hidden" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBOC_vXKhvc_1-2wqgchaS1p4TbJyIl99sTe7JNoqRVSOC5XeDeL0ODP_kbAW3HwYTMkSt5hpiDmKcYb5CqA3aiE6uoHjBJ6GRz53QWLLZqF285fP-GihSLxtIvvZOM_AJzY1xYnzJZz40XzY27OuzHvXwuY4sVKYhDE3dkAsyNh_uMuhuyKEMKKDr9tvaCMQEhWxpS2LJ-9gZOmE4j6osHVD43zgvGhGFpG0z_AjEGe_YuLlRYmFq-HbfvEygiyXNSwFGZXkAYbYI5')", backgroundSize: "cover", backgroundPosition: "center center" }}>
          </div>
          <div className="absolute inset-0 hero-gradient"></div>
        </div>
        <div className="relative z-10 max-w-container-max mx-auto h-full px-4 md:px-gutter flex flex-col justify-center items-start pt-[100px]">
          <div className="max-w-2xl text-white">
            <h1 className="font-display-lg text-display-lg mb-4">Clinical Excellence,<br/><span className="text-healing-emerald">Compassionate Care</span></h1>
            <p className="font-body-lg text-body-lg text-surface-container-low mb-8 opacity-90">
              Experience world-class healthcare with 12+ years of surgical precision and holistic patient well-being at Hyderabad's leading multi-specialty destination.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-hospital-teal text-white font-label-md text-label-md px-8 py-4 rounded-lg shadow-lg hover:bg-opacity-90 transition-all flex items-center gap-2">
                Find a Doctor <ArrowRight size={18} />
              </button>
              <button className="bg-white/10 backdrop-blur-md border border-white/20 text-white font-label-md text-label-md px-8 py-4 rounded-lg hover:bg-white/20 transition-all">
                Our Specialties
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Actions Bento Grid */}
      <section className="max-w-container-max mx-auto px-4 md:px-gutter -mt-8 md:-mt-16 relative z-20 mb-12 md:mb-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="glass-card p-6 rounded-xl shadow-xl flex flex-col items-center text-center gap-3 border border-white hover:-translate-y-1 transition-transform">
            <Calendar className="text-clinical-blue" size={36} />
            <h3 className="font-headline-md text-headline-md text-clinical-blue">Book Visit</h3>
            <p className="text-label-sm font-label-sm text-on-surface-variant">Schedule your consultation instantly online.</p>
          </div>
          <div className="glass-card p-6 rounded-xl shadow-xl flex flex-col items-center text-center gap-3 border border-white hover:-translate-y-1 transition-transform">
            <TestTube className="text-clinical-blue" size={36} />
            <h3 className="font-headline-md text-headline-md text-clinical-blue">Diagnostics</h3>
            <p className="text-label-sm font-label-sm text-on-surface-variant">Access pathology & imaging reports easily.</p>
          </div>
          <div className="glass-card p-6 rounded-xl shadow-xl flex flex-col items-center text-center gap-3 border border-white hover:-translate-y-1 transition-transform">
            <Stethoscope className="text-clinical-blue" size={36} />
            <h3 className="font-headline-md text-headline-md text-clinical-blue">2nd Opinion</h3>
            <p className="text-label-sm font-label-sm text-on-surface-variant">Expert medical validation from senior specialists.</p>
          </div>
          <div className="glass-card p-6 rounded-xl shadow-xl flex flex-col items-center text-center gap-3 border border-white hover:-translate-y-1 transition-transform bg-clinical-blue !text-white">
            <Activity className="text-healing-emerald" size={36} />
            <h3 className="font-headline-md text-headline-md">Emergency</h3>
            <p className="text-label-sm font-label-sm text-surface-container-low opacity-80">24/7 Critical Care: 040-29329999</p>
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
            <div className="group bg-white p-8 rounded-xl border border-border-subtle hover:border-hospital-teal hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 rounded-xl bg-clinical-blue/5 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-clinical-blue/10 transition-all">
                <HeartPulse className="text-hospital-teal" size={32} />
              </div>
              <h4 className="font-headline-md text-headline-md text-clinical-blue mb-3">Cardiology</h4>
              <p className="font-body-md text-body-md text-on-surface-variant mb-6">Comprehensive cardiac care including advanced bypass surgeries and interventions.</p>
              <a className="text-hospital-teal font-label-md text-label-md flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity" href="#">
                View Details <ChevronRight size={18} />
              </a>
            </div>
            <div className="group bg-white p-8 rounded-xl border border-border-subtle hover:border-hospital-teal hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 rounded-xl bg-clinical-blue/5 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-clinical-blue/10 transition-all">
                <Brain className="text-hospital-teal" size={32} />
              </div>
              <h4 className="font-headline-md text-headline-md text-clinical-blue mb-3">Neurology</h4>
              <p className="font-body-md text-body-md text-on-surface-variant mb-6">Expert treatment for neurological disorders and advanced neuro-spine surgeries.</p>
              <a className="text-hospital-teal font-label-md text-label-md flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity" href="#">
                View Details <ChevronRight size={18} />
              </a>
            </div>
            <div className="group bg-white p-8 rounded-xl border border-border-subtle hover:border-hospital-teal hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 rounded-xl bg-clinical-blue/5 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-clinical-blue/10 transition-all">
                <Microscope className="text-hospital-teal" size={32} />
              </div>
              <h4 className="font-headline-md text-headline-md text-clinical-blue mb-3">Oncology</h4>
              <p className="font-body-md text-body-md text-on-surface-variant mb-6">Advanced surgical and medical oncology protocols for precise cancer treatments.</p>
              <a className="text-hospital-teal font-label-md text-label-md flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity" href="#">
                View Details <ChevronRight size={18} />
              </a>
            </div>
            <div className="group bg-white p-8 rounded-xl border border-border-subtle hover:border-hospital-teal hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 rounded-xl bg-clinical-blue/5 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-clinical-blue/10 transition-all">
                <Bone className="text-hospital-teal" size={32} />
              </div>
              <h4 className="font-headline-md text-headline-md text-clinical-blue mb-3">Orthopedics</h4>
              <p className="font-body-md text-body-md text-on-surface-variant mb-6">Modern orthopedic procedures including joint replacement and trauma care.</p>
              <a className="text-hospital-teal font-label-md text-label-md flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity" href="#">
                View Details <ChevronRight size={18} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Modern Split */}
      <section className="py-12 md:py-margin-desktop bg-surface overflow-hidden">
        <div className="max-w-container-max mx-auto px-4 md:px-gutter">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="w-full lg:w-1/2 relative">
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
                <img alt="Professional medical consultation" className="w-full h-[500px] object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCBgHcsxpDOZby8k4LHbL3GYa6J1FOcy9vZIa508Bj7dHhJqNRgsoiN37XJDaKnznUNe7b1630t_Qs2GsAx7goeoOVcbH5hjElCUmXMfjQILNajacDvw5fYmo06gxHMXkq-PgRSnjXUaCp-oIHgo-XD4Nc4HU8h3wj7DssQFCvsFcjBQpFILF6vmfbmtmpfo0eFr7yr6Wj5YddyYYtmDlCFtCh1W7OK8IJWhn6dUfiWvuHxd57xMYNzqZMa5d4VU2h1ByhywCxRzARP" />
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
          <div className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-8 w-full [scrollbar-width:none] [&::-webkit-scrollbar]:hidden px-4 md:px-0">
            <div className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 min-w-[260px] md:min-w-[300px] w-[260px] md:w-[300px] flex-shrink-0 snap-center">
                <div className="aspect-[9/16] bg-clinical-blue/20 relative">
                    <video className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" poster="https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=800&auto=format&fit=crop" loop muted playsInline>
                        <source src="https://res.cloudinary.com/dizaawlyl/video/upload/v1781695281/Copy_of_Lalitha_testi_Final_01_usg5fu.mp4" type="video/mp4" />
                    </video>
                    <div className="absolute inset-0 bg-clinical-blue/40 flex items-center justify-center group-hover:bg-clinical-blue/20 transition-colors cursor-pointer">
                        <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                            <Play className="text-clinical-blue fill-clinical-blue ml-1" size={32} />
                        </div>
                    </div>
                </div>
                <div className="p-6 bg-white border-t border-border-subtle">
                    <p className="font-label-md text-clinical-blue mb-1">Lalitha</p>
                    <p className="text-label-sm text-on-surface-variant">Cardiac Surgery Recovery</p>
                </div>
            </div>
            <div className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 min-w-[260px] md:min-w-[300px] w-[260px] md:w-[300px] flex-shrink-0 snap-center">
                <div className="aspect-[9/16] bg-clinical-blue/20 relative">
                    <video className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" poster="https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&w=800&auto=format&fit=crop" loop muted playsInline>
                        <source src="https://res.cloudinary.com/dizaawlyl/video/upload/v1781696670/Copy_of_Kirhnam_raju_testi_njctym.mp4" type="video/mp4" />
                    </video>
                    <div className="absolute inset-0 bg-clinical-blue/40 flex items-center justify-center group-hover:bg-clinical-blue/20 transition-colors cursor-pointer">
                        <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                            <Play className="text-clinical-blue fill-clinical-blue ml-1" size={32} />
                        </div>
                    </div>
                </div>
                <div className="p-6 bg-white border-t border-border-subtle">
                    <p className="font-label-md text-clinical-blue mb-1">Krishnam Raju</p>
                    <p className="text-label-sm text-on-surface-variant">Neurological Care Journey</p>
                </div>
            </div>
            <div className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 min-w-[260px] md:min-w-[300px] w-[260px] md:w-[300px] flex-shrink-0 snap-center">
                <div className="aspect-[9/16] bg-clinical-blue/20 relative">
                    <video className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" poster="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=800&auto=format&fit=crop" loop muted playsInline>
                        <source src="https://res.cloudinary.com/dizaawlyl/video/upload/v1781699907/Copy_of_G.latha_testi_1_gadlur.mp4" type="video/mp4" />
                    </video>
                    <div className="absolute inset-0 bg-clinical-blue/40 flex items-center justify-center group-hover:bg-clinical-blue/20 transition-colors cursor-pointer">
                        <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                            <Play className="text-clinical-blue fill-clinical-blue ml-1" size={32} />
                        </div>
                    </div>
                </div>
                <div className="p-6 bg-white border-t border-border-subtle">
                    <p className="font-label-md text-clinical-blue mb-1">G. Latha</p>
                    <p className="text-label-sm text-on-surface-variant">Maternity Care Experience</p>
                </div>
            </div>
            {/* Added one more to show scrollability */}
            <div className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 min-w-[260px] md:min-w-[300px] w-[260px] md:w-[300px] flex-shrink-0 snap-center">
                <div className="aspect-[9/16] bg-clinical-blue/20 relative">
                    <video className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" poster="https://images.unsplash.com/photo-1582750433449-648ed127c09e?q=80&w=800&auto=format&fit=crop" loop muted playsInline>
                        <source src="" type="video/mp4" />
                    </video>
                    <div className="absolute inset-0 bg-clinical-blue/40 flex items-center justify-center group-hover:bg-clinical-blue/20 transition-colors cursor-pointer">
                        <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform">
                            <Play className="text-clinical-blue fill-clinical-blue ml-1" size={32} />
                        </div>
                    </div>
                </div>
                <div className="p-6 bg-white border-t border-border-subtle">
                    <p className="font-label-md text-clinical-blue mb-1">Karthik R.</p>
                    <p className="text-label-sm text-on-surface-variant">Orthopedic Rehabilitation</p>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Statistics */}
      <section className="py-12 md:py-margin-desktop bg-clinical-blue text-white">
        <div className="max-w-container-max mx-auto px-4 md:px-gutter">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="flex flex-col gap-2 animate-fadeIn">
              <span className="text-display-lg font-display-lg text-healing-emerald">50k+</span>
              <p className="text-label-md font-label-md text-surface-container-low opacity-70">Happy Patients</p>
            </div>
            <div className="flex flex-col gap-2 animate-fadeIn">
              <span className="text-display-lg font-display-lg text-healing-emerald">12+</span>
              <p className="text-label-md font-label-md text-surface-container-low opacity-70">Years Experience</p>
            </div>
            <div className="flex flex-col gap-2 animate-fadeIn">
              <span className="text-display-lg font-display-lg text-healing-emerald">100+</span>
              <p className="text-label-md font-label-md text-surface-container-low opacity-70">Expert Doctors</p>
            </div>
            <div className="flex flex-col gap-2 animate-fadeIn">
              <span className="text-display-lg font-display-lg text-healing-emerald">24/7</span>
              <p className="text-label-md font-label-md text-surface-container-low opacity-70">Emergency Care</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
