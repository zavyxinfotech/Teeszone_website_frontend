import React, { useState } from 'react';
import { Button } from '@/components/common/Button';
import { CheckCircle2, AlertCircle } from 'lucide-react';

interface ContactFormProps {
  initialProduct?: string;
  initialSector?: string;
}

export const ContactForm: React.FC<ContactFormProps> = ({
  initialProduct = '',
  initialSector = '',
}) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    requirementType: initialProduct || initialSector || 'Round Neck T-Shirts',
    quantity: '100 - 500 Pieces',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Full name is required';
    if (!formData.phone.trim()) {
      errs.phone = 'Phone number is required';
    } else if (!/^[0-9+\-\s()]{7,15}$/.test(formData.phone.trim())) {
      errs.phone = 'Please enter a valid phone number';
    }
    if (!formData.email.trim()) {
      errs.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = 'Please enter a valid email address';
    }
    if (!formData.message.trim()) {
      errs.message = 'Please provide brief details about your requirement';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate API submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 900);
  };

  if (isSubmitted) {
    return (
      <div className="bg-white rounded-3xl p-8 sm:p-10 border border-burgundy-100 shadow-soft text-center animate-fadeIn">
        <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h3 className="text-2xl font-heading font-black text-charcoal-900 mb-2">
          Thank You, {formData.name.split(' ')[0]}!
        </h3>
        <p className="text-sm text-charcoal-600 max-w-md mx-auto mb-4 leading-relaxed">
          Your requirement for <strong>{formData.requirementType}</strong> ({formData.quantity}) has
          been dispatched to our Tiruppur estimating desk.
        </p>
        <div className="p-4 rounded-2xl bg-warm-50 border border-burgundy-100 text-xs text-charcoal-700 max-w-md mx-auto mb-6 text-left space-y-1">
          <p>
            <strong>Representative:</strong> Ramya R (Business Development)
          </p>
          <p>
            <strong>Turnaround:</strong> Within 24 business hours
          </p>
          <p>
            <strong>Confirmation sent to:</strong> {formData.email}
          </p>
        </div>
        <Button
          variant="secondary"
          size="sm"
          onClick={() => {
            setIsSubmitted(false);
            setFormData({
              name: '',
              phone: '',
              email: '',
              requirementType: 'Round Neck T-Shirts',
              quantity: '100 - 500 Pieces',
              message: '',
            });
          }}
        >
          Send Another Enquiry
        </Button>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-8 md:p-10 border border-burgundy-100 shadow-soft">
      <div className="mb-6">
        <h3 className="text-2xl sm:text-3xl font-heading font-black text-charcoal-900">
          Send Us a <span className="text-burgundy-700">Message</span>
        </h3>
        <p className="text-xs sm:text-sm text-charcoal-600 mt-1">
          Share your requirements and our team will get back to you with the best solution and quotation.
        </p>
      </div>

      <form onSubmit={handleSubmit} noValidate className="space-y-4">
        {/* Name and Phone */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="contact-name"
              className="block text-xs font-heading font-bold text-charcoal-800 uppercase tracking-wider mb-1.5"
            >
              Your Name <span className="text-burgundy-700">*</span>
            </label>
            <input
              id="contact-name"
              type="text"
              placeholder="e.g. Ramesh Kumar"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className={`w-full px-4 py-2.5 rounded-xl border text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-burgundy-700/20 ${
                errors.name
                  ? 'border-red-400 bg-red-50/30'
                  : 'border-burgundy-100/90 bg-warm-50/40 focus:border-burgundy-700 focus:bg-white'
              }`}
            />
            {errors.name && (
              <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                <AlertCircle className="w-3 h-3" />
                <span>{errors.name}</span>
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="contact-phone"
              className="block text-xs font-heading font-bold text-charcoal-800 uppercase tracking-wider mb-1.5"
            >
              Phone Number <span className="text-burgundy-700">*</span>
            </label>
            <input
              id="contact-phone"
              type="tel"
              placeholder="e.g. +91 98765 43210"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className={`w-full px-4 py-2.5 rounded-xl border text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-burgundy-700/20 ${
                errors.phone
                  ? 'border-red-400 bg-red-50/30'
                  : 'border-burgundy-100/90 bg-warm-50/40 focus:border-burgundy-700 focus:bg-white'
              }`}
            />
            {errors.phone && (
              <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                <AlertCircle className="w-3 h-3" />
                <span>{errors.phone}</span>
              </p>
            )}
          </div>
        </div>

        {/* Email Address */}
        <div>
          <label
            htmlFor="contact-email"
            className="block text-xs font-heading font-bold text-charcoal-800 uppercase tracking-wider mb-1.5"
          >
            Email Address <span className="text-burgundy-700">*</span>
          </label>
          <input
            id="contact-email"
            type="email"
            placeholder="e.g. ramesh@company.com"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className={`w-full px-4 py-2.5 rounded-xl border text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-burgundy-700/20 ${
              errors.email
                ? 'border-red-400 bg-red-50/30'
                : 'border-burgundy-100/90 bg-warm-50/40 focus:border-burgundy-700 focus:bg-white'
            }`}
          />
          {errors.email && (
            <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" />
              <span>{errors.email}</span>
            </p>
          )}
        </div>

        {/* Requirement Type & Quantity */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="contact-requirement"
              className="block text-xs font-heading font-bold text-charcoal-800 uppercase tracking-wider mb-1.5"
            >
              Requirement Type <span className="text-burgundy-700">*</span>
            </label>
            <select
              id="contact-requirement"
              value={formData.requirementType}
              onChange={(e) => setFormData({ ...formData, requirementType: e.target.value })}
              className="w-full px-4 py-2.5 rounded-xl border border-burgundy-100/90 bg-warm-50/40 focus:border-burgundy-700 focus:bg-white text-sm focus:outline-none focus:ring-2 focus:ring-burgundy-700/20"
            >
              <option value="Round Neck T-Shirts">Round Neck T-Shirts</option>
              <option value="Polo T-Shirts">Polo T-Shirts</option>
              <option value="Oversized T-Shirts">Oversized T-Shirts</option>
              <option value="Sportswear">Sportswear / DryFit</option>
              <option value="Corporate Uniforms">Corporate Uniforms</option>
              <option value="Custom Printed T-Shirts">Custom Printed T-Shirts</option>
              <option value="School & College Orders">School & College Orders</option>
              <option value="Bulk Event Merchandise">Bulk Event Merchandise</option>
              <option value="Bespoke Fabric / Other">Bespoke Fabric / Other</option>
            </select>
          </div>

          <div>
            <label
              htmlFor="contact-quantity"
              className="block text-xs font-heading font-bold text-charcoal-800 uppercase tracking-wider mb-1.5"
            >
              Estimated Quantity
            </label>
            <select
              id="contact-quantity"
              value={formData.quantity}
              onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
              className="w-full px-4 py-2.5 rounded-xl border border-burgundy-100/90 bg-warm-50/40 focus:border-burgundy-700 focus:bg-white text-sm focus:outline-none focus:ring-2 focus:ring-burgundy-700/20"
            >
              <option value="50 - 100 Pieces">50 - 100 Pieces (Min MOQ)</option>
              <option value="100 - 500 Pieces">100 - 500 Pieces</option>
              <option value="500 - 2,000 Pieces">500 - 2,000 Pieces</option>
              <option value="2,000 - 10,000 Pieces">2,000 - 10,000 Pieces</option>
              <option value="10,000+ Pieces">10,000+ Pieces (Enterprise)</option>
            </select>
          </div>
        </div>

        {/* Message */}
        <div>
          <label
            htmlFor="contact-message"
            className="block text-xs font-heading font-bold text-charcoal-800 uppercase tracking-wider mb-1.5"
          >
            Your Message <span className="text-burgundy-700">*</span>
          </label>
          <textarea
            id="contact-message"
            rows={4}
            placeholder="Tell us about your requirement (quantity, preferred fabric, GSM, colors, logo embroidery/print placement, deadline)..."
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className={`w-full px-4 py-2.5 rounded-xl border text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-burgundy-700/20 ${
              errors.message
                ? 'border-red-400 bg-red-50/30'
                : 'border-burgundy-100/90 bg-warm-50/40 focus:border-burgundy-700 focus:bg-white'
            }`}
          />
          {errors.message && (
            <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" />
              <span>{errors.message}</span>
            </p>
          )}
        </div>

        {/* Submit Button */}
        <div className="pt-2">
          <Button
            type="submit"
            variant="primary"
            size="lg"
            className="w-full justify-center shadow-soft hover:shadow-soft-lg"
            isLoading={isSubmitting}
            withArrow
          >
            Send Message
          </Button>
        </div>
      </form>
    </div>
  );
};
