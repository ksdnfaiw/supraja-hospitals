"use client";

import { useState } from "react";
import { Calendar, Award, Star, Search, ChevronRight, Phone, Stethoscope, X } from "lucide-react";

const doctors = [
  {
    name: "Dr. Rindu Sahithi",
    specialty: "Obstetrics & Gynaecology",
    department: "Gynaecology",
    exp: "12+ Years",
    rating: 4.9,
    qualifications: "MBBS, MS (OBG)",
    availability: "Mon – Sat",
    img: "https://res.cloudinary.com/dizaawlyl/image/upload/c_fill,g_face,h_400,w_400/v1782630257/Dr.Rindu_Sahithi_fys1dg.jpg",
    objectPosition: "center center",
  },
  {
    name: "Dr. Alekhya Vempati",
    specialty: "General Physician",
    department: "General Medicine",
    exp: "8+ Years",
    rating: 4.8,
    qualifications: "MBBS, MD (Medicine)",
    availability: "Mon – Fri",
    img: "https://res.cloudinary.com/dizaawlyl/image/upload/c_fill,g_face,h_400,w_400/v1782630256/Dr.Alekhya_Vempati_pjfixj.jpg",
    objectPosition: "center center",
  },
  {
    name: "Dr. Deepthi",
    specialty: "Dermatology & Cosmetology",
    department: "Dermatology",
    exp: "10+ Years",
    rating: 4.9,
    qualifications: "MBBS, MD (Dermatology)",
    availability: "Tue – Sun",
    img: "https://res.cloudinary.com/dizaawlyl/image/upload/c_fill,g_face,h_400,w_400/v1782630256/Dr.Deepthi_xl9pvs.jpg",
    objectPosition: "center center",
  },
  {
    name: "Dr. Tejaswi Rao",
    specialty: "Paediatrics",
    department: "Paediatrics",
    exp: "14+ Years",
    rating: 4.9,
    qualifications: "MBBS, DCH, DNB",
    availability: "Mon – Sat",
    img: "https://res.cloudinary.com/dizaawlyl/image/upload/c_fill,g_face,h_400,w_400/v1782630256/Dr.Tejaswi_Rao_u1hb3o.jpg",
    objectPosition: "center center",
  },
  {
    name: "Dr. Naveen Reddy",
    specialty: "Orthopaedics & Joint Replacement",
    department: "Orthopaedics",
    exp: "16+ Years",
    rating: 4.8,
    qualifications: "MBBS, MS (Ortho), DNB",
    availability: "Mon – Sat",
    img: "https://res.cloudinary.com/dizaawlyl/image/upload/c_fill,g_face,h_400,w_400/v1782630256/Dr.Naveen_Reddy_ydvqjh.jpg",
    objectPosition: "center center",
  },
  {
    name: "Dr. Srinu Chandra",
    specialty: "General Surgery & Laparoscopy",
    department: "Surgery",
    exp: "18+ Years",
    rating: 4.9,
    qualifications: "MBBS, MS (Surgery)",
    availability: "Mon – Fri",
    img: "https://res.cloudinary.com/dizaawlyl/image/upload/c_fill,g_face,h_400,w_400/v1782630257/Dr.Srinu_Chandra_b36hcb.jpg",
    objectPosition: "center center",
  },
  {
    name: "Dr. Sravani Reddy",
    specialty: "Obstetrics & Fertility",
    department: "Gynaecology",
    exp: "11+ Years",
    rating: 4.8,
    qualifications: "MBBS, MS (OBG), FMAS",
    availability: "Mon – Sat",
    img: "https://res.cloudinary.com/dizaawlyl/image/upload/c_fill,g_face,h_400,w_400/v1782630257/Dr.Sravani_Reddy_yv10xn.jpg",
    objectPosition: "center center",
  },
  {
    name: "Dr. Kishore",
    specialty: "Cardiology",
    department: "Cardiology",
    exp: "20+ Years",
    rating: 4.9,
    qualifications: "MBBS, MD, DM (Cardiology)",
    availability: "Mon – Sat",
    img: "https://res.cloudinary.com/dizaawlyl/image/upload/c_fill,g_face,h_400,w_400/v1782630256/Dr.Kishore_nxetwf.jpg",
    objectPosition: "center center",
  },
  {
    name: "Dr. Saritha",
    specialty: "Neurology",
    department: "Neurology",
    exp: "13+ Years",
    rating: 4.8,
    qualifications: "MBBS, MD, DM (Neurology)",
    availability: "Tue – Sun",
    img: "https://res.cloudinary.com/dizaawlyl/image/upload/c_fill,g_face,h_400,w_400/v1782630257/Dr.Saritha_scyvsw.jpg",
    objectPosition: "center center",
  },
  {
    name: "Dr. Karthikeya",
    specialty: "Urology & Andrology",
    department: "Urology",
    exp: "15+ Years",
    rating: 4.9,
    qualifications: "MBBS, MS, MCh (Urology)",
    availability: "Mon – Fri",
    img: "https://res.cloudinary.com/dizaawlyl/image/upload/c_fill,g_face,h_400,w_400/v1782630257/Dr.Karthikeya_mm3d91.jpg",
    objectPosition: "center center",
  },
  {
    name: "Dr. Sameera",
    specialty: "Psychiatry & Mental Health",
    department: "Psychiatry",
    exp: "9+ Years",
    rating: 4.8,
    qualifications: "MBBS, MD (Psychiatry)",
    availability: "Mon – Sat",
    img: "https://res.cloudinary.com/dizaawlyl/image/upload/c_fill,g_face,h_400,w_400/v1782630258/Dr.Sameera_u80b5m.jpg",
    objectPosition: "center center",
  },
  {
    name: "Dr. Harish",
    specialty: "Gastroenterology & Hepatology",
    department: "Gastroenterology",
    exp: "17+ Years",
    rating: 4.9,
    qualifications: "MBBS, MD, DM (Gastro)",
    availability: "Mon – Sat",
    img: "https://res.cloudinary.com/dizaawlyl/image/upload/c_fill,g_face,h_400,w_400/v1782630315/Dr.Harish_fq8loq.jpg",
    objectPosition: "center center",
  },
  {
    name: "Dr. Srinivas Chittipaka",
    specialty: "Interventional Radiology",
    department: "Radiology",
    exp: "22+ Years",
    rating: 4.9,
    qualifications: "MBBS, MD (Radiology), FRCR",
    availability: "Mon – Fri",
    img: "https://res.cloudinary.com/dizaawlyl/image/upload/c_fill,g_face,h_400,w_400/v1782630316/Dr_Srinivas_Chittipaka_e71ivt.jpg",
    objectPosition: "center center",
  },
];

const departments = [
  "All",
  "Cardiology",
  "Neurology",
  "Gynaecology",
  "Paediatrics",
  "Orthopaedics",
  "Surgery",
  "Gastroenterology",
  "Dermatology",
  "Urology",
  "Psychiatry",
  "General Medicine",
  "Radiology",
];

type Doctor = typeof doctors[0];

function DoctorCard({ doctor }: { doctor: Doctor }) {
  return (
    <article className="group bg-white rounded-2xl overflow-hidden shadow-md border border-border-subtle hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col">
      {/* Photo */}
      <div className="relative overflow-hidden bg-surface-container-low" style={{ height: "240px" }}>
        <img
          src={doctor.img}
          alt={"Photo of " + doctor.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          style={{ objectPosition: doctor.objectPosition }}
          loading="lazy"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-white/70 to-transparent" />
        {/* Rating badge */}
        <div className="absolute top-3 right-3 bg-white/95 backdrop-blur text-clinical-blue text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-md">
          <Star size={11} className="fill-amber-400 text-amber-400" />
          {doctor.rating}
        </div>
        {/* Department chip */}
        <div className="absolute top-3 left-3 bg-clinical-blue/90 backdrop-blur text-white text-xs font-semibold px-3 py-1.5 rounded-full shadow-md">
          {doctor.department}
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <h3 className="font-headline-md text-lg text-clinical-blue font-bold mb-0.5 leading-tight">
          {doctor.name}
        </h3>
        <p className="text-hospital-teal font-semibold text-sm mb-3 leading-snug">
          {doctor.specialty}
        </p>

        <div className="flex flex-wrap gap-x-4 gap-y-1.5 text-on-surface-variant text-xs mb-4">
          <span className="flex items-center gap-1.5">
            <Award size={13} className="text-healing-emerald" />
            {doctor.exp} Exp.
          </span>
          <span className="flex items-center gap-1.5">
            <Calendar size={13} className="text-healing-emerald" />
            {doctor.availability}
          </span>
        </div>

        <p className="text-xs text-on-surface-variant bg-surface-container-low rounded-lg px-3 py-2 mb-4 font-mono tracking-wide">
          {doctor.qualifications}
        </p>

        <div className="mt-auto">
          <a
            href="/contact"
            className="w-full bg-clinical-blue text-white py-2.5 rounded-xl font-semibold text-sm hover:bg-opacity-90 transition-colors flex justify-center items-center gap-2 shadow-sm hover:shadow-md"
          >
            <Calendar size={15} />
            Book Appointment
          </a>
        </div>
      </div>
    </article>
  );
}

export default function DoctorsPage() {
  const [activeDept, setActiveDept] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = doctors.filter((doc) => {
    const matchesDept = activeDept === "All" || doc.department === activeDept;
    const matchesSearch =
      doc.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doc.specialty.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesDept && matchesSearch;
  });

  return (
    <div className="bg-surface-gray min-h-screen">

      {/* ── Hero Banner ────────────────────────────────────────────── */}
      <section
        className="relative py-28 px-gutter overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #00162B 0%, #003057 55%, #00416e 100%)",
        }}
      >
        <div
          className="absolute -top-24 -right-24 w-96 h-96 rounded-full opacity-10"
          style={{ background: "radial-gradient(circle, #00A86B 0%, transparent 70%)" }}
        />
        <div
          className="absolute bottom-0 left-0 w-72 h-72 rounded-full opacity-10"
          style={{ background: "radial-gradient(circle, #008B8B 0%, transparent 70%)" }}
        />

        <div className="max-w-container-max mx-auto relative z-10 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 backdrop-blur rounded-full px-5 py-2 mb-6">
            <Stethoscope size={16} className="text-healing-emerald" />
            <span className="text-white/90 text-sm font-semibold tracking-wide">Expert Medical Team</span>
          </div>

          <h1 className="font-display-lg text-display-lg text-white mb-5 leading-tight">
            Meet Our{" "}
            <span className="text-healing-emerald">Specialist Doctors</span>
          </h1>
          <p className="font-body-lg text-body-lg text-white/70 max-w-2xl mx-auto mb-8">
            Board-certified experts across 13+ specialties, committed to delivering compassionate, world-class healthcare at every step of your journey.
          </p>

          <div className="flex flex-wrap justify-center gap-8 mt-8">
            {[
              { value: "13+", label: "Specialties" },
              { value: "14+", label: "Expert Doctors" },
              { value: "50K+", label: "Patients Served" },
              { value: "4.9★", label: "Avg. Rating" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-healing-emerald font-display-lg text-3xl font-bold">{stat.value}</div>
                <div className="text-white/60 text-sm mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Search + Filter Bar ────────────────────────────────────── */}
      <section className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-border-subtle shadow-sm">
        <div className="max-w-container-max mx-auto px-gutter py-4">
          <div className="relative mb-4 max-w-lg mx-auto">
            <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant" />
            <input
              type="text"
              placeholder="Search by name or specialty…"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-10 py-3 rounded-xl border border-border-subtle bg-surface-gray text-on-surface placeholder:text-on-surface-variant focus:outline-none focus:ring-2 focus:ring-hospital-teal/40 transition-all text-sm"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-on-surface-variant hover:text-on-surface"
              >
                <X size={16} />
              </button>
            )}
          </div>

          <div className="flex gap-2 overflow-x-auto pb-1" style={{ scrollbarWidth: "none" }}>
            {departments.map((dept) => (
              <button
                key={dept}
                onClick={() => setActiveDept(dept)}
                className={
                  "whitespace-nowrap px-4 py-1.5 rounded-full text-sm font-semibold border transition-all duration-200 flex-shrink-0 " +
                  (activeDept === dept
                    ? "bg-clinical-blue text-white border-clinical-blue shadow-md"
                    : "bg-white text-on-surface-variant border-border-subtle hover:border-clinical-blue hover:text-clinical-blue")
                }
              >
                {dept}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── Doctor Grid ───────────────────────────────────────────── */}
      <section className="py-16 px-gutter max-w-container-max mx-auto">
        {filtered.length === 0 ? (
          <div className="text-center py-24">
            <div className="text-6xl mb-4">🔍</div>
            <p className="text-on-surface-variant text-lg">No doctors found matching your search.</p>
            <button
              onClick={() => { setSearchQuery(""); setActiveDept("All"); }}
              className="mt-4 text-hospital-teal font-semibold hover:underline"
            >
              Clear filters
            </button>
          </div>
        ) : (
          <>
            <p className="text-on-surface-variant text-sm mb-8">
              Showing{" "}
              <span className="font-bold text-on-surface">{filtered.length}</span>{" "}
              doctor{filtered.length !== 1 ? "s" : ""}
              {activeDept !== "All" && (
                <span> in <span className="font-semibold text-clinical-blue">{activeDept}</span></span>
              )}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filtered.map((doctor, idx) => (
                <DoctorCard key={idx} doctor={doctor} />
              ))}
            </div>
          </>
        )}
      </section>

      {/* ── CTA Banner ────────────────────────────────────────────── */}
      <section className="py-16 px-gutter bg-gradient-to-r from-clinical-blue to-[#00416e]">
        <div className="max-w-container-max mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div>
            <h2 className="text-white text-2xl md:text-3xl font-bold mb-2">
              Can&apos;t find the right specialist?
            </h2>
            <p className="text-white/70 text-sm md:text-base">
              Our care coordinators will match you with the best doctor for your needs.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
            <a
              href="tel:04029329999"
              className="inline-flex items-center gap-2 bg-white text-clinical-blue font-bold px-6 py-3 rounded-xl hover:bg-surface-gray transition-colors shadow-lg"
            >
              <Phone size={18} />
              040-2932 9999
            </a>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 bg-healing-emerald text-white font-bold px-6 py-3 rounded-xl hover:opacity-90 transition-opacity shadow-lg"
            >
              <Calendar size={18} />
              Book Appointment
              <ChevronRight size={18} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
