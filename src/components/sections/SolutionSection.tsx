'use client';

import Image from 'next/image';
import { Button } from '../ui/Button';

/**
 * Solution section showcasing Primr Events as the answer to pain points
 * Highlights AI capabilities and unique value proposition
 */
export function SolutionSection() {
  /**
   * Scrolls to the waitlist section
   */
  const scrollToWaitlist = () => {
    const element = document.getElementById('waitlist');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="solution" className="py-20 bg-gradient-to-br from-[#0160a0] to-[#014d80] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Solution Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                Meet Your New AI Event Assistant
              </h2>
              <p className="text-xl text-blue-100 leading-relaxed">
                Primr Events transforms chaos into clarity with revolutionary AI event management technology. Upload any document, ask any question, get instant answers.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-[#f4c000] rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-[#0160a0]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Smart Document Intelligence</h3>
                  <p className="text-blue-100">Upload contracts, invoices, floor plans, menus – anything. Our AI instantly understands and organizes your content.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-[#f4c000] rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-[#0160a0]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Instant Q&A System</h3>
                  <p className="text-blue-100">Ask questions in plain English. Get precise answers from your documents in seconds, not hours.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-[#f4c000] rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-[#0160a0]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Automated Event Scheduling</h3>
                  <p className="text-blue-100">AI analyzes constraints, preferences, and availability to suggest optimal event timelines and schedules.</p>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <Button
                onClick={scrollToWaitlist}
                className="bg-[#f4c000] text-[#1a1a1a] hover:bg-[#e6ad00] font-bold text-lg px-8 py-4 border-2 border-[#f4c000] hover:border-[#e6ad00]"
              >
                Experience the Future of Event Planning
              </Button>
            </div>
          </div>

          {/* Solution Visual */}
          <div className="relative">
            <div className="relative z-10">
              <Image
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="AI-powered event management dashboard"
                width={1000}
                height={500}
                className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
              />
            </div>
            {/* Floating elements */}
            <div className="absolute top-4 right-4 bg-[#f4c000] text-[#0160a0] px-4 py-2 rounded-lg font-semibold shadow-lg">
              AI-Powered
            </div>
            <div className="absolute bottom-4 left-4 bg-white text-[#0160a0] px-4 py-2 rounded-lg font-semibold shadow-lg">
              Instant Answers
            </div>
          </div>
        </div>

        {/* Feature highlights */}
        <div className="mt-20 grid md:grid-cols-4 gap-8 text-center">
          <div className="space-y-4">
            <div className="w-16 h-16 bg-[#f4c000] rounded-full flex items-center justify-center mx-auto">
              <span className="text-2xl">🤖</span>
            </div>
            <h4 className="text-lg font-semibold">AI Event Management</h4>
            <p className="text-blue-100 text-sm">Intelligent automation for modern event professionals</p>
          </div>
          <div className="space-y-4">
            <div className="w-16 h-16 bg-[#f4c000] rounded-full flex items-center justify-center mx-auto">
              <span className="text-2xl">⚡</span>
            </div>
            <h4 className="text-lg font-semibold">Smart Event Organizer</h4>
            <p className="text-blue-100 text-sm">Organize complex events with AI-powered insights</p>
          </div>
          <div className="space-y-4">
            <div className="w-16 h-16 bg-[#f4c000] rounded-full flex items-center justify-center mx-auto">
              <span className="text-2xl">📅</span>
            </div>
            <h4 className="text-lg font-semibold">Automated Event Scheduling</h4>
            <p className="text-blue-100 text-sm">Let AI optimize your event timelines and logistics</p>
          </div>
          <div className="space-y-4">
            <div className="w-16 h-16 bg-[#f4c000] rounded-full flex items-center justify-center mx-auto">
              <span className="text-2xl">🎯</span>
            </div>
            <h4 className="text-lg font-semibold">Intelligent Event Software</h4>
            <p className="text-blue-100 text-sm">The smartest event automation tool for professionals</p>
          </div>
        </div>
      </div>
    </section>
  );
}
