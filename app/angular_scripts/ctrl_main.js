app.controller('MainCtrl', function ($scope, $timeout, $location, app_factory) {



    //inject factory :: app_factory
    $scope.factory_data = app_factory;
    console.log ('$scope.factory_data', $scope.factory_data);



});