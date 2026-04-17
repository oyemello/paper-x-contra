# MyCourses: AI-Native Design System (Contra x Paper Challenge)

**Project Goal**: Demonstrate a 3x speed increase in design-to-production workflows using AI-native design systems. This final version transforms a static dashboard into a high-performance, interactive React application.

---

## Stack

- I used 2 of my own tools:
- NeuroMap powered by ChatGPT (for the initial brainstorming and iteration validation)
- EDS Atlas powered by ChatGPT (for compliance, accesibility, and design system violations)

+

- Paper & Paper MCP (for the design, and iteration)
- Antigravity (implementation of the code)
- Claude(tte) (as orchestrator that co-led the entire process with me)
---

## The AI-Native Evolution: 8 Weeks to 2 Days

This project represents a complete reimagining of the RIT MyCourses student dashboard. By using AI-native workflows, I successfully compressed an 8-week design cycle into **2 days**.

---

## Technical Architecture & Key Features

The "Final Version" of the dashboard focuses on **Interactivity via State** and **Visual Consistency via Material Symbols**.

### 1. The Interactive "IconButton" System
Unlike standard static dashboards, this implementation uses a custom React component architecture to handle persistent user intent:
- **Stateful Toggles**: The `IconButton.jsx` component manages the "Selected" state using React hooks. A single click activates the button, and a second click reverts it to the default state.
- **Hover Visuals**: Implemented a non-shifting hover state where circular borders increase from 1px to **3px**, providing high-affinity feedback without layout jank.
- **Selected Visuals**: When toggled, buttons transition to a brand-red background (`#ED3F1C`), remove their borders, and force all internal iconography to pure white (`#FFFFFF`).

### 2. Standardized Material Design Language
The iconography has been migrated from legacy placeholders to **Google Material Symbols (Rounded)**:
- **Visual Weight**: All icons are locked to `wght 200`, creating a lightweight, premium feel that doesn't overwhelm the user.
- **Unified Sizing**: Dashboard actions are standardized to 24dp, while top-tier header navigation has been optimized to **40px** for balanced hierarchy.
- **CSS-Driven Color**: Removed legacy Tailwind utility conflicts (e.g., `!text-[#9BA2A5]`) and moved color management to `globals.css` to allow the design system to drive states across the components.

### 3. Accessible Component Strategy
Built with a "Dieter Rams" minimalist philosophy:
- **Redundancy for Clarity**: Urgent states (Overdue/Due Today) use text + icon + color (Red), ensuring the information is accessible to colorblind users.
- **Touch Affinity**: Every circular button maintains a minimum hit area of 44px (WCAG AA) using the `size-11` utility.
