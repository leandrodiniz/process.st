angular.module('fileUpload').controller("fileUploadCtrl", function ($scope, $http) {
    $scope.videos = [];
    $scope.projects = [];

    $scope.loadProjects = function(){
        $http.get('https://api.wistia.com/v1/projects.json?api_password=b6d2c825e76403e4d536620b1c96f156d59a1fb53db6d55e1feddf64cca396a2').success(function(data) {
            $scope.data = data;
            angular.forEach($scope.data, function(value, key) {
                $scope.projects.push(value);
            });
        });
    }

    $scope.loadProjects();
});