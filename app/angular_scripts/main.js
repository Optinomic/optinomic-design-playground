var app = angular.module('optinomic', ['ngRoute']);


app.config(function($routeProvider) {

    $routeProvider.
    when('/',{templateUrl: 'partial/home/home.html'}).
	when('/patient/:pid',{templateUrl: 'partial/patients/patients.html'}).

    otherwise({redirectTo:'/'});

});


app.run(function($rootScope) {

	$rootScope.safeApply = function(fn) {
		var phase = $rootScope.$$phase;
		if (phase === '$apply' || phase === '$digest') {
			if (fn && (typeof(fn) === 'function')) {
				fn();
			}
		} else {
			this.$apply(fn);
		}
	};

});