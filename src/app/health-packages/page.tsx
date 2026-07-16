import { Check, HeartPulse, ShieldCheck, Activity } from "lucide-react";

export default function HealthPackagesPage() {
  const packages = [
    {
      name: "General Health Check-Up",
      originalPrice: "₹2,800",
      price: "₹1,800",
      icon: Activity,
      desc: "Stay ahead with regular check-ups. Stay healthy, stay happy.",
      features: [
        "Hematology (CBP, CUE)",
        "Bio Chemistry (RBS, Serum Creatinine)",
        "Serology (HIV I & II, HBsAg)",
        "Radiology (Chest X-Ray PA View)",
        "Consultation with Physician"
      ],
      color: "bg-surface-container"
    },
    {
      name: "Diabetic Health Checkup",
      originalPrice: "₹3,500",
      price: "₹2,400",
      icon: Activity,
      desc: "Complete care for better health, every day.",
      features: [
        "Hematology (CBP, CUE)",
        "Bio Chemistry (Blood Sugar F&PP, HbA1c)",
        "Lipid & Liver Profiles",
        "Kidney Profile (Creatinine, Urea)",
        "Urine for Micro Albumin",
        "Consultation with Physician"
      ],
      color: "bg-surface-container"
    },
    {
      name: "Sr. Citizen Health Checkup",
      originalPrice: "₹5,500",
      price: "₹3,300",
      icon: HeartPulse,
      desc: "Comprehensive care, for a healthier tomorrow.",
      features: [
        "Hematology & PAP Smear (for women)",
        "Bio Chemistry (PSA, LFT, Lipid Profile)",
        "Kidney Profile (Creatinine, Urea, Calcium)",
        "Radiology (Chest X-Ray, USG Abdomen & Pelvis)",
        "Cardiology (ECG)",
        "Consultation with Physician / Gynecologist"
      ],
      color: "bg-hospital-teal text-white",
      highlight: true
    },
    {
      name: "Master Health Checkup",
      originalPrice: "₹7,000",
      price: "₹4,200",
      icon: ShieldCheck,
      desc: "Your Health. Your Best Investment.",
      features: [
        "Complete Blood Tests & Urine Exam",
        "Diabetes Screening & Lipid Profile",
        "Liver, Kidney & Thyroid Function",
        "ECG & Chest X-Ray",
        "Ultrasound Abdomen",
        "Physician Consultation"
      ],
      color: "bg-surface-container"
    },
    {
      name: "Executive Health Checkup",
      originalPrice: "₹10,000",
      price: "₹6,000",
      icon: ShieldCheck,
      desc: "More than a test, it's a step towards a healthier you.",
      features: [
        "Complete Blood Picture & Urine Exam",
        "Blood Grouping & Rh Typing",
        "Organ Profiles (Liver, Kidney, Thyroid, Lipid)",
        "ECG & Chest X-Ray PA View",
        "Ultrasound Abdomen & Pelvis",
        "Consultation with Physician"
      ],
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg, idx) => {
            const IconComponent = pkg.icon;
            return (
              <div key={idx} className={`rounded-2xl p-8 border border-border-subtle shadow-xl hover:-translate-y-2 transition-transform duration-300 relative flex flex-col h-full ${pkg.color}`}>
                {pkg.highlight && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-healing-emerald text-white text-xs font-bold px-4 py-1 rounded-full uppercase tracking-widest shadow-md">
                    Most Popular
                  </div>
                )}
                <div className="flex justify-between items-start mb-6">
                  <div className="pr-4">
                    <h3 className="font-headline-md text-2xl font-bold mb-2 leading-tight">{pkg.name}</h3>
                    <div className="flex items-center gap-3 mt-3">
                      <p className={`font-label-md text-3xl font-bold ${pkg.highlight || pkg.color.includes('text-white') ? 'text-white' : 'text-hospital-teal'}`}>{pkg.price}</p>
                      <p className={`font-label-md text-lg line-through opacity-70 ${pkg.highlight || pkg.color.includes('text-white') ? 'text-white' : 'text-on-surface-variant'}`}>{pkg.originalPrice}</p>
                    </div>
                  </div>
                  <IconComponent size={32} className="opacity-80 flex-shrink-0" />
                </div>
                <p className={`font-body-md mb-8 ${pkg.highlight || pkg.color.includes('text-white') ? 'text-white/80' : 'text-on-surface-variant'}`}>
                  {pkg.desc}
                </p>
                <ul className="space-y-4 mb-8 flex-1">
                  {pkg.features.map((feat, i) => (
                    <li key={i} className="flex items-start gap-3 font-body-md">
                      <div className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5 ${pkg.highlight || pkg.color.includes('text-white') ? 'bg-white/20' : 'bg-hospital-teal/10'}`}>
                        <Check size={12} className={pkg.highlight || pkg.color.includes('text-white') ? 'text-white' : 'text-hospital-teal'} />
                      </div>
                      <span className="leading-tight">{feat}</span>
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-4 rounded-lg font-bold transition-all mt-auto ${pkg.highlight ? 'bg-white text-hospital-teal hover:bg-surface-gray' : pkg.color.includes('clinical-blue') ? 'bg-healing-emerald text-white hover:brightness-110' : 'bg-clinical-blue text-white hover:bg-opacity-90'}`}>
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
