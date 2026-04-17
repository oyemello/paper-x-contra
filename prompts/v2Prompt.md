# Paper Hi-Fi Polish Prompt
## Refine Wireframes → Production-Ready Designs Using Paper MCP

---

## CUE:

You are an AI designer refining low-fidelity wireframes into production-ready hi-fi designs. Your task is to take the 10 wireframes from the Wireframe Generation Prompt (5 Material Design + 5 IBM Carbon) and **elevate them to hi-fidelity** by adding:
- Detailed component annotations
- Exact spacing measurements
- Color contrast values
- Accessibility specifications
- Interaction states (hover, focus, disabled)
- Typography details
- Responsive behavior notes

This serves **dual purposes**:
1. **Proof of concept**: Show how Material Design + IBM Carbon would look fully detailed
2. **Design specification**: Developers use these annotations to implement (or validate against custom system)

---

## INPUTS:

Review these files for polish details:
- `initialResearch.md` — Original MyCourses design context (what works)
- `executionBrief.md` — Timeline, success metrics, accessibility requirements
- `neuromap-session-1776139224796.txt` — Brainstorm decisions + accessibility analysis
- `ramsExploration.md` — Wireframe specifications + component details
- `myCourses_designTokens.json` — Token values (colors, spacing, typography)

---

## TASK:

### Part 1: Polish Material Design Frames (60 min)

For each Material Design frame, add detailed annotations and refinements.

#### MD-1: Desktop Dashboard (Polish Details)

**Existing frame structure**: Header (64px, blue), Last Visited card, Upcoming tasks, Overdue tasks, Calendar.

**Add these refinements**:

1. **Header Refinement**:
   - Background: #1976D2 (Material primary blue)
   - Height: 64px (Material standard)
   - Shadow/elevation: Material elevation 4 (shadow: 0px 2px 4px rgba(0,0,0,0.1), 0px 8px 16px rgba(0,0,0,0.1))
   - Typography: 20px Roboto, bold, white text (#FFFFFF)
   - Logo size: 32x32px
   - Nav icons: 24px size, 8px padding around each
   - Annotation: "Material app bar (elevation 4, rgba shadow)"

2. **Last Visited Card**:
   - Position: 40px from left, 100px from top
   - Size: 400px width × 120px height
   - Background: #FFFFFF (white)
   - Border: 1px #E0E0E0 (light gray divider)
   - Border-radius: 4px (Material default)
   - Shadow/elevation: Material elevation 1 (shadow: 0px 2px 1px rgba(0,0,0,0.05))
   - Padding: 16px (8px * 2)
   - Typography:
     - Title: 16px Roboto bold, #1976D2 (Material primary)
     - Subtitle: 14px Roboto regular, #757575 (secondary text)
   - Annotation: "Material card (elevation 1, 4px radius, 16px padding)"
   - Annotation: "Title: 16px Roboto bold, #1976D2"

3. **Upcoming Tasks Section**:
   - Title: "Upcoming Tasks"
     - Font: 20px Roboto bold, #1976D2
     - Position: 40px from left, 240px from top
   - Task items (list of 3-4):
     - Each item: Material list item style
     - Height: 72px per item
     - Padding: 16px horizontal, 12px vertical
     - Background: #FFFFFF
     - Border-bottom: 1px #EEEEEE (Material divider)
     - Content:
       - Icon: 24px (⏰, 📅, etc.)
       - Icon-to-text gap: 12px
       - Task name: 16px Roboto, #212121 (primary text)
       - Course code: 14px Roboto, #757575 (secondary)
       - Due date: 14px Roboto, #BDBDBD (tertiary)
   - Annotation: "Material list item (divider #EEEEEE, 16px padding)"
   - Annotation: "Icon size: 24px, gap: 12px"

4. **Overdue Tasks Section** (same structure as Upcoming, but with error styling):
   - Background: #FFEBEE (Material error light, token `$red-50`)
   - Left border: 4px #D32F2F (Material error, token `$red-600`)
   - Title: "Overdue Tasks" (20px, #D32F2F)
   - Icons are red (#D32F2F)
   - Annotation: "Material error state (light #FFEBEE, dark #D32F2F)"
   - Annotation: "Left border: 4px #D32F2F"

5. **Calendar Widget**:
   - Position: Bottom right (if space allows)
   - Size: 300px width × 320px height
   - Background: #FFFFFF
   - Title: "Calendar" (16px Roboto bold, #1976D2)
   - Grid structure:
     - Days of week: 12px Roboto, gray
     - Day numbers: 14px Roboto, dark gray
     - Selected dates: Background #1976D2, text white
     - Borders: 1px #E0E0E0 between cells
   - Shadow: Material elevation 1
   - Annotation: "Material calendar widget (selected dates: #1976D2 background)"

6. **Spacing Annotations**:
   - Top margin (header to content): "64px (header height)"
   - Content padding: "40px from edges"
   - Section-to-section gap: "32px (Material spacing standard)"
   - Card padding: "16px (Material spacing scale)"
   - Annotation: "8px spacing grid throughout"

7. **Typography Summary**:
   - Annotation: "Font: Roboto (Material standard, web font)"
   - Annotation: "H1: 28px bold, H2: 20px bold, Body: 16px regular"
   - Annotation: "Line heights: 1.5 (body), 1.2 (headers)"

---

#### MD-2: Task Component Library (Polish Details)

Refine each task state with exact specifications.

**State 1: OVERDUE** (add detailed annotations):
- Background: #FFEBEE
- Left border: 4px #D32F2F
- Icon: ⏰ (24px, #D32F2F)
- Label: "OVERDUE" (14px Roboto bold, #D32F2F)
- Task name: "Problem 31 — PACK 731" (16px Roboto, #212121)
- Due date: "Due: Nov 4 @ 11:59 PM" (14px Roboto, #757575)
- Padding: 16px
- Height: 80px (minimum)
- Annotation: "WCAG AA Contrast: #D32F2F on #FFEBEE = 5.2:1 ✅"
- Annotation: "Icon + Label + Color (redundant encoding for accessibility)"
- Annotation: "Focus outline (if focused): 2px #D32F2F, offset 2px"

**State 2: DUE TODAY** (add detailed annotations):
- Background: #FFF3E0 (Material warning light)
- Left border: 4px #F57C00 (Material warning)
- Icon: ⌚ (24px, #F57C00)
- Label: "DUE TODAY" (14px Roboto bold, #F57C00)
- Annotation: "WCAG AA Contrast: #F57C00 on #FFF3E0 = 4.8:1 ✅"
- Annotation: "Hover state: background darkens to #FFE0B2"

**State 3: DUE SOON** (add detailed annotations):
- Background: #FFFFFF
- Border: 1px #BDBDBD
- Icon: 📅 (24px, #757575 gray)
- Label: "DUE SOON" (14px Roboto, #757575)
- Annotation: "WCAG AA Contrast: #757575 on #FFFFFF = 4.5:1 ✅"

**State 4: SUBMITTED** (add detailed annotations):
- Background: #E8F5E9 (Material success light)
- Left border: 4px #388E3C (Material success)
- Icon: ✅ (24px, #388E3C)
- Label: "SUBMITTED" (14px Roboto bold, #388E3C)
- Annotation: "WCAG AA Contrast: #388E3C on #E8F5E9 = 5.8:1 ✅"

**State 5: COMPLETED** (add detailed annotations):
- Background: #FFFFFF
- Border: 1px #BDBDBD
- Icon: ✓ (24px, #757575)
- Label: "COMPLETED" (14px Roboto, #757575, 50% opacity)
- Annotation: "Disabled state styling (lower contrast)"

**Summary annotations**:
- "All 5 states use redundant encoding: icon + label + color"
- "All contrast ratios pass WCAG AA (4.5:1 minimum)"
- "Spacing between states: 8px (Material grid)"

---

#### MD-3: Mobile Layout (Polish Details)

Add responsive annotations.

**Breakpoint: 375px width (iPhone-size)**:
- Full-width layout (no sidebars)
- Padding: 16px left/right (Material mobile padding)
- Last Visited: Full-width card (343px effective)
- Tasks: Full-width list (343px effective)
- Buttons: Full-width, 48px height (touch target)
- Font sizes: Same as desktop (16px body is readable on mobile)

**Header Changes**:
- Height: Still 64px (Material standard, generous on mobile)
- Text: Centered or left-aligned (if logo is visible)
- Nav icons: Hamburger menu instead of full nav bar

**Bottom Navigation**:
- Height: 56px (Material bottom nav standard)
- Background: #FAFAFA (Material light gray)
- 5 icons: Home, Courses, Calendar, Notifications, Profile
- Active icon: Colored #1976D2
- Inactive icons: Gray #757575
- Padding: 8px vertical (Material spacing)
- Annotation: "Material bottom navigation (56px height, 5 icons)"

**FAB (Floating Action Button)**:
- Position: Bottom-right, 16px from edges
- Size: 56px diameter (Material FAB standard)
- Background: #1976D2 (Material primary)
- Icon: + (white, 24px)
- Shadow: Material elevation 6 (darker shadow for prominence)
- Annotation: "Material FAB (elevation 6, 56px diameter, #1976D2)"

**Annotations**:
- "Mobile breakpoint: < 600px"
- "Full-width content (no sidebars)"
- "Bottom navigation for primary actions"
- "Touch targets: 48px minimum height"
- "No horizontal scroll at any zoom"

---

#### MD-4: Alerts (Polish Details)

Refine each alert state.

**Success Alert** (auto-dismiss, 5 sec):
- Position: Bottom-left corner, 16px from edges
- Size: Auto-width (max 400px), 48px height
- Background: #4CAF50 (Material success)
- Text: White (#FFFFFF), 14px Roboto
- Icon: ✅ (24px white)
- Icon-to-text gap: 12px
- Padding: 12px horizontal, 12px vertical
- Shadow: Material elevation 6 (prominent)
- Animation: Slide in from bottom (Material motion, 300ms ease-out)
- Annotation: "Material snackbar (success, auto-dismiss 5s)"
- Annotation: "Animation: slide in from bottom (Material standard)"

**Error Alert** (persists until dismissed):
- Position: Bottom-left (or top-center, Material choice)
- Background: #F44336 (Material error)
- Text: White, 14px Roboto
- Icon: ❌ (24px white)
- Close button: "X" (text button, white, 14px Roboto)
- Position: Right side of snackbar
- Annotation: "Material snackbar (error, persistent)"
- Annotation: "Close button: text style, white (#FFFFFF)"

**Info Alert**:
- Background: #2196F3 (Material info/accent blue)
- Text: White, 14px Roboto
- Icon: ⓘ (24px white)
- Action button: "Learn More" (text button, white)
- Annotation: "Material snackbar (info, action button)"

**Summary annotations**:
- "All alerts: 14px Roboto text, white on colored background"
- "Icon size: 24px"
- "Height: 48px (touch-friendly on mobile)"
- "Shadow: Material elevation 6"

---

#### MD-5: Focus States & Interaction (Polish Details)

**Default Button**:
- Background: #1976D2 (Material primary)
- Text: White (#FFFFFF), 14px Roboto bold
- Height: 36px (Material button height)
- Padding: 8px horizontal, 10px vertical (internal)
- Border-radius: 4px (Material default)
- Shadow: Material elevation 2 (subtle shadow)
- Annotation: "Background: #1976D2, height: 36px, elevation: 2"

**Hovered Button**:
- Background: Darkened primary (use Material overlay, ~8% opacity increase)
- Shadow: Material elevation 4 (enhanced)
- Animation: Transition 200ms ease-in-out
- Annotation: "Hover: elevation 4, background darkened (Material motion)"

**Focused Button**:
- Outline: 2px solid #1976D2 (Material focus color, same as background)
- Outline offset: 2px (visible gap)
- Annotation: "Focus: 2px outline #1976D2, offset 2px (WCAG AAA)"

**Disabled Button**:
- Background: #BDBDBD (Material disabled gray)
- Text: #757575 (secondary gray), 50% opacity
- Shadow: None (no elevation when disabled)
- Cursor: not-allowed
- Annotation: "Disabled: #BDBDBD background, #757575 text (50% opacity)"

**Tab Order**:
- Numbers 1, 2, 3, 4, 5 on interactive elements
- Arrows showing keyboard navigation flow
- Annotation: "Tab order: Left-to-right, top-to-bottom (logical flow)"

**Accessibility Summary**:
- Annotation: "WCAG AA Contrast: #1976D2 on white = 5.1:1 ✅"
- Annotation: "All interactive elements: 44px minimum touch target"
- Annotation: "Focus indicator visible without hover"

---

### Part 2: Polish IBM Carbon Frames (60 min)

For each IBM Carbon frame, add detailed annotations using Carbon's semantic token system.

#### C-1: Desktop Dashboard (Polish Details)

**Existing frame structure**: Dark header, left nav, grid-based content, semantic token colors.

**Add these refinements**:

1. **Header Refinement**:
   - Background: #161616 (Carbon `$gray-100`, dark background)
   - Height: 56px (IBM Carbon standard)
   - Shadow/border: 1px bottom border #393939 (Carbon `$ui-03`)
   - Typography: 16px IBM Plex Sans, bold, white text (#F4F4F4, Carbon `$text-04`)
   - Logo size: 32x32px
   - Breadcrumb nav: 14px IBM Plex Sans, light gray (#A8A8A8, Carbon `$text-02`)
   - Annotation: "IBM Carbon header (56px, #161616, $gray-100 token)"

2. **Left Navigation**:
   - Width: 256px (Carbon standard, expandable to 48px)
   - Background: #262626 (Carbon `$ui-02`, darker than header)
   - Menu items:
     - Height: 40px each
     - Text: 14px IBM Plex Sans, #F4F4F4 (Carbon `$text-04`)
     - Icon: 16px (Carbon icon size), left-aligned
     - Icon-to-text gap: 12px (Carbon spacing)
     - Padding: 12px horizontal, 12px vertical
   - Active item:
     - Left border: 4px #0062FF (Carbon interactive primary `$interactive-01`)
     - Background: Slightly lighter (#333333)
   - Hover state:
     - Background: #333333 (Carbon `$hover-ui`)
   - Annotation: "IBM Carbon left nav (256px, #262626, collapsible)"
   - Annotation: "Active item: 4px left border #0062FF ($interactive-01 token)"

3. **Last Visited Card** (Carbon tile):
   - Position: 256px + 24px from left, 80px from top
   - Size: 400px width × 120px height
   - Background: #F4F4F4 (Carbon `$ui-01`, light gray)
   - Border: 1px #E0E0E0 (Carbon `$ui-03`)
   - Border-radius: 0px (Carbon sharp corners, no radius)
   - Shadow: 1px #DCDCDC (subtle divider, no blur shadow)
   - Padding: 16px (8px * 2, Carbon `$spacing-05` * 2)
   - Typography:
     - Title: 16px IBM Plex Sans bold, #161616 (Carbon `$text-01`)
     - Subtitle: 12px IBM Plex Sans regular, #525252 (Carbon `$text-02`)
   - Annotation: "IBM Carbon tile (light #F4F4F4, no radius, 1px border #E0E0E0)"

4. **Data Table Section** (task list as table):
   - Title: "Tasks" (16px IBM Plex Sans bold, #161616)
   - Table structure:
     - Header row: Background #393939 (Carbon `$ui-04`), text white
     - Data rows: Background #FFFFFF (white) or #F4F4F4 (striped)
     - Row height: 48px (Carbon data table standard)
     - Dividers: 1px #E0E0E0 between rows
     - Padding: 16px horizontal per cell, 12px vertical
   - Columns:
     - Icon: 16px, left-aligned
     - Task name: 14px IBM Plex Sans, #161616
     - Course: 12px IBM Plex Sans, #525252 (secondary)
     - Due date: 12px IBM Plex Sans, #525252
   - Annotation: "IBM Carbon data table (48px row height, striped rows)"
   - Annotation: "Row spacing: 16px horizontal padding, 1px dividers"

5. **Calendar Widget**:
   - Position: Right side (if space allows)
   - Size: 300px width × 320px height
   - Background: #F4F4F4 (Carbon `$ui-01`)
   - Title: 14px IBM Plex Sans bold, #161616
   - Days grid:
     - Day labels: 12px, #525252
     - Day numbers: 14px, #161616
     - Selected: Background #0062FF (Carbon `$interactive-01`), text white
     - Dividers: 1px #E0E0E0 between cells
   - Border: 1px #E0E0E0
   - Annotation: "IBM Carbon calendar (selected dates: #0062FF background)"

6. **Spacing Grid**:
   - Content padding from left nav: 24px (8px * 3)
   - Section-to-section gap: 32px (8px * 4)
   - Annotation: "8px spacing grid throughout (strict Carbon standard)"

7. **Typography Summary**:
   - Annotation: "Font: IBM Plex Sans (Carbon standard, web font)"
   - Annotation: "H1: 20px bold, H2: 16px bold, Body: 14px regular"
   - Annotation: "Line heights: 1.5 (body), 1.2 (headers)"

---

#### C-2: Task Component Library (Polish Details)

Refine each task state using Carbon semantic tokens.

**State 1: OVERDUE** (Carbon error state):
- Background: #F1D5D5 (Carbon error-light, token `$support-01-light`)
- Left border: 4px #DA1E28 (Carbon error, token `$support-01`)
- Icon: ⏰ (16px, #DA1E28)
- Label: "OVERDUE" (14px IBM Plex Sans bold, #DA1E28)
- Task name: "Problem 31 — PACK 731" (14px IBM Plex Sans, #161616, token `$text-01`)
- Due date: "Due: Nov 4 @ 11:59 PM" (12px IBM Plex Sans, #525252, token `$text-02`)
- Padding: 16px
- Height: 80px
- Annotation: "Carbon error state (support-01 token, #DA1E28)"
- Annotation: "WCAG AA Contrast: #DA1E28 on #F1D5D5 = 5.2:1 ✅"

**State 2: DUE TODAY** (Carbon warning state):
- Background: #FCE2B6 (Carbon warning-light, token `$support-02-light`)
- Left border: 4px #F1C21B (Carbon warning, token `$support-02`)
- Icon: ⌚ (16px, #F1C21B)
- Label: "DUE TODAY" (14px IBM Plex Sans bold, #F1C21B)
- Annotation: "Carbon warning state (support-02 token, #F1C21B)"
- Annotation: "WCAG AA Contrast: #F1C21B on #FCE2B6 = 4.5:1 ✅"

**State 3: DUE SOON** (Carbon default):
- Background: #FFFFFF (white)
- Border: 1px #E0E0E0 (Carbon divider)
- Icon: 📅 (16px, #525252, token `$text-02`)
- Label: "DUE SOON" (14px IBM Plex Sans, #525252)
- Annotation: "Carbon default state (no semantic color signal, text only)"

**State 4: SUBMITTED** (Carbon success state):
- Background: #D1E8D0 (Carbon success-light, token `$support-03-light`)
- Left border: 4px #24A148 (Carbon success, token `$support-03`)
- Icon: ✅ (16px, #24A148)
- Label: "SUBMITTED" (14px IBM Plex Sans bold, #24A148)
- Annotation: "Carbon success state (support-03 token, #24A148)"
- Annotation: "WCAG AA Contrast: #24A148 on #D1E8D0 = 5.8:1 ✅"

**State 5: COMPLETED** (Carbon disabled):
- Background: #FFFFFF
- Border: 1px #E0E0E0
- Text: #8D8D8D (disabled gray, token `$text-disabled`)
- Icon opacity: 50%
- Annotation: "Carbon disabled state ($text-disabled token, #8D8D8D)"

**Summary annotations**:
- "All 5 states use semantic Carbon tokens (support-01 through support-03)"
- "Strict 8px spacing grid between states"
- "Icons: 16px (Carbon icon standard)"

---

#### C-3: Mobile Layout (Polish Details)

Add responsive annotations for 375px width.

**Breakpoint: 375px width**:
- Content area: 375px width - 32px padding (left/right) = 343px effective
- Grid columns: Collapse to 4 columns (from desktop 16-column grid)
- Padding: 16px left/right (Carbon mobile standard)

**Header**:
- Height: 56px (still full height for touch target)
- Text: Left-aligned "MyCourses"
- Hamburger menu: 32px, right-aligned

**Main Content**:
- Last Visited: Full-width tile, 343px effective
- Tasks: Full-width list items, 343px effective
- Buttons: Full-width, 48px height (touch target)

**Bottom Navigation** (if applicable):
- Position: Fixed at bottom, 56px height
- Icons: 24px (larger on mobile for touch)
- Labels: 12px text below icons (or hidden to save space)
- Annotation: "Mobile bottom nav (56px height, 5 icons)"

**Annotations**:
- "Mobile breakpoint: < 600px (375px example)"
- "Content width: 343px effective (375px - 32px padding)"
- "Grid columns: 4 (collapse from desktop 16)"
- "Touch targets: 48px minimum height"
- "No horizontal scroll at any zoom"

---

#### C-4: Alerts (Polish Details)

Refine each alert using Carbon semantics.

**Success Alert** (auto-dismiss, 5 sec):
- Position: Top of page, full-width banner
- Size: 100% width, 48px height
- Background: #24A148 (Carbon success, token `$support-03`)
- Text: White (#F4F4F4, token `$text-04`), 14px IBM Plex Sans
- Icon: ✅ (16px white)
- Icon-to-text gap: 12px
- Padding: 16px horizontal, 12px vertical
- Divider/border: 2px top border (darker green for definition)
- Animation: Fade in + slide down from top (Carbon motion, 300ms)
- Annotation: "IBM Carbon inline notification (success, support-03 token #24A148)"
- Annotation: "Auto-dismiss: 5 seconds"

**Error Alert** (persistent):
- Background: #DA1E28 (Carbon error, token `$support-01`)
- Text: White (#F4F4F4), 14px IBM Plex Sans
- Icon: ❌ (16px white)
- Close button: "X" (text button, white)
- Annotation: "IBM Carbon inline notification (error, support-01 token #DA1E28)"
- Annotation: "Persistent (user-dismissed)"

**Info Alert**:
- Background: #0062FF (Carbon info/primary, token `$interactive-01`)
- Text: White (#F4F4F4), 14px IBM Plex Sans
- Icon: ⓘ (16px white)
- Action button: "Learn More" (white text button)
- Annotation: "IBM Carbon inline notification (info, interactive-01 token #0062FF)"

**Summary annotations**:
- "All alerts: 14px IBM Plex Sans text, white text on colored backgrounds"
- "Icon size: 16px (Carbon icon standard)"
- "Height: 48px (touch-friendly on mobile)"
- "Semantic color tokens: support-01, support-02, support-03, interactive-01"

---

#### C-5: Focus States & Interaction (Polish Details)

**Default Button** (Carbon primary button):
- Background: #0062FF (Carbon interactive primary, token `$interactive-01`)
- Text: White (#F4F4F4, token `$text-04`), 14px IBM Plex Sans bold
- Height: 40px (Carbon button height, less than Material)
- Padding: 12px horizontal, 8px vertical (internal)
- Border-radius: 0px (Carbon sharp corners)
- Border: 2px solid transparent (placeholder for focus state)
- Shadow: None (Carbon is flat design)
- Annotation: "IBM Carbon primary button (40px height, #0062FF, no shadow)"

**Hovered Button**:
- Background: #0050E6 (darker shade, Carbon hover state)
- No elevation change (no shadow, flat design)
- Animation: Transition 100ms ease-in-out
- Annotation: "Hover: background #0050E6 (darker primary)"

**Focused Button**:
- Border: 2px solid #0062FF (Carbon focus ring, solid, not outline)
- Border offset: 2px (visible gap)
- Annotation: "Focus: 2px solid border #0062FF, offset 2px (WCAG AAA)"

**Disabled Button**:
- Background: #E0E0E0 (Carbon disabled background, token `$disabled-01`)
- Text: #8D8D8D (Carbon disabled text, token `$text-disabled`), 50% opacity
- Border: 2px transparent (same as default, but inactive)
- Cursor: not-allowed
- Annotation: "Disabled: #E0E0E0 background, #8D8D8D text"

**Tab Order**:
- Numbers 1, 2, 3, 4, 5 on interactive elements
- Arrows showing keyboard flow (left-to-right, top-to-bottom)
- Annotation: "Tab order: Logical flow (left-to-right, top-to-bottom)"

**Accessibility Summary**:
- Annotation: "WCAG AA Contrast: #0062FF on white = 5.1:1 ✅"
- Annotation: "All interactive elements: 44px minimum touch target"
- Annotation: "Focus indicator visible without hover (2px border)"

---

### Part 3: Create Comparison Slide (15 min)

Add a final summary slide to the Paper canvas.

#### Comparison Summary Slide (C-12)

**Content**:

```
╔════════════════════════════════════════════════════════════════════╗
║ MyCourses: Design System Comparison Summary                       ║
╠════════════════════════════════════════════════════════════════════╣

MATERIAL DESIGN
───────────────
✓ Visual richness + motion
✓ 50+ pre-built components
✓ Web font (Roboto) + elevation/shadows
✓ 8px spacing grid
✓ Colors: Primary blue, secondary, error, warning, success
✗ Complexity: Overkill for 5 components
✗ Motion: Contradicts minimalism (distraction)
✗ Web font: Adds 50KB load time
→ Verdict: Too much visual richness for learning focus

IBM CARBON
──────────
✓ Enterprise consistency + semantic tokens
✓ 100+ pre-built components
✓ Dark professional palette
✓ Strict 8px grid + design system validation (EDS-Atlas)
✗ Scale: Built for 50+ designers managing 20+ products
✗ Complexity: Requires learning Carbon ecosystem
✗ Dark palette: Student-facing app needs light, calm interface
→ Verdict: Designed for enterprises, not students

CUSTOM MYCOURSES SYSTEM
──────────────────────
✓ Minimalism (Dieter Rams): "Good design is invisible"
✓ 5 components only (what students need, no bloat)
✓ 5px spacing grid (fine-grained control)
✓ System fonts (instant load, no web font overhead)
✓ 3 colors for urgency signals (clarity + simplicity)
✓ Text + icon + color (redundant encoding for accessibility)
✓ Light, calm interface (supports learning focus)
✓ Shippable in 1 week by solo designer
→ Verdict: Intentional, lightweight, proven

DECISION MATRIX
───────────────
| Aspect              | Material | Carbon | Custom |
|─────────────────────|----------|--------|--------|
| Philosophy          | Richness | Scale  | Clarity|
| Complexity          | High     | Extreme| Low    |
| Ship time (1 week)  | ✗        | ✗      | ✅     |
| Learn curve         | Medium   | High   | Low    |
| Components needed   | 5 of 50+ | 5 of 100+ | 5   |
| Font overhead       | 50KB     | 60KB   | 0KB    |
| Motion required     | Yes      | No     | No     |
| Student focus       | ✗        | ✗      | ✅     |

WHY CUSTOM IS RIGHT FOR MYCOURSES
──────────────────────────────────
1. Aligned with Dieter Rams minimalism (proven philosophy)
2. Fast to ship (solo designer, 1 week)
3. Intentional decisions (not borrowed from enterprise systems)
4. Accessibility-first (text + icon + color from day 1)
5. Proven: Original 2024 design achieved 40% faster submissions
6. Light: No animation, no web font bloat, pure focus on learning
7. Scalable: Easy to add features later without ecosystem complexity
```

**Annotations**:
- "Design thinking: Explicitly considered + rejected Material + Carbon"
- "Custom system: Proven, intentional, shippable"

---

### Part 4: Export & Validate (15 min)

1. **Review all 12 frames in Paper canvas**:
   - [ ] Material Design frames: 5 frames (MD-1 to MD-5)
   - [ ] IBM Carbon frames: 5 frames (C-1 to C-5)
   - [ ] Comparison summary: 1 frame (C-12)
   - [ ] Title slide: 1 frame
   - [ ] Total: 12 frames

2. **Validate polish quality**:
   - [ ] All annotations readable (font size ≥ 10px)
   - [ ] All colors correct (Material blues, Carbon grays, etc.)
   - [ ] All spacing measurements labeled
   - [ ] All component states clearly shown
   - [ ] All accessibility notes included (contrast, focus, touch targets)
   - [ ] All frames zoom-readable at any scale

3. **Export & save**:
   - Save Paper canvas (auto-saved, but verify)
   - Export as PDF (option 1, for static sharing)
   - Screenshot all 12 frames (option 2, for quick review)
   - Get shareable link to Paper canvas

---

## OUTPUTS:

### Paper Canvas Structure (Final)

```
Slide 1: Title
├─ "MyCourses Design System: Material Design + IBM Carbon + Custom"
├─ Comparison entry for Paper Challenge
└─ Date + Author

Material Design (MD-1 to MD-5):
├─ MD-1: Desktop Dashboard (detailed annotations)
├─ MD-2: Task Component Library (all 5 states)
├─ MD-3: Mobile Layout (responsive annotations)
├─ MD-4: Alerts (Material snackbar patterns)
└─ MD-5: Focus States (accessibility details)

IBM Carbon (C-1 to C-5):
├─ C-1: Desktop Dashboard (semantic tokens)
├─ C-2: Task Component Library (Carbon support tokens)
├─ C-3: Mobile Layout (Carbon responsive grid)
├─ C-4: Alerts (Carbon inline notifications)
└─ C-5: Focus States (Carbon accessibility)

Slide 12: Comparison Summary
├─ Material Design verdict
├─ IBM Carbon verdict
├─ Custom MyCourses verdict
├─ Decision matrix
└─ Why custom is right

TOTAL: 12 frames, all hi-fi, production-ready
```

---

## SUCCESS CRITERIA

✅ All 12 frames visible in Paper canvas
✅ Material Design frames use correct Material colors + patterns
✅ IBM Carbon frames use correct Carbon colors + semantic tokens
✅ All annotations readable and specific (color hex, spacing values, etc.)
✅ All 5 task states shown in both Material + Carbon
✅ All accessibility requirements documented (WCAG AA contrast, focus states, touch targets)
✅ Comparison slide clearly explains why custom system is chosen
✅ Frames are polished, professional, and judges-ready

---

## TIME ESTIMATE

- Part 1 (Polish Material frames): 60 min
- Part 2 (Polish IBM Carbon frames): 60 min
- Part 3 (Comparison slide): 15 min
- Part 4 (Export & validate): 15 min
- **Total**: ~2.5 hours

---

## NEXT STEPS

Once hi-fi frames are complete:
1. Take screenshots or export PDF of all 12 frames
2. Review frames one more time (clarity, accuracy, detail)
3. Get Paper canvas URL ready to share with judges
4. Move to **Paper MCP → Code Generation Prompt** (generate React from these designs)

---

**Polish all frames to hi-fi production quality. Judges will evaluate both Material + IBM Carbon versions, then see how your custom system differs.**

