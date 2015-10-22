export function initialize( container, application ) {
  Ember.$.ajaxPrefilter(function(options, originalOptions, jqXHR) {
    var token = Cookies.get('authenticationToken')
    if(token){
      jqXHR.setRequestHeader('X-CSRF-Token', token);
    }
  });
}

export default {
  name: 'ajax-prefilter',
  initialize: initialize
};
