import { Check, HeartPulse, ShieldCheck, Activity } from "lucide-react";

export default function HealthPackagesPage() {
  const packages = [
    {
      name: "Basic Health Check",
      price: "₹1,999",
      icon: Activity,
      desc: "Essential screening for individuals under 30 to monitor baseline health.",
      features: ["Complete Blood Count (CBC)", "Fasting Blood Sugar", "Lipid Profile", "ECG", "General Physician Consultation"],
      color: "bg-surface-container"
    },
    {
      name: "Comprehensive Cardiac",
      price: "₹4,499",
      icon: HeartPulse,
      desc: "Advanced heart health screening for individuals above 40.",
      features: ["Echo Cardiogram", "TMT (Treadmill Test)", "Advanced Lipid Profile", "HbA1c", "Cardiologist Consultation"],
      color: "bg-hospital-teal text-white",
      highlight: true
    },
    {
      name: "Executive Wellness",
      price: "₹7,999",
      icon: ShieldCheck,
      desc: "Complete head-to-toe evaluation for total peace of mind.",
      features: ["Whole Body Ultrasound", "Thyroid Profile", "Liver Function Test", "Kidney Function Test", "Dietitian & Physician Consult"],
      color: "bg-clinical-blue text-white"
    }
  ];

  return (
    <div className="bg-surface-gray min-h-screen">
      <section className="bg-clinical-blue text-white py-24 px-gutter relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[url('/images/health_packages_hero.png')] bg-cover bg-center opacity-30 mix-blend-overlay"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-clinical-blue via-clinical-blue/80 to-clinical-blue/20"></div>
        </div>
        <div className="max-w-container-max mx-auto relative z-10 text-center">
          <h1 className="font-display-lg text-display-lg mb-6 drop-shadow-md">Preventive <span className="text-healing-emerald">Health Packages</span></h1>
          <p className="font-body-lg text-body-lg text-surface-container-low max-w-2xl mx-auto opacity-100 drop-shadow-md">
            Proactive healthcare tailored for you. Choose from our specialized screening packages to stay ahead of potential health risks.
          </p>
        </div>
      </section>

      <section className="py-20 px-gutter max-w-container-max mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg, idx) => {
            const IconComponent = pkg.icon;
            return (
              <div key={idx} className={`rounded-2xl p-8 border border-border-subtle shadow-xl hover:-translate-y-2 transition-transform duration-300 relative ${pkg.color}`}>
                {pkg.highlight && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-healing-emerald text-white text-xs font-bold px-4 py-1 rounded-full uppercase tracking-widest shadow-md">
                    Most Popular
                  </div>
                )}
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="font-headline-md text-2xl font-bold mb-2">{pkg.name}</h3>
                    <p className={`font-label-md text-3xl font-bold ${pkg.highlight ? 'text-white' : 'text-hospital-teal'}`}>{pkg.price}</p>
                  </div>
                  <IconComponent size={32} className="opacity-80" />
                </div>
                <p className={`font-body-md mb-8 ${pkg.highlight || pkg.color.includes('text-white') ? 'text-white/80' : 'text-on-surface-variant'}`}>
                  {pkg.desc}
                </p>
                <ul className="space-y-4 mb-8">
                  {pkg.features.map((feat, i) => (
                    <li key={i} className="flex items-center gap-3 font-body-md">
                      <div className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center ${pkg.highlight || pkg.color.includes('text-white') ? 'bg-white/20' : 'bg-hospital-teal/10'}`}>
                        <Check size={12} className={pkg.highlight || pkg.color.includes('text-white') ? 'text-white' : 'text-hospital-teal'} />
                      </div>
                      {feat}
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-4 rounded-lg font-bold transition-all ${pkg.highlight ? 'bg-white text-hospital-teal hover:bg-surface-gray' : pkg.color.includes('clinical-blue') ? 'bg-healing-emerald text-white hover:brightness-110' : 'bg-clinical-blue text-white hover:bg-opacity-90'}`}>
                  Book This Package
                </button>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
