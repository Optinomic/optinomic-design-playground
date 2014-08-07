app.controller('MainCtrl', function ($scope, $timeout, $location, app_factory) {



    //inject factory :: app_factory
    $scope.factory_data = app_factory;
    console.log ('$scope.factory_data = ', $scope.factory_data);



    $scope.patient_full = $scope.factory_data.patients[0].lastName + ' ' + $scope.factory_data.patients[0].firstName;
    //console.log ('$scope.patient_full', $scope.patient_full);



});