import React, { useEffect, useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, User, Building } from 'lucide-react';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    projectType: '',
    budget: '',
    timeline: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleInputChange = (e: { target: { name: any; value: any; }; }) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        projectType: '',
        budget: '',
        timeline: '',
        message: ''
      });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Visit Our Offices',
      details: [
        'Office 1: 22, Shivaji Nagar, Sakri, Ta: Sakri, District: Dhule, Maharashtra',
        'Office 2: Sector 11, CBD Belapur, Navi Mumbai 400703, Maharashtra'
      ],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: ['+91 9637777384', 'Available Mon-Sat 9AM-7PM'],
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Mail,
      title: 'Email Us',
      details: ['rectanglearchitect@gmail.com', 'info@rectanglearchitects.com'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Clock,
      title: 'Office Hours',
      details: ['Monday - Saturday: 9:00 AM - 7:00 PM', 'Sunday: By Appointment Only'],
      color: 'from-yellow-500 to-orange-500'
    }
  ];

  const projectTypes = [
    'Residential',
    'Commercial',
    'Cultural',
    'Educational',
    'Healthcare',
    'Mixed-Use',
    'Urban Planning',
    'Interior Design',
    'Environmental Planning',
    'Conservation',
    'Renovation',
    'Other'
  ];

  const budgetRanges = [
    'Under ₹10 Lakhs',
    '₹10 Lakhs - ₹50 Lakhs',
    '₹50 Lakhs - ₹1 Crore',
    '₹1 Crore - ₹5 Crores',
    'Over ₹5 Crores',
    'To be discussed'
  ];

  const timelines = [
    'Less than 6 months',
    '6-12 months',
    '1-2 years',
    '2+ years',
    'Flexible'
  ];

  return (
    <div className="pt-20 page-transition">
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-gray-900 via-gray-800 to-black overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className={`text-center transform transition-all duration-1500 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
          }`}>
            <span className="text-yellow-500 font-semibold text-lg tracking-wide uppercase mb-4 block">Get In Touch</span>
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-8 leading-tight">
              Contact 
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
                Rectangle
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Ready to bring your architectural vision to life? Let's start a conversation about 
              your project and explore how we can create something extraordinary together.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className={`group bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl text-center transform transition-all duration-1000 delay-${index * 100} hover:scale-105 hover:-translate-y-2 card-hover ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
                }`}
              >
                <div className="relative mb-8">
                  <div className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br ${info.color} shadow-xl group-hover:shadow-2xl transition-all duration-500 transform group-hover:rotate-12 group-hover:scale-110`}>
                    <info.icon className="h-10 w-10 text-white group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/20 to-transparent transform scale-0 group-hover:scale-125 transition-transform duration-500" />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-6 group-hover:text-yellow-600 transition-colors duration-300">
                  {info.title}
                </h3>
                <div className="space-y-2">
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-gray-600 leading-relaxed text-sm">{detail}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Principal Architect Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-yellow-500 font-semibold text-lg tracking-wide uppercase">Principal Architect</span>
            <h2 className="text-4xl font-bold text-gray-900 mt-4 mb-6">Meet Our Lead Architect</h2>
          </div>
          
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl shadow-xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
              <div className="space-y-6">
                <div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-2">Ar. Ketan A. Patil</h3>
                  <p className="text-yellow-600 font-semibold text-xl mb-4">Principal Architect & Founder</p>
                  <p className="text-gray-600 leading-relaxed">
                    With over 15 years of experience in architecture and planning, Ar. Ketan A. Patil leads Rectangle Architects 
                    with expertise in environmental planning, urban design, and conservation projects.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded-xl shadow-md">
                    <h4 className="font-semibold text-gray-900 mb-2">Experience</h4>
                    <p className="text-gray-600">15+ Years</p>
                  </div>
                  <div className="bg-white p-4 rounded-xl shadow-md">
                    <h4 className="font-semibold text-gray-900 mb-2">Projects</h4>
                    <p className="text-gray-600">438+ Completed</p>
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <h4 className="font-semibold text-gray-900 mb-3">Education</h4>
                  <div className="space-y-2">
                    <p className="text-gray-600">B. Arch. (N.T.V.S. College of Architecture Nandurbar)</p>
                    <p className="text-gray-600">M. Arch. (Ranchana Sansad College of Architecture, Mumbai)</p>
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <h4 className="font-semibold text-gray-900 mb-3">Registration</h4>
                  <p className="text-gray-600">Council of Architecture, New Delhi</p>
                  <p className="text-gray-600">CA/2010/49526</p>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <h4 className="font-semibold text-gray-900 mb-3">Specializations</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm">Architecture</span>
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Environmental Planning</span>
                    <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">Urban Planning</span>
                    <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">Landscape Design</span>
                    <span className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm">Conservation</span>
                    <span className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm">Interior Design</span>
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <h4 className="font-semibold text-gray-900 mb-3">Current Projects</h4>
                  <p className="text-gray-600">14 Ongoing Projects</p>
                  <p className="text-gray-600 text-sm mt-2">Spanning residential, commercial, and urban planning initiatives</p>
                </div>
                
                <div className="bg-gradient-to-r from-yellow-500 to-orange-500 p-6 rounded-xl text-white">
                  <h4 className="font-semibold mb-3">Contact Directly</h4>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <Phone className="h-4 w-4 mr-2" />
                      <span>+91 9637777384</span>
                    </div>
                    <div className="flex items-center">
                      <Mail className="h-4 w-4 mr-2" />
                      <span>rectanglearchitect@gmail.com</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className={`transform transition-all duration-1000 ${
              isVisible ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'
            }`}>
              <div className="mb-10">
                <span className="text-yellow-500 font-semibold text-lg tracking-wide uppercase">Start Your Project</span>
                <h2 className="text-4xl font-bold text-gray-900 mt-4 mb-6">Let's Build Something Amazing</h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Tell us about your vision and we'll help bring it to life with our expertise and creativity.
                </p>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="relative">
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-3">
                      Full Name *
                    </label>
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-2xl focus:ring-yellow-500 focus:border-yellow-500 transition-all duration-300 transform focus:scale-105"
                        placeholder="Your full name"
                      />
                    </div>
                  </div>
                  
                  <div className="relative">
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-3">
                      Email Address *
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-2xl focus:ring-yellow-500 focus:border-yellow-500 transition-all duration-300 transform focus:scale-105"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="relative">
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-3">
                      Phone Number
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-2xl focus:ring-yellow-500 focus:border-yellow-500 transition-all duration-300 transform focus:scale-105"
                        placeholder="+91 9876543210"
                      />
                    </div>
                  </div>
                  
                  <div className="relative">
                    <label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-3">
                      Company/Organization
                    </label>
                    <div className="relative">
                      <Building className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-2xl focus:ring-yellow-500 focus:border-yellow-500 transition-all duration-300 transform focus:scale-105"
                        placeholder="Your company name"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <label htmlFor="projectType" className="block text-sm font-semibold text-gray-700 mb-3">
                      Project Type *
                    </label>
                    <select
                      id="projectType"
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-4 border border-gray-300 rounded-2xl focus:ring-yellow-500 focus:border-yellow-500 transition-all duration-300 transform focus:scale-105"
                    >
                      <option value="">Select type</option>
                      {projectTypes.map((type) => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="budget" className="block text-sm font-semibold text-gray-700 mb-3">
                      Budget Range
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className="w-full px-4 py-4 border border-gray-300 rounded-2xl focus:ring-yellow-500 focus:border-yellow-500 transition-all duration-300 transform focus:scale-105"
                    >
                      <option value="">Select budget</option>
                      {budgetRanges.map((range) => (
                        <option key={range} value={range}>{range}</option>
                      ))}
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="timeline" className="block text-sm font-semibold text-gray-700 mb-3">
                      Timeline
                    </label>
                    <select
                      id="timeline"
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleInputChange}
                      className="w-full px-4 py-4 border border-gray-300 rounded-2xl focus:ring-yellow-500 focus:border-yellow-500 transition-all duration-300 transform focus:scale-105"
                    >
                      <option value="">Select timeline</option>
                      {timelines.map((time) => (
                        <option key={time} value={time}>{time}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-3">
                    Project Details *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-4 border border-gray-300 rounded-2xl focus:ring-yellow-500 focus:border-yellow-500 transition-all duration-300 transform focus:scale-105"
                    placeholder="Tell us about your project vision, requirements, specific needs, and any other details that would help us understand your goals..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting || isSubmitted}
                  className={`group w-full md:w-auto inline-flex items-center justify-center px-12 py-6 font-bold rounded-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-1 shadow-2xl relative overflow-hidden ${
                    isSubmitted 
                      ? 'bg-green-500 text-white' 
                      : isSubmitting 
                        ? 'bg-gray-400 text-white cursor-not-allowed' 
                        : 'bg-gradient-to-r from-yellow-500 to-yellow-600 text-black hover:from-yellow-400 hover:to-yellow-500 hover:shadow-yellow-500/25'
                  }`}
                >
                  <span className="relative z-10 flex items-center">
                    {isSubmitted ? (
                      <>
                        <CheckCircle className="mr-3 h-6 w-6" />
                        Message Sent!
                      </>
                    ) : isSubmitting ? (
                      <>
                        <div className="mr-3 h-6 w-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="mr-3 h-6 w-6 group-hover:translate-x-1 transition-transform duration-300" />
                        Send Message
                      </>
                    )}
                  </span>
                  {!isSubmitting && !isSubmitted && (
                    <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent transform -skew-x-12 translate-x-full group-hover:translate-x-[-200%] transition-transform duration-700" />
                  )}
                </button>
              </form>
            </div>

            {/* Map & Additional Info */}
            <div className={`space-y-10 transform transition-all duration-1000 delay-500 ${
              isVisible ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'
            }`}>
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Visit Our Offices</h2>
                <div className="bg-gradient-to-br from-gray-200 to-gray-300 rounded-3xl h-80 flex items-center justify-center shadow-xl relative overflow-hidden group">
                  <div className="text-center text-gray-600">
                    <MapPin className="h-16 w-16 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                    <p className="text-xl font-semibold mb-2">Our Locations</p>
                    <p className="text-sm">Dhule, Maharashtra</p>
                    <p className="text-sm">Navi Mumbai, Maharashtra</p>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </div>

              <div className="bg-white p-10 rounded-3xl shadow-xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">What to Expect</h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-3 h-3 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700 leading-relaxed">Initial consultation to understand your vision and requirements</p>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-3 h-3 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700 leading-relaxed">Site analysis and feasibility assessment</p>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-3 h-3 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700 leading-relaxed">Customized proposal with timeline and budget</p>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-3 h-3 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700 leading-relaxed">Collaborative design process with regular updates</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-yellow-50 to-orange-50 p-10 rounded-3xl border-2 border-yellow-200 shadow-xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Ready to Get Started?</h3>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  We typically respond to all inquiries within 24 hours. For urgent matters, 
                  don't hesitate to call us directly at +91 9637777384.
                </p>
                <p className="text-sm text-gray-600">
                  * Required fields. Your information is secure and will never be shared with third parties.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;