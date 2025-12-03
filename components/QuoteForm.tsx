import React, { useState } from 'react';
import { QuoteFormData, ServiceCategory } from '../types';
import { Upload, X, Check, ArrowRight, ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';

const INITIAL_DATA: QuoteFormData = {
  name: '',
  email: '',
  phone: '',
  eventType: 'Corporate',
  date: '',
  guestCount: 0,
  services: [],
  message: '',
  files: []
};

export const QuoteForm: React.FC = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<QuoteFormData>(INITIAL_DATA);
  const [errors, setErrors] = useState<Partial<Record<keyof QuoteFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    if (errors[e.target.name as keyof QuoteFormData]) {
      setErrors(prev => ({ ...prev, [e.target.name]: '' }));
    }
  };

  const handleServiceToggle = (service: ServiceCategory) => {
    setFormData(prev => {
      const exists = prev.services.includes(service);
      return {
        ...prev,
        services: exists 
          ? prev.services.filter(s => s !== service)
          : [...prev.services, service]
      };
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    if (formData.files.length + files.length > 5) {
      setErrors(prev => ({ ...prev, files: 'Maximum 5 files allowed.' }));
      return;
    }
    setFormData(prev => ({ ...prev, files: [...prev.files, ...files] }));
    setErrors(prev => ({ ...prev, files: '' }));
  };

  const removeFile = (index: number) => {
    setFormData(prev => ({
      ...prev,
      files: prev.files.filter((_, i) => i !== index)
    }));
  };

  const validateStep = (currentStep: number): boolean => {
    const newErrors: any = {};
    let isValid = true;

    if (currentStep === 1) {
      if (!formData.name) newErrors.name = 'Name is required';
      if (!formData.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Valid email is required';
      if (!formData.phone) newErrors.phone = 'Phone is required';
    }

    if (currentStep === 2) {
      if (!formData.date) newErrors.date = 'Date is required';
      if (!formData.guestCount || formData.guestCount < 1) newErrors.guestCount = 'Guest count required';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      isValid = false;
    }
    return isValid;
  };

  const nextStep = () => {
    if (validateStep(step)) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setStep(prev => prev + 1);
    }
  };

  const prevStep = () => setStep(prev => prev - 1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateStep(step)) return;

    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 2000);
  };

  if (submitted) {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white p-8 md:p-12 rounded-3xl shadow-premium text-center"
      >
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <Check className="w-10 h-10 text-green-600" />
        </div>
        <h3 className="text-2xl font-bold text-maxode-primary mb-4">Request Sent!</h3>
        <p className="text-gray-600 mb-8">We'll review your brief and get back to you shortly.</p>
        <button 
          onClick={() => { setSubmitted(false); setStep(1); setFormData(INITIAL_DATA); }}
          className="text-maxode-accent font-semibold hover:underline w-full py-4 bg-gray-50 rounded-xl"
        >
          Start new inquiry
        </button>
      </motion.div>
    );
  }

  return (
    <div className="bg-white rounded-3xl shadow-premium overflow-hidden border border-gray-100">
      {/* Progress Bar */}
      <div className="h-2 bg-gray-100">
        <div 
          className="h-full bg-maxode-accent transition-all duration-500 ease-out" 
          style={{ width: `${(step / 3) * 100}%` }}
        />
      </div>

      <form onSubmit={handleSubmit} className="p-6 md:p-10">
        <div className="mb-8">
           <h3 className="text-2xl font-serif font-bold text-maxode-primary mb-1">
            {step === 1 && "Your Details"}
            {step === 2 && "The Event"}
            {step === 3 && "Services Needed"}
          </h3>
          <p className="text-gray-500 text-sm">Step {step} of 3</p>
        </div>

        {/* Form Fields - Optimised for Touch (min-height 48px) */}
        <div className="min-h-[300px]">
          {step === 1 && (
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-5">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Full Name</label>
                <input 
                  name="name" 
                  value={formData.name} 
                  onChange={handleInputChange} 
                  className={`w-full px-4 py-4 bg-gray-50 rounded-xl border ${errors.name ? 'border-red-500' : 'border-gray-200'} focus:ring-2 focus:ring-maxode-primary focus:bg-white outline-none transition-all text-base`}
                  placeholder="e.g. Sarah Jones"
                />
                {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Email Address</label>
                <input 
                  name="email" 
                  type="email"
                  value={formData.email} 
                  onChange={handleInputChange} 
                  className={`w-full px-4 py-4 bg-gray-50 rounded-xl border ${errors.email ? 'border-red-500' : 'border-gray-200'} focus:ring-2 focus:ring-maxode-primary focus:bg-white outline-none transition-all text-base`}
                  placeholder="e.g. sarah@company.com"
                />
                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Phone Number</label>
                <input 
                  name="phone" 
                  type="tel"
                  value={formData.phone} 
                  onChange={handleInputChange} 
                  className={`w-full px-4 py-4 bg-gray-50 rounded-xl border ${errors.phone ? 'border-red-500' : 'border-gray-200'} focus:ring-2 focus:ring-maxode-primary focus:bg-white outline-none transition-all text-base`}
                  placeholder="e.g. 082 123 4567"
                />
                {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
              </div>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-5">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Event Date</label>
                <input 
                  name="date" 
                  type="date"
                  value={formData.date} 
                  onChange={handleInputChange} 
                  className={`w-full px-4 py-4 bg-gray-50 rounded-xl border ${errors.date ? 'border-red-500' : 'border-gray-200'} focus:ring-2 focus:ring-maxode-primary focus:bg-white outline-none transition-all text-base`}
                />
                {errors.date && <p className="text-red-500 text-xs mt-1">{errors.date}</p>}
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Estimated Guests</label>
                <input 
                  name="guestCount" 
                  type="number"
                  inputMode="numeric"
                  value={formData.guestCount || ''} 
                  onChange={handleInputChange} 
                  className={`w-full px-4 py-4 bg-gray-50 rounded-xl border ${errors.guestCount ? 'border-red-500' : 'border-gray-200'} focus:ring-2 focus:ring-maxode-primary focus:bg-white outline-none transition-all text-base`}
                  placeholder="e.g. 150"
                />
                {errors.guestCount && <p className="text-red-500 text-xs mt-1">{errors.guestCount}</p>}
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Event Type</label>
                <select 
                  name="eventType"
                  value={formData.eventType}
                  onChange={handleInputChange}
                  className="w-full px-4 py-4 bg-gray-50 rounded-xl border border-gray-200 focus:ring-2 focus:ring-maxode-primary outline-none bg-white text-base"
                >
                  <option value="Corporate">Corporate Function</option>
                  <option value="Private">Private Party / Wedding</option>
                  <option value="Festival">Festival / Public Event</option>
                  <option value="Activation">Brand Activation</option>
                </select>
              </div>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-5">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-3">Required Services</label>
                <div className="grid grid-cols-2 gap-3">
                  {Object.values(ServiceCategory).map((service) => (
                    <button
                      key={service}
                      type="button"
                      onClick={() => handleServiceToggle(service)}
                      className={`p-3 text-sm text-left rounded-xl border transition-all active:scale-95 ${
                        formData.services.includes(service)
                          ? 'border-maxode-primary bg-maxode-primary/10 text-maxode-primary font-bold'
                          : 'border-gray-200 text-gray-600 bg-gray-50'
                      }`}
                    >
                      {service}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Brief Description</label>
                <textarea 
                  name="message" 
                  rows={4}
                  value={formData.message} 
                  onChange={handleInputChange} 
                  className="w-full px-4 py-3 bg-gray-50 rounded-xl border border-gray-200 focus:ring-2 focus:ring-maxode-primary outline-none transition-all resize-none text-base"
                  placeholder="Tell us more..."
                />
              </div>

              <div>
                 <label className="block text-sm font-bold text-gray-700 mb-2">
                   Uploads (Max 5)
                 </label>
                 <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 text-center bg-gray-50 relative active:bg-gray-100">
                   <input 
                     type="file" 
                     multiple 
                     accept="image/*,application/pdf"
                     onChange={handleFileChange}
                     className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                   />
                   <Upload className="mx-auto h-6 w-6 text-gray-400 mb-2" />
                   <p className="text-sm text-gray-500 font-medium">Tap to upload files</p>
                 </div>
                 {errors.files && <p className="text-red-500 text-xs mt-1">{errors.files}</p>}
                 
                 {formData.files.length > 0 && (
                   <div className="mt-3 space-y-2">
                     {formData.files.map((file, idx) => (
                       <div key={idx} className="flex justify-between items-center bg-gray-100 p-3 rounded-lg text-sm">
                         <span className="truncate max-w-[80%]">{file.name}</span>
                         <button type="button" onClick={() => removeFile(idx)} className="p-1 bg-white rounded-full text-gray-500">
                           <X size={14} />
                         </button>
                       </div>
                     ))}
                   </div>
                 )}
              </div>
            </motion.div>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4 mt-8 pt-6 border-t border-gray-100">
          {step > 1 && (
            <button 
              type="button" 
              onClick={prevStep}
              className="px-6 py-4 rounded-xl border border-gray-200 text-gray-600 font-bold hover:bg-gray-50 transition-colors"
            >
              <ArrowLeft size={20} />
            </button>
          )}

          {step < 3 ? (
            <button 
              type="button" 
              onClick={nextStep}
              className="flex-1 flex items-center justify-center gap-2 bg-maxode-primary text-white py-4 rounded-xl font-bold hover:bg-maxode-primaryDark transition-all shadow-lg active:scale-95"
            >
              Next Step <ArrowRight size={20} />
            </button>
          ) : (
            <button 
              type="submit" 
              disabled={isSubmitting}
              className="flex-1 flex items-center justify-center gap-2 bg-maxode-accent text-white py-4 rounded-xl font-bold hover:bg-orange-600 transition-all shadow-lg shadow-orange-500/20 disabled:opacity-70 disabled:cursor-not-allowed active:scale-95"
            >
              {isSubmitting ? 'Sending...' : 'Submit Request'}
            </button>
          )}
        </div>
      </form>
    </div>
  );
};