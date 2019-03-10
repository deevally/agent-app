module.exports = {
  'On page load, it sets focus on the header tag': (client) => {
    client
      .url('http://localhost:5000')
      .pause(2000)
      .waitForElementVisible('div', 2000)
      .assert.containsText('div', 'Naira Plus');
    client.end();
  }
};
