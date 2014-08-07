app.controller('MainCtrl', function ($scope, $timeout, $location, app_factory) {



    //inject factory :: app_factory
    $scope.selectors = app_factory;
    console.log ('$scope.selectors', $scope.selectors);



});