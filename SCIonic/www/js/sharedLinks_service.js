/* sharedLinks hold the links for each individual classes
 * we grab the links from the initial post request, and we send
 * the individual links when resultsView -> courseView
 */
angular.module('starter.controllers').service('sharedLinks',[function(){
  var course_link = "http://crossorigin.me/https://pisa.ucsc.edu/class_search/";
  return {
    get_course_link: function() {
            return course_link;
        },
    set_course_link: function(value){
            course_link += value
           
    }

      }

}]);