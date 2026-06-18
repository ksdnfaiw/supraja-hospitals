import { ArrowRight, Calendar, Tag } from "lucide-react";

export default function BlogsPage() {
  const blogs = [
    { title: "Understanding Heart Health", category: "Cardiology", date: "June 12, 2026", excerpt: "Learn the early signs of cardiovascular issues and how to maintain a healthy heart." },
    { title: "Nutrition for Growing Kids", category: "Pediatrics", date: "June 08, 2026", excerpt: "A comprehensive guide on balanced diets for infants and toddlers." },
    { title: "Advances in Joint Replacement", category: "Orthopedics", date: "June 01, 2026", excerpt: "How new robotic surgery techniques are making recovery faster than ever." },
    { title: "Managing Stress Effectively", category: "Wellness", date: "May 25, 2026", excerpt: "Tips from our top neurologists on keeping your nervous system calm." }
  ];

  return (
    <div className="bg-surface-gray min-h-screen">
      {/* Hero Section */}
      <section className="bg-clinical-blue text-white py-24 px-4 md:px-gutter relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-hospital-teal/10 rounded-full blur-3xl mix-blend-overlay pointer-events-none"></div>
        <div className="max-w-container-max mx-auto relative z-10 text-center">
          <div className="inline-block px-5 py-2 rounded-full bg-white/10 border border-white/20 text-white font-label-sm tracking-widest uppercase mb-6 backdrop-blur-md">
            Insights & News
          </div>
          <h1 className="font-display-lg text-4xl md:text-5xl lg:text-display-lg mb-6 leading-[1.1]">Medical <span className="text-healing-emerald">Blogs</span></h1>
          <p className="font-body-lg text-lg md:text-body-lg text-surface-container-low max-w-2xl mx-auto opacity-90 leading-relaxed">
            Stay updated with the latest medical insights, health tips, and hospital news from our expert practitioners.
          </p>
        </div>
      </section>

      {/* Grid Section */}
      <section className="py-20 px-4 md:px-gutter max-w-container-max mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {blogs.map((blog, idx) => (
            <div key={idx} className="bg-white rounded-3xl overflow-hidden shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] border border-border-subtle group hover:shadow-[0_20px_40px_-15px_rgba(0,48,87,0.12)] transition-all duration-500 flex flex-col sm:flex-row hover:-translate-y-1">
              <div className="w-full sm:w-2/5 h-48 sm:h-auto bg-surface-container-low relative overflow-hidden flex-shrink-0">
                <div className="absolute inset-0 bg-clinical-blue/5 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                {/* Fallback pattern for missing image */}
                <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(circle_at_50%_50%,#003057_2px,transparent_2px)] bg-[size:20px_20px] group-hover:scale-110 transition-transform duration-700"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <Tag size={32} className="text-clinical-blue/20 group-hover:text-hospital-teal/30 transition-colors duration-500" />
                </div>
              </div>
              <div className="w-full sm:w-3/5 p-6 md:p-8 flex flex-col justify-center">
                <span className="inline-block font-label-sm text-xs text-healing-emerald font-bold uppercase tracking-widest mb-3">{blog.category}</span>
                <h3 className="font-display-sm text-2xl text-clinical-blue mb-3 group-hover:text-hospital-teal transition-colors line-clamp-2">{blog.title}</h3>
                <p className="font-body-md text-on-surface-variant mb-6 line-clamp-2 leading-relaxed">{blog.excerpt}</p>
                <div className="mt-auto flex items-center justify-between">
                  <div className="flex items-center gap-2 text-surface-container-low font-label-md text-sm border border-border-subtle px-3 py-1.5 rounded-full">
                    <Calendar size={14} className="text-hospital-teal" /> {blog.date}
                  </div>
                  <a href="#" aria-label={`Read more about ${blog.title}`} className="w-10 h-10 rounded-full bg-surface-gray border border-border-subtle flex items-center justify-center group-hover:bg-clinical-blue group-hover:text-white group-hover:border-clinical-blue transition-all duration-300 text-clinical-blue">
                    <ArrowRight size={16} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
