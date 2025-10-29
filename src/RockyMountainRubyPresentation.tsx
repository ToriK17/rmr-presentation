import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

type SlideProps = {
  children: React.ReactNode;
  className?: string;
};

const Slide = ({ children, className = "" }: SlideProps) => (
  <div className={`w-full h-full flex flex-col justify-center items-center p-12 ${className}`}>
    {children}
  </div>
);

const RockyMountainRubyContext = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    // Title Slide
    <Slide key="title" className="bg-gradient-to-br from-red-600 to-red-800 text-white">
      <h1 className="text-6xl font-bold mb-4">Rocky Mountain Ruby 2025</h1>
      <p className="text-2xl opacity-90">From Wizards to Voyagers</p>
      <p className="text-xl mt-8 opacity-75">What We Learned (The Interactive Edition)</p>
    </Slide>,

    // The Surprise
    <Slide key="surprise" className="bg-white">
      <h2 className="text-5xl font-bold mb-12 text-gray-800">The Surprise</h2>
      <div className="max-w-5xl grid grid-cols-2 gap-8">
        <div className="bg-blue-50 p-8 rounded-lg">
          <h3 className="text-3xl font-bold mb-6 text-blue-900">What We Expected</h3>
          <ul className="text-xl space-y-3 text-gray-700">
            <li>📦 Rails patterns</li>
            <li>⚡ Performance tips</li>
            <li>🔧 Gems and tooling</li>
          </ul>
        </div>
        <div className="bg-purple-50 p-8 rounded-lg">
          <h3 className="text-3xl font-bold mb-6 text-purple-900">What We Got</h3>
          <p className="text-2xl text-gray-700 italic mb-4">"It felt like an AI conference"</p>
          <p className="text-lg text-gray-600">But that revealed something important: the Ruby community is wrestling with the same questions we are</p>
        </div>
      </div>
    </Slide>,

    // The Core Question
    <Slide key="question" className="bg-gradient-to-br from-purple-600 to-pink-600 text-white">
      <h2 className="text-4xl font-bold mb-12">The Question Everyone's Asking</h2>
      <div className="text-4xl italic max-w-4xl text-center leading-relaxed mb-12">
        "How do we preserve craft, mentorship, and developer growth in an AI-first world?"
      </div>
      <div className="grid grid-cols-2 gap-8 max-w-5xl text-xl">
        <div className="bg-white/10 p-6 rounded-lg">
          <p className="font-bold mb-2">The Pipeline Crisis</p>
          <p className="text-lg opacity-90">Post-bootcamp era, fewer entry points, but we still need junior devs who become seniors</p>
        </div>
        <div className="bg-white/10 p-6 rounded-lg">
          <p className="font-bold mb-2">The AI Reality</p>
          <p className="text-lg opacity-90">It's here, it's useful, but judgment and wisdom can't be automated</p>
        </div>
      </div>
    </Slide>,

    // Key Insight - AI
    <Slide key="ai-insight" className="bg-white">
      <h2 className="text-4xl font-bold mb-10 text-gray-800">The Guiding Principle</h2>
      <div className="text-5xl font-bold mb-12 text-purple-700">
        "As little as possible,<br/>as much as you need"
      </div>
      <div className="grid grid-cols-2 gap-8 max-w-5xl">
        <div className="bg-green-50 p-6 rounded-lg">
          <h3 className="text-2xl font-bold mb-4 text-green-800">✓ Where AI Excels</h3>
          <ul className="text-lg space-y-2 text-gray-700">
            <li>• Boilerplate & CRUD</li>
            <li>• Test generation</li>
            <li>• Documentation</li>
            <li>• Commit messages</li>
          </ul>
        </div>
        <div className="bg-red-50 p-6 rounded-lg">
          <h3 className="text-2xl font-bold mb-4 text-red-800">✗ Where AI Struggles</h3>
          <ul className="text-lg space-y-2 text-gray-700">
            <li>• Metaprogramming</li>
            <li>• Ruby idioms/style</li>
            <li>• Your codebase context</li>
            <li>• Architectural decisions</li>
          </ul>
        </div>
      </div>
    </Slide>,

    // The Hallway Track
    <Slide key="hallway-track" className="bg-gradient-to-br from-teal-50 to-cyan-50">
      <h2 className="text-4xl font-bold mb-10 text-gray-800">The Hallway Track</h2>
      <div className="max-w-5xl space-y-8">
        <p className="text-2xl text-gray-600 text-center italic mb-12">
          "The real conference happens between sessions"
        </p>

        <div className="grid grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-6 text-teal-900">🏗️ Community Builders</h3>
            <div className="space-y-4 text-lg text-gray-700">
              <div>
                <p className="font-semibold text-teal-800">Bekki Freeman</p>
                <p className="text-sm opacity-80">Women's group organizer</p>
              </div>
              <div>
                <p className="font-semibold text-teal-800">Spike Ilacqua</p>
                <p className="text-sm opacity-80">Boulder community groups</p>
              </div>
              <div>
                <p className="font-semibold text-teal-800">André Arko</p>
                <p className="text-sm opacity-80">Ruby community central figure</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-6 text-cyan-900">👥 The Full Spectrum</h3>
            <ul className="text-lg space-y-4 text-gray-700">
              <li className="flex items-center">
                <span className="text-cyan-600 mr-3">🎯</span>
                Experienced Rubyists sharing wisdom
              </li>
              <li className="flex items-center">
                <span className="text-cyan-600 mr-3">📚</span>
                Ruby teachers and educators
              </li>
              <li className="flex items-center">
                <span className="text-cyan-600 mr-3">🚀</span>
                Bootcamp grads seeking first teams
              </li>
            </ul>
          </div>
        </div>

        <div className="text-center text-xl text-gray-600 bg-white/50 p-6 rounded-lg">
          From community organizers to career-changers, all united by Ruby
        </div>
      </div>
    </Slide>,

    // What Matters Most
    <Slide key="what-matters" className="bg-white">
      <h2 className="text-4xl font-bold mb-10 text-gray-800">What Matters Most</h2>
      <div className="max-w-5xl space-y-6">
        <div className="bg-blue-50 border-l-4 border-blue-500 p-6">
          <h3 className="text-2xl font-bold mb-3 text-blue-900">🤝 Trust Through Vulnerability</h3>
          <p className="text-lg text-gray-700">"I don't know, let's figure it out" builds more trust than pretending to have all the answers</p>
        </div>
        <div className="bg-purple-50 border-l-4 border-purple-500 p-6">
          <h3 className="text-2xl font-bold mb-3 text-purple-900">📚 Learning How to Learn</h3>
          <p className="text-lg text-gray-700">Big rocks first, spiral staircases (not ladders), better questions = better results</p>
        </div>
        <div className="bg-green-50 border-l-4 border-green-500 p-6">
          <h3 className="text-2xl font-bold mb-3 text-green-900">👥 Mentorship Over Gatekeeping</h3>
          <p className="text-lg text-gray-700">Create spaces to fail safely. Tomorrow's seniors are in support departments today.</p>
        </div>
        <div className="bg-orange-50 border-l-4 border-orange-500 p-6">
          <h3 className="text-2xl font-bold mb-3 text-orange-900">⏱️ Ship with Confidence</h3>
          <p className="text-lg text-gray-700">Lead time is a superpower. Monitor: Errors, Data, Speed, Security, and deployment time.</p>
        </div>
      </div>
    </Slide>,

    // Transition to Game
    <Slide key="transition" className="bg-gradient-to-br from-yellow-500 to-orange-600 text-white">
      <h2 className="text-5xl font-bold mb-8">Now Let's Have Some Fun</h2>
      <p className="text-3xl mb-12">How well can you guess what was said at Rocky Mountain Ruby?</p>
      <div className="text-2xl space-y-4 max-w-3xl">
        <p>✨ Game Time: Real or Fake Quotes?</p>
      </div>
      <p className="text-xl mt-12 opacity-90">Get ready to use the chat and polls!</p>
    </Slide>,
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="w-full h-screen bg-gray-100 flex flex-col">
      <div className="flex-1 bg-white shadow-lg">
        {slides[currentSlide]}
      </div>
      
      <div className="bg-gray-800 text-white p-4 flex items-center justify-between">
        <button
          onClick={prevSlide}
          className="flex items-center gap-2 px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded transition-colors"
          disabled={currentSlide === 0}
        >
          <ChevronLeft size={20} />
          Previous
        </button>
        
        <div className="flex items-center gap-4">
          <span className="text-sm">
            Slide {currentSlide + 1} of {slides.length}
          </span>
          <div className="flex gap-1">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  idx === currentSlide ? 'bg-blue-400' : 'bg-gray-600'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
        
        <button
          onClick={nextSlide}
          className="flex items-center gap-2 px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded transition-colors"
          disabled={currentSlide === slides.length - 1}
        >
          Next
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default RockyMountainRubyContext;
