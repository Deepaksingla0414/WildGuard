'use client';

import React, { useState } from "react";

// Unified Color Palette - Defined globally for both Home and BlogPage components
const PRIMARY_GREEN = "bg-[#079764]";           // Navbar, buttons
const PRIMARY_GREEN_HOVER = "hover:bg-[#17a24a]";
const TEXT_GREEN = "text-[#079764]";            // Headings, stats
const HERO_OVERLAY = "bg-[#079764]";            // Hero overlay
const LIGHT_BG = "bg-green-50";                 // Section backgrounds
const DARK_FOOTER_BG = "bg-gray-800";           // Footer
const GRADIENT_START = "from-[#17a24a]";        // Gradient start


// ------------------------------------------------------------------
// BlogPage Component - Defined here for single-file structure
// ------------------------------------------------------------------
const BlogPage = () => {
    // Mock blog data
    const blogPosts = [
        {
            id: 1,
            title: "Success: Rhino Poaching Down 40%",
            summary: "An in-depth look at the advanced surveillance techniques and community patrols that led to a significant drop in illegal poaching activities.",
            date: "October 15, 2024",
            imageUrl: "https://images.unsplash.com/photo-1598471191590-f947116631b0?auto=format&fit=crop&q=80&w=600",
            category: "Anti-Poaching",
        },
        {
            id: 2,
            title: "Restoring the Wetlands: A Bird's Paradise",
            summary: "Our latest habitat restoration project has transformed 500 acres of degraded land into thriving wetlands, welcoming dozens of migratory bird species.",
            date: "September 28, 2024",
            imageUrl: "https://images.unsplash.com/photo-1550868848-18e001c4c114?auto=format&fit=crop&q=80&w=600",
            category: "Habitat",
        },
        {
            id: 3,
            title: "The Role of Drones in Wildlife Monitoring",
            summary: "How drone technology is revolutionizing data collection, allowing us to track populations, monitor health, and respond faster to emergencies.",
            date: "September 1, 2024",
            imageUrl: "https://images.unsplash.com/photo-1589178971842-8c9f592679c2?auto=format&fit=crop&q=80&w=600",
            category: "Technology",
        },
    ];

    return (
        <section className={`py-20 ${LIGHT_BG}`}>
            <div className="max-w-7xl mx-auto px-6">
                {/* Title Section */}
                <h2 className={`text-5xl font-extrabold text-center ${TEXT_GREEN} mb-4`}>
                    From Our Blog
                </h2>
                <p className="text-xl text-gray-600 text-center mb-16">
                    Stay updated with our conservation triumphs, research, and community news.
                </p>

                {/* Blog Post Grid */}
                <div className="grid md:grid-cols-3 gap-10">
                    {blogPosts.map(post => (
                        <div key={post.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition duration-300 overflow-hidden group">
                            <img
                                src={post.imageUrl}
                                alt={post.title}
                                className="w-full h-56 object-cover transform group-hover:scale-105 transition duration-500"
                                onError={(e) => e.target.src = 'https://placehold.co/600x400/079764/ffffff?text=Image+Missing'}
                            />
                            <div className="p-6">
                                <span className={`${TEXT_GREEN} text-xs font-semibold uppercase tracking-wider mb-2 block`}>
                                    {post.category}
                                </span>
                                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-[#17a24a] transition">
                                    {post.title}
                                </h3>
                                <p className="text-gray-600 mb-4 line-clamp-3">
                                    {post.summary}
                                </p>
                                <div className="flex justify-between items-center text-sm text-gray-500">
                                    <span>{post.date}</span>
                                    <a href="#" className={`${TEXT_GREEN} font-semibold flex items-center hover:text-[#17a24a]`}>
                                        Read More
                                        <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

// ------------------------------------------------------------------
// Home Component - The main application export
// ------------------------------------------------------------------
function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="font-sans text-gray-800">
      {/* NAVBAR - Primary Green #079764 */}
      <header className={`${PRIMARY_GREEN} text-white fixed w-full top-0 z-50 shadow`}>
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOChUt6KtLSSldcH4q44e6bIGAzLJY-GPjbg&s"
              alt="WildGuard Logo"
              className="w-10 h-10 rounded-full"
              onError={(e) => e.target.src = 'https://placehold.co/40x40/ffffff/079764?text=WG'}
            />
          <a href="/">  <h1 className="text-2xl font-bold ml-2">WildGuard</h1></a>
          </div>

          {/* Desktop Menu - UPDATED BLOG LINK */}
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

        {/* Mobile Menu - UPDATED BLOG LINK */}
        {menuOpen && (
          <div className="md:hidden bg-[#17a24a] px-6 pb-4 space-y-3">
            <a href="/" className="block hover:text-white">Home</a>
            <a href="wildLife" className="block hover:text-white">Wildlife</a>
        
            <a href="join" className="block hover:text-white">Join team</a>
            <a href="program" className="block hover:text-white">Program</a>
            <a href="Contact" className="block hover:text-white">Contact</a>
            <a href="blog" className="block hover:text-white">Blog</a>
          </div>
        )}
      </header>

      {/* HERO SECTION */}
      <section
        className="relative flex items-center justify-center h-screen bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1508672019048-805c876b67e2?auto=format&fit=crop&w=1600&q=80')",
        }}
      >
        <div className={`absolute inset-0 ${HERO_OVERLAY} opacity-60`}></div>

        <div className="relative text-center text-white px-6 max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4">
            Protecting Wildlife, <br /> Preserving Nature
          </h1>
          <p className="text-lg md:text-xl mb-8">
            Join us in our mission to conserve endangered species and restore natural habitats.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              className={`bg-white ${TEXT_GREEN} font-semibold px-6 py-3 rounded-lg ${PRIMARY_GREEN_HOVER} transition shadow-md`}
            >
              Join Our Team
            </button>
            <button
              className={`border-2 border-white text-white font-semibold px-6 py-3 rounded-lg hover:bg-white hover:${TEXT_GREEN} transition shadow-md`}
            >
              Explore Wildlife
            </button>
          </div>
        </div>
      </section>

      {/* ABOUT OUR INITIATIVES */}
      <section className={`py-20 bg-gradient-to-b from-white to-green-50`}>
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <img
            src="https://images.unsplash.com/photo-1689534155125-cf64498fe17d?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=2070"
            alt="Rhino close-up"
            className="rounded-xl shadow-lg w-full object-cover"
            onError={(e) => e.target.src = 'https://placehold.co/1000x600/079764/ffffff?text=Habitat+Restoration'}
          />

          <div>
            <h2 className={`text-4xl font-bold ${TEXT_GREEN} mb-6`}>
              About Our Initiatives
            </h2>
            <p className="text-lg text-gray-700 mb-4">
              Our conservation initiatives focus on protecting endangered species through habitat restoration, anti-poaching efforts, and community education programs.
            </p>
            <p className="text-lg text-gray-700 mb-8">
              Since our founding, we’ve successfully rescued thousands of animals and restored critical habitats.
            </p>

            <div className="flex gap-6">
              <div className="bg-green-100 rounded-lg p-4 flex-1 text-center shadow">
                <p className={`text-3xl font-bold ${TEXT_GREEN}`}>15,000+</p>
                <p className="text-sm text-gray-600">Acres Protected</p>
              </div>
              <div className="bg-green-100 rounded-lg p-4 flex-1 text-center shadow">
                <p className={`text-3xl font-bold ${TEXT_GREEN}`}>50,000+</p>
                <p className="text-sm text-gray-600">Trees Planted</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OUR IMPACT IN NUMBERS */}
      <section className={`py-20 ${LIGHT_BG}`}>
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className={`text-4xl font-bold ${TEXT_GREEN} mb-4`}>
            Our Impact in Numbers
          </h2>
          <p className="text-lg text-gray-700 mb-12">
            Every year, we make significant strides in wildlife conservation.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1603039529403-6ec390efcf4e?auto=format&fit=crop&q=80&w=1674"
                alt="Rescued tiger"
                className="w-full h-48 object-cover"
                onError={(e) => e.target.src = 'https://placehold.co/600x400/079764/ffffff?text=Rescued+Animals'}
              />
              <div className="p-6">
                <p className={`text-4xl font-bold ${TEXT_GREEN}`}>1,245</p>
                <p className="text-xl font-semibold text-gray-800">Animals Rescued</p>
                <p className="text-sm text-gray-600 mt-2">
                  Wildlife rescued and rehabilitated this year
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1699123401583-79138619c3a4?auto=format&fit=crop&q=60&w=900"
                alt="Animal in cage"
                className="w-full h-48 object-cover"
                onError={(e) => e.target.src = 'https://placehold.co/600x400/079764/ffffff?text=Released+Animals'}
              />
              <div className="p-6">
                <p className={`text-4xl font-bold ${TEXT_GREEN}`}>850</p>
                <p className="text-xl font-semibold text-gray-800">Animals Released</p>
                <p className="text-sm text-gray-600 mt-2">
                  Successfully returned to natural habitat
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="bg-green-100 p-6">
                <p className={`text-4xl font-bold ${TEXT_GREEN}`}>10,000+</p>
                <p className="text-xl font-semibold text-gray-800">Volunteers Joined</p>
                <p className="text-sm text-gray-600 mt-2">
                  Passionate individuals contributing to conservation
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CALL-TO-ACTION */}
      <section className={`py-20 bg-gradient-to-r ${GRADIENT_START} to-[#079764] text-white text-center`}>
        <h2 className="text-4xl font-bold mb-4">Make a Difference Today</h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto">
          Your support helps us protect endangered species and preserve natural habitats.
        </p>
        <button
          className={`bg-white ${TEXT_GREEN} font-semibold px-8 py-3 rounded-full ${PRIMARY_GREEN_HOVER} transition shadow-lg hover:shadow-xl`}
        >
          Become a Volunteer
        </button>
      </section>

      

      {/* FOOTER */}
      <footer className={`${DARK_FOOTER_BG} text-gray-300 py-12`}>
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOChUt6KtLSSldcH4q44e6bIGAzLJY-GPjbg&s"
                alt="WildGuard Logo"
                className="w-8 h-8 rounded-full"
                onError={(e) => e.target.src = 'https://placehold.co/40x40/ffffff/079764?text=WG'}
              />
              <h3 className="text-xl font-bold text-white ml-2">WildGuard</h3>
            </div>
            <p className="text-sm">
              Dedicated to protecting endangered wildlife and preserving natural habitats for future generations.
            </p>
            <p className="text-sm mt-2 text-gray-500">
              <a href="https://unsplash.com/photos/a-rhino-and-its-baby-standing-in-a-field-h6qN3_g7T_Y" target="_blank" rel="noopener noreferrer">Rhino Photo by Sacha V.</a>
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {['Wildlife', 'Programs', 'Join Our Team', 'Contact', 'Blog'].map((link) => (
                <li key={link}>
                  <a href={link === 'Blog' ? '#blog-section' : '#'} className="hover:text-white transition">{link}</a>
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
              {/* Twitter */}
              <a href="#" className="text-gray-400 hover:text-white">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.46 6c-.77.35-1.6.58-2.46.69a4.28 4.28 0 0 0 1.88-2.36 8.51 8.51 0 0 1-2.71 1.04 4.25 4.25 0 0 0-7.25 3.88A12.07 12.07 0 0 1 3.15 4.5a4.25 4.25 0 0 0 1.31 5.68c-.71 0-1.38-.21-1.96-.52v.06a4.26 4.26 0 0 0 3.41 4.17c-.71.19-1.46.22-2.22.08a4.27 4.27 0 0 0 3.97 2.96A8.53 8.53 0 0 1 2 19.54a12.06 12.06 0 0 0 6.52 1.91c7.82 0 12.1-6.48 12.1-12.1 0-.18-.01-.37-.02-.55A8.66 8.66 0 0 0 24 4.56a8.4 8.4 0 0 1-2.54.7 4.25 4.25 0 0 0 1.88-2.36z" />
                </svg>
              </a>

              {/* GitHub */}
              <a href="#" className="text-gray-400 hover:text-white">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.04c-5.5 0-9.96 4.46-9.96 9.96 0 4.41 2.86 8.15 6.84 9.49.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.71-2.78.6-3.36-1.34-3.36-1.34-.45-1.15-1.1-1.45-1.1-1.45-.9-.62 0-.62 0-.62 1 .07 1.53 1.03 1.53 1.03 .89 1.52 2.34 1.08 2.91.83 .09-.65 .35-1.08 .63-1.33-2.22-.25-4.56-1.11-4.56-4.95 0-1.09 .39-1.98 1.03-2.68-.1-.25-.45-1.27 .1-2.65 0 0 .84-.27 2.75 1.02a9.56 9.56 0 0 1 2.5-.34c.85.01 1.71.12 2.5.34 1.91-1.29 2.75-1.02 2.75-1.02 .55 1.38 .2 2.4 .1 2.65 .64.7 1.03 1.59 1.03 2.68 0 3.85-2.34 4.7-4.57 4.95 .36 .31 .68 0 .68 1.81 0 1.31-.01 2.36-.01 2.68 0 .26 .18 .57 .69 .48 3.98-1.34 6.83-5.08 6.83-9.49 0-5.5-4.46-9.96-9.96-9.96z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 text-center text-xs">a
          © 2025 WildGuard Conservation. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default Home;
