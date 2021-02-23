const { exec } = require('child_process');

module.exports = {
  'BrowserStack Local Testing' : function (browser) {
    browser
      .url('http://bs-local.com:45691/check')
      .waitForElementVisible('body', 1000)
      .pause(30000)
      .assert.containsText('body', 'Up and running')
      .perform(function() {
        var yourscript = exec('sh running_node_binary_processes.sh',
        (error, stdout, stderr) => {
          console.log(stdout);
          console.log(stderr);
          if (error !== null) {
            console.log(`exec error: ${error}`);
          }
        });
      })
      .pause(5000)
      .end();
  }
};
