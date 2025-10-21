import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface SlideProps {
  children: React.ReactNode;
  className?: string;
}

const Slide = ({ children, className = "" }: SlideProps) => (
  <div className={`w-full h-full flex flex-col justify-center items-center p-12 ${className}`}>
    {children}
  </div>
);

const RockyMountainRubyPresentation = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    // Title Slide
    <Slide key="title" className="bg-gradient-to-br from-red-600 to-red-800 text-white">
      <h1 className="text-6xl font-bold mb-4">Rocky Mountain Ruby 2025</h1>
      <p className="text-2xl opacity-90">From Wizards to Voyagers: What We Learned</p>
      <p className="text-xl mt-8 opacity-75">Conference Report</p>
    </Slide>,

    // Context Slide
    <Slide key="context" className="bg-white">
      <h2 className="text-5xl font-bold mb-8 text-gray-800">What We Expected</h2>
      <div className="text-left max-w-3xl">
        <p className="text-2xl mb-6 text-gray-700">A Ruby conference about:</p>
        <ul className="text-xl space-y-4 text-gray-600">
          <li className="flex items-start">
            <span className="mr-4">📦</span>
            <span>Rails patterns and architecture</span>
          </li>
          <li className="flex items-start">
            <span className="mr-4">⚡</span>
            <span>Performance optimization</span>
          </li>
          <li className="flex items-start">
            <span className="mr-4">🔧</span>
            <span>Tooling and gems</span>
          </li>
        </ul>
      </div>
    </Slide>,

    // Reality Check
    <Slide key="reality" className="bg-gradient-to-br from-blue-600 to-purple-600 text-white">
      <h2 className="text-5xl font-bold mb-8">What We Got</h2>
      <div className="text-3xl font-semibold mb-8">
        "It felt like an AI conference"
      </div>
      <p className="text-xl max-w-3xl opacity-90">
        But that tension revealed something important: Ruby's community is wrestling with the same questions we are
      </p>
    </Slide>,

    // The Core Question
    <Slide key="question" className="bg-white">
      <h2 className="text-4xl font-bold mb-12 text-gray-800">The Core Question Everyone's Asking</h2>
      <div className="text-3xl text-gray-700 italic max-w-4xl text-center leading-relaxed">
        "How do we preserve craft, mentorship, and developer growth in an AI-first world?"
      </div>
    </Slide>,

    // Section: The New Wilderness
    <Slide key="wilderness-intro" className="bg-gradient-to-br from-green-700 to-teal-700 text-white">
      <h1 className="text-6xl font-bold mb-4">Part 1:</h1>
      <h2 className="text-5xl font-bold">The New Wilderness</h2>
      <p className="text-2xl mt-8 opacity-90">Understanding the shift</p>
    </Slide>,

    // AI Reality
    <Slide key="ai-reality" className="bg-white">
      <h2 className="text-4xl font-bold mb-10 text-gray-800">AI: The Uncomfortable Truth</h2>
      <div className="grid grid-cols-2 gap-8 max-w-5xl">
        <div className="bg-green-50 p-6 rounded-lg">
          <h3 className="text-2xl font-bold mb-4 text-green-800">✓ Where AI Excels</h3>
          <ul className="text-lg space-y-2 text-gray-700">
            <li>• Code generation (CRUD/boilerplate)</li>
            <li>• Refactoring</li>
            <li>• Documentation</li>
            <li>• Test writing</li>
            <li>• Commit messages</li>
          </ul>
        </div>
        <div className="bg-red-50 p-6 rounded-lg">
          <h3 className="text-2xl font-bold mb-4 text-red-800">✗ Where AI Struggles</h3>
          <ul className="text-lg space-y-2 text-gray-700">
            <li>• Metaprogramming</li>
            <li>• Ruby idioms/style</li>
            <li>• Rails conventions</li>
            <li>• Blocks and iterators</li>
            <li>• Your specific codebase</li>
          </ul>
        </div>
      </div>
    </Slide>,

    // The Principle
    <Slide key="principle" className="bg-gradient-to-br from-purple-600 to-pink-600 text-white">
      <h2 className="text-4xl font-bold mb-8">The Guiding Principle</h2>
      <div className="text-5xl font-bold mb-8">
        "As little as possible,<br/>as much as you need"
      </div>
      <p className="text-xl max-w-3xl opacity-90">
        Use AI intentionally as a partner, not a replacement for thinking
      </p>
    </Slide>,

    // The Pipeline Crisis
    <Slide key="pipeline" className="bg-white">
      <h2 className="text-4xl font-bold mb-10 text-gray-800">The Developer Pipeline Challenge</h2>
      <div className="max-w-4xl">
        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-8">
          <p className="text-xl font-semibold text-gray-800 mb-3">
            "Do we train up the robots or train up a human junior who can become a mid?"
          </p>
          <p className="text-lg text-gray-600">— Erin Pintozzi, Turing Instructor</p>
        </div>
        <ul className="text-xl space-y-4 text-gray-700">
          <li className="flex items-start">
            <span className="mr-4 text-2xl">⚠️</span>
            <span>Post-bootcamp era: fewer structured entry points</span>
          </li>
          <li className="flex items-start">
            <span className="mr-4 text-2xl">🚪</span>
            <span>Increased barriers = decreased equity</span>
          </li>
          <li className="flex items-start">
            <span className="mr-4 text-2xl">💡</span>
            <span>Tomorrow's senior engineers are in support departments today</span>
          </li>
        </ul>
      </div>
    </Slide>,

    // Section: What We Learned
    <Slide key="learned-intro" className="bg-gradient-to-br from-indigo-700 to-blue-700 text-white">
      <h1 className="text-6xl font-bold mb-4">Part 2:</h1>
      <h2 className="text-5xl font-bold">Key Insights</h2>
      <p className="text-2xl mt-8 opacity-90">Patterns that emerged</p>
    </Slide>,

    // Learning How to Learn
    <Slide key="learning" className="bg-white">
      <h2 className="text-4xl font-bold mb-10 text-gray-800">Learning How to Learn: Upgraded</h2>
      <div className="max-w-4xl space-y-6">
        <div className="bg-blue-50 p-6 rounded-lg">
          <h3 className="text-2xl font-bold mb-3 text-blue-900">1. Big Rocks First</h3>
          <p className="text-lg text-gray-700">Order matters—start with main concepts, then details</p>
        </div>
        <div className="bg-purple-50 p-6 rounded-lg">
          <h3 className="text-2xl font-bold mb-3 text-purple-900">2. Spiral Staircases, Not Ladders</h3>
          <p className="text-lg text-gray-700">Use spaced repetition; revisit concepts with growing depth</p>
        </div>
        <div className="bg-pink-50 p-6 rounded-lg">
          <h3 className="text-2xl font-bold mb-3 text-pink-900">3. Questions Are Places Answers Fit</h3>
          <p className="text-lg text-gray-700">Better questions = better results (with or without AI)</p>
        </div>
      </div>
    </Slide>,

    // Trust Through Vulnerability
    <Slide key="trust" className="bg-gradient-to-br from-teal-600 to-cyan-600 text-white">
      <h2 className="text-4xl font-bold mb-10">Building Trust Through Vulnerability</h2>
      <div className="text-2xl max-w-4xl space-y-6">
        <p className="bg-white/10 p-6 rounded-lg">
          <span className="font-bold">"I don't know, let's figure it out"</span>
          <br/>
          <span className="text-xl opacity-90 mt-2 block">This phrase builds more trust than pretending to have all the answers</span>
        </p>
        <ul className="text-xl space-y-3 text-left">
          <li>• Create spaces where people can fail safely</li>
          <li>• Vulnerability → Trust → Psychological Safety</li>
          <li>• Code reviews as teaching moments, not gatekeeping</li>
        </ul>
      </div>
    </Slide>,

    // Better Prompting
    <Slide key="prompting" className="bg-white">
      <h2 className="text-4xl font-bold mb-10 text-gray-800">Working with AI: Better Prompts</h2>
      <div className="max-w-4xl">
        <div className="bg-green-50 p-6 rounded-lg mb-6">
          <h3 className="text-2xl font-bold mb-4 text-green-900">✓ Do This</h3>
          <ul className="text-lg space-y-2 text-gray-700">
            <li>• "You are a senior Ruby developer following Ruby style guide..."</li>
            <li>• Provide version context (Rails 7.1, Ruby 3.2, etc.)</li>
            <li>• "Explain your reasoning step by step"</li>
            <li>• "Does this feel Ruby-like?"</li>
            <li>• Ask for explanations like you're teaching a beginner</li>
          </ul>
        </div>
        <div className="bg-red-50 p-6 rounded-lg">
          <h3 className="text-2xl font-bold mb-4 text-red-900">✗ Avoid This</h3>
          <ul className="text-lg space-y-2 text-gray-700">
            <li>• Negative instructions (AI focuses on what you say not to do)</li>
            <li>• Vague context</li>
            <li>• Assuming AI understands your codebase philosophy</li>
          </ul>
        </div>
      </div>
    </Slide>,

    // Operational Confidence
    <Slide key="operations" className="bg-white">
      <h2 className="text-4xl font-bold mb-10 text-gray-800">Ship with Confidence: The 5 Lenses</h2>
      <div className="grid grid-cols-2 gap-6 max-w-5xl">
        <div className="bg-gray-50 p-5 rounded-lg">
          <h3 className="text-xl font-bold mb-3 text-gray-800">🚨 Errors</h3>
          <p className="text-base text-gray-600">Uptime monitoring, exception reporting, staging environments</p>
        </div>
        <div className="bg-gray-50 p-5 rounded-lg">
          <h3 className="text-xl font-bold mb-3 text-gray-800">💾 Data</h3>
          <p className="text-base text-gray-600">Backups in 3+ locations, test restores, encryption</p>
        </div>
        <div className="bg-gray-50 p-5 rounded-lg">
          <h3 className="text-xl font-bold mb-3 text-gray-800">⚡ Speed</h3>
          <p className="text-base text-gray-600">Track percentiles, profile nested loops, use CDNs</p>
        </div>
        <div className="bg-gray-50 p-5 rounded-lg">
          <h3 className="text-xl font-bold mb-3 text-gray-800">🔒 Security</h3>
          <p className="text-base text-gray-600">Store less data, use Dependabot, monitoring alerts</p>
        </div>
        <div className="bg-blue-100 p-5 rounded-lg col-span-2">
          <h3 className="text-xl font-bold mb-3 text-blue-900">⏱️ Lead Time (This can be a Superpower)</h3>
          <p className="text-base text-gray-700">Commit time to production: the shorter the lead time, the better the outcomes. Automate deploys early.</p>
        </div>
      </div>
    </Slide>,

    // Section: How We'll Apply It
    <Slide key="apply-intro" className="bg-gradient-to-br from-orange-600 to-red-600 text-white">
      <h1 className="text-6xl font-bold mb-4">Part 3:</h1>
      <h2 className="text-5xl font-bold">How The Ruby Community Can Apply This</h2>
      <p className="text-2xl mt-8 opacity-90">Concrete next steps</p>
    </Slide>,

    // Our AI Strategy
    <Slide key="our-ai" className="bg-white">
      <h2 className="text-4xl font-bold mb-10 text-gray-800">Best AI Approach</h2>
      <div className="max-w-4xl space-y-6">
        <div className="bg-green-50 border-l-4 border-green-500 p-6">
          <h3 className="text-2xl font-bold mb-3 text-green-900">Use AI For:</h3>
          <ul className="text-lg space-y-2 text-gray-700">
            <li>• Boilerplate and scaffolding</li>
            <li>• Test generation and coverage</li>
            <li>• Documentation and commit messages</li>
            <li>• Code review prep (as a first pass, I intend to start doing this more often)</li>
          </ul>
        </div>
        <div className="bg-blue-50 border-l-4 border-blue-500 p-6">
          <h3 className="text-2xl font-bold mb-3 text-blue-900">Human Review Required For:</h3>
          <ul className="text-lg space-y-2 text-gray-700">
            <li>• Architectural decisions</li>
            <li>• Complex business logic</li>
            <li>• Security-sensitive code</li>
            <li>• Anything involving our specific patterns and conventions</li>
          </ul>
        </div>
      </div>
    </Slide>,

    // Mentorship Commitment
    <Slide key="mentorship" className="bg-white">
      <h2 className="text-4xl font-bold mb-10 text-gray-800">Mentorship Commitment</h2>
      <div className="max-w-4xl">
        <div className="bg-purple-50 p-6 rounded-lg mb-6">
          <h3 className="text-2xl font-bold mb-4 text-purple-900">What We Can Do for the Ruby Community</h3>
          <ul className="text-lg space-y-3 text-gray-700">
            <li className="flex items-start">
              <span className="mr-3 text-xl">👥</span>
              <span>Create time to mentor junior developers</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-xl">📚</span>
              <span>Document our "big rocks" for common scary topics</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-xl">🤝</span>
              <span>Look for future junior engineers in our support team</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3 text-xl">💬</span>
              <span>Make "I don't know, let's figure it out" our default response</span>
            </li>
          </ul>
        </div>
      </div>
    </Slide>,

    // Operational Confidence (conference takeaways)
    <Slide key="our-ops" className="bg-white">
      <h2 className="text-4xl font-bold mb-10 text-gray-800">Operational Confidence (What Speakers Emphasized)</h2>

      <div className="grid grid-cols-2 gap-6 max-w-5xl">
        <div className="bg-gray-50 p-6 rounded-lg">
          <h3 className="text-xl font-bold mb-3 text-gray-800">Patterns We Heard Repeatedly</h3>
          <ul className="text-base space-y-2 text-gray-700">
            <li>• Exceptions visible to humans (chat/alerts)</li>
            <li>• Tracing & request timelines to shorten debugging</li>
            <li>• Lead time as a north star for safer, faster learning</li>
            <li>• Backups that are actually tested (not theoretical)</li>
          </ul>
        </div>

        <div className="bg-gray-50 p-6 rounded-lg">
          <h3 className="text-xl font-bold mb-3 text-gray-800">Cultural Framing</h3>
          <ul className="text-base space-y-2 text-gray-700">
            <li>• Reliability is kindness, to teammates and users</li>
            <li>• Small changes big batches for confidence</li>
            <li>• Flaky tests are a trust tax worth paying down</li>
            <li>• Observability as a teaching tool, not just ops</li>
          </ul>
        </div>
      </div>
      <div className="mt-6 bg-blue-50 p-6 rounded-lg max-w-5xl">
        <p className="text-lg text-gray-700">
          <span className="font-bold">Theme:</span> “Lead time is a superpower, short feedback loops build confidence and learning.”
        </p>
      </div>
    </Slide>,

    // Section: Recommendations
    <Slide key="recommend-intro" className="bg-gradient-to-br from-yellow-600 to-orange-600 text-white">
      <h1 className="text-6xl font-bold mb-4">Part 4:</h1>
      <h2 className="text-5xl font-bold">Recommendations</h2>
      <p className="text-2xl mt-8 opacity-90">For the team</p>
    </Slide>,

    // Ideas We Heard
    <Slide key="ideas-we-heard" className="bg-white">
      <h2 className="text-4xl font-bold mb-8 text-gray-800">Ideas We Heard (Not Prescriptions)</h2>
      <div className="max-w-4xl grid grid-cols-2 gap-6">
        <div className="bg-purple-50 p-5 rounded-lg">
          <h3 className="text-lg font-bold mb-2 text-purple-900">AI & Collaboration</h3>
          <ul className="text-base space-y-1 text-gray-700">
            <li>• Light AI guidelines: where it helps, where review is required</li>
            <li>• “As little as possible, as much as you need”</li>
            <li>• Interview with AI available: assess problem-solving, not recall</li>
          </ul>
        </div>

        <div className="bg-green-50 p-5 rounded-lg">
        <h3 className="text-lg font-bold mb-2 text-green-900">Learning & Mentorship</h3>
        <ul className="text-base space-y-1 text-gray-700">
            <li>• “Big rocks first” maps for scary systems</li>
            <li>• Peer partners / office hours when capacity exists</li>
            <li>• Internal apprenticeships as a pipeline option</li>
        </ul>
        </div>

        <div className="bg-blue-50 p-5 rounded-lg">
        <h3 className="text-lg font-bold mb-2 text-blue-900">Operations</h3>
        <ul className="text-base space-y-1 text-gray-700">
            <li>• Keep lead-time visible</li>
            <li>• Tracing on key flows to speed up debugging</li>
            <li>• Test restores; treat “backup tested” as a milestone</li>
        </ul>
        </div>

        <div className="bg-orange-50 p-5 rounded-lg">
        <h3 className="text-lg font-bold mb-2 text-orange-900">Culture</h3>
        <ul className="text-base space-y-1 text-gray-700">
            <li>• Vulnerability → trust → better code reviews</li>
            <li>• Reliability as empathy</li>
            <li>• Keep play/experimentation alive</li>
        </ul>
        </div>
    </div>
    </Slide>,

// Tools Mentioned (for curiosity)
    <Slide key="tools-mentioned" className="bg-white">
        <h2 className="text-4xl font-bold mb-8 text-gray-800">Tools Mentioned (For Curiosity)</h2>
        <div className="max-w-5xl grid grid-cols-2 gap-6">
            <div className="bg-gray-50 p-5 rounded-lg">
            <h3 className="text-lg font-bold mb-2 text-gray-800">Observability & Perf</h3>
            <ul className="text-base space-y-1 text-gray-700">
                <li>• Honeybadger (exceptions)</li>
                <li>• Honeycomb (tracing)</li>
                <li>• Rack::Profiler</li>
            </ul>
            </div>
            <div className="bg-gray-50 p-5 rounded-lg">
            <h3 className="text-lg font-bold mb-2 text-gray-800">Shipping & Upgrades</h3>
            <ul className="text-base space-y-1 text-gray-700">
                <li>• Strong Migrations</li>
                <li>• Dual-boot upgrades</li>
                <li>• Lead-time tracking</li>
            </ul>
            </div>
            <div className="bg-gray-50 p-5 rounded-lg">
            <h3 className="text-lg font-bold mb-2 text-gray-800">Architecture</h3>
            <ul className="text-base space-y-1 text-gray-700">
                <li>• Hanami (modular)</li>
                <li>• Temporal (durable workflows)</li>
                <li>• visual-rails (source-reading aid)</li>
            </ul>
            </div>
            <div className="bg-gray-50 p-5 rounded-lg">
            <h3 className="text-lg font-bold mb-2 text-gray-800">Learning</h3>
            <ul className="text-base space-y-1 text-gray-700">
                <li>• DORA / Accelerate</li>
                <li>• Awesome-falsehood (GitHub)</li>
                <li>• NIST: Explainable AI</li>
            </ul>
            </div>
        </div>

        <p className="mt-6 text-sm text-gray-500 max-w-5xl">
            Mentioned by speakers as examples; not endorsements or recommendations.
        </p>
    </Slide>,


    // The Core Tension
    <Slide key="tension" className="bg-gradient-to-br from-purple-700 to-pink-700 text-white">
      <h2 className="text-4xl font-bold mb-10">The Tension We Must Hold</h2>
      <div className="max-w-4xl space-y-8 text-xl">
        <div className="bg-white/10 p-6 rounded-lg">
          <p className="font-semibold mb-2">AI is inevitable and useful</p>
          <p className="opacity-90">It accelerates boilerplate, documentation, and testing</p>
        </div>
        <div className="text-3xl font-bold text-center">AND</div>
        <div className="bg-white/10 p-6 rounded-lg">
          <p className="font-semibold mb-2">Judgment, craft, and mentorship cannot be automated</p>
          <p className="opacity-90">We must intentionally preserve the human skills that matter</p>
        </div>
      </div>
    </Slide>,

    // Courage Quote
    <Slide key="courage" className="bg-gradient-to-br from-teal-700 to-green-700 text-white">
      <h2 className="text-4xl font-bold mb-12">On Courage</h2>
      <div className="text-3xl italic max-w-4xl leading-relaxed">
        "Everything that you have ever wanted is on the other side of fear"
      </div>
      <div className="mt-12 space-y-4 text-xl opacity-90">
        <p>Fear of being replaced by AI</p>
        <p>Fear of asking "I don't know"</p>
        <p>Fear of trying something playful</p>
      </div>
    </Slide>,

    // Call to Action (mainly from the turing instructor)
    <Slide key="action" className="bg-white">
      <h2 className="text-4xl font-bold mb-10 text-gray-800">The Broader Call To Action</h2>
      <p className="text-lg text-gray-600 mb-8 max-w-3xl">These came up across multiple talks, as community initiatives.</p>
      <div className="max-w-4xl space-y-4">
        <div className="flex items-start bg-blue-50 p-5 rounded-lg">
          <span className="text-3xl mr-4">1️⃣</span>
          <div>
            <h3 className="text-xl font-bold text-blue-900 text-left">Adopt/Mentor One Learner</h3>
            <p className="text-base text-gray-700">One speaker (a former Turing instructor) shared how fewer entry points for juniors are hurting the ecosystem. Even a short-term pairing or office hour can help bridge that gap.</p>
          </div>
        </div>
        <div className="flex items-start bg-purple-50 p-5 rounded-lg">
          <span className="text-3xl mr-4">2️⃣</span>
          <div>
            <h3 className="text-xl font-bold text-purple-900 text-left">Document One "Big Rock"</h3>
            <p className="text-base text-gray-700">Write a learning map for your team's scariest topics</p>
          </div>
        </div>
        <div className="flex items-start bg-green-50 p-5 rounded-lg">
          <span className="text-3xl mr-4">3️⃣</span>
          <div>
            <h3 className="text-xl font-bold text-green-900 text-left">Ensure Observability Tools</h3>
            <p className="text-base text-gray-700">Talks on “Operating Rails” emphasized visibility, tracing flows, logging, and exception alerts that make learning from production faster.</p>
          </div>
        </div>
        <div className="flex items-start bg-orange-50 p-5 rounded-lg">
          <span className="text-3xl mr-4">4️⃣</span>
          <div>
            <h3 className="text-xl font-bold text-orange-900 text-left">Create AI Guidelines</h3>
            <p className="text-base text-gray-700">When to use it, when to review, how to prompt</p>
          </div>
        </div>
        <div className="flex items-start bg-pink-50 p-5 rounded-lg">
          <span className="text-3xl mr-4">5️⃣</span>
          <div>
            <h3 className="text-xl font-bold text-pink-900 text-left">Build Something Playful</h3>
            <p className="text-base text-gray-700"> The closing keynote invited us to re-discover the “Ruby joy”, make a tiny DSL, toy app, or script that makes you laugh.</p>
          </div>
        </div>
      </div>
    </Slide>,

    // Closing
    <Slide key="closing" className="bg-gradient-to-br from-red-600 to-purple-700 text-white">
      <h2 className="text-5xl font-bold mb-8">We Were Voyagers</h2>
      <h2 className="text-5xl font-bold mb-12">We Can Voyage Again</h2>
      <div className="text-2xl max-w-4xl space-y-6 opacity-90">
        <p>The AI "new wilderness" is both exciting and uncertain</p>
        <p>We can lead with empathy, craft, and courage</p>
        <p className="text-3xl font-bold pt-6">"Questions are places where answers can fit"</p>
      </div>
    </Slide>,

    // Thank You
    <Slide key="thanks" className="bg-gradient-to-br from-gray-800 to-gray-900 text-white">
      <h1 className="text-6xl font-bold mb-8">Thank You</h1>
      <p className="text-2xl mb-12">Questions?</p>
      <div className="text-xl opacity-75">
        <p>Rocky Mountain Ruby 2025</p>
        <p className="mt-4">If you're in Colorado you should attend next year!</p>
      </div>
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

export default RockyMountainRubyPresentation;