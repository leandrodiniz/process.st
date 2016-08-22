angular.module('fileUpload').directive('playerVideo', function () {
    return{
        templateUrl: 'view/playerTemplate.html',
        restrict: 'AE',
        replace: true,
        transclude: true,
        scope: {
            hashedid: "@",
            name: "@",
            created: "@"
        },
        controller: function($scope, $http) {
            $http.get('https://api.wistia.com/v1/projects/' + $scope.hashedid + '.json?api_password=b6d2c825e76403e4d536620b1c96f156d59a1fb53db6d55e1feddf64cca396a2').success(function(data) {
                $scope.medias = data.medias;
            });
        }
    };
});