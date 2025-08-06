'use client';

import { useState } from 'react';
import { Button } from '../ui/Button';
import { Input } from '../ui/Input';
import { WaitlistFormData } from '../../types';

/**
 * Waitlist form component for capturing early access signups
 * Features form validation and success state management
 */
export function WaitlistSection() {
  const [formData, setFormData] = useState<WaitlistFormData>({
    name: '',
    email: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<WaitlistFormData>>({});

  /**
   * Validates the form data
   * @param data - Form data to validate
   * @returns Object containing validation errors
   */
  const validateForm = (data: WaitlistFormData): Partial<WaitlistFormData> => {
    const newErrors: Partial<WaitlistFormData> = {};

    if (!data.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (data.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }

    if (!data.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    return newErrors;
  };

  /**
   * Handles form submission
   * @param e - Form submission event
   */
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formErrors = validateForm(formData);
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    setIsSubmitting(true);
    setErrors({});

    try {
      // Simulate API call - replace with actual backend integration
      await new Promise(resolve => setTimeout(resolve, 1000));

      console.log('Waitlist signup:', formData);
      setIsSubmitted(true);
    } catch (error) {
      console.error('Submission error:', error);
      // Handle error state
    } finally {
      setIsSubmitting(false);
    }
  };

  /**
   * Handles input field changes
   * @param field - Field name to update
   * @param value - New field value
   */
  const handleInputChange = (field: keyof WaitlistFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  if (isSubmitted) {
    return (
      <section id="waitlist" className="py-20 bg-gradient-to-br from-[#ce1620] to-[#a5121a]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white rounded-2xl p-12 shadow-2xl">
            <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-[#1a1a1a] mb-4">
              Welcome to the Future! 🎉
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Thank you for joining the Primr Events waitlist. You&apos;ll be among the first to experience AI-powered event management when we launch.
            </p>
            <p className="text-gray-500">
              We&apos;ll send you exclusive updates and early access when available.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="waitlist" className="py-20 bg-gradient-to-br from-[#ce1620] to-[#a5121a]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Events?
          </h2>
          <p className="text-xl text-red-100 max-w-2xl mx-auto">
            Join the waitlist for exclusive early access to the most advanced AI event management platform. Limited spots available.
          </p>
        </div>

        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-2xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Form benefits */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-[#1a1a1a] mb-6">
                What You&apos;ll Get:
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-[#f4c000] rounded-full flex items-center justify-center mt-1">
                    <svg className="w-4 h-4 text-[#1a1a1a]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#1a1a1a]">Free Early Access</h4>
                    <p className="text-gray-600 text-sm">Be first to experience AI-powered event management</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-[#f4c000] rounded-full flex items-center justify-center mt-1">
                    <svg className="w-4 h-4 text-[#1a1a1a]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#1a1a1a]">Exclusive Updates</h4>
                    <p className="text-gray-600 text-sm">Behind-the-scenes insights and feature previews</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-[#f4c000] rounded-full flex items-center justify-center mt-1">
                    <svg className="w-4 h-4 text-[#1a1a1a]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#1a1a1a]">Special Pricing</h4>
                    <p className="text-gray-600 text-sm">Founding member discounts and premium features</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-[#f4c000] rounded-full flex items-center justify-center mt-1">
                    <svg className="w-4 h-4 text-[#1a1a1a]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#1a1a1a]">Direct Influence</h4>
                    <p className="text-gray-600 text-sm">Help shape features based on your needs</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Waitlist form */}
            <div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <Input
                  label="Full Name"
                  type="text"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  error={errors.name}
                  required
                />
                <Input
                  label="Professional Email"
                  type="email"
                  placeholder="your.email@company.com"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  error={errors.email}
                  helperText="We respect your privacy and will never spam you"
                  required
                />
                <Button
                  type="submit"
                  size="lg"
                  isLoading={isSubmitting}
                  className="w-full text-lg py-4"
                >
                  {isSubmitting ? 'Securing Your Spot...' : 'Join the Waitlist - Free'}
                </Button>
              </form>
              <p className="text-xs text-gray-500 mt-4 text-center">
                By joining, you agree to receive updates about Primr Events. Unsubscribe anytime.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
