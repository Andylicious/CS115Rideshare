/* SharedProperties serve to hold all of the relevant data needed for
 * the post request. search.html will propagate the variables, and 
 * the nodejs server will receive them and send them into resultsView.
 *
 */
angular.module('starter.controllers').service('courseData', [function($ionicLoading) {

    var tmp_course;
    var bookmarks = [];

    return {
        get_tmp_course: function() {
            return tmp_course;
        },
        set_tmp_course: function(value) {
            tmp_course = value;
        },
        get_bookmarks: function(){
            return bookmarks;
        },
        push_bookmarks: function(value){
 
            if(bookmarks.indexOf(tmp_course)!=-1){
             
            }else{
                bookmarks.push(tmp_course);
            }
            
        },
        get_bookmarks_size: function(){
            return bookmarks.length;
        }

    }
}]);
