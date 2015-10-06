import ActiveModelAdapter from 'active-model-adapter';

export default ActiveModelAdapter.extend({
  "port": 4200,
  // "host": "0.0.0.0",
  "live-reload": true,
  "proxy": "http://localhost:3000", //why the fuck is this not working?
  "environment": "development"
});
