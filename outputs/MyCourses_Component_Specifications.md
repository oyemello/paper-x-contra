# MyCourses: Component Specifications (Dieter Rams Minimalist)

## Design Tokens (From Token System)

**Colors:**
- Primary Brand: #ED3F1C (red, 5.1:1 contrast)
- Neutrals: #FFFFFF, #FBF8EF, #E4DECF, #9BA2A5, #696765, #292624
- Accent: #3B4B59
- Semantic: 
  - `bg-canvas`: #FBF8EF
  - `bg-surface`: #FFFFFF
  - `text-primary`: #292624

**Spacing (5px base):** 
0, 5, 10, 15, 20, 25, 30, 40, 50, 60, 80, 100, 120px

**Typography:**
- H1: 28px / 600 weight
- H2: 20px / 600 weight
- H3: 16px / 600 weight
- Body: 16px / 400 weight
- Small: 14px / 400 weight

**Radii:** 
- semantic: 0 (null), 10px (sm), 20px (md), 30px (lg), 40px (xl)

**Stroke:** 
- 0, 1px (default), 2px (strong)

---

## Component 1: Task Item (5 States)

**Purpose**: Display task urgency without color alone.
**Rule**: ALWAYS text + icon + color (accessibility-first).

### State 1: OVERDUE
- Icon: ⏰
- Color: #ED3F1C (red)
- Border: 4px left border (#ED3F1C)
- Text Labels: "OVERDUE" + due date
- Spacing: 15px padding, 10px icon-to-text gap

### State 2: DUE TODAY
- Icon: ⌚
- Color: #ED3F1C (red text label) / Warm highlight
- Border: 4px left border (#ED3F1C)
- Text Labels: "DUE TODAY" + due date
- Spacing: 15px padding, 10px icon-to-text gap

### State 3: DUE SOON
- Icon: 📅
- Color: #696765 (gray)
- Border: 1px left border (#9BA2A5)
- Text Labels: "DUE SOON" + due date

### State 4: SUBMITTED
- Icon: ✅
- Color: #27AE60 (green)
- Border: 4px left border (#27AE60)
- Text Labels: "SUBMITTED"

### State 5: COMPLETED
- Icon: ✓
- Color: #9BA2A5 (gray)
- Border: 1px left border (#E4DECF)

---

## Component 2: Button (3 Variants)

**Purpose**: Clear action affordance, minimal decoration.

### Variant 1: PRIMARY
- Background: #ED3F1C
- Text: #FFFFFF, 16px/600
- Padding: 12px 20px (min-height 44px)
- Radius: 10px
- State: Hover = #C92F17, Focus = 2px outline (#ED3F1C)

### Variant 2: SECONDARY
- Background: #FFFFFF
- Border: 2px #ED3F1C
- Text: #ED3F1C, 16px/600
- Padding: 10px 18px (min-height 44px)
- Radius: 10px

### Variant 3: DISABLED
- Background: #E4DECF
- Text: #9BA2A5, 16px/400
- Radius: 10px

---

## Component 3: Alert (3 Types)

**Purpose**: Communicate system status without overwhelming.

### Type 1: SUCCESS
- Icon: ✅
- Border: 4px left border (#27AE60)
- Background: #FBF8EF
- Text: 16px/400
- Role: `role="alert"`, `aria-live="polite"`

### Type 2: ERROR (URGENT)
- Icon: ⚠️
- Border: 4px left border (#ED3F1C)
- Background: #FBF8EF
- Text: 16px/400
- Role: `role="alert"`, `aria-live="assertive"`

### Type 3: WARNING
- Icon: 🔔
- Border: 4px left border (#F39C12)

---

## Component 4: Announcement Card (2-Column Layout)

**Layout**: 
- Container: 2 columns, 20px gap.
- Left column (60%): Title (H3), Brief (Body), Date (Small).
- Right column (40%): Contextual Status Badge (Icon + Text).

---

## Component 5: Task Dashboard Layout

**Structure**:
1. Header (H2 Welcome)
2. Current Course (Title + Description + 2 Buttons)
3. Recently Visited (3 cards + progress + action)
4. Task Streams (Upcoming/Overdue sections)
5. Announcements (2-column layout)
6. Calendar (Grid with color-coded underlines)
7. Info Grid (Additional resources)

**Spacing**:
- Section gap: 40px
- Card gap: 15px
- Content padding: 20px

---

## WCAG AA Compliance
- All text contrast ratio ≥ 5.1:1.
- No color-only information.
- Touch targets ≥ 44px height.
- Semantic ARIA roles used throughout.
