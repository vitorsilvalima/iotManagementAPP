// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('iotApp', ['ionic','ngCordova','iotApp.controllers','iotApp.services'])
.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
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

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
  // setup an abstract state for the tabs directive
    .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })

  // E
   .state('tab.setup', {
      url: '/setup',
      views: {
        'tab-setup': {
          templateUrl: 'templates/tab-setup.html',
          controller: 'setupController'
        }
      }
    })
    .state('tab.devices', {
      url: '/devices',
      views: {
        'tab-devices': {
          templateUrl: 'templates/tab-devices.html',
          controller: 'deviceController'
        }
      }
    })
   .state('tab.maps', {
      url: '/maps',
      views: {
        'tab-maps': {
          templateUrl: 'templates/tab-maps.html',
          controller: 'mapsController'
        }
      }
    });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/setup');

});
