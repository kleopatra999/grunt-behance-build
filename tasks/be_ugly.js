var localTasks = require('../lib/localTasks');

module.exports = function(grunt) {
  var plugin = 'grunt-be-ugly';

  localTasks.load(grunt, plugin);
};
