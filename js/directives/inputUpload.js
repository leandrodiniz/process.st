angular.module('fileUpload').directive('inputUpload', function () {
    return{
        templateUrl: 'view/inputTemplate.html',
        restrict: 'AE',
        replace: true,
        scope: {
            url: "@"
        },
        controller: function($scope, $http) {
            $('#fileupload').fileupload({
                dataType: 'json',
                url: $scope.url,
                add: function (e, data) {
                    $('.status-content').show();
                    $.each(data.files, function (index, file) {
                        $('.files-name').append('<tr><td>' + file.name + '</td></tr>');
                    });
                    $('button').on('click', function() {
                        data.submit();
                    });
                    console.log($scope);
                },
                done: function (e, data) {
                    $('.btn-status').hide();
                    var response = JSON.parse(data.jqXHR.responseText);
                    $scope.$parent.loadVideo();
                },
                progressall: function (e, data) {
                    var progress = parseInt(data.loaded / data.total * 100, 10);
                    $('.progress-bar').css('width', progress + '%');
                }
            });
        }
    };
});