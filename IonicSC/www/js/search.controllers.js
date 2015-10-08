(function() {

	angular.module('starter').controller('SearchController', ['PisaService', SearchController]);

	function SearchController(pisaParser) {
		var vm = this;
        pisaParser.getPisaFields().then(
                function (pisa) {
                    vm.pisa = pisa;
                    console.log(vm.pisa);
                    console.log(vm.pisa.term_string[0]);
                });

        return vm;
	}

})();

