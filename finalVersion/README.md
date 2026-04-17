# Contra Dashboard - Final Version

A modern, responsive dashboard built with **Next.js 15** and **Tailwind CSS 4**, featuring a premium interactive iconography system based on Google Material Symbols.

## 🚀 Get Started

### Prerequisites
- **Node.js**: 18.17 or later
- **npm**: 9.x or later

### Installation & Development
1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run the development server**:
   ```bash
   npm run dev
   ```

3. **Visit**: Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🎨 Design System & Interactivity

The project implements a custom "IconButton" system designed for high interactivity and visual consistency.

### 1. Circular Icon Buttons
All primary action icons across the dashboard (Filters, Menus, Alerts) use the `IconButton` component.
- **Hover State**: The border thickness increases from 1px to **3px** for immediate visual feedback.
- **Selected State**: A persistent toggle state. Click once to activate (**Red Background #ED3F1C**, **White Icon**, **No Border**). Click again to revert to default.
- **Implementation**: Handled via `src/components/IconButton.jsx` and centralized logic in `src/app/globals.css`.

### 2. Header Iconography
The top navigation features a dedicated set of 40px Material Symbols on a dark background, providing quick access to messaging, notifications, and profile settings.

### 3. Material Symbols Integration
The project uses the **Rounded** variant of Material Symbols with standardized settings:
- **Weight**: 200 (Lightweight, premium feel)
- **Optical Size**: 24dp
- **Fill**: Systematically managed via CSS for default/selected states.

---

## 🏗️ Project Structure

```text
src/
├── app/
│   ├── globals.css      # Design tokens (@theme) and Icon Button CSS
│   ├── layout.jsx       # Root layout and font imports
│   └── page.jsx         # Primary Dashboard page assembly
├── components/
│   ├── IconButton.jsx   # Stateful Client Component for toggles
│   ├── Header.jsx       # Global bar with 40px iconography
│   ├── TasksSection.jsx  # Upcoming and Overdue task lists
│   ├── CalendarSection.jsx # Interactive schedule and filters
│   ├── Announcements.jsx # Course-specific alerts
│   ├── HeroSection.jsx   # Header hero with semester info
│   └── LastVisited.jsx   # Recently accessed course materials
```

---

## 🛠️ Tech Stack
- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS 4
- **Icons**: Material Symbols Rounded
- **Environment**: Turbopack for fast HMR
