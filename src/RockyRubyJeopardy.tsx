import React, { useState } from 'react';
import { X, RotateCcw } from 'lucide-react';

const RockyRubyJeopardy = () => {
  const [currentRound, setCurrentRound] = useState('intro');
  type SelectedQuestion = { categoryIndex: number; questionIndex: number; id: string } | null;
  const [selectedQuestion, setSelectedQuestion] = useState<SelectedQuestion>(null);
  const [showAnswer, setShowAnswer] = useState(false);
  const [answeredQuestions, setAnsweredQuestions] = useState(new Set());

  // Round 1: Real or Fake
  const round1 = {
    title: "Round 1: Real or Fake?",
    subtitle: "Are these actual quotes from the conference?",
    categories: [
      {
        name: "AI Hot Takes",
        questions: [
          { value: 100, quote: "Magic without wisdom equals chaos", isReal: true, speaker: "Brandon Weaver" },
          { value: 200, quote: "AI is just spicy autocomplete with confidence issues", isReal: false },
          { value: 300, quote: "In abundant code, what's scarce is judgment", isReal: true, speaker: "Conference themes" },
          { value: 400, quote: "The safest AI is the one you don't use", isReal: false },
          { value: 500, quote: "We now have the opportunity to question assumptions, the future is open", isReal: true, speaker: "We Were Voyagers talk" }
        ]
      },
      {
        name: "Ruby Wisdom",
        questions: [
          { value: 100, quote: "Matz designed Ruby for humans, not machines", isReal: true, speaker: "Christine Seeman" },
          { value: 200, quote: "Rails is just PHP with better marketing", isReal: false },
          { value: 300, quote: "Software was developed under constraints we no longer currently have", isReal: true, speaker: "Tess Griffin - Pokémon Blue talk" },
          { value: 400, quote: "Every bug is just a feature waiting for documentation", isReal: false },
          { value: 500, quote: "Write code humans can understand", isReal: true, speaker: "Sandi Metz principle" }
        ]
      },
      {
        name: "Wild Quotes",
        questions: [
          { value: 100, quote: "Everything you have ever wanted is on the other side of fear", isReal: true, speaker: "Lightning talk" },
          { value: 200, quote: "Deploy on Fridays, live dangerously", isReal: false },
          { value: 300, quote: "I don't know, let's figure it out", isReal: true, speaker: "Conference theme" },
          { value: 400, quote: "Code reviews are just peer pressure for nerds", isReal: false },
          { value: 500, quote: "Write code that makes you laugh", isReal: true, speaker: "Monkey's Paw / Voyagers talk" }
        ]
      },
      {
        name: "Mentorship",
        questions: [
          { value: 100, quote: "As little as possible, as much as you need", isReal: true, speaker: "Erin Pintozzi" },
          { value: 200, quote: "Junior devs are just senior devs with imposter syndrome", isReal: false },
          { value: 300, quote: "Questions are places in your mind where answers fit", isReal: true, speaker: "Jeff Cohen - Learning How to Learn" },
          { value: 400, quote: "The best mentorship is no mentorship - sink or swim", isReal: false },
          { value: 500, quote: "Do we train up the robots or a human junior who can become a mid?", isReal: true, speaker: "Erin Pintozzi" }
        ]
      },
      {
        name: "Operations",
        questions: [
          { value: 100, quote: "Lead time is a superpower", isReal: true, speaker: "Operating Rails talk" },
          { value: 200, quote: "The best backup is the one you never test", isReal: false },
          { value: 300, quote: "Untested backups are not real", isReal: true, speaker: "Operating Rails talk" },
          { value: 400, quote: "Production is just staging with users", isReal: false },
          { value: 500, quote: "Short lead times lead to better outcomes than going slowly and paranoid", isReal: true, speaker: "Operating Rails / DORA" }
        ]
      }
    ]
  };

  // Round 2: Match the Talk
  const round2 = {
    title: "Round 2: Match the Talk",
    subtitle: "Which talk did this come from?",
    categories: [
      {
        name: "Who Said It?",
        questions: [
          { value: 100, quote: "There is a morgue in Sidekiq", options: ["Sidekiq at Gusto", "Operating Rails", "Reading Rails"], correct: 0 },
          { value: 200, quote: "MissingNo was stored in pokémon that wasn't released as part of the game", options: ["Learning Empathy From Pokémon Blue", "Reading Rails", "UI Architecture at GitHub"], correct: 0 },
          { value: 300, quote: "Frontend costs 10x as much as backend", options: ["Hanami talk", "UI Architecture at GitHub", "Operating Rails"], correct: 1 },
          { value: 400, quote: "AI doesn't immediately understand Ruby's philosophy or your codebase", options: ["Thoughtful AI for Rubyists", "We Were Voyagers", "Learning to Code"], correct: 0 },
          { value: 500, quote: "A designer can build a years worth of work for an engineer in an hour", options: ["Operating Rails", "UI Architecture at GitHub", "Upgrading Rails"], correct: 1 }
        ]
      },
      {
        name: "Learning",
        questions: [
          { value: 100, quote: "Big rocks first - order matters", options: ["Learning How to Learn", "We Were Voyagers", "Thoughtful AI"], correct: 0 },
          { value: 200, quote: "Go spiral staircases, not one rung at a time on a ladder", options: ["Reading Rails", "Learning How to Learn", "Upgrading Rails"], correct: 1 },
          { value: 300, quote: "You need passion or purpose to connect learning", options: ["Learning How to Learn", "Learning to Code", "Thoughtful AI"], correct: 0 },
          { value: 400, quote: "Without structured programs it's hard to increase equity", options: ["We Were Voyagers", "Learning to Code Without a Map", "Thoughtful AI"], correct: 1 },
          { value: 500, quote: "Rubber duck relationship with AI", options: ["Thoughtful AI for Rubyists", "We Were Voyagers", "Learning to Code"], correct: 0 }
        ]
      },
      {
        name: "Shipping Code",
        questions: [
          { value: 100, quote: "Speed is an indicator of user confidence", options: ["Operating Rails", "Sidekiq at Gusto", "Upgrading Rails"], correct: 0 },
          { value: 200, quote: "The safest data is what you don't store", options: ["Operating Rails", "UI Architecture", "Sidekiq at Gusto"], correct: 0 },
          { value: 300, quote: "Ownership is half the battle for Rails upgrades", options: ["Upgrading Rails", "Operating Rails", "Reading Rails"], correct: 0 },
          { value: 400, quote: "Use CDNs to serve content that doesn't need to be actively monitored", options: ["Sidekiq at Gusto", "UI Architecture at GitHub", "Operating Rails"], correct: 2 },
          { value: 500, quote: "Don't draw out the upgrade process - avoid dual booting for too long", options: ["Upgrading Rails", "Operating Rails", "Reading Rails"], correct: 0 }
        ]
      },
      {
        name: "The Future",
        questions: [
          { value: 100, quote: "AI is the new wilderness", options: ["We Were Voyagers", "Thoughtful AI", "We Who Remember Magic"], correct: 0 },
          { value: 200, quote: "Expose cheating to the sunlight - solid in explaining things", options: ["We Who Remember Magic", "Learning to Code", "Thoughtful AI"], correct: 0 },
          { value: 300, quote: "Create a culture that emphasizes AI does not replace thinking", options: ["We Who Remember Magic", "Thoughtful AI", "We Were Voyagers"], correct: 0 },
          { value: 400, quote: "The lucky stiff story needs to be spread", options: ["Reading Rails", "We Were Voyagers", "Learning How to Learn"], correct: 1 },
          { value: 500, quote: "Dangerous to assume you know the answer - descriptive vs prescriptive", options: ["Lightning Talks", "Thoughtful AI", "We Who Remember Magic"], correct: 0 }
        ]
      },
      {
        name: "Tools & Tricks",
        questions: [
          { value: 100, quote: "Rails-history can be run on the codebase to monitor drift", options: ["UI Architecture at GitHub", "Reading Rails", "Upgrading Rails"], correct: 0 },
          { value: 200, quote: "There are about 64 extensions in the Rails source code", options: ["Reading Rails", "Upgrading Rails", "Operating Rails"], correct: 0 },
          { value: 300, quote: "Hanami champions immutability and functional programming", options: ["Slicing Through Complexity with Hanami", "Reading Rails", "UI Architecture"], correct: 0 },
          { value: 400, quote: "Auto pauser buys time - they don't use it often because of DB-level changes", options: ["Operating Rails", "Sidekiq at Gusto", "Upgrading Rails"], correct: 1 },
          { value: 500, quote: "Primer is a victim of its own success - Hyrum's Law", options: ["UI Architecture at GitHub", "Hanami", "Operating Rails"], correct: 0 }
        ]
      }
    ]
  };

  const getCurrentBoard = () => {
    return currentRound === 'round1' ? round1 : round2;
  };

  const handleQuestionClick = (categoryIndex: number, questionIndex: number) => {
    const questionId = `${currentRound}-${categoryIndex}-${questionIndex}`;
    if (answeredQuestions.has(questionId)) return;
    
    setSelectedQuestion({ categoryIndex, questionIndex, id: questionId });
    setShowAnswer(false);
  };

  const handleAnswerReveal = () => {
    setShowAnswer(true);
  };

  const handleCloseQuestion = () => {
    if (selectedQuestion) {
      setAnsweredQuestions(new Set([...answeredQuestions, selectedQuestion.id]));
    }
    setSelectedQuestion(null);
    setShowAnswer(false);
  };

  const resetRound = () => {
    setAnsweredQuestions(new Set());
    setSelectedQuestion(null);
    setShowAnswer(false);
  };

  const IntroScreen = () => (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 flex items-center justify-center p-8">
      <div className="text-center">
        <h1 className="text-7xl font-bold text-yellow-400 mb-8" style={{ textShadow: '4px 4px 8px rgba(0,0,0,0.5)' }}>
          Rocky Mountain Ruby
        </h1>
        <h2 className="text-5xl font-bold text-white mb-12">JEOPARDY!</h2>
        <div className="space-y-6">
          <button
            onClick={() => setCurrentRound('round1')}
            className="block w-full max-w-md mx-auto bg-blue-600 hover:bg-blue-500 text-white text-2xl font-bold py-6 px-8 rounded-lg transition-colors border-4 border-blue-400"
          >
            Round 1: Real or Fake?
          </button>
          <button
            onClick={() => setCurrentRound('round2')}
            className="block w-full max-w-md mx-auto bg-purple-600 hover:bg-purple-500 text-white text-2xl font-bold py-6 px-8 rounded-lg transition-colors border-4 border-purple-400"
          >
            Round 2: Match the Talk
          </button>
        </div>
      </div>
    </div>
  );

  const GameBoard = () => {
    const board = getCurrentBoard();
    
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 p-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-5xl font-bold text-yellow-400 mb-2" style={{ textShadow: '3px 3px 6px rgba(0,0,0,0.5)' }}>
              {board.title}
            </h1>
            <p className="text-2xl text-blue-200">{board.subtitle}</p>
            <div className="mt-4 space-x-4">
              <button
                onClick={() => setCurrentRound('intro')}
                className="bg-blue-700 hover:bg-blue-600 text-white px-6 py-2 rounded transition-colors"
              >
                ← Back to Menu
              </button>
              <button
                onClick={resetRound}
                className="bg-green-700 hover:bg-green-600 text-white px-6 py-2 rounded transition-colors inline-flex items-center gap-2"
              >
                <RotateCcw size={18} />
                Reset Board
              </button>
            </div>
          </div>

          {/* Jeopardy Board */}
          <div className="grid grid-cols-5 gap-2">
            {board.categories.map((category, catIndex) => (
              <div key={catIndex} className="flex flex-col gap-2">
                {/* Category Header */}
                <div className="bg-blue-700 text-yellow-400 text-center py-4 px-2 rounded font-bold text-lg border-2 border-blue-500" style={{ minHeight: '80px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  {category.name}
                </div>
                
                {/* Question Cells */}
                {category.questions.map((question, qIndex) => {
                  const questionId = `${currentRound}-${catIndex}-${qIndex}`;
                  const isAnswered = answeredQuestions.has(questionId);
                  
                  return (
                    <button
                      key={qIndex}
                      onClick={() => handleQuestionClick(catIndex, qIndex)}
                      disabled={isAnswered}
                      className={`py-8 rounded font-bold text-4xl transition-all border-2 ${
                        isAnswered
                          ? 'bg-blue-900 text-blue-700 border-blue-800 cursor-not-allowed'
                          : 'bg-blue-600 hover:bg-blue-500 text-yellow-300 border-blue-400 cursor-pointer transform hover:scale-105'
                      }`}
                      style={{ minHeight: '100px' }}
                    >
                      {isAnswered ? '' : `$${question.value}`}
                    </button>
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  const QuestionModal = () => {
    if (!selectedQuestion) return null;
    
    const board = getCurrentBoard();
    const question = board.categories[selectedQuestion.categoryIndex].questions[selectedQuestion.questionIndex];
    const isRound1 = currentRound === 'round1';

    return (
      <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center p-8 z-50">
        <div className="bg-blue-800 rounded-lg max-w-4xl w-full p-12 relative border-8 border-yellow-500">
          <button
            onClick={handleCloseQuestion}
            className="absolute top-4 right-4 text-white hover:text-yellow-400 transition-colors"
          >
            <X size={32} />
          </button>

          {/* Value Display */}
          <div className="text-center mb-8">
            <div className="text-6xl font-bold text-yellow-400 mb-4">
              ${question.value}
            </div>
            <div className="text-xl text-blue-300">
              {board.categories[selectedQuestion.categoryIndex].name}
            </div>
          </div>

          {/* Question Text */}
          <div className="bg-blue-900 p-8 rounded-lg mb-8 border-4 border-blue-700">
            <p className="text-3xl text-white text-center leading-relaxed">
              "{question.quote}"
            </p>
          </div>

          {/* Answer Section */}
          {!showAnswer ? (
            <div className="text-center">
              <button
                onClick={handleAnswerReveal}
                className="bg-yellow-500 hover:bg-yellow-400 text-blue-900 text-2xl font-bold py-4 px-12 rounded-lg transition-colors"
              >
                Reveal Answer
              </button>
              {!isRound1 && Array.isArray((question as any).options) && (
                <div className="mt-6 space-y-3">
                  {(question as { options: string[] }).options.map((option, idx) => (
                    <div key={idx} className="bg-blue-700 text-white text-xl py-3 px-6 rounded">
                      {String.fromCharCode(65 + idx)}. {option}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ) : (
            <div className="space-y-4">
              {isRound1 ? (
                <>
                  <div className={`text-center text-4xl font-bold py-6 px-8 rounded-lg ${
                    'isReal' in question && question.isReal ? 'bg-green-600 text-white' : 'bg-red-600 text-white'
                  }`}>
                    {'isReal' in question && question.isReal ? '✓ REAL' : '✗ FAKE'}
                  </div>
                  {'isReal' in question && question.isReal && (
                    <div className="text-center text-xl text-blue-200">
                      From: {question.speaker}
                    </div>
                  )}
                </>
              ) : (
                <>
                  {'options' in question && typeof question.correct === 'number' && (
                    <div className="bg-green-600 text-white text-center text-3xl font-bold py-6 px-8 rounded-lg">
                      {String.fromCharCode(65 + question.correct)}. {question.options[question.correct]}
                    </div>
                  )}
                </>
              )}
              <div className="text-center mt-6">
                <button
                  onClick={handleCloseQuestion}
                  className="bg-blue-600 hover:bg-blue-500 text-white text-xl font-bold py-3 px-8 rounded transition-colors"
                >
                  Back to Board
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  };

  if (currentRound === 'intro') {
    return <IntroScreen />;
  }

  return (
    <>
      <GameBoard />
      <QuestionModal />
    </>
  );
};

export default RockyRubyJeopardy;