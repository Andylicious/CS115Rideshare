// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

  .state('app.search', {
    url: '/search',
    views: {
      'menuContent': {
        templateUrl: 'templates/search.html'
      }
    }
  })
  .state('app.resultsView', {
    url: '/search',
    views: {
      'menuContent': {
        templateUrl: 'templates/resultsView.html',
        controller: 'ResultsCtrl'
      }
    }
  })
    .state('app.courseView', {
    url: '/search',
    views: {
      'menuContent': {
        templateUrl: 'templates/courseView.html',
        controller: 'courseViewCtrl'
      }
    }
  })

        .state('app.bookView', {
    url: '/search',
    views: {
      'menuContent': {
        templateUrl: 'templates/bookView.html',
        controller: 'bookViewCtrl'
      }
    }
  })

  .state('app.bookmark', {
      url: '/bookmark',
      views: {
        'menuContent': {
          templateUrl: 'templates/bookmark.html',
          controller: 'bookmarksCtrl'
        }
      }
    })
			  .state('app.classSchedule', {
      url: '/classSchedule',
      views: {
        'menuContent': {
          templateUrl: 'templates/classSchedule.html'
        }
      }
    })
			  .state('app.tue-modal', {
      url: '/tue-modal',
      views: {
        'menuContent': {
          templateUrl: 'templates/tue-modal.html'
        }
      }
    })
			  .state('app.wed-modal', {
      url: '/wed-modal',
      views: {
        'menuContent': {
          templateUrl: 'templates/wed-modal.html'
        }
      }
    })
			  .state('app.thu-modal', {
      url: '/thu-modal',
      views: {
        'menuContent': {
          templateUrl: 'templates/thu-modal.html'
        }
      }
    })
			  .state('app.fri-modal', {
      url: '/fri-modal',
      views: {
        'menuContent': {
          templateUrl: 'templates/fri-modal.html'
        }
      }
    });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/search');
});
