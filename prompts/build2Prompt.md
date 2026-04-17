Goal: Generate minimalist component specifications grounded in Dieter Rams philosophy and validated through NeuroMap design thinking.

Process: Read all provided files → synthesize design argument → output component specs for Build 2.

---

## INPUT FILES (Provided Context)

You will analyze these files in order:

1. /Users/mello/Downloads/contra/myCourses/initialResearch/executionBrief.md — Project timeline, scope, deliverables
2. /Users/mello/Downloads/contra/myCourses/initialResearch/initialResearch.md — Original MyCourses design specification 
3. /Users/mello/Downloads/contra/myCourses/designTokens/ramsExploration.md — Dieter Rams principles + why custom system is chosen
4. /Users/mello/Downloads/contra/myCourses/designTokens/myCourses_designTokens.json — Exact color, spacing, typography system
5. /Users/mello/Downloads/contra/myCourses/initialResearch/neuromap-session-1776139224796.txt — Initial brainstorming (proof of thinking)
6. /Users/mello/Downloads/contra/wireframes/wireframeValidation.txt — Design thinking validation (V1→V2→V3 iteration + Material/Carbon rejection)

---

## SYNTHESIS TASK

After reading all files, answer these questions (internally):

1. Why was Material Design rejected?
   - What specific NeuroMap feedback made it unsuitable?
   - What would Material's approach contradict?

2. Why was IBM Carbon rejected?
   - What enterprise complexity is unnecessary?
   - What does Carbon assume that MyCourses doesn't need?

3. Why is custom minimalist optimal?
   - What NeuroMap problems did V3 solve that Material/Carbon wouldn't?
   - Which Dieter Rams principles does V3 achieve?

4. What are the 5 core components?
   - From initialResearch.md, identify: Task states, Buttons, Alerts, Layout, Calendar
   - From myCourses_designTokens.json: Get exact colors, spacing, typography
   - From ramsExploration.md: Apply minimalism principles

5. What makes these components "Rams-aligned"?
   - Are they useful? (solves task urgency problem)
   - Are they aesthetic? (minimalist, intentional)
   - Are they unobtrusive? (disappear, students focus on work)
   - Are they "as little design as possible"? (no excess)

---

## OUTPUT STRUCTURE

Generate THREE markdown files:

### FILE 1: `MyCourses_Dieter_Rams_Philosophy.md`

```markdown
# MyCourses: Dieter Rams Philosophy Applied

## Why Not Material Design?
[Synthesize from NeuroMap: Material's visual richness contradicts clarity for urgent task management]

## Why Not IBM Carbon?
[Synthesize from NeuroMap: Enterprise complexity overkill for single-designer, 5-day sprint]

## Why Custom Minimalist?
[Synthesize from NeuroMap V3 analysis + Rams principles]

## Rams' 10 Principles Achievement

| Principle | Material | Carbon | Custom | Proof |
|-----------|----------|--------|--------|-------|
| 1. Innovative | ✅ | ✅ | ✅ | AI-native workflow + intentional design |
| 2. Useful | ❌ | ⚠️ | ✅ | Solves task urgency, not distracted by richness |
| 3. Aesthetic | ✅ | ✅ | ✅ | Minimalist beauty, not ornamental |
| 4. Honest | ❌ | ❌ | ✅ | Text + icon visible, no hidden complexity |
| 5. Unobtrusive | ❌ | ❌ | ✅ | Disappears, students focus on work |
| 6. As little design as possible | ❌ | ❌ | ✅ | 5 components, 3 colors, 5px grid |
| 7. Care for detail | ✅ | ✅ | ✅ | Semantic tokens, WCAG AA |
| 8. Environment-conscious | ✅ | ⚠️ | ✅ | Minimal visual debt = fast load |
| 9. Humble design | ❌ | ⚠️ | ✅ | Not trying to be impressive, trying to be clear |
| 10. Good design is as little design as possible (extended) | ❌ | ❌ | ✅ | Proven through V1→V2→V3 iteration |

Score: Custom = 9/10 | Material = 3/10 | Carbon = 4/10

## Validation Through NeuroMap
- V1 problems: repetition, color-reliance, unclear hierarchy
- V2 attempt: better spacing, but still color-reliant
- V3 solution: icons + labels, 2-column layout, clear sections
- NeuroMap V3 analysis: "Color-coding aids quick comprehension" ✅

## Design Thinking Conclusion
Custom minimalist system is not a compromise or accident.
It is the intentional choice that best serves:
- RIT students (primary user: find + submit before deadline)
- 5-day sprint (time constraint: build fast, ship confident)
- Dieter Rams philosophy (minimize visual debt, maximize clarity)
```

---

### FILE 2: `MyCourses_Component_Specifications.md`

Using `myCourses_designTokens.json` and `initialResearch.md`, generate:

```markdown
# MyCourses: Component Specifications (Dieter Rams Minimalist)

## Design Tokens (From Token System)

Colors:
- Primary Brand: #ED3F1C (red, 5.1:1 contrast)
- Neutrals: #FFFFFF, #FBF8EF, #E4DECF, #9BA2A5, #696765, #292624
- Accent: #3B4B59
- Semantic: bg-canvas (#FBF8EF), bg-surface (#FFFFFF), text-primary (#292624)

Spacing: 0, 5, 10, 15, 20, 25, 30, 40, 50, 60, 80, 100, 120px (5px base)

Typography:
- H1: 28px/600 weight
- H2: 20px/600 weight
- H3: 16px/600 weight
- Body: 16px/400 weight
- Small: 14px/400 weight

Radii: 0, 10, 20, 30, 40px (semantic: null/sm/md/lg/xl)

Stroke: 0, 1, 2px (none/default/strong)

---

## Component 1: Task Item (5 States)

Purpose: Display task urgency without color alone.

Rule: ALWAYS text + icon + color (accessibility-first)

### State 1: OVERDUE
- Icon: ⏰
- Color: #E74C3C (red)
- Border: 4px left border (#E74C3C)
- Text: "OVERDUE" + due date
- Spacing: 15px padding, 10px icon-to-text gap

### State 2: DUE TODAY
- Icon: ⌚
- Color: #F39C12 (orange)
- Border: 4px left border (#F39C12)
- Text: "DUE TODAY" + due date
- Spacing: 15px padding, 10px icon-to-text gap

### State 3: DUE SOON
- Icon: 📅
- Color: #9BA2A5 (gray)
- Border: 1px left border (#9BA2A5)
- Text: "DUE SOON" + due date
- Spacing: 15px padding, 10px icon-to-text gap

### State 4: SUBMITTED
- Icon: ✅
- Color: #27AE60 (green)
- Border: 4px left border (#27AE60)
- Text: "SUBMITTED" + submitted date
- Spacing: 15px padding, 10px icon-to-text gap

### State 5: COMPLETED
- Icon: ✓
- Color: #9BA2A5 (gray)
- Border: 1px left border (#9BA2A5)
- Text: "COMPLETED" + completion date
- Spacing: 15px padding, 10px icon-to-text gap

Rams Principle: "Good design is honest" — icon + text + color = no ambiguity

---

## Component 2: Button (3 Variants)

Purpose: Clear action affordance, minimal decoration.

### Variant 1: PRIMARY
- Background: #ED3F1C
- Text: #FFFFFF, 16px/600
- Padding: 12px 20px (min-height 44px, WCAG touch target)
- Radius: 10px
- Border: none
- State: Hover = darker shade (#C92F17), focus outline 2px #ED3F1C

### Variant 2: SECONDARY
- Background: #FFFFFF
- Border: 2px #ED3F1C
- Text: #ED3F1C, 16px/600
- Padding: 10px 18px (min-height 44px)
- Radius: 10px
- State: Hover = light background #FBF8EF, focus outline 2px #ED3F1C

### Variant 3: DISABLED
- Background: #E4DECF
- Text: #9BA2A5, 16px/400
- Padding: 12px 20px (min-height 44px)
- Radius: 10px
- Border: none
- State: No hover, cursor not-allowed

Rams Principle: "As little design as possible" — flat, no shadows, intentional color

---

## Component 3: Alert (3 Types)

Purpose: Communicate system status without overwhelming.

### Type 1: SUCCESS
- Icon: ✅
- Color: #27AE60
- Background: #E8F5E9
- Text: Descriptive message, 16px/400
- Border: 4px left border (#27AE60)
- Role: `role="alert"` + `aria-live="polite"`
- Auto-dismiss: 5 seconds

### Type 2: ERROR
- Icon: ⚠️
- Color: #E74C3C
- Background: #FFEBEE
- Text: Descriptive message, 16px/400
- Border: 4px left border (#E74C3C)
- Role: `role="alert"` + `aria-live="assertive"`
- Auto-dismiss: No (requires user action)

### Type 3: URGENT/WARNING
- Icon: 🔔
- Color: #F39C12
- Background: #FFF3E0
- Text: Descriptive message, 16px/400
- Border: 4px left border (#F39C12)
- Role: `role="alert"` + `aria-live="polite"`
- Auto-dismiss: 10 seconds

Rams Principle: "Good design is unobtrusive" — conveys status, doesn't intrude

---

## Component 4: Announcement Card (2-Column Layout)

Purpose: Show expanded announcement + quick summary without scrolling.

Layout: 
- Container: 2 columns, 20px gap
- Left column: Full announcement (60% width)
- Right column: Status badge (40% width)

### Left Column (Expanded Announcement)
- Title: H3, 16px/600, #292624
- Brief: Body, 16px/400, #696765
- Date/Author: Small, 14px/400, #9BA2A5
- Padding: 15px

### Right Column (Quick Status)
- Badge: Icon + text
- Background: semantic color (based on state)
- Options: "URGENT", "PENDING", "RESOLVED"
- Padding: 15px
- Centered, vertical alignment

Rams Principle: "Good design is useful" — both detail AND summary visible, no scrolling needed

---

## Component 5: Task Dashboard Layout

Purpose: Organize sections with clear hierarchy and spacing.

Layout Structure:
1. Header: Welcome + user name (H2, 20px/600)
2. Current Course: H3 + description + 2 buttons (Continue / View details)
3. Recently Visited: 3 cards, each with title + progress bar + action button
4. Upcoming Tasks + Overdue Tasks: Separate sections, each Task Item component
5. Announcements: 2-column layout (Component 4), 3 instances
6. Calendar: Monthly view with color-coded task states
7. Support Sections: 2-column grid of info cards

Spacing:
- Section-to-section: 40px vertical gap
- Card-to-card: 15px gap
- Content-to-text: 10px gap
- Padding: 20px per section

Rams Principle: "As little design as possible" — grid layout, minimal decoration, focus on content

---

## WCAG AA Compliance (Built-In)

- Color Contrast: All text meets 4.5:1 ratio (even on colored backgrounds)
- Icon + Text Redundancy: No color alone (task states, alerts, buttons)
- Touch Targets: Buttons min 44x44px (mobile-friendly)
- Semantic HTML: `role="alert"`, `aria-live`, section headings
- Focus States: Visible outline on all interactive elements
- Animations: None (fast load, no motion sickness risk)

---

## Implementation Notes

- No animations or transitions (Rams principle: invisible design, fast)
- No shadows or elevation (minimize visual debt)
- System fonts only (faster load, no web font requests)
- 5px grid throughout (intentional, not accidental)
- 3 colors + neutrals (clarity, not variety)
- 5 core components (minimalist scope)

This is the smallest viable design system that solves the problem: help students find + submit assignments on time.
```

---

### FILE 3: `MyCourses_Rams_Component_Build2.json`

```json
{
  "build": "Build 2: Dieter Rams Components",
  "version": "1.0",
  "date": "2026-04-14",
  "philosophy": "Minimalist, accessibility-first, intentional design",
  "components": {
    "taskItem": {
      "name": "Task Item",
      "states": ["overdue", "dueToday", "dueSoon", "submitted", "completed"],
      "rule": "text + icon + color (never color alone)",
      "accessibility": "WCAG AA, semantic color + icon redundancy",
      "spacing": "15px padding, 10px icon-to-text gap"
    },
    "button": {
      "name": "Button",
      "variants": ["primary", "secondary", "disabled"],
      "minHeight": "44px",
      "accessibility": "WCAG AA touch target, focus outline"
    },
    "alert": {
      "name": "Alert",
      "types": ["success", "error", "urgent"],
      "autoDismiss": ["5s", "none", "10s"],
      "accessibility": "role='alert', aria-live, WCAG AA"
    },
    "announcementCard": {
      "name": "Announcement Card",
      "layout": "2-column",
      "leftColumn": "60% (full announcement)",
      "rightColumn": "40% (status badge)"
    },
    "dashboard": {
      "name": "Task Dashboard",
      "sections": 7,
      "spacing": "40px section-to-section, 15px card-to-card",
      "grid": "5px base, intentional spacing"
    }
  },
  "designTokens": {
    "colors": {
      "brand": "#ED3F1C",
      "neutrals": ["#FFFFFF", "#FBF8EF", "#E4DECF", "#9BA2A5", "#696765", "#292624"],
      "accent": "#3B4B59",
      "semantic": {
        "bg-canvas": "#FBF8EF",
        "bg-surface": "#FFFFFF",
        "text-primary": "#292624"
      }
    },
    "spacing": [0, 5, 10, 15, 20, 25, 30, 40, 50, 60, 80, 100, 120],
    "typography": {
      "h1": "28px/600",
      "h2": "20px/600",
      "h3": "16px/600",
      "body": "16px/400",
      "small": "14px/400"
    }
  },
  "ramsAlignment": {
    "innovative": "AI-native workflow",
    "useful": "Solves task urgency, minimal distraction",
    "aesthetic": "Minimalist beauty",
    "honest": "Text + icon visible",
    "unobtrusive": "Disappears, focus on work",
    "asLittleDesignAsPossible": "5 components, 3 colors, 5px grid",
    "score": "9/10 Rams principles achieved"
  },
  "rejections": {
    "material": "Too much visual richness, contradicts clarity",
    "carbon": "Enterprise complexity overkill for 5-day sprint",
    "justification": "NeuroMap V1→V2→V3 iteration proved custom minimalist optimal"
  }
}
```

---

## EXECUTION INSTRUCTIONS

1. Read all 6 input files in order (context building)
2. Answer the 5 synthesis questions internally
3. Generate the 3 output files above
4. Save to `/mnt/user-data/outputs/`:
   - `MyCourses_Dieter_Rams_Philosophy.md`
   - `MyCourses_Component_Specifications.md`
   - `MyCourses_Rams_Component_Build2.json`

---

## SUCCESS CRITERIA

✅ Component specs are grounded in NeuroMap design thinking (not arbitrary)
✅ Dieter Rams philosophy is explicitly proven (not just referenced)
✅ Material/Carbon rejection is backed by evidence (not opinion)
✅ WCAG AA accessibility is built-in (not an afterthought)
✅ 5px grid and 3-color system are intentional (not coincidence)
✅ Files are ready for Step 2 (Build 2 design frames)

---

## NEXT STEP

Once Step 1 is complete, you will execute Step 2:

Antigravity: Build 2 Step 2 — Create Design Frames Using Component Specifications

Input: Component specs (above) + V3 wireframes
Output: Build 2 custom wireframe frames (ready for code generation)