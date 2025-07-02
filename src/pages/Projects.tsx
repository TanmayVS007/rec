import React, { useEffect, useState } from 'react';
import { Filter, Search, MapPin, Calendar } from 'lucide-react';

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [filter, setFilter] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const projects = [
    // Interior Design Projects
    { id: 1, category: 'Interior Design', image: '/Interior Projects 3.jpg' },
    { id: 2, category: 'Interior Design', image: '/Interior Projects 8.jpg' },
    { id: 3, category: 'Interior Design', image: '/Interior Projects 7.jpg' },
    { id: 4, category: 'Interior Design', image: '/Interior Projects 9.jpg' },
    { id: 5, category: 'Interior Design', image: '/Interior Projects 4.jpg' },

    // Hotel / Malls Projects
    { id: 6, category: 'Hotel / Malls', image: '/hotel 1.jpg' },
    { id: 7, category: 'Hotel / Malls', image: '/mall 1.jpg' },
    { id: 8, category: 'Hotel / Malls', image: '/hotel 2.jpg' },
    { id: 9, category: 'Hotel / Malls', image: '/mall 3.jpg' },

    // Master Plans Projects
    { id: 10, category: 'Master Plans', image: '/master plans 4.jpg' },
    { id: 11, category: 'Master Plans', image: '/master plans 3.jpg' },
    { id: 12, category: 'Master Plans', image: '/master plans 2.jpg' },

    // Bungalows Projects
    { id: 13, category: 'Bungalows', image: '/Bungalow 1.jpg' },
    { id: 14, category: 'Bungalows', image: '/Bungalow 4.jpg' },
    { id: 15, category: 'Bungalows', image: '/Bungalow 5.jpg' },
    { id: 16, category: 'Bungalows', image: '/Bungalow 6.jpg' },
    { id: 17, category: 'Bungalows', image: '/Bungalow 8.jpg' },
    { id: 18, category: 'Bungalows', image: '/Bungalow 12.jpg' },

    // Farmhouse Projects
    { id: 19, category: 'Farmhouse', image: '/farm house 1.jpg' },
    { id: 20, category: 'Farmhouse', image: '/farm house 3.jpg' },
    { id: 21, category: 'Farmhouse', image: '/farm house 4.jpg' },

    // Township Projects
    { id: 22, category: 'Township', image: '/town 1.png' },
    { id: 23, category: 'Township', image: '/town 3.png' },
    { id: 24, category: 'Township', image: '/town 5.png' },

    // Apartments Projects
    { id: 25, category: 'Apartments', image: '/apartments 3.jpg' },
    { id: 26, category: 'Apartments', image: '/apartments 2.jpg' },
    { id: 27, category: 'Apartments', image: '/apartments 4.jpg' }
  ];

  const categories = ['All', 'Interior Design', 'Hotel / Malls', 'Master Plans', 'Bungalows', 'Farmhouse', 'Township', 'Apartments'];

  const filteredProjects = projects.filter(project => {
    const matchesFilter = filter === 'All' || project.category === filter;
    const matchesSearch = project.category.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="pt-20 page-transition">
      {/* Hero Section */}
      <section className="relative py-20 sm:py-32 bg-gradient-to-br from-gray-900 via-gray-800 to-black overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-yellow-500/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className={`text-center transform transition-all duration-1500 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
          }`}>
            <span className="text-yellow-500 font-semibold text-sm sm:text-lg tracking-wide uppercase mb-4 block">Portfolio</span>
            <h1 className="text-4xl sm:text-6xl lg:text-8xl font-bold text-white mb-6 sm:mb-8 leading-tight">
              Our 
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
                Projects
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed px-4">
              Explore our diverse portfolio spanning interior design, commercial spaces, residential developments, 
              and comprehensive urban planning solutions across Maharashtra.
            </p>
          </div>
        </div>
      </section>

      {/* Filter and Search Section */}
      <section className="py-8 sm:py-12 bg-white sticky top-20 z-40 shadow-xl border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-6">
            {/* Search */}
            {/* <div className="flex justify-center">
              <div className="relative w-full max-w-md">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search projects..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-2xl focus:ring-yellow-500 focus:border-yellow-500 transition-all duration-300 transform focus:scale-105"
                />
              </div>
            </div> */}
            
            {/* Filter Tabs */}
            <div className="flex flex-wrap gap-2 sm:gap-3 justify-center items-center">
              <div className="flex items-center mr-2 sm:mr-4 mb-2 sm:mb-0">
                <Filter className="h-4 w-4 sm:h-5 sm:w-5 text-gray-500 mr-2" />
                <span className="text-gray-700 font-medium text-sm sm:text-base">Filter:</span>
              </div>
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setFilter(category)}
                  className={`px-3 sm:px-6 py-2 sm:py-3 rounded-xl sm:rounded-2xl font-medium transition-all duration-500 transform hover:scale-105 text-xs sm:text-base ${
                    filter === category
                      ? 'bg-gradient-to-r from-yellow-500 to-yellow-600 text-black shadow-lg scale-105'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:text-gray-900'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 sm:py-24 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredProjects.length === 0 ? (
            <div className="text-center py-20">
              <div className="text-4xl sm:text-6xl mb-4">🔍</div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">No projects found</h3>
              <p className="text-gray-600">Try adjusting your search or filter criteria</p>
            </div>
          ) : (
            <>
              {/* Results count */}
              {/* <div className="text-center mb-8 sm:mb-12">
                <p className="text-gray-600 text-sm sm:text-base">
                  Showing <span className="font-semibold text-yellow-600">{filteredProjects.length}</span> projects
                  {filter !== 'All' && <span> in <span className="font-semibold text-yellow-600">{filter}</span></span>}
                </p>
              </div> */}

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
                {filteredProjects.map((project, index) => (
                  <div
                    key={`${project.id}-${index}`}
                    className={`group cursor-pointer transform transition-all duration-1000 delay-${index * 50} hover:scale-105 hover:-translate-y-4 card-hover ${
                      isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
                    }`}
                  >
                    <div className="bg-white rounded-2xl sm:rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 relative">
                      <div className="relative overflow-hidden group">
                        <img
                          src={project.image}
                          alt={project.category}
                          className="w-full h-48 sm:h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                        
                        {/* Category badge */}
                        <div className="absolute top-3 sm:top-4 right-3 sm:right-4">
                          <span className="bg-yellow-500 text-black px-2 sm:px-3 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-bold shadow-lg">
                            {project.category}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 sm:py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-black relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-0 w-64 sm:w-96 h-64 sm:h-96 bg-yellow-500/5 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-0 w-64 sm:w-96 h-64 sm:h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        </div>
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <div className={`transform transition-all duration-1500 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
          }`}>
            <span className="text-yellow-500 font-semibold text-sm sm:text-lg tracking-wide uppercase mb-6 block">Ready to Start?</span>
            <h2 className="text-3xl sm:text-5xl font-bold text-white mb-6 sm:mb-8">Let's Create Something Amazing</h2>
            <p className="text-lg sm:text-xl text-gray-300 mb-8 sm:mb-12 leading-relaxed max-w-3xl mx-auto">
              Have a project in mind? Let's discuss how we can bring your architectural vision to life 
              with our expertise and creative approach.
            </p>
            <button className="group inline-flex items-center px-8 sm:px-12 py-4 sm:py-6 bg-gradient-to-r from-yellow-500 to-yellow-600 text-black font-bold rounded-2xl hover:from-yellow-400 hover:to-yellow-500 transform hover:scale-110 hover:-translate-y-2 transition-all duration-500 shadow-2xl hover:shadow-yellow-500/25 relative overflow-hidden">
              <span className="relative z-10">Start Your Project</span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent transform -skew-x-12 translate-x-full group-hover:translate-x-[-200%] transition-transform duration-700" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;