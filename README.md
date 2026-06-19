# Playwright Automation Framework — TypeScript

A unified **API + UI** test automation framework built with [Playwright](https://playwright.dev/) and TypeScript.

---

## Project Structure

```
playwright-framework/
├── config/
│   └── environments.ts          # Dev / Staging / Prod URLs
├── src/
│   ├── api/
│   │   ├── clients/
│   │   │   └── BaseApiClient.ts # HTTP methods (GET, POST, PUT, DELETE)
│   │   └── endpoints/
│   │       └── UserApi.ts       # /users endpoint client
│   ├── ui/
│   │   └── pages/
│   │       ├── BasePage.ts      # Shared page actions (POM base)
│   │       ├── LoginPage.ts     # Login screen
│   │       └── DashboardPage.ts # Dashboard screen
│   ├── fixtures/
│   │   └── index.ts             # Custom test fixtures (inject pages + clients)
│   └── utils/
│       ├── logger.ts            # Colored console logger
│       └── helpers.ts           # Random data generators
├── tests/
│   ├── api/
│   │   └── users.api.spec.ts    # API tests (CRUD)
│   └── ui/
│       ├── login.ui.spec.ts     # UI login tests
│       └── combined.spec.ts     # API setup + UI verification
├── test-data/
│   └── users.json               # Static test data
├── .env.example                 # Environment variables template
├── playwright.config.ts         # Playwright configuration
├── tsconfig.json                # TypeScript configuration
└── package.json
```

---

## Setup

```bash
# 1. Install dependencies
npm install

# 2. Install Playwright browsers
npx playwright install

# 3. Copy env file and fill in values
cp .env.example .env
```

---

## Running Tests

```bash
# All tests
npm test

# API tests only
npm run test:api

# UI tests only
npm run test:ui

# With browser visible
npm run test:headed

# View HTML report
npm run report
```

---

## Adding a New API Endpoint

1. Create `src/api/endpoints/ProductApi.ts` extending `BaseApiClient`
2. Add it as a fixture in `src/fixtures/index.ts`
3. Write tests in `tests/api/products.api.spec.ts`

## Adding a New UI Page

1. Create `src/ui/pages/ProductsPage.ts` extending `BasePage`
2. Add it as a fixture in `src/fixtures/index.ts`
3. Write tests in `tests/ui/products.ui.spec.ts`
