import React, { useEffect, useState } from 'react';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') || 'home';
      setCurrentPage(hash);
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange(); // Initialize

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <div className="bg-black text-gray-300 font-lora min-h-screen overflow-hidden relative">
      {/* Animated Orbs */}
      <div className="fixed top-1/4 left-1/4 w-96 h-96 bg-orange-500 rounded-full filter blur-3xl opacity-20 animate-orbMove1 z-0"></div>
      <div className="fixed bottom-1/4 right-1/4 w-80 h-80 bg-blue-900 rounded-full filter blur-3xl opacity-20 animate-orbMove2 z-0"></div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-gray-800 px-6 py-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-xl md:text-2xl font-medium tracking-tight text-orange-400">Merangkai</h1>
          <ul className="flex space-x-6 text-sm uppercase tracking-wide">
            <li><a href="#home" className={currentPage === 'home' ? 'text-orange-400' : ''}>Home</a></li>
            <li><a href="#about" className={currentPage === 'about' ? 'text-orange-400' : ''}>About</a></li>
            <li><a href="#services" className={currentPage === 'services' ? 'text-orange-400' : ''}>Services</a></li>
            <li><a href="#cases" className={currentPage === 'cases' ? 'text-orange-400' : ''}>Cases</a></li>
            <li><a href="#team" className={currentPage === 'team' ? 'text-orange-400' : ''}>Team</a></li>
            <li><a href="#contact" className={currentPage === 'contact' ? 'text-orange-400' : ''}>Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Page Content */}
      <main className="relative z-10">
        {currentPage === 'home' && <HomePage />}
        {currentPage === 'about' && <AboutPage />}
        {currentPage === 'services' && <ServicesPage />}
        {currentPage === 'cases' && <CasesPage />}
        {currentPage === 'team' && <TeamPage />}
        {currentPage === 'contact' && <ContactPage />}
      </main>

      {/* Footer */}
      <footer className="py-10 px-6 border-t border-gray-800 text-center text-gray-600 text-sm mt-24">
        <p>&copy; 2025 Merangkai. All rights reserved.</p>
        <div className="mt-4 flex justify-center space-x-4">
          <a href="#" className="hover:text-orange-400 transition-colors">Instagram</a>
          <a href="#" className="hover:text-orange-400 transition-colors">LinkedIn</a>
        </div>
      </footer>

      {/* Global Styles */}
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel :wght@400;700&family=Lora&display=swap');

        .font-cinzel {
          font-family: 'Cinzel', serif;
        }

        .font-lora {
          font-family: 'Lora', serif;
        }

        @keyframes orbMove1 {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          50% {
            transform: translate(40px, -40px) scale(1.1);
          }
        }

        @keyframes orbMove2 {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          50% {
            transform: translate(-40px, 40px) scale(1.1);
          }
        }

        .animate-orbMove1 {
          animation: orbMove1 20s ease-in-out infinite;
        }

        .animate-orbMove2 {
          animation: orbMove2 25s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}

// Reusable Components
function CaseCard({ title, desc, img }) {
  return (
    <div className="group overflow-hidden rounded-md border border-gray-800 hover:border-orange-400 transition-all duration-300">
      <div className="overflow-hidden">
        <img
          src={img}
          alt={title}
          className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-6">
        <h3 className="font-cinzel text-xl text-white mb-2">{title}</h3>
        <p className="text-gray-400 text-sm">{desc}</p>
      </div>
    </div>
  );
}

// Individual Pages
function HomePage() {
  return (
    <section className="pt-32 pb-20 px-6 text-center">
      <div className="max-w-4xl mx-auto">
        <h1 className="font-cinzel text-4xl md:text-6xl leading-tight mb-6 text-white animate-fadeInSlideUp">
          Cultivate Your Inner Garden
        </h1>
        <p className="text-lg md:text-xl text-gray-300 animate-fadeInSlideUp delay-300">
          Merangkai offers curated experiences for mindfulness, growth, and self-discovery.
        </p>
        <a
          href="#about"
          className="inline-block mt-8 px-6 py-3 rounded-full bg-orange-500 text-black font-medium shadow-lg hover:bg-orange-400 transition-transform transform hover:scale-105"
        >
          Learn More
        </a>
      </div>
    </section>
  );
}

function AboutPage() {
  return (
    <section id="about" className="py-24 px-6 bg-black">
      <div className="max-w-4xl mx-auto space-y-10">
        <h2 className="font-cinzel text-4xl text-white text-center">About Merangkai</h2>
        <p className="text-lg text-gray-300 leading-relaxed">
          Merangkai is more than just a brand — it's a journey toward inner peace and mindful living. Inspired by nature, artistry, and the quiet moments that shape us,
          we create spaces where reflection and growth thrive.
        </p>
        <p className="text-lg text-gray-300 leading-relaxed">
          Whether through curated content, guided experiences, or intentional design, Merangkai invites you to slow down, reconnect, and cultivate the garden within.
        </p>
      </div>
    </section>
  );
}

function ServicesPage() {
  return (
    <section id="services" className="py-24 px-6 bg-black">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-cinzel text-4xl text-white mb-12 text-center">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            {
              title: "Mindful Experiences",
              description:
                "Engage with curated sessions designed to foster awareness, presence, and emotional clarity.",
            },
            {
              title: "Artistic Expression",
              description:
                "Explore creative tools and resources that encourage self-expression and personal growth.",
            },
            {
              title: "Inner Reflection",
              description:
                "Dive into thoughtful content and practices that guide you inward for deeper understanding.",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="bg-gray-900 p-8 rounded-xl shadow-lg hover:shadow-orange-500/20 transition-shadow duration-300"
            >
              <h3 className="font-cinzel text-2xl text-white mb-4">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CasesPage() {
  return (
    <section id="cases" className="py-24 px-6 bg-black">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-cinzel text-3xl md:text-4xl text-white mb-12">Selected Journeys</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {[
            {
              title: "Digital Sanctuary",
              desc: "An immersive web experience designed for daily mindfulness and breathwork guidance.",
              img: "https://picsum.photos/id/1015/800/600 ",
            },
            {
              title: "Creative Resilience Toolkit",
              desc: "Interactive journaling and mood-tracking tools crafted to support emotional well-being.",
              img: "https://picsum.photos/id/1016/800/600 ",
            },
          ].map((item, i) => (
            <CaseCard key={i} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TeamPage() {
  return (
    <section id="team" className="py-24 px-6 bg-black">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-cinzel text-3xl md:text-4xl text-white mb-12">Meet the Guides</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="space-y-2">
              <img src={`https://picsum.photos/id/ ${1010 + i}/300/300`} alt="Team Member" className="w-full h-40 object-cover rounded-md" />
              <p className="text-sm font-medium text-white">Name Surname</p>
              <p className="text-xs text-gray-500">Role Title</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactPage() {
  return (
    <section id="contact" className="py-24 px-6 bg-black">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-cinzel text-3xl md:text-4xl text-white mb-8">Get in Touch</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <p className="text-gray-400">Email</p>
            <p className="mt-1 text-lg">hello@merangkai.com</p>
            <p className="mt-4 text-gray-400">Location</p>
            <p className="mt-1 text-lg">San Francisco, CA</p>
          </div>
          <form className="space-y-4">
            <input type="text" placeholder="Your Name" className="w-full bg-gray-900 border border-gray-700 p-3 focus:outline-none focus:border-orange-400" />
            <input type="email" placeholder="Your Email" className="w-full bg-gray-900 border border-gray-700 p-3 focus:outline-none focus:border-orange-400" />
            <textarea rows="4" placeholder="Message" className="w-full bg-gray-900 border border-gray-700 p-3 focus:outline-none focus:border-orange-400"></textarea>
            <button type="submit" className="px-6 py-3 bg-orange-500 text-black font-medium rounded-full hover:bg-orange-400 transition-colors">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
