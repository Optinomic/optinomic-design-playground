app.controller('MainCtrl', function($scope, $timeout, $window, $location, app_factory) {



    //inject factory :: app_factory
    $scope.factory_data = app_factory;
    console.log('$scope.factory_data = ', $scope.factory_data);

    $scope.edit_mode = $scope.factory_data.edit_mode;
    console.log('$scope.edit_mode = ', $scope.edit_mode);

    $scope.patient = $scope.factory_data.patients[0];
    $scope.patient_full = 'Herr ' + $scope.factory_data.patients[0].lastName + ' ' + $scope.factory_data.patients[0].firstName;



    //---------------------------------------------------------
    // FUNCTIONS
    //---------------------------------------------------------

    $scope.toggleEditMode = function() {
        $scope.edit_mode = !$scope.edit_mode;
        console.log('MainCtrl: toggleEditMode: edit_mode = ', $scope.edit_mode);

        $scope.patient = $scope.factory_data.patients[1];
        $scope.patient_full = 'Frau Szirnyi Martina';


        console.log('MainCtrl - location', $location);
        console.log('MainCtrl - absUrl', $location.$$absUrl);


        var current_url = $location.$$absUrl;


        //window.open("/#/refresh", "_self");
        //window.open(current_url, "_self");
    };

    $scope.getEditMode = function() {
        console.log('MainCtrl: getEditMode: edit_mode = ', $scope.edit_mode);
    };

    //---------------------------------------------------------
    // LISTENERS
    //---------------------------------------------------------
    $window.addEventListener('toggle-edit-mode', function(e) {
        $scope.toggleEditMode();
        //console.log(e);
    });



});