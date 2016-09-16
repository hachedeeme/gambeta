(function () {
  'use strict';

  angular
    .module('games')
    .controller('GamesListController', GamesListController);

  GamesListController.$inject = ['GamesService'];

  function GamesListController(GamesService) {
    var self = this;

    self.games = GamesService.query();
  }
}());
