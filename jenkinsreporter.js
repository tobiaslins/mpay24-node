const jasmineReporters = require('jasmine-reporters')

jasmine.VERBOSE = true
jasmine.DEFAULT_TIMEOUT_INTERVAL = 90000
jasmine.getEnv().addReporter(
  new jasmineReporters.JUnitXmlReporter({
    consolidateAll: false,
    savePath: './test_results',
    filePrefix: 'mpay24-'
  })
)
