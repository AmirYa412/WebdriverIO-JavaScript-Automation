## Test Automation Project - Mocha framework with WebdriverIO

### Info
This repo contains a Web UI test automation project written in JavaScript. It is based on ```Mocha``` framework, ```WebdriverIO(v7)``` and page object design pattern.
Project is loading different test data files according to `envPrefix` (default environment: `prod`), more info can be found in `wdio.conf.js` config file.

Each test file showing an example of different assertion library:
* `Node.js` built-in assert
* `WebdriverIO` expect
* `Chai` assert

### Installation
Project has been tested and verified on `Node.js v14` on both `MacOS` & `Windows 10`.
To install project's dependencies, inside main dir run:
```
npm install
npm install -g allure-commandline
```

### Commands
Project contains different test files, divided into different suites.

It is possible to change `maxInstance` in wdio.conf.js to run in parallel.

| Command  | Info | 
| ------------- | ------------- |
| `npx wdio`  | Run all tests |
| `npx wdio --suite sanity`  | Run `test-login`, `test-alerts` & `test-elements` test files |
| `npx wdio --spec ./test/specs/test-login.js`  | Run specific file |
| `npm test ENV=qa`  | Run on `qa` dummy env |
| `ENV=qa wdio --suite sanity`  | `MacOS` Run sanity suite on `qa` dummy env,  |
| `wdio --suite sanity` | `Windows` you will need to set env variable first `set ENV=qa` in order to change `testedEnv` object |


### Reports

#### allure
Running the tests, will generate `/reports/allure/allure-results`
To view the test results, in terminal, navigate to main allure dir:
```
cd reports/allure
```
Run these 2 commands to generate & open Allure report:
```
allure generate allure-results
allure open
```
![Alure-Screenshot](https://i.imgur.com/Mxpw0q0.png)

#### wdio-nice-html-reporter
Running the tests will also generate `/reports/html-reports`.
Inside you can find reports for single spec or a master-report. The master-report configuration can be found in `wdio.conf.js` config file.
![img.png](https://i.imgur.com/qajYGPR.png)