## Test Automation Project - Mocha framework with WebdriverIO

### Info
This repo contains a Web UI test automation project written in JavaScript. It is based on ```Mocha``` framework, ```WebdriverIO(v7)``` and page object  model.
Each test file showing an example of different assertion library:

* Node.js built-in assert
* WebdriverIO expect()
* Chai assert

### Installation
Project has been tested and verified on ```Node.js v14``` on both ```MacOS & Windows 10```.
To install project's dependencies, inside main dir run:
```
npm install
npm install -g allure-commandline
```

### Commands
You can run 3 different test files and generate an Allure & HTML reports.

| Command  | Info | 
| ------------- | ------------- |
| ```npx wdio run test```  | Run all tests |
| ```npx wdio --suite login```  | Run test-login |
| ```npx wdio --suite alerts```  | Run test-js-alerts |
| ```npx wdio --suite elements```  | Run test-add-elements |
| ```npx wdio --suite alerts login```  | Run 2 suites (2 files in this case) |
| ```npx wdio --spec ./test/specs/test-login.js```  | Run specific file |


### Reports

#### allure
Running the tests, will generate /reports/allure/allure-results.
To view the test results, in terminal, navigate to main allure dir:
```
cd reports/allure
```
Run these 2 command to generate & open Allure report.
```
allure generate allure-results
allure open
```
![Alure-Screenshot](https://i.imgur.com/Mxpw0q0.png)

#### wdio-nice-html-reporter
Running the tests will also generate /reports/html-reports.
Inside you can find reports for single spec or a master-report. The master-report configuration can be found in config file.
![img.png](https://i.imgur.com/qajYGPR.png)