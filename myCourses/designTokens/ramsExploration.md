## CUE:
You are a product designer creating low-fidelity wireframes for the MyCourses redesign in Paper. Your role is to translate the design system tokens and DESIGN.md specification into a visual canvas that shows layout, component states, and interactions. You are NOT creating high-fidelity mockups yet—you are showing structure, spacing, typography hierarchy, and all component states so developers have a clear visual spec before coding starts.

## TASK:
Create 5 wireframe frames in Paper Canvas that demonstrate:

### Frame 1: Desktop Dashboard (Main View)
- Show the full MyCourses interface at desktop size (1440px width).
- Include header (RIT myCourses logo + nav icons).
- Show all 4 main sections stacked vertically:
  1. Last Visited: (one card showing most recent course)
  2. Upcoming Tasks: (3-4 task items with different states)
  3. Calendar: (Google Calendar widget placeholder)
  4. Bookmarks/Additional Info: (optional footer)
- Annotations: Add labels for spacing (use your token scale: 30px gaps, 20px padding), typography sizes (H1: 28px, H2: 20px, Body: 16px), and colors (brand red, neutrals).
- Constraint: Use only the colors from your token system (brand red #ED3F1C, neutrals, accent blue).

### Frame 2: Task Item Component States (Component Library)
- Show all 5 task item states in a single frame, stacked vertically:
  1. OVERDUE (red #ED3F1C, icon (clock), text label "OVERDUE", with left red border 2px)
  2. DUE TODAY (orange/warm tone, icon ⌚, text label "DUE TODAY")
  3. DUE SOON (gray, icon (calendar), text label "DUE SOON")
  4. SUBMITTED (green, icon (checkmark), text label "SUBMITTED")
  5. COMPLETED (green with checkmark, text label "COMPLETED")
- Inside each task item:
  - Icon (16x16px) + text label (bold, 16px)
  - Task name (16px, #292624 dark gray)
  - Course code + due date (14px, secondary gray)
  - Status line (12px, tertiary gray)
- Spacing annotations: 20px padding inside card, 10px gap between lines.
- Rationale: Show developers exactly what each state looks like (no ambiguity).

### Frame 3: Mobile Responsive Layout (375px Width)
- Show the same dashboard at mobile size (portrait, 375px width).
- Key changes from desktop:
  - Single column (full-width, no sidebars).
  - Last Visited becomes a dropdown/tab at top (not its own section).
  - Task items stack vertically, full-width.
  - Calendar becomes a modal/expandable section (click to show).
  - Buttons are full-width (minimum 44px height per WCAG AA).
  - No horizontal scroll at any point.
- Annotations: Show breakpoint note ("Mobile breakpoint: < 600px"), touch target sizes (44px buttons), and stack spacing (15px vertical gaps).
- Rationale: Prove the design works on small screens without adaptation loss.

### Frame 4: Alert & Notification States
- Show 3 notification/alert variants in a single frame:
  1. Success Alert (green background or border, checkmark icon, text "Submitted! Assignment received", auto-dismiss after 5 sec, placed at top of page).
  2. Urgent Alert (red background, clock icon, text "URGENT: Assignment due in 1 hour", persists until dismissed, has X button).
  3. Error Alert (red background, close icon, text "Error: Could not save. Check connection.", has X button and Retry button).
- Styling annotations:
  - Banner width: full-width, 56px height (minimum).
  - Padding: 16px horizontal, 12px vertical.
  - Icon + text spacing: 10px gap.
  - Border/background color: from token system.
- Rationale: Show how users understand urgency (icon + text + color redundancy).

### Frame 5: Focus States & Keyboard Navigation
- Show interactive elements with keyboard focus states:
  1. Default Button (primary action, red #ED3F1C background, white text, 44px height, 20px padding).
  2. Hovered Button (slightly darkened or elevated).
  3. Focused Button (2px outline in red #ED3F1C, offset 2px from button edge, visible without hover).
  4. Disabled Button (gray, 50% opacity, no cursor interaction).
  5. Tab Index Flow (show number labels 1, 2, 3... on all interactive elements to prove keyboard tab order).
- Annotations:
  - "Focus outline: 2px solid #ED3F1C, offset 2px (WCAG AAA requirement)".
  - "Touch target: 44px minimum height (WCAG AA mobile)".
  - "Contrast: #ED3F1C on white = 5.1:1 (passes AA)".
- Rationale: Accessibility must be visible in wireframes, not an afterthought.

---

## ADDITIONAL INFORMATION:

### Design System Context
You have a token system with:
- 5px-based spacing scale (5, 10, 15, 20, 25, 30, 40, 50, 60, 80, 100, 120px)
- Color palette: Brand red #ED3F1C, neutrals (#FFFFFF, #FBF8EF, #E4DECF, #9BA2A5, #696765, #292624), accent blue #3B4B59
- Typography: 12px-48px font sizes with proportional line heights (1.5 minimum for readability)
- Radius: 0-40px (null, sm=10px, md=20px, lg=30px, xl=40px)
- Stroke: 0, 1px, 2px (none, default, strong)

### Reference Documents
- DESIGN.md (744 lines): Full specification for colors, typography, components, accessibility rules, and testing criteria.
- NeuroMap Session: Brainstorm transcript validating these decisions (minimalism + text labels + accessibility).
- MyCourses_Design_Tokens.json: Token file for developers.

### Success Criteria
✅ All 5 frames are complete and legible at any zoom level.
✅ Spacing is annotated with token values (e.g., "spacing/20px").
✅ Colors use hex codes from the token system.
✅ Typography includes font size + weight (e.g., "16px, 600 weight for labels").
✅ All task states are visually distinct (no ambiguity).
✅ Mobile layout proves responsive design (no horizontal scroll).
✅ Accessibility is visible (focus outlines, touch targets, contrast labels).
✅ Developers can read these wireframes and implement without asking questions.

### Constraints & Scope
- Do NOT create high-fidelity mockups with shadows, gradients, or photorealistic details.
- Do use simple shapes (rectangles for cards, circles for icons, text for labels).
- Do annotate every visual decision (spacing, color, size, interaction).
- Do NOT include complex animations or micro-interactions (those come in hi-fi).
- Do show all component states (overdue, due today, etc.) even if similar.
- Timing: 3-4 hours to complete all 5 frames + annotations.

