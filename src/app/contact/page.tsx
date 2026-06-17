import { MapPin, Mail, Clock } from "lucide-react";
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";

export default function ContactPage() {
  return (
    <div className="bg-surface-gray min-h-screen">
      <section className="bg-clinical-blue text-white py-24 px-gutter relative overflow-hidden">
        <div className="max-w-container-max mx-auto relative z-10 text-center">
          <h1 className="font-display-lg text-display-lg mb-6">Get in <span className="text-healing-emerald">Touch</span></h1>
          <p className="font-body-lg text-body-lg text-surface-container-low max-w-2xl mx-auto opacity-90">
            We are here to assist you 24/7. Reach out to us for appointments, emergency care, or general inquiries.
          </p>
        </div>
      </section>

      <section className="py-20 px-gutter max-w-container-max mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div>
            <h2 className="font-display-lg text-4xl text-clinical-blue mb-8">Contact Information</h2>
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-hospital-teal/10 flex items-center justify-center text-hospital-teal flex-shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-headline-md text-xl text-clinical-blue mb-1">Our Location</h4>
                  <p className="font-body-md text-on-surface-variant">Nagole X Road, Hyderabad,<br />Telangana, India - 500068</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-hospital-teal/10 flex items-center justify-center text-hospital-teal flex-shrink-0">
                  <FaPhoneAlt size={24} />
                </div>
                <div>
                  <h4 className="font-headline-md text-xl text-clinical-blue mb-1">24/7 Emergency Line</h4>
                  <p className="font-body-md text-on-surface-variant text-2xl font-bold text-hospital-teal">040-29329999</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-hospital-teal/10 flex items-center justify-center text-hospital-teal flex-shrink-0">
                  <FaWhatsapp size={24} />
                </div>
                <div>
                  <h4 className="font-headline-md text-xl text-clinical-blue mb-1">WhatsApp Consult</h4>
                  <p className="font-body-md text-on-surface-variant">+91 9281038298</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-hospital-teal/10 flex items-center justify-center text-hospital-teal flex-shrink-0">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="font-headline-md text-xl text-clinical-blue mb-1">Working Hours</h4>
                  <p className="font-body-md text-on-surface-variant">Emergency: 24/7<br />OPD: Mon - Sat, 9:00 AM - 8:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-2xl shadow-xl border border-border-subtle">
            <h3 className="font-headline-md text-2xl text-clinical-blue mb-6">Send us a Message</h3>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block font-label-sm text-on-surface-variant mb-2">First Name</label>
                  <input type="text" className="w-full border border-border-subtle rounded-lg p-3 focus:outline-none focus:border-hospital-teal focus:ring-1 focus:ring-hospital-teal transition-all" placeholder="John" />
                </div>
                <div>
                  <label className="block font-label-sm text-on-surface-variant mb-2">Last Name</label>
                  <input type="text" className="w-full border border-border-subtle rounded-lg p-3 focus:outline-none focus:border-hospital-teal focus:ring-1 focus:ring-hospital-teal transition-all" placeholder="Doe" />
                </div>
              </div>
              <div>
                <label className="block font-label-sm text-on-surface-variant mb-2">Phone Number</label>
                <input type="tel" className="w-full border border-border-subtle rounded-lg p-3 focus:outline-none focus:border-hospital-teal focus:ring-1 focus:ring-hospital-teal transition-all" placeholder="+91 XXXXXXXXXX" />
              </div>
              <div>
                <label className="block font-label-sm text-on-surface-variant mb-2">Select Department</label>
                <select className="w-full border border-border-subtle rounded-lg p-3 focus:outline-none focus:border-hospital-teal focus:ring-1 focus:ring-hospital-teal transition-all bg-white">
                  <option>General Inquiry</option>
                  <option>Cardiology</option>
                  <option>Neurology</option>
                  <option>Orthopedics</option>
                </select>
              </div>
              <div>
                <label className="block font-label-sm text-on-surface-variant mb-2">Message</label>
                <textarea rows={4} className="w-full border border-border-subtle rounded-lg p-3 focus:outline-none focus:border-hospital-teal focus:ring-1 focus:ring-hospital-teal transition-all" placeholder="How can we help you?"></textarea>
              </div>
              <button className="w-full bg-clinical-blue text-white py-4 rounded-lg font-bold hover:bg-opacity-90 transition-all flex justify-center items-center gap-2">
                <Mail size={18} /> Submit Request
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
