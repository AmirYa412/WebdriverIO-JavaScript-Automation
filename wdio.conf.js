import TestedEnvironment     from './core/set-environment'
import {ReportAggregator}    from 'wdio-html-nice-reporter'
let reportAggregator = ReportAggregator

const envPrefix = (!process.env.ENV) ? "prod" : process.env.ENV                    // Default test env: Production
const env = new TestedEnvironment(envPrefix)

exports.config = {
    specs: [
        './test/specs/**/*.js'
    ],
    suites: {
        sanity: ['./test/specs/test-login.js', './test/specs/test-js-alert.js', './test/specs/test-add-elements.js'],
        hovers: ['./test/specs/test-hovers.js']
    },
    exclude: [
        // 'path/to/excluded/files'
    ],
    maxInstances: 1,
    // If you have trouble getting all important capabilities together, check out the
    // https://docs.saucelabs.com/reference/platforms-configurator
    capabilities: [{
        maxInstances: 1,
        browserName: 'chrome',
        acceptInsecureCerts: true
    }],
    // Level of logging verbosity: trace | debug | info | warn | error | silent
    logLevel: 'silent',
    bail: 0,
    baseUrl: env["baseUrl"],
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    services: ['chromedriver'],

    // Framework you want to run your specs with.
    framework: 'mocha',
    reporters: [
        'spec',                                                  //  Spec https://webdriver.io/docs/spec-reporter/
        ['allure', {
            outputDir: 'reports/allure/allure-results'}],       // https://webdriver.io/docs/allure-reporter/
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
    beforeSession: function () {
        // Global Test Utils
        global.testsData = env.testsData
    },

    onPrepare: function (config, capabilities) {
        reportAggregator = new ReportAggregator({
            outputDir: './reports/html-reports/',
            filename: 'master-report.html',
            reportTitle: 'Master Report',
            browserName : capabilities.browserName,
            collapseTests: true
        })
        reportAggregator.clean()
    },

    onComplete: function(exitCode, config, capabilities, results) {
        (async () => {
            await reportAggregator.createReport()
        })()
    },
}

