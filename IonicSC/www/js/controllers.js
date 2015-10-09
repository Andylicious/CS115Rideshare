


angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout, $state) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});
  $scope.postRequestToPisa = function(vm){
    console.log("POST REQUEST STUFF GOES HERE");

    //NOTE: VM.PISA CAME FROM SEARCH.CONTROLLERS.JS WHICH CAME FROM PISAPARSER.SERVICE.JS
    console.log(vm.pisa);
    //console.log(vm.pisa.length);

    //collect values given by the searchpage
    var term_select = document.getElementById( "term_select" );
    var term_select_index = term_select.options[ term_select.selectedIndex ].value;
   // alert( yourSelect.options[ yourSelect.selectedIndex ].value )

    alert(vm.pisa.term_map.term_string[term_select_index] + " with id = " + vm.pisa.term_map.term_id[term_select_index])
    

    $state.go('app.playlists');


  };


/*
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
  };*/
}
)

.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
});



