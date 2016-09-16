(function () {
  'use strict';

  describe('Games Route Tests', function () {
    // Initialize global variables
    var $scope,
      GamesService;

    // We can start by loading the main application module
    beforeEach(module(ApplicationConfiguration.applicationModuleName));

    // The injector ignores leading and trailing underscores here (i.e. _$httpBackend_).
    // This allows us to inject a service but then attach it to a variable
    // with the same name as the service.
    beforeEach(inject(function ($rootScope, _GamesService_) {
      // Set a new global scope
      $scope = $rootScope.$new();
      GamesService = _GamesService_;
    }));

    describe('Route Config', function () {
      describe('Main Route', function () {
        var mainstate;
        beforeEach(inject(function ($state) {
          mainstate = $state.get('games');
        }));

        it('Should have the correct URL', function () {
          expect(mainstate.url).toEqual('/games');
        });

        it('Should be abstract', function () {
          expect(mainstate.abstract).toBe(true);
        });

        it('Should have template', function () {
          expect(mainstate.template).toBe('<ui-view/>');
        });
      });

      describe('View Route', function () {
        var viewstate,
          GamesController,
          mockGame;

        beforeEach(inject(function ($controller, $state, $templateCache) {
          viewstate = $state.get('games.view');
          $templateCache.put('modules/games/client/views/view-game.client.view.html', '');

          // create mock Game
          mockGame = new GamesService({
            _id: '525a8422f6d0f87f0e407a33',
            name: 'Game Name'
          });

          // Initialize Controller
          GamesController = $controller('GamesController as vm', {
            $scope: $scope,
            gameResolve: mockGame
          });
        }));

        it('Should have the correct URL', function () {
          expect(viewstate.url).toEqual('/:gameId');
        });

        it('Should have a resolve function', function () {
          expect(typeof viewstate.resolve).toEqual('object');
          expect(typeof viewstate.resolve.gameResolve).toEqual('function');
        });

        it('should respond to URL', inject(function ($state) {
          expect($state.href(viewstate, {
            gameId: 1
          })).toEqual('/games/1');
        }));

        it('should attach an Game to the controller scope', function () {
          expect($scope.vm.game._id).toBe(mockGame._id);
        });

        it('Should not be abstract', function () {
          expect(viewstate.abstract).toBe(undefined);
        });

        it('Should have templateUrl', function () {
          expect(viewstate.templateUrl).toBe('modules/games/client/views/view-game.client.view.html');
        });
      });

      describe('Create Route', function () {
        var createstate,
          GamesController,
          mockGame;

        beforeEach(inject(function ($controller, $state, $templateCache) {
          createstate = $state.get('games.create');
          $templateCache.put('modules/games/client/views/form-game.client.view.html', '');

          // create mock Game
          mockGame = new GamesService();

          // Initialize Controller
          GamesController = $controller('GamesController as vm', {
            $scope: $scope,
            gameResolve: mockGame
          });
        }));

        it('Should have the correct URL', function () {
          expect(createstate.url).toEqual('/create');
        });

        it('Should have a resolve function', function () {
          expect(typeof createstate.resolve).toEqual('object');
          expect(typeof createstate.resolve.gameResolve).toEqual('function');
        });

        it('should respond to URL', inject(function ($state) {
          expect($state.href(createstate)).toEqual('/games/create');
        }));

        it('should attach an Game to the controller scope', function () {
          expect($scope.vm.game._id).toBe(mockGame._id);
          expect($scope.vm.game._id).toBe(undefined);
        });

        it('Should not be abstract', function () {
          expect(createstate.abstract).toBe(undefined);
        });

        it('Should have templateUrl', function () {
          expect(createstate.templateUrl).toBe('modules/games/client/views/form-game.client.view.html');
        });
      });

      describe('Edit Route', function () {
        var editstate,
          GamesController,
          mockGame;

        beforeEach(inject(function ($controller, $state, $templateCache) {
          editstate = $state.get('games.edit');
          $templateCache.put('modules/games/client/views/form-game.client.view.html', '');

          // create mock Game
          mockGame = new GamesService({
            _id: '525a8422f6d0f87f0e407a33',
            name: 'Game Name'
          });

          // Initialize Controller
          GamesController = $controller('GamesController as vm', {
            $scope: $scope,
            gameResolve: mockGame
          });
        }));

        it('Should have the correct URL', function () {
          expect(editstate.url).toEqual('/:gameId/edit');
        });

        it('Should have a resolve function', function () {
          expect(typeof editstate.resolve).toEqual('object');
          expect(typeof editstate.resolve.gameResolve).toEqual('function');
        });

        it('should respond to URL', inject(function ($state) {
          expect($state.href(editstate, {
            gameId: 1
          })).toEqual('/games/1/edit');
        }));

        it('should attach an Game to the controller scope', function () {
          expect($scope.vm.game._id).toBe(mockGame._id);
        });

        it('Should not be abstract', function () {
          expect(editstate.abstract).toBe(undefined);
        });

        it('Should have templateUrl', function () {
          expect(editstate.templateUrl).toBe('modules/games/client/views/form-game.client.view.html');
        });

        xit('Should go to unauthorized route', function () {

        });
      });

    });
  });
}());