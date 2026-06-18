import { Calendar, MapPin, ArrowRight } from "lucide-react";

export default function CommunityPage() {
  const events = [
    { title: "Free Cardiac Camp", date: "July 01, 2026", location: "Supraja Main Campus", desc: "Complimentary ECG and physician consultation for senior citizens.", image: "https://res.cloudinary.com/dizaawlyl/image/upload/v1781701524/20260422_102550_suqole.jpg" },
    { title: "Blood Donation Drive", date: "August 15, 2026", location: "City Center Hall", desc: "Join us in saving lives. All donors receive a free basic health checkup.", image: "https://res.cloudinary.com/dizaawlyl/image/upload/v1781701522/20260422_104845_illcoy.jpg" },
    { title: "Diabetes Awareness Walk", date: "November 14, 2026", location: "Central Park", desc: "A 5k walk to raise awareness and promote healthy lifestyles.", image: "https://res.cloudinary.com/dizaawlyl/image/upload/v1781701523/20260422_103845_c3czeg.jpg" }
  ];

  return (
    <div className="bg-surface-gray min-h-screen">
      {/* Hero Section */}
      <section className="bg-clinical-blue text-white py-24 px-4 md:px-gutter relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-healing-emerald/10 rounded-full blur-3xl mix-blend-overlay pointer-events-none"></div>
        <div className="max-w-container-max mx-auto relative z-10 text-center">
          <div className="inline-block px-5 py-2 rounded-full bg-white/10 border border-white/20 text-white font-label-sm tracking-widest uppercase mb-6 backdrop-blur-md">
            Outreach Programs
          </div>
          <h1 className="font-display-lg text-4xl md:text-5xl lg:text-display-lg mb-6 leading-[1.1]">Community <span className="text-healing-emerald">Wellness</span></h1>
          <p className="font-body-lg text-lg md:text-body-lg text-surface-container-low max-w-2xl mx-auto opacity-90 leading-relaxed">
            Our commitment to health extends beyond the hospital walls. Join our community outreach programs and take a step towards better living.
          </p>
        </div>
      </section>

      {/* Grid Section */}
      <section className="py-20 px-4 md:px-gutter max-w-container-max mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((evt, idx) => (
            <div key={idx} className="bg-white rounded-3xl overflow-hidden shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] border border-border-subtle group hover:shadow-[0_20px_40px_-15px_rgba(0,48,87,0.15)] transition-all duration-500 flex flex-col hover:-translate-y-2">
              <div className="h-56 relative overflow-hidden bg-surface-container-low">
                {/* Fallback pattern */}
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_50%_50%,#003057_2px,transparent_2px)] bg-[size:20px_20px]"></div>
                
                <img src={evt.image} alt={evt.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-clinical-blue/90 via-clinical-blue/20 to-transparent z-10 opacity-80 group-hover:opacity-100 transition-opacity"></div>
                
                <div className="absolute bottom-4 left-4 z-20">
                  <div className="bg-healing-emerald/90 text-white text-xs font-bold px-4 py-1.5 rounded-full flex items-center gap-2 backdrop-blur-md shadow-sm border border-white/20">
                    <Calendar size={14} /> {evt.date}
                  </div>
                </div>
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="font-display-sm text-2xl text-clinical-blue mb-4 group-hover:text-healing-emerald transition-colors line-clamp-2">{evt.title}</h3>
                <div className="flex items-center gap-2 text-surface-container-low font-label-md text-sm mb-4">
                  <MapPin size={18} className="text-hospital-teal flex-shrink-0" /> 
                  <span className="truncate">{evt.location}</span>
                </div>
                <p className="font-body-md text-on-surface-variant mb-8 line-clamp-3 leading-relaxed flex-grow">{evt.desc}</p>
                <button className="mt-auto w-full bg-surface-gray text-clinical-blue py-3.5 rounded-xl font-label-md hover:bg-clinical-blue hover:text-white transition-all duration-300 flex justify-center items-center gap-2 group/btn border border-border-subtle hover:border-clinical-blue">
                  Register Now <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
