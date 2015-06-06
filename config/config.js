var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'documents'
    },
    port: 3000,
    db: 'mysql://root:pass@127.0.0.1/node_test',
  },

  test: {
    root: rootPath,
    app: {
      name: 'documents'
    },
    port: 3000,
    db: 'mysql://root:pass@127.0.0.1/node_test'
  },

  production: {
    root: rootPath,
    app: {
      name: 'documents'
    },
    port: 3000,
    db: 'mysql://root:pass@127.0.0.1/node_test'
  }
};

module.exports = config[env];
