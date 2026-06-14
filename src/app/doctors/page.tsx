import { Calendar, Award, Star } from "lucide-react";

export default function DoctorsPage() {
  const doctors = [
    { name: "Dr. Ramesh K.", specialty: "Chief Cardiologist", exp: "20+ Years", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCBgHcsxpDOZby8k4LHbL3GYa6J1FOcy9vZIa508Bj7dHhJqNRgsoiN37XJDaKnznUNe7b1630t_Qs2GsAx7goeoOVcbH5hjElCUmXMfjQILNajacDvw5fYmo06gxHMXkq-PgRSnjXUaCp-oIHgo-XD4Nc4HU8h3wj7DssQFCvsFcjBQpFILF6vmfbmtmpfo0eFr7yr6Wj5YddyYYtmDlCFtCh1W7OK8IJWhn6dUfiWvuHxd57xMYNzqZMa5d4VU2h1ByhywCxRzARP" },
    { name: "Dr. Sangeeta M.", specialty: "Senior Neurologist", exp: "15+ Years", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBOC_vXKhvc_1-2wqgchaS1p4TbJyIl99sTe7JNoqRVSOC5XeDeL0ODP_kbAW3HwYTMkSt5hpiDmKcYb5CqA3aiE6uoHjBJ6GRz53QWLLZqF285fP-GihSLxtIvvZOM_AJzY1xYnzJZz40XzY27OuzHvXwuY4sVKYhDE3dkAsyNh_uMuhuyKEMKKDr9tvaCMQEhWxpS2LJ-9gZOmE4j6osHVD43zgvGhGFpG0z_AjEGe_YuLlRYmFq-HbfvEygiyXNSwFGZXkAYbYI5" },
    { name: "Dr. Anjali P.", specialty: "Head of Pediatrics", exp: "18+ Years", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCBgHcsxpDOZby8k4LHbL3GYa6J1FOcy9vZIa508Bj7dHhJqNRgsoiN37XJDaKnznUNe7b1630t_Qs2GsAx7goeoOVcbH5hjElCUmXMfjQILNajacDvw5fYmo06gxHMXkq-PgRSnjXUaCp-oIHgo-XD4Nc4HU8h3wj7DssQFCvsFcjBQpFILF6vmfbmtmpfo0eFr7yr6Wj5YddyYYtmDlCFtCh1W7OK8IJWhn6dUfiWvuHxd57xMYNzqZMa5d4VU2h1ByhywCxRzARP" },
    { name: "Dr. Vikram S.", specialty: "Orthopedic Surgeon", exp: "12+ Years", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBOC_vXKhvc_1-2wqgchaS1p4TbJyIl99sTe7JNoqRVSOC5XeDeL0ODP_kbAW3HwYTMkSt5hpiDmKcYb5CqA3aiE6uoHjBJ6GRz53QWLLZqF285fP-GihSLxtIvvZOM_AJzY1xYnzJZz40XzY27OuzHvXwuY4sVKYhDE3dkAsyNh_uMuhuyKEMKKDr9tvaCMQEhWxpS2LJ-9gZOmE4j6osHVD43zgvGhGFpG0z_AjEGe_YuLlRYmFq-HbfvEygiyXNSwFGZXkAYbYI5" },
  ];

  return (
    <div className="bg-surface-gray min-h-screen">
      {/* Hero Section */}
      <section className="bg-clinical-blue text-white py-24 px-gutter relative overflow-hidden">
        <div className="max-w-container-max mx-auto relative z-10 text-center">
          <h1 className="font-display-lg text-display-lg mb-6">Our <span className="text-healing-emerald">Medical Experts</span></h1>
          <p className="font-body-lg text-body-lg text-surface-container-low max-w-2xl mx-auto opacity-90">
            Meet our team of highly experienced, board-certified specialists dedicated to providing you with world-class healthcare.
          </p>
        </div>
      </section>

      {/* Grid Section */}
      <section className="py-20 px-gutter max-w-container-max mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {doctors.map((doctor, idx) => (
            <div key={idx} className="bg-white rounded-2xl overflow-hidden shadow-lg border border-border-subtle group hover:shadow-2xl transition-all duration-300">
              <div className="h-64 overflow-hidden relative">
                <img src={doctor.img} alt={doctor.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur text-clinical-blue text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                  <Star size={12} className="fill-hospital-teal text-hospital-teal" /> 4.9
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-headline-md text-xl text-clinical-blue font-bold mb-1">{doctor.name}</h3>
                <p className="font-label-md text-hospital-teal mb-4">{doctor.specialty}</p>
                <div className="flex items-center gap-2 text-on-surface-variant font-label-sm mb-6">
                  <Award size={16} /> {doctor.exp} Experience
                </div>
                <button className="w-full bg-clinical-blue text-white py-3 rounded-lg font-label-md hover:bg-opacity-90 transition-colors flex justify-center items-center gap-2">
                  <Calendar size={18} /> Book Appointment
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
