# Rocky Mountain Ruby 2025 Deck (React + TypeScript + Vite)

A web-based presentation built with React, TypeScript, Vite, and Tailwind CSS.
This deck summarizes major takeaways from the Rocky Mountain Ruby 2025 Conference—including talks on AI, mentorship, operational confidence, and the evolving Ruby ecosystem.

It’s designed to run entirely in the browser: you can click through slides locally or host them as a small web app.

## 🧭 Purpose
- Create a click-through “conference recap” deck you can present or share.
- Keep everything self-contained (no slide software needed).
- Showcase takeaways from multiple talks: We Who Remember Magic, Learning Empathy from Pokémon Blue, Operating Rails, Learning How to Learn, and more.

## 🛠 Tech Stack

| Area               | Tool / Library                                               | Notes                                   |
| ------------------ | ------------------------------------------------------------ | --------------------------------------- |
| Framework          | **Vite + React + TypeScript**                                | Fast local dev with HMR                 |
| Styling            | **Tailwind CSS**                                             | Simple responsive design                |
| Icons              | **lucide-react**                                             | Lightweight icon set for arrows, etc.   |
| Presentation logic | Custom React component (`RockyMountainRubyPresentation.tsx`) | Handles slides + navigation             |
| Build              | `npm run build`                                              | Outputs to `/dist` for hosting anywhere |

## 🚀 Local Development

# 1. Clone the repo
git clone https://github.com/<your-user>/rocky-mountain-ruby.git
cd rocky-mountain-ruby

# 2. Install dependencies
npm install

# 3. Run locally
npm run dev

Open `http://localhost:5173` and click through the slides. Use the on-screen arrows or keyboard navigation.

## 🧠 Development Notes

- Tailwind classes are configured in tailwind.config.js.
- Global styles live in src/index.css (@tailwind base; @tailwind components; @tailwind utilities;).
- Add new slides by appending to the slides array inside RockyMountainRubyPresentation.tsx.
- The deck cycles with stateful navigation (nextSlide, prevSlide).

## License

MIT. You break it, you buy it. Just kidding. But also not really. . .