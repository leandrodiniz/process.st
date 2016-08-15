angular.module('fileUpload').controller("fileUploadCtrl", function ($scope, $http) {
	$scope.loadVideo = function(){
		$http.get('https://api.wistia.com/v1/projects/gbnr8yhr3h.json?api_password=b6d2c825e76403e4d536620b1c96f156d59a1fb53db6d55e1feddf64cca396a2').success(function(data) {
	        $scope.title = data.name;
	        $scope.videos = data.medias;
	    });
	}
	$scope.loadVideo();
});