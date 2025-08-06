import { PainPoint } from '../../types';

/**
 * Pain Points section highlighting common event planning challenges
 * Designed to resonate with target audience and increase conversion
 */
export function PainPointsSection() {
  const painPoints: PainPoint[] = [
    {
      id: 'disorganized-info',
      title: 'Drowning in Scattered Documents?',
      description: 'Vendor contracts, venue details, catering menus, guest lists – your event information is everywhere except where you need it. You&apos;re spending more time searching than planning.',
      icon: '📄'
    },
    {
      id: 'urgent-questions',
      title: 'Urgent Questions, No Quick Answers',
      description: 'It&apos;s 11 PM and you need to know the venue capacity. Or the catering deadline. Or budget details. But that information is buried in a 47-page PDF you can&apos;t remember saving.',
      icon: '❓'
    },
    {
      id: 'scattered-communication',
      title: 'Communication Chaos Killing Your Timeline',
      description: 'Team members asking the same questions repeatedly. Vendors waiting for responses. Stakeholders demanding updates. Your inbox is a battlefield and deadlines are approaching fast.',
      icon: '💬'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a1a] mb-6">
            Sound Familiar? You&apos;re Not Alone.
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Professional event planners waste 40% of their time searching for information instead of creating memorable experiences. Here&apos;s what keeps you up at night:
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {painPoints.map((painPoint) => (
            <div key={painPoint.id} className="group">
              <div className="bg-gray-50 rounded-2xl p-8 h-full border border-gray-100 hover:border-[#ce1620] transition-colors duration-300">
                <div className="text-6xl mb-6 text-center">{painPoint.icon}</div>
                <h3 className="text-2xl font-bold text-[#1a1a1a] mb-4 text-center">
                  {painPoint.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-center">
                  {painPoint.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Statistics */}
        <div className="mt-16 bg-[#ce1620] rounded-2xl p-8 text-white">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-[#f4c000] mb-2">40%</div>
              <div className="text-lg">Time wasted searching for documents</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#f4c000] mb-2">15+</div>
              <div className="text-lg">Hours per week on information management</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#f4c000] mb-2">73%</div>
              <div className="text-lg">Event planners report communication stress</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
