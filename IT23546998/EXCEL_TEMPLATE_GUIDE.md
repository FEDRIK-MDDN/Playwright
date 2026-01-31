# Excel Test Case Template Structure

## Template Columns

Your Excel file should have the following columns:

1. **TC ID** - Test Case ID (e.g., Pos_Fun_0001, Neg_Fun_0001, Pos_UI_0001)
2. **Test case name** - Brief descriptive name
3. **Input length type** - S, M, or L
4. **Input** - The Singlish input text
5. **Expected output** - Expected Sinhala output
6. **Actual output** - Actual Sinhala output (fill after test execution)
7. **Status** - Pass or Fail
8. **Accuracy justification/Description of issue type** - Explanation
9. **What is covered by the test** - Bullet points covering 4 areas

## Example Test Case Format

### Positive Functional Test Example:

| Column | Value |
|--------|-------|
| TC ID | Pos_Fun_0001 |
| Test case name | Convert simple sentence - going home |
| Input length type | S |
| Input | mama gedhara yanavaa. |
| Expected output | මම ගෙදර යනවා. |
| Actual output | මම ගෙදර යනවා. |
| Status | Pass |
| Accuracy justification | The sentence meaning is preserved. Sinhala spelling is correct. Punctuation is correctly placed. |
| What is covered by the test | • Daily language usage<br>• Simple sentence<br>• S (≤30 characters)<br>• Accuracy validation |

### Negative Functional Test Example:

| Column | Value |
|--------|-------|
| TC ID | Neg_Fun_0001 |
| Test case name | Joined words without spaces fail conversion |
| Input length type | S |
| Input | mamagedharayanavaa |
| Expected output | මම ගෙදර යනවා |
| Actual output | මමගෙදරයනවා (or incorrect output) |
| Status | Fail |
| Accuracy justification | System fails to segment joined words. No word boundaries detected. Output is incorrect or malformed. |
| What is covered by the test | • Typographical error handling<br>• Simple sentence<br>• S (≤30 characters)<br>• Robustness validation |

### UI Test Example:

| Column | Value |
|--------|-------|
| TC ID | Pos_UI_0001 |
| Test case name | Sinhala output updates automatically in real-time |
| Input length type | S |
| Input | man gedhara yanavaa |
| Expected output | Sinhala output should update automatically while typing |
| Actual output | Output updates in real-time, displays: මන් ගෙදර යනවා |
| Status | Pass |
| Accuracy justification | Sinhala output appears with real-time conversion. Output updates correctly as user types. No UI lag or freezing observed. |
| What is covered by the test | • Daily language usage<br>• Simple sentence<br>• S (≤30 characters)<br>• Real-time output update behavior |

## "What is covered by the test" - Four Required Areas

### 1. Input Type / Domain (choose ONE):
- Daily language usage
- Greeting / request / response
- Word combination / phrase pattern
- Mixed Singlish + English
- Slang / informal language
- Typographical error handling
- Names / places / common English words
- Punctuation / numbers
- Formatting (spaces / line breaks / paragraph)
- Empty/cleared input handling

### 2. Sentence / Grammar Focus (choose ONE):
- Simple sentence
- Compound sentence
- Complex sentence
- Interrogative (question)
- Imperative (command)
- Present tense / Past tense / Future tense
- Negation (negative form)
- Pronoun variation (I/you/we/they)
- Plural form

### 3. Input Length Type (choose ONE):
- S (≤30 characters)
- M (31–299 characters)
- L (≥300 characters)

### 4. Quality Focus (choose ONE):
- **Accuracy validation** - Use when input is clean/correct and you're verifying correct conversion
- **Robustness validation** - Use when input has issues (typos, slang, mixed content) and testing edge cases
- **Formatting preservation** - Use when testing spacing, line breaks, paragraphs
- **Real-time output update behavior** - Use for UI functional behavior tests
- **Error handling / input validation** - Use for negative UI tests

## Quick Reference: When to Use Quality Focus

### Use "Accuracy validation" when:
- ✓ Input is correct Singlish
- ✓ Normal spelling and spacing
- ✓ Expected result is clear
- ✓ You are verifying correct conversion (PASS expected)

### Use "Robustness validation" when:
- ✓ Input includes typos, slang, mixed English, long text
- ✓ Testing failure behavior or edge cases
- ✓ Often used in negative tests (FAIL expected)

## Test Case Mapping to Excel

After running your Playwright tests, fill the Excel file with:

1. **TC ID** - From test name in code
2. **Input** - From test code
3. **Expected output** - From test code
4. **Actual output** - Copy from test results
5. **Status** - Pass/Fail from test results
6. **Accuracy justification** - Analyze why it passed/failed

## Tips for Filling Excel

1. **Be Consistent**: Use same format for all test cases
2. **Be Specific**: Clearly explain why test passed or failed
3. **Use Bullets**: Format "What is covered" as bullet points
4. **Check Spelling**: Ensure Sinhala text is correctly copied
5. **Verify Status**: Match with Playwright test results
6. **No Duplication**: Don't use sample test cases from assignment brief

## Plagiarism Warning

- Submissions are checked for plagiarism
- Similarity score > 10% = 0 marks
- Use your own test cases
- Don't copy from classmates
- Don't use sample test cases from the brief

## File Naming

Save your Excel file as: `YOUR_REGISTRATION_NUMBER.xlsx`

Example: `2021CS001.xlsx`
