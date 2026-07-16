import { Heart, Brain, Baby, Activity, Bone, Eye, Stethoscope, Scissors, Users, Wind, Smile } from "lucide-react";

export default function DepartmentsPage() {
  const departments = [
    { name: "General Medicine", desc: "Comprehensive adult medicine, diagnostics, and preventive care.", icon: Stethoscope },
    { name: "Pulmonology", desc: "Diagnosis and treatment of respiratory tract diseases.", icon: Wind },
    { name: "General & Laparoscopic Surgery", desc: "Minimally invasive and laparoscopic surgical procedures.", icon: Scissors },
    { name: "Pediatrics & Neonatology", desc: "Comprehensive child healthcare, vaccinations, and specialized newborn care.", icon: Baby },
    { name: "Orthopaedics", desc: "Modern joint replacements, sports injuries, and advanced trauma care.", icon: Bone },
    { name: "Gynecology & Obstetrics", desc: "Complete women's health, maternity care, and gynecological surgeries.", icon: Users },
    { name: "Critical Care & Polytrauma", desc: "24/7 intensive care, trauma management, and rapid response unit.", icon: Activity },
    { name: "Dental & Maxillofacial Surgery", desc: "Comprehensive dental care, orthodontics, and oral surgery.", icon: Smile },
    { name: "Joint Replacement Surgery", desc: "Advanced surgical procedures for knee, hip, and other joint replacements.", icon: Bone },
    { name: "Radiology", desc: "Advanced imaging services including MRI, CT scan, X-Ray, and Ultrasound.", icon: Eye },
    { name: "Psychiatry", desc: "Expert care for mental health, behavioral disorders, and emotional well-being.", icon: Brain },
    { name: "Physiotherapy", desc: "Rehabilitation, physical therapy, and mobility restoration.", icon: Activity },
    { name: "Gastroenterology", desc: "Comprehensive care for digestive system disorders.", icon: Stethoscope },
    { name: "Urology", desc: "Expert care for urinary tract system and male reproductive organs.", icon: Activity },
    { name: "Cardiology", desc: "Advanced cardiac care, bypass surgeries, and interventional cardiology.", icon: Heart },
    { name: "Nephrology & Dialysis", desc: "Advanced treatment for kidney diseases and dialysis care.", icon: Stethoscope },
    { name: "Neurology", desc: "Expert treatment for neurological disorders.", icon: Brain },
    { name: "Neuro Surgery", desc: "Advanced surgical treatments for brain and spine conditions.", icon: Brain },
    { name: "Pediatric Surgery", desc: "Specialized surgical care for infants, children, and adolescents.", icon: Baby },
    { name: "Medical & Surgical Oncology", desc: "Expert cancer care, chemotherapy, and advanced surgical oncology.", icon: Activity },
    { name: "E N T", desc: "Ear, nose, and throat disorders treatment and surgeries.", icon: Stethoscope },
    { name: "Diabetology & Endocrinology", desc: "Expert care for diabetes, thyroid, and hormonal disorders.", icon: Activity },
    { name: "Dermatology & Plastic Surgery", desc: "Advanced skin care, cosmetic, and reconstructive surgical procedures.", icon: Scissors },
    { name: "Spine Surgery", desc: "Comprehensive care and advanced surgical treatments for spinal disorders.", icon: Bone },
    { name: "24/7 Diagnostics", desc: "Round-the-clock pathology and imaging services for accurate diagnosis.", icon: Activity },
  ];

  return (
    <div className="bg-surface-gray min-h-screen">
      {/* Hero Section */}
      <section className="bg-clinical-blue text-white py-24 px-gutter relative overflow-hidden">
        <div className="max-w-container-max mx-auto relative z-10 text-center">
          <h1 className="font-display-lg text-display-lg mb-6">Our <span className="text-healing-emerald">Specialities</span></h1>
          <p className="font-body-lg text-body-lg text-surface-container-low max-w-2xl mx-auto opacity-90">
            Precision medical care across advanced surgical and medical disciplines. Our highly specialized departments are equipped with world-class technology.
          </p>
        </div>
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_50%_50%,#ffffff_2px,transparent_2px)] bg-[size:30px_30px]"></div>
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
