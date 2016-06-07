var VALID_DEPLOY_TARGETS = [ //update these to match what you call your deployment targets
  'dev',
  'prod'
];

module.exports = function(deployTarget) {
  var ENV = {
    build: {},
    redis: {
      allowOverwrite: true,
      keyPrefix: 'ember-2-0-frontend:index'
    },
    s3: {
      prefix: 'ember-2-0-frontend'
    }
  };
  if (VALID_DEPLOY_TARGETS.indexOf(deployTarget) === -1) {
    throw new Error('Invalid deployTarget ' + deployTarget);
  }

  if (deployTarget === 'dev') {
    ENV.build.environment = 'development';
    ENV.redis.url = process.env.REDIS_URL || 'redis://0.0.0.0:6379/';
  }
  ENV.s3.accessKeyId = process.env.AWS_ACCESS_KEY;
  ENV.s3.secretAccessKey = process.env.AWS_SECRET_KEY;
  ENV.s3.bucket = 'monster-demo';
  ENV.s3.region = 'us-east-1';

  if (deployTarget === 'prod') {
    ENV.build.environment = 'production';

    ENV.redis.url = process.env.PROD_REDIS_URL;
  }

  return ENV;

  /* Note: a synchronous return is shown above, but ember-cli-deploy
   * does support returning a promise, in case you need to get any of
   * your configuration asynchronously. e.g.
   *
   *    var Promise = require('ember-cli/lib/ext/promise');
   *    return new Promise(function(resolve, reject){
   *      var exec = require('child_process').exec;
   *      var command = 'heroku config:get REDISTOGO_URL --app my-app-' + deployTarget;
   *      exec(command, function (error, stdout, stderr) {
   *        ENV.redis.url = stdout.replace(/\n/, '').replace(/\/\/redistogo:/, '//:');
   *        if (error) {
   *          reject(error);
   *        } else {
   *          resolve(ENV);
   *        }
   *      });
   *    });
   *
   */
}
