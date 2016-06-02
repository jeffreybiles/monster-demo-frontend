import ActiveModelAdapter from 'active-model-adapter';
import ENV from 'ember-2-0-frontend/config/environment';

export default ActiveModelAdapter.extend({
  host: ENV.host
});
