


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
    //console.log(vm.pisa);
    //console.log(vm.pisa.length);

    //collect values given by the searchpage
    var term_select = document.getElementById( "term_select" );
    var term_select_index = term_select.options[ term_select.selectedIndex ].value;
   // alert( yourSelect.options[ yourSelect.selectedIndex ].value )

    alert(vm.pisa.term_map.term_string[term_select_index] + " with id = " + vm.pisa.term_map.term_id[term_select_index])

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
   var class_data = []
    request.success(
      function(html){
        //console.log(html);
        var tmp = document.implementation.createHTMLDocument();
        tmp.body.innerHTML = html;

        var results = tmp.getElementById('result_table');
        
        //var results_even = results.getElementsByClassName('even')[0];
        var results_tr = results.getElementsByTagName('tr');
        //console.log(results_tr[1].getElementsByTagName('td')[0].innerText);
//        console.log(results_tr[1].getElementsByTagName('td')[1].innerText);
        
        var course_map;
        var course_id, course_name_short, course_name_long, course_type, course_date, course_time, course_prof;
        var course_cap, course_enrolled, course_avail, course_location;
        for(var i = 1; i < results_tr.length; i++){
          course_id = results_tr[i].getElementsByTagName('td')[0].innerText;
          course_name_short = results_tr[i].getElementsByTagName('td')[1].innerText;
          course_name_long = results_tr[i].getElementsByTagName('td')[2].innerText;
          course_type = results_tr[i].getElementsByTagName('td')[3].innerText;
          course_date = results_tr[i].getElementsByTagName('td')[4].innerText;
          course_time = results_tr[i].getElementsByTagName('td')[5].innerText;
          course_prof = results_tr[i].getElementsByTagName('td')[6].innerText;
          course_cap = results_tr[i].getElementsByTagName('td')[8].innerText;
          course_enrolled = results_tr[i].getElementsByTagName('td')[9].innerText;
          course_avail = results_tr[i].getElementsByTagName('td')[10].innerText;
          course_location = results_tr[i].getElementsByTagName('td')[11].innerText;
          course_map = {course_name_short, course_name_long, course_id, course_type, course_date, course_time, course_prof, course_cap,
          course_enrolled, course_avail, course_location};
          class_data.push(course_map);
          //console.log("----END OF CLASS---")
        }
        console.log(class_data);
        //class_data.course_map.courseid[0]
        //class_data.course_map.course_name_short[3] = AMS 7 - L
  })

           /*  var elm = document.getElementById('class_list'),
                   df = document.createDocumentFragment();
                   for (var i = 0; i < 5; i++) {
                     var option = document.createElement('option');
                     option.value = i;
                     option.appendChild(document.createTextNode("here is where i put"));
                     df.appendChild(option);
                   }
                elm.appendChild(df);*/
                $scope.groups = [];
  
                $scope.groups = [
                  { name: 'Bubbles', id: 3, items: [{ subName: 'SubBubbles1', subId: '1-1' }]},
                  { name: 'Group1', id: 2, items: [{ subName: 'SubGrup1', subId: '1-1' }]},
                  { name: 'Group1', id: 1, items: [{ subName: 'SubGrup1', subId: '1-1' }]},
                ];
                
                for(var i = 0; i < class_data.length; i++){
                    //here's where i think where we can propagate scope.groups 
                }

                
                /*
                 * if given group is the selected group, deselect it
                 * else, select the given group
                 */
                $scope.toggleGroup = function(group) {
                  if ($scope.isGroupShown(group)) {
                    $scope.shownGroup = null;
                  } else {
                    $scope.shownGroup = group;
                  }
                };
                $scope.isGroupShown = function(group) {
                  return $scope.shownGroup === group;
                };
                
                  
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

  console.log("Here is my class data " + $scope.class_data);


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



