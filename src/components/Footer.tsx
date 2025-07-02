import React from "react";
import { Link } from "react-router-dom";
import {
  Square,
  MapPin,
  Phone,
  Mail,
  Clock,
  ArrowRight,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Team", path: "/team" },
    { name: "Contact", path: "/contact" },
  ];

  const services = [
    "Architectural Design",
    "Urban Planning",
    "Interior Design",
    "Sustainable Architecture",
    "Project Management",
    "Construction Consulting",
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Youtube, href: "#", label: "YouTube" },
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        />
      </div>

      <div className="relative">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <Link to="/" className="flex items-center space-x-3 group mb-8">
                <div className="relative">
                  <img
                    src="/logo.jpg"
                    alt="Logo"
                    className={`h-12 w-12 transition-all duration-700 transform group-hover:rotate-45 group-hover:scale-110 group-hover:filter-none group-hover:drop-shadow-lg`}
                  />
                  <div className="absolute inset-0 h-12 w-12 border-2 border-yellow-500 transition-all duration-700 transform scale-0 group-hover:scale-125 opacity-0 group-hover:opacity-100" />
                </div>
                <div className="flex flex-col">
                  <span className="text-2xl font-bold text-white group-hover:text-yellow-500 transition-colors duration-500">
                    Rectangle
                  </span>
                  <span className="text-sm font-light -mt-1 text-gray-300 group-hover:text-yellow-400 transition-colors duration-500">
                    Architects
                  </span>
                </div>
              </Link>

              <p className="text-gray-300 leading-relaxed mb-8 text-lg">
                Transforming visions into architectural masterpieces that define
                skylines and inspire communities through innovative design and
                sustainable practices.
              </p>

              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="group p-3 bg-gray-800 rounded-xl hover:bg-yellow-500 transition-all duration-500 transform hover:scale-110 hover:-translate-y-1 shadow-lg hover:shadow-yellow-500/25"
                  >
                    <social.icon className="h-5 w-5 text-gray-300 group-hover:text-black transition-colors duration-300" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-bold mb-8 text-yellow-500">
                Quick Links
              </h3>
              <ul className="space-y-4">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <Link
                      to={link.path}
                      className="group flex items-center text-gray-300 hover:text-yellow-400 transition-all duration-300 transform hover:translate-x-2"
                    >
                      <ArrowRight className="h-4 w-4 mr-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform -translate-x-2 group-hover:translate-x-0" />
                      <span className="group-hover:font-medium transition-all duration-300">
                        {link.name}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-xl font-bold mb-8 text-yellow-500">
                Our Services
              </h3>
              <ul className="space-y-4">
                {services.map((service, index) => (
                  <li
                    key={index}
                    className="text-gray-300 hover:text-yellow-400 transition-colors duration-300 cursor-pointer"
                  >
                    {service}
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-xl font-bold mb-8 text-yellow-500">
                Contact Info
              </h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-yellow-500 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-gray-300 leading-relaxed">
                      22, Shivaji Nagar, Sakri, 
                      <br />
                      Dist-Dhule, Maharashtra
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <Phone className="h-6 w-6 text-yellow-500 flex-shrink-0" />
                  <div>
                    <p className="text-gray-300">+91 9637777384</p>
                    <p className="text-gray-400 text-sm">Mon-Sat 9AM-7PM</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <Mail className="h-6 w-6 text-yellow-500 flex-shrink-0" />
                  <div>
                    <p className="text-gray-300">
                      rectanglearchitects@gmail.com
                    </p>
                    <p className="text-gray-400 text-sm">24/7 Support</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <Clock className="h-6 w-6 text-yellow-500 flex-shrink-0" />
                  <div>
                    <p className="text-gray-300">Mon-Fri: 9:00 AM - 7:00 PM</p>
                    <p className="text-gray-300">Sat: 10:00 AM - 4:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="border-t border-gray-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4 text-yellow-500">
                Stay Updated
              </h3>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                Subscribe to our newsletter for the latest architectural
                insights, project updates, and design trends.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-6 py-4 bg-gray-800 border border-gray-600 rounded-2xl text-white placeholder-gray-400 focus:ring-yellow-500 focus:border-yellow-500 transition-all duration-300"
                />
                <button className="px-8 py-4 bg-gradient-to-r from-yellow-500 to-yellow-600 text-black font-bold rounded-2xl hover:from-yellow-400 hover:to-yellow-500 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-yellow-500/25">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-gray-400 text-center md:text-left">
                <p>
                  &copy; {currentYear} Rectangle Architects. All rights
                  reserved.
                </p>
              </div>
              <div className="flex flex-wrap justify-center md:justify-end space-x-8 text-sm">
                <a
                  href="#"
                  className="text-gray-400 hover:text-yellow-400 transition-colors duration-300"
                >
                  Privacy Policy
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-yellow-400 transition-colors duration-300"
                >
                  Terms of Service
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-yellow-400 transition-colors duration-300"
                >
                  Cookie Policy
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-yellow-400 transition-colors duration-300"
                >
                  Sitemap
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
