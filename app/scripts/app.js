'use strict';

/**
 * @ngdoc overview
 * @name twentyfourtyeightApp
 * @description
 * # twentyfourtyeightApp
 *
 * Main module of the application.
 */
angular
  .module('twentyfourtyeightApp', ['ngCookies'])
  .controller(GameController', function(GameManger) {
        this.game = GameManager;
});
