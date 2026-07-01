"use client";

import { useState } from "react";
import { X, Calendar, User, Phone, Mail, Clock, FileText, Check } from "lucide-react";

export default function BookVisitModal({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    date: "",
    time: "",
    notes: ""
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  if (!isOpen) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    try {
      const response = await fetch("/api/book-visit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Failed to submit form:", error);
      setStatus("error");
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-clinical-blue/60 backdrop-blur-sm">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden animate-in fade-in zoom-in-95 duration-300">
        <div className="bg-clinical-blue p-6 relative text-white">
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors"
          >
            <X size={24} />
          </button>
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-full bg-healing-emerald/20 flex items-center justify-center">
              <Calendar className="text-healing-emerald" size={20} />
            </div>
            <h2 className="text-2xl font-display-md">Book a Visit</h2>
          </div>
          <p className="text-surface-container-low/80 font-body-sm">
            Schedule your in-person consultation with our experts.
          </p>
        </div>

        <div className="p-6">
          {status === "success" ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 rounded-full bg-healing-emerald/20 text-healing-emerald flex items-center justify-center mx-auto mb-4">
                <Check size={32} />
              </div>
              <h3 className="text-xl font-headline-md text-clinical-blue mb-2">Visit Scheduled!</h3>
              <p className="text-on-surface-variant font-body-md mb-6">
                Thank you, {formData.name}. We have received your request and a confirmation email has been sent to you. Our team will contact you shortly to confirm the appointment.
              </p>
              <button 
                onClick={onClose}
                className="bg-clinical-blue text-white px-6 py-2 rounded-lg font-label-md hover:bg-opacity-90 transition-all"
              >
                Close
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-label-md text-clinical-blue mb-1">Full Name *</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <User size={18} className="text-outline" />
                  </div>
                  <input 
                    type="text" 
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-2 border border-border-subtle rounded-lg focus:outline-none focus:border-hospital-teal focus:ring-1 focus:ring-hospital-teal transition-all"
                    placeholder="John Doe"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-label-md text-clinical-blue mb-1">Contact Number *</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Phone size={18} className="text-outline" />
                    </div>
                    <input 
                      type="tel" 
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-2 border border-border-subtle rounded-lg focus:outline-none focus:border-hospital-teal focus:ring-1 focus:ring-hospital-teal transition-all"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-label-md text-clinical-blue mb-1">Email Address *</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Mail size={18} className="text-outline" />
                    </div>
                    <input 
                      type="email" 
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-2 border border-border-subtle rounded-lg focus:outline-none focus:border-hospital-teal focus:ring-1 focus:ring-hospital-teal transition-all"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-label-md text-clinical-blue mb-1">Preferred Date *</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Calendar size={18} className="text-outline" />
                    </div>
                    <input 
                      type="date" 
                      name="date"
                      required
                      value={formData.date}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-2 border border-border-subtle rounded-lg focus:outline-none focus:border-hospital-teal focus:ring-1 focus:ring-hospital-teal transition-all"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-label-md text-clinical-blue mb-1">Preferred Time *</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Clock size={18} className="text-outline" />
                    </div>
                    <select 
                      name="time"
                      required
                      value={formData.time}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-2 border border-border-subtle rounded-lg focus:outline-none focus:border-hospital-teal focus:ring-1 focus:ring-hospital-teal transition-all appearance-none bg-white"
                    >
                      <option value="">Select Time</option>
                      <option value="morning">Morning (9AM - 12PM)</option>
                      <option value="afternoon">Afternoon (12PM - 4PM)</option>
                      <option value="evening">Evening (4PM - 8PM)</option>
                    </select>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-label-md text-clinical-blue mb-1">Reason for Visit (Optional)</label>
                <div className="relative">
                  <div className="absolute top-3 left-3 flex items-start pointer-events-none">
                    <FileText size={18} className="text-outline" />
                  </div>
                  <textarea 
                    name="notes"
                    value={formData.notes}
                    onChange={handleChange}
                    rows={3}
                    className="w-full pl-10 pr-4 py-2 border border-border-subtle rounded-lg focus:outline-none focus:border-hospital-teal focus:ring-1 focus:ring-hospital-teal transition-all resize-none"
                    placeholder="Briefly describe your symptoms or requirement..."
                  ></textarea>
                </div>
              </div>

              {status === "error" && (
                <div className="text-red-500 text-sm font-body-sm text-center">
                  Failed to send request. Please try again later.
                </div>
              )}

              <button 
                type="submit" 
                disabled={status === "submitting"}
                className="w-full bg-hospital-teal text-white py-3 rounded-lg font-label-md shadow-md hover:bg-opacity-90 transition-all flex items-center justify-center gap-2 disabled:opacity-70"
              >
                {status === "submitting" ? "Submitting..." : "Confirm Booking"}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
