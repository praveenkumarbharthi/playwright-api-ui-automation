<div align="center">

# Company-Wise QA Interview Guide
### Indian MNCs & Product Companies · Patterns · Real Question Types · Answers

*Companion to [LEARNING_GUIDE.md](LEARNING_GUIDE.md) · [INTERVIEW_GUIDE.md](INTERVIEW_GUIDE.md) · [SENIOR_LEAD_INTERVIEW_GUIDE.md](SENIOR_LEAD_INTERVIEW_GUIDE.md) · [QA_MANUAL_PERF_API_GUIDE.md](QA_MANUAL_PERF_API_GUIDE.md)*

**One file · every major company in one place** — interview process, what they emphasize, and the
question types they ask (with answers) for **QA Automation / SDET / Senior / Lead** roles.

</div>

---

> **How to use this guide**
>
> 1. Find your target company below and read its **process + "what they emphasize"** first.
> 2. Each company lists the **question types it favors** with model answers or a pointer to the
>    full answer in a companion guide (to avoid repeating the same answer 8 times).
> 3. The answers to *shared* technical/coding/managerial questions live in the companion guides —
>    this file tells you **which company asks what**, so you prepare the right mix.
> 4. ⭐ = recurring favorite for that company.

---

## Table of Contents

<table>
<tr><td valign="top" width="50%">

**Services / IT MNCs**
- [TCS](#tcs)
- [Infosys](#infosys)
- [Wipro](#wipro)
- [Cognizant (CTS)](#cognizant-cts)
- [Accenture](#accenture)
- [Capgemini](#capgemini)
- [HCLTech](#hcltech)
- [Tech Mahindra](#tech-mahindra)
- [LTIMindtree](#ltimindtree)
- [IBM](#ibm)

</td><td valign="top" width="50%">

**Product / Global Capability Centers (GCC)**
- [Amazon (SDET / QAE)](#amazon-sdet--qae)
- [Microsoft](#microsoft)
- [Flipkart / Walmart](#flipkart--walmart)
- [Other product cos](#other-product-companies-general-pattern)

**Reference**
- [Quick comparison matrix](#quick-comparison-matrix)
- [Universal question bank](#universal-question-bank-asked-almost-everywhere)
- [Final tips per round](#final-tips-per-round)

</td></tr>
</table>

> **Disclaimer:** Interview processes vary by role, level, project, and panel. These are *common
> patterns* compiled from typical experiences — treat them as a preparation map, not a guarantee.

---

# Services / IT MNCs

## TCS

**Process:** Aptitude/online test (for some roles) → Technical (TR) → Managerial (MR) → HR.
TCS often combines TR + MR in one panel for experienced hires.

**What they emphasize:** Strong **fundamentals + process** (SDLC, STLC, defect lifecycle, Agile),
your **project explanation**, and stability/communication. Automation depth scales with the role.

**Favorite question types:**

<details open>
<summary><b>⭐ Q — "Explain your current project, your role, and the testing process you follow."</b></summary>

Structure: domain → architecture in one line → your responsibilities → test process (sprint flow,
test design, automation, defect lifecycle) → a result you're proud of. Keep it 2–3 minutes,
*your* contribution front and centre.
</details>

<details>
<summary><b>⭐ Q — SDLC vs STLC, and the defect life cycle.</b></summary>

Full answer in [QA_MANUAL_PERF_API_GUIDE.md → Section A](QA_MANUAL_PERF_API_GUIDE.md#section-a--manual-testing--qa-10-yrs).
Be ready to draw the defect states: New → Assigned → Open → Fixed → Retest → Closed / Reopened /
Deferred / Rejected.
</details>

<details>
<summary><b>Q — Severity vs Priority with examples.</b></summary>

**Severity** = technical impact, **Priority** = business urgency. Classic example: company logo
wrong = low severity / high priority; rare crash on an edge flow = high severity / low priority.
</details>

<details>
<summary><b>Q — Agile/Scrum ceremonies and QA's role in each.</b></summary>

Planning (estimate test effort), daily stand-up (blockers), refinement (define acceptance
criteria), review (demo), retro (quality improvements). QA shifts left into every ceremony.
</details>

<details>
<summary><b>Q — A simple automation/coding snippet (reverse string, count duplicates).</b></summary>

Solutions in [SENIOR_LEAD_INTERVIEW_GUIDE.md → Section 2](SENIOR_LEAD_INTERVIEW_GUIDE.md#section-2--coding--programming).
</details>

**MR/HR favorites:** "How do you handle pressure/deadlines?", "Conflict with a developer?",
"Are you open to relocation/shifts?", notice period & expectations.

---

## Infosys

**Process:** Online assessment (aptitude + technical, sometimes coding) → Technical interview →
HR. For experienced roles, coding + framework depth increases.

**What they emphasize:** **Problem-solving + coding basics**, automation framework understanding,
and clear communication. Infosys panels like you to *reason out loud*.

**Favorite question types:**

<details open>
<summary><b>⭐ Q — Live coding: string/array logic (anagram, first non-repeated char, FizzBuzz).</b></summary>

Solutions in [SENIOR_LEAD_INTERVIEW_GUIDE.md → 2.1](SENIOR_LEAD_INTERVIEW_GUIDE.md#21-logic--dsa-snippets).
Narrate your approach and state time/space complexity.
</details>

<details>
<summary><b>⭐ Q — OOP concepts with real examples from your framework.</b></summary>

Four pillars tied to a framework: see [SENIOR_LEAD_INTERVIEW_GUIDE.md → 2.2](SENIOR_LEAD_INTERVIEW_GUIDE.md#22-oop--language).
</details>

<details>
<summary><b>Q — Explain your automation framework architecture.</b></summary>

Walk the layers: see [SENIOR_LEAD_INTERVIEW_GUIDE.md → 3.1](SENIOR_LEAD_INTERVIEW_GUIDE.md#31-architecture)
and point to this repo's structure.
</details>

<details>
<summary><b>Q — How do you handle synchronization / waits in Selenium?</b></summary>

Implicit vs explicit vs fluent; prefer explicit/auto-wait, never `Thread.sleep`. Detail in
[SENIOR_LEAD_INTERVIEW_GUIDE.md → 1.3](SENIOR_LEAD_INTERVIEW_GUIDE.md#13-locators-waits--stability).
</details>

<details>
<summary><b>Q — SQL query (2nd highest salary, joins, group by).</b></summary>

`SELECT MAX(salary) FROM emp WHERE salary < (SELECT MAX(salary) FROM emp);` — or use
`DENSE_RANK()`. Know INNER/LEFT joins and `GROUP BY ... HAVING`. See universal bank below.
</details>

---

## Wipro

**Process:** Online test → Technical → (Manager) → HR. Wipro frequently asks **manual + automation
mix** plus an aptitude/written round for some bands.

**What they emphasize:** Testing **fundamentals + automation basics + Agile**, and willingness to
work across domains. Communication and attitude weigh heavily.

**Favorite question types:**

<details open>
<summary><b>⭐ Q — Test scenarios for a real object (login page / ATM / pen / lift).</b></summary>

Show structured thinking: functional, UI, negative, boundary, security, performance,
accessibility. Example approach in
[QA_MANUAL_PERF_API_GUIDE.md → Section E](QA_MANUAL_PERF_API_GUIDE.md#section-e--scenario--strategy-senior).
</details>

<details>
<summary><b>⭐ Q — Test case design techniques (BVA, equivalence partitioning, decision table).</b></summary>

Full detail in [QA_MANUAL_PERF_API_GUIDE.md → A.3](QA_MANUAL_PERF_API_GUIDE.md#a3-test-design-techniques).
</details>

<details>
<summary><b>Q — Difference: retesting vs regression, smoke vs sanity, verification vs validation.</b></summary>

See the quick tables in [QA_MANUAL_PERF_API_GUIDE.md → Section F](QA_MANUAL_PERF_API_GUIDE.md#section-f--quick-revision-tables).
</details>

<details>
<summary><b>Q — How would you automate this login page? (whiteboard POM)</b></summary>

POM with `LoginPage` + `BasePage`, externalized data, assertion in test. Reference
[LoginPage.ts](src/ui/pages/LoginPage.ts).
</details>

---

## Cognizant (CTS)

**Process:** Online assessment → Technical → Managerial → HR. Cognizant often has a solid
**automation + framework** technical round for experienced testers.

**What they emphasize:** **Selenium/Playwright depth**, framework design, TestNG/JUnit, CI tools,
and Agile delivery. Domain knowledge (healthcare/BFSI) is a plus.

**Favorite question types:**

<details open>
<summary><b>⭐ Q — Explain your framework and the design patterns you used.</b></summary>

Patterns list with where-you-used-each: [SENIOR_LEAD_INTERVIEW_GUIDE.md → 3.2](SENIOR_LEAD_INTERVIEW_GUIDE.md#32-patterns--practices).
</details>

<details>
<summary><b>⭐ Q — TestNG features: annotations, groups, parallel, data providers, listeners.</b></summary>

Annotations order (`@BeforeSuite/Test/Method`), `@DataProvider` for data-driven, `groups` for
selective runs, `parallel="methods/tests"` in the XML, and `ITestListener` for reporting hooks.
</details>

<details>
<summary><b>Q — How do you achieve parallel execution and cross-browser testing?</b></summary>

Selenium Grid / Playwright workers + a config-driven browser matrix; keep tests independent and
data-isolated. See [SENIOR_LEAD_INTERVIEW_GUIDE.md → Q35](SENIOR_LEAD_INTERVIEW_GUIDE.md#section-4--api--cicd--devops).
</details>

<details>
<summary><b>Q — How do you handle test failures and reporting in CI?</b></summary>

Screenshots/trace on failure, retry policy for true flakiness, Allure/HTML reports as CI
artifacts. See [SENIOR_LEAD_INTERVIEW_GUIDE.md → Q31](SENIOR_LEAD_INTERVIEW_GUIDE.md#32-patterns--practices).
</details>

---

## Accenture

**Process:** Cognitive + technical assessment → Technical interview → HR. For senior roles, a
**communication/client-readiness** signal matters a lot.

**What they emphasize:** **Automation framework + Agile + clear communication**, plus a bit of
coding. Accenture values consultants who can face a client.

**Favorite question types:**

<details open>
<summary><b>⭐ Q — Selenium vs Playwright/Cypress; why your tool choice?</b></summary>

Comparison table + reasoning: [SENIOR_LEAD_INTERVIEW_GUIDE.md → Q6](SENIOR_LEAD_INTERVIEW_GUIDE.md#12-selenium--playwright-depth).
</details>

<details>
<summary><b>⭐ Q — How do you handle flaky tests in a large suite?</b></summary>

The quantify → quarantine → root-cause → fix-cause approach:
[SENIOR_LEAD_INTERVIEW_GUIDE.md → Q10](SENIOR_LEAD_INTERVIEW_GUIDE.md#13-locators-waits--stability).
</details>

<details>
<summary><b>Q — CI/CD pipeline and where automation fits.</b></summary>

Run-on-PR → smoke → nightly full → gate merge. See
[SENIOR_LEAD_INTERVIEW_GUIDE.md → Q32](SENIOR_LEAD_INTERVIEW_GUIDE.md#section-4--api--cicd--devops).
</details>

<details>
<summary><b>Q — Behavioral: describe a time you improved a process / handled a client escalation.</b></summary>

STAR with numbers. See [SENIOR_LEAD_INTERVIEW_GUIDE.md → Section 6](SENIOR_LEAD_INTERVIEW_GUIDE.md#section-6--managerial-round).
</details>

---

## Capgemini

**Process:** Online test (English + aptitude + sometimes coding) → Technical → HR.

**What they emphasize:** **Fundamentals + automation basics + communication**. Steady, process-
oriented testers do well.

**Favorite question types:**

<details open>
<summary><b>⭐ Q — STLC phases and entry/exit criteria.</b></summary>

See [QA_MANUAL_PERF_API_GUIDE.md → A.2](QA_MANUAL_PERF_API_GUIDE.md#a2-process--life-cycles).
</details>

<details>
<summary><b>Q — Framework types: data-driven, keyword, hybrid, BDD.</b></summary>

Definitions + when each fits: [SENIOR_LEAD_INTERVIEW_GUIDE.md → Q4/Q5](SENIOR_LEAD_INTERVIEW_GUIDE.md#11-core-automation-concepts).
</details>

<details>
<summary><b>Q — Basic Java/Python and a small program.</b></summary>

Coding snippets: [SENIOR_LEAD_INTERVIEW_GUIDE.md → 2.1](SENIOR_LEAD_INTERVIEW_GUIDE.md#21-logic--dsa-snippets).
</details>

<details>
<summary><b>Q — API testing basics and status codes.</b></summary>

REST verbs, status codes, Postman: [QA_MANUAL_PERF_API_GUIDE.md → Sections C & D](QA_MANUAL_PERF_API_GUIDE.md#section-c--postman-api-testing).
</details>

---

## HCLTech

**Process:** Technical → (Technical-2 for senior) → HR. Often more **straight-to-technical** for
experienced hires.

**What they emphasize:** **Hands-on automation + framework + domain**. Practical, "can you do the
job" questions.

**Favorite question types:**

<details open>
<summary><b>⭐ Q — Walk through your framework folder structure and run flow.</b></summary>

Layered walkthrough: [SENIOR_LEAD_INTERVIEW_GUIDE.md → Q25](SENIOR_LEAD_INTERVIEW_GUIDE.md#31-architecture).
</details>

<details>
<summary><b>Q — How do you handle dynamic elements / iframes / windows / alerts?</b></summary>

Dynamic locators + waits ([Q13](SENIOR_LEAD_INTERVIEW_GUIDE.md#13-locators-waits--stability));
iframe → `switchTo().frame()` / `frameLocator`; windows → window handles; alerts →
`switchTo().alert()`.
</details>

<details>
<summary><b>Q — Explain CI integration (Jenkins/GitHub Actions) you set up.</b></summary>

Pipeline stages + triggers: [SENIOR_LEAD_INTERVIEW_GUIDE.md → Q32](SENIOR_LEAD_INTERVIEW_GUIDE.md#section-4--api--cicd--devops).
</details>

---

## Tech Mahindra

**Process:** Aptitude → Technical → HR. Telecom/enterprise domain projects are common.

**What they emphasize:** **Automation + manual fundamentals + domain adaptability**, decent
communication.

**Favorite question types:**

<details open>
<summary><b>Q — Test plan contents and how you estimate effort.</b></summary>

Test plan + estimation: [SENIOR_LEAD_INTERVIEW_GUIDE.md → Q38/Q44](SENIOR_LEAD_INTERVIEW_GUIDE.md#section-5--test-management--strategy).
</details>

<details>
<summary><b>Q — Defect triage and how you prioritize bugs.</b></summary>

Severity × priority + risk; triage flow: [QA_MANUAL_PERF_API_GUIDE.md → A.4](QA_MANUAL_PERF_API_GUIDE.md#a4-defect-management).
</details>

<details>
<summary><b>Q — Selenium locators and which you prefer.</b></summary>

Locator priority: [SENIOR_LEAD_INTERVIEW_GUIDE.md → Q11](SENIOR_LEAD_INTERVIEW_GUIDE.md#13-locators-waits--stability).
</details>

---

## LTIMindtree

**Process:** Online test → Technical → Managerial/HR. Mix of services + product-style engagements.

**What they emphasize:** **Framework design + coding + CI/CD**, and Agile delivery. Leaning more
"engineering" than pure manual.

**Favorite question types:**

<details open>
<summary><b>⭐ Q — Design a scalable automation framework for a multi-team product.</b></summary>

Scalability answer: [SENIOR_LEAD_INTERVIEW_GUIDE.md → Q26](SENIOR_LEAD_INTERVIEW_GUIDE.md#31-architecture).
</details>

<details>
<summary><b>Q — API + contract testing for microservices.</b></summary>

See [SENIOR_LEAD_INTERVIEW_GUIDE.md → Q34](SENIOR_LEAD_INTERVIEW_GUIDE.md#section-4--api--cicd--devops).
</details>

<details>
<summary><b>Q — Coding + DSA snippet under time pressure.</b></summary>

[SENIOR_LEAD_INTERVIEW_GUIDE.md → 2.1](SENIOR_LEAD_INTERVIEW_GUIDE.md#21-logic--dsa-snippets).
</details>

---

## IBM

**Process:** Online assessment → Technical → HR. Often **automation + cloud/DevOps** awareness for
senior roles.

**What they emphasize:** **Automation + CI/CD + a bit of cloud/containers**, plus solid
fundamentals.

**Favorite question types:**

<details open>
<summary><b>Q — How do you run tests in Docker / containers?</b></summary>

Containerized runtime for parity + grid scale-out:
[SENIOR_LEAD_INTERVIEW_GUIDE.md → Q35](SENIOR_LEAD_INTERVIEW_GUIDE.md#section-4--api--cicd--devops).
</details>

<details>
<summary><b>Q — Security testing basics (OWASP) in your process.</b></summary>

[SENIOR_LEAD_INTERVIEW_GUIDE.md → Q36](SENIOR_LEAD_INTERVIEW_GUIDE.md#section-4--api--cicd--devops).
</details>

---

# Product / Global Capability Centers (GCC)

> These pay more and dig **deeper into coding, system design, and CS fundamentals**. Expect a real
> coding bar (DSA), not just framework talk.

## Amazon (SDET / QAE)

**Process:** Online assessment (coding + work-style) → phone screen → on-site "loop" (4–6 rounds:
coding, testing/QA, system design for test, **Leadership Principles** behavioral in *every* round).

**What they emphasize:** **DSA coding**, **test strategy/design for a system**, and the
**16 Leadership Principles** (LPs) — every behavioral answer is mapped to an LP via STAR.

**Favorite question types:**

<details open>
<summary><b>⭐ Q — Coding: arrays/strings/hashmaps (two-sum, anagrams, dedupe).</b></summary>

Practice the snippets in [SENIOR_LEAD_INTERVIEW_GUIDE.md → 2.1](SENIOR_LEAD_INTERVIEW_GUIDE.md#21-logic--dsa-snippets);
then level up to two-pointers, sliding window, and basic trees/maps.
</details>

<details open>
<summary><b>⭐ Q — "How would you test a [vending machine / URL shortener / elevator / Amazon cart]?"</b></summary>

Framework: clarify requirements → enumerate **functional, boundary, negative, performance,
security, concurrency, failure** scenarios → prioritize by risk → state automation vs manual split.
Structured breadth + depth is what they score.
</details>

<details>
<summary><b>⭐ Q — Behavioral mapped to Leadership Principles (Ownership, Dive Deep, Bias for Action…).</b></summary>

Prepare 8–10 STAR stories, each tagged to LPs. See behavioral structure in
[SENIOR_LEAD_INTERVIEW_GUIDE.md → Section 6](SENIOR_LEAD_INTERVIEW_GUIDE.md#section-6--managerial-round).
Use **"I"** not "we", and quantify the result.
</details>

<details>
<summary><b>Q — Design a test framework / test plan for a given service.</b></summary>

Layered framework + risk-based plan: [SENIOR_LEAD_INTERVIEW_GUIDE.md → Q25/Q38](SENIOR_LEAD_INTERVIEW_GUIDE.md#section-3--framework-design).
</details>

---

## Microsoft

**Process:** Phone/online screen → loop (coding + testing + design + behavioral). Strong **CS
fundamentals**.

**What they emphasize:** **Coding + test-case design + edge-case thinking + system design for
test**. They love "what edge cases am I missing?"

**Favorite question types:**

<details open>
<summary><b>⭐ Q — Write a function AND its test cases (e.g., validate an input/parse a string).</b></summary>

Code it, then enumerate **valid, invalid, boundary, null/empty, large, malformed** cases — the
test-case design is half the score. Snippets:
[SENIOR_LEAD_INTERVIEW_GUIDE.md → 2.1](SENIOR_LEAD_INTERVIEW_GUIDE.md#21-logic--dsa-snippets).
</details>

<details>
<summary><b>Q — Design test strategy for a feature (offline mode, file upload, search).</b></summary>

Risk-based strategy + boundary/negative/perf/security coverage:
[SENIOR_LEAD_INTERVIEW_GUIDE.md → Q38/Q39](SENIOR_LEAD_INTERVIEW_GUIDE.md#51-lead-responsibilities).
</details>

---

## Flipkart / Walmart

**Process:** Coding screen → SDET rounds (coding + framework + system design for test) →
hiring-manager + behavioral.

**What they emphasize:** **Coding + automation framework + API/CI scale + system design for test**
at high-traffic e-commerce scale.

**Favorite question types:**

<details open>
<summary><b>⭐ Q — Coding + automate a flow end-to-end (cart/checkout).</b></summary>

POM + API setup + data isolation; reference this repo's
[fixtures](src/fixtures/index.ts) and [API client](src/api/clients/BaseApiClient.ts).
</details>

<details>
<summary><b>Q — Scale the suite for thousands of tests / reduce run time.</b></summary>

Parallel/shard + pyramid rebalance + tagging: [SENIOR_LEAD_INTERVIEW_GUIDE.md → Q33](SENIOR_LEAD_INTERVIEW_GUIDE.md#section-4--api--cicd--devops).
</details>

---

## Other Product Companies (general pattern)

Most product/GCC firms (Adobe, SAP, Oracle, PayPal, fintech/e-comm startups) follow: **coding
screen → 2–4 technical (coding + framework + design) → hiring manager → HR.** Prepare:

- **DSA**: arrays, strings, hashmaps, two-pointers, sliding window, basic trees/recursion.
- **Test design for a system** (the "how would you test X" question).
- **Framework + CI/CD depth.**
- **Behavioral** with quantified STAR stories.

---

# Quick Comparison Matrix

| Company | Coding bar | Framework depth | Process/Manual theory | Behavioral weight | Notes |
|---------|:---------:|:---------------:|:---------------------:|:-----------------:|-------|
| TCS | Low–Med | Med | **High** | Med | Project + process heavy; MR round |
| Infosys | **Med** | Med | Med | Med | Reason-out-loud coding |
| Wipro | Low–Med | Med | **High** | Med | Scenario design, manual+auto mix |
| Cognizant | Med | **High** | Med | Med | TestNG, patterns, parallel |
| Accenture | Med | **High** | Med | **High** | Client-facing communication |
| Capgemini | Low–Med | Med | **High** | Med | Fundamentals + communication |
| HCLTech | Med | **High** | Med | Med | Hands-on, practical |
| Tech Mahindra | Low–Med | Med | **High** | Med | Domain adaptability |
| LTIMindtree | **Med–High** | **High** | Med | Med | Engineering-leaning |
| IBM | Med | **High** | Med | Med | CI/CD + containers |
| Amazon | **High** | **High** | Med | **Very High (LPs)** | DSA + LP behavioral every round |
| Microsoft | **High** | Med–High | Med | **High** | Code + test-case design |
| Flipkart/Walmart | **High** | **High** | Med | **High** | Scale, system design for test |

---

# Universal Question Bank (asked almost everywhere)

> If you only have a few hours, master these — they recur across nearly every company.

<details open>
<summary><b>⭐ 1. Explain your project, role, and daily work.</b></summary>

2–3 min STAR-style summary; *your* contribution + a measurable result.
</details>

<details>
<summary><b>⭐ 2. Severity vs Priority (with examples).</b></summary>

Technical impact vs business urgency; give the logo/crash examples.
</details>

<details>
<summary><b>⭐ 3. Smoke vs Sanity, Retesting vs Regression, Verification vs Validation.</b></summary>

[QA_MANUAL_PERF_API_GUIDE.md → Section F tables](QA_MANUAL_PERF_API_GUIDE.md#section-f--quick-revision-tables).
</details>

<details>
<summary><b>⭐ 4. Test design techniques (BVA, equivalence, decision table, state transition).</b></summary>

[QA_MANUAL_PERF_API_GUIDE.md → A.3](QA_MANUAL_PERF_API_GUIDE.md#a3-test-design-techniques).
</details>

<details>
<summary><b>⭐ 5. "How would you test this [object/feature]?"</b></summary>

Functional → boundary → negative → UI → security → performance → accessibility. Structure beats
volume.
</details>

<details>
<summary><b>⭐ 6. Explain your automation framework.</b></summary>

Layered walkthrough: [SENIOR_LEAD_INTERVIEW_GUIDE.md → Q25](SENIOR_LEAD_INTERVIEW_GUIDE.md#31-architecture).
</details>

<details>
<summary><b>⭐ 7. A coding snippet (reverse string / duplicates / anagram / 2nd largest).</b></summary>

[SENIOR_LEAD_INTERVIEW_GUIDE.md → 2.1](SENIOR_LEAD_INTERVIEW_GUIDE.md#21-logic--dsa-snippets).
</details>

<details>
<summary><b>⭐ 8. A SQL query (2nd highest salary, joins, group by/having).</b></summary>

`DENSE_RANK()` or nested `MAX`; know INNER vs LEFT join and `GROUP BY ... HAVING`.
</details>

<details>
<summary><b>⭐ 9. How do you handle flaky tests / waits?</b></summary>

[SENIOR_LEAD_INTERVIEW_GUIDE.md → Q10/Q12](SENIOR_LEAD_INTERVIEW_GUIDE.md#13-locators-waits--stability).
</details>

<details>
<summary><b>⭐ 10. Tell me about a conflict / a tough deadline / a failure (behavioral).</b></summary>

STAR with numbers: [SENIOR_LEAD_INTERVIEW_GUIDE.md → Sections 6 & 7](SENIOR_LEAD_INTERVIEW_GUIDE.md#section-6--managerial-round).
</details>

---

# Final Tips Per Round

- **Technical** → explain *why*, not just *what*; tie answers to *your* framework; think aloud on
  coding.
- **Coding** → clarify input/output, state complexity, handle edge cases, test your own code.
- **Managerial** → ownership + data + communication; STAR with real numbers; "disagree and commit."
- **HR** → stay positive, know your CTC range with justification, ask 2–3 sharp questions.
- **Client round (services)** → clarity, confidence, domain awareness, listen before answering.
- **Amazon specifically** → map *every* story to a Leadership Principle; say "I", quantify results.

---

<div align="center">

*Match your prep to the company: services MNCs reward **fundamentals + process + communication**;
product/GCCs reward **coding + system design for test + behavioral depth**. Prepare the right mix
and walk in calm.*

[⬆ Back to top](#company-wise-qa-interview-guide)

</div>
