<div align="center">

# Manual · Performance · API Interview Guide
### Manual Testing (10+ yrs) · JMeter · Postman · API Testing

*Companion to [LEARNING_GUIDE.md](LEARNING_GUIDE.md) · [INTERVIEW_GUIDE.md](INTERVIEW_GUIDE.md) · [SENIOR_LEAD_INTERVIEW_GUIDE.md](SENIOR_LEAD_INTERVIEW_GUIDE.md) · [API_PERFORMANCE_TESTING_GUIDE.md](API_PERFORMANCE_TESTING_GUIDE.md)*

</div>

---

> **How this guide is organized**
>
> - [Section A — Manual Testing & QA (10+ yrs)](#section-a--manual-testing--qa-10-yrs)
> - [Section B — JMeter: Load & Performance Testing](#section-b--jmeter-load--performance-testing)
> - [Section C — Postman: API Testing](#section-c--postman-api-testing)
> - [Section D — API Testing Concepts](#section-d--api-testing-concepts)
> - [Section E — Scenario & Strategy (senior)](#section-e--scenario--strategy-senior)
> - [Section F — Quick Revision Tables](#section-f--quick-revision-tables)

---

## Table of Contents

<table>
<tr><td valign="top" width="50%">

**A — Manual Testing & QA**
- [A.1 Core Concepts](#a1-core-concepts)
- [A.2 Process & Life Cycles](#a2-process--life-cycles)
- [A.3 Test Design Techniques](#a3-test-design-techniques)
- [A.4 Defect Management](#a4-defect-management)
- [A.5 Agile & Documentation](#a5-agile--documentation)

**B — JMeter**
- [B.1 Fundamentals](#b1-fundamentals)
- [B.2 Components](#b2-components)
- [B.3 Correlation & Parameterization](#b3-correlation--parameterization)
- [B.4 Execution & Results](#b4-execution--results)

</td><td valign="top" width="50%">

**C — Postman**
- [C.1 Fundamentals](#c1-fundamentals)
- [C.2 Scripting & Tests](#c2-scripting--tests)
- [C.3 Automation & CI](#c3-automation--ci)

**D — API Testing Concepts**
- [D.1 HTTP & REST](#d1-http--rest)
- [D.2 Auth & Security](#d2-auth--security)
- [D.3 Advanced API](#d3-advanced-api)

**E — Scenario & Strategy**

**F — Quick Revision Tables**

</td></tr>
</table>

---
---

# Section A — Manual Testing & QA (10+ yrs)

> At 10+ years, expect depth on **process, strategy, and judgment** — not just definitions. Answers
> below are interview-ready.

## A.1 Core Concepts

<details open>
<summary><b>A1 — What is software testing and why is it needed?</b></summary>

The process of evaluating an application to find defects and verify it meets requirements. It reduces
business risk, improves quality and user trust, and is cheaper than fixing defects in production.

</details>

<details>
<summary><b>A2 — Verification vs Validation</b></summary>

*Verification* = "are we building it right?" — reviews, walkthroughs, static analysis (no code run).
*Validation* = "are we building the right thing?" — executing the running application.

</details>

<details>
<summary><b>A3 — QA vs QC vs Testing</b></summary>

*QA* = process-oriented, **prevents** defects (standards, reviews, audits). *QC* = product-oriented,
**detects** defects. *Testing* is a subset of QC — the actual execution to find defects.

</details>

<details>
<summary><b>A4 — Functional vs Non-functional testing</b></summary>

*Functional* = what the system does (features, business rules). *Non-functional* = how it behaves —
performance, security, usability, reliability, scalability, compatibility.

</details>

<details>
<summary><b>A5 — Static vs Dynamic testing</b></summary>

*Static* = examining artifacts without execution (reviews, inspections, static code analysis).
*Dynamic* = executing the software with inputs and checking outputs.

</details>

<details>
<summary><b>A6 — Positive vs Negative testing</b></summary>

*Positive* = valid inputs, expecting success. *Negative* = invalid/unexpected inputs, expecting
graceful handling (errors, validation, no crash).

</details>

<details>
<summary><b>A7 — Black box vs White box vs Grey box</b></summary>

*Black box* = test behavior without knowing internals. *White box* = test internal logic/code paths.
*Grey box* = partial knowledge (e.g., DB schema or APIs) to design better tests.

</details>

<details>
<summary><b>A8 — Levels of testing</b></summary>

Unit → Integration → System → Acceptance (UAT). Each level widens scope from a single module to the
whole product to business sign-off.

</details>

## A.2 Process & Life Cycles

<details open>
<summary><b>A9 — SDLC vs STLC</b></summary>

*SDLC* = full software development lifecycle. *STLC* (Software Testing Life Cycle) phases:
Requirement Analysis → Test Planning → Test Case Design → Environment Setup → Execution → Closure.

</details>

<details>
<summary><b>A10 — Entry and Exit criteria</b></summary>

*Entry* = conditions that must be met before a phase starts (e.g., requirements baselined, env ready).
*Exit* = conditions to consider a phase complete (e.g., coverage met, critical defects closed,
defect arrival rate flat).

</details>

<details>
<summary><b>A11 — Smoke vs Sanity testing</b></summary>

*Smoke* = broad, shallow check that a new build is stable enough to test (build-verification).
*Sanity* = narrow, deep check of a specific fix/feature after a change.

</details>

<details>
<summary><b>A12 — Retesting vs Regression</b></summary>

*Retesting* = confirm a specific defect is fixed. *Regression* = confirm the fix (or new change)
didn't break existing functionality.

</details>

<details>
<summary><b>A13 — What is a Requirement Traceability Matrix (RTM)?</b></summary>

A table mapping requirements ↔ test cases (and defects). Ensures every requirement is covered by at
least one test and helps measure coverage and impact of changes.

</details>

<details>
<summary><b>A14 — When do you stop testing?</b></summary>

Exit criteria met: coverage targets reached, all critical/high defects fixed, defect discovery rate
flattened, deadline/budget, and risk formally accepted by stakeholders.

</details>

## A.3 Test Design Techniques

<details open>
<summary><b>A15 — Equivalence Partitioning (EP)</b></summary>

Group inputs that behave the same; test one representative per group. Age valid 18–60 → test one
valid (30) and one each invalid side (10, 70).

</details>

<details>
<summary><b>A16 — Boundary Value Analysis (BVA)</b></summary>

Defects cluster at edges. For range 1–100, test 0, 1, 2, 99, 100, 101 (boundaries ± 1).

</details>

<details>
<summary><b>A17 — Decision Table testing</b></summary>

Maps combinations of conditions to expected actions — ideal for complex business rules with multiple
inputs (e.g., discount based on membership + cart value).

</details>

<details>
<summary><b>A18 — State Transition testing</b></summary>

Tests valid and invalid transitions between system states (e.g., account locks after 3 failed logins).

</details>

<details>
<summary><b>A19 — Pairwise / Error Guessing</b></summary>

*Pairwise* tests all pairs of parameter values (huge reduction vs all combinations). *Error guessing*
is experience-based — deliberately trying inputs likely to break (nulls, empties, special chars).

</details>

## A.4 Defect Management

<details open>
<summary><b>A20 — Severity vs Priority</b></summary>

*Severity* = impact on the system (how bad). *Priority* = urgency to fix (how soon). Examples:
homepage logo typo = low severity / high priority; crash in rarely-used report = high severity / low
priority.

</details>

<details>
<summary><b>A21 — Bug life cycle</b></summary>

`New → Assigned → Open → Fixed → Retest → Verified → Closed`; alternate paths: `Reopened`, `Rejected`,
`Duplicate`, `Deferred`, `Won't Fix`.

</details>

<details>
<summary><b>A22 — What makes a good bug report?</b></summary>

Clear title, steps to reproduce, expected vs actual, environment/build, severity & priority, and
evidence (screenshots, logs, video). Reproducible and unambiguous.

</details>

<details>
<summary><b>A23 — Error vs Defect vs Bug vs Failure</b></summary>

Error (human mistake) → Defect/Bug (flaw in code) → Failure (defect manifests at runtime).

</details>

<details>
<summary><b>A24 — How do you handle a "not reproducible" bug?</b></summary>

Capture more context (logs, network, video, exact build/env/data), check timing/async/cache, try
different data/users, and pair with the developer. Document conditions precisely.

</details>

## A.5 Agile & Documentation

<details open>
<summary><b>A25 — Tester's role in Agile/Scrum</b></summary>

Involved from refinement: clarify acceptance criteria, estimate, test within the sprint, automate
alongside dev (shift-left), report quality in standups/retros, and support continuous delivery.

</details>

<details>
<summary><b>A26 — Test Plan vs Test Strategy</b></summary>

*Strategy* = high-level, org-wide approach (long-lived). *Plan* = project-specific (scope, schedule,
resources, deliverables, risks).

</details>

<details>
<summary><b>A27 — What is "Definition of Done" for testing?</b></summary>

Acceptance criteria verified, test cases executed, critical/high defects fixed & retested, automation
updated, and no open blockers — agreed by the team.

</details>

<details>
<summary><b>A28 — Risk-based testing</b></summary>

Prioritize testing effort by risk = likelihood × impact. Focus on critical user journeys, frequently
changed/complex areas, and high-business-value features first.

</details>

<details>
<summary><b>A29 — How do you test with no/poor requirements?</b></summary>

Exploratory testing, talk to PO/devs/users, reference similar apps, infer intent from the UI, and
document assumptions + findings as you go.

</details>

<details>
<summary><b>A30 — Test metrics you track (10+ yrs)</b></summary>

Test coverage, defect density, defect leakage/escaped defects, defect removal efficiency, pass/fail
rate, test execution progress, and automation coverage/flaky rate.

</details>

---
---

# Section B — JMeter: Load & Performance Testing

> Apache JMeter is an open-source tool to load/performance-test web apps, APIs, databases, and more.

## B.1 Fundamentals

<details open>
<summary><b>B1 — Types of performance testing</b></summary>

- **Load** — expected user load; verify response times/throughput meet SLAs.
- **Stress** — beyond capacity; find the breaking point and how it fails.
- **Spike** — sudden sharp increase in load; test elasticity/recovery.
- **Soak / Endurance** — sustained load over hours; find memory leaks/degradation.
- **Scalability** — how performance changes as you add load/resources.
- **Volume** — large amounts of data in the DB.

</details>

<details>
<summary><b>B2 — Key performance metrics</b></summary>

- **Response time** (latency) — time to get a response; track average, median, **90th/95th/99th
  percentile**.
- **Throughput** — requests/transactions per second.
- **Error rate** — % of failed requests.
- **Concurrent users / threads** — simultaneous virtual users.
- **Resource utilization** — CPU, memory, disk, network on the server.

</details>

<details>
<summary><b>B3 — Why use percentiles instead of average response time?</b></summary>

Averages hide outliers. The **90th/95th percentile** tells you the experience of the slowest 10%/5%
of users — a far better SLA indicator. A good average with a terrible 99th percentile means some
users suffer badly.

</details>

<details>
<summary><b>B4 — How does JMeter simulate users?</b></summary>

Via **Thread Groups** — each thread = one virtual user. You configure number of threads, **ramp-up
period** (how fast users start), and loop count/duration. JMeter is protocol-level (it does not
render the UI), so it's lightweight and scalable.

</details>

## B.2 Components

<details open>
<summary><b>B5 — Main JMeter elements (know the order)</b></summary>

1. **Test Plan** — the container for everything.
2. **Thread Group** — virtual users (threads, ramp-up, loops).
3. **Samplers** — the actual requests (HTTP Request, JDBC, FTP, etc.).
4. **Logic Controllers** — control flow (Loop, If, Transaction, Once Only).
5. **Config Elements** — setup (HTTP Defaults, CSV Data Set, Cookie/Header Manager).
6. **Pre-Processors** — run before a sampler (e.g., User Parameters).
7. **Post-Processors** — extract data from responses (Regex/JSON/Boundary Extractor).
8. **Timers** — add think time / pacing between requests.
9. **Assertions** — validate responses (Response, Duration, JSON assertions).
10. **Listeners** — collect/display results (Summary Report, Aggregate Report, View Results Tree).

</details>

<details>
<summary><b>B6 — Execution order of elements</b></summary>

Config → Pre-Processors → Timers → Sampler → Post-Processors → Assertions → Listeners. (Scoping
matters — elements apply to their level and below.)

</details>

<details>
<summary><b>B7 — What is a Listener? Which for what?</b></summary>

Collects results. **View Results Tree** = debugging (request/response per sample — never use in load
runs, it's heavy). **Aggregate/Summary Report** = throughput, percentiles, error rate for analysis.

</details>

<details>
<summary><b>B8 — Timers and think time</b></summary>

Timers add delay to mimic real user pauses. Examples: **Constant Timer**, **Uniform Random Timer**,
**Gaussian Random Timer**, **Constant Throughput Timer** (to hold a target RPS).

</details>

<details>
<summary><b>B9 — Assertions in JMeter</b></summary>

Validate responses: **Response Assertion** (text/status), **Duration Assertion** (SLA time), **JSON
Assertion**, **Size Assertion**. Failed assertions count toward the error rate.

</details>

## B.3 Correlation & Parameterization

<details open>
<summary><b>B10 — Correlation (most important JMeter concept)</b></summary>

Capturing a **dynamic value** from one response (e.g., session token, CSRF token, order ID) and
passing it into a later request. Done with **Post-Processors** — Regular Expression Extractor, JSON
Extractor, or Boundary Extractor — storing it in a variable used as `${token}`.

</details>

<details>
<summary><b>B11 — Parameterization</b></summary>

Feeding **different data** to each virtual user (e.g., unique logins) using a **CSV Data Set Config**
so threads don't all send identical requests.

</details>

<details>
<summary><b>B12 — Correlation vs Parameterization</b></summary>

*Correlation* handles **server-generated dynamic** values (tokens). *Parameterization* feeds
**test-supplied** input data (credentials, search terms). Both prevent unrealistic, cache-friendly,
duplicate traffic.

</details>

<details>
<summary><b>B13 — How do you handle authentication/tokens?</b></summary>

Send the login request once, **extract** the token/cookie via a Post-Processor, store it in a
variable, and add it to subsequent requests (e.g., via **HTTP Header Manager** as a Bearer token).

</details>

## B.4 Execution & Results

<details open>
<summary><b>B14 — GUI vs Non-GUI (CLI) mode</b></summary>

Always run **load tests in non-GUI mode** — the GUI is for building/debugging only and consumes too
many resources. CLI: `jmeter -n -t test.jmx -l results.jtl -e -o report/`.

</details>

<details>
<summary><b>B15 — Ramp-up period — why it matters</b></summary>

The time over which all threads start. Too short = unrealistic instant spike; set it so load builds
gradually (e.g., 100 users over 60s) to mimic real traffic and avoid false errors.

</details>

<details>
<summary><b>B16 — Distributed / scaling JMeter</b></summary>

For very high load, run **distributed testing**: one master controls multiple slave/worker machines
(JMeter servers) generating load in parallel, results aggregated on the master.

</details>

<details>
<summary><b>B17 — How do you analyze results / identify a bottleneck?</b></summary>

Correlate JMeter metrics (percentile response time, throughput, error rate) with **server-side**
monitoring (CPU, memory, DB queries, connection pools, GC). The bottleneck is where resource
saturation or queueing appears first (app, DB, network, or third-party).

</details>

<details>
<summary><b>B18 — What is correlation of throughput vs threads?</b></summary>

As you add threads, throughput should rise then plateau. The **knee point** where response time
spikes but throughput stops increasing indicates saturation/capacity limit.

</details>

---
---

# Section C — Postman: API Testing

## C.1 Fundamentals

<details open>
<summary><b>C1 — What is Postman used for?</b></summary>

A tool to build, send, and test API requests (REST, GraphQL, SOAP). Supports collections, environments,
variables, scripting, automated tests, mock servers, and CI integration via Newman.

</details>

<details>
<summary><b>C2 — Collection vs Environment vs Variables</b></summary>

*Collection* = a saved group of related requests (often a folder per feature). *Environment* = a set
of variables (URLs, tokens) you switch between (dev/staging/prod). *Variables* exist at scopes:
global → collection → environment → local/data → (most specific wins).

</details>

<details>
<summary><b>C3 — How do you parameterize requests?</b></summary>

Use variables `{{base_url}}/users/{{userId}}` and set them per environment, or supply a **data file**
(CSV/JSON) via the Collection Runner for data-driven testing.

</details>

<details>
<summary><b>C4 — Pre-request Script vs Tests tab</b></summary>

*Pre-request Script* runs **before** the request (set variables, generate timestamps, sign requests).
*Tests* runs **after** the response (assertions, extract values, chain requests).

</details>

## C.2 Scripting & Tests

<details open>
<summary><b>C5 — Writing a basic test</b></summary>

```javascript
pm.test("status is 200", () => pm.response.to.have.status(200));

pm.test("body has id", () => {
  const json = pm.response.json();
  pm.expect(json).to.have.property("id");
});

pm.test("responds under 500ms", () =>
  pm.expect(pm.response.responseTime).to.be.below(500));
```

</details>

<details>
<summary><b>C6 — How do you chain requests (use a token from one in the next)?</b></summary>

In the first request's **Tests**, extract and save the value:
```javascript
const token = pm.response.json().token;
pm.environment.set("authToken", token);
```
Then use `{{authToken}}` (e.g., in an Authorization header) in later requests.

</details>

<details>
<summary><b>C7 — Validate a JSON schema in Postman</b></summary>

```javascript
const schema = { type: "object", required: ["id", "name"],
  properties: { id: { type: "number" }, name: { type: "string" } } };
pm.test("schema valid", () => pm.response.to.have.jsonSchema(schema));
```

</details>

<details>
<summary><b>C8 — Common pm assertions</b></summary>

```javascript
pm.response.to.have.status(201);
pm.response.to.have.header("Content-Type");
pm.expect(pm.response.json().name).to.eql("Jane");
pm.expect(pm.response.responseTime).to.be.below(800);
```

</details>

## C.3 Automation & CI

<details open>
<summary><b>C9 — What is Newman?</b></summary>

Postman's **command-line runner**. Run a collection from CI:
```bash
newman run collection.json -e staging.json -r cli,html
```
Enables automated API regression in pipelines without the GUI.

</details>

<details>
<summary><b>C10 — Data-driven testing in Postman</b></summary>

Use the **Collection Runner** (or Newman `-d data.csv`) to iterate the same requests over many rows
of test data — each iteration substitutes the data variables.

</details>

<details>
<summary><b>C11 — Mock servers and monitors</b></summary>

*Mock server* returns example responses so front-end/testing can proceed before the API is ready.
*Monitor* schedules a collection to run periodically (health checks, uptime, SLA validation).

</details>

<details>
<summary><b>C12 — How do you secure secrets in Postman?</b></summary>

Store tokens/keys in **environment variables** (mark as *secret*), never hard-code in requests, and
keep environment files out of shared exports/version control.

</details>

---
---

# Section D — API Testing Concepts

## D.1 HTTP & REST

<details open>
<summary><b>D1 — What is an API and what is REST?</b></summary>

An **API** is a contract for software to communicate. **REST** is an architectural style using HTTP:
stateless, resource-based URLs, standard methods (GET/POST/PUT/PATCH/DELETE), and representations
(usually JSON).

</details>

<details>
<summary><b>D2 — Common HTTP methods</b></summary>

`GET` (read) · `POST` (create) · `PUT` (full update/replace) · `PATCH` (partial update) ·
`DELETE` (remove). GET/PUT/DELETE are **idempotent**; POST is not.

</details>

<details>
<summary><b>D3 — HTTP status code families</b></summary>

`1xx` info · `2xx` success (200 OK, 201 Created, 204 No Content) · `3xx` redirect (301, 304) ·
`4xx` client error (400, 401, 403, 404, 409, 429) · `5xx` server error (500, 502, 503).

</details>

<details>
<summary><b>D4 — PUT vs PATCH vs POST</b></summary>

POST creates (not idempotent — repeats make duplicates). PUT replaces the whole resource
(idempotent). PATCH updates part of it.

</details>

<details>
<summary><b>D5 — Idempotency — why it matters in testing</b></summary>

An idempotent call gives the same result no matter how many times it's sent — safe to retry. Tests &
retry logic rely on this; POST needs care to avoid duplicate side effects.

</details>

<details>
<summary><b>D6 — Path param vs Query param vs Body</b></summary>

*Path* identifies a resource (`/users/1`). *Query* filters/sorts/paginates (`?page=2&sort=name`).
*Body* carries the payload for create/update (JSON).

</details>

<details>
<summary><b>D7 — REST vs SOAP vs GraphQL</b></summary>

*REST* = lightweight, JSON, many endpoints. *SOAP* = XML, strict contract (WSDL), heavier, used in
legacy/enterprise. *GraphQL* = single endpoint, client requests exactly the fields it needs.

</details>

## D.2 Auth & Security

<details open>
<summary><b>D8 — Common API authentication methods</b></summary>

**API key** (header/query), **Basic Auth** (base64 user:pass over HTTPS), **Bearer/JWT token**,
**OAuth 2.0** (token via grant flow + refresh). Always over HTTPS.

</details>

<details>
<summary><b>D9 — What is a JWT?</b></summary>

JSON Web Token — a signed token with three parts: **header.payload.signature**. Stateless; the server
verifies the signature. Test valid, expired, tampered, and missing tokens.

</details>

<details>
<summary><b>D10 — How do you test API security?</b></summary>

Authn/authz (access without/with wrong token, role escalation), input validation (SQL injection, XSS,
oversized payloads), rate limiting (`429`), sensitive-data exposure, HTTPS enforcement, and proper
error messages (no stack traces leaked).

</details>

<details>
<summary><b>D11 — 401 vs 403</b></summary>

`401 Unauthorized` = not authenticated (no/invalid credentials). `403 Forbidden` = authenticated but
**not allowed** to access the resource.

</details>

## D.3 Advanced API

<details open>
<summary><b>D12 — What do you validate in an API response?</b></summary>

Status code, response body (values + **schema/shape**), headers (Content-Type, caching, auth),
response time/SLA, error handling, and data correctness against the DB if needed.

</details>

<details>
<summary><b>D13 — How do you test pagination?</b></summary>

Verify page size, `page`/`limit`/`offset`, `next`/`prev`/`total` metadata, first/last/empty pages,
out-of-range pages, and consistent ordering.

</details>

<details>
<summary><b>D14 — How do you test rate limiting?</b></summary>

Send rapid requests beyond the limit; expect `429 Too Many Requests` and a `Retry-After` header, then
confirm normal access resumes after the window.

</details>

<details>
<summary><b>D15 — What is contract testing?</b></summary>

Verifies a provider and consumer agree on the API contract **independently** (e.g., Pact), catching
breaking changes early in CI without full end-to-end integration. Key for microservices.

</details>

<details>
<summary><b>D16 — Manual vs automated API testing</b></summary>

Explore and design with Postman manually; automate stable, high-value checks (Newman/Playwright/
RestAssured) and run them in CI for regression. Automate repetitive validations; keep exploratory
manual.

</details>

<details>
<summary><b>D17 — How do you test an API with dependencies (other services/DB)?</b></summary>

Set up test data via API/DB seeding, **mock/stub** unstable third-party services, validate the
contract, and clean up after. Isolate the system under test for reliable, repeatable runs.

</details>

<details>
<summary><b>D18 — What is API versioning and why test it?</b></summary>

APIs evolve via versions (`/v1/`, `/v2/`, or headers). Test backward compatibility so existing
consumers don't break when a new version ships.

</details>

---
---

# Section E — Scenario & Strategy (senior)

> Judgment questions for 10+ yr testers — answer with structure and trade-offs.

<details open>
<summary><b>E1 — How would you design a performance test for an e-commerce checkout?</b></summary>

Define SLAs (e.g., 95th percentile < 2s at 1,000 concurrent users), identify critical transactions
(browse → add to cart → checkout → pay), parameterize unique users/products, **correlate** session &
payment tokens, model realistic think time, run load/stress/soak in non-GUI mode, monitor server +
DB, and report percentiles, throughput, error rate with the bottleneck analysis.

</details>

<details>
<summary><b>E2 — Your API regression suite is slow and flaky. What do you do?</b></summary>

Profile slow calls, parallelize independent tests, stub slow third parties, ensure data isolation and
unique data per run, remove inter-test dependencies, stabilize auth via token reuse, and quarantine +
root-cause flaky tests rather than blanket retries.

</details>

<details>
<summary><b>E3 — Production is slow under peak load. How do you investigate?</b></summary>

Reproduce with a load test mirroring peak traffic, correlate client metrics with server resource
usage (CPU/memory/DB/connection pools/GC), check slow queries, caching, and third-party latency, find
the saturation point, and recommend scaling or code/DB fixes.

</details>

<details>
<summary><b>E4 — How do you decide what to automate vs keep manual?</b></summary>

Automate stable, repetitive, high-value, data-driven, and regression-prone paths (API + critical UI).
Keep exploratory, one-off, rapidly-changing, and usability checks manual. Follow the test pyramid:
more API/unit, fewer UI E2E.

</details>

<details>
<summary><b>E5 — How do you build a test strategy for a new project (10+ yr lens)?</b></summary>

Assess risk and architecture, define scope + levels (unit/integration/system/UAT), choose tools, set
entry/exit criteria and environments, plan test data and CI integration, define metrics and reporting,
and align automation vs manual split with the team and timeline.

</details>

---
---

# Section F — Quick Revision Tables

### Manual testing one-liners

| Term | One-line answer |
|---|---|
| Severity vs Priority | Impact (how bad) vs urgency (how soon) |
| Smoke vs Sanity | Broad build check vs deep check of one fix |
| Retest vs Regression | Verify the fix vs verify nothing else broke |
| Verification vs Validation | Building it right vs building the right thing |
| EP vs BVA | Group inputs vs test the edges |
| Static vs Dynamic | No execution vs executing the app |
| QA vs QC | Prevent defects vs detect defects |

### JMeter quick reference

| Concept | Key point |
|---|---|
| Thread Group | Virtual users: threads, ramp-up, loops |
| Sampler | The request (HTTP, JDBC, …) |
| Correlation | Extract dynamic value → reuse (Post-Processor) |
| Parameterization | CSV Data Set feeds unique data |
| Listener | Collects results (Aggregate Report) |
| Run mode | Load = non-GUI: `jmeter -n -t test.jmx -l out.jtl` |
| Key metrics | 90/95/99th percentile, throughput, error rate |

### Postman quick reference

| Concept | Key point |
|---|---|
| Collection | Saved group of requests |
| Environment | Switchable variable set (dev/staging/prod) |
| Pre-request vs Tests | Before vs after the request |
| Chaining | `pm.environment.set()` → `{{var}}` |
| Newman | CLI runner for CI |
| Data-driven | Collection Runner / Newman `-d data.csv` |

### HTTP status cheat sheet

| Code | Meaning |
|---|---|
| 200 / 201 / 204 | OK / Created / No Content |
| 301 / 304 | Moved Permanently / Not Modified |
| 400 / 401 / 403 / 404 | Bad Request / Unauthorized / Forbidden / Not Found |
| 409 / 429 | Conflict / Too Many Requests |
| 500 / 502 / 503 | Server Error / Bad Gateway / Unavailable |

---

---

# Section G — Extra Question Bank (rapid, high-yield)

## G.1 More Manual / QA Theory

1. **Verification vs Validation?** → Verification = "are we building it right?" (reviews); Validation
   = "did we build the right thing?" (testing).
2. **QA vs QC vs Testing?** → QA = process (prevention); QC = product (detection); Testing = the QC
   activity of finding defects.
3. **Severity vs Priority?** → Severity = technical impact; Priority = business urgency.
4. **Smoke vs Sanity?** → Smoke = broad shallow build-stability check; Sanity = narrow deep check of
   a specific fix/area.
5. **Retesting vs Regression?** → Retesting confirms a specific fix; regression checks nothing else
   broke.
6. **Positive vs Negative testing?** → Valid inputs (should pass) vs invalid inputs (should be
   handled gracefully).
7. **Static vs Dynamic testing?** → Static = no execution (reviews, walkthroughs); dynamic = running
   the software.
8. **What is a test case vs test scenario?** → Scenario = what to test (high level); test case =
   detailed steps + data + expected result.
9. **What is RTM (Requirement Traceability Matrix)?** → Maps requirements ↔ test cases to ensure full
   coverage.
10. **What is exploratory testing?** → Simultaneous learning, test design, and execution without
    pre-scripted cases.
11. **What is ad-hoc testing?** → Informal, unstructured testing without documentation.
12. **What is monkey/gorilla testing?** → Random inputs (monkey) vs intensely testing one module
    repeatedly (gorilla).
13. **What is usability testing?** → Evaluating ease of use from a real-user perspective.
14. **What is accessibility testing?** → Ensuring the app works for users with disabilities (WCAG,
    screen readers).
15. **What is compatibility testing?** → Across browsers, devices, OS, resolutions.
16. **What is localization vs globalization testing?** → Localization = specific locale (language,
    currency); globalization = works across all locales.
17. **What is the defect life cycle?** → New → Assigned → Open → Fixed → Retest → Closed (or
    Reopened/Deferred/Rejected/Duplicate).
18. **What is defect leakage?** → Defects that escaped to a later stage / production.
19. **What is defect density?** → Defects per size unit (per KLOC / per module).
20. **What is a test harness?** → The tools/stubs/drivers set up to run tests.

## G.2 More Agile / Process

21. **What are the Scrum ceremonies?** → Sprint planning, daily stand-up, sprint review, retro
    (+ backlog refinement).
22. **What is a user story and INVEST?** → A small unit of value; Independent, Negotiable, Valuable,
    Estimable, Small, Testable.
23. **What are acceptance criteria?** → Conditions a story must meet to be "done" — the basis for
    test cases.
24. **What is Definition of Done (DoD)?** → A shared checklist (coded, tested, automated, reviewed,
    documented) before a story is complete.
25. **What is velocity?** → Story points completed per sprint — used for planning, not as a
    performance metric.
26. **What is a burndown chart?** → Remaining work vs time within a sprint.
27. **Agile vs Waterfall?** → Iterative/incremental + adaptive vs sequential + plan-driven.
28. **What is shift-left testing?** → Testing earlier in the lifecycle to catch defects sooner/
    cheaper.
29. **What is CI/CD in QA terms?** → Automated build + test on every change (CI), automated release
    pipeline (CD).
30. **What is a spike in Agile?** → A time-boxed research task to reduce uncertainty.

## G.3 More JMeter / Performance

31. **Load vs stress vs soak vs spike?** → Expected peak / breaking point / long duration / sudden
    surge.
32. **What is ramp-up in JMeter?** → Time to start all threads gradually (realistic growth).
33. **What is correlation?** → Capturing a dynamic server value (token/session) and reusing it via
    an extractor.
34. **What is parameterization?** → Feeding input data from a CSV Data Set so users are unique.
35. **Why run JMeter in non-GUI mode?** → GUI distorts results under load; headless `-n` is for real
    runs.
36. **What are listeners and why avoid heavy ones under load?** → They collect results; View Results
    Tree is memory-heavy — debug only.
37. **Which percentile matters and why?** → 90/95th — reflects real worst-case UX better than the
    average.
38. **What is throughput?** → Requests/transactions handled per second.
39. **What is a bottleneck?** → The resource that saturates first and caps performance.
40. **How do you simulate think time?** → Timers (Constant/Gaussian) between requests.

## G.4 More Postman / API

41. **What is a Postman collection?** → A saved group of requests, organizable into folders, runnable
    in sequence.
42. **What are Postman environments/variables?** → Key-value sets (base URL, tokens) to switch
    between dev/QA/prod.
43. **How do you write tests in Postman?** → JS in the Tests tab using `pm.test()` +
    `pm.response.to.have.status(200)`.
44. **How do you chain requests in Postman?** → Save a response value via `pm.environment.set()` and
    use `{{var}}` in the next request.
45. **What is Newman?** → Postman's CLI runner for executing collections in CI.
46. **What is a pre-request script?** → JS that runs before a request (e.g., generate a timestamp or
    token).
47. **How do you validate a JSON schema in Postman?** → `pm.response.to.have.jsonSchema(schema)`.
48. **How do you do data-driven runs in Postman?** → Collection Runner with a CSV/JSON data file.
49. **What are the common HTTP status codes to assert?** → 200, 201, 400, 401, 403, 404, 500.
50. **How do you handle authentication in Postman?** → Auth tab (Bearer/Basic/OAuth) or set the
    Authorization header manually.

> Want the deepest API + performance set? See
> [API_PERFORMANCE_TESTING_GUIDE.md](API_PERFORMANCE_TESTING_GUIDE.md).

---

<div align="center">

*Companion guides → [LEARNING_GUIDE.md](LEARNING_GUIDE.md) · [INTERVIEW_GUIDE.md](INTERVIEW_GUIDE.md)*

</div>
