/* global angular, document, window */
'use strict';

angular.module('starter.controllers', [])

.service('sharedProperties', function() {
    var action = "results";
    var term_bind = "2158"; 
    var reg_bind = "0"; 
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
    
    return {
        get_term_bind: function() {
            return term_bind;
        },
        get_action: function() {
            return action;
        },
        get_term_bind: function() {
           return term_bind;
        },
        get_reg_bind: function() {
           return reg_bind;
        },
        get_sub_bind: function() {
           return sub_bind;
        },
        get_cat_op_bind: function() {
           return cat_op_bind;
        },
        get_cat_nbr_bind: function() {
           return cat_nbr_bind;
        },
        get_title_bind: function() {
           return title_bind;
        },
        get_instr_name_bind: function() {
           return instr_name_bind;
        },
        get_instr_bind: function() {
           return instr_bind;
        },
        get_ge_bind: function() {
           return ge_bind;
        },
        get_crse_op_bind: function() {
           return crse_op_bind;
        },
        get_crse_from_bind: function() {
           return crse_from_bind;
        },
        get_crse_to_bind: function() {
           return crse_to_bind;
        },
        get_crse_exact_bind: function() {
           return crse_exact_bind;
        },
        get_days_bind: function() {
           return days_bind;
        },
        get_times_bind: function() {
            return times_bind;
        },
        get_acad_bind: function() {
            return acad_bind;
        },
        set_action: function(value) {
            action = value;
        },
        set_term_bind: function(value) {
            term_bind = value;
        },
        set_reg_bind: function(value) {
            reg_bind = value;
        },
        set_sub_bind: function(value) {
            sub_bind = value;
        },
        set_cat_op_bind: function(value) {
            cat_op_bind = value;
        },
        set_cat_nbr_bind: function(value) {
            cat_nbr_bind = value;
        },
        set_title_bind: function(value) {
            title_bind = value;
        },
        set_instr_name_bind: function(value) {
            instr_name_bind = value;
        },
        set_instr_bind: function(value) {
            instr_bind = value;
        },
        set_ge_bind: function(value) {
            ge_bind = value;
        },
        set_crse_op_bind: function(value) {
            crse_op_bind = value;
        },
        set_crse_from_bind: function(value) {
            crse_from_bind = value;
        },
        set_crse_to_bind: function(value) {
            crse_to_bind = value;
        },
        set_crse_exact_bind: function(value) {
            crse_exact_bind = value;
        },
        set_days_bind: function(value) {
            days_bind = value;
        },
        set_times_bind: function(value) {
            times_bind = value;
        },
        set_acad_bind: function(value) {
            acad_bind = value;
        }

    }
})

.service('sharedLinks',function(){
  console.log("Placeholder")
  var course_link = "http://crossorigin.me/https://pisa.ucsc.edu/class_search/";
  return {
    get_course_link: function() {
            return course_link;
        },
    set_course_link: function(value){
            course_link += value
    }

      }

})
.controller('AppCtrl', function($scope, $ionicModal, $ionicPopover, $timeout) {
    // Form data for the login modal
    $scope.loginData = {};
    $scope.isExpanded = false;
    $scope.hasHeaderFabLeft = false;
    $scope.hasHeaderFabRight = false;

    var navIcons = document.getElementsByClassName('ion-navicon');
    for (var i = 0; i < navIcons.length; i++) {
        navIcons.addEventListener('click', function() {
            this.classList.toggle('active');
        });
    }

    ////////////////////////////////////////
    // Layout Methods
    ////////////////////////////////////////

    $scope.hideNavBar = function() {
        document.getElementsByTagName('ion-nav-bar')[0].style.display = 'none';
    };

    $scope.showNavBar = function() {
        document.getElementsByTagName('ion-nav-bar')[0].style.display = 'block';
    };

    $scope.noHeader = function() {
        var content = document.getElementsByTagName('ion-content');
        for (var i = 0; i < content.length; i++) {
            if (content[i].classList.contains('has-header')) {
                content[i].classList.toggle('has-header');
            }
        }
    };

    $scope.setExpanded = function(bool) {
        $scope.isExpanded = bool;
    };

    $scope.setHeaderFab = function(location) {
        var hasHeaderFabLeft = false;
        var hasHeaderFabRight = false;

        switch (location) {
            case 'left':
                hasHeaderFabLeft = true;
                break;
            case 'right':
                hasHeaderFabRight = true;
                break;
        }

        $scope.hasHeaderFabLeft = hasHeaderFabLeft;
        $scope.hasHeaderFabRight = hasHeaderFabRight;
    };

    $scope.hasHeader = function() {
        var content = document.getElementsByTagName('ion-content');
        for (var i = 0; i < content.length; i++) {
            if (!content[i].classList.contains('has-header')) {
                content[i].classList.toggle('has-header');
            }
        }

    };

    $scope.hideHeader = function() {
        $scope.hideNavBar();
        $scope.noHeader();
    };

    $scope.showHeader = function() {
        $scope.showNavBar();
        $scope.hasHeader();
    };

    $scope.clearFabs = function() {
        var fabs = document.getElementsByClassName('button-fab');
        if (fabs.length && fabs.length > 1) {
            fabs[0].remove();
        }
    };
})

.directive('ngLastRepeat', function ($timeout) {
    return {
        restrict: 'A',
        link: function (scope, element, attr) {
            if (scope.$last === true) {
                $timeout(function () {
                    scope.$emit('ngLastRepeat'+ (attr.ngLastRepeat ? '.'+attr.ngLastRepeat : ''));
                });
            }
        }
    };
})
.controller('FriendsCtrl', function($scope, $state, $http,$stateParams, $timeout, ionicMaterialInk, ionicMaterialMotion,sharedProperties, sharedLinks) {
     

  $scope.course_func = function(vm){
    sharedLinks.set_course_link(vm);
    $state.go('app.profile');
  }
    // Set Header
    $scope.$parent.showHeader();
    $scope.$parent.clearFabs();
    //$scope.$parent.setHeaderFab('left');

    // Delay expansion
    $timeout(function() {
        $scope.isExpanded = true;
        $scope.$parent.setExpanded(true);

    }, 300);
// Animate list on this event
    $scope.$on('ngLastRepeat.mylist',function(e) {
        $timeout(function(){
            ionicMaterialMotion.fadeSlideInRight();
            ionicMaterialInk.displayEffect();
          },0); // No timeout delay necessary.
    });
    // Set Motion
   // ionicMaterialMotion.fadeSlideInRight();

    // Set Ink
   // ionicMaterialInk.displayEffect();

    var request = $http({
      method: 'POST',
      url: 'https://pisa.ucsc.edu/class_search/index.php',
      headers: {'Content-Type': 'application/x-www-form-urlencoded'},
      Host:'pisa.ucsc.edu',
      Origin:'https://pisa.ucsc.edu',
      Referer:'https://pisa.ucsc.edu/class_search/',

      data: 'action=' + sharedProperties.get_action() + '&' + 
            encodeURIComponent('binds[:term]') +'=' + encodeURIComponent(sharedProperties.get_term_bind()) 
            +'&' + encodeURIComponent('binds[:reg_status]') + '=' + encodeURIComponent(sharedProperties.get_reg_bind()) 
            +'&'+encodeURIComponent('binds[:subject]') + '=' + sharedProperties.get_sub_bind()
            +'&'+encodeURIComponent('binds[:catalog_nbr_op]') + '='+ encodeURIComponent(sharedProperties.get_cat_op_bind()) 
            +'&'+encodeURIComponent('binds[:catalog_nbr]') + '='
            +'&'+encodeURIComponent('binds[:title]') + '='
            +'&'+encodeURIComponent('binds[:instr_name_op]') + '='+ encodeURIComponent(sharedProperties.get_instr_name_bind()) 
            +'&'+encodeURIComponent('binds[:instructor]') 
            +'&'+encodeURIComponent('binds[:ge]') + '=' +encodeURIComponent(sharedProperties.get_ge_bind())
            +'&'+encodeURIComponent('binds[:crse_units_op]') + '='+ encodeURIComponent(sharedProperties.get_crse_op_bind()) 
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
        var course_links;
        var course_desc;

       // console.log(results_tr[3].getElementsByTagName('a')[0].getAttribute('href'));
        for(var i = 1; i < results_tr.length; i++){
          course_links = results_tr[i].getElementsByTagName('a')[0].getAttribute('href');


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
          course_map = {course_links, course_name_short, course_name_long, course_id, course_type, course_date, course_time, course_prof, course_cap,
          course_enrolled, course_avail, course_location};
          class_data.push(course_map);
          //console.log("----END OF CLASS---")


        }
          

                $scope.groups = [];
                for(var i = 0; i < class_data.length; i++){
                    //here's where i think where we can propagate scope.groups 
                    var check = {name: class_data[i].course_name_short, 
                                  prof: class_data[i].course_prof, 
                                  time: class_data[i].course_time, 
                                  link: class_data[i].course_links,
                                  id: i, items:[{subName: 'subbles', subId:'1-2'}]}
                    $scope.groups.push(check);
                }

  // console.log($scope.groups);
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
                
  
  })
  


})


.controller('ProfileCtrl', function($scope, $stateParams,$http, $timeout, ionicMaterialMotion, ionicMaterialInk, sharedLinks) {
 // Set Header
    $scope.$parent.showHeader();
    $scope.$parent.clearFabs();
   // $scope.$parent.setHeaderFab('left');

    // Delay expansion
    $timeout(function() {
        $scope.isExpanded = true;
        $scope.$parent.setExpanded(true);
    }, 300);

    // Set Motion
    ionicMaterialMotion.fadeSlideInRight();

    // Set Ink
    ionicMaterialInk.displayEffect();

    console.log(sharedLinks.get_course_link())

    $http.get(sharedLinks.get_course_link())
                            .then(function(response){

                              //john: all work goes in here
                              //john ALL THE WORK GOES FUCKING HERE!!! 

                                var tmp = document.implementation.createHTMLDocument();
                                tmp.body.innerHTML = response.data;
                                console.log("tmp.body = " + tmp.body.innerHTML);

                                //var detail_t = tmp.getElementById('detail_table')
                    //detail_t.getElementbyTagName('tr')

                                //at the very end you want
                                var desc = "" //a very long string
                                var open_or_close ="" //a simple string that indicates if its open or closed
                                var discussion_SECTIONS = "" //get all the discussion sections 
                                //and possibly their related enrollment, capacity, status 

                                



                            });
})



.controller('ActivityCtrl', function($scope, $stateParams, $ionicPopover, $timeout, $ionicModal, ionicMaterialMotion, ionicMaterialInk,sharedProperties) {
    $scope.$parent.showHeader();
    $scope.$parent.clearFabs();
    $scope.isExpanded = true;
    $scope.$parent.setExpanded(true);
    $scope.$parent.setHeaderFab('right');
    $timeout(function() {
        ionicMaterialMotion.fadeSlideIn({
            selector: '.animate-fade-slide-in .item'
        });
    }, 200);


$ionicModal.fromTemplateUrl('term-modal.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.modal_term = modal;
  });

  $ionicModal.fromTemplateUrl('subject-modal.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.modal_subject = modal;
  });

    $ionicModal.fromTemplateUrl('status-modal.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.modal_status = modal;
  });

    $ionicModal.fromTemplateUrl('gened-modal.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.modal_gened = modal;
  });



  $scope.openModal = function(vm) {
    

   if(vm == "term-modal.html"){
    $scope.modal_term.show();
   }else if (vm == "subject-modal.html"){
    $scope.modal_subject.show();
   }else if (vm == "status-modal.html"){
    $scope.modal_status.show();
   }else if(vm == "gened-modal.html"){
    $scope.modal_gened.show();
   }

    
  };
  $scope.closeModal = function() {
    $scope.modal.hide();
  };
  //Cleanup the modal when we're done with it!
  $scope.$on('$destroy', function() {
    $scope.modal_term.remove();
  });
  // Execute action on hide modal
  $scope.$on('modal.hidden', function() {
 
  });
  // Execute action on remove modal
  $scope.$on('modal.removed', function() {
    // Execute action
  });

var term_line = " 2015 fall Quarter";
$scope.term_button = function(vm,classes){

        var term_select = document.getElementById( "term_select" );
        var term_index = 0;

       for(var i = 0; i < vm.term_string.length; i++){
         if(vm.term_string[i] == classes){
            term_index = i;
             $scope.modal_term.hide();
            break;
         }
       }
   document.getElementById("termid").innerHTML = vm.term_string[term_index];
      
          sharedProperties.set_term_bind(vm.term_id[term_index]);
       
       console.log(term_index);
       $scope.modal_term.hide();
}


$scope.status_button = function(vm,classes){
        var status_select = document.getElementById( "status_select" );
        var status_index = 0;

       for(var i = 0; i < vm.reg_status_string.length; i++){
         if(vm.reg_status_string[i] == classes){
            status_index = i;
             $scope.modal_status.hide();
            break;
         }
       }
      document.getElementById("statusid").innerHTML = vm.reg_status_string[status_index];
         sharedProperties.set_reg_bind(vm.reg_status_id[status_index]);
       console.log(status_index);
       $scope.modal_status.hide();
}
$scope.subject_button = function(vm,classes){
        var subject_select = document.getElementById( "subject_select" );
        var subject_index = 0;

       for(var i = 0; i < vm.subject_string.length; i++){
         if(vm.subject_string[i] == classes){
            subject_index = i;
             $scope.modal_subject.hide();
            break;
         }
       }
       document.getElementById("subjectid").innerHTML = vm.subject_string[subject_index];
       sharedProperties.set_sub_bind(vm.subject_id[subject_index]);
       console.log(subject_index);
       $scope.modal_subject.hide();
}
$scope.gened_button = function(vm,classes){
        var gened_select = document.getElementById( "gened_select" );
        var gened_index = 0;

       for(var i = 0; i < vm.ge_string.length; i++){
         if(vm.ge_string[i] == classes){
            gened_index = i;
             $scope.modal_gened.hide();
            break;
         }
       }
       document.getElementById("geid").innerHTML = vm.ge_string[gened_index];
       sharedProperties.set_ge_bind(vm.ge_id[ge_index]);
       console.log(gened_index);
       $scope.modal_gened.hide();
}

    // Activate ink for controller
    ionicMaterialInk.displayEffect();
})

