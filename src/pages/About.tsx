import React, { useEffect, useState } from 'react';
import { Target, Eye, Award, Compass, Zap, Heart } from 'lucide-react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const values = [
    {
      icon: Target,
      title: 'Innovation',
      description: 'We push the boundaries of architectural design, embracing new technologies and sustainable practices.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Eye,
      title: 'Vision',
      description: 'Every project begins with a clear vision that balances aesthetics, functionality, and environmental responsibility.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Our commitment to quality and attention to detail ensures every project exceeds expectations.',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Compass,
      title: 'Guidance',
      description: 'We guide our clients through every step of the design process with expertise and transparency.',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Zap,
      title: 'Energy',
      description: 'We bring passion and energy to every project, creating spaces that inspire and energize.',
      color: 'from-red-500 to-pink-500'
    },
    {
      icon: Heart,
      title: 'Care',
      description: 'We care deeply about our clients, communities, and the environment in everything we create.',
      color: 'from-indigo-500 to-purple-500'
    }
  ];

  const timeline = [
    { year: '2000', event: 'Rectangle Architects founded with a vision to transform urban landscapes', highlight: true },
    { year: '2005', event: 'Completed first major commercial project, establishing our reputation' },
    { year: '2010', event: 'Expanded team and opened second office, focusing on sustainable design' },
    { year: '2015', event: 'Won prestigious Architecture Excellence Award for innovative residential complex', highlight: true },
    { year: '2020', event: 'Pioneered smart building integration and green architecture initiatives' },
    { year: '2024', event: 'Celebrating over 150 completed projects and continued growth', highlight: true }
  ];

  return (
    <div className="pt-20 page-transition">
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-gray-900 via-gray-800 to-black overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div 
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl animate-pulse"
            style={{ transform: `translateY(${scrollY * 0.1}px)` }}
          />
          <div 
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"
            style={{ transform: `translateY(${scrollY * -0.1}px)`, animationDelay: '2s' }}
          />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className={`text-center transform transition-all duration-1500 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
          }`}>
            <span className="text-yellow-500 font-semibold text-lg tracking-wide uppercase mb-4 block">Our Story</span>
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-8 leading-tight">
              About 
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
                Rectangle
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Rectangle Architects has been shaping skylines and transforming communities for over more than a decade, 
              creating architectural masterpieces that stand the test of time through innovation, sustainability, and design excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className={`transform transition-all duration-1000 ${
              isVisible ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'
            }`}>
              <div className="mb-8">
                <span className="text-yellow-500 font-semibold text-lg tracking-wide uppercase">Our Journey</span>
                <h2 className="text-5xl font-bold text-gray-900 mt-4 mb-8 leading-tight">
                  Building Dreams Into
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-orange-500">
                    Reality
                  </span>
                </h2>
              </div>
              
              <div className="space-y-6">
                <p className="text-xl text-gray-600 leading-relaxed">
                  Founded in 2010 by visionary architects Ketan Patil, Rectangle Architects 
                  began with a simple yet ambitious goal: to create buildings that not only serve their purpose 
                  but inspire those who experience them.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  What started as a small studio has grown into a renowned firm known for pushing the boundaries 
                  of contemporary architecture while maintaining a deep respect for environmental sustainability 
                  and community impact.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Today, we continue to innovate, designing spaces that reflect our clients' visions while 
                  contributing positively to the urban fabric and natural environment.
                </p>
              </div>
              
              <div className="mt-10 grid grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-600">15+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-600">438+</div>
                  <div className="text-sm text-gray-600">Projects Completed</div>
                </div>
                {/* <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-600">25+</div>
                  <div className="text-sm text-gray-600">Awards Won</div>
                </div> */}
              </div>
            </div>
            
            <div className={`relative transform transition-all duration-1000 delay-500 ${
              isVisible ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'
            }`}>
              <div className="relative group">
                <img
                  src="https://amazingarchitecture.com/storage/files/1/Architecture%20firms/Milad%20Eshtiyaghi/Wave%20Residential%20Complex/01-Wave-Residential-Complex-Milad-Eshtiyaghi-Studio-Mumbai-India.jpg"
                  alt="Architectural team at work"
                  className="rounded-3xl shadow-2xl group-hover:shadow-3xl transition-all duration-500 transform group-hover:scale-105"
                />
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-yellow-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Floating elements */}
                <div className="absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-3xl transform rotate-12 group-hover:rotate-45 transition-transform duration-500 opacity-90 animate-float" />
                <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-gradient-to-br from-gray-900 to-gray-700 rounded-2xl transform -rotate-12 group-hover:-rotate-45 transition-transform duration-500 opacity-90 animate-float" style={{ animationDelay: '2s' }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-20">
            <span className="text-yellow-500 font-semibold text-lg tracking-wide uppercase">Our Values</span>
            <h2 className="text-5xl font-bold text-gray-900 mt-4 mb-6">The Principles That Guide Us</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every project we undertake is guided by these core values that define who we are and how we work
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className={`group text-center p-8 bg-white rounded-3xl shadow-lg hover:shadow-2xl transform transition-all duration-700 delay-${index * 100} hover:scale-105 hover:-translate-y-2 card-hover ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
                }`}
              >
                <div className="relative mb-8">
                  <div className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br ${value.color} shadow-xl group-hover:shadow-2xl transition-all duration-500 transform group-hover:rotate-12 group-hover:scale-110`}>
                    <value.icon className="h-10 w-10 text-white group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/20 to-transparent transform scale-0 group-hover:scale-125 transition-transform duration-500" />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-yellow-600 transition-colors duration-300">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <span className="text-yellow-500 font-semibold text-lg tracking-wide uppercase">Our Journey</span>
            <h2 className="text-5xl font-bold text-gray-900 mt-4 mb-6">Milestones That Shaped Us</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Key moments in our evolution from a small studio to an award-winning architectural firm
            </p>
          </div>
          
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-px h-full w-1 bg-gradient-to-b from-yellow-500 to-orange-500 rounded-full"></div>
            
            {timeline.map((item, index) => (
              <div
                key={index}
                className={`relative flex items-center mb-16 ${
                  index % 2 === 0 ? 'justify-start' : 'justify-end'
                }`}
              >
                <div className={`w-5/12 ${index % 2 === 0 ? 'pr-12 text-right' : 'pl-12 text-left'} transform transition-all duration-1000 delay-${index * 200} ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
                }`}>
                  <div className={`group p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 ${
                    item.highlight ? 'bg-gradient-to-br from-yellow-50 to-orange-50 border-2 border-yellow-200' : 'bg-white'
                  }`}>
                    <span className={`font-bold text-2xl ${item.highlight ? 'text-yellow-600' : 'text-yellow-500'}`}>
                      {item.year}
                    </span>
                    <p className="text-gray-700 mt-3 text-lg leading-relaxed">{item.event}</p>
                    {item.highlight && (
                      <div className="mt-4">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-yellow-500 text-black">
                          Milestone
                        </span>
                      </div>
                    )}
                  </div>
                </div>
                
                <div className={`absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full border-4 border-white shadow-lg ${
                  item.highlight ? 'bg-yellow-500 animate-pulse' : 'bg-gray-400'
                }`}></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-black relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-0 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        </div>
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <div className={`transform transition-all duration-1500 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
          }`}>
            <span className="text-yellow-500 font-semibold text-lg tracking-wide uppercase mb-6 block">Our Mission</span>
            <h2 className="text-5xl font-bold text-white mb-12">Shaping Tomorrow's World</h2>
            <blockquote className="text-3xl text-gray-300 leading-relaxed italic font-light">
              "To create architectural solutions that harmonize human needs with environmental stewardship, 
              designing spaces that inspire, function beautifully, and contribute to a sustainable future 
              for generations to come."
            </blockquote>
            <div className="mt-12 flex justify-center">
              <div className="w-24 h-1 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;