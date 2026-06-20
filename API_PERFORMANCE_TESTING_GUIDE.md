<div align="center">

# API & Performance Testing — Interview Guide
### REST API Testing · JMeter · Load & Performance Testing · Top MNC Questions

*Companion to [QA_MANUAL_PERF_API_GUIDE.md](QA_MANUAL_PERF_API_GUIDE.md) · [SENIOR_LEAD_INTERVIEW_GUIDE.md](SENIOR_LEAD_INTERVIEW_GUIDE.md) · [STUDY_ROADMAP.md](STUDY_ROADMAP.md)*

**A focused deep-dive** (~70 Q&A) on API testing and performance/load testing — the questions
**TCS, Infosys, Wipro, Cognizant, Accenture, Amazon, and product companies** ask SDET/Performance
engineers.

</div>

---

> **How to use this guide**
>
> - Sections **1–3** = API testing (REST, tools, automation, security).
> - Sections **4–6** = Performance & Load testing (concepts, JMeter deep-dive, analysis).
> - Section **7** = scenario/strategy questions that seniors get.
> - Section **8** = quick-revision cheat tables.
> - ⭐ = most-asked at top MNCs.

---

## Table of Contents

<table>
<tr><td valign="top" width="50%">

**Part 1 — API Testing**
- [1. API & REST Fundamentals](#1--api--rest-fundamentals)
- [2. API Test Design & Tools](#2--api-test-design--tools)
- [3. API Security & Advanced](#3--api-security--advanced)

**Part 2 — Performance & Load**
- [4. Performance Testing Concepts](#4--performance-testing-concepts)
- [5. JMeter Deep Dive](#5--jmeter-deep-dive)
- [6. Results Analysis & Bottlenecks](#6--results-analysis--bottlenecks)

</td><td valign="top" width="50%">

**Part 3 — Senior & Reference**
- [7. Scenario & Strategy (senior)](#7--scenario--strategy-senior)
- [8. Quick Revision Tables](#8--quick-revision-tables)

**Related**
- [QA_MANUAL_PERF_API_GUIDE.md](QA_MANUAL_PERF_API_GUIDE.md) — Postman/manual basics
- [STUDY_ROADMAP.md](STUDY_ROADMAP.md) — what to study first

</td></tr>
</table>

---

# Part 1 — API Testing

## 1 — API & REST Fundamentals

<details open>
<summary><b>⭐ Q1 — What is API testing and why is it important?</b></summary>

API testing validates the **business logic, data, and reliability** of the application layer
directly — without a UI. It's important because it's **faster, more stable, and earlier** than UI
testing (shift-left), catches integration issues between services, and can validate logic the UI
can't reach. In the test pyramid, the API layer is where most functional checks should live.
</details>

<details>
<summary><b>⭐ Q2 — What is REST and what are its core principles?</b></summary>

**REST** (Representational State Transfer) is an architectural style for web services. Core
principles: **stateless** (each request carries all needed info), **client-server** separation,
**uniform interface** (resources via URIs), **cacheable** responses, **layered system**, and
resources manipulated via standard **HTTP methods**.
</details>

<details>
<summary><b>⭐ Q3 — Explain the main HTTP methods and their idempotency.</b></summary>

| Method | Purpose | Idempotent? | Safe? |
|--------|---------|:----------:|:-----:|
| GET | Read a resource | ✅ Yes | ✅ Yes |
| POST | Create a resource | ❌ No | ❌ No |
| PUT | Replace/update fully | ✅ Yes | ❌ No |
| PATCH | Partial update | ❌ (usually) | ❌ No |
| DELETE | Remove a resource | ✅ Yes | ❌ No |

**Idempotent** = same call repeated gives the same result. **Safe** = doesn't modify state.
</details>

<details>
<summary><b>⭐ Q4 — Explain HTTP status code categories with examples.</b></summary>

- **1xx** Informational (100 Continue)
- **2xx** Success — 200 OK, 201 Created, 204 No Content
- **3xx** Redirection — 301 Moved, 304 Not Modified
- **4xx** Client error — 400 Bad Request, 401 Unauthorized, 403 Forbidden, 404 Not Found,
  429 Too Many Requests
- **5xx** Server error — 500 Internal Server Error, 502 Bad Gateway, 503 Service Unavailable

Know the difference: **401** = not authenticated; **403** = authenticated but not allowed.
</details>

<details>
<summary><b>Q5 — PUT vs POST vs PATCH — when to use each?</b></summary>

**POST** creates a new resource (not idempotent — calling twice makes two records). **PUT** replaces
a resource entirely at a known URI (idempotent). **PATCH** applies a partial update (only the
changed fields).
</details>

<details>
<summary><b>Q6 — REST vs SOAP?</b></summary>

| | REST | SOAP |
|--|------|------|
| Style | Architectural style | Strict protocol |
| Format | JSON, XML, etc. | XML only |
| Transport | HTTP | HTTP, SMTP, etc. |
| Performance | Lightweight, fast | Heavier |
| Standards | Flexible | Built-in (WS-Security, ACID) |

REST for web/mobile APIs; SOAP where strict contracts/security/transactions are mandatory (banking,
telecom legacy).
</details>

<details>
<summary><b>Q7 — What are the parts of an HTTP request and response?</b></summary>

**Request:** method, URL (path + query params), headers (auth, content-type), and body (for
POST/PUT). **Response:** status code, headers, and body (payload). Path params identify a resource
(`/users/5`); query params filter/sort (`?status=active&sort=name`).
</details>

<details>
<summary><b>Q8 — What is REST vs GraphQL?</b></summary>

REST exposes **multiple endpoints** returning fixed structures; can over-/under-fetch. GraphQL
exposes **one endpoint** where the client requests exactly the fields it needs in a single query —
reduces round trips and over-fetching, but adds query-complexity and caching challenges.
</details>

## 2 — API Test Design & Tools

<details open>
<summary><b>⭐ Q9 — What do you validate in an API response?</b></summary>

- **Status code** — correct for the scenario.
- **Response body** — correct values, data types, structure (**schema validation**).
- **Headers** — content-type, caching, auth, rate-limit headers.
- **Response time** — within SLA.
- **Error handling** — proper codes/messages for invalid input.
- **Data integrity** — DB state matches the response (end-to-end).
</details>

<details>
<summary><b>⭐ Q10 — What types of tests do you run against an API?</b></summary>

Functional (correct behavior), validation (schema/contract), negative (bad input, missing fields),
boundary, **authentication/authorization**, error handling, **performance/load**, security, and
**integration** (chained calls across services).
</details>

<details>
<summary><b>Q11 — How do you do schema validation and why?</b></summary>

Validate the response against a defined **JSON Schema** (types, required fields, formats). It
catches contract drift — when the backend changes a field type or removes a field — before it
breaks consumers. Tools: JSON Schema validators, Postman `tv4`/ajv, REST Assured `matchesJsonSchema`.
</details>

<details>
<summary><b>⭐ Q12 — How do you handle API test data and chained/dependent requests?</b></summary>

Create prerequisite data via **setup API calls** (not UI) in a fixture/`@BeforeEach`. For chaining,
capture a value from one response (e.g., an `id` or token) and pass it into the next request
(**correlation**). Clean up created data in teardown so tests stay independent and parallel-safe.
</details>

<details>
<summary><b>Q13 — Which tools have you used for API testing?</b></summary>

**Postman / Newman** (manual + CI), **REST Assured** (Java), **Playwright API / Supertest** (JS/TS),
**Karate** (BDD), and **SoapUI** (SOAP). In this framework, API tests use Playwright's request
context — see [BaseApiClient.ts](src/api/clients/BaseApiClient.ts) and
[users.api.spec.ts](tests/api/users.api.spec.ts).
</details>

<details>
<summary><b>Q14 — How do you automate API tests in CI?</b></summary>

Collections/specs run headless on every PR (Newman for Postman, or the test runner for code-based
suites), assert status/schema/values, publish a report artifact, and **gate the merge** on results.
Secrets come from CI environment variables, not the repo.
</details>

<details>
<summary><b>Q15 — How do you parameterize and run the same API test with many data sets?</b></summary>

Data-driven: externalize inputs (CSV/JSON), loop over them in the runner (Newman `--iteration-data`,
or a parametrized test). Keeps one script, many cases — and makes coverage easy to extend.
</details>

## 3 — API Security & Advanced

<details open>
<summary><b>⭐ Q16 — Explain common API authentication mechanisms.</b></summary>

- **Basic Auth** — base64 username:password (only over HTTPS).
- **API Key** — a token in header/query identifying the caller.
- **Bearer / JWT** — signed token sent in `Authorization: Bearer <token>`; stateless, carries
  claims + expiry.
- **OAuth 2.0** — delegated authorization; client gets an access token via a grant flow
  (authorization code, client credentials).
</details>

<details>
<summary><b>⭐ Q17 — What is a JWT and what are its parts?</b></summary>

A **JSON Web Token** has three base64 parts: **Header** (algorithm/type), **Payload** (claims like
user id, roles, `exp` expiry), and **Signature** (verifies integrity). It's **stateless** — the
server validates the signature instead of storing sessions. Test token validity, expiry, tampering,
and role-based access.
</details>

<details>
<summary><b>Q18 — How do you test API authorization (not just authentication)?</b></summary>

Verify **role-based access**: a normal user must NOT access admin endpoints or another user's data
(IDOR / broken object-level authorization). Test by calling protected endpoints with no token,
expired token, wrong-role token, and another user's id — expecting **401/403** appropriately.
</details>

<details>
<summary><b>Q19 — What API security risks do you check (OWASP API Top 10)?</b></summary>

Broken object-level authorization (IDOR), broken authentication, excessive data exposure (returning
more than needed), lack of rate limiting, injection (SQL/NoSQL), and security misconfiguration.
Functionally test access control, input validation, HTTPS, token handling, and that responses don't
leak sensitive fields.
</details>

<details>
<summary><b>Q20 — What is rate limiting and how do you test it?</b></summary>

Rate limiting caps requests per client per time window to prevent abuse. Test by exceeding the limit
and asserting **429 Too Many Requests** plus `Retry-After`/rate-limit headers, then confirming
access resumes after the window.
</details>

<details>
<summary><b>Q21 — What is API mocking / virtualization and when do you use it?</b></summary>

Simulating an API (WireMock, Postman mock, Playwright route mock) so you can test against it before
it's built, isolate from unstable dependencies, or force edge cases (timeouts, 500s) that are hard
to trigger live. Enables parallel dev/test and deterministic negative testing.
</details>

<details>
<summary><b>Q22 — What is contract testing (Pact) and why does it matter for microservices?</b></summary>

Contract testing verifies that a **consumer and provider agree on the API contract** (fields,
types, status). The consumer defines expectations; the provider is verified against them in CI. It
catches breaking changes **before** deployment without running full end-to-end tests across all
services.
</details>

---

# Part 2 — Performance & Load Testing

## 4 — Performance Testing Concepts

<details open>
<summary><b>⭐ Q23 — What is performance testing and why is it done?</b></summary>

Performance testing measures how a system behaves under load — **speed, scalability, stability,
and resource usage**. It's done to verify the app meets SLAs (response time, throughput),
find bottlenecks, validate capacity before launch, and prevent production outages under real
traffic.
</details>

<details>
<summary><b>⭐ Q24 — Explain the types of performance testing.</b></summary>

| Type | What it checks |
|------|----------------|
| **Load** | Behavior under *expected* peak load |
| **Stress** | Behavior *beyond* limits — find the breaking point |
| **Spike** | Sudden sharp increase in load |
| **Endurance / Soak** | Sustained load over hours — find memory leaks |
| **Scalability** | How performance scales as load/resources grow |
| **Volume** | Behavior with large *volumes of data* |

Know the difference between **load** (expected) and **stress** (breaking point) — most asked.
</details>

<details>
<summary><b>⭐ Q25 — Key performance metrics you measure?</b></summary>

- **Response time** — avg, **90th/95th/99th percentile** (percentiles matter more than average).
- **Throughput** — requests/transactions per second.
- **Latency** — time before first byte.
- **Error rate** — % failed requests.
- **Concurrent users** — active virtual users.
- **Resource utilization** — CPU, memory, disk, network on the server.
</details>

<details>
<summary><b>Q26 — Why is the 90th/95th percentile more important than the average response time?</b></summary>

The **average hides outliers**. A 1s average can still mean 10% of users wait 8s. The **95th
percentile** says "95% of users got a response within X" — it reflects real worst-case user
experience and is what SLAs are usually written against.
</details>

<details>
<summary><b>Q27 — What is throughput vs response time vs latency?</b></summary>

**Response time** = total time for a request to complete. **Latency** = time before the first byte
arrives (network/queue delay). **Throughput** = how many requests the system handles per unit time.
As load rises, throughput climbs then plateaus; response time rises sharply past the saturation
point.
</details>

<details>
<summary><b>Q28 — What are think time, pacing, and ramp-up?</b></summary>

- **Think time** — pause simulating a real user reading/typing between actions.
- **Pacing** — controlled delay between iterations to hit a target rate.
- **Ramp-up** — gradually adding virtual users (not all at once) to simulate realistic growth and
  avoid an artificial spike.
</details>

<details>
<summary><b>Q29 — How do you decide the load profile / number of virtual users?</b></summary>

From **production data / requirements**: peak concurrent users, transactions per second, busiest
hour, and growth projections. Model the workload mix (e.g., 70% browse, 20% search, 10% checkout),
set ramp-up and duration, and base targets on real SLAs, not guesses.
</details>

<details>
<summary><b>Q30 — What is a bottleneck and how do you identify one?</b></summary>

A bottleneck is the resource that limits overall performance (DB, CPU, memory, network, thread
pool, slow query). Identify it by correlating the response-time/throughput curve with
**server-side monitoring** — find the resource that saturates first as load increases (e.g., CPU at
100% while throughput flattens).
</details>

## 5 — JMeter Deep Dive

<details open>
<summary><b>⭐ Q31 — What is JMeter and how does it work?</b></summary>

Apache JMeter is an open-source **load testing** tool. It simulates many concurrent users
(threads) sending requests to a server, measures responses, and reports metrics. It's protocol-
level (HTTP, JDBC, JMS, FTP, etc.) — it does **not** render a browser, so it's lightweight enough
to generate heavy load.
</details>

<details>
<summary><b>⭐ Q32 — Explain the main JMeter components / test plan elements.</b></summary>

- **Test Plan** — root container.
- **Thread Group** — defines virtual users (threads), ramp-up, loop count.
- **Samplers** — the actual requests (HTTP Request, JDBC Request).
- **Logic Controllers** — control flow (Loop, If, Transaction).
- **Config Elements** — defaults, CSV Data Set, HTTP Header Manager, Cookie Manager.
- **Timers** — think time / pacing between requests.
- **Assertions** — validate responses (Response Assertion, Duration, JSON).
- **Listeners** — collect/display results (Summary Report, Aggregate, View Results Tree).
- **Pre/Post-Processors** — e.g., **Regex/JSON Extractor** for correlation.
</details>

<details>
<summary><b>⭐ Q33 — What is a Thread Group and its key settings?</b></summary>

A Thread Group defines the simulated users: **Number of Threads** (virtual users), **Ramp-up
Period** (time to start all threads), and **Loop Count** (iterations). E.g., 100 threads, 60s
ramp-up = one new user per 0.6s until 100 are active.
</details>

<details>
<summary><b>⭐ Q34 — What is correlation in JMeter and how do you do it?</b></summary>

**Correlation** = capturing a dynamic value from one response (session id, CSRF token, auth token)
and reusing it in subsequent requests. Without it, the script fails because servers reject stale/
hard-coded values. Implement with a **Regular Expression Extractor** or **JSON/Boundary Extractor**
(post-processor) that stores the value in a variable, then reference it as `${variable}`.
</details>

<details>
<summary><b>⭐ Q35 — What is parameterization in JMeter? (correlation vs parameterization)</b></summary>

**Parameterization** = feeding *input data* (different usernames/passwords) from an external source,
typically a **CSV Data Set Config**, so each virtual user uses unique data. **Correlation** handles
*dynamic server values*; **parameterization** handles *test input data*. Both are essential for
realistic load.
</details>

<details>
<summary><b>Q36 — Types of processors and timers in JMeter?</b></summary>

- **Pre-Processor** — runs before a sampler (e.g., User Parameters).
- **Post-Processor** — runs after (e.g., Regex/JSON Extractor for correlation).
- **Timers** — Constant Timer (fixed think time), Gaussian/Uniform Random Timer (variable),
  Constant Throughput Timer (control TPS), Synchronizing Timer (release users together for a spike).
</details>

<details>
<summary><b>⭐ Q37 — Difference between Summary Report, Aggregate Report, and View Results Tree?</b></summary>

- **View Results Tree** — per-request request/response detail; **debug only**, never in a load run
  (huge memory cost).
- **Aggregate Report** — per-label stats: avg, median, 90/95/99 %ile, throughput, error %.
- **Summary Report** — similar aggregate stats, slightly lighter.

For real runs, use the **non-GUI mode + .jtl file**, not live listeners.
</details>

<details>
<summary><b>⭐ Q38 — Why run JMeter in non-GUI (command line) mode for actual load tests?</b></summary>

The GUI consumes significant memory/CPU and **distorts results** under high load. Real tests run
headless: `jmeter -n -t test.jmx -l results.jtl -e -o report/`. The GUI is only for building and
debugging the script.
</details>

<details>
<summary><b>Q39 — How do you simulate a very high load that one machine can't generate?</b></summary>

**Distributed (remote) testing**: a master JMeter instance controls multiple **slave/load-generator
machines**, aggregating their results. Alternatively use cloud load generators
(BlazeMeter, JMeter on multiple cloud VMs). Always monitor the *generator* machines too, so they
aren't the bottleneck.
</details>

<details>
<summary><b>Q40 — How do you handle authentication/tokens in a JMeter script?</b></summary>

Send a login request first, **extract the token** (JSON/Regex Extractor), store it in a variable,
and add it to subsequent requests via the **HTTP Header Manager** as `Authorization: Bearer
${token}`. Use the **Cookie Manager** for session cookies automatically.
</details>

<details>
<summary><b>Q41 — What are assertions in JMeter and which do you use?</b></summary>

Assertions validate responses under load: **Response Assertion** (text/code), **JSON Assertion**
(field values), **Duration Assertion** (response within X ms), **Size Assertion**. They turn a
"server responded" into "server responded *correctly*" — important because a fast 500 isn't a pass.
</details>

<details>
<summary><b>Q42 — What is the CSV Data Set Config used for?</b></summary>

It reads test input data from a CSV file, assigning a new row to each thread/iteration — the
standard way to **parameterize** unique users/data so you don't hammer the server with one identical
request.
</details>

## 6 — Results Analysis & Bottlenecks

<details open>
<summary><b>⭐ Q43 — How do you analyze JMeter results and decide pass/fail?</b></summary>

Compare against **SLAs/NFRs**: check 90/95th %ile response times, throughput (TPS), and **error
rate** (typically must be < 1%). Look at the **response-time vs load curve** — a sharp rise
indicates saturation. Correlate with server CPU/memory/DB metrics to locate the bottleneck. Pass =
meets response/throughput/error targets at the required concurrency.
</details>

<details>
<summary><b>Q44 — Response times suddenly spike at 500 users but CPU is low. What do you investigate?</b></summary>

Low CPU + high response time points to **waiting, not computing**: thread/connection pool
exhaustion, DB connection pool limits, slow queries / locking, external API latency, or
synchronous blocking. Check DB wait times, pool sizes, GC pauses, and downstream service latency —
not just CPU.
</details>

<details>
<summary><b>Q45 — What is a memory leak and how does endurance/soak testing reveal it?</b></summary>

A memory leak is memory that's allocated but never released, growing over time. A **soak test**
(sustained load for hours) reveals it as **steadily rising memory** and degrading response times
until the app crashes or GC thrashes. A short load test would miss it.
</details>

<details>
<summary><b>Q46 — How do you correlate front-end results with server-side monitoring?</b></summary>

Run JMeter for client-side metrics (response time, throughput, errors) while monitoring the server
with **APM/tools** (Grafana, New Relic, Dynatrace, JConsole) for CPU, memory, GC, DB, and thread
pools. Overlaying both timelines pinpoints *which* resource saturates when response time degrades.
</details>

<details>
<summary><b>Q47 — What's the difference between concurrency and throughput?</b></summary>

**Concurrency** = number of simultaneous active users/requests. **Throughput** = completed
requests per second. They're related by Little's Law: more concurrency raises throughput only until
a bottleneck caps it — after that, adding users just increases response time, not throughput.
</details>

<details>
<summary><b>Q48 — Besides JMeter, which performance tools do you know?</b></summary>

**LoadRunner** (enterprise), **Gatling** (Scala, code-based, great reports), **k6** (JS, developer/
CI-friendly), **Locust** (Python), **BlazeMeter** (cloud, JMeter-compatible). Mention when you'd
pick each: k6/Gatling for CI-as-code, JMeter for protocol breadth and GUI scripting.
</details>

---

# Part 3 — Senior & Reference

## 7 — Scenario & Strategy (senior)

<details open>
<summary><b>⭐ Q49 — How would you design a performance test for an e-commerce checkout?</b></summary>

1. **Define NFRs** — target concurrent users, TPS, acceptable 95th %ile response, error rate.
2. **Model the workload** — realistic mix (browse 60%, search 25%, add-to-cart 10%, checkout 5%).
3. **Script** key transactions with correlation (session, cart id, payment token) and
   parameterized users (CSV).
4. **Run** load → stress → spike → soak, with ramp-up and think time.
5. **Monitor** client + server metrics.
6. **Analyze** against SLAs, find bottlenecks, report with graphs and recommendations.
</details>

<details>
<summary><b>Q50 — When do you start performance testing in the SDLC?</b></summary>

**Early and continuously (shift-left)**: define NFRs in requirements, test critical APIs in
isolation during development, and run full load tests before release. Baseline early so regressions
are caught per build, not days before go-live. Integrate lightweight perf checks (k6/JMeter) into
CI.
</details>

<details>
<summary><b>Q51 — How do you set up a realistic performance test environment?</b></summary>

Use an environment **as close to production as possible** (same sizing, config, data volume).
Testing on under-sized hardware gives misleading numbers. Seed **production-like data volumes**,
isolate the environment to avoid noise, and document differences from prod when an exact match
isn't possible.
</details>

<details>
<summary><b>Q52 — A test passes in staging but the site is slow in production. Why?</b></summary>

Common causes: **different data volumes** (prod DB is far larger), real **third-party/network
latency**, different infra sizing, **caching/CDN** differences, concurrent background jobs, or
unrealistic staging workload models. Reproduce by matching data volume and workload mix to prod.
</details>

<details>
<summary><b>Q53 — How do you performance-test an API vs a full web page?</b></summary>

**API perf** focuses on backend throughput/latency at the protocol level (JMeter/k6/Gatling) — pure
server capacity. **Page/front-end perf** also includes browser rendering, asset loading, and
client-side timing (Lighthouse, browser timing APIs). JMeter measures server response, **not**
browser render time.
</details>

<details>
<summary><b>Q54 — How do you report performance results to stakeholders?</b></summary>

Lead with a **verdict against SLAs** (pass/fail per scenario), show response-time and throughput
**graphs vs load**, the **error rate**, identified **bottlenecks**, and concrete **recommendations**
(tune pool size, add caching, scale out). Translate numbers into business risk: "at 2× expected
load, checkout exceeds the 3s SLA — recommend scaling before the sale."
</details>

## 8 — Quick Revision Tables

**HTTP status quick reference**

| Code | Meaning | Code | Meaning |
|------|---------|------|---------|
| 200 | OK | 401 | Unauthorized |
| 201 | Created | 403 | Forbidden |
| 204 | No Content | 404 | Not Found |
| 301 | Moved Permanently | 429 | Too Many Requests |
| 304 | Not Modified | 500 | Server Error |
| 400 | Bad Request | 503 | Service Unavailable |

**Performance test types**

| Type | Goal |
|------|------|
| Load | Expected peak behavior |
| Stress | Find the breaking point |
| Spike | Sudden load surge |
| Soak/Endurance | Memory leaks over time |
| Scalability | Behavior as load/resources grow |
| Volume | Large data volumes |

**JMeter element → purpose**

| Element | Purpose |
|---------|---------|
| Thread Group | Virtual users, ramp-up, loops |
| HTTP Sampler | The request |
| CSV Data Set | Parameterize input data |
| Regex/JSON Extractor | **Correlation** (dynamic values) |
| HTTP Header Manager | Auth/content-type headers |
| Timer | Think time / pacing |
| Assertion | Validate response |
| Aggregate Report | %ile, throughput, error % |

**Correlation vs Parameterization**

| | Correlation | Parameterization |
|--|-------------|------------------|
| Handles | Dynamic *server* values (token, session) | Static *input* data (users) |
| Tool | Regex/JSON Extractor | CSV Data Set Config |
| Direction | Captured *from response* | Supplied *into request* |

**Key metrics**

| Metric | What it tells you |
|--------|-------------------|
| 95th %ile response | Real worst-case user experience |
| Throughput (TPS) | Capacity handled per second |
| Error rate | % failed requests (target < 1%) |
| Concurrency | Simultaneous active users |
| CPU/Memory | Server resource saturation |

---

<div align="center">

*Master the difference between **load vs stress**, **correlation vs parameterization**, and
**average vs 95th percentile** — those three comparisons appear in almost every MNC interview.*

---

# Section 9 — Extra Question Bank (rapid, high-yield)

## 9.1 More API Testing

1. **What is the difference between path and query parameters?** → Path identifies a resource
   (`/users/5`); query filters/sorts (`?sort=name`).
2. **What is an idempotent request?** → Repeating it yields the same result (GET, PUT, DELETE).
3. **What is HATEOAS?** → REST responses include links to related actions/resources.
4. **What is content negotiation?** → Client/server agree on format via `Accept`/`Content-Type`
   headers.
5. **What is CORS?** → Browser security controlling cross-origin requests via response headers.
6. **What is the difference between authentication and authorization?** → Who you are vs what you're
   allowed to do.
7. **How do you test pagination?** → Validate page size, navigation links, total counts, and
   boundaries (first/last/empty page).
8. **How do you test sorting and filtering?** → Verify the returned order/subset matches the
   params, including invalid params.
9. **How do you validate response time in API tests?** → Assert it's within the SLA threshold.
10. **What is a 204 vs 200?** → 204 = success with no body; 200 = success with a body.
11. **What is a 502 vs 503 vs 504?** → Bad Gateway / Service Unavailable / Gateway Timeout.
12. **How do you handle dynamic/auth tokens in automated API tests?** → Fetch in setup, store, inject
    into headers; refresh on expiry.
13. **What is request chaining?** → Using output of one request as input to the next (correlation).
14. **How do you test file upload via API?** → multipart/form-data request with the file payload;
    assert the stored result.
15. **What is throttling/rate limiting at the API level?** → Capping requests; expect 429 + retry
    headers when exceeded.
16. **How do you ensure API tests are independent?** → Isolated data, setup/teardown per test, no
    shared mutable state.
17. **What is the difference between stubbing and mocking?** → Stub returns canned data; mock also
    verifies interactions/expectations.
18. **How do you test error handling?** → Send invalid/missing/oversized payloads, assert correct
    codes + clear messages.

## 9.2 More Performance / JMeter

19. **What is baseline vs benchmark testing?** → Baseline = reference run for comparison; benchmark =
    compare against a standard/competitor.
20. **What is capacity testing?** → Finding the max load the system can handle within SLA.
21. **What is the difference between vertical and horizontal scaling?** → Bigger machine vs more
    machines.
22. **What is a synchronizing timer in JMeter?** → Holds threads then releases them together to
    create a spike.
23. **What is a constant throughput timer?** → Controls requests/minute to hit a target TPS.
24. **What is a transaction controller?** → Groups samplers to measure them as one business
    transaction.
25. **What is the difference between a sampler and a controller?** → Sampler sends a request;
    controller manages flow/logic.
26. **What is distributed testing in JMeter?** → A master controls multiple slave load generators.
27. **How do you parameterize logins for 1000 users?** → CSV Data Set Config with unique credentials
    per thread.
28. **What is a BeanShell/JSR223 sampler?** → Scripting element for custom logic (JSR223 + Groovy is
    preferred for performance).
29. **What does a sudden drop in throughput under increasing load indicate?** → A saturated
    bottleneck (DB, pool, CPU) — the system is past its limit.
30. **What is error % and the acceptable threshold?** → Failed requests ÷ total; typically must stay
    under ~1%.
31. **What server metrics do you monitor during a run?** → CPU, memory, GC, disk I/O, network, DB
    connections, thread pools.
32. **What is correlation failure and how do you spot it?** → Hard-coded dynamic values cause
    auth/session errors (4xx/5xx) under load.
33. **What is the difference between response time and TTFB?** → TTFB = time to first byte;
    response time = full response received.
34. **How do you decide test duration for a soak test?** → Long enough to reveal leaks/degradation —
    typically several hours to overnight.
35. **What tools complement JMeter for monitoring?** → Grafana + InfluxDB (live dashboards), APM
    (New Relic/Dynatrace), server agents.

---

<div align="center">

[⬆ Back to top](#api--performance-testing--interview-guide)

</div>
