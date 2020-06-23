'use strict';

const service = require('./service');

module.exports = function(app) {

  app.route('leaderboard')
  .get(service.getJson);

    app.route('*').get((req,res)=>{
      res.status(404).send("Plesea use the documentation Correctly. Double check the route as well as the http method you used for this request")
    })
};