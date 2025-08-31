# Trade Nation Assessment

##  Prerequisites

Open powershell if you are on Windows or open terminal if you are on Linux/macOs in the project directory. If you are using Visual Code to view this project simply open a new terminal instance.
All commands listed below are to be executed there.

Verify if you have Node.js by using the command 'node -v' and 'npm -v'.
If not download it and install it here: https://nodejs.org/

Install Playwright by using the command 'npx playwright install'.


##  Running Tests

To run all tests using headed mode, use this command 'npx playwright test --headed'.

To run a specific test file, use this command 'npx playwright test tests/<filename>.spec.ts'. Replace 'filename' with 'tradeNationHome' or 'googleInvalidLogin'. 

To run tests in headless mode, use this command 'npx playwright test --headless'.


## Test Reports

To show the last HTML report, use this commannd 'npx playwright show-report'.


##  Misc 

- Since this project only required two tests, I did not create hooks like:
  ```ts
  test.beforeEach(async () => { ... })
  test.afterEach(async () => { ... })
  ```
  Adding them would have been over-engineering here, but for larger projects these hooks are essential.

- For this test suite, only **Chrome** is enabled.  
  To add Firefox or Safari, simply update the commented values in `playwright.config.ts`.

- Viewport configuration is also defined in `playwright.config.ts`.

---
