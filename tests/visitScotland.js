module.exports = {
  // 'Test Title' : function (browser) {
  //   browser
  //   .url('http://www.visitscotland.com')
  //   .waitForElementVisible('body', 2000)
  //   .pause(1000)
  //   .assert.containsText('.title', 'SCOTLAND. A SPIRIT OF ITS OWN.')
  //   .end();
  // },
  //
  //
  // 'Test little map img visible' : function (browser){
  //   browser
  //   .url('http://www.visitscotland.com')
  //   .waitForElementVisible('body', 2000)
  //   .pause(1000)
  //   .assert.visible('.img-responsive')
  //   .pause(1000)
  //   .end()
  // },
  //
  // 'Test Explore Scotland btn works' : function (browser){
  //   browser
  //   .url('http://www.visitscotland.com')
  //   .waitForElementVisible('body', 2000)
  //   .assert.visible('.btn-clean-pink')
  //   .click('a.btn.btn-clean-pink.ga_ctaBox.intro-link-button')
  //   .waitForElementVisible('body', 2000)
  //   .assert.urlEquals('https://www.visitscotland.com/destinations-maps/')
  //   .pause(1000)
  //   .end();
  // },
  
  'Test log in button works ' : function (browser) {
    browser
    .url('http://www.visitscotland.com')
    .waitForElementVisible('body', 2000)
    .click('#afHeaderLogin')
    .waitForElementVisible('body', 2000)
    .assert.urlEquals('https://www.visitscotland.com/user/loginredirect?returnurl=/')
    .pause(1000)
    .end();
  },
  
  'Test language button works ' : function (browser) {
    browser
    .url('http://www.visitscotland.com')
    .waitForElementVisible('body', 2000)
    .click('.language-select.notranslate')
    .waitForElementVisible('.list-unstyled', 2000)
    .assert.visible('.list-unstyled')
    .pause(1000)
    .end();
  },
  
  // 'Test languages work ' : function (browser) {
  //   browser
  //   .url('http://www.visitscotland.com')
  //   .waitForElementVisible('body', 2000)
  //   .click('.language-select.notranslate')
  //   .waitForElementVisible('.list-unstyled', 2000)
  //   .assert.jqeuryElementPresent("div:")
  //   .pause(1000)
  //   .end();
  // },
  
  'Test language button works ' : function (browser) {
    browser
    .url('http://www.visitscotland.com')
    .waitForElementVisible('body', 2000)
    .click('.language-select.notranslate')
    .waitForElementVisible('.list-unstyled', 2000)
    .assert.visible('.list-unstyled')
    .pause(1000)
    .end();
  },
  
  'Test community button works ' : function (browser) {
    browser
    .url('http://www.visitscotland.com')
    .waitForElementVisible('body', 2000)
    .click('#community-link')
    .waitForElementVisible('body', 2000)
    .assert.urlEquals('https://community.visitscotland.com/')
    .pause(1000)
    .end();
  },
};
