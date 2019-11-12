'use strict';

/** @type Egg.EggPlugin */
module.exports = {
  // had enabled by egg
  static: {
    enable: true,
  },
  ejs: {
    enable: true,
    package: 'egg-view-ejs',
  },
  mysql: {
    enable: true,
    package: 'egg-mysql',
  },
  jwt: {
    enable: true,
    package: "egg-jwt",
    ignore: '/login',
    match: '/api/',
  },
  cors: {
    enable: true,
    package: 'egg-cors',
  },
  validate: {
    enable: true,
    package: 'egg-validate',
  }
};