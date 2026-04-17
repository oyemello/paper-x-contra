## CUE:

You have 2 existing design system documents:
1. **dsSynthesis.md** — Full design system analysis, synthesis, component specs, accessibility rules
2. **designTokensV1.md** — Quick reference card (colors, typography, spacing, components)

Your task: 
1. **Explicitly explore Material Design + IBM Carbon** (why they don't fit MyCourses)
2. **Synthesize a custom design.md** using awesome-design-md as formatting template only
3. This becomes your single source of truth for sketching, validating, and coding

---

## TASK:

### Part 0: Design System Exploration — Material Design & IBM Carbon

Before you synthesize your custom system, explicitly explore why existing design systems don't fit your needs. This proves intentional design thinking to judges.

#### Subpart 0a: Material Design Exploration

**Research**: What would MyCourses look like using Material Design patterns?

1. **Material Design patterns you'd consider**:
   - Color semantics: primary, secondary, tertiary, error, warning, success
   - Spacing: 8px base unit, 4px increments
   - Typography: Roboto font, Material type scale
   - Components: elevated cards, FABs (floating action buttons), snackbars for alerts
   - Motion: material motion curves, elevation shadows, ripple effects
   - Accessibility: WCAG AA, semantic HTML

2. **Create a temporary exploration document** (in Antigravity):
   ```markdown
   # Material Design Exploration for MyCourses
   
   ## Material Design Patterns I'd Use
   - Color semantics (primary, secondary, error) — clear and proven
   - 8px spacing grid — standardized, scalable, enterprise-proven
   - Component library (button, card, snackbar) — accessible, tested at scale
   - Elevation/shadows — visual hierarchy through depth
   - Semantic color roles — easy for developers to understand
   
   ## Material Design Patterns That Conflict with Dieter Rams Minimalism
   - **Shadows + elevation** → adds visual weight (Rams: "as little design as possible")
   - **Material motion curves** → animations distract from learning (Rams: design is invisible)
   - **Complex component states** → too many visual variations (Rams: clarity over richness)
   - **Primary/secondary/tertiary colors** → 3 action colors feels like too many choices
   - **Roboto font** → requires web font load (Rams: efficiency means system fonts)
   - **Ripple effects** → unnecessary animation feedback (Rams: minimize visual noise)
   

#### Subpart 0b: IBM Carbon Exploration

**Research**: What would MyCourses look like using IBM Carbon patterns?

1. **IBM Carbon patterns you'd consider**:
   - Design tokens: strict semantic naming (e.g., `$spacing-05`, `$color-interactive-01`)
   - Spacing: 8px base unit, rigid grid system
   - Typography: IBM Plex Sans, detailed type scale
   - Accessibility: WCAG AA built-in, semantic HTML enforcement required
   - Components: extensive library (100+ components), detailed anatomy
   - Validation: EDS-Atlas for design system compliance checking
   - Scale: enterprise multi-team, multi-product

2. **Create a temporary exploration document** (in Antigravity):
   ```markdown
   # IBM Carbon Exploration for MyCourses
   
   ## IBM Carbon Patterns I'd Use
   - Semantic token naming (`$color-signal-error`, `$spacing-04`) — clear for developers
   - Strict 8px grid — enterprise standard, widely understood
   - Built-in WCAG AA accessibility — production-ready, no extra work
   - Detailed component anatomy — zero ambiguity between design and code
   - EDS-Atlas integration — automated design system validation
   - Extensive documentation — enterprise-grade quality
   
   ## IBM Carbon Patterns That Conflict with Minimalism + Focus
   - **Enterprise-focused philosophy** → IBM Carbon is built for large enterprises (IBM, Coca-Cola, etc.)
   - **Assumes 8px grid universally** → but 5px gives finer control for this specific use case
   - **Dark color palette** → designed for IBM enterprise products, not light student interfaces
   - **100+ component library** → MyCourses only needs 5 (task, button, alert)
   - **Extensive token set** → 50+ spacing tokens when we need 7
   - **EDS-Atlas focus** → assumes you're managing 50+ designers; overkill for solo designer
   

#### Subpart 0c: Design System Synthesis Decision (5 min)

**Create a decision matrix** (in temporary document):

```markdown
# Why Custom System > Material Design + IBM Carbon

Both Material and Carbon are GREAT systems for their use cases.
But MyCourses needs something fundamentally different.

| Aspect | Material Design | IBM Carbon | MyCourses Custom |
|--------|-----------------|------------|------------------|
| **Philosophy** | Engagement + visual richness | Enterprise consistency | Minimalism (Rams) |
| **Target Users** | General audiences | Large enterprises | Students |
| **Goal** | Delight + interaction | System at scale | Focus + clarity |
| **Spacing Grid** | 8px (4px increments) | 8px (rigid) | 5px (fine control) |
| **Colors** | 12+ primary colors | Dark enterprise palette | 3 colors (urgency) |
| **Components** | 50+ | 100+ | 5 (what students need) |
| **Animation** | Heavy (motion curves) | Light | None (minimize distraction) |
| **Font** | Roboto (web font) | IBM Plex (web font) | System fonts (instant) |
| **Scale** | Multiple products | Multi-team enterprise | One product |

## Conclusion: Custom System is the Right Choice

**For MyCourses, a custom system is:**
- ✅ Faster to learn (only 5 components, not 100+)
- ✅ Lighter (5px grid vs. 8px, fewer colors, no animations)
- ✅ More aligned with Rams minimalism
- ✅ Shippable in one week (solo designer)
- ✅ Proven (based on original 2024 design that achieved 40% faster submissions)

**Evidence that custom is right:**
- Original design succeeded without Material/Carbon
- Adding their complexity would slow down this sprint
- Rams minimalism is deliberately chosen philosophy, not default
```

**Store this reasoning**: You'll reference it when judges ask "why not use Material/Carbon?"

---

### Part 1: Clone & Study the awesome-design-md Template

1. Read and Understand "/Users/mello/Downloads/contra/awesome-design-md" then open "/Users/mello/Downloads/contra/awesome-design-md/design-md" to explore Googles Material Design + IBM Carbon Design System.

2. **Explore the structure**:
   - Notice the **section hierarchy** (philosophy → principles → tokens → components → accessibility)
   - Study **table formatting** (how they document color palettes, type scales, spacing)
   - Read **2-3 component examples** (button, card, alert) — how concise yet complete?
   - Note **markdown conventions** (headers, bold, code blocks, inline code)

3. **Identify the Template Pattern**:
   - ✅ Section order (philosophy first, then principles, then design tokens)
   - ✅ How they use tables for scales (colors, typography, spacing)
   - ✅ How they show component anatomy (ASCII art or code blocks)
   - ✅ How they document accessibility (checkboxes, requirements)
   - ✅ How they reference tokens in components (semantic naming)

**Key Insight**: awesome-design-md is NOT a starting point—it's a **formatting and organization guide**. You already have the content; you're just organizing it professionally.

---

### Part 2: Map Your Existing Content to awesome-design-md Structure (20 min)

Create a **synthesis mapping document** (in Antigravity, temporary):

```markdown
# Content Mapping: Your Docs → design.md Structure

## 1. Philosophy & Principles
**Source**: dsSynthesis.md, Part 3, "Philosophy Statement" + "Design Principles"
**What to include**: 
- Philosophy statement (1 paragraph, why minimalism + accessibility)
- 5 custom principles (minimalism, accessibility, clarity, consistency, calm)

## 2. Design Tokens
**Source**: designTokensV1.md + dsSynthesis.md, Part 3, "Color Tokens" + "Typography Tokens" + "Spacing Tokens"
**What to include**:
- Primitive colors (11 colors with hex + usage + contrast ratios)
- Semantic colors (8 semantic color roles)
- Typography (font family, type scale table, rules)
- Spacing (5px base unit scale)
- Radius (0px, 5px, 10px, 15px, 20px, 30px, 40px + semantic aliases)
- Stroke (0, 1px, 2px + semantic)

## 3. Components
**Source**: designTokensV1.md + dsSynthesis.md, Part 3, "Component Library"
**What to include**:
- Task Item (all 5 states with ASCII art + specs)
- Button (primary, secondary, disabled)
- Alert (success, urgent, error)

## 4. Layout & Responsive
**Source**: dsSynthesis.md, Part 3, "Layout Grid" + "Responsive Breakpoints"
**What to include**:
- Grid system (desktop, tablet, mobile)
- Breakpoints (with pixel widths + changes)

## 5. Accessibility (WCAG AA)
**Source**: dsSynthesis.md, Part 3, "Accessibility Requirements"
**What to include**:
- Color & Contrast requirements
- Keyboard Navigation requirements
- Screen Reader Support requirements
- Touch & Mobile requirements
- Motion & Animation requirements

## 6. Why This System
**Source**: Part 0 (Material/Carbon exploration)
**What to include**:
- Why Material Design doesn't fit (too much motion/richness)
- Why IBM Carbon doesn't fit (too much enterprise complexity)
- Why custom system is intentional choice (Rams minimalism)
```

---

### Part 3: Create Unified design.md (90 min)

1. **Create new file in Antigravity**:
   ```bash
   touch mycourses-design.md
   # Open in editor
   ```

2. **Follow this structure** (based on awesome-design-md template):

[STRUCTURE REMAINS THE SAME AS PREVIOUS VERSION - full design.md template with all sections]

---

### Part 4: Validate & Export (30 min)

1. **In Antigravity, verify completeness**:
   - [ ] Philosophy statement present
   - [ ] All 5 Design Principles documented
   - [ ] All 10 color primitives + contrast ratios
   - [ ] All semantic colors with roles
   - [ ] Typography scale complete (7 roles)
   - [ ] Spacing scale complete (7 tokens)
   - [ ] Radius scale complete
   - [ ] Stroke widths complete
   - [ ] Task Item component with all 5 states
   - [ ] Button variants (primary, secondary, disabled)
   - [ ] Alert variants (success, urgent, error)
   - [ ] Layout grids (desktop, tablet, mobile) documented
   - [ ] All accessibility requirements listed

2. **Verify formatting**:
   - [ ] Tables render correctly (test Markdown preview)
   - [ ] All hex color values are exact (copy-pasted)
   - [ ] All code blocks are readable
   - [ ] Headers nested properly (# > ## > ###)
   - [ ] No broken links or references
   - [ ] Status badge at bottom ("🔒 LOCKED")

3. **Test readability**:
   - [ ] Can find any color in < 10 seconds
   - [ ] Can find any component spec in < 15 seconds
   - [ ] Can find accessibility requirement in < 10 seconds

4. **Export & backup**:
   ```bash
   # Save in Antigravity (git-tracked)
   git add mycourses-design.md
   git commit -m "Create unified design.md v1.0 + Material/Carbon analysis (locked for execution)"
   
   # Also export to outputs folder
   cp mycourses-design.md /mnt/user-data/outputs/MyCourses_design.md
   
   # Export Material/Carbon analysis
   cp material-carbon-analysis.md /mnt/user-data/outputs/Design_System_Exploration.md
   ```

5. **Create reference summary** (optional):
   ```markdown
   # MyCourses Design System: Complete File Structure
   
   ## Your Design Documents
   - `mycourses-design.md` ← USE THIS (main spec, custom system)
   - `design-system-exploration.md` ← Why Material/Carbon don't fit
   - `dsSynthesis.md` ← Design decision rationale
   - `designTokensV1.md` ← Quick lookup (abbreviated)
   
   ## Why Custom System
   - Material Design: Too much animation + visual richness (contradicts Rams)
   - IBM Carbon: Too much enterprise complexity (overkill for solo designer)
   - Custom: Minimal, intentional, shippable in 1 week
   
   ## How to Use
   1. **Sketching (Days 3-4)**: Keep `mycourses-design.md` open
   2. **Validation (Day 4)**: Show wireframes + design.md to NeuroMap
   3. **Coding (Days 5-6)**: Reference design.md for exact specs
   4. **Judges (Submission)**: Show exploration.md to prove design thinking
   ```

---

## ADDITIONAL INFORMATION:

### Why Explicitly Explore Material + Carbon?

You're showing judges:
1. ✅ You **know** existing systems (Material, Carbon)
2. ✅ You **understand** their strengths (scale, consistency, accessibility)
3. ✅ You **chose** custom intentionally (not by default or ignorance)
4. ✅ You can **articulate why** (Rams minimalism vs. enterprise complexity)

This elevates you from "designer who made a system" to "designer who made a **choice**."

### What judges will ask:
- "Why didn't you use Material Design?"
  - Answer: "I explored it. Material is optimized for engagement; MyCourses needs minimalism."
- "Why didn't you use IBM Carbon?"
  - Answer: "I researched it. Carbon is great for enterprises; I needed lightweight for solo shipping."
- "How do you validate design systems?"
  - Answer: "I explored EDS-Atlas (Carbon's tool), but built a custom compliance checklist for my system."

### Bonus: POC for EDS-Atlas (Day 5)

Once you have your custom design.md, you can create:
- `mycourses-design-CARBON-version.md` (what it would look like with Carbon tokens)
- Run a mock EDS-Atlas audit: "If this were Carbon, what would fail?"
- Document violations + how you'd fix them
- Shows judges you understand design system validation

---

## CHECKLIST: When Done

- [ ] Explored Material Design (documented pros/cons)
- [ ] Explored IBM Carbon (documented pros/cons)
- [ ] Created synthesis decision (why custom is right)
- [ ] Cloned awesome-design-md into Antigravity
- [ ] Explored template structure + formatting conventions
- [ ] Created `mycourses-design.md` (unified, comprehensive)
- [ ] Populated all sections from your existing docs
- [ ] Verified all tables render correctly
- [ ] Verified all hex values are exact + contrast-tested
- [ ] Verified all spacing tokens match your 5px scale
- [ ] Verified all 5 task states documented with full specs
- [ ] Verified buttons (primary, secondary, disabled) documented
- [ ] Verified alerts (success, urgent, error) documented
- [ ] Verified accessibility requirements complete + clear
- [ ] Verified layout grids (desktop, tablet, mobile) specified
- [ ] Added "Status: LOCKED" badge at bottom
- [ ] Tested readability (can find any section in < 15 sec)
- [ ] Saved to `/mnt/user-data/outputs/` for backup
- [ ] Exported Material/Carbon analysis to outputs
- [ ] Ready to use as primary reference (Days 3-7)

