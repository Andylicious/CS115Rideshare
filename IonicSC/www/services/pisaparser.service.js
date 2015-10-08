(function() {

    angular.module('starter').factory('PisaService', ['$http', '$q', PisaService])


    function PisaService ($http, $q) {

        return {

            login: function (username, password) {
                var request = {
                    method: 'POST',
                    url: 'http://crossorigin.me/https://pisa.ucsc.edu/class_search/',

                };

                /*return $http(request).then(function(response){
                    var deferred = $q.defer();

                    // this header is only present after we have logged in successfully
                    if (response.headers('x-xrds-location')) {
                        deferred.resolve();
                    }
                    else {
                        deferred.reject();
                    } 

                    return deferred.promise;   
                });*/
            },

            getPisaFields: function () {

                var parsePisa = function (response) {

                    var tmp = document.implementation.createHTMLDocument();
                    tmp.body.innerHTML = response.data;
                    //console.log("tmp.body = " + tmp.body.innerHTML);
                    

                    var term = tmp.getElementById('term_dropdown');
                    var session = tmp.getElementById('Session');
                    var reg_status = tmp.getElementById('reg_status');
                    var subject = tmp.getElementById('subject');

                    //console.log("Term = " + term + " With length = " + term.length);

                    var term_id = [];
                    var session_id = [];
                    var reg_status_id = [];
                    var subject_id = [];

                    var term_string = [];
                    var session_string = [];
                    var reg_status_string = [];
                    var subject_string = [];
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




                    for(var i = 0; i < subject.length; i++){
                    	console.log(subject_string[i] + "'s ID # is = " + subject_id[i]);
                    }

                
                    //console.log("Session = " + session + "With length = " + session.length);
                    //console.log("Reg_status = " + reg_status + "With length = " + reg_status.length);  
                    var term_map = {term_string, term_id};
                    var session_map = {session_string, session_id};
                    var reg_status_map = {reg_status_string, reg_status_id};
                    var subject_map = {subject_string, subject_id};        

                    var pisa_results = { term_map,session_map,reg_status_map,subject_map };
                    //for (var i = 0; i < items.length; i++) {
                     /*   console.log(" i = " + i);
                        var item = items[i];
                        var mystring = item.getElementsByTagName('td').innerText;
                        console.log("mystring = " + mystring)

                       var dateText = item.getElementsByTagName('strong')[0].innerText;
                        dateText = dateText.replace(/\r?\n|\r/g,'').replace(/\t+/, ' ');

                        var dinner = {
                            Name: item.getElementsByTagName('a')[0].innerText,
                            Date: moment(dateText, 'YYYY-MMM-DDhh:mm A').toDate(),
                            Location: item.innerText.split('at')[1]
                        };

                        dinners.push(dinner);*/
                 //   }

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