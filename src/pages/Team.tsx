import React, { useEffect, useState } from 'react';
import { Linkedin, Mail, Award, GraduationCap, MapPin, Calendar, Users, Building2, Target } from 'lucide-react';

const Team = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedMember, setSelectedMember] = useState(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Principal Architect - Featured with photo
  const principalArchitect = {
    id: 1,
    name: 'Ar. Ketan A. Patil',
    role: 'Principal Architect & Founder',
    image: 'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg',
    bio: 'With over 15 years of experience in architecture and planning, Ar. Ketan A. Patil leads Rectangle Architects with expertise in environmental planning, urban design, and conservation projects. He has successfully completed 438+ projects and continues to lead 14 ongoing initiatives.',
    education: 'B. Arch. (N.T.V.S. College of Architecture Nandurbar), M. Arch. (Ranchana Sansad College of Architecture, Mumbai)',
    specialization: 'Architecture, Environmental Planning, Urban & Regional Planning, Landscape Design, Conservation, Urban Design, Interior Design',
    achievements: 'Council of Architecture Registration CA/2010/49526, 438+ Projects Completed, 15+ Years Experience',
    experience: '15+ years',
    projects: '438+ completed projects, 14 ongoing',
    location: 'Dhule & Navi Mumbai, Maharashtra',
    email: 'rectanglearchitect@gmail.com',
    phone: '+91 9637777384',
    linkedin: 'https://linkedin.com/in/ketanpatil'
  };

  // Senior Team Member - Featured with photo
  const seniorMember = {
    id: 2,
    name: 'Ar. Varun S. Bhamre',
    role: 'Senior Architect & Partner',
    image: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg',
    bio: 'Ar. Varun S. Bhamre brings extensive expertise in architectural conservation and sustainable design. With dual qualifications in B.Arch. & M. Arch., he specializes in heritage conservation projects and has been instrumental in several award-winning restoration projects.',
    education: 'B.Arch. & M. Arch. (Architectural Conservation) SPA Delhi',
    specialization: 'Architectural Conservation, Heritage Restoration, Sustainable Design, Project Management',
    achievements: 'Heritage Conservation Specialist, SPA Delhi Alumni, Conservation Project Leader',
    experience: '12+ years',
    projects: '85+ conservation and architectural projects',
    location: 'Delhi & Mumbai',
    email: 'varun.bhamre@rectanglearchitects.com',
    phone: '+91 9876543210',
    linkedin: 'https://linkedin.com/in/varunbhamre'
  };

  // Other team members (name and info only)
  const teamMembers = [
    {
      name: 'Ar. Harshada Mahajan',
      role: 'Urban Planning Specialist',
      department: 'Urban & Regional Planning',
      experience: '10+ years',
      specialization: 'Urban & Regional Planning, Master Planning',
      education: 'B.Arch., M. Arch. (Urban & Regional Planning) Mumbai',
      email: 'harshada.mahajan@rectanglearchitects.com'
    },
    {
      name: 'Ar. Rohit Salunke',
      role: 'Project Architect',
      department: 'Design & Development',
      experience: '8+ years',
      specialization: 'Residential Design, Commercial Architecture',
      education: 'B.Arch.(B.K.P.S. Pune)',
      email: 'rohit.salunke@rectanglearchitects.com'
    },
    {
      name: 'Ar. Sonu Bothe-Salunke',
      role: 'Senior Architect',
      department: 'Design',
      experience: '9+ years',
      specialization: 'Landscape Architecture, Site Planning',
      education: 'B.Arch.(Sir J.J. CoA Mumbai), M. Arch. in Landscape (Gold Medal), S.P.A. Bhopal',
      email: 'sonu.bothe@rectanglearchitects.com'
    },
    {
      name: 'Ar. Bhagyashree Gapat-Patil',
      role: 'Planning Consultant',
      department: 'Urban Planning',
      experience: '11+ years',
      specialization: 'Urban & Regional Planning, Development Control',
      education: 'B.Arch. (Sir J.J. CoA Mumbai), M. Plan. (Urban & Regional Planning) S.P.A. Bhopal',
      email: 'bhagyashree.gapat@rectanglearchitects.com'
    },
    {
      name: 'Vishakha Patil-Bhamre',
      role: 'Interior Design Lead',
      department: 'Interior Design',
      experience: '7+ years',
      specialization: 'Interior Design, Space Planning',
      education: 'B.Interior Design, NDHM & Nashik',
      email: 'vishakha.patil@rectanglearchitects.com'
    },
    {
      name: 'Ar. Harshal Joshi',
      role: 'Liaison Architect',
      department: 'Project Coordination',
      experience: '6+ years',
      specialization: 'Project Liaison, Regulatory Approvals',
      education: 'B.Arch., M. Arch. (Urban & Regional Planning) Mumbai',
      email: 'harshal.joshi@rectanglearchitects.com'
    },
    {
      name: 'Yogesh More',
      role: 'Senior Liaison Manager',
      department: 'Project Management',
      experience: '12+ years',
      specialization: 'Government Liaison, Project Coordination',
      education: 'Diploma in Civil Engineering',
      email: 'yogesh.more@rectanglearchitects.com'
    },
    {
      name: 'Er. Sachin Dalvi',
      role: 'Civil Engineer',
      department: 'Engineering',
      experience: '10+ years',
      specialization: 'Structural Design, Construction Management',
      education: 'BE Civil, LCEE, Mumbai Univ.',
      email: 'sachin.dalvi@rectanglearchitects.com'
    },
    {
      name: 'Ar. Pooja Kulkarni-Bidnur',
      role: 'Project Architect',
      department: 'Design',
      experience: '5+ years',
      specialization: 'Residential Architecture, Design Development',
      education: 'B.Arch. Kolhapur, PG in Project Management (NICMAR) Pune',
      email: 'pooja.kulkarni@rectanglearchitects.com'
    },
    {
      name: 'Ar. Shrikant Borse',
      role: 'Junior Architect',
      department: 'Design',
      experience: '4+ years',
      specialization: 'Architectural Design, 3D Modeling',
      education: 'B.Arch. Loni',
      email: 'shrikant.borse@rectanglearchitects.com'
    },
    {
      name: 'Er. Pawan Karale',
      role: 'MEP Consultant',
      department: 'Engineering Services',
      experience: '8+ years',
      specialization: 'Mechanical, Electrical & Plumbing Design',
      education: 'BE Mechanical Engineering',
      email: 'pawan.karale@rectanglearchitects.com'
    },
    {
      name: 'Ganesh Chopdar',
      role: 'Senior Executive Liasoner',
      department: 'Liaison & Approvals',
      experience: '15+ years',
      specialization: 'Government Approvals, Documentation',
      education: 'Commerce Graduate',
      email: 'ganesh.chopdar@rectanglearchitects.com'
    }
  ];

  return (
    <div className="pt-20 page-transition">
      {/* Hero Section */}
      <section className="relative py-20 sm:py-32 bg-gradient-to-br from-gray-900 via-gray-800 to-black overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-yellow-500/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className={`text-center transform transition-all duration-1500 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
          }`}>
            <span className="text-yellow-500 font-semibold text-sm sm:text-lg tracking-wide uppercase mb-4 block">Meet The Team</span>
            <h1 className="text-4xl sm:text-6xl lg:text-8xl font-bold text-white mb-6 sm:mb-8 leading-tight">
              Our 
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
                Experts
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed px-4">
              Meet the talented professionals who bring our architectural visions to life through 
              expertise, creativity, and unwavering dedication to design excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Leadership Section - Featured Members */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-20">
            <span className="text-yellow-500 font-semibold text-sm sm:text-lg tracking-wide uppercase">Leadership</span>
            <h2 className="text-3xl sm:text-5xl font-bold text-gray-900 mt-4 mb-6">Our Leadership Team</h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Visionary leaders who established Rectangle Architects with a commitment to innovative design and sustainable architecture.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
            {/* Principal Architect */}
            <div
              className={`group bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transform transition-all duration-1000 hover:scale-105 hover:-translate-y-4 cursor-pointer card-hover ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
              }`}
              onClick={() => setSelectedMember(principalArchitect)}
            >
              <div className="relative overflow-hidden">
                <img
                  src={principalArchitect.image}
                  alt={principalArchitect.name}
                  className="w-full h-64 sm:h-80 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                
                {/* Principal badge */}
                <div className="absolute top-6 right-6">
                  <span className="bg-yellow-500 text-black px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                    Principal Architect
                  </span>
                </div>
                
                {/* Social links overlay */}
                <div className="absolute bottom-6 left-6 right-6 text-white opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                  <div className="flex space-x-4">
                    <button className="p-3 bg-yellow-500 text-black rounded-full hover:bg-yellow-400 transition-all duration-300 transform hover:scale-110">
                      <Mail className="h-5 w-5" />
                    </button>
                    <button className="p-3 bg-yellow-500 text-black rounded-full hover:bg-yellow-400 transition-all duration-300 transform hover:scale-110">
                      <Linkedin className="h-5 w-5" />
                    </button>
                  </div>
                </div>
                
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              
              <div className="p-6 sm:p-8">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 group-hover:text-yellow-600 transition-colors duration-300">
                  {principalArchitect.name}
                </h3>
                <p className="text-yellow-600 font-semibold mb-4 text-base sm:text-lg">{principalArchitect.role}</p>
                <p className="text-gray-600 mb-6 leading-relaxed text-sm sm:text-base">{principalArchitect.bio}</p>
                
                <div className="space-y-3 text-sm">
                  <div className="flex items-center text-gray-500">
                    <Calendar className="h-4 w-4 mr-3 flex-shrink-0" />
                    <span>{principalArchitect.experience}</span>
                  </div>
                  <div className="flex items-center text-gray-500">
                    <Building2 className="h-4 w-4 mr-3 flex-shrink-0" />
                    <span>{principalArchitect.projects}</span>
                  </div>
                  <div className="flex items-center text-gray-500">
                    <MapPin className="h-4 w-4 mr-3 flex-shrink-0" />
                    <span>{principalArchitect.location}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Senior Member */}
            <div
              className={`group bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transform transition-all duration-1000 delay-200 hover:scale-105 hover:-translate-y-4 cursor-pointer card-hover ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
              }`}
              onClick={() => setSelectedMember(seniorMember)}
            >
              <div className="relative overflow-hidden">
                <img
                  src={seniorMember.image}
                  alt={seniorMember.name}
                  className="w-full h-64 sm:h-80 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                
                {/* Senior badge */}
                <div className="absolute top-6 right-6">
                  <span className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                    Senior Partner
                  </span>
                </div>
                
                {/* Social links overlay */}
                <div className="absolute bottom-6 left-6 right-6 text-white opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                  <div className="flex space-x-4">
                    <button className="p-3 bg-yellow-500 text-black rounded-full hover:bg-yellow-400 transition-all duration-300 transform hover:scale-110">
                      <Mail className="h-5 w-5" />
                    </button>
                    <button className="p-3 bg-yellow-500 text-black rounded-full hover:bg-yellow-400 transition-all duration-300 transform hover:scale-110">
                      <Linkedin className="h-5 w-5" />
                    </button>
                  </div>
                </div>
                
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              
              <div className="p-6 sm:p-8">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                  {seniorMember.name}
                </h3>
                <p className="text-blue-600 font-semibold mb-4 text-base sm:text-lg">{seniorMember.role}</p>
                <p className="text-gray-600 mb-6 leading-relaxed text-sm sm:text-base">{seniorMember.bio}</p>
                
                <div className="space-y-3 text-sm">
                  <div className="flex items-center text-gray-500">
                    <Calendar className="h-4 w-4 mr-3 flex-shrink-0" />
                    <span>{seniorMember.experience}</span>
                  </div>
                  <div className="flex items-center text-gray-500">
                    <Building2 className="h-4 w-4 mr-3 flex-shrink-0" />
                    <span>{seniorMember.projects}</span>
                  </div>
                  <div className="flex items-center text-gray-500">
                    <MapPin className="h-4 w-4 mr-3 flex-shrink-0" />
                    <span>{seniorMember.location}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Members Grid - Name and Info Only */}
      <section className="py-16 sm:py-24 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-20">
            <span className="text-yellow-500 font-semibold text-sm sm:text-lg tracking-wide uppercase">Our Team</span>
            <h2 className="text-3xl sm:text-5xl font-bold text-gray-900 mt-4 mb-6">Expert Professionals</h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Dedicated specialists across all disciplines working together to deliver exceptional architectural solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className={`group bg-white rounded-2xl sm:rounded-3xl shadow-lg hover:shadow-xl p-6 sm:p-8 text-center transform transition-all duration-1000 delay-${index * 100} hover:scale-105 hover:-translate-y-2 card-hover ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
                }`}
              >
                {/* Avatar Placeholder */}
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-full mx-auto mb-4 sm:mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-bold text-lg sm:text-xl">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 group-hover:text-yellow-600 transition-colors duration-300">
                  {member.name}
                </h3>
                <p className="text-yellow-600 font-semibold mb-3 sm:mb-4 text-sm sm:text-base">{member.role}</p>
                <p className="text-gray-500 text-xs sm:text-sm mb-3 sm:mb-4">{member.department}</p>
                
                <div className="space-y-2 text-xs sm:text-sm text-gray-600">
                  <div className="flex items-center justify-center">
                    <Calendar className="h-3 w-3 sm:h-4 sm:w-4 mr-2 flex-shrink-0" />
                    <span>{member.experience}</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <Target className="h-3 w-3 sm:h-4 sm:w-4 mr-2 flex-shrink-0" />
                    <span className="text-center leading-tight">{member.specialization}</span>
                  </div>
                </div>
                
                <div className="mt-4 sm:mt-6 flex justify-center space-x-3">
                  <button className="p-2 sm:p-3 bg-gray-100 text-gray-600 rounded-full hover:bg-yellow-500 hover:text-black transition-all duration-300 transform hover:scale-110">
                    <Mail className="h-3 w-3 sm:h-4 sm:w-4" />
                  </button>
                  <button className="p-2 sm:p-3 bg-gray-100 text-gray-600 rounded-full hover:bg-yellow-500 hover:text-black transition-all duration-300 transform hover:scale-110">
                    <Linkedin className="h-3 w-3 sm:h-4 sm:w-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Stats */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl sm:rounded-3xl mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                <Users className="h-8 w-8 sm:h-10 sm:w-10 text-white" />
              </div>
              <h3 className="text-2xl sm:text-4xl font-bold text-gray-900 mb-2">15+</h3>
              <p className="text-gray-600 text-sm sm:text-base">Team Members</p>
            </div>
            
            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl sm:rounded-3xl mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                <Building2 className="h-8 w-8 sm:h-10 sm:w-10 text-white" />
              </div>
              <h3 className="text-2xl sm:text-4xl font-bold text-gray-900 mb-2">438+</h3>
              <p className="text-gray-600 text-sm sm:text-base">Projects Delivered</p>
            </div>
            
            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-2xl sm:rounded-3xl mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                <Award className="h-8 w-8 sm:h-10 sm:w-10 text-white" />
              </div>
              <h3 className="text-2xl sm:text-4xl font-bold text-gray-900 mb-2">15+</h3>
              <p className="text-gray-600 text-sm sm:text-base">Years Experience</p>
            </div>
            
            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl sm:rounded-3xl mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                <GraduationCap className="h-8 w-8 sm:h-10 sm:w-10 text-white" />
              </div>
              <h3 className="text-2xl sm:text-4xl font-bold text-gray-900 mb-2">14</h3>
              <p className="text-gray-600 text-sm sm:text-base">Ongoing Projects</p>
            </div>
          </div>
        </div>
      </section>

      {/* Join Our Team CTA */}
      <section className="py-16 sm:py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-black relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-0 w-64 sm:w-96 h-64 sm:h-96 bg-yellow-500/5 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-0 w-64 sm:w-96 h-64 sm:h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        </div>
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <div className={`transform transition-all duration-1500 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
          }`}>
            <span className="text-yellow-500 font-semibold text-sm sm:text-lg tracking-wide uppercase mb-6 block">Join Us</span>
            <h2 className="text-3xl sm:text-5xl font-bold text-white mb-6 sm:mb-8">Shape the Future With Us</h2>
            <p className="text-lg sm:text-xl text-gray-300 mb-8 sm:mb-12 leading-relaxed max-w-3xl mx-auto">
              We're always looking for talented individuals who share our passion for exceptional architecture 
              and sustainable design. Explore opportunities to grow your career with Rectangle Architects.
            </p>
            <button className="group inline-flex items-center px-8 sm:px-12 py-4 sm:py-6 bg-gradient-to-r from-yellow-500 to-yellow-600 text-black font-bold rounded-2xl hover:from-yellow-400 hover:to-yellow-500 transform hover:scale-110 hover:-translate-y-2 transition-all duration-500 shadow-2xl hover:shadow-yellow-500/25 relative overflow-hidden">
              <span className="relative z-10">View Open Positions</span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent transform -skew-x-12 translate-x-full group-hover:translate-x-[-200%] transition-transform duration-700" />
            </button>
          </div>
        </div>
      </section>

      {/* Featured Member Modal */}
      {selectedMember && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 animate-fadeIn" onClick={() => setSelectedMember(null)}>
          <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-3xl" onClick={(e) => e.stopPropagation()}>
            <div className="relative">
              <img
                src={selectedMember.image}
                alt={selectedMember.name}
                className="w-full h-64 sm:h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <button
                onClick={() => setSelectedMember(null)}
                className="absolute top-4 sm:top-6 right-4 sm:right-6 bg-black/50 text-white rounded-full p-2 sm:p-3 hover:bg-black/70 transition-all duration-300 transform hover:scale-110"
              >
                ✕
              </button>
              
              {/* Member info overlay */}
              <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 text-white">
                <h2 className="text-2xl sm:text-4xl font-bold mb-2">{selectedMember.name}</h2>
                <p className="text-yellow-400 text-lg sm:text-xl font-semibold">{selectedMember.role}</p>
              </div>
            </div>
            
            <div className="p-6 sm:p-10">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
                <div className="lg:col-span-2">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">About</h3>
                  <p className="text-base sm:text-lg text-gray-700 mb-6 leading-relaxed">{selectedMember.bio}</p>
                  
                  <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-4">Specialization</h4>
                  <p className="text-gray-600 leading-relaxed mb-6">{selectedMember.specialization}</p>
                  
                  <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-4">Achievements</h4>
                  <p className="text-gray-600 leading-relaxed">{selectedMember.achievements}</p>
                </div>
                
                <div className="bg-gray-50 rounded-2xl p-4 sm:p-6">
                  <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-6">Details</h4>
                  <div className="space-y-4">
                    <div>
                      <span className="text-gray-600 font-medium">Education:</span>
                      <p className="text-gray-900 mt-1 text-sm sm:text-base">{selectedMember.education}</p>
                    </div>
                    <div>
                      <span className="text-gray-600 font-medium">Experience:</span>
                      <p className="text-gray-900 mt-1">{selectedMember.experience}</p>
                    </div>
                    <div>
                      <span className="text-gray-600 font-medium">Projects:</span>
                      <p className="text-gray-900 mt-1">{selectedMember.projects}</p>
                    </div>
                    <div>
                      <span className="text-gray-600 font-medium">Location:</span>
                      <p className="text-gray-900 mt-1">{selectedMember.location}</p>
                    </div>
                    {selectedMember.phone && (
                      <div>
                        <span className="text-gray-600 font-medium">Phone:</span>
                        <p className="text-gray-900 mt-1">{selectedMember.phone}</p>
                      </div>
                    )}
                  </div>
                  
                  <div className="mt-6 sm:mt-8 flex space-x-4">
                    <button className="flex-1 bg-yellow-500 text-black py-2 sm:py-3 rounded-xl font-semibold hover:bg-yellow-400 transition-colors duration-300 text-sm sm:text-base">
                      Contact
                    </button>
                    <button className="p-2 sm:p-3 border border-gray-300 rounded-xl hover:bg-gray-50 transition-colors duration-300">
                      <Linkedin className="h-4 w-4 sm:h-5 sm:w-5 text-gray-600" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Team;