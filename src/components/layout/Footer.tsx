import { FooterLink } from '../../types';

/**
 * Footer component with legal links and contact information
 * Includes proper privacy policy and terms of service links
 */
export function Footer() {
  const footerLinks: FooterLink[] = [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' }
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1a1a1a] text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company info */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold text-[#ce1620] mb-4">
              Primr Events
            </h3>
            <p className="text-gray-300 mb-6 max-w-md">
              Revolutionary AI-powered event management platform for professional event planners and marketing managers. Transform your events with intelligent automation.
            </p>
            <div className="space-y-2">
              <p className="text-sm text-gray-400">
                🌐 Live Platform: <a href="https://events.primr.co" target="_blank" rel="noopener noreferrer" className="text-[#ce1620] hover:text-[#f4c000] transition-colors">events.primr.co</a>
              </p>
              <p className="text-sm text-gray-400">
                📖 Demo Project: <a href="https://demo.primr.co" target="_blank" rel="noopener noreferrer" className="text-[#ce1620] hover:text-[#f4c000] transition-colors">demo.primr.co</a>
              </p>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-2">
              <a
                href="mailto:shae@primr.co"
                className="block text-gray-300 hover:text-[#f4c000] transition-colors"
              >
                shae@primr.co
              </a>
            </div>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Legal</h4>
            <div className="space-y-2">
              {footerLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="block text-gray-300 hover:text-[#f4c000] transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} Primr Events. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 mt-4 md:mt-0">
              <span className="text-gray-400 text-sm">Built with AI-powered intelligence</span>
              <div className="flex items-center space-x-2">
                <span className="text-2xl">🤖</span>
                <span className="text-sm text-[#f4c000]">AI Event Management</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
