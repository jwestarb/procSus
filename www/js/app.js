angular.module('infoSus', ['ionic', 'infoSus.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
      url: "/app",
      abstract: true,
      templateUrl: "templates/menu.html",
      controller: 'AppCtrl'
    })

    .state('app.busca', {
      url: "/busca",
      views: {
        'menuContent' :{
          templateUrl: "templates/busca.html",
          controller: 'BuscaCtrl'
        }
      }
    })


    .state('app.grupos', {
      url: "/grupos",
      views: {
        'menuContent' :{
          templateUrl: "templates/grupos.html",
          controller: 'GruposCtrl'
        }
      }
    })

    .state('app.subgrupos', {
      url: "/subgrupos/:grupoId",
      views: {
        'menuContent' :{
          templateUrl: "templates/subgrupos.html",
          controller: 'SubGruposCtrl'
        }
      }
    })

    .state('app.formas', {
      url: "/formas/:grupoId/:subGrupoId",
      views: {
        'menuContent' :{
          templateUrl: "templates/formas.html",
          controller: 'FormasCtrl'
        }
      }
    })

    .state('app.procedimentos', {
      url: "/procedimentos/:grupoId/:subGrupoId/:formaId",
      views: {
        'menuContent' :{
          templateUrl: "templates/procedimentos.html",
          controller: 'ProcedimentosCtrl'
        }
      }
    })

    .state('app.procedimento', {
      url: "/procedimento/:coProcedimento",
      views: {
        'menuContent' :{
          templateUrl: "templates/procedimento.html",
          controller: 'ProcedimentoCtrl'
        }
      }
    });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/grupos');
});

