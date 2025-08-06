'use client';

import Image from 'next/image';
import { Button } from '../ui/Button';

/**
 * Hero section component with compelling headline and CTA
 * Features engaging copy and visual elements to drive conversions
 */
export function HeroSection() {
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
    <section className="pt-24 pb-20 bg-gradient-to-br from-[#F1EFEE] to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Hero Content */}
          <div className="space-y-8">


            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1a1a1a] leading-tight">
                Transform Your Events with{' '}
                <span className="text-[#0160a0]">AI-Powered</span>{' '}
                Intelligence
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
                Stop drowning in scattered documents and endless questions. Primr Events revolutionizes how professional event planners manage information with cutting-edge AI event management technology.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                onClick={scrollToWaitlist}
                className="text-lg px-8 py-4 bg-[#0160a0] hover:bg-[#014d80]"
              >
                Join the Waitlist - Free Early Access
              </Button>
              {/* <div className="flex flex-col gap-2 sm:ml-4 justify-center">
                <a
                  href="https://events.primr.co"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#0160a0] underline hover:text-[#ce1620] text-base font-medium transition-colors"
                >
                  🌐 Live Platform: events.primr.co
                </a>
                <a
                  href="https://demo.primr.co"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#0160a0] underline hover:text-[#ce1620] text-base font-medium transition-colors"
                >
                  📖 Demo Project: demo.primr.co
                </a>
              </div> */}
            </div>            {/* Trust indicators */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Free to join</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Early access benefits</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>No commitment required</span>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative z-10">
              <Image
                src="https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="Professional event management with AI technology"
                width={1000}
                height={500}
                className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
              />
            </div>
            {/* Background decoration */}
            <div className="absolute top-8 left-8 w-full h-full bg-[#ce1620] rounded-2xl opacity-10 -z-10"></div>
            <div className="absolute top-4 left-4 w-full h-full bg-[#0160a0] rounded-2xl opacity-5 -z-20"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
