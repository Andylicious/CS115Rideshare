(function() {

	angular.module('starter').controller('SearchController', ['PisaService', SearchController]);

	function SearchController(pisaParser) {
		var vm = this;
        
        pisaParser.getPisaFields().then(
                function (pisa) {
                    vm.pisa = pisa;
                });

        return vm;
	}


})();