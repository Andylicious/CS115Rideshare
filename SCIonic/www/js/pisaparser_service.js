/* the intial "control hub" for getting the pisa data drop down menu
 * this is pretty much completed and doesn't need any other extra work
 *
 */

(function() {

    angular.module('starter.controllers').factory('PisaService', ['$http', '$q', PisaService])


    function PisaService ($http, $q) {

        return {

            getPisaFields: function () {

                var parsePisa = function (response) {

                    var tmp = document.implementation.createHTMLDocument();
                    tmp.body.innerHTML = response.data;
                    //console.log("tmp.body = " + tmp.body.innerHTML);
                    

                    var term = tmp.getElementById('term_dropdown');
                    var session = tmp.getElementById('Session');
                    var reg_status = tmp.getElementById('reg_status');
                    var subject = tmp.getElementById('subject');
                    var ge = tmp.getElementById('ge');
                    var course_number = tmp.getElementById('catalog_nbr');
                    var title = tmp.getElementById('title');
                    var instructor = tmp.getElementById('instructor');
                    //course units
                    var days = tmp.getElementById('Days');
                    var times = tmp.getElementById('Times');
                    var acad_career = tmp.getElementById('acad_career');


                    //console.log("Term = " + term + " With length = " + term.length);

                    var term_id = [];
                    var session_id = [];
                    var reg_status_id = [];
                    var subject_id = [];
                    var ge_id = [];
                    var course_number_id = [];
                    var title_id = [];
                    var instructor_id = [];
                    var days_id = [];
                    var times_id = [];
                    var acad_career_id = [];
                    

                    var term_string = [];
                    var session_string = [];
                    var reg_status_string = [];
                    var subject_string = [];
                    var ge_string = [];
                    var course_number_string = [];
                    var title_string = [];
                    var instructor_string = [];
                    var days_string = [];
                    var times_string = [];
                    var acad_career_string = [];

                    for(var i = 0; i < term.length; i++){
                        var tmp_term = term[i];
                        term_id.push(tmp_term.value);
                        term_string.push(tmp_term.innerText);
                    }

                    for (var i = 0; i < session.length; i++){
                        var tmp_session = session[i];
                        session_id.push(tmp_session.value);
                        session_string.push(tmp_session.innerText);
                    }

                     for (var i = 0; i < reg_status.length; i++){
                        var tmp_reg_status = reg_status[i];
                        reg_status_id.push(tmp_reg_status.value);
                        reg_status_string.push(tmp_reg_status.innerText);
                    }

                     for (var i = 0; i < subject.length; i++){
                        var tmp_subject = subject[i];
                        subject_id.push(tmp_subject.value);
                        subject_string.push(tmp_subject.innerText);
                    }
                    
                     for (var i = 0; i < ge.length; i++){
                        var tmp_ge = ge[i];
                        ge_id.push(tmp_ge.value);
                        ge_string.push(tmp_ge.innerText);
                    }
                    
                     for (var i = 0; i < course_number.length; i++){
                        var tmp_course_number = course_number[i];
                        course_number_id.push(tmp_course_number.value);
                        course_number_string.push(tmp_course_number.innerText);
                    }
                    
                     for (var i = 0; i < title.length; i++){
                        var tmp_title = title[i];
                        title_id.push(tmp_title.value);
                        title_string.push(tmp_title.innerText);
                    }

                     for (var i = 0; i < instructor.length; i++){
                        var tmp_instructor = instructor[i];
                        instructor_id.push(tmp_instructor.value);
                        instructor_string.push(tmp_instructor.innerText);
                    }
                    
                     for (var i = 0; i < days.length; i++){
                        var tmp_days = days[i];
                        days_id.push(tmp_days.value);
                        days_string.push(tmp_days.innerText);
                    }
                    
                     for (var i = 0; i < times.length; i++){
                        var tmp_times = times[i];
                        times_id.push(tmp_times.value);
                        times_string.push(tmp_times.innerText);
                    }
                    
                     for (var i = 0; i < acad_career.length; i++){
                        var tmp_acad_career = acad_career[i];
                        acad_career_id.push(tmp_acad_career.value);
                        acad_career_string.push(tmp_acad_career.innerText);
                    }
   
                    var term_map = {term_string, term_id};
                    var session_map = {session_string, session_id};
                    var reg_status_map = {reg_status_string, reg_status_id};
                    var subject_map = {subject_string, subject_id};   
                    var ge_map = {ge_string, ge_id};
                    var course_number_map = {course_number_string, course_number_id};
                    var title_map = {title_string,title_id};
                    var instructor_map = {instructor_string, instructor_id};
                    var days_map = {days_string, days_id};
                    var times_map = {times_string, times_id};
                    var acad_career_map = {acad_career_string, acad_career_id};


                    var pisa_results = { term_map,session_map,reg_status_map,subject_map,ge_map,course_number_map,title_map,
                                        instructor_map,days_map,times_map,acad_career_map };

                    return pisa_results;
                }


                return $http.get('http://crossorigin.me/https://pisa.ucsc.edu/class_search/')
                            .then(function(response){
                                return parsePisa(response);
                            });
            }

            

        }

    }
})();