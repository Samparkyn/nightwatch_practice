module.exports = {
  'Demo test VisitScotland' : function (browser) {
    browser
    .url('http://www.visitscotland.com')
    .waitForElementVisible('body', 2000)
    .pause(1000)
    .assert.containsText('.title', 'SCOTLAND. A SPIRIT OF ITS OWN.')
    .end();
  }
};
