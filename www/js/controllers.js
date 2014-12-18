angular.module('infoSus.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {
  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('GruposCtrl', function($scope, $http) {
    $scope.grupos = null;
    $http.get('data/grupos.json').success(function(data) {
        $scope.grupos = data;
        window.grupos = data;
    });
  
})

.controller('SubGruposCtrl', function($scope, $http, $stateParams) {
    $scope.subGrupos = null;
    $scope.nomeGrupo = null;
    $scope.grupoId = $stateParams.grupoId;
      $http.get('data/grupos.json').success(function(data) {
          $scope.subGrupos = data[$stateParams.grupoId].sub_grupos;
          $scope.nomeGrupo = data[$stateParams.grupoId].no_grupo;
      });
})

.controller('FormasCtrl', function($scope, $http, $stateParams) {
    $scope.grupoId = $stateParams.grupoId;
    $scope.subGrupoId = $stateParams.subGrupoId;
    $scope.formas = null;
    $scope.nomeSubGrupo = null;
      $http.get('data/grupos.json').success(function(data) {
          $scope.formas = data[$stateParams.grupoId].sub_grupos[$stateParams.subGrupoId].formas_organizacao;
          $scope.nomeSubGrupo = data[$stateParams.grupoId].sub_grupos[$stateParams.subGrupoId].no_sub_grupo;
      });
})

.controller('ProcedimentosCtrl', function($scope, $http, $filter, $stateParams) {
    filtro = {};
    $scope.nomeForma = null;
    $scope.procedimentos = [];
    $http.get('data/grupos.json').success(function(data) {
          $scope.nomeForma = data[$stateParams.grupoId].sub_grupos[$stateParams.subGrupoId].formas_organizacao[$stateParams.formaId].no_forma_organizacao;
          filtro.co_grupo = data[$stateParams.grupoId].co_grupo;
          filtro.co_sub_grupo = data[$stateParams.grupoId].sub_grupos[$stateParams.subGrupoId].co_sub_grupo;
          filtro.co_forma_organizacao = data[$stateParams.grupoId].sub_grupos[$stateParams.subGrupoId].formas_organizacao[$stateParams.formaId].co_forma_organizacao;
          $scope.procedimentos = $filter('filter')(window.PROCEDIMENTOS, filtro, true);
    });
      
})

.controller('ProcedimentoCtrl', function($scope, $http, $filter, $stateParams) {
    filtro = {};
    $scope.proc = {};
    $http.get('lib/procs/' + $stateParams.coProcedimento + '.json').success(function(data) {
      $scope.proc = data[0]          
    });
      
})

.controller('BuscaCtrl', function($scope, $http, $stateParams, $filter, $ionicScrollDelegate) {
    $scope.procedimentos = window.PROCEDIMENTOS;
    $scope.procsFiltro = $filter('filter')(window.PROCEDIMENTOS, $scope.textoBusca);
    $scope.numeroItensMostrar = 20;

    $scope.adicionaMaisItens = function() {
        $scope.procsFiltro = $filter('filter')(window.PROCEDIMENTOS, $scope.textoBusca);
        if ($scope.procsFiltro.length > $scope.numeroItensMostrar) {
          $scope.numeroItensMostrar += 20; 
        }
        $scope.$broadcast('scroll.infiniteScrollComplete');
    };

    $scope.temMaisDados = function() {
      $scope.procsFiltro = $filter('filter')(window.PROCEDIMENTOS, $scope.textoBusca);
      return $scope.procsFiltro.length > $scope.numeroItensMostrar;
    };

    $scope.limpaBusca = function() {
      $scope.numeroItensMostrar = 20;
      $scope.textoBusca = '';
      $ionicScrollDelegate.scrollTop(true);
    };

    $scope.resetNumItens = function() {
      $scope.numeroItensMostrar = 20;
      $ionicScrollDelegate.scrollTop(true);
    };

});
