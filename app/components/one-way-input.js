import OneWayInput from 'ember-one-way-controls/components/one-way-input';

export default OneWayInput.extend({
  KEY_EVENTS: {
    '13': 'onenter',
    '27': 'onescape',
    '51': 'onthree',
    '9': 'ontab'
  }
})
