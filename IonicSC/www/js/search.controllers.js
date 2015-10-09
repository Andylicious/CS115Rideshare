(function() {

	angular.module('starter').controller('SearchController', ['PisaService', SearchController]);

	function SearchController(pisaParser) {
		var vm = this;
        pisaParser.getPisaFields().then(
                function (pisa) {
                    vm.pisa = pisa;


                    //how to collect the data structure
                   console.log(vm.pisa.term_map);
                   console.log("String: " + vm.pisa.term_map.term_string[0] + " | Value: " + vm.pisa.term_map.term_id[0]);
                   console.log("String: " + vm.pisa.session_map.session_string[1] + " | Value: " + vm.pisa.session_map.session_id[1]);               
                
                  //how to use this information to propagate the search.html page
                  //Bryant, keep a note on how my getElementById matches the ID of the option value in search.html, line 9, do the same for the next few ones
                   var elm = document.getElementById('term_select'),
                   df = document.createDocumentFragment();
                   for (var i = 0; i < vm.pisa.term_map.term_string.length; i++) {
                     var option = document.createElement('option');
                     option.value = i;
                     option.appendChild(document.createTextNode(vm.pisa.term_map.term_string[i]));
                     df.appendChild(option);
                   }
                   elm.appendChild(df);

                   
    });

        return vm;
	}

})();

