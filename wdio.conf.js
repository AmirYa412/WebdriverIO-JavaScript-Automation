import {ReportAggregator}    from 'wdio-html-nice-reporter';
let reportAggregator = ReportAggregator

exports.config = {
    specs: [
        './test/specs/**/*.js'
    ],
    suites: {
        login: ['./test/specs/test-login.js'],
        alerts: ['./test/specs/test-js-alert.js'],
        elements: ['./test/specs/test-add-elements.js'],
    },
    exclude: [
        // 'path/to/excluded/files'
    ],
    maxInstances: 1,
    // If you have trouble getting all important capabilities together, check out the
    // https://docs.saucelabs.com/reference/platforms-configurator
    capabilities: [{
        maxInstances: 5,
        browserName: 'chrome',
        acceptInsecureCerts: true
    }],
    // Level of logging verbosity: trace | debug | info | warn | error | silent
    logLevel: 'silent',
    bail: 0,
    baseUrl: 'https://the-internet.herokuapp.com',
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    services: ['chromedriver'],

    // Framework you want to run your specs with.
    framework: 'mocha',
    reporters: [
        'spec',                                                 //  Spec https://webdriver.io/docs/spec-reporter/
        ['allure', {
            outputDir: 'reports/allure/allure-results'}],
        ["html-nice", {                                        // html-nice-report https://webdriver.io/docs/rpii-wdio-html-reporter/
            outputDir: 'reports/html-reports/',
            filename: 'report.html',
            reportTitle: 'Test Report Title',
            showInBrowser: true,
            collapseTests: false,
            //to turn on screenshots after every test
            useOnAfterCommandForScreenshot: false,
        }
        ]
    ],
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },
    onPrepare: function (config, capabilities) {

        reportAggregator = new ReportAggregator({
            outputDir: './reports/html-reports/',
            filename: 'master-report.html',
            reportTitle: 'Master Report',
            browserName : capabilities.browserName,
            collapseTests: true
        });
        reportAggregator.clean()
    },

    onComplete: function(exitCode, config, capabilities, results) {
        (async () => {
            await reportAggregator.createReport()
        })()
    },
}
