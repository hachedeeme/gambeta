(function () {
  'use strict';

  // Games controller
  angular
    .module('games')
    .controller('GamesController', GamesController);

  GamesController.$inject = ['$scope', '$state', '$window', 'Authentication', 'gameResolve'];

  function GamesController ($scope, $state, $window, Authentication, game) {
    var self = this;

    self.authentication = Authentication;
    self.game = game;
    self.error = null;
    self.form = {};
    self.remove = remove;
    self.save = save;

    // self.game.date = self.game.date ? new Date(self.game.date) : new Date();

    // Remove existing Game
    function remove() {
      if ($window.confirm('Are you sure you want to delete?')) {
        self.game.$remove($state.go('games.list'));
      }
    }

    // Save Game
    function save(isValid) {
      if (!isValid) {
        $scope.$broadcast('show-errors-check-validity', 'self.form.gameForm');
        return false;
      }

      // TODO: move create/update logic to service
      if (self.game._id) {
        self.game.$update(successCallback, errorCallback);
      } else {
        self.game.$save(successCallback, errorCallback);
      }

      function successCallback(res) {
        $state.go('games.view', {
          gameId: res._id
        });
      }

      function errorCallback(res) {
        self.error = res.data.message;
      }
    }
  }
}());
