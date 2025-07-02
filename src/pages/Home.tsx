import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Award, Users, Building2, Play, ChevronDown } from 'lucide-react';

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsVisible(true);
    
    const handleMouseMove = (e: { clientX: any; clientY: any; }) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const stats = [
    { icon: Building2, number: '438+', label: 'Projects Completed', color: 'from-blue-500 to-cyan-500' },
    { icon: Award, number: '15+', label: 'YEARS ', color: 'from-yellow-500 to-orange-500' },
    { icon: Users, number: '15+', label: 'Expert Team', color: 'from-purple-500 to-pink-500' },
  ];

  const featuredProjects = [
    {
      title: 'Modern Residential Complex',
      image: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg',
      category: 'Residential',
      year: '2024'
    },
    {
      title: 'Corporate Headquarters',
      image: 'https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg',
      category: 'Commercial',
      year: '2024'
    },
    {
      title: 'Cultural Center',
      image: 'https://images.pexels.com/photos/1115804/pexels-photo-1115804.jpeg',
      category: 'Public',
      year: '2023'
    }
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        {/* Animated Background */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/276625/pexels-photo-276625.jpeg)',
            transform: `translate(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.01}px)`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/70" />
          
          {/* Floating geometric shapes */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/4 left-1/4 w-32 h-32 border border-yellow-500/20 transform rotate-45 animate-pulse" />
            <div className="absolute top-3/4 right-1/4 w-24 h-24 border border-yellow-500/30 transform rotate-12 animate-bounce" style={{ animationDuration: '3s' }} />
            <div className="absolute bottom-1/4 left-1/3 w-16 h-16 bg-yellow-500/10 transform rotate-45 animate-pulse" style={{ animationDelay: '1s' }} />
          </div>
        </div>
        
        <div className={`relative z-10 text-center text-white max-w-6xl mx-auto px-4 transform transition-all duration-1500 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
        }`}>
          <div className="mb-8">
            <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight">
              <span className="inline-block transform transition-all duration-1000 hover:scale-110">
                Designing
              </span>
              <br />
              <span className="inline-block transform transition-all duration-1000 delay-300 hover:scale-110">
                Tomorrow's
              </span>
              <br />
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-500 to-orange-500 transform transition-all duration-1000 delay-500 hover:scale-110">
                Architecture
              </span>
            </h1>
          </div>
          
          <p className={`text-xl md:text-2xl mb-12 leading-relaxed opacity-90 max-w-4xl mx-auto transform transition-all duration-1000 delay-700 ${
            isVisible ? 'translate-y-0 opacity-90' : 'translate-y-8 opacity-0'
          }`}>
            Rectangle Architects transforms visions into architectural masterpieces that define skylines and inspire communities through innovative design and sustainable practices.
          </p>
          
          <div className={`flex flex-col sm:flex-row gap-6 justify-center transform transition-all duration-1000 delay-1000 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            <Link
              to="/projects"
              className="group inline-flex items-center px-10 py-5 bg-gradient-to-r from-yellow-500 to-yellow-600 text-black font-bold rounded-2xl hover:from-yellow-400 hover:to-yellow-500 transform hover:scale-110 hover:-translate-y-1 transition-all duration-500 shadow-2xl hover:shadow-yellow-500/25 relative overflow-hidden"
            >
              <span className="relative z-10">View Our Work</span>
              <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform duration-300" />
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent transform -skew-x-12 translate-x-full group-hover:translate-x-[-200%] transition-transform duration-700" />
            </Link>
            
            <Link
              to="/contact"
              className="group inline-flex items-center px-10 py-5 border-2 border-white text-white font-bold rounded-2xl hover:bg-white hover:text-black transform hover:scale-110 hover:-translate-y-1 transition-all duration-500 shadow-2xl hover:shadow-white/25 relative overflow-hidden"
            >
              <span className="relative z-10">Get Started</span>
              <Play className="ml-3 h-6 w-6 group-hover:scale-110 transition-transform duration-300" />
              <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent transform -skew-x-12 translate-x-full group-hover:translate-x-[-200%] transition-transform duration-700" />
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
          <ChevronDown className="h-8 w-8" />
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`text-center group transform transition-all duration-1000 delay-${index * 200} hover:scale-110 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
                }`}
              >
                <div className="relative mb-8">
                  <div className={`inline-flex items-center justify-center w-24 h-24 rounded-3xl bg-gradient-to-br ${stat.color} shadow-2xl group-hover:shadow-3xl transition-all duration-500 transform group-hover:rotate-12 group-hover:scale-110`}>
                    <stat.icon className="h-12 w-12 text-white group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/20 to-transparent transform scale-0 group-hover:scale-125 transition-transform duration-500" />
                </div>
                <h3 className="text-5xl font-bold text-gray-900 mb-4 group-hover:text-yellow-600 transition-colors duration-300">
                  {stat.number}
                </h3>
                <p className="text-gray-600 font-medium text-lg">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className={`transform transition-all duration-1000 ${
              isVisible ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'
            }`}>
              <div className="mb-6">
                <span className="text-yellow-500 font-semibold text-lg tracking-wide uppercase">About Rectangle</span>
                <h2 className="text-5xl font-bold text-gray-900 mt-4 mb-8 leading-tight">
                  Crafting Spaces That 
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-orange-500">
                    Inspire
                  </span>
                </h2>
              </div>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                For over more then a Decade, Rectangle Architects has been at the forefront of innovative design, 
                creating spaces that seamlessly blend functionality with aesthetic excellence.
              </p>
              
              <p className="text-lg text-gray-600 mb-10 leading-relaxed">
                Our commitment to sustainable architecture and cutting-edge design principles sets us apart 
                in creating environments that not only serve their purpose but inspire those who experience them.
              </p>
              
              <Link
                to="/about"
                className="group inline-flex items-center text-yellow-500 hover:text-yellow-600 font-bold text-lg transition-all duration-300 transform hover:translate-x-2"
              >
                Learn More About Us
                <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform duration-300" />
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-500 group-hover:w-full transition-all duration-500" />
              </Link>
            </div>
            
            <div className={`relative transform transition-all duration-1000 delay-500 ${
              isVisible ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'
            }`}>
              <div className="relative group">
                <img
                  src="https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg"
                  alt="Architectural planning"
                  className="rounded-3xl shadow-2xl group-hover:shadow-3xl transition-all duration-500 transform group-hover:scale-105"
                />
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-yellow-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Floating elements */}
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-yellow-500 rounded-2xl transform rotate-12 group-hover:rotate-45 transition-transform duration-500 opacity-90" />
                <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-gray-900 rounded-xl transform -rotate-12 group-hover:-rotate-45 transition-transform duration-500 opacity-90" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-black relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-0 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-20">
            <span className="text-yellow-500 font-semibold text-lg tracking-wide uppercase">Portfolio</span>
            <h2 className="text-5xl font-bold text-white mt-4 mb-6">Featured Projects</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover our latest architectural achievements that push the boundaries of design and innovation
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {featuredProjects.map((project, index) => (
              <div
                key={index}
                className={`group cursor-pointer transform transition-all duration-1000 delay-${index * 200} hover:scale-105 hover:-translate-y-4 ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
                }`}
              >
                <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-gray-800 to-gray-900 shadow-2xl group-hover:shadow-3xl transition-all duration-500">
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    <div className="absolute top-6 right-6">
                      <span className="bg-yellow-500 text-black px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                        {project.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-yellow-400 text-sm font-medium">{project.year}</span>
                      <ArrowRight className="h-5 w-5 transform group-hover:translate-x-2 group-hover:scale-110 transition-all duration-300" />
                    </div>
                    <h3 className="text-2xl font-bold mb-2 group-hover:text-yellow-400 transition-colors duration-300">
                      {project.title}
                    </h3>
                  </div>
                  
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-16">
            <Link
              to="/projects"
              className="group inline-flex items-center px-12 py-6 bg-gradient-to-r from-yellow-500 to-yellow-600 text-black font-bold rounded-2xl hover:from-yellow-400 hover:to-yellow-500 transform hover:scale-110 hover:-translate-y-2 transition-all duration-500 shadow-2xl hover:shadow-yellow-500/25 relative overflow-hidden"
            >
              <span className="relative z-10">View All Projects</span>
              <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform duration-300" />
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent transform -skew-x-12 translate-x-full group-hover:translate-x-[-200%] transition-transform duration-700" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;