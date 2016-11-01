module.exports = {
  'Test step one' : function (browser) {
    browser
      .url('http://www.google.com')
      .waitForElementVisible('body', 1000)
      .setValue('input[type=text]', 'blucommerce')
      .waitForElementVisible('button[name=btnG]', 1000)
  },

  'Test step two' : function (browser) {
    browser
      .click('button[name=btnG]')
      .pause(2000)
      .assert.containsText('#main', 'blucommerce')
      .end();
  }
};
