# MyCourses 0→1 Paper Challenge: Project Execution Brief

**Entry**: MyCourses Redesign  
**Submitted by**: Mello (Design + Code)  
**Competition**: Paper Challenge 2026  
**Prize Pool**: $10,000 (target: top 3 placing)  
**Timeline**: 7 days (Apr 13-20, 2026)  
**Status**: DESIGN.md locked, ready for execution  

---

## Executive Summary

We are redesigning RIT's MyCourses portal using an **AI-native, designer-led workflow**:

1. **Days 1-2 (Today)**: NeuroMap brainstorm → DESIGN.md specification ✅ **COMPLETE**
2. **Days 3-4**: Paper canvas wireframes (next steps)
3. **Days 5-6**: Code refinement + accessibility testing
4. **Day 7**: Usability validation + polish + submission

**Thesis**: A solo designer can ship a complete, tested product (design → code → validation) in one week using AI tools strategically, without product managers or separate engineers.

**Success Metric**: 3 RIT students can find their most overdue assignment in < 5 minutes using the redesigned interface.

---

## What We Decided (NeuroMap Synthesis)

### Design Philosophy
- **Keep**: Dieter Rams minimalism (invisible design, focus on learning).
- **Add**: Text labels + icons (accessibility for colorblind, screen reader users).
- **Cut**: Branding aesthetics (student outcomes > institutional branding).

### Feature Scope
**In (Week 1)**:
- Last Visited Page (refine existing)
- Calendar (refine existing)
- Task Dashboard (refine existing)
- Alert System (replace color-only with text + icon + color)
- In-app Notifications (24h + 1h deadline triggers)

**Out (Defer to Week 2+)**:
- Email notifications
- Collaboration tools
- Integrations (Google Drive, Teams)
- Customization preferences
- Dark mode
- Mobile app

### Implementation Strategy
- **Refine existing alert system** (1 day) vs. rebuild from scratch (2 days). ✅ **Decided: Refine**.
- **In-app only notifications** (no email). ✅ **Decided: In-app**.
- **Validation: 3 students, 10 min each**. ✅ **Decided: Lean testing, ship fast**.

### Accessibility Commitment
- WCAG AA compliance (4.5:1 color contrast minimum).
- Keyboard navigation (Tab, Enter, Escape).
- Screen reader support (role="alert", aria-labels).
- Touch targets 44px minimum (mobile).
- Tested with colorblind simulator (Sim Daltonism).

---

## 5-Day Execution Timeline

### Day 3 (Tomorrow): Paper Canvas Design

**Deliverable**: Wireframes in Paper showing:
- Dashboard layout (sections: Last Visited, Upcoming, Overdue, Calendar).
- Task item states (overdue, due-today, due-soon, submitted, completed).
- Alert/notification banners (placement, size, animation).
- Mobile vs. desktop layouts (how it stacks on 375px).
- Component library (buttons, cards, icons).

**Time**: 6-8 hours.

**Success**: Team (or you + AI reviewer) approves layout before coding starts.

### Day 4: Paper Canvas Finalization + Component States

**Deliverable**: Complete Paper canvas with:
- All 5 task states visualized.
- Hover/focus states (2px outline on buttons).
- Error states (form validation, submission errors).
- Mobile responsive annotations.
- Color contrast annotations (all text labeled with contrast ratio).

**Time**: 4-6 hours.

**Success**: Designers can hand this to developers with no ambiguity.

### Day 5: Code Refinement (PM Shift)

**Deliverable**: Staging environment with:
- Task item labels updated (text + icon, no color alone).
- Alert component refactored (text + icon + color).
- Buttons updated (44px height, 2px focus outline).
- Calendar colors retested (WCAG AA pass).
- Keyboard navigation wired up (Tab, Enter, Escape work).

**Time**: 6-8 hours.

**Success**: All interactive elements keyboard-accessible.

**Bottleneck Watch**: If existing codebase is complex, this could slip into Day 6.

### Day 6: Accessibility Testing + Mobile Responsive

**Deliverable**: 
- Screen reader test (NVDA/JAWS on Windows or VoiceOver on macOS).
- Keyboard nav audit (can you use the interface without a mouse?).
- Mobile responsive check (no horizontal scroll at any zoom).
- Colorblind simulation test (Sim Daltonism, all three types).
- Deploy to staging server.

**Time**: 4-6 hours.

**Blockers**: If screen reader testing reveals semantic HTML issues, you may need to refactor (could add 2-3 hours).

### Day 7: Validation + Social + Submit

**Morning (2-3 hours)**:
- Recruit 3 RIT students.
- Conduct 10-min usability tests (can they find overdue assignment?).
- Collect feedback on confusing elements.
- Make 1-2 critical fixes if needed (high-impact changes only).

**Afternoon (2-3 hours)**:
- Create 30-second demo video (Loom or screen recording).
  - Show: Dashboard → Finding overdue task → Submitting.
  - Voiceover: "Redesigned MyCourses using AI-native workflow: NeuroMap brainstorm → Paper canvas → Code → User tested."
- Write social post (X/LinkedIn, 1-2 sentences).
- Screenshot DESIGN.md + NeuroMap session (proof of work).
- Submit to Paper Challenge platform.

**Success Criteria**:
- ✅ 2/3 students can find overdue assignment in < 5 min.
- ✅ Video is polished and tells the story.
- ✅ Post is shareable (clear, compelling, tags Paper).
- ✅ Submitted before Apr 20, 11:59 PM PDT.

---

## Critical Dependencies & Bottlenecks

### Code Integration (Day 5-6 Risk: HIGH)

**Risk**: Existing MyCourses codebase is complex, poorly documented, or has unexpected dependencies.

**Mitigation**:
- Audit existing code on Day 5 morning (first thing).
- If > 30 min to understand, pivot to "refine CSS only" approach (less risky).
- Keep a rollback commit (Day 4 end-of-day is your safe point).
- Have a git strategy: main branch = always shippable.

### Screen Reader Testing (Day 6 Risk: MEDIUM)

**Risk**: Screen reader reveals semantic HTML issues (buttons marked as divs, missing ARIA labels).

**Mitigation**:
- Start Day 6 with 30-min audit of HTML structure.
- If major refactoring needed, cut non-critical features (e.g., animations).
- Focus on core task journey (find assignment → submit).

### Usability Testing Recruitment (Day 7 Risk: MEDIUM)

**Risk**: Can't find 3 RIT students available on Day 7.

**Mitigation**:
- Recruit on Day 5 (email, Slack, Discord).
- Offer small incentive ($5 Starbucks card).
- Have backup: test with 2 students if 3 unavailable (less ideal, but acceptable).

### Mobile Responsive (Day 6 Risk: LOW-MEDIUM)

**Risk**: Layout breaks on mobile (horizontal scroll, tiny buttons).

**Mitigation**:
- Test on actual phone (iPhone + Android) early (Day 5 evening).
- If major refactoring needed, defer dark mode / animations to cut time.
- Focus on: text readable, buttons tappable, no horizontal scroll.

---

## Success Criteria (Judging Rubric)

Paper Challenge judges evaluate:
1. **Finding a new use case for agents and canvases** (30%): ✅ We're showing AI-native design workflow.
2. **Design fundamentals** (25%): ✅ Minimalism + accessibility + clarity.
3. **Execution and polish** (25%): ✅ Working prototype + usability tested.
4. **Creativity** (20%): ✅ Novel process (NeuroMap → Paper → Code).

**Bonus**: Novel use of agents + canvas together (+ $500).
- **Our claim**: NeuroMap (agent-driven brainstorm) → Paper MCP (reads canvas) → Claude (generates code based on design spec) = end-to-end AI workflow.
- **Evidence**: NeuroMap export + Paper canvas screenshot + DESIGN.md + working code.

---

## Deliverables Checklist

### By Day 4 (End of Design Phase)
- [ ] Paper canvas wireframes (all 5 task states visible)
- [ ] Mobile layout annotations
- [ ] Accessibility annotations (contrast ratios, focus indicators)
- [ ] Component library (buttons, cards, notifications)
- [ ] DESIGN.md finalized and agreed upon

### By Day 6 (End of Code Phase)
- [ ] Staging deployment (live URL)
- [ ] All text labels visible (no color-alone signals)
- [ ] WCAG AA contrast tested (WebAIM Contrast Checker)
- [ ] Keyboard navigation working (Tab, Enter, Escape)
- [ ] Screen reader audit completed (task urgency announced)
- [ ] Mobile responsive verified (no horizontal scroll)
- [ ] Rollback branch ready (git safety)

### By Day 7 (Submission)
- [ ] 3 usability tests conducted (notes + video recorded)
- [ ] 30-sec demo video (Loom)
- [ ] Social post drafted (X/LinkedIn)
- [ ] DESIGN.md exported to PDF/MD
- [ ] NeuroMap session exported + uploaded
- [ ] All code committed and deployed to production
- [ ] Submission form completed + submitted

---

## Risk Mitigation Checklist

| Risk | Likelihood | Impact | Mitigation |
|------|-------------|--------|-----------|
| Code integration delays | Medium | High | Audit existing code Day 5 AM, have rollback ready |
| Screen reader issues | Medium | Medium | 30-min HTML audit Day 6 AM, focus on core flow |
| Mobile layout breaks | Low | Medium | Test on real phone Day 5 PM, cut animations if needed |
| Usability test recruitment fails | Medium | Low | Recruit Day 5 (email, Slack), have backup plan |
| Design feedback loops | Low | Low | Keep feedback focused, no more than 2 review rounds |

---

## Social Media Strategy

### Post Requirements
- **Video**: 30 seconds, screen recording or with voiceover.
- **Copy**: 1-2 sentences + hashtags.
- **Tags**: @paper, @designtools, #AI, #Design.
- **Link**: To deployed prototype or Loom video.

### Example Post

```
"Designed & shipped a complete product in one week using AI. 
NeuroMap → brainstorm intent → Paper → design → code → tested with real users.
MyCourses redesign: from idea to validated prototype in 5 days.

[30-sec video]

#DesignThinking #AI-First #Paper @paper"
```

### Posting Platforms
- X (required)
- LinkedIn (required)
- (Optional) Dribbble, Designer Hangout Slack

---

## Post-Launch (After Apr 20)

If selected for top 3:
- Write blog post: "How I shipped 0→1 in one week using AI tools."
- Document the process: NeuroMap → Paper → Code → User Testing.
- Open-source DESIGN.md (could become a template for other projects).

---

## Key Contacts & Resources

### Tools Used
- **NeuroMap**: Local (localhost:3001) for brainstorming.
- **Paper**: paper.design for canvas design.
- **Claude + Antigravity**: Code generation, DESIGN.md synthesis.
- **Loom**: 30-sec demo video recording.
- **WebAIM Contrast Checker**: Accessibility validation.
- **Sim Daltonism**: Colorblind simulation testing.

### External Resources
- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [Paper MCP Documentation](https://paper.design/docs/mcp)
- [Dieter Rams' 10 Principles of Design](https://www.vitsoe.com/en/about/dieter-rams/design)

---

## Final Notes

### Why This Entry is Strong

1. **Novel workflow**: NeuroMap (brainstorm) → Paper (design) → Code (build) = end-to-end AI-native pipeline.
2. **Real problem**: MyCourses is a real app at a real university (RIT).
3. **Proven outcomes**: Original design claimed 40% faster submissions; we're refining, not rebuilding.
4. **Design-led execution**: A solo designer shipping end-to-end (design + code + testing) without separate PM/engineer.
5. **Accessible**: WCAG AA compliant; built for all users.
6. **Shippable**: Not vaporware; working prototype tested with real users.

### Why It's Realistic

- **Refine, don't rebuild**: Leverage existing code (less risk).
- **Tight scope**: 5 features refined, 10+ features cut.
- **Lean validation**: 3 students, not 30. 10 min tests, not 2-hour sessions.
- **Bottleneck awareness**: Know where things could break (code integration, screen reader).

### The Ask (to Paper judges)

> "Judge me on the **process**, not the feature list. A solo designer using AI strategically can ship a validated product in one week. That's the story. MyCourses redesign is the proof."

---

**Document Status**: Final (locked for execution)  
**Last Updated**: Apr 13, 2026  
**Next Phase**: Day 3 - Paper canvas design  

