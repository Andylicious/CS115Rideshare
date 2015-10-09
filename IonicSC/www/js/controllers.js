


angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $http,$ionicModal, $timeout, $state) {

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
    
  /*  var request = $http({
      method: "POST",
      url: "http://crossorigin.me/https://pisa.ucsc.edu/class_search/",
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      data: 'binds[:term]:2158' 

    })

    request.success(
      function(html){
        console.log(html);
      }
      )
*/
var action = "results";
var term_bind = "2158";
var reg_bind = "O";
var sub_bind = "";
var cat_op_bind = "=";
var cat_nbr_bind = "";
var title_bind = '';
var instr_name_bind = "=";
var instr_bind = "";
var ge_bind = "";
var crse_op_bind = "=";
var crse_from_bind = "";
var crse_to_bind = "";
var crse_exact_bind = "";
var days_bind = "";
var times_bind = "";
var acad_bind = "";

    var xsrf = {action, term_bind, reg_bind, sub_bind, cat_op_bind, cat_nbr_bind, title_bind, instr_name_bind, 
                instr_bind, ge_bind, crse_op_bind, crse_from_bind,crse_to_bind,crse_exact_bind,days_bind,
                times_bind,acad_bind };


    var test = {action: 'results'};
    var request = $http({
      method: 'POST',
      url: 'https://pisa.ucsc.edu/class_search/index.php',
      headers: {'Content-Type': 'application/x-www-form-urlencoded'},
      Host:'pisa.ucsc.edu',
      Origin:'https://pisa.ucsc.edu',
      Referer:'https://pisa.ucsc.edu/class_search/',

      data: 'action=' + action + '&' + 
            encodeURIComponent('binds[:term]') +'=' + encodeURIComponent(term_bind) 
            +'&' + encodeURIComponent('binds[:reg_status]') + '=' + encodeURIComponent(reg_bind) 
            +'&'+encodeURIComponent('binds[:subject]') + '=' + sub_bind 
            +'&'+encodeURIComponent('binds[:catalog_nbr_op]') + '='+ encodeURIComponent(cat_op_bind) 
            +'&'+encodeURIComponent('binds[:catalog_nbr]') + '='
            +'&'+encodeURIComponent('binds[:title]') + '='
            +'&'+encodeURIComponent('binds[:instr_name_op]') + '='+ encodeURIComponent(instr_name_bind) 
            +'&'+encodeURIComponent('binds[:instructor]') 
            +'&'+encodeURIComponent('binds[:ge]')
            +'&'+encodeURIComponent('binds[:crse_units_op]') + '='+ encodeURIComponent(crse_op_bind) 
            +'&'+encodeURIComponent('binds[:crse_units_from]') + '='
            +'&'+encodeURIComponent('binds[:crse_units_to]') 
            +'&'+encodeURIComponent('binds[:crse_units_exact]') 
            +'&'+encodeURIComponent('binds[:days]') + '='
            +'&'+encodeURIComponent('binds[:times]') + '='
            +'&'+encodeURIComponent('binds[:acad_career]') + '='
 
    })

request.success(
  function(html){
    console.log(html);
  })

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



