import { Feature } from '../../types';

/**
 * Features section showcasing key platform capabilities
 * Highlights specific features that solve user pain points
 */
export function FeaturesSection() {
  const features: Feature[] = [
    {
      id: 'document-intelligence',
      title: 'AI Document Intelligence',
      description: 'Upload any document – contracts, invoices, floor plans, menus. Our AI instantly understands, categorizes, and makes everything searchable.',
      icon: '📄'
    },
    {
      id: 'smart-qa',
      title: 'Smart Q&A System',
      description: 'Ask questions in plain English about your events. Get instant, accurate answers from all your uploaded documents and event data.',
      icon: '❓'
    },
    {
      id: 'event-management',
      title: 'Complete Event Management',
      description: 'Create, organize, and manage multiple events with intelligent workflows that adapt to your planning style and requirements.',
      icon: '📅'
    },
    {
      id: 'real-time-chat',
      title: 'Interactive FAQ System',
      description: 'Real-time chat interface with chat history. Share knowledge instantly with team members and stakeholders.',
      icon: '💬'
    },
    {
      id: 'multi-tenant',
      title: 'Secure & Scalable',
      description: 'Enterprise-grade security with multi-tenant architecture. Your events and data are completely isolated and protected.',
      icon: '🔒'
    },
    {
      id: 'automation',
      title: 'Event Automation Tool',
      description: 'Automate repetitive tasks, deadline reminders, and workflow processes. Focus on creativity, not administrative work.',
      icon: '⚡'
    }
  ];

  return (
    <section id="features" className="py-20 bg-[#F1EFEE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a1a] mb-6">
            Powerful Features for Professional Event Planners
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to transform your event planning process with cutting-edge AI event management technology.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div key={feature.id} className="group">
              <div className="bg-white rounded-2xl p-8 h-full shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 hover:border-[#ce1620]">
                <div className="text-5xl mb-6">{feature.icon}</div>
                <h3 className="text-xl font-bold text-[#1a1a1a] mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Feature highlight section */}
        <div className="mt-20 bg-white rounded-2xl p-8 md:p-12 shadow-xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-[#1a1a1a] mb-6">
                See Primr Events in Action
              </h3>
              <p className="text-lg text-gray-600 mb-8">
                Experience the power of AI-powered event planning with our live production platform. See how professional event managers are already transforming their workflows.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-[#ce1620] rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Live production environment</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-[#ce1620] rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Real event data and workflows</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-[#ce1620] rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Enterprise-grade performance</span>
                </div>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-br from-[#ce1620] to-[#a5121a] rounded-2xl p-8 text-white">
                <h4 className="text-2xl font-bold mb-4">Ready to Experience It?</h4>
                <p className="text-lg mb-6 opacity-90">
                  Visit our live platform and see how AI event management works in real-time.
                </p>
                <a
                  href="https://events.primr.co"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-white text-[#ce1620] font-bold py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  Visit Live Platform →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
