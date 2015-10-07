(function() {

    angular.module('starter').factory('PisaService', ['$http', '$q', PisaService])


    function PisaService ($http, $q) {

        return {

            login: function (username, password) {
                var request = {
                    method: 'POST',
                    url: 'https://pisa.ucsc.edu/class_search/',

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


                   //var items = tmp.body.getElementsByClassName('PSDROPDOWNLABEL')[0].children;
                   // var items_2 = tmp.getElementsByClassName('PSDROPDOWNLABEL')[0].children;

      
                    console.log("Term = " + term + " With length = " + term.length);

                    var term_id = [];
                    var term_string = [];
                    for(var i = 0; i < term.length; i++){
                        var tmp_term = term[i];
                        term_id.push(tmp_term.value);
                        term_string.push(tmp_term.innerText);
                    }

                    for(var i = 0; i < term.length; i++){
                    	console.log(term_string[i] + "'s ID # is = " + term_id[i]);
                    }

         
                    console.log("Session = " + session + "With length = " + session.length);
                    console.log("Reg_status = " + reg_status + "With length = " + reg_status.length);
                    //console.log("items = " +items + " With length = " + items.length);
                    //console.log("items_2 = " + items_2 + "WIth length = "+ items_2.length);
          

                    var pisa_results = [];
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


                return $http.get('https://pisa.ucsc.edu/class_search/')
                            .then(function(response){
                                return parsePisa(response);
                            });
            }
        }

    }
})();