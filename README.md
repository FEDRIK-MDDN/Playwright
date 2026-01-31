# Singlish to Sinhala Translation System

## Project Overview
This project contains automated tests for the SwiftTranslator (https://www.swifttranslator.com/) Singlish-to-Sinhala translation system using Playwright framework.

## Assignment Details
- **Course**: IT3040 – ITPM
- **Assignment**: IT23546998
- **Objective**: Test accuracy, stability, and usability of Singlish to Sinhala conversion

## Installation Instructions

### 1. Install Dependencies (2 minutes)
```powershell
npm install
npx playwright install chromium
```

### 2. Run Tests (2 minutes)
```powershell
npm test
```

### 3. View Results (1 minute)
```powershell
npm run test:report
```

That's it! tests are running.

---

## Running the Tests

### Run All Tests
```bash
npm test
```

### Run Tests in Headed Mode (See Browser)
```bash
npm run test:headed
```

### Run Tests with UI Mode (Interactive)
```bash
npm run test:ui
```

### Run Specific Test Categories

#### Positive Tests Only
```bash
npm run test:positive
```

#### Negative Tests Only
```bash
npm run test:negative
```

#### UI Tests Only
```bash
npm run test:ui-tests
```

### Debug Mode
```bash
npm run test:debug
```


### Positive Functional Tests (24+ scenarios):
1. **Sentence Structures** (9 tests)
   - Simple sentences
   - Compound sentences
   - Complex sentences

2. **Interrogative and Imperative Forms** (7 tests)
   - Questions (interrogative)
   - Commands (imperative)

3. **Positive and Negative Forms** (6 tests)
   - Positive statements
   - Negative statements

4. **Greetings, Requests, and Responses** (9 tests)
   - Common greetings
   - Polite and informal requests
   - Response phrases

5. **Tense Variations and Mixed Language** (6 tests)
   - Past, present, future tenses
   - English terms embedded in Singlish
   - Place names and technical terms

### Negative Functional Tests (10 scenarios):
- Joined words without spaces
- Excessive spacing issues
- Misspelled Singlish words
- Case sensitivity problems
- Special characters handling
- Very long inputs
- Incomplete words
- Wrong character combinations

### UI Tests (5 scenarios):
- Real-time output updates
- Clear input behavior
- Empty input handling
- Output field visibility
- Rapid input updates



## Project Structure
```
IT23546998/
├── tests/
│   ├── positive/
│   │   ├── 01-sentence-structures.spec.ts
│   │   ├── 02-interrogative-imperative.spec.ts
│   │   ├── 03-positive-negative-forms.spec.ts
│   │   ├── 04-greetings-requests-responses.spec.ts
│   │   └── 05-tense-mixed-language.spec.ts
│   ├── negative/
│   │   └── negative-scenarios.spec.ts
│   └── ui/
│       └── ui-scenarios.spec.ts
├── utils/
│   └── SwiftTranslatorPage.ts (Page Object Model)
├── test-results/ (Generated after test run)
├── playwright-report/ (Generated HTML report)
├── package.json
├── playwright.config.ts
├── tsconfig.json
└── README.md
```

## Test Results and Reports

### View HTML Report
After running tests, view the detailed HTML report:
```bash
npm run test:report
```


### Test Case ID Conventions:
- **Pos_Fun_XXXX**: Positive functional tests
- **Neg_Fun_XXXX**: Negative functional tests
- **Pos_UI_XXXX**: Positive UI tests
- **Neg_UI_XXXX**: Negative UI tests

### Input Length Types:
- **S**: ≤ 30 characters
- **M**: 31–299 characters
- **L**: ≥ 300 characters


### Browser Not Opening
```bash
npx playwright install --force chromium
```




