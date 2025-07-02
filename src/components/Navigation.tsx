import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Square } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Team", path: "/team" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-1000 ease-out ${scrolled
          ? "bg-white/90 backdrop-blur-2xl shadow-2xl border-b border-gray-100/50"
          : "bg-gradient-to-b from-black/40 via-black/20 to-transparent backdrop-blur-sm"
        }`}
    >
      {/* Premium glass effect overlay */}
      <div
        className={`absolute inset-0 transition-all duration-1000 ${scrolled
            ? "bg-gradient-to-r from-white/95 via-white/90 to-white/95"
            : "bg-gradient-to-r from-black/30 via-black/10 to-black/30"
          }`}
      />

      {/* Animated border */}
      <div
        className={`absolute bottom-0 left-0 right-0 h-px transition-all duration-1000 ${scrolled
            ? "bg-gradient-to-r from-transparent via-yellow-500/50 to-transparent"
            : "bg-gradient-to-r from-transparent via-white/20 to-transparent"
          }`}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center space-x-3 group relative z-10"
          >
            <div className="relative">
              {/* Main logo icon */}
              <img
                src="/logo.jpg"
                alt="Logo"
                className={`h-12 w-12 transition-all duration-700 transform group-hover:rotate-45 group-hover:scale-110  group-hover:filter-none group-hover:drop-shadow-lg`}
              />

              {/* Animated border effect */}
              <div
                className={`absolute inset-0 h-12 w-12 border-2 transition-all duration-1000 transform scale-0 group-hover:scale-125 opacity-0 group-hover:opacity-100 rounded-lg ${scrolled ? "border-yellow-500" : "border-yellow-400"
                  }`}
              />

              {/* Glow effect */}
              <div
                className={`absolute inset-0 h-12 w-12 transition-all duration-700 transform scale-0 group-hover:scale-150 opacity-0 group-hover:opacity-30 rounded-lg blur-md ${scrolled ? "bg-yellow-500" : "bg-yellow-400"
                  }`}
              />
            </div>

            <div className="flex flex-col">
              <span
                className={`text-2xl font-bold transition-all duration-700 ${scrolled ? "text-gray-900" : "text-white"
                  } group-hover:text-yellow-500 drop-shadow-lg`}
              >
                Rectangle
              </span>
              <span
                className={`text-sm font-light -mt-1 transition-all duration-700 ${scrolled ? "text-gray-600" : "text-gray-300"
                  } group-hover:text-yellow-600 drop-shadow-md`}
              >
                Architects
              </span>
            </div>

            {/* Logo background glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 rounded-2xl transform scale-0 group-hover:scale-100 transition-transform duration-700 opacity-0 group-hover:opacity-100 blur-xl" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-2 relative z-10">
            {navItems.map((item, index) => (
              <Link
                key={item.name}
                to={item.path}
                className={`relative px-6 py-3 text-sm font-semibold transition-all duration-700 transform hover:scale-105 ${location.pathname === item.path
                    ? scrolled
                      ? "text-yellow-600"
                      : "text-yellow-400"
                    : scrolled
                      ? "text-gray-700 hover:text-yellow-600"
                      : "text-white hover:text-yellow-400"
                  } group overflow-hidden rounded-xl backdrop-blur-sm`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <span className="relative z-10 drop-shadow-sm">
                  {item.name}
                </span>

                {/* Active/Hover background with glass effect */}
                <div
                  className={`absolute inset-0 transform transition-all duration-700 ${location.pathname === item.path
                      ? scrolled
                        ? "bg-gradient-to-r from-yellow-500/20 via-yellow-400/15 to-yellow-500/20 scale-100 backdrop-blur-md"
                        : "bg-gradient-to-r from-white/20 via-white/15 to-white/20 scale-100 backdrop-blur-md"
                      : scrolled
                        ? "bg-gradient-to-r from-yellow-500/10 via-yellow-400/5 to-yellow-500/10 scale-0 group-hover:scale-100 backdrop-blur-md"
                        : "bg-gradient-to-r from-white/10 via-white/5 to-white/10 scale-0 group-hover:scale-100 backdrop-blur-md"
                    } rounded-xl border border-white/10`}
                />

                {/* Bottom border animation */}
                <span
                  className={`absolute bottom-0 left-0 w-full h-1 transform origin-left transition-all duration-700 ${location.pathname === item.path
                      ? "bg-gradient-to-r from-yellow-500 to-yellow-400 scale-x-100"
                      : "bg-gradient-to-r from-yellow-500 to-yellow-400 scale-x-0 group-hover:scale-x-100"
                    } rounded-full`}
                />

                {/* Shimmer effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 translate-x-full group-hover:translate-x-[-200%] transition-transform duration-1500" />
                </div>

                {/* Glow effect */}
                <div
                  className={`absolute inset-0 opacity-0 group-hover:opacity-50 transition-all duration-700 transform scale-0 group-hover:scale-110 rounded-xl blur-lg ${scrolled ? "bg-yellow-500/20" : "bg-white/20"
                    }`}
                />
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden p-4 rounded-2xl transition-all duration-700 transform hover:scale-110 ${scrolled
                ? "text-gray-900 hover:bg-gray-100/80"
                : "text-white hover:bg-white/10"
              } group relative overflow-hidden backdrop-blur-sm border border-white/10 z-10`}
          >
            <div className="relative z-10">
              {isOpen ? (
                <X className="h-6 w-6 transform transition-transform duration-500 rotate-0 group-hover:rotate-90" />
              ) : (
                <Menu className="h-6 w-6 transform transition-transform duration-500 group-hover:scale-110" />
              )}
            </div>

            {/* Button background effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 transform scale-0 group-hover:scale-100 transition-transform duration-500 rounded-2xl" />

            {/* Button glow */}
            <div
              className={`absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-500 rounded-2xl blur-md ${scrolled ? "bg-yellow-500" : "bg-white"
                }`}
            />
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden transition-all duration-700 ease-out ${isOpen
              ? "max-h-96 opacity-100 translate-y-0"
              : "max-h-0 opacity-0 -translate-y-4"
            } overflow-hidden relative z-10`}
        >
          <div className="bg-white/95 backdrop-blur-2xl rounded-3xl mt-4 mb-4 shadow-2xl border border-gray-100/50 overflow-hidden">
            {/* Mobile menu background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/90 via-white/95 to-white/90" />

            <div className="px-6 py-8 space-y-3 relative">
              {navItems.map((item, index) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-6 py-4 rounded-2xl text-base font-semibold transition-all duration-700 transform hover:scale-105 hover:translate-x-2 ${location.pathname === item.path
                      ? "text-yellow-600 bg-gradient-to-r from-yellow-50 via-yellow-25 to-yellow-50 shadow-lg border border-yellow-200/50"
                      : "text-gray-700 hover:text-yellow-600 hover:bg-gradient-to-r hover:from-yellow-50 hover:to-orange-50"
                    } group relative overflow-hidden backdrop-blur-sm`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <span className="relative z-10">{item.name}</span>

                  {/* Mobile item background effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-700 rounded-2xl" />

                  {/* Mobile item glow */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 bg-yellow-500 rounded-2xl blur-lg" />
                </Link>
              ))}
            </div>

            {/* Mobile menu bottom accent */}
            <div className="h-1 bg-gradient-to-r from-yellow-500 via-yellow-400 to-orange-500" />
          </div>
        </div>
      </div>

      {/* Header shadow effect */}
      <div
        className={`absolute inset-x-0 bottom-0 h-20 transition-all duration-1000 ${scrolled
            ? "bg-gradient-to-b from-transparent to-gray-900/5 opacity-100"
            : "opacity-0"
          }`}
      />
    </nav>
  );
};

export default Navigation;
