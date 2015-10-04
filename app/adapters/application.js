import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend({
  "port": 4200,
  // "host": "0.0.0.0",
  "live-reload": true,
  "proxy": "http://localhost:3000", //why the fuck is this not working?
  "environment": "development"
});
