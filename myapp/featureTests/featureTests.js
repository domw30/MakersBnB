module.exports = {
  'User Story One - step one: navigate to MakersBnB and sign up' : function (browser) {
    browser
      .url('http://localhost:3000/')
      .setValue('#signUpName', 'Bob Jones')
      .setValue('#signUpEmail', 'jonesbob@email.com')
      .setValue('#signUpPassword', '****')
      .click('#signUp')
  },

  'User Story One - step two: log in to dashboard' : function (browser) {
    browser
      .url('http://localhost:3000/')
      .setValue('#logInEmail', 'jonesbob@email.com')
      .setValue('#logInPassword', '****')
      .click('#logIn')
      .verify.urlEquals('http://localhost:3000/dashboard')
      .end();
  },

  'User Story Two - step one: navigate to add listing page' : function (browser) {
    browser
      .url('http://localhost:3000/')
      .setValue('#logInEmail', 'jonesbob@email.com')
      .setValue('#logInPassword', '****')
      .click('#logIn')
      .click('#addListing')
      .verify.urlEquals('http://localhost:3000/add')
  },

  'User Story Two - step two: set values for form name/description/price' : function (browser) {
    browser
      .setValue('#propertyName', 'barcelona flat')
      .setValue('#propertyDescription', 'sunny barcelona flat')
      .setValue('#propertyPrice', '£25')
      .click('#create')
      .verify.urlEquals('http://localhost:3000/dashboard')
  },

  'User Story Two - step three: user listings contains new listing' : function (browser) {
    browser
      .verify.containsText('#listings', 'barcelona flat')
      .end();
  },

  'User Story Three - step one: dashboard can contain more than one user listing' : function (browser) {
    browser
      .url('http://localhost:3000/')
      .setValue('#logInEmail', 'jonesbob@email.com')
      .setValue('#logInPassword', '****')
      .click('#logIn')
      .click('#addListing')
      .setValue('#propertyName', 'madrid flat')
      .setValue('#propertyDescription', 'sunny madrid flat')
      .setValue('#propertyPrice', '£40')
      .click('#create')
      .verify.containsText('#listings', 'madrid flat')
      .verify.containsText('#listings', 'barcelona flat')
      .end();
  },

  'User Story Five - step one: edit availabity for listing' : function (browser) {
    browser
      .url('http://localhost:3000/')
      .setValue('#logInEmail', 'jonesbob@email.com')
      .setValue('#logInPassword', '****')
      .click('#logIn')
      .click('#1')
      .verify.urlEquals('http://localhost:3000/edit')
      .verify.containsText('h1', 'barcelona flat')
  }
};
