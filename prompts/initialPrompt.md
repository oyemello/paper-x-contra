## CUE:

You are an AI designer using Paper's MCP (Model Context Protocol) to programmatically create wireframes. Your task is to generate **two complete wireframe sets** in a single Paper canvas:
1. **Material Design version** (5 frames showing MyCourses with Material Design patterns)
2. **IBM Carbon version** (5 frames showing MyCourses with IBM Carbon patterns)

This serves as **proof of concept**: showing how the same product would look if designed with different systems, then comparing to the custom minimalist system.

---

## INPUTS:

Review these files to understand the design context:
- `initialExploration.md` — Material & Carbon exploration + synthesis decision
- `designTokensV1.md` — Quick reference (colors, spacing, components)
- `dsSynthesis.md` — Full design system synthesis
- `initialResearch.md` — Original design context + philosophy

---

## TASK:

### Part 1: Understand the Two Systems (5 min, reference only)

**Material Design (for this project)**:
- 8px spacing grid
- 12+ color primitives (primary, secondary, tertiary, error, warning, success)
- Material shadows + elevation
- Roboto font (web font)
- Motion curves + ripple effects
- 50+ components

**IBM Carbon (for this project)**:
- 8px spacing grid
- Dark enterprise color palette
- Semantic token naming (`$spacing-05`, `$color-interactive-01`)
- IBM Plex Sans (web font)
- Strict grid system
- 100+ components

**Custom MyCourses System** (for comparison):
- 5px spacing grid
- 3 colors (urgency signals)
- No shadows or motion
- System fonts (instant, no bloat)
- 5 components only

---

### Part 2: Generate Material Design Wireframes (45 min)

Create 5 frames in Paper canvas showing MyCourses with Material Design patterns.

#### Frame MD-1: Desktop Dashboard (Material Design)

**Structure**:
- Header: Material app bar (elevation 4, shadow, blue primary color)
- Content area: Material cards with elevation
- Spacing: 8px grid throughout
- Typography: Roboto font, Material type scale
- Colors: Primary blue, secondary teal, error red, success green

**Specific elements**:
1. **Header section** (MD app bar style):
   - Background: Material primary blue (#1976D2)
   - Height: 64px (Material standard)
   - Logo + nav icons (left-aligned)
   - Elevation: 4 (shadow)

2. **Last Visited Card** (Material card style):
   - Elevated card (elevation 1, subtle shadow)
   - Padding: 16px (8px * 2)
   - Course name + last visited timestamp
   - Border-radius: 4px (Material default)

3. **Upcoming Tasks Section** (Material list):
   - Title: "Upcoming Tasks" (20px, Material heading)
   - Task items: Material list items with dividers
   - Each task: Icon + title + due date (Material layout)
   - Padding: 16px (8px * 2)

4. **Overdue Tasks Section** (Material list with error state):
   - Title: "Overdue Tasks" (20px, Material heading)
   - Task items: Red/error colored Material list items
   - Left accent color bar (4px, error red #D32F2F)
   - Ripple effect on hover (Material motion)

5. **Calendar Widget** (Material date picker style):
   - Monthly calendar view
   - Selected dates highlighted (primary blue background)
   - Small text (Material typography scale)
   - Material shadows on edges

**Annotations**:
- "Material app bar (elevation 4, shadow)"
- "Material card (elevation 1)"
- "8px spacing grid"
- "Roboto font"
- "Primary blue: #1976D2 (Material primary)"
- "Ripple effect on hover (Material motion)"

---

#### Frame MD-2: Task Component Library (Material Design)

Show all 5 task states as Material list items:

1. **OVERDUE task** (Material error list item):
   - Background: Light error red (#FFEBEE)
   - Left border: 4px error red (#D32F2F)
   - Icon: ⏰ (Material icon size 24px)
   - Label: "OVERDUE" (bold, error red text)
   - Task name, course code, due date (Material typography)
   - Elevation: 1 (subtle card shadow)

2. **DUE TODAY task** (Material warning list item):
   - Background: Light warning orange (#FFF3E0)
   - Left border: 4px warning orange (#F57C00)
   - Icon: ⌚
   - Label: "DUE TODAY"
   - Same structure as OVERDUE

3. **DUE SOON task** (Material default):
   - Background: White (#FFFFFF)
   - Border: 1px divider gray (#BDBDBD)
   - Icon: 📅
   - Label: "DUE SOON" (gray text)

4. **SUBMITTED task** (Material success list item):
   - Background: Light success green (#E8F5E9)
   - Left border: 4px success green (#388E3C)
   - Icon: ✅
   - Label: "SUBMITTED"

5. **COMPLETED task** (Material disabled):
   - Background: White
   - Border: 1px divider
   - Icon: ✓
   - Label: "COMPLETED" (gray, lower contrast)

**Annotations**:
- "Material list item (elevation 1)"
- "Error state: #FFEBEE background, #D32F2F border"
- "Material icon (24px size)"
- "8px padding (Material spacing)"

---

#### Frame MD-3: Mobile Layout (Material Design, 375px)

**Structure** (Material responsive design):
- Material bottom navigation bar (56px height, 5 icons)
- Full-width Material FAB (Floating Action Button) for primary action
- Material list items (full-width, single column)
- No horizontal scroll

**Specific elements**:
1. **Header**: Collapsing Material app bar (64px on scroll)
2. **Last Visited**: Inline Material card (full-width)
3. **Tasks**: Material list items, full-width, 16px padding
4. **FAB**: Floating Action Button (red, circular, 56px diameter, elevation 6)
5. **Bottom Nav**: Material bottom navigation (5 icons, 56px height)

**Annotations**:
- "Material FAB (elevation 6, #1976D2 blue)"
- "Material bottom navigation"
- "Full-width Material list items"
- "No horizontal scroll"

---

#### Frame MD-4: Alerts (Material Design)

Show 3 Material alert/snackbar variants:

1. **Success Alert** (Material success snackbar):
   - Background: Material success green (#4CAF50)
   - Text: White, 14px (Material snackbar typography)
   - Icon: ✅
   - Position: Bottom-left (Material snackbar default)
   - Auto-dismiss: 5 seconds

2. **Error Alert** (Material error snackbar):
   - Background: Material error red (#F44336)
   - Text: White
   - Icon: ❌
   - Action button: "Retry" (text button, white)
   - Persists until dismissed

3. **Info Alert** (Material info/warning snackbar):
   - Background: Material warning orange (#FF9800)
   - Text: White
   - Icon: ⚠️
   - Close button: X (text button, white)

**Annotations**:
- "Material snackbar (bottom-left, elevation 6)"
- "Auto-dismiss: 5 seconds (success)"
- "Action button (text, Material style)"

---

#### Frame MD-5: Focus States & Interaction (Material Design)

1. **Default Button** (Material raised button):
   - Background: Primary blue (#1976D2)
   - Text: White, 14px bold
   - Height: 36px (Material button height)
   - Padding: 8-24px
   - Border-radius: 4px
   - Elevation: 2

2. **Hovered Button** (Material raised + hover):
   - Elevation increases to 4 (Material motion)
   - Background slightly darker (Material overlay)

3. **Focused Button** (Material focus state):
   - Outline: 2px solid focus ring (Material)
   - Elevation: 2 (same as default)
   - Focus ring offset: 2px

4. **Disabled Button** (Material disabled):
   - Background: Gray (#BDBDBD)
   - Text: Gray (#757575), 50% opacity
   - Elevation: 0 (no shadow)

5. **Tab Order Indicators**:
   - Numbers 1, 2, 3... on interactive elements
   - Show keyboard navigation flow

**Annotations**:
- "Material raised button (elevation 2)"
- "Hover: elevation 4 (Material motion)"
- "Focus: 2px outline, offset 2px"
- "Material button height: 36px"

---

### Part 3: Generate IBM Carbon Wireframes (45 min)

Create 5 frames in Paper canvas showing MyCourses with IBM Carbon patterns.

#### Frame C-1: Desktop Dashboard (IBM Carbon)

**Structure**:
- Header: Carbon header (56px, dark gray, semantic tokens)
- Sidebar: Carbon left navigation (collapsed/expanded)
- Content: Carbon grid system (16-column)
- Spacing: Strict 8px grid
- Typography: IBM Plex Sans
- Colors: Dark enterprise palette (dark gray backgrounds, light text)

**Specific elements**:

1. **Header** (Carbon product header):
   - Background: Carbon dark gray (#161616)
   - Text: Light gray (#F4F4F4)
   - Height: 56px (Carbon standard)
   - Logo + breadcrumb navigation

2. **Left Navigation** (Carbon side nav):
   - Width: 256px (default), collapsible to 48px
   - Background: Carbon dark gray (#262626)
   - Menu items with icons (Carbon icon size 16px)
   - Active item: Highlight bar (left 4px, accent blue)
   - Spacing: 8px grid throughout

3. **Last Visited Card** (Carbon tile):
   - Background: Carbon light gray (#F4F4F4)
   - Border: 1px Carbon border gray (#E0E0E0)
   - Padding: 16px (8px * 2, Carbon token `$spacing-05`)
   - Title: IBM Plex Sans, 16px, bold
   - Metadata: 12px, secondary text (#525252)

4. **Task Section** (Carbon data table):
   - Semantic token colors (`$color-text-01`, `$color-background-ui`)
   - Table structure (header row, data rows, dividers)
   - Padding: 8px grid
   - Striped rows for readability (alternating background)

5. **Calendar Widget** (Carbon date picker):
   - Dark background (Carbon #161616)
   - Light text on dark (Carbon #F4F4F4)
   - Selected dates: Carbon accent blue
   - Border: 1px #E0E0E0

**Annotations**:
- "IBM Carbon header (56px, #161616)"
- "IBM Carbon left nav (256px, collapsible)"
- "8px spacing grid (Carbon standard)"
- "IBM Plex Sans font"
- "Carbon tile (light gray background, border)"
- "Semantic tokens: $color-text-01, $color-background-ui"

---

#### Frame C-2: Task Component Library (IBM Carbon)

Show all 5 task states as Carbon data table rows:

1. **OVERDUE task** (Carbon table row, error state):
   - Row background: Carbon error light (#F1D5D5, token `$color-support-01-light`)
   - Left border/indicator: 4px error red (#DA1E28, token `$color-support-01`)
   - Icon: ⏰ (Carbon icon, 16px)
   - Label: "OVERDUE" (bold, #DA1E28 text)
   - Task name: IBM Plex Sans, 14px
   - Course code + due date: 12px, secondary text (#525252)

2. **DUE TODAY task** (Carbon table row, warning state):
   - Row background: Carbon warning light (#FCE2B6, token `$color-support-02-light`)
   - Left border: 4px warning orange (#F1C21B, token `$color-support-02`)
   - Similar structure to OVERDUE

3. **DUE SOON task** (Carbon table row, default):
   - Row background: White (#FFFFFF)
   - Border: 1px Carbon border (#E0E0E0)
   - Icon: 📅
   - Label: "DUE SOON" (gray #525252)

4. **SUBMITTED task** (Carbon table row, success state):
   - Row background: Carbon success light (#D1E8D0, token `$color-support-03-light`)
   - Left border: 4px success green (#24A148, token `$color-support-03`)
   - Icon: ✅
   - Label: "SUBMITTED"

5. **COMPLETED task** (Carbon table row, disabled):
   - Row background: White
   - Border: 1px #E0E0E0
   - Text opacity: 50%
   - Label: "COMPLETED" (disabled gray)

**Annotations**:
- "Carbon data table row (8px grid)"
- "Error state token: $color-support-01 (#DA1E28)"
- "Carbon icon size: 16px"
- "Semantic text tokens: $color-text-01, $color-text-02"

---

#### Frame C-3: Mobile Layout (IBM Carbon, 375px)

**Structure** (IBM Carbon responsive grid):
- Carbon header (56px, full-width)
- Carbon grid collapses to 4 columns on mobile
- Carbon button (48px height minimum, touch target)
- No horizontal scroll, full-width content

**Specific elements**:

1. **Header**: Carbon header (56px, dark)
2. **Last Visited**: Full-width Carbon tile (16px padding)
3. **Tasks**: Carbon list items, full-width, stacked
4. **Primary Button**: Carbon button, full-width, 48px height
5. **Bottom action bar**: Carbon action buttons (if needed)

**Annotations**:
- "IBM Carbon responsive grid (4 columns on mobile)"
- "Carbon button: 48px height (touch target)"
- "Full-width content (no horizontal scroll)"

---

#### Frame C-4: Alerts (IBM Carbon)

Show 3 Carbon alert/toast variants:

1. **Success Alert** (Carbon toast/notification):
   - Background: Carbon success green (#24A148, token `$color-support-03`)
   - Text: White (#FFFFFF), 14px IBM Plex Sans
   - Icon: ✅ (16px Carbon icon)
   - Position: Top of page, full-width banner
   - Auto-dismiss: 5 seconds

2. **Error Alert** (Carbon alert/inline alert):
   - Background: Carbon error red (#DA1E28, token `$color-support-01`)
   - Text: White
   - Icon: ❌
   - Close button: X (carbon button style, white text)
   - Persists

3. **Info Alert** (Carbon notification):
   - Background: Carbon info blue (#0043CE, token `$color-interactive-01`)
   - Text: White
   - Icon: ⓘ
   - Action button: "Learn More" (text button, white)

**Annotations**:
- "IBM Carbon toast (full-width banner)"
- "Semantic color tokens: $color-support-01/02/03"
- "Carbon icon size: 16px"
- "Auto-dismiss: 5 seconds (success only)"

---

#### Frame C-5: Focus States & Interaction (IBM Carbon)

1. **Default Button** (IBM Carbon button):
   - Background: Carbon interactive primary (#0043CE, token `$color-interactive-01`)
   - Text: White, IBM Plex Sans, 14px
   - Height: 40px (Carbon button height)
   - Padding: 8-16px
   - Border-radius: 0px (Carbon sharp corners, no radius)
   - Border: 2px solid transparent (Carbon focus style)

2. **Hovered Button** (Carbon button + hover):
   - Background: Darker shade of primary (#002D9C, hover state)
   - No elevation change (Carbon is flat design)

3. **Focused Button** (IBM Carbon focus state):
   - Outline: 2px solid Carbon focus color (#0062FF)
   - Offset: 2px
   - High contrast focus indicator (WCAG AAA)

4. **Disabled Button** (IBM Carbon disabled):
   - Background: Carbon disabled gray (#BEBEBE, token `$color-disabled-01`)
   - Text: Disabled gray (#8D8D8D)
   - Cursor: not-allowed

5. **Tab Order Indicators**:
   - Numbers 1, 2, 3... on all interactive elements
   - Show logical keyboard navigation flow

**Annotations**:
- "IBM Carbon button (40px height, #0043CE primary)"
- "Carbon focus: 2px outline #0062FF (WCAG AAA)"
- "Sharp corners (no border-radius)"
- "Carbon semantic tokens: $color-interactive-01, $color-disabled-01"

---

## Part 4: Use Paper MCP to Generate All Frames

### Paper MCP API Call Structure

For each frame, use Paper MCP to programmatically create:

```javascript
// Pseudo-code for Paper MCP frame creation
paper_mcp.createFrame({
  title: "MD-1: Desktop Dashboard (Material Design)",
  width: 1440,
  height: 900,
  elements: [
    // Header
    { type: "rectangle", x: 0, y: 0, width: 1440, height: 64, fill: "#1976D2", shadow: 4 },
    { type: "text", x: 24, y: 20, text: "MyCourses", font: "Roboto 20px", color: "#FFFFFF" },
    
    // Last Visited Card
    { type: "rectangle", x: 40, y: 100, width: 400, height: 120, fill: "#FFFFFF", border: "1px #E0E0E0", radius: 4, shadow: 1 },
    { type: "text", x: 56, y: 120, text: "Last Visited: PACK 731", font: "Roboto 16px bold", color: "#1976D2" },
    
    // ... more elements
    
    // Annotations
    { type: "annotation", x: 40, y: 240, text: "Material card (elevation 1)" },
    // ... more annotations
  ]
});
```

### Implementation Strategy

1. **Generate Material Design frames** (MD-1 through MD-5)
   - Use Material color palette (#1976D2 primary blue, #F44336 error, etc.)
   - Apply 8px spacing grid
   - Add Material shadows/elevation
   - Label with Material terminology

2. **Generate IBM Carbon frames** (C-1 through C-5)
   - Use Carbon color palette (dark grays, accent blue)
   - Apply 8px spacing grid (strict)
   - Use semantic token names in annotations
   - Add Carbon-style borders and focus indicators

3. **Add comparison annotations** (on both sets):
   - Color hex values
   - Spacing measurements
   - Component names
   - Accessibility notes (contrast, focus states)

---

## OUTPUTS:

### Paper Canvas Structure

Create ONE Paper canvas with **10 frames total**:

```
Slide 1: Title Slide
├─ "MyCourses: Design System Comparison"
├─ "Material Design vs. IBM Carbon vs. Custom Minimalist"
└─ Date + Author

Material Design Frames (Slides 2-6):
├─ MD-1: Desktop Dashboard
├─ MD-2: Task Component Library
├─ MD-3: Mobile Layout
├─ MD-4: Alerts
└─ MD-5: Focus States

IBM Carbon Frames (Slides 7-11):
├─ C-1: Desktop Dashboard
├─ C-2: Task Component Library
├─ C-3: Mobile Layout
├─ C-4: Alerts
└─ C-5: Focus States

Slide 12: Comparison Summary
├─ "Material Design: Visual richness + motion"
├─ "IBM Carbon: Enterprise consistency + semantic tokens"
├─ "Custom System: Minimalism + clarity + simplicity"
└─ Decision: Why custom is right for MyCourses
```

---

## SUCCESS CRITERIA

✅ All 10 frames created and visible in Paper canvas
✅ Material Design frames use correct colors (#1976D2, #F44336, #4CAF50, etc.)
✅ IBM Carbon frames use correct palette (dark grays, semantic tokens)
✅ All 5 task states visible in both Material + Carbon versions
✅ Mobile layouts clearly show responsive adaptation
✅ Focus states + accessibility features annotated
✅ Annotations include color values, spacing measurements, component names
✅ Frames are clear, legible at any zoom level
✅ Canvas is saved and ready for screenshot/export

---

## TIME ESTIMATE

- Part 1 (Reference): 5 min
- Part 2 (Material Design frames): 45 min
- Part 3 (IBM Carbon frames): 45 min
- Part 4 (Paper MCP generation): 30 min (depends on MCP complexity)
- **Total**: ~2 hours

---

## NEXT STEPS

Once Paper MCP generates all frames:
1. Review in Paper UI (check clarity, readability, alignment)
2. Adjust any frames that don't render correctly
3. Export as PDF or screenshot all 10 frames
4. Save Paper canvas URL for sharing with judges
5. Move to **Paper Hi-Fi Polish Prompt** (add details, annotations, refinement)

---

**Execute using Paper MCP. All frames should be live in Paper canvas when done.**

