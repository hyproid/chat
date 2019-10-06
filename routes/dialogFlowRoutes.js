
const bot = require('../bot/Bot');

module.exports = app => {
  app.post('/api/df_text_query', async (req, res) => {
      // Call textQuery method.
      let responses = await bot.textQuery(req.body.query, req.body.userID, req.body.parameters);
      res.send(responses[0].queryResult);
  });

  app.post('/api/df_event_query', async (req, res) => {
      // Call eventQuery method.
      let responses = await bot.eventQuery(req.body.query, req.body.userID, req.body.parameters);
      res.send(responses[0].queryResult);
  });

}
