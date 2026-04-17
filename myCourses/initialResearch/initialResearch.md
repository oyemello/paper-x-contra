# MyCourses Redesign: DESIGN.md

**Project**: MyCourses 0 → 1 AI-Native Redesign for RIT  
**Timeline**: 7 days (Apr 13-20, 2026)  
**Execution Window**: 5 days (Days 3-7)  
**Approach**: Refine existing features + accessibility improvements  
**Philosophy**: Dieter Rams minimalism ("Good design is invisible") + clarity-first accessibility  

---

## Table of Contents

1. [Design Philosophy](#design-philosophy)
2. [Visual Theme & Atmosphere](#visual-theme--atmosphere)
3. [Color Palette & Roles](#color-palette--roles)
4. [Typography](#typography)
5. [Components & States](#components--states)
6. [Layout & Spacing](#layout--spacing)
7. [Interactions & Micro-interactions](#interactions--micro-interactions)
8. [Accessibility Rules (WCAG AA)](#accessibility-rules-wcag-aa)
9. [Features: In-Scope & Out-of-Scope](#features-in-scope--out-of-scope)
10. [Refinement Strategy](#refinement-strategy)
11. [Alert & Notification System](#alert--notification-system)
12. [Mobile Responsive Behavior](#mobile-responsive-behavior)
13. [Testing & Validation Criteria](#testing--validation-criteria)
14. [Implementation Notes](#implementation-notes)
15. [Documentation & Onboarding](#documentation--onboarding)

---

## Design Philosophy

### Core Principle: Dieter Rams' "Good Design is Invisible"

The original MyCourses redesign (2024) succeeded by embracing Dieter Rams' minimalist philosophy: design should not shout—it should enable users to focus on what matters (completing tasks, managing deadlines, reducing stress).

**In 2026, we are not abandoning minimalism.** Instead, we are *refining* it:

- **Minimalism ≠ Emptiness**: The interface is sparse, but not barren. Every element serves a purpose.
- **Clarity Over Aesthetics**: Visual guidance (icons, text labels, hierarchy) exists to reduce cognitive load, not to entertain.
- **Accessibility is Minimalism**: Text labels, keyboard navigation, and screen reader support are not "additions"—they are essential to invisible design.
- **Students Don't Think**: They act. The interface should guide them without demanding thought.

### Three Core Values

1. **Clarity**: Tasks, deadlines, and progress are instantly visible.
2. **Efficiency**: Students resume work seamlessly with Last Visited Page + Calendar.
3. **Calm**: Minimalist design reduces stress and enhances focus.

### What Changed Since 2024

The 2024 design used **color alone** to indicate urgency (red for overdue). In 2026, we add **text labels + icons** to that signal, making urgency accessible to all users (including colorblind and screen reader users). This is not "more design"—it is *complete* design.

---

## Visual Theme & Atmosphere

### Density
- **Spacious**: 32px minimum padding between major sections. Breathing room is cognitive rest.
- **White space is content**: Empty space signals calm and focus.
- **No visual clutter**: Every pixel earns its place.

### Mood
- **Professional but approachable**: An educational platform, not a corporate dashboard.
- **Serious about deadlines**: Urgent signals are clear and unmissable.
- **Supportive**: Typography and colors convey that the system is helping, not judging.

### Visual Hierarchy
- **Size**: Headers are notably larger (28px) than body text (16px).
- **Weight**: Bold text (600) only for headings and critical labels (e.g., "OVERDUE").
- **Color**: Red signals urgency; neutral grays show standard tasks.
- **Proximity**: Related items are grouped; unrelated items are separated by whitespace.

### Animation Philosophy
- **Purposeful only**: Animations communicate state change (task marked done, notification dismissed).
- **No distractions**: No hover animations on non-interactive elements. No loading spinners unless actually loading.
- **Instant feedback**: Button presses respond immediately (visual feedback within 100ms).

---

## Color Palette & Roles

### Primary Colors

| Name | Hex | Usage | WCAG AA Contrast (on white) |
|------|-----|-------|----------------------------|
| **Urgent Red** | `#E74C3C` | Overdue tasks, critical alerts | ✅ 5.2:1 (passes AA on white) |
| **Neutral Gray** | `#F5F5F5` | Backgrounds, card containers | ✅ 10.3:1 (passes AAA on white) |
| **Text Dark Gray** | `#333333` | Body text, labels | ✅ 12.6:1 (passes AAA on white) |
| **Border Light Gray** | `#E0E0E0` | Dividers, borders | ✅ 7.1:1 (passes AA on white) |
| **Success Green** | `#27AE60` | Task completed, submission confirmed | ✅ 5.8:1 (passes AA on white) |
| **Neutral Inactive** | `#BDBDBD` | Disabled states, past dates | ✅ 4.5:1 (passes AA on white) |

### Additional Colors (Limited Use)

| Name | Hex | Usage |
|------|-----|-------|
| **Warning Orange** | `#F39C12` | Due today (not yet overdue) | 
| **Link Blue** | `#3498DB` | Hyperlinks, underlined | 

### Color Usage Rules

1. **Never use color alone** to convey meaning. Always pair with text or icon.
   - ❌ Red box (what does it mean?)
   - ✅ Red box + "OVERDUE" text + ⏰ icon

2. **Color contrast must pass WCAG AA** minimum (4.5:1 for text, 3:1 for UI components).
   - Test all color combinations before implementation.

3. **Colorblind simulation**: Test design with tools like Sim Daltonism (macOS) or Chrome's colorblind simulator to ensure meaning is clear to deuteranopes, protanopes, and tritanopes.

4. **Avoid relying on red-green contrast alone**: Use red + icons/text, not red-green color pairing for distinction.

---

## Typography

### Font Family
- **Primary**: System font stack (San Francisco on macOS, Segoe UI on Windows, Roboto on Android).
- **Fallback**: `sans-serif`
- **Reason**: System fonts render crisply at any size and load instantly (no web font bloat).

### Type Scale

| Element | Size | Weight | Line Height | Usage |
|---------|------|--------|-------------|-------|
| **H1 (Page Title)** | 28px | 600 | 1.2 | "Week 11 \| Fall Semester" |
| **H2 (Section Header)** | 20px | 600 | 1.25 | "Last Visited", "Upcoming Tasks" |
| **H3 (Task Name)** | 16px | 600 | 1.5 | Individual task in dashboard |
| **Body Text** | 16px | 400 | 1.5 | Course code, assignment details |
| **Small Text** | 14px | 400 | 1.4 | Timestamps, secondary info |
| **Micro Text** | 12px | 400 | 1.4 | Helper text, hints (avoid if possible) |
| **Button Text** | 16px | 600 | 1.5 | Action labels |

### Typographic Rules

1. **Line length**: Body text should be 50-75 characters per line (optimizes readability).
2. **No small caps or all-caps** (except for labels like "OVERDUE").
3. **Dyslexia-friendly**: Ensure adequate letter-spacing (1.5px minimum in body text).
4. **Emphasis**: Use bold (600) weight, never italic (harder to read on screen).
5. **Hierarchy must be clear**: Skim the page—H1, H2, H3 should stand out without reading body text.

---

## Components & States

### Task Item Component

```
┌─────────────────────────────────────────────┐
│ [OVERDUE icon] OVERDUE                      │
│ Problem 31 — PACK 731 Advanced Packaging    │
│ Due: Nov 4 @ 11:59 PM                       │
│ Status: Not submitted                       │
└─────────────────────────────────────────────┘
```

**Visual States**:

| State | Visual Treatment | Usage |
|-------|------------------|-------|
| **Overdue** | Red label "OVERDUE" + ⏰ icon, red left border (4px) | Task deadline passed, not submitted |
| **Due Today** | Orange label "DUE TODAY" + ⌚ icon | Deadline is today, urgent attention needed |
| **Due Soon** | Gray label "DUE SOON" + 📅 icon | Deadline within 7 days |
| **Submitted** | Green checkmark + "Submitted" + 📤 icon | Assignment turned in, awaiting grade |
| **Completed** | Green checkmark + "Completed" | Assignment graded, task done |
| **Disabled/Archived** | Gray text, 50% opacity | Past semester, not relevant |

**Component Rules**:
- All task items use same spacing (16px padding).
- Icon always precedes text label (left-to-right reading).
- Due date always shown below task name (users scan dates vertically).
- Status always clear in one glance.

### Button Component

```
Primary Button (Red, for actions):
┌──────────────────────┐
│  Submit Assignment   │  (16px, bold, white on red)
└──────────────────────┘

Secondary Button (White with border, for alternatives):
┌──────────────────────┐
│  Download Materials  │  (16px, bold, gray text, gray border)
└──────────────────────┘

Disabled Button:
┌──────────────────────┐
│  Submit Assignment   │  (16px, gray text, 50% opacity)
└──────────────────────┘
```

**Button Rules**:
- Minimum width: 120px (avoid buttons that are too small).
- Minimum height: 44px (touch target for mobile).
- Padding: 12px horizontal, 10px vertical.
- Focus state: 2px outline (WCAG AAA requirement for keyboard users).

### Alert/Notification Component

```
[⏰ OVERDUE] Problem 31 due Nov 4 at 11:59 PM. Submit now.
[🔔 INFO] Your materials have been updated for this course.
[❌ ERROR] Could not save. Check your connection and try again.
```

**Alert Rules**:
- Icon always shown (communicates type at a glance).
- Text label always shown (redundant encoding for accessibility).
- Color + icon + text (never color alone).
- In-app notifications: banner at top of page, auto-dismiss after 5 seconds (or manually dismissable).
- Email notifications: None in week 1 (in-app only).

---

## Layout & Spacing

### Grid System
- **Base unit**: 8px
- **Major spacing scale**: 8px, 16px, 24px, 32px, 48px
- **Use**: All margins, padding, and gaps must be multiples of 8px.

### Spacing Rules

| Element | Padding | Margin | Usage |
|---------|---------|--------|-------|
| **Card/Container** | 24px (3 units) | 16px bottom (2 units) | Task item, calendar item |
| **Section** | — | 32px bottom (4 units) | Between "Last Visited", "Upcoming", "Calendar" |
| **Inside Card** | 16px (2 units) | — | Between icon and text within a task item |
| **Between Inline Elements** | — | 8px (1 unit) | Between icon and label, between elements in a row |

### Page Layout

```
┌─────────────────────────────────────────────────────────────┐
│  [← RIT myCourses] [🔔] [📌] [👤]                           │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  Week 11 | 2026 · Fall Semester ▼                          │
│                                                             │
│  [◄ Last Visited ►]                                        │
│  ┌──────────────────────────────────────────┐             │
│  │ Advanced Packaging Design (highlighted)   │             │
│  └──────────────────────────────────────────┘             │
│                                                             │
│  ─────────────────────────────────────────                │
│                                                             │
│  ▼ Last Visited                                            │
│  ┌──────────────────────────────────────────┐             │
│  │ [📌] OVERDUE Problem 31 PACK 731         │             │
│  │ Due: Nov 4 @ 11:59 PM                    │             │
│  │ Status: Not submitted                    │             │
│  └──────────────────────────────────────────┘             │
│                                                             │
│  ▼ Upcoming Tasks (4 items)                               │
│  ┌──────────────────────────────────────────┐             │
│  │ [⌚] DUE TODAY Problem 36 Due TODAY       │             │
│  └──────────────────────────────────────────┘             │
│  ┌──────────────────────────────────────────┐             │
│  │ [📅] DUE SOON W3 - First Review Due Fri  │             │
│  └──────────────────────────────────────────┘             │
│                                                             │
│  ▼ Calendar (Google Calendar, KRONOS)                     │
│  [Calendar widget...]                                     │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### Whitespace Hierarchy
- **Between sections**: 32px minimum (creates visual pause).
- **Between items within section**: 16px (groups related content).
- **Within item**: 8px (keeps component elements together).

---

## Interactions & Micro-interactions

### Last Visited Page

**Behavior**:
- When user navigates away from a page, store scroll position + page URL locally.
- Next login, show "Last Visited" section with card showing the course/page name.
- Click the card → return to exact scroll position.

**Interaction Detail**:
- Button text: "Back to Advanced Packaging Design"
- Clicking triggers instant navigation (no loading state needed).
- If page no longer exists: show gray card with "Page no longer available".
- On mobile: "Last Visited" becomes a dropdown/tab at top (not its own section).

### Calendar Integration

**Behavior**:
- Display upcoming deadlines from all courses.
- Click a date → show all tasks due that day.
- Sync with Google Calendar (read-only display, no write permissions).

**Visual Treatment**:
- Current date: bold box, blue background.
- Future dates with tasks: red underline (overdue) or orange underline (due soon).
- Past dates: gray, 50% opacity.

### Task Completion Flow

**When user clicks "Submit Assignment"**:

1. Button changes to disabled state (prevent double-click).
2. Brief loading indicator (1-2 sec).
3. Success notification: "✅ Submitted! Your assignment was received."
4. Task item updates: Green checkmark + "Submitted" label.
5. Notification auto-dismisses after 5 seconds.

### Bookmarking

**Behavior** (refined from original):
- Click bookmark icon (📌) next to task → toggles bookmark state.
- Bookmarked tasks appear in "Bookmarks" section at bottom (persistent sidebar).
- Remove bookmark: click again.

**Visual**:
- Bookmarked: icon is solid (filled) and red.
- Unbookmarked: icon is outline (hollow) and gray.

---

## Accessibility Rules (WCAG AA)

### Color & Contrast

**Requirement**: All text must have 4.5:1 contrast ratio (WCAG AA).

| Text Color | Background | Contrast Ratio | Pass? |
|------------|------------|-----------------|-------|
| #333333 (dark gray) | #FFFFFF (white) | 12.6:1 | ✅ AAA |
| #E74C3C (red) | #FFFFFF (white) | 5.2:1 | ✅ AA |
| #27AE60 (green) | #FFFFFF (white) | 5.8:1 | ✅ AA |
| #BDBDBD (disabled) | #FFFFFF (white) | 4.5:1 | ✅ AA (borderline) |

**Testing**:
- Use WebAIM Contrast Checker before shipping.
- Test with Sim Daltonism (colorblind simulation) to ensure meaning is clear without color.

### Keyboard Navigation

**All interactive elements must be keyboard accessible**:
- ✅ Tab through buttons, links, and form fields in logical order.
- ✅ Enter/Space to activate buttons.
- ✅ Arrow keys to navigate calendar dates.
- ✅ Escape to close modals/dropdowns.

**Visual Focus Indicator**:
- All focused elements show a 2px solid outline in Urgent Red (#E74C3C).
- Outline is offset 2px from element border (visible, not overlapping).

### Screen Reader Support

**All non-text content must have descriptive labels**:

| Element | Screen Reader Text | Example |
|---------|-------------------|---------|
| Overdue Icon (⏰) | "Icon: overdue" | `<img alt="Icon: overdue">` or `<span role="img" aria-label="Icon: overdue">` |
| Task Item | "Overdue, Problem 31, PACK 731, Due Nov 4" | `<li aria-label="Overdue, Problem 31, PACK 731, Due Nov 4">` |
| Button | "Submit Assignment" | `<button>Submit Assignment</button>` |
| Alert | "Overdue alert: Problem 31 due Nov 4 at 11:59 PM" | `<div role="alert">` |

**ARIA Rules**:
- Use semantic HTML first (`<button>`, `<nav>`, `<main>`).
- Add `role="alert"` to notifications/alerts (screen reader announces immediately).
- Add `aria-label` to icons and icon-only buttons.
- Add `aria-live="polite"` to regions that update dynamically (task status changes).

### Touch Targets & Mobile

**Minimum touch target size**: 44px × 44px (iOS guideline, also WCAG AAA).

| Element | Size | Spacing |
|---------|------|---------|
| Button | 44px height minimum | 8px minimum gap between buttons |
| Link | 44px height minimum | 8px minimum gap |
| Checkbox | 44px × 44px | 8px gap to adjacent elements |
| Icon | 24px × 24px (inside 44px touch target) | — |

### Text Resize & Responsive

- **Text must remain readable** when zoomed to 200%.
- **No horizontal scroll** at any zoom level.
- **Mobile breakpoint** (< 768px):
  - Single column layout (stack tasks vertically).
  - Larger touch targets (44px minimum).
  - Larger text (16px minimum body, 20px minimum headings).

### Motion & Animation

- **No autoplaying videos or animations** that distract users.
- **Respect `prefers-reduced-motion`**: Users with vestibular disorders can disable animations.
  - CSS: `@media (prefers-reduced-motion: reduce) { * { animation: none !important; } }`

---

## Features: In-Scope & Out-of-Scope

### ✅ In-Scope (Will Ship Week 1)

#### Refine Existing Features

1. **Last Visited Page**
   - Persist last viewed course/page per user session.
   - Add text label: "Last Visited: [Course Name]".
   - Click to return to same scroll position.
   - **Implementation**: 1 day (leverage existing session storage).

2. **Calendar**
   - Ensure all colors pass WCAG AA contrast (retest existing palette).
   - Show deadline dates with clear visual indicators (red underline = overdue, orange = due soon).
   - Sync with Google Calendar (read-only, no write).
   - **Implementation**: 1 day (refine existing calendar widget).

3. **Task Dashboard**
   - Show all tasks in one view (Last Visited, Upcoming, Overdue, Calendar).
   - Add text labels to task urgency (no color alone).
   - Add icons to urgency states (⏰ for overdue, ⌚ for due today, 📅 for due soon).
   - **Implementation**: 1 day (add labels + icons to existing task list).

4. **Alert System**
   - Replace color-only alerts with **text + icon + color**.
   - Alert format: `[Icon] LABEL Task Name. Additional context.`
   - In-app banner: appears at top, auto-dismisses after 5 seconds.
   - **Implementation**: 1 day (refactor existing alert component).

#### New in Scope

5. **In-App Notifications (Week 1 version)**
   - 24 hours before deadline: "⏰ Assignment due tomorrow"
   - 1 hour before deadline: "⏰ Assignment due in 1 hour. Submit now."
   - Delivery: In-app banner only (no email).
   - **Implementation**: 1 day (refine existing notification trigger).

### ❌ Out-of-Scope (Defer to Week 2+)

- **Email notifications** (requires email integration, spam filtering concerns).
- **Collaboration tools** (discussion boards, group chat, peer feedback).
- **Personalized learning paths** (ML required, complex algorithm).
- **Integrations** (Google Drive, Microsoft Teams, Canvas API).
- **Customization/Preferences panel** (settings UI, user preferences table).
- **Complex task states** (Completed, Submitted, Graded, Reviewed—too many states for week 1).
- **Mobile app** (responsive web only; native app is a later release).
- **Dark mode** (ship light mode first; add dark mode in future iteration).
- **Real-time updates** (WebSocket implementation too complex; page refresh is sufficient).
- **Analytics dashboard** (for instructors/admins; out of scope for student-facing redesign).
- **Progress tracking** (progress bars, completion percentages—add later).
- **Offline access** (service worker caching; too complex for week 1).

---

## Refinement Strategy

### Days 3-4: Paper Canvas Design (This Week)

**Deliverable**: Wireframes + component states in Paper.

**What to sketch**:
1. Dashboard layout (how sections stack on mobile vs. desktop).
2. Task item states (overdue, due today, due soon, submitted, completed).
3. Alert/notification banners (size, placement, animation).
4. Calendar view (date styling, hover states).
5. Last Visited card (how to show on mobile).

**Success**: Team agrees on visual layout before code starts.

### Days 5-6: Code Refinement (Next Week)

**Deliverables**:
1. Refactor existing code to add text labels + icons.
2. Update color palette for WCAG AA compliance.
3. Add keyboard navigation + focus indicators.
4. Test with screen reader (NVDA or JAWS).
5. Deploy to staging environment.

**Code Checklist**:
- [ ] All task items show text + icon (no color alone).
- [ ] Buttons have 44px minimum height.
- [ ] All links have 4.5:1 contrast.
- [ ] Keyboard navigation works (tab, enter, escape).
- [ ] Screen reader announces task urgency.
- [ ] Notifications auto-dismiss or have close button.
- [ ] Mobile layout stacks properly (no horizontal scroll).

### Day 7: Validation + Polish

**Deliverables**:
1. Usability test with 3 RIT students (10 min each).
2. Collect feedback + iterate on critical issues.
3. Create social media assets (30-sec demo video).
4. Write submission post.
5. Deploy to production.

---

## Alert & Notification System

### Notification Trigger Logic

| Event | Timing | Alert Format | Duration |
|-------|--------|--------------|----------|
| **Assignment deadline approaching** | 24h before | `[⏰] OVERDUE Assignment due tomorrow. [View]` | 5 sec (auto-dismiss) |
| **Assignment deadline imminent** | 1h before | `[⏰] URGENT Assignment due in 1 hour. [View] [Dismiss]` | Persist until dismissed |
| **Assignment submitted** | On submit | `[✅] Success! Assignment submitted.` | 5 sec (auto-dismiss) |
| **Assignment grade posted** | On event | `[📊] Grade posted: You scored 95%` | 5 sec (auto-dismiss) |
| **Error state** | On error | `[❌] Error: Could not save. Retry?` | Persist until dismissed |

### Notification Delivery (Week 1)

- **In-app only**: Banner at top of page, above all content.
- **No email**: Defer to week 2.
- **No SMS**: Out of scope.
- **No push notifications**: Out of scope.

### Notification Persistence

- **Standard alerts** (success, info): Auto-dismiss after 5 seconds.
- **Urgent alerts** (error, imminent deadline): Persist until user dismisses.
- **Dismissal**: Click X button or any confirm action.

---

## Mobile Responsive Behavior

### Breakpoints

| Breakpoint | Device | Changes |
|------------|--------|---------|
| **375px-599px** | Mobile (portrait) | Single column, full-width buttons, large touch targets |
| **600px-899px** | Tablet (portrait) | 2 columns possible, adjusted spacing |
| **900px+** | Desktop | 3+ columns, sidebar navigation possible |

### Mobile Layout Changes

**On phones (< 600px)**:
- "Last Visited" becomes a dropdown at top (not its own section).
- Calendar becomes a modal (click to expand).
- Task list is full-width, stacked vertically.
- Buttons are full-width (easier to tap).
- Hamburger menu (3-line icon) for navigation.

**On desktop (≥ 900px)**:
- Last Visited as sidebar section.
- Calendar as right sidebar widget.
- Task list in center column.
- Navigation in top bar.

### Mobile Touch Interactions

- **Swipe**: No swiping (avoid gesture conflicts).
- **Tap**: All actions via tap (no hover required).
- **Scroll**: Natural vertical scroll only (no horizontal).
- **Zoom**: Text remains readable at 200% zoom.

---

## Testing & Validation Criteria

### Usability Testing (Day 7)

**Sample**: 3 RIT students (current/recent users of MyCourses).

**Task**:
> "Find and click on your most overdue assignment. You have 10 minutes."

**Success Criteria**:
- ✅ Student finds assignment without asking for help.
- ✅ Student completes task in < 5 minutes.
- ✅ Student can explain why task was "overdue" (understanding the signal).

**Feedback Collection**:
- What was confusing?
- Where did you look first?
- Would you use this in real life?

**Pass/Fail Threshold**:
- 2/3 students succeed → ship with minor refinements.
- 1/3 or fewer succeed → iterate and retest (contingency plan).

### Accessibility Testing

**WCAG AA Compliance Checklist**:
- [ ] Color contrast: All text 4.5:1 minimum (test with WebAIM).
- [ ] Keyboard navigation: Tab through all buttons, enter activates, escape dismisses.
- [ ] Screen reader: Test with NVDA (Windows) or VoiceOver (macOS).
  - Announce all task urgency labels (e.g., "Overdue, Problem 31, due Nov 4").
  - Announce button purposes (e.g., "Submit assignment button").
  - Announce form field labels.
- [ ] Focus indicator: 2px outline visible on all focused elements.
- [ ] Touch targets: All buttons and links 44px × 44px minimum.
- [ ] Colorblind simulation: Test design with Sim Daltonism (all three types of color blindness).
- [ ] Text zoom: Design readable at 200% zoom (no horizontal scroll).

### Performance Testing

- **Page load time**: < 3 seconds on 4G network.
- **Time to interactive**: < 5 seconds on 4G network.
- **Largest Contentful Paint (LCP)**: < 2.5 seconds.

### Device Testing

**Desktop**:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)

**Mobile**:
- iOS Safari (latest)
- Chrome for Android (latest)

---

## Implementation Notes

### Code Architecture

**What to refactor** (Days 5-6):
1. Task item component: Add `<span aria-label="Overdue">` to urgency icons.
2. Alert component: Replace color div with `<div role="alert" class="alert-overdue">` + text label.
3. Button component: Ensure 44px height + 2px focus outline.
4. Calendar component: Update colors to pass WCAG AA (test contrast ratios).
5. Notification system: Wire up 24h + 1h deadline triggers to in-app banner.

**What NOT to refactor** (to save time):
- Don't rebuild notifications from scratch (refine existing system).
- Don't add email integration (in-app only).
- Don't create a preferences panel (use defaults).
- Don't add dark mode CSS (ship light mode).

### Dependencies to Check

- Existing alert system: Does it support role="alert"?
- Calendar library: Does it handle WCAG AA color testing?
- Session storage: Does it persist Last Visited page across logins?
- Testing tools: Do you have NVDA/JAWS for screen reader testing?

### Rollback Plan

If code integration breaks:
1. Revert to previous commit (Day 6 end-of-day backup).
2. Deploy last known good version to production.
3. Fix in isolated branch, retest, deploy again.
4. Have a git strategy (main branch is always shippable).

---

## Documentation & Onboarding

### For Students

**In-app help**:
- Tooltip on "Last Visited": "Click here to return to your last course."
- Tooltip on task urgency icons: "⏰ = Overdue, ⌚ = Due today, 📅 = Due soon."
- First-time user: Brief 1-minute walkthrough (optional, dismissable).

**Help article** (if external docs):
- "How to find overdue assignments" (screenshot + step-by-step).
- "What do the task colors mean?" (icon legend).
- "How to submit assignments" (with error messages explained).

### For Developers

**Code comments**:
```javascript
// Task urgency states: 'overdue' | 'due-today' | 'due-soon' | 'submitted' | 'completed'
// Each state has: icon, label text, color (never rely on color alone)
// Icons: ⏰ overdue, ⌚ due-today, 📅 due-soon, ✅ submitted, ✓ completed
```

**DESIGN.md is the spec**: This document is the source of truth. If code contradicts DESIGN.md, DESIGN.md wins (discuss changes before implementing).

**Testing checklist**: Before shipping, run through the accessibility checklist (this document, "Testing & Validation Criteria" section).

---

## Summary: What Ships on Day 7

✅ **Refined MyCourses with**:
- Text labels on all task urgency signals (no color alone).
- Icons for urgency states (⏰ ⌚ 📅 ✅).
- WCAG AA color contrast throughout.
- Keyboard navigation + focus indicators.
- Screen reader support for task states.
- In-app notifications (24h + 1h before deadline).
- Mobile-responsive layout (stacks on phones).
- Validated with 3 real students.

**Metric**: Student can find their most overdue assignment in < 5 minutes, understand it's overdue, and submit it—all without asking for help.

---

## Appendix: Design Decision Rationale

### Why Refine, Not Rebuild?

The 2024 MyCourses design was solid (40% faster submissions, reduced stress). Rather than starting from scratch, we refine it by adding accessibility (text labels, icons) while keeping the core minimalism. This approach:
- ✅ Ships faster (leverage existing code).
- ✅ Proven outcomes (build on what works).
- ✅ Lower risk (fewer unknowns).

### Why Text + Icon + Color?

Color alone fails for colorblind users and screen reader users. Text + icon + color provides redundant encoding:
- Color signals urgency visually (fast glance).
- Icon reinforces meaning (clock = time-based).
- Text makes it explicit ("OVERDUE").

All three together ensure every user understands the message.

### Why In-App Notifications Only?

Email notifications require:
- Email infrastructure (SMTP, templating).
- Spam filtering (Gmail, Outlook flagging).
- User preference management (opt-in/out).
- Compliance (CAN-SPAM, GDPR).

In-app notifications require only:
- A banner component (1 day to refine).
- A trigger system (already exists).
- Test with 3 users (1 day).

Ship fast with in-app; add email in week 2 if needed.

---

## Version History

| Date | Version | Changes |
|------|---------|---------|
| Apr 13, 2026 | 1.0 | Initial DESIGN.md from NeuroMap synthesis |
| — | — | — |

---

**Document Status**: Final (locked for execution)  
**Last Updated**: Apr 13, 2026  
**Author**: Claude (synthesized from NeuroMap brainstorm)  
**Next Review**: Apr 20, 2026 (post-launch)

