(function () {
  'use strict';
  // Configuring the games module
  angular.module('games').run(['Menus',
    function (Menus) {
      // Add the games dropdown item
      Menus.addMenuItem('topbar', {
        title: 'games',
        state: 'games',
        type: 'dropdown',
        roles: ['*']
      });

      // Add the dropdown list item
      Menus.addSubMenuItem('topbar', 'games', {
        title: 'List games',
        state: 'games.list'
      });

      // Add the dropdown create item
      Menus.addSubMenuItem('topbar', 'games', {
        title: 'Create Games',
        state: 'games.create',
        roles: ['user']
      });
    }
  ]);
}());
