import { Heart, Brain, Baby, Activity, Bone, Eye, Stethoscope, Scissors } from "lucide-react";

export default function DepartmentsPage() {
  const departments = [
    { name: "Cardiology", desc: "Advanced cardiac care, bypass surgeries, and interventional cardiology.", icon: Heart },
    { name: "Neurology", desc: "Expert treatment for neurological disorders and neuro-spine surgeries.", icon: Brain },
    { name: "Pediatrics", desc: "Comprehensive child healthcare, neonatal intensive care, and vaccinations.", icon: Baby },
    { name: "Emergency Medicine", desc: "24/7 critical care, trauma management, and rapid response unit.", icon: Activity },
    { name: "Orthopedics", desc: "Modern joint replacements, sports injuries, and advanced trauma care.", icon: Bone },
    { name: "Ophthalmology", desc: "State-of-the-art eye care, cataract surgery, and vision correction.", icon: Eye },
    { name: "Internal Medicine", desc: "Comprehensive adult medicine, diagnostics, and preventive care.", icon: Stethoscope },
    { name: "General Surgery", desc: "Minimally invasive and laparoscopic surgical procedures.", icon: Scissors },
  ];

  return (
    <div className="bg-surface-gray min-h-screen">
      {/* Hero Section */}
      <section className="bg-clinical-blue text-white py-24 px-gutter relative overflow-hidden">
        <div className="max-w-container-max mx-auto relative z-10 text-center">
          <h1 className="font-display-lg text-display-lg mb-6">Centers of <span className="text-healing-emerald">Excellence</span></h1>
          <p className="font-body-lg text-body-lg text-surface-container-low max-w-2xl mx-auto opacity-90">
            Precision medical care across advanced surgical and medical disciplines. Our highly specialized departments are equipped with world-class technology.
          </p>
        </div>
        <div className="absolute top-0 left-0 w-full h-full opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 50% 50%, #ffffff 2px, transparent 2px)', backgroundSize: '30px 30px' }}></div>
      </section>

      {/* Grid Section */}
      <section className="py-20 px-gutter max-w-container-max mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {departments.map((dept, idx) => {
            const IconComponent = dept.icon;
            return (
              <div key={idx} className="bg-white rounded-xl p-8 border border-border-subtle shadow-lg hover:shadow-2xl hover:border-hospital-teal transition-all duration-300 group hover:-translate-y-2">
                <div className="w-16 h-16 rounded-full bg-surface-container flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <IconComponent className="text-clinical-blue" size={32} />
                </div>
                <h3 className="font-headline-md text-headline-md text-clinical-blue mb-3">{dept.name}</h3>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  {dept.desc}
                </p>
                <a href="#" className="inline-block mt-6 font-label-md text-label-md text-hospital-teal opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn More &rarr;
                </a>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
