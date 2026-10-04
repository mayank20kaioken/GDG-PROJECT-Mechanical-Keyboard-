# Aula F75 Interactive 3D Showcase

A high-fidelity, scroll-driven web experience visualizing the hardware and acoustics of the Aula F75 mechanical keyboard. Built as a portfolio project for GDG.

## Tech Stack
* **Framework:** Next.js / React
* **3D Rendering:** Spline 3D (WebGL)
* **Styling:** Custom CSS / Tailwind
* **Deployment:** Node.js environment

## Core Features
* **Cinematic Scroll Animation:** The 3D model scales and rotates dynamically based on the user's scroll depth natively within the Spline canvas.
* **Dynamic UI Overlay:** React hooks (`useState`, `useEffect`) track `window.scrollY` to orchestrate smooth opacity transitions for typography, keeping the user's focus synced with the hardware presentation.
* **Z-Index Layering:** A fixed-position transparent WebGL canvas sits beneath a relative-positioned DOM layer, allowing zero-latency scrolling without layout shifts.

## Local Setup
1. Clone the repository.
2. Install dependencies: `npm install`
3. Run the development server: `npm run dev`
4. Open [http://localhost:3000](http://localhost:3000)