'use client';

import React, { useState } from "react";

// Unified Color Palette - Adjusted to match the screenshot colors
const PRIMARY_GREEN = "bg-[#079764]";           // Navbar, buttons
const PRIMARY_GREEN_HOVER = "hover:bg-[#17a24a]";
const TEXT_GREEN = "text-[#079764]";            // Headings, stats
const HERO_OVERLAY = "bg-[#079764]";            // Hero overlay (used for the green tint on the background image)
const LIGHT_BG = "bg-green-50";                 // Section backgrounds (Used bg-green-50 to match the light green tint in the screenshots)
const DARK_FOOTER_BG = "bg-gray-900";           // Footer (Matches the dark footer from the previous component)

// NEW Hero Image URL for the Join Team page - This image closely matches the screenshot's aesthetic
const HERO_IMAGE_URL = "https://plus.unsplash.com/premium_photo-1664302675980-74391b8023b5?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8emVicmF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=900";


// Data for the "Why Volunteer?" section
const volunteerBenefits = [
    "Make a real impact on wildlife conservation",
    "Gain hands-on experience with endangered species",
    "Join a passionate community of conservationists",
    "Receive professional training and certification",
];


function JoinTeamPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="font-sans text-gray-800">
      {/* NAVBAR - Copied from BlogPage */}
      <header className={`${PRIMARY_GREEN} text-white fixed w-full top-0 z-50 shadow`}>
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOChUt6KtLSSldcH4q44e6bIGAzLJY-GPjbg&s"
              alt="WildGuard Logo"
              className="w-10 h-10 rounded-full"
            />
            <h1 className="text-2xl font-bold ml-2">WildGuard</h1>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-8 text-lg">
          <a href="/" className="hover:text-green-200 transition">Home</a>
            <a href="wildLife" className="hover:text-green-200 transition">Wildlife</a>
            <a href="join" className="hover:text-green-200 transition">Join team</a>
            <a href="program" className="hover:text-green-200 transition">Program</a>
            <a href="contact" className="hover:text-green-200 transition">Contact</a>
            {/* Link to the BlogPage section */}
            <a href="blog" className="hover:text-green-200 transition font-semibold border-b-2 border-transparent hover:border-white">Blog</a>
          </nav>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col justify-between w-6 h-5 focus:outline-none"
          >
            <span
              className={`h-0.5 w-full bg-white rounded transition-transform duration-300 ${
                menuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            ></span>
            <span
              className={`h-0.5 w-full bg-white rounded transition-opacity duration-300 ${
                menuOpen ? "opacity-0" : "opacity-100"
              }`}
            ></span>
            <span
              className={`h-0.5 w-full bg-white rounded transition-transform duration-300 ${
                menuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            ></span>
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-[#17a24a] px-6 pb-4 space-y-3">
            <a href="#" className="block hover:text-white">Wildlife</a>
            <a href="#" className="block font-bold text-white">Join team</a>
            <a href="#" className="block hover:text-white">Program</a>
            <a href="#" className="block hover:text-white">Contact</a>
            <a href="#" className="block hover:text-white">Blog</a>
          </div>
        )}
      </header>
      
      {/* Hero Section - Matching the screenshot's green overlay and background image */}
      <section
        className="relative pt-32 pb-24 md:pt-48 md:pb-36 flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: `url('${HERO_IMAGE_URL}')`,
        }}
      >
        {/* Dark Green Overlay for the screenshot's distinct color effect */}
        <div className={`absolute inset-0 ${HERO_OVERLAY} opacity-90`}></div>

        <div className="relative text-center text-white px-6 max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-3">
            Be The Change Wildlife Needs
          </h1>
          <p className="text-lg md:text-xl font-light">
            Every volunteer makes a difference
          </p>
        </div>
      </section>

      {/* Main Content Section - Application Form and Benefits */}
      <section className={`py-16 md:py-24 ${LIGHT_BG}`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-12">
            
            {/* Left Column: Volunteer Application Form (2/3 width) */}
            <div className="lg:col-span-2 bg-white p-8 md:p-10 rounded-xl shadow-lg">
              <h2 className="text-2xl font-bold mb-6 text-gray-900">Volunteer Application</h2>

              <form className="space-y-6">
                
                {/* First Name / Last Name */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <FormInput label="First Name" id="firstName" placeholder="John" required />
                  <FormInput label="Last Name" id="lastName" placeholder="Doe" required />
                </div>

                {/* Email / Phone */}
                <FormInput label="Email" id="email" type="email" placeholder="john@example.com" required />
                <FormInput label="Phone" id="phone" type="tel" placeholder="+1 (555) 000-0000" />
                
                {/* Area of Interest */}
                <div>
                  <label htmlFor="interest" className="block text-sm font-medium text-gray-700 mb-1">
                    Area of Interest
                  </label>
                  <select
                    id="interest"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500 transition duration-150"
                  >
                    <option>Select your interest</option>
                    <option>Field Research</option>
                    <option>Community Outreach</option>
                    <option>Administration/Support</option>
                    <option>Education Programs</option>
                  </select>
                </div>

                {/* About Yourself */}
                <div>
                  <label htmlFor="about" className="block text-sm font-medium text-gray-700 mb-1">
                    Tell us about yourself
                  </label>
                  <textarea
                    id="about"
                    rows="4"
                    placeholder="Share your passion for wildlife..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500 transition duration-150"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className={`w-full text-white font-semibold py-3 rounded-lg text-lg transition duration-300 
                    bg-gradient-to-r from-[#17a24a] to-[#079764] hover:from-[#079764] hover:to-[#17a24a]`}
                >
                  Submit Application
                </button>
              </form>
            </div>

            {/* Right Column: Why Volunteer & Stats (1/3 width) */}
            <div className="lg:col-span-1 space-y-8">
              
              {/* Why Volunteer Card */}
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className={`text-xl font-bold mb-4 ${TEXT_GREEN}`}>Why Volunteer?</h3>
                <ul className="space-y-4">
                  {volunteerBenefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <svg className={`w-5 h-5 mr-2 mt-1 ${TEXT_GREEN} flex-shrink-0`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Stats Card */}
              <div className={`bg-white p-8 rounded-xl shadow-lg border-t-4 border-green-300`}>
                <h3 className={`text-4xl font-extrabold mb-2 ${TEXT_GREEN}`}>10,000+</h3>
                <p className="text-lg font-semibold text-gray-700 mb-3">Volunteers</p>
                <p className="text-sm text-gray-500">
                    Join a growing community making a real difference worldwide.
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>


      {/* FOOTER - Copied from BlogPage */}
      <footer className={`${DARK_FOOTER_BG} text-gray-300 py-12`}>
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOChUt6KtLSSldcH4q44e6bIGAzLJY-GPjbg&s"
                alt="WildGuard Logo"
                className="w-8 h-8 rounded-full"
              />
              <h3 className="text-xl font-bold text-white ml-2">WildGuard</h3>
            </div>
            <p className="text-sm">
              Dedicated to protecting endangered wildlife and preserving natural habitats for future generations.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {['Wildlife', 'Programs', 'Join Our Team', 'Contact', 'Blog'].map((link) => (
                <li key={link}>
                  <a href="#" className="hover:text-white transition">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-semibold text-white mb-4">Subscribe to Newsletter</h4>
            <form className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-lg bg-gray-700 text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#079764]"
              />
              <button
                className={`${PRIMARY_GREEN} text-white px-6 py-2 rounded-lg ${PRIMARY_GREEN_HOVER} transition`}
              >
                Subscribe
              </button>
            </form>

            <div className="flex space-x-4 mt-6">
              {/* Social Icons (Twitter, GitHub) */}
              <a href="#" className="text-gray-400 hover:text-white">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.46 6c-.77.35-1.6.58-2.46.69a4.28 4.28 0 0 0 1.88-2.36 8.51 8.51 0 0 1-2.71 1.04 4.25 4.25 0 0 0-7.25 3.88A12.07 12.07 0 0 1 3.15 4.5a4.25 4.25 0 0 0 1.31 5.68c-.71 0-1.38-.21-1.96-.52v.06a4.26 4.26 0 0 0 3.41 4.17c-.71.19-1.46.22-2.22.08a4.27 4.27 0 0 0 3.97 2.96A8.53 8.53 0 0 1 2 19.54a12.06 12.06 0 0 0 6.52 1.91c7.82 0 12.1-6.48 12.1-12.1 0-.18-.01-.37-.02-.55A8.66 8.66 0 0 0 24 4.56a8.4 8.4 0 0 1-2.54.7 4.25 4.25 0 0 0 1.88-2.36z" />
                </svg>
              </a>

              <a href="#" className="text-gray-400 hover:text-white">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.04c-5.5 0-9.96 4.46-9.96 9.96 0 4.41 2.86 8.15 6.84 9.49.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.71-2.78.6-3.36-1.34-3.36-1.34-.45-1.15-1.1-1.45-1.1-1.45-.9-.62 0-.62 0-.62 1 .07 1.53 1.03 1.53 1.03 .89 1.52 2.34 1.08 2.91.83 .09-.65 .35-1.08 .63-1.33-2.22-.25-4.56-1.11-4.56-4.95 0-1.09 .39-1.98 1.03-2.68-.1-.25-.45-1.27 .1-2.65 0 0 .84-.27 2.75 1.02a9.56 9.56 0 0 1 2.5-.34c.85.01 1.71.12 2.5.34 1.91-1.29 2.75-1.02 2.75-1.02 .55 1.38 .2 2.4 .1 2.65 .64.7 1.03 1.59 1.03 2.68 0 3.85-2.34 4.7-4.57 4.95 .36 .31 .68 0 .68 1.81 0 1.31-.01 2.36-.01 2.68 0 .26 .18 .57 .69 .48 3.98-1.34 6.83-5.08 6.83-9.49 0-5.5-4.46-9.96-9.96-9.96z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 text-center text-xs">
          © 2025 WildGuard Conservation. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

// Helper component for form inputs to keep the main component clean
const FormInput = ({ label, id, type = 'text', placeholder, required = false }) => (
    <div>
        <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-1">
            {label} {required && <span className={`${TEXT_GREEN}`}>*</span>}
        </label>
        <input
            type={type}
            id={id}
            required={required}
            placeholder={placeholder}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500 transition duration-150"
        />
    </div>
);

export default JoinTeamPage;