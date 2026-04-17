# MyCourses 2026: Quick Reference Card
## Use While Sketching in Paper Canvas (Days 3-4)

---

## COLORS (Hex Values)

```
Brand Orange:       #ED3F1C  ← Buttons, primary actions
Urgent Red:         #E74C3C  ← Overdue label
Success Green:      #27AE60  ← Submitted/completed
Warning Orange:     #F39C12  ← Due today/soon

White (cards):      #FFFFFF
Off-White (page):   #FBF8EF
Light Gray (border):#E4DECF
Mid Gray (text):    #9BA2A5
Dark Gray (text):   #696765
Near-Black (head):  #3A3A3A
```

---

## TYPOGRAPHY

```
H1 (page title):    28px / bold / line-height 1.2
H2 (section):       20px / bold / line-height 1.25
H3 (task name):     16px / bold / line-height 1.5
Body:               16px / regular / line-height 1.5
Small (metadata):   14px / regular / line-height 1.4

Rules:
- Minimum 16px for readability
- No all-caps except "OVERDUE", "DUE TODAY"
- No italic; use bold for emphasis
```

---

## SPACING (Use These Values Only)

```
5px   (xs)   - Icon to text gap
10px  (sm)   - Small inline gaps
15px  (md)   - Task item spacing
20px  (lg)   - Card padding
30px  (xl)   - Section spacing
40px  (2xl)  - Large section breaks
60px  (3xl)  - Page section gaps
```

Apply to:
- Card padding: **20px** (all sides)
- Section gaps: **40px** (between "Last Visited" and "Upcoming")
- Task item padding: **16px top/bottom, 20px left/right**
- Icon-text gap: **5px**
- Task item gap: **15px** (between items in list)

---

## COMPONENT SPECS

### Task Item (All 5 States)

**State 1: OVERDUE**
```
[⏰] OVERDUE
Problem 31 — PACK 731
Due: Nov 4 @ 11:59 PM
━━━━━━━━━━━━━━━━━
Left border: 4px red #E74C3C
Background: white #FFFFFF
Padding: 16px top/bottom, 20px left/right
```

**State 2: DUE TODAY**
```
[⌚] DUE TODAY
Problem 36 — PACK 731
Due: Today @ 11:59 PM
Left border: 4px orange #F39C12
```

**State 3: DUE SOON**
```
[📅] DUE SOON
W3 - First Review
Due: Friday @ 5:00 PM
Left border: 1px gray #E4DECF
```

**State 4: SUBMITTED**
```
[✅] SUBMITTED
Problem 28 — PACK 731
Submitted: Nov 2 @ 3:15 PM
Left border: 4px green #27AE60
```

**State 5: COMPLETED**
```
✓ COMPLETED
Problem 25 — PACK 731
Grade: A (95%)
Left border: 1px gray
```

---

### Buttons

**Primary Button**
```
Text: "Submit Assignment"
Background: #ED3F1C (orange)
Text color: white
Height: 44px minimum
Padding: 12px horizontal, 10px vertical
Rounded: small (5-10px)
Focus: 2px outline in #ED3F1C, offset 2px
```

**Secondary Button**
```
Background: white #FFFFFF
Border: 1px #E4DECF (gray)
Text: #696765 (dark gray)
Height: 44px minimum
Focus: 2px outline in #696765
```

**Disabled Button**
```
Background: #E4DECF (light gray)
Text: #9BA2A5 (mid gray), 50% opacity
No hover/focus
```

---

### Alerts

**Success** (5 sec auto-dismiss)
```
[✅] Submitted! Assignment received.
Background: Light green (doesn't matter, just light)
Text: #27AE60 (green)
Position: Top of page, full-width
```

**Urgent** (Persists)
```
[⏰] URGENT: Due in 1 hour.  [X]
Background: Light red
Text: #E74C3C (red)
Has close button
```

**Error** (Persists)
```
[❌] Error: Could not save.  [Retry] [X]
Background: Light red
Text: #E74C3C
```

---

## LAYOUT GRIDS

**Desktop (1440px)**
- Content max-width: 1200px, centered
- Padding: 120px left/right
- Example: 5 sections stacked vertically

**Tablet (768px)**
- Full width with 40px padding
- Can use 2 columns

**Mobile (375px)**
- Full width with 16px padding
- Single column only
- Stack everything vertically

---

## ACCESSIBILITY CHECKLIST (While Sketching)

✅ **Color**: Every colored signal also has text label
  - Red badge = Red badge + "OVERDUE" text
  - Green badge = Green badge + "SUBMITTED" text
  - Never color alone

✅ **Icons**: Every icon has a label next to it
  - Icon ⏰ next to text "OVERDUE"
  - Not emoji alone; use semantic icons

✅ **Focus**: Draw 2px outline on all buttons/clickables
  - Show default, hover, focus, disabled states
  - Make focus state VISIBLE (not hidden)

✅ **Touch Targets**: All buttons 44px height minimum
  - Annotate: "44px min height (WCAG AA)"

✅ **Text**: Body text is 16px minimum
  - Smaller text (timestamps) can be 14px
  - Never smaller than 12px

✅ **Whitespace**: Leave breathing room
  - 40px between major sections
  - Generously spaced = calm = Rams minimalism

---

## FRAMES TO SKETCH (Days 3-4)

### Frame 1: Desktop Dashboard (Main View)
- Header (orange bar)
- Last Visited (1 card)
- Upcoming + Overdue Tasks (side-by-side, show all 5 task states)
- Calendar (placeholder OK)
- Announcements

### Frame 2: Task Component Library
- Show all 5 task states stacked
- Annotate: colors, spacing, border size, text sizes

### Frame 3: Mobile Layout (375px)
- Single column
- Full-width buttons (44px height)
- Last Visited as dropdown
- Tasks stacked

### Frame 4: Alerts
- Success alert (light green + ✅ icon + text)
- Urgent alert (light red + ⏰ icon + text + X button)
- Error alert (light red + ❌ icon + text + buttons)

### Frame 5: Focus States
- Show button with focus outline (2px, offset 2px)
- Show link with focus outline
- Label: "Focus outline: 2px solid #ED3F1C"
- Show tab order numbers (1, 2, 3... on clickables)

---

## COLORS (FOR ANNOTATING)

When you label a color in Paper, use:
```
"#ED3F1C (Brand Orange)" 
"#E74C3C (Urgent Red)"
"#FFFFFF (White)"
etc.
```

So developers copy exact hex values.

---

## SPACING (FOR ANNOTATING)

When you label spacing in Paper, use:
```
"spacing/lg: 20px"
"spacing/2xl: 40px"
"spacing/xs: 5px"
```

This ties to your token system.

---

## REMEMBER

1. **Minimalism**: Every element earns its place. If it doesn't serve learning, remove it.
2. **Accessibility**: Text + icon + color for all signals. Never color alone.
3. **Clarity**: A student should instantly understand what's overdue, what's due today, what's submitted.
4. **Calm**: Generous whitespace, soft colors, clear hierarchy.
5. **Keyboard**: Sketch focus states. Make them obvious.

---

**Print this. Keep it visible while sketching. Reference it constantly.**

These are your ground truth values. Everything in Paper must align with this.

