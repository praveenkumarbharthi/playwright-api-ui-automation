<div align="center">

# Interview Preparation Guide
### Playwright · TypeScript · API + UI Automation

*Companion to [LEARNING_GUIDE.md](LEARNING_GUIDE.md) · [SENIOR_LEAD_INTERVIEW_GUIDE.md](SENIOR_LEAD_INTERVIEW_GUIDE.md) · [COMPANY_WISE_INTERVIEW_GUIDE.md](COMPANY_WISE_INTERVIEW_GUIDE.md) · [QA_MANUAL_PERF_API_GUIDE.md](QA_MANUAL_PERF_API_GUIDE.md)*

</div>

---

> **How this guide is organized**
>
> - [Section 13 — Core Q&A](#section-13--core-qa) → fundamentals for any automation interview.
> - [Section 14 — Senior Q&A (5–10 yrs)](#section-14--senior-qa-510-years) → coding, design,
>   and leadership questions sourced from Glassdoor SDET reports, **with full answers**.

---

## Table of Contents

- [Section 13 — Core Q&A](#section-13--core-qa)
  - [13.1 TypeScript](#131-typescript)
  - [13.2 Playwright](#132-playwright)
  - [13.3 Framework & Design](#133-framework--design)
  - [13.4 Rapid-Fire](#134-rapid-fire)
- [Section 14 — Senior Q&A (5–10 years)](#section-14--senior-qa-510-years)
  - [14.1 Coding & DSA (with solutions)](#141-coding--dsa-with-solutions)
  - [14.2 Advanced TypeScript / JavaScript](#142-advanced-typescript--javascript)
  - [14.3 Advanced Playwright](#143-advanced-playwright)
  - [14.4 Framework Design & Architecture](#144-framework-design--architecture)
  - [14.5 API Testing & Backend](#145-api-testing--backend)
  - [14.6 Behavioral & Leadership](#146-behavioral--leadership)
  - [How to Prepare](#how-to-prepare-510-yr-strategy)
- [Section 15 — QA & Testing Fundamentals](#section-15--qa--testing-fundamentals)
  - [15.1 Process & Concepts](#151-process--concepts)
  - [15.2 Test Design Techniques](#152-test-design-techniques)
  - [15.3 Scenario-Based](#153-scenario-based-asked-of-seniors)
- [Section 16 — Final Revision Checklist](#section-16--final-revision-checklist)

---
---

# Section 13 — Core Q&A

> Concise, complete answers for the fundamentals every automation interview covers.

## 13.1 TypeScript

<details open>
<summary><b>Q1 — What is TypeScript and why use it over JavaScript?</b></summary>

A superset of JavaScript that adds **static typing**. It catches type errors at compile time,
improves IDE autocomplete, and makes large codebases maintainable. The runtime executes the
compiled JavaScript, not TypeScript directly.

</details>

<details>
<summary><b>Q2 — interface vs type?</b></summary>

`interface` describes object shapes and supports extension + declaration merging. `type` is more
flexible (unions, intersections, primitives, tuples). Prefer `interface` for public object contracts.

</details>

<details>
<summary><b>Q3 — any vs unknown vs never?</b></summary>

`any` disables type checking (avoid). `unknown` is a type-safe `any` — you must narrow before use.
`never` is a value that never occurs (e.g. a function that always throws).

</details>

<details>
<summary><b>Q4 — What are generics?</b></summary>

Reusable code that works with multiple types while keeping type safety.
```typescript
function identity<T>(value: T): T { return value; }
```
Used here in `post<T>(endpoint, body: T)`.

</details>

<details>
<summary><b>Q5 — Partial&lt;T&gt; vs Required&lt;T&gt;?</b></summary>

`Partial<T>` makes all properties optional (used in PATCH). `Required<T>` makes all mandatory.

</details>

<details>
<summary><b>Q6 — ?. and ?? operators?</b></summary>

```typescript
user?.address?.city       // returns undefined instead of throwing
process.env.PORT ?? 3000  // uses 3000 only if PORT is null/undefined
```

</details>

<details>
<summary><b>Q7 — let vs const vs var?</b></summary>

`var` is function-scoped & hoisted (avoid). `let` is block-scoped & reassignable. `const` is
block-scoped & non-reassignable.

</details>

<details>
<summary><b>Q8 — What does readonly do?</b></summary>

Makes a property immutable after initialization. Used in `BasePage` (`readonly page`) and
`BaseApiClient` (`readonly request`).

</details>

<details>
<summary><b>Q9 — public / private / protected?</b></summary>

`public` = everywhere (default). `private` = same class only (locators in `LoginPage`).
`protected` = class + subclasses (`request` in `BaseApiClient`).

</details>

<details>
<summary><b>Q10 — == vs ===?</b></summary>

`==` coerces types; `===` compares value **and** type. Always prefer `===`.

</details>

---

## 13.2 Playwright

<details open>
<summary><b>Q11 — Playwright vs Selenium?</b></summary>

Playwright adds **auto-waiting**, one API for Chromium/Firefox/WebKit, built-in API testing,
tracing, screenshots, and video. It's faster and more reliable thanks to its single-WebSocket
architecture.

</details>

<details>
<summary><b>Q12 — What is auto-waiting?</b></summary>

Before each action Playwright waits for the element to be visible, enabled, stable, and able to
receive events — eliminating most flaky tests.

</details>

<details>
<summary><b>Q13 — Locator vs ElementHandle?</b></summary>

A **Locator** is lazy and re-queries the element each time, so it never goes stale. An
ElementHandle points to a specific DOM node that can become stale. Prefer locators.

</details>

<details>
<summary><b>Q14 — Recommended ways to locate elements?</b></summary>

```typescript
page.getByRole('button', { name: 'Submit' })   // best — accessibility
page.getByLabel('Email')
page.getByText('Welcome')
page.getByTestId('submit-btn')
page.locator('#id')                             // CSS when needed
```

</details>

<details>
<summary><b>Q15 — What are fixtures?</b></summary>

Setup/teardown + dependency injection. They create objects on demand and clean them up. This
framework injects `loginPage`, `dashboardPage`, `userApi` via `src/fixtures/index.ts`.

</details>

<details>
<summary><b>Q16 — How does parallel execution work?</b></summary>

Tests run in parallel **workers** (separate processes), each with an isolated browser context.
`fullyParallel: true` parallelizes within a file too. Configured in `playwright.config.ts`.

</details>

<details>
<summary><b>Q17 — beforeEach vs beforeAll?</b></summary>

`beforeEach` runs before **every** test; `beforeAll` runs **once** before all tests in the file.

</details>

<details>
<summary><b>Q18 — What is a browser context?</b></summary>

An isolated browser session (like incognito) with its own cookies/storage. Each test gets a fresh
context for isolation.

</details>

<details>
<summary><b>Q19 — Efficient authentication?</b></summary>

Log in once, save `storageState` to a file, reuse across tests.
```typescript
await context.storageState({ path: 'auth.json' });
use: { storageState: 'auth.json' }
```

</details>

<details>
<summary><b>Q20 — What is trace viewer?</b></summary>

A debugging timeline (DOM snapshots, network, console, actions). Configured here with
`trace: 'on-first-retry'`. Open with `npx playwright show-trace trace.zip`.

</details>

<details>
<summary><b>Q21 — How do you do API testing in Playwright?</b></summary>

Use the `request` fixture (`APIRequestContext`) without a browser:
```typescript
const res = await request.get('/users');
expect(res.status()).toBe(200);
```
Wrapped here in `BaseApiClient` / `UserApi`.

</details>

<details>
<summary><b>Q22 — Handling waits (and avoiding hard sleeps)?</b></summary>

Prefer auto-waiting + web-first assertions. Use explicit waits only when needed
(`waitForLoadState`, `waitForURL`). Avoid `waitForTimeout` — it's flaky.

</details>

<details>
<summary><b>Q23 — toBe vs toEqual vs toHaveText?</b></summary>

`toBe` = strict primitive equality (`===`). `toEqual` = deep object/array equality. `toHaveText` =
web-first assertion that auto-retries.

</details>

<details>
<summary><b>Q24 — What are web-first assertions?</b></summary>

Assertions like `await expect(locator).toBeVisible()` that **retry** until the condition is met or
timeout — reducing flakiness.

</details>

<details>
<summary><b>Q25 — Run tests in different browsers/environments?</b></summary>

Via **projects** + env vars: `npx playwright test --project=Firefox`, `ENV=staging npx playwright test`.

</details>

---

## 13.3 Framework & Design

<details open>
<summary><b>Q26 — What is the Page Object Model?</b></summary>

A pattern where each page is a class encapsulating its locators and actions — reusable, readable,
and a single place to update when the UI changes.

</details>

<details>
<summary><b>Q27 — Why have BasePage and BaseApiClient?</b></summary>

**DRY** — common logic (navigation, waits, HTTP verbs, headers) lives once; specific pages/APIs
inherit it.

</details>

<details>
<summary><b>Q28 — How is your framework structured?</b></summary>

Layered: `config` (envs), `src/ui/pages` (POM), `src/api` (clients + endpoints), `src/fixtures`
(DI), `src/utils` (helpers/logger), `tests` (api + ui).

</details>

<details>
<summary><b>Q29 — How do you manage test data?</b></summary>

Static data in `test-data/users.json` + dynamic generators (`randomEmail()`) to keep tests
independent and parallel-safe.

</details>

<details>
<summary><b>Q30 — How do you handle environments?</b></summary>

`config/environments.ts` maps each env to URLs, selected via the `ENV` variable; secrets via `.env`
(`dotenv`).

</details>

<details>
<summary><b>Q31 — How do you keep tests independent?</b></summary>

Fresh browser context, unique data, no inter-test dependencies, no shared mutable state, `beforeEach`
for a clean start.

</details>

<details>
<summary><b>Q32 — How do you reduce flaky tests?</b></summary>

Auto-waiting + web-first assertions, no hard sleeps, role/test-id locators, isolation, and
retries + trace on CI for diagnosis.

</details>

<details>
<summary><b>Q33 — CI/CD integration?</b></summary>

Config adjusts on CI (`retries: 2`, more workers, `forbidOnly`); HTML report + traces as artifacts;
run `npx playwright test` in the pipeline.

</details>

<details>
<summary><b>Q34 — Which reporters?</b></summary>

`html` + `list` here; also `json`, `junit` (CI dashboards), and custom reporters.

</details>

<details>
<summary><b>Q35 — How would you scale this framework?</b></summary>

More page objects + endpoints as fixtures, JUnit reporting, visual/accessibility testing, sharding,
and an auth storage-state setup project.

</details>

---

## 13.4 Rapid-Fire

| Question | Answer |
|---|---|
| HTTP success codes? | 200 OK, 201 Created, 204 No Content |
| HTTP client errors? | 400, 401, 403, 404 |
| HTTP server errors? | 500, 502, 503 |
| Idempotent methods? | GET, PUT, DELETE, HEAD (POST is **not**) |
| PUT vs PATCH? | PUT replaces the whole resource; PATCH updates part |
| What is a flaky test? | Passes/fails inconsistently without code changes |
| Headless vs headed? | Headless = no visible browser window (faster, CI) |
| `npx playwright install`? | Downloads browser binaries |
| Soft vs hard assertion? | Soft continues on failure; hard stops the test |
| What is sharding? | Splitting tests across machines for speed |

---
---

# Section 14 — Senior Q&A (5–10 years)

> **Source & scope:** Aggregated from Glassdoor SDET / Senior Automation Test Engineer reports
> (Microsoft, Amazon, Expedia, Optum, Cotiviti, HCLTech) plus common senior patterns. At this level
> interviews test three pillars: **coding/DSA**, **framework depth**, and **design + leadership**.

## 14.1 Coding & DSA (with solutions)

> Product-company SDET rounds almost always include live coding. Each answer is TypeScript with Big-O.

<details open>
<summary><b>1–5 — Strings & arrays</b></summary>

```typescript
// 1) Reverse a string (no built-in) — O(n)
function reverse(s: string): string {
  let out = ''; for (let i = s.length - 1; i >= 0; i--) out += s[i]; return out;
}

// 2) Anagram / palindrome
const isAnagram = (a: string, b: string) =>
  a.length === b.length && [...a].sort().join('') === [...b].sort().join('');   // O(n log n)
const isPalindrome = (s: string) => {
  for (let i = 0, j = s.length - 1; i < j; i++, j--) if (s[i] !== s[j]) return false;
  return true;                                                                   // O(n)
};

// 3) First non-repeating character — O(n)
function firstNonRepeating(s: string): string | null {
  const c = new Map<string, number>();
  for (const ch of s) c.set(ch, (c.get(ch) ?? 0) + 1);
  for (const ch of s) if (c.get(ch) === 1) return ch;
  return null;
}

// 4) Remove duplicates from sorted array in place — O(n) time, O(1) space
function removeDuplicates(nums: number[]): number {
  if (!nums.length) return 0;
  let k = 0;
  for (let i = 1; i < nums.length; i++) if (nums[i] !== nums[k]) nums[++k] = nums[i];
  return k + 1;
}

// 5) All pairs summing to target — O(n)
function pairsWithSum(nums: number[], target: number): [number, number][] {
  const seen = new Set<number>(); const res: [number, number][] = [];
  for (const n of nums) { if (seen.has(target - n)) res.push([target - n, n]); seen.add(n); }
  return res;
}
```

</details>

<details>
<summary><b>6–10 — Numbers & linked lists</b></summary>

```typescript
// 6) One less than a power of two (all 1 bits, e.g. 7=111) — O(1)
const isOneLessThanPowerOfTwo = (n: number) => n > 0 && (n & (n + 1)) === 0;

// 7) Merge two sorted lists (array form) — O(n+m)
function mergeSorted(a: number[], b: number[]): number[] {
  const out: number[] = []; let i = 0, j = 0;
  while (i < a.length && j < b.length) out.push(a[i] <= b[j] ? a[i++] : b[j++]);
  return [...out, ...a.slice(i), ...b.slice(j)];
}

// 8) Reverse a linked list — O(n) time, O(1) space
function reverseList(head: Node | null): Node | null {
  let prev = null, curr = head;
  while (curr) { const next = curr.next; curr.next = prev; prev = curr; curr = next; }
  return prev;
}

// 9) Missing number in 1..N — O(n) time, O(1) space
const missingNumber = (nums: number[], n: number) =>
  (n * (n + 1)) / 2 - nums.reduce((a, b) => a + b, 0);

// 10) Detect cycle — Floyd's tortoise & hare: move 1 vs 2 steps; meet = cycle. O(n)/O(1).
```

</details>

<details>
<summary><b>11–20 — Classics</b></summary>

```typescript
// 11) FizzBuzz
const fizzBuzz = (n: number) =>
  n % 15 === 0 ? 'FizzBuzz' : n % 3 === 0 ? 'Fizz' : n % 5 === 0 ? 'Buzz' : String(n);

// 12) Top-K word frequency
function topKWords(text: string, k: number): string[] {
  const f = new Map<string, number>();
  for (const w of text.toLowerCase().split(/\W+/).filter(Boolean)) f.set(w, (f.get(w) ?? 0) + 1);
  return [...f.entries()].sort((a, b) => b[1] - a[1]).slice(0, k).map(e => e[0]);
}

// 13) Balanced parentheses — O(n)
function isBalanced(s: string): boolean {
  const pair: Record<string, string> = { ')': '(', ']': '[', '}': '{' }; const st: string[] = [];
  for (const c of s) {
    if ('([{'.includes(c)) st.push(c);
    else if (pair[c] && st.pop() !== pair[c]) return false;
  }
  return st.length === 0;
}

// 14) Binary search — O(log n)
function binarySearch(arr: number[], t: number): number {
  let lo = 0, hi = arr.length - 1;
  while (lo <= hi) { const m = (lo + hi) >> 1;
    if (arr[m] === t) return m; arr[m] < t ? (lo = m + 1) : (hi = m - 1); }
  return -1;
}

// 15) Second largest — O(n)
function secondLargest(nums: number[]): number {
  let a = -Infinity, b = -Infinity;
  for (const n of nums) { if (n > a) { b = a; a = n; } else if (n > b && n < a) b = n; }
  return b;
}

// 16) String compression: aaabb → a3b2
function compress(s: string): string {
  let out = '', c = 1;
  for (let i = 1; i <= s.length; i++) {
    if (s[i] === s[i - 1]) c++; else { out += s[i - 1] + c; c = 1; }
  }
  return out;
}

// 17) Rotate array by k: reverse whole, reverse first k, reverse rest — O(n)/O(1)

// 18) Move zeros to end (keep order) — O(n)/O(1)
function moveZeros(nums: number[]): void {
  let k = 0;
  for (let i = 0; i < nums.length; i++) if (nums[i] !== 0) nums[k++] = nums[i];
  while (k < nums.length) nums[k++] = 0;
}

// 19) Prime check — O(√n)
function isPrime(n: number): boolean {
  if (n < 2) return false;
  for (let i = 2; i * i <= n; i++) if (n % i === 0) return false;
  return true;
}
```

**20) "What's the Big-O — can you make it faster?"** Always state time **and** space. The common
optimization: a HashMap/Set turns O(n²) into O(n) at the cost of O(n) space.

</details>

> **Tip:** After any algorithm, expect **"Now write the test cases"** — list happy path, edge cases
> (empty, null, single element, duplicates, huge input), and negative cases.

---

## 14.2 Advanced TypeScript / JavaScript

<details open>
<summary><b>21–28</b></summary>

**21. Event loop.** Single-threaded. Sync code runs on the call stack; **microtasks** (Promises)
run before **macrotasks** (`setTimeout`) after each stack drain.

**22. Promise combinators.** `all` (all succeed, reject on first failure) · `allSettled` (waits for
all, never rejects) · `race` (first to settle) · `any` (first success).

**23. Closures.** A function that remembers its outer scope. Use: an ID generator or fixture factory
capturing config.

**24. Hoisting & TDZ.** `var` → hoisted as `undefined`. `let`/`const` → hoisted but uninitialized
(Temporal Dead Zone) — accessing early throws.

**25. null vs undefined vs undeclared.** `undefined` = declared, no value. `null` = intentional empty.
`undeclared` = never declared (ReferenceError).

**26. `this` & arrow functions.** `this` depends on how a function is called; arrow functions inherit
`this` lexically (don't get their own).

**27. Prototypal vs class inheritance.** Objects delegate lookups up the prototype chain; `class` is
syntactic sugar over prototypes.

**28. Decorators.** `@expression` functions that add behavior to classes/methods (DI, routing,
validation in NestJS/Angular/TypeORM).

</details>

<details>
<summary><b>29–35</b></summary>

**29. Type narrowing / guards / `is`.** Refining a union via `typeof`/`instanceof`/`in`; custom guard
returns `x is Type`.

**30. interface extends vs type &.** Both compose; `interface` supports merging; `type` intersection
works with unions/primitives/tuples.

**31. Mapped & utility types.** `Partial`, `Required`, `Pick`, `Omit`, `Record`, `Readonly`.

**32. enum vs union of string literals.** Prefer the **union** — zero runtime cost, better narrowing.

**33. unknown vs any in catch.** Modern TS types `catch (e)` as `unknown`, forcing safe narrowing;
`any` disables checks.

**34. async/await vs then/catch.** Same Promises; `async/await` + `try/catch` reads sequentially and
is clearer.

**35. Debounce vs throttle.** Debounce runs once after activity stops; throttle runs at most once per
interval. Affects how long you wait before asserting.

</details>

<details>
<summary><b>35a–35h — Core JS every tester is asked</b></summary>

**35a. map vs filter vs reduce.** `map` transforms each element (same length), `filter` keeps
elements passing a test (≤ length), `reduce` folds an array into a single value.
```typescript
[1, 2, 3].map(n => n * 2);          // [2, 4, 6]
[1, 2, 3].filter(n => n > 1);       // [2, 3]
[1, 2, 3].reduce((a, b) => a + b);  // 6
```

**35b. Shallow vs deep copy.** Shallow copy (`{...obj}`, `Object.assign`) copies top-level only —
nested objects are still shared. Deep copy clones everything: `structuredClone(obj)` (modern) or
`JSON.parse(JSON.stringify(obj))` (loses functions/dates).

**35c. == vs === (coercion rules).** `==` converts types before comparing, `===` doesn't.
```typescript
0 == '0'    // true  (string coerced to number)
0 == false  // true
null == undefined  // true
null === undefined // false
NaN === NaN // false  (NaN is never equal to itself)
```

**35d. call / apply / bind.** All set `this`. `call(thisArg, a, b)` invokes now with args listed;
`apply(thisArg, [a, b])` invokes now with an args array; `bind(thisArg)` returns a **new function**
to call later.

**35e. Spread vs rest.** Same `...` syntax, opposite jobs. **Spread** expands:
`Math.max(...[1,2,3])`. **Rest** collects: `function sum(...nums) {}`.

**35f. Destructuring.**
```typescript
const { name, email = 'n/a' } = user;   // object, with default
const [first, , third] = arr;           // array, skip index 1
```

**35g. Higher-order function.** A function that takes and/or returns another function (e.g. `map`,
or a fixture factory). Core to closures and array methods.

**35h. Optional chaining + nullish coalescing together.**
```typescript
const city = user?.address?.city ?? 'Unknown';   // safe access + default
```

</details>

<details>
<summary><b>"What's the output?" — snippets interviewers love</b></summary>

> Read each, predict the output, then check. These test real understanding, not memorization.

**1. Hoisting / closures in a loop**
```typescript
for (var i = 0; i < 3; i++) setTimeout(() => console.log(i), 0);
// Output: 3 3 3   (var is function-scoped; all share one i)

for (let i = 0; i < 3; i++) setTimeout(() => console.log(i), 0);
// Output: 0 1 2   (let is block-scoped; new binding each iteration)
```

**2. Microtask vs macrotask order**
```typescript
console.log('A');
setTimeout(() => console.log('B'), 0);
Promise.resolve().then(() => console.log('C'));
console.log('D');
// Output: A  D  C  B   (sync → microtask (Promise) → macrotask (setTimeout))
```

**3. Type coercion**
```typescript
console.log(1 + '2');      // '12'  (number + string → string)
console.log('5' - 2);      // 3     (- forces numeric)
console.log([] + []);      // ''    (arrays → empty strings)
console.log(typeof NaN);   // 'number'
```

**4. Reference vs value**
```typescript
const a = { n: 1 };
const b = a;          // same reference
b.n = 99;
console.log(a.n);     // 99  (objects are shared by reference)
```

**5. async return value**
```typescript
async function f() { return 1; }
console.log(f());            // Promise { 1 }   — NOT 1
f().then(v => console.log(v)); // 1
```

**6. const with objects**
```typescript
const arr = [1, 2];
arr.push(3);          // ✅ allowed — mutating, not reassigning
console.log(arr);     // [1, 2, 3]
// arr = [];          // ❌ TypeError — cannot reassign a const
```

</details>

---

## 14.3 Advanced Playwright

<details open>
<summary><b>36–45</b></summary>

**36. Auto-waiting internals.** Actionability checks: attached, visible, stable, enabled, can receive
events — retried until pass/timeout.

**37. storageState.** Save cookies + localStorage after login (`context.storageState({ path })`),
reuse via `use: { storageState }`.

**38. Global setup/teardown.** `globalSetup`/`globalTeardown` run once — seed DB, fetch auth token,
start a server.

**39. Network interception.**
```typescript
await page.route('**/api/users', r => r.fulfill({ status: 200, json: [{ id: 1 }] }));
```
Isolate the UI from a flaky backend, force data, block analytics/images.

**40. Stub an error state.** `route.fulfill({ status: 500 })`, then assert the error banner shows.

**41. Sharding.** `--shard=1/3` etc. across CI jobs, then merge blob reports.

**42. Cross-browser/device.** Define **projects** with `devices[...]`; run with `--project=`.

**43. Flaky tests.** Diagnose with trace viewer; fix root cause (web-first assertions, stable
locators, isolation); retries are a net, not a fix.

**44. File upload/download.** `setInputFiles(...)`; `page.waitForEvent('download')` then `saveAs`.

**45. iframes / shadow DOM / popups.** `frameLocator(...)`; locators pierce open shadow roots;
`waitForEvent('popup')` for new tabs.

</details>

<details>
<summary><b>46–55</b></summary>

**46. Docker + CI.** Use `mcr.microsoft.com/playwright`; run `npx playwright test` with `CI=true`;
upload report + traces.

**47. Trace viewer.** Recorded timeline; open a CI artifact via `show-trace trace.zip`.

**48. Visual regression.** `await expect(page).toHaveScreenshot('home.png')`; mask dynamic regions.

**49. Data-driven.** Loop over a dataset generating one test per row.

**50. Speed up 1000+ tests.** More workers, `fullyParallel`, sharding, reuse auth, mock slow calls,
block unneeded resources.

**51. waitForResponse vs waitForRequest vs waitForLoadState.** Outgoing request · its response ·
page lifecycle event.

**52. Dynamic locators.** Prefer stable `data-testid`; otherwise anchor on role/text.

**53. API + UI hybrid.** Create state via `userApi`, verify via `loginPage` — faster and more
reliable than building state through the UI.

**54. Secrets/config.** Env vars + `.env` (`dotenv`) + CI secret stores; never commit credentials.

**55. Soft assertions.** `expect.soft()` collects multiple failures in one run; use hard `expect` for
preconditions.

</details>

---

## 14.4 Framework Design & Architecture

<details open>
<summary><b>56 — "Walk me through your framework" (the #1 opener)</b></summary>

"It's a layered Playwright + TypeScript framework supporting **both API and UI**. `config/` holds
per-environment URLs; `src/api` has a `BaseApiClient` (headers, auth, HTTP verbs) extended by
endpoint classes like `UserApi`; `src/ui` uses the **Page Object Model** with a `BasePage` parent;
`src/fixtures` injects page objects and API clients via custom fixtures; `src/utils` has
helpers/logger; `tests/` is split into `api` and `ui`. The config defines projects for API, Chromium,
and Firefox with HTML reporting, retries on CI, and trace on retry."

</details>

<details>
<summary><b>57–70</b></summary>

**57. Playwright vs Selenium/Cypress.** Playwright: auto-waiting, true cross-browser, built-in API
testing, tracing, parallelism, mocking. Cypress: great DX, historically single-browser-family.
Selenium: mature but more boilerplate. Trade-off: Playwright's ecosystem is newer (but growing fast).

**58. API + UI in one repo.** Share config/utils/reporting/CI; separate by folder + projects with
`testMatch`; reuse the same fixtures and helpers.

**59. Fixtures/DI design.** One typed fixture per page object / API client that constructs it and
hands it to the test via `use()`, with cleanup after.

**60. POM anti-patterns.** God objects, assertions buried in page methods, or overly fine-grained
methods. Keep pages focused; keep most assertions in tests.

**61. Test data.** Static (`users.json`) for stable refs + dynamic (`randomEmail()`) for create flows;
create via API in setup, clean up in teardown.

**62. Independent/idempotent/parallel-safe.** No shared mutable state, unique data, fresh context, no
ordering, `beforeEach` for a known start.

**63. Reporting.** HTML for local, JUnit/JSON for CI, Allure for history; attach screenshot/video/trace
on failure.

**64. Multi-environment.** Single source (`environments.ts`) mapped by `ENV`; secrets via `.env`/CI.

**65. Scaling to 10,000 tests.** Shard, max workers, reuse auth, mock third-parties, strict isolation,
tag groups (`@smoke`), trend reporting.

**66. What to automate (test pyramid).** Many unit, fewer integration/API, fewest E2E UI. Automate
stable high-value paths; keep exploratory/volatile checks manual.

**67. CI/CD.** Smoke as a PR gate, regression nightly; Docker image, `CI=true`, shards, artifacts.

**68. Retry without hiding bugs.** Limit retries, trace on first retry, track retrying tests and
investigate them.

**69. Code quality.** ESLint + strict TS, PR reviews, conventions, shared base classes, CI lint gate.

**70. Versioning/maintenance.** Centralize locators in page objects, prefer `data-testid`, review
flaky/slow tests; UI changes touch only the relevant page object.

</details>

---

## 14.5 API Testing & Backend

<details open>
<summary><b>71–78</b></summary>

**71. Schema validation.** Validate the **shape** with Ajv/Zod/Joi — catches missing/extra fields and
type drift.

**72. REST vs GraphQL.** REST: many endpoints, test each verb/status. GraphQL: one endpoint,
query-driven; check the `errors` array (often 200 even on logical errors) and over/under-fetching.

**73. Auth flows.** Get a token, attach `Bearer` header (your `BaseApiClient` reads `API_TOKEN`);
test valid/expired/malformed tokens; for OAuth2 test the grant + refresh.

**74. Idempotent vs not.** GET/PUT/DELETE are idempotent (safe to retry); POST is not (duplicates).
Matters for retry logic and repeatable tests.

**75. Pagination/rate limiting/errors.** Assert page size + `next`/`total` + boundaries; expect `429`
+ `Retry-After`; assert correct 4xx/5xx codes and error body shape.

**76. API chaining.**
```typescript
const created = await (await userApi.createUser(u)).json();
const fetched = await userApi.getUserById(created.id);
```

**77. Status + headers + timing.** Assert `status()`, `headers()['content-type']`, and measure
duration around the call.

**78. Contract testing (Pact).** Verifies provider/consumer agree on the contract independently;
catches breaking changes early in CI for microservices.

</details>

---

## 14.6 Behavioral & Leadership

> Answer with **STAR** (Situation, Task, Action, Result) and concrete metrics.

<details open>
<summary><b>79–86</b></summary>

**79. Critical bug others missed.** Added boundary/negative cases to a payment flow and found a
multi-currency rounding error via an API test → fixed pre-release, added to regression.

**80. Improved stability/time.** Cut flaky failures ~15% → <2% by replacing sleeps with web-first
assertions and stabilizing locators; suite 40 → 12 min via sharding + `storageState`.

**81. Mentoring & reviews.** Pair on patterns, review PRs for proper POM/fixtures/no sleeps, share a
conventions doc, give incremental ownership.

**82. Conflict with a developer.** Reproduce with a trace/video, frame as shared quality, agree on
severity together — the trace turned debate into a quick fix.

**83. Coverage under deadline.** Risk-based: prioritize critical journeys + changed areas, smoke as a
gate, communicate covered vs deferred clearly.

**84. Framework from scratch.** Chose Playwright + TS for unified API/UI, layered architecture, CI,
reporting; results in coverage %, time saved, fewer escaped defects.

**85. Advocate for quality.** Shift-left: refinement involvement, acceptance criteria, automate
alongside dev, PR smoke gate, surface metrics in retros.

**86. Production failure & fix.** A config-specific bug escaped (only one env tested) → added
environment-parity smoke tests + post-deploy health check so similar gaps are caught automatically.

</details>

---

## How to Prepare (5–10 yr strategy)

| Area | Weight | Action |
|---|---|---|
| Coding / DSA | High (FAANG-style SDET) | LeetCode easy–medium: arrays, strings, linked lists, hashmaps |
| Framework design | Very High | Whiteboard your framework + justify every choice |
| Playwright depth | High | Master mocking, fixtures, CI, sharding, trace |
| API testing | Medium–High | Schema validation, auth, chaining, contract testing |
| Behavioral | Medium | Prepare 6–8 STAR stories |

> **Reality check from Glassdoor:** Product companies (Microsoft, Amazon, Expedia) expect **2–3
> coding rounds** even for SDET. Services/enterprise (HCL, Optum, Cotiviti) lean more on **framework,
> Selenium/Playwright, and scenario-based** questions. Tailor prep to the company type.

---
---

# Section 15 — QA & Testing Fundamentals

> Experienced testers are still expected to know the theory cold. These are the most-asked
> manual/QA concept questions — short, interview-ready answers.

## 15.1 Process & Concepts

<details open>
<summary><b>Severity vs Priority, Verification vs Validation, SDLC vs STLC…</b></summary>

**Severity vs Priority.** *Severity* = impact on the system (how bad). *Priority* = urgency to fix
(how soon). A typo on the homepage = low severity, high priority; a crash in a rarely-used admin
screen = high severity, low priority.

**Verification vs Validation.** *Verification* = "are we building it right?" (reviews, static checks).
*Validation* = "are we building the right thing?" (actual testing of the running app).

**SDLC vs STLC.** SDLC is the whole software lifecycle; **STLC** (Software Testing Life Cycle) is the
testing-specific phases: requirement analysis → test planning → test case design → environment
setup → execution → closure.

**Smoke vs Sanity.** *Smoke* = broad, shallow check that a build is stable enough to test.
*Sanity* = narrow, deep check of one specific fix/feature after a change.

**Regression vs Retesting.** *Retesting* = verify a specific bug is fixed. *Regression* = verify the
fix didn't break anything else.

**Functional vs Non-functional.** Functional = what the system does (features). Non-functional = how
it behaves (performance, security, usability, reliability).

**Bug vs Defect vs Error vs Failure.** Error (human mistake) → Defect/Bug (in the code) → Failure
(when the defect manifests at runtime).

**Test Plan vs Test Strategy.** Strategy = high-level org approach (long-lived). Plan =
project-specific document (scope, schedule, resources, deliverables).

</details>

<details>
<summary><b>Bug life cycle</b></summary>

`New → Assigned → Open → Fixed → Retest → Verified → Closed`
(or → `Reopened` if it fails retest; `Rejected`/`Duplicate`/`Deferred`/`Won't Fix` are alternate paths).

</details>

## 15.2 Test Design Techniques

<details open>
<summary><b>The techniques interviewers expect you to name</b></summary>

**Equivalence Partitioning (EP).** Divide inputs into groups that should behave the same; test one
value per group. Age 18–60 valid → test one valid (30) + one each side (10, 70).

**Boundary Value Analysis (BVA).** Bugs cluster at edges — test the boundaries and just inside/outside.
For 1–100: test 0, 1, 2, 99, 100, 101.

**Decision Table.** For combinations of conditions → expected actions. Great for business rules with
multiple inputs (e.g. discount = f(membership, cart total)).

**State Transition.** Test valid/invalid transitions between states (e.g. login → locked after 3
failed attempts).

**Pairwise / All-pairs.** Test all pairs of parameter values instead of every combination — huge
reduction in test count with high defect coverage.

**Error Guessing.** Experience-based: deliberately try inputs likely to break things (empty, nulls,
special chars, huge values).

</details>

## 15.3 Scenario-Based (asked of seniors)

<details open>
<summary><b>"How would you test…" questions</b></summary>

**How would you test a login page?** Functional (valid/invalid creds, empty fields, case-sensitivity),
security (SQL injection, brute-force lockout, password masking, HTTPS), UI/UX (tab order, error
messages), boundary (max length), session (remember-me, logout, expiry), and cross-browser.

**How would you test a text/search box?** EP + BVA on length, special characters, SQL/XSS payloads,
empty/whitespace, leading/trailing spaces, autocomplete, pagination of results, performance with
large data, and no-results handling.

**A bug is in production — what do you do?** Reproduce + assess severity/impact, log with evidence
(steps, logs, screenshots), communicate to stakeholders, support a hotfix, add a **regression test**
so it can't recur, and do a root-cause/process review.

**Developer says "it's not a bug, it works on my machine."** Provide a reproducible trace/video +
exact steps, environment details, and the requirement it violates; agree on severity together — keep
it factual, not personal.

**How do you decide when to stop testing?** Exit criteria met: coverage targets, critical bugs fixed,
defect arrival rate flattened, deadlines/risk acceptance, and all high-priority cases passed.

**No requirements/documentation — how do you test?** Exploratory testing, talk to PO/devs/users,
reference similar apps, use the app to infer intent, and document findings as you go.

</details>

---
---

# Section 16 — Final Revision Checklist

> Skim this the night before. If you can confidently explain each line, you're ready.

<details open>
<summary><b>Must-know (don't walk in without these)</b></summary>

- [ ] **Walk through your framework** in 60 seconds (architecture, layers, why each choice)
- [ ] Why **Playwright over Selenium/Cypress** — 3 concrete reasons
- [ ] **Auto-waiting** and why you avoid hard sleeps
- [ ] **Page Object Model** — what it is + when it becomes an anti-pattern
- [ ] **Fixtures** — how you inject page objects / API clients
- [ ] **async/await + Promises** — explain and use correctly
- [ ] **Parallel execution, workers, sharding**
- [ ] **API testing** in Playwright (`request` context, status, json)
- [ ] **CI/CD** — retries, trace, reports, PR gates
- [ ] **Flaky tests** — causes + how you fix the root cause
- [ ] **Severity vs Priority**, **Smoke vs Sanity**, **EP + BVA**
- [ ] 6–8 **STAR stories** ready (bug found, framework built, mentoring, conflict, prod failure)
- [ ] One **live coding** warm-up done that morning (string/array + write its test cases)

</details>

<details>
<summary><b>Smart questions to ask the interviewer</b></summary>

- What does the current test architecture look like, and what's the biggest pain point?
- What's the ratio of unit/integration/E2E tests today?
- How is automation integrated into your release pipeline?
- How do you measure test effectiveness (escaped defects, flaky rate)?
- What would success in this role look like in the first 90 days?

</details>

---

---

# Section 17 — Extra Question Bank (rapid, high-yield)

> Short Q → answer format to maximize coverage. Read the question, answer aloud, then check.

## 17.1 TypeScript / JavaScript

1. **`let` vs `const` vs `var`?** → `var` is function-scoped + hoisted; `let`/`const` are
   block-scoped; `const` can't be reassigned (but objects are still mutable).
2. **`==` vs `===`?** → `==` coerces types; `===` checks value **and** type. Always use `===`.
3. **What is hoisting?** → Declarations are moved to the top of their scope; `var` is hoisted as
   `undefined`, `let`/`const` are in the temporal dead zone until declared.
4. **What is a closure?** → A function that remembers variables from its outer scope even after
   that scope has returned. Used for data privacy and factories.
5. **`null` vs `undefined`?** → `undefined` = not assigned; `null` = intentional empty value.
6. **What is the event loop?** → JS is single-threaded; the event loop processes the call stack,
   then microtasks (promises), then macrotasks (timers) — enabling async without blocking.
7. **`map` vs `forEach`?** → `map` returns a new array; `forEach` returns nothing (side effects).
8. **`Promise` vs `async/await`?** → `async/await` is syntactic sugar over promises; cleaner,
   reads synchronously, use `try/catch` for errors.
9. **What is `Promise.all` vs `Promise.race`?** → `all` waits for all (fails if any rejects);
   `race` resolves/rejects with the first to settle.
10. **`interface` vs `type`?** → Both describe shapes; `interface` is extendable/mergeable, `type`
    supports unions/intersections/primitives.
11. **What are generics?** → Reusable type parameters (`<T>`) that keep type safety across
    different types — e.g., `Array<T>`, a generic API client.
12. **What is `enum`?** → A named set of constants improving readability over magic values.
13. **What does `?.` (optional chaining) do?** → Safely accesses nested properties; returns
    `undefined` instead of throwing if a link is null/undefined.
14. **What is `??` (nullish coalescing)?** → Returns the right side only if the left is
    `null`/`undefined` (unlike `||`, which also triggers on `0`/`""`).
15. **`spread` vs `rest`?** → Same `...` syntax; spread expands an array/object, rest collects
    arguments into an array.
16. **`slice` vs `splice`?** → `slice` returns a copy (non-mutating); `splice` changes the array.
17. **What is `this` in JS?** → The calling context; arrow functions inherit `this` from the
    enclosing scope (no own `this`).
18. **What is destructuring?** → Unpacking values from arrays/objects into variables
    (`const {a, b} = obj`).
19. **Shallow vs deep copy?** → Shallow copies top-level refs; deep copy clones nested objects
    (`structuredClone` / `JSON.parse(JSON.stringify())`).
20. **What is type narrowing?** → Using `typeof`/`instanceof`/checks so TS knows a more specific
    type within a branch.

## 17.2 Playwright

21. **What is the difference between `page` and `context`?** → A `BrowserContext` is an isolated
    session (like an incognito profile); a `page` is a tab inside it.
22. **How do you achieve test isolation?** → Each test gets a fresh context → no shared cookies/
    storage; enables safe parallelism.
23. **`locator` vs `$`/`page.$`?** → `locator` is lazy and auto-retries; `$` resolves once
    immediately (legacy, avoid).
24. **How do you wait for an API response?** → `page.waitForResponse(url/predicate)` or assert on
    a locator that appears after the call.
25. **How do you mock network requests?** → `page.route()` to intercept and fulfill/abort/modify
    requests — great for negative cases and isolation.
26. **What is `expect` auto-retrying?** → Web-first assertions (`toBeVisible`, `toHaveText`) retry
    until the timeout — no manual waits.
27. **How do you run tests in parallel?** → Playwright runs files in parallel across workers; use
    `test.describe.configure({ mode: 'parallel' })` within a file.
28. **What is a fixture?** → A reusable setup/teardown unit injected into tests (DI); see
    [src/fixtures/index.ts](src/fixtures/index.ts).
29. **How do you handle authentication once for many tests?** → Save storage state after login
    (`storageState`) and reuse it, skipping repeated logins.
30. **What is trace viewer?** → A post-run debugging tool showing DOM snapshots, actions, network,
    and console for each step — invaluable for flaky failures.
31. **How do you test file upload/download?** → `setInputFiles()` for upload; `waitForEvent
    ('download')` for download.
32. **How do you handle multiple tabs/popups?** → `context.waitForEvent('page')` to capture the
    new page object.
33. **How do you do visual/screenshot testing?** → `expect(page).toHaveScreenshot()` compares
    against a baseline image.
34. **What reporters does Playwright support?** → list, line, dot, HTML, JUnit, JSON, plus Allure
    via plugin.
35. **How do you retry only failed tests?** → `retries` in config; combine with `--last-failed`.

## 17.3 Framework & General

36. **Why Page Object Model?** → Separates UI structure from test logic → maintainable, reusable,
    readable.
37. **Where should assertions live?** → In tests, not page objects (page objects return data/
    state).
38. **How do you keep tests independent?** → No shared state, isolated data, set up prerequisites
    per test, clean up after.
39. **How do you manage environments?** → Config keyed by env var; see
    [config/environments.ts](config/environments.ts).
40. **How do you store secrets?** → Env vars / secrets manager, never committed; `.env.example`
    lists placeholders.
41. **What makes a good test?** → Independent, deterministic, fast, readable, single clear purpose,
    reliable assertions.
42. **How do you reduce flakiness?** → Stable locators, auto-waits (no `sleep`), data isolation,
    retries only for true externalities.
43. **What is the test pyramid?** → Many unit, fewer API, few UI — fast feedback, stable suite.
44. **How do you integrate with CI?** → Run on PR, smoke fast, full nightly, publish reports, gate
    merge.
45. **What is data-driven testing?** → One script, many data sets from an external source.

---

<div align="center">

*Back to the main guide → [LEARNING_GUIDE.md](LEARNING_GUIDE.md)*

</div>
